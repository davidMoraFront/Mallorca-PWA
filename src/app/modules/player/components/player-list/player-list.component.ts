import { SpinnerService } from './../../../../shared/modules/spinner/services/spinner.service';
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Order } from "src/app/shared/enums/order";
import { Player } from "src/app/shared/interfaces/player";
import { Stadistic } from "src/app/shared/interfaces/stadistic";
import { PlayerService } from "../../services/player.service";
import { Position } from 'src/app/shared/enums/position';
import { ToastService } from 'src/app/shared/modules/toast/services/toast.service';
import { TranslateService } from '@ngx-translate/core';

export class CsvData {
  public id: any;
  public min: any;
  public max: any;
  public score: any;
}

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit, AfterViewInit {
  players: Player[];
  listTitle: string = '';
  positionInList: number = 0;
  id: string = '';
  successUpdateData: string = 'Data updated successfully';
  errorUpdateData: string = 'The data could not be updated';
  errorCsvNotValid: string = 'Please import valid .csv file';

  records: Player[] = [];
  @ViewChild('csvReader') csvReader: any;
  headersRow: string[];

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private playerService: PlayerService, 
    private spinnerService: SpinnerService,
    private toastService: ToastService,
    private translateService: TranslateService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.listTitle = this.router.url.split('/').slice(2).join();
    });

    if (this.listTitle !== 'players') {
      this.playerService.getPlayers().subscribe(res => {
        this.players = res.sort((a, b) => this.compare(a.stadistics.find(el => el.name === this.listTitle ? el : '')!,
          b.stadistics.find(el => el.name === this.listTitle ? el : '')!, Order.DES));
          this.spinnerService.hide();
      });
    } else {
      this.playerService.getPlayers().subscribe(res => {
        const orderEnum = [];
        for (let key in Position) {
          orderEnum.push(key);
        }
        this.players = res.sort((a, b) => this.comparePos(orderEnum.findIndex(key => Position[key] === a.position), 
          orderEnum.findIndex(key => Position[key] === b.position), Order.ASC));
          this.spinnerService.hide();
      });
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.spinnerService.show(), 0);
  }

  compare(a: Stadistic, b: Stadistic, order: string): number {
    return order === Order.ASC ? a.value - b.value : b.value - a.value;
  }

  comparePos(a: number, b: number, order: string): number {
    return order === Order.ASC ? a - b : b - a;
  }

  uploadListener($event: any): void {
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        this.headersRow = this.getHeaderArray(csvRecordsArray);
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, this.headersRow);
        this.records.map(el => this.playerService.updatePlayer(el.id, el));
        this.toastService.showSuccess(this.translateService.instant(this.successUpdateData));
      };

      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };

    } else {
      this.toastService.showError(this.translateService.instant(this.errorCsvNotValid));
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headersRow: string[]) {
    let playerArray: Player[] = [];
    for (let i = 1; i < csvRecordsArray.length; i++) {
      let currentRecord = (csvRecordsArray[i]).split(',');
      if (currentRecord.length === headersRow.length) {
        let player = <Player>{};
        player.id = currentRecord[0].trim();
        player.name = currentRecord[1].trim();
        player.stadistics = [];
        for (let j = 2; j < currentRecord.length; j++) {
          let stadistic: Stadistic = {name: '', value:0};
          stadistic.name = headersRow[j];
          stadistic.value = currentRecord[j];
          player.stadistics.push(stadistic);
        }
        playerArray.push(player);
      }
    }
    return playerArray;
  }

//check etension
  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.records = [];
  }
}

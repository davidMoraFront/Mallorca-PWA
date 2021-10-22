import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { Config } from 'src/app/core/config/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name: string = Config.nameApp;

  constructor(public authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

  cancel() {
    history.back();
  }

  async onLogout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/login']);
    } catch(error) {
      console.log(error);
    }
  }

}

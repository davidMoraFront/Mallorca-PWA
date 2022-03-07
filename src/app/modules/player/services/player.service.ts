import { Player } from './../../../shared/interfaces/player';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private readonly afs: AngularFirestore) {
  }

  createId() {
    return this.afs.createId();
  }

  addPlayer(player: Player, type: string) {
    return this.afs.collection<Player>(type).doc(player.id).set(player);
    // return this.afs.collection<Player>('players').add(player);
  }

  getPlayers(type: string): Observable<Player[]> {
    return this.afs.collection<Player>(type).valueChanges();
  }

  getPlayer(id: string, type: string): Observable<Player | undefined> {
    return this.afs.collection<Player>(type).doc(id).valueChanges();
  }

  updatePlayer(id: string, data: any, type: string) {
    return this.afs.collection<Player>(type).doc(id).update(data);
  }

  deletePlayer(id: string, type: string) {
    return this.afs.collection<Player>(type).doc(id).delete();
  }
}

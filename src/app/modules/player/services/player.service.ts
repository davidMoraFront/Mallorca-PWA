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

  addPlayer(player: Player) {
    return this.afs.collection<Player>('players').doc(player.id).set(player);
    // return this.afs.collection<Player>('players').add(player);
  }

  getPlayers(): Observable<Player[]> {
    return this.afs.collection<Player>('players').valueChanges();
  }

  getPlayer(id: string): Observable<Player | undefined> {
    return this.afs.collection<Player>('players').doc(id).valueChanges();
  }

  updatePlayer(id: string, data: any) {
    return this.afs.collection<Player>('players').doc(id).update(data);
  }

  deletePlayer(id: string) {
    return this.afs.collection<Player>('players').doc(id).delete();
  }
}

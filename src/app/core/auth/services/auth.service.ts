import { Router } from '@angular/router';
import { RoleValidator } from './../helpers/role-validator';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { User } from '../interfaces/user';
import { mergeMap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RoleValidator {
  public user$: Observable<User>;
  private _error = new BehaviorSubject<boolean>(false);
  public readonly isError$ = this._error.asObservable();

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    super();
    this.user$ = this.afAuth.authState.pipe(
      mergeMap((user) => {
        if (user) {
          this.afs.collection<User>('users').doc(user.uid).valueChanges().subscribe(user => localStorage.setItem('role', user.role));
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
   }

  async login(email: string, password: string): Promise<any> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.updateUserData(user);
      return user;
    } catch(error) {
      console.log(error);
      this.show();
    }
  }

  async logout() {
    try {
      const result = await this.afAuth.signOut();
      return result;
    } catch(error) {
      console.log(error);
    }
  }

  async register(email: string, password: string): Promise<any> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendEmailVerification();
      return user;
    } catch(error) {
      console.log(error);
    }
  }

  async googleLoginRegister(): Promise<any> {
    try {
      let user = {};
      await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(credential => {
        user = credential.user;
        if (credential.additionalUserInfo.isNewUser) this.updateUserData(credential.user);
      });
      return user;
    } catch(error) {
      console.log(error);
    }
  }

  async sendEmailVerification(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch(error) {
      console.log(error);
    }
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return await this.afAuth.sendPasswordResetEmail(email);
    } catch(error) {
      console.log(error);
    }
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified
    }
    return userRef.set(data, {merge: true});
  }

  checkUserIsVerified(user: User) {
    if (user && user.emailVerified) {
      this.router.navigate(['']);
    } else if (user) {
      this.router.navigate(['/email-verification']);
    }
  }

  show(): void {
    this._error.next(true);
  }

  hide(): void {
    this._error.next(false);
  }

  getRole(user: User){
    return user.role;
  }
}

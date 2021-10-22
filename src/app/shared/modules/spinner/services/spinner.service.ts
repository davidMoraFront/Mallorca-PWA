import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private _loading = new BehaviorSubject<boolean>(false);
  public readonly isLoading$ = this._loading.asObservable();

  constructor() { }

  show(): void {
    this._loading.next(true);
  }

  hide(): void {
    this._loading.next(false);
  }
}

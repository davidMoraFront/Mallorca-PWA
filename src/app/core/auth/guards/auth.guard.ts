import { AuthService } from 'src/app/core/auth/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.user$.pipe(
      take(1),
      map((user) => user && (this.authService.isAdmin(user) || this.authService.isEditor(user))),
      tap( (canEdit) => {
        if (!canEdit) {
          window.alert('Access denied');
        }
      })
    );
  }
}

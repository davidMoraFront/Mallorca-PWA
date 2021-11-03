import { AuthService } from 'src/app/core/auth/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    // if (localStorage.getItem('role')) {
    //     // logged in so return true
    //     return this.authService.user$.pipe(
    //       take(1),
    //       map((user) => user && (this.authService.isAdmin(user) || this.authService.isEditor(user))),
    //       tap( (canEdit) => {
    //         if (!canEdit) {
    //           window.alert('Access denied');
    //         }
    //       })
    //     );
    // } else {
    //   // not logged in so redirect to login page with the return url
    //   this.router.navigate(['/login']);
    //   return false;
    // }
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

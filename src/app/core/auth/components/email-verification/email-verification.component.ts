import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {
  public user$: Observable<any> = this.authService.afAuth.user;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSendEmail() {
    this.authService.sendEmailVerification();
    this.router.navigate(['/login']);
  }

  goLogin() {
    this.router.navigate(['login']);
  }
}

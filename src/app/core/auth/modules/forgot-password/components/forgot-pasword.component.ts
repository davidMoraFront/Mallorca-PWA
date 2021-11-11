import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-pasword',
  templateUrl: './forgot-pasword.component.html',
  styleUrls: ['./forgot-pasword.component.scss']
})
export class ForgotPaswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['']
    });
  }

  async onResetPassword() {
    try {
      const { email } = this.forgotPasswordForm.value;
      await this.authService.resetPassword(email);
      this.router.navigate(['/login']);
    } catch(error) {
      console.log(error);
    }
  }

  goLogin() {
    this.router.navigate(['login']);
  }

}

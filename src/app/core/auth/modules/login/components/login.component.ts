import { AuthService } from '../../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  isError$: Observable<boolean> = of(false);

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]] 
    });
  }

  async onGoogleLoginRegister() {
    try {
      const user = await this.authService.googleLoginRegister();
      this.authService.checkUserIsVerified(user);
      this.router.navigate(['/competition']);
    } catch(error) {
      console.log(error);
    }
  }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authService.login(email, password);
      user === undefined ? this.isError$ = this.authService.isError$ : '';
      this.authService.checkUserIsVerified(user);
      this.router.navigate(['/list']);
    } catch (error) {
      console.log(error);
    }
  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

}

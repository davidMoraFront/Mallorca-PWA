import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  minLengthPassword: string = 'Mínimo 6 caracteres';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]] 
    });
  }

  async onRegister() {
    const { email, password } = this.registerForm.value;
    try {
      const user = await this.authService.register(email, password);
      this.authService.checkUserIsVerified(user);
    } catch(error) {
      console.log(error);
    }
  }

  async onGoogleLoginRegister() {
    try {
      const user = await this.authService.googleLoginRegister();
      this.authService.checkUserIsVerified(user);
      this.router.navigate(['/list']);
    } catch(error) {
      console.log(error);
    }
  }

}

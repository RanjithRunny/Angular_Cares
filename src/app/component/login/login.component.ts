import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  action: 'login' | 'register' = 'login';
  options: any = ['options1', 'options2', 'options3'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      username:['',Validators.required]
    });
  }

  onSubmit(action: string) {
    if (this.loginForm.valid) {
      if (action === 'login') {
        this.authService
          .login({
            email: this.loginForm.value.email,
            username:this.loginForm.value.username,
            password: this.loginForm.value.password,
          })
          .subscribe({
            next: (res) => {
              console.log('✅ Login successful', res);
             localStorage.setItem('token', res.token); // Store JWT
              this.router.navigate(['/home']);
            },
            error: (err) => {
              console.error(err);
            },
          });
      }
      if (action === 'register') {
        this.authService.register(this.loginForm.value).subscribe({
          next: (res) => {
            alert('User registered successfully');
            this.loginForm.reset();
          },
          error: (err) => {
            alert(err.error);
          },
        });
      }
    } else {
      console.warn('Form is invalid');
    }
  }

  get f() {
    return this.loginForm.controls;
  }
}

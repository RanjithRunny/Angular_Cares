import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  options: any = ['options1', 'options2', 'options3'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      // username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['/home']);
    } else {
      console.warn('Form is invalid');
    }
  }

  get f() {
    return this.loginForm.controls;
  }
}

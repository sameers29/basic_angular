import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: any;
  loginFormSubmitted = false;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.loginFormSubmitted = true;
    this.isLoading = true;
    if (this.loginForm.valid) {
      try {
        const loginUserData = {
          username: this.loginForm.value.email,
          password: this.loginForm.value.password,
        };
        this.authService.login(loginUserData, (response: any) => {
          if (response?.data?.token) {
            this.router.navigate(['/pages']);
          }
          this.isLoading = false;
        });
      } catch (error) {
        this.isLoading = false;
      }
    } else {
      this.isLoading = false;
    }
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }
}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-reset-password-request',
  templateUrl: './reset-password-request.component.html',
  styleUrls: ['./reset-password-request.component.scss'],
})
export class ResetPasswordRequestComponent {
  resetPassRequest: any;
  resetPassRequestSubmitted = false;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.resetPassRequest = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get resetPassRequestControl() {
    return this.resetPassRequest.controls;
  }

  onSubmit() {
    this.resetPassRequestSubmitted = true;
    this.isLoading = true;
    if (this.resetPassRequest.valid) {
      this.authService.resetPasswordRequest(
        this.resetPassRequest.value.email,
        (response: boolean) => {
          if (response) {
            this.router.navigate(['/auth/login']);
          }
          this.isLoading = false;
          this.resetPassRequest.controls['email'].reset();
        }
      );
    } else {
      this.isLoading = false;
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.scss'],
})
export class CreateNewPasswordComponent {
  createNewPassWord: any;
  createNewPassWordSubmitted = false;

  //
  token: any = '';
  email: any = '';
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private activeRoute: ActivatedRoute
  ) {
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    this.email = this.activeRoute.snapshot.paramMap.get('email');
    this.resetPasswordTokenCheck();
  }

  ngOnInit(): void {
    this.createNewPassWord = this.fb.group({
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
          ),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
    });
  }

  get createNewPassWordControl() {
    return this.createNewPassWord.controls;
  }

  onSubmit() {
    this.createNewPassWordSubmitted = true;
    this.isLoading = true;
    if (this.createNewPassWord.valid) {
      const postData = this.createNewPassWord.value;
      this.authService.createPassword(
        postData,
        this.token,
        this.email,
        (response: boolean) => {
          if (response) {
            this.router.navigate(['/auth/login']);
          }
          this.isLoading = false;
        }
      );
    } else {
      this.isLoading = false;
    }
  }

  resetPasswordTokenCheck() {
    this.authService.resetPasswordTokenCheck(
      this.token,
      this.email,
      (response: boolean) => {
        if (!response) {
          this.router.navigate(['/auth/login']);
        }
      }
    );
  }
}

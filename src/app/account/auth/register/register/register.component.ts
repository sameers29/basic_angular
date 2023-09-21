import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/core/password-Match/must-match.validator';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: any;
  registerFormSubmitted = false;
  allData: any;

  isLoading = false;
  roleId: any = '';
  email: any = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {
    const tempRoleId = this.activeRoute.snapshot.paramMap.get('roleId');
    const tempEmail = this.activeRoute.snapshot.paramMap.get('email');
    if (tempRoleId && tempEmail) {
      this.roleId = tempRoleId;
      this.email = tempEmail;
    }
  }

  ngOnInit(): void {
    /**
     * Form Validatyion
     */
    this.registerForm = this.fb.group(
      {
        roleId: [this.roleId, [Validators.required]],
        firstName: ['', [Validators.required]],
        companyLicenseNo: ['', []],
        email: [this.email, [Validators.required, Validators.email]],
        lastName: ['', [Validators.required]],
        agentLicenseNo: ['', []],
        agentCompanyName: ['', [Validators.required]],
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
        mobile: ['', [Validators.required, Validators.pattern(/^\d{6,10}$/)]],
        city: ['Cbe'],
        state: ['TN'],
        zipcode: ['641002'],
        address: ['49, Ram nagar'],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
    if (this.roleId) this.registerForm.get('roleId').disable();
    if (this.email) this.registerForm.get('email').disable();

    // role names
    this.getRoles();
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.registerFormSubmitted = true;
    this.isLoading = true;
    if (this.registerForm.valid) {
      let finalRegisterObj = this.registerForm.value;
      if (this.roleId && this.email) {
        finalRegisterObj = {
          ...finalRegisterObj,
          roleId: this.roleId,
          email: this.email,
        };
      }
      try {
        this.authService.register(finalRegisterObj, (response: boolean) => {
          if (response) {
            this.router.navigate(['/auth/login']);
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

  getRoles() {
    this.authService.getAllRole().subscribe((response) => {
      this.allData = response.data;
      // console.log('this.allData', this.allData);
    });
  }
}

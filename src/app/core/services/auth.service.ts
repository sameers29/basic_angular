import { Injectable } from '@angular/core';
import { restApiService } from './rest-api.service';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, catchError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private apiService: restApiService,
    private tokenServices: TokenService,
    private toastrService: ToastrService
  ) {}

  // login api
  login(postData: any, callBackStatus: any) {
    let inputObj = { url: `${environment.apiURL}/auth/login`, data: postData };
    this.apiService
      .postData(inputObj)
      .pipe(
        catchError((err, caught) => {
          this.toastrService.error(err?.error?.errorMessage);
          callBackStatus(false);
          return EMPTY;
        })
      )
      .subscribe(
        (response) => {
          if (response.data?.token) {
            localStorage.setItem('admin_token', response.data.token);
            localStorage.setItem('admin_data', JSON.stringify(response.data));
            this.toastrService.success(response.message);
            callBackStatus(response);
            return;
          }
          this.toastrService.error(response.message);
          callBackStatus(response);
        },
        (error) => {
          callBackStatus(false);
          this.toastrService.error(
            error.error.errorMessage || 'Something went wrong!'
          );
        }
      );
  }

  // logout api
  logout(data: any, callBackStatus: any) {
    if (this.tokenServices.logout(data)) {
      localStorage.removeItem('login_token');
      localStorage.removeItem('login_data');
      this.toastrService.success('Logout success');
      callBackStatus(true);
    } else {
      this.toastrService.error('Something wrong try again later');
      callBackStatus(false);
      return;
    }
  }

  // roles names api
  getAllRole() {
    let inputObj = { url: `${environment.apiURL}/role` };
    return this.apiService.getData(inputObj);
  }

  // register api
  register(postData: any, callBackStatus: any) {
    let inputObj = {
      url: `${environment.apiURL}/auth/register`,
      data: postData,
    };
    this.apiService.postData(inputObj).subscribe(
      (response) => {
        if (response.success == true) {
          this.toastrService.success(response.message);
          callBackStatus(true);
          return;
        }
        this.toastrService.error(response.message);
        callBackStatus(false);
      },
      (error) => {
        callBackStatus(false);
        this.toastrService.error(
          error.error.errorMessage || 'Something went wrong!'
        );
      }
    );
  }

  // send reset Password Request
  resetPasswordRequest(email: string, callBackStatus: any) {
    this.apiService.resetPasswordRequest(email).subscribe(
      (response) => {
        if (response.success == true) {
          this.toastrService.success(response.message);
          callBackStatus(true);
          return;
        }
        this.toastrService.error(response.message);
        callBackStatus(false);
      },
      (error) => {
        callBackStatus(false);
        this.toastrService.error(
          error.error.errorMessage || 'Something went wrong!'
        );
      }
    );
  }

  // create new password
  createPassword(
    postData: any,
    token: string,
    email: string,
    callBackStatus: any
  ) {
    this.apiService.createPassword(token, email, postData).subscribe(
      (response) => {
        if (response.success == true) {
          this.toastrService.success(response.message);
          callBackStatus(true);
          return;
        }
        this.toastrService.error(response.message);
        callBackStatus(false);
      },
      (error) => {
        callBackStatus(false);
        this.toastrService.error(
          error.error.errorMessage || 'Something went wrong!'
        );
      }
    );
  }

  // reset password token Check
  resetPasswordTokenCheck(token: string, email: string, callBackStatus: any) {
    this.apiService.resetPasswordTokenCheck(token, email).subscribe(
      (response) => {
        if (response.data) {
          this.toastrService.error(response.message);
          callBackStatus(true);
          return;
        }
        this.toastrService.error(response.message);
        callBackStatus(false);
      },
      (error) => {
        callBackStatus(false);
        this.toastrService.error(
          error.error.errorMessage || 'Something went wrong!'
        );
      }
    );
  }

  //
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class restApiService {
  headers: any;
  constructor(
    private httpClient: HttpClient,
    private tokenServices: TokenService
  ) {}
  getHeader(data: string = 'admin') {
    return (this.headers = this.tokenServices.getAuthHeader(data));
  }

  postData(inputObj: any) {
    return this.httpClient.post<any>(inputObj.url, inputObj.data, {
      headers: this.getHeader(),
    });
  }
  getData(inputObj: any) {
    return this.httpClient.get<any>(inputObj.url, {
      headers: this.getHeader(),
    });
  }

  // password api's
  resetPasswordRequest(email: string) {
    return this.httpClient.get<any>(
      `${environment.apiURL}/auth/password/request/${email}`
    );
  }

  createPassword(token: string, email: string, postData: any) {
    return this.httpClient.post<any>(
      `${environment.apiURL}/auth/password/reset`,
      { ...postData, token, email }
    );
  }

  resetPasswordTokenCheck(token: string, email: string) {
    return this.httpClient.post<any>(
      `${environment.apiURL}/auth/password/token/check`,
      { email, token }
    );
  }
}

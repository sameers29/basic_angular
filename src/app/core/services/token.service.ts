import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TokenService {
  constructor() {}

  AdminLoggedIn() {
    const token = localStorage.getItem('admin_token');
    return token && token.length > 0;
  }

  getAuthHeader(data: string) {
    let headers;
    if (data === 'admin') {
      let token = localStorage.getItem('admin_token');
      headers = new HttpHeaders().set('authorization', '' + token);
    }
    return headers;
  }

  // currentUserMenuList(): void {
  //   const user = this.getJsonValue("admin_data");
  //   if (user) {
  //     const parsed = JSON.parse(user);
  //     const menuListItems = parsed.menuListItems;
  //     this.menuListItems = menuListItems;
  //     //   console.log("currentusersData", this.currentusersData);
  //   }
  // }

  // useData(data: string) {
  //   let userData;
  //   if (data === 'admin') {
  //     userData = localStorage.getItem('admin_data');
  //   }
  //   return userData ? JSON.parse(userData) : userData;
  // }

  logout(data: string) {
    let userData;
    if (data === 'admin') {
      userData = localStorage.getItem('admin_data');
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_data');
    }
    return true;
  }
}

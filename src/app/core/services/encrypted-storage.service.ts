// import { Injectable } from '@angular/core';
// // @ts-ignore
// import SecureStorage from 'secure-web-storage';
// // @ts-ignore
// import CryptoJS from 'crypto-js';

// // import { environment } from 'src/environments/environment';
// // const SECRET_KEY = environment.encSecret;

// const SECRET_KEY = 'techcedence_secret';
// // @ts-ignore  used for import throwing ts error. this line to ingnore the typeScript error.
// @Injectable({
//   providedIn: 'root',
// })
// export class EncryptedStorageService {
//   constructor() {
//     console.log('secureStorage', this.secureStorage);
//   }

//   public secureStorage = new SecureStorage(localStorage, {
//     hash: function hash(key: any): any {
//       key = CryptoJS.SHA256(key, SECRET_KEY);
//       return key.toString();
//     },
//     encrypt: function encrypt(data: any) {
//       data = CryptoJS.AES.encrypt(data, SECRET_KEY);
//       data = data.toString();
//       return data;
//     },
//     decrypt: function decrypt(data: any) {
//       data = CryptoJS.Aes.decrypt(data, SECRET_KEY);
//       data = data.toString(CryptoJS.enc.Utf8);
//       return data;
//     },
//   });
// }

import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: false,
  appTitle: 'Angular_basics',
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  }),

  apiURL: 'http://opensource.techcedence.net:3002/api',
  baseUrl: 'http://localhost:4200/',
  // encSecret: 'techcedence_secret',
};

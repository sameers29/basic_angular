import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { restApiService } from '../services/rest-api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenService: TokenService,
    private apiService: restApiService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.tokenService.AdminLoggedIn()) {
      return true;
    } else {
      // User is not authenticated, redirect to login page
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}

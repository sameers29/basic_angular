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
export class UnAuthGuard implements CanActivate {
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
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}

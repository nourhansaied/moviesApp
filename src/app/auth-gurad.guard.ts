import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuradGuard implements CanActivate {
  
  constructor(private _authService: AuthService, private _router : Router) {
    
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    console.log(this._authService.currentUser.getValue() )
    if (this._authService.currentUser.getValue() != null) {
      return true;
    } else {
      this._router.navigate(['login'])
      return false;
    }
   
  }
  
}

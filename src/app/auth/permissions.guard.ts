import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
// export class PermissionsGuard implements CanActivate { ==>can be used for Parent and CHild
 export class PermissionsGuard implements CanActivateChild {
  constructor(private auth: AuthService) {}
  
  canActivateChild(
    // childRoute: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
    ):
    | boolean 
    | UrlTree 
    | Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> {
      console.log('..I am checking Permissions')
       return this.auth.haspermissions();
  }

  // canActivate():
  //   | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree>
  //   | boolean
  //   | UrlTree {
  //     console.log('..I am checking Permissions')
  //   return this.auth.haspermissions();
  // }
}

// route: ActivatedRouteSnapshot, it removed because ==>we are using canActive for Child <==
//     state: RouterStateSnapshot

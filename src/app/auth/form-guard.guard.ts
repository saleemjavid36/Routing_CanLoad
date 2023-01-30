import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddProductComponent } from '../admin/add-product/add-product.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuardGuard implements CanDeactivate<AddProductComponent> {
  canDeactivate(
    component: AddProductComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(component.form.dirty){
        if(confirm('Are you sure?')){
          return true
        }else{
          return false
        }
      }
      return true;
  }
  
}

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddProductComponent } from '../admin/add-product/add-product.component';
import { ConfirmDialogueComponent } from '../admin/confirm-dialogue/confirm-dialogue.component';
import { SafeData } from './save-data.interface';

@Injectable({
  providedIn: 'root'
})
// AddProductComponent
export class FormGuardGuard implements CanDeactivate<SafeData> {
  
  constructor(private dialogue:MatDialog){}
  canDeactivate(
    component: SafeData,
    // currentRoute: ActivatedRouteSnapshot,
    // currentState: RouterStateSnapshot,
    // nextState?: RouterStateSnapshot
    ): 
    |Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean 
    | UrlTree {
      if(!component.isDataSaved()){
        // if(confirm('Are you sure?')){
        //   return true
        // }else{
        //   return false
        // }
        const dialogRef=this.dialogue.open(ConfirmDialogueComponent)
        return dialogRef.afterClosed()
      }
      return of(true);
  }
  
}
// Here Cancel Button is Not Working fix the bug

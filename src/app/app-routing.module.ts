import { AddProductComponent } from './admin/add-product/add-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './admin/welcome/welcome.component';
// import { AuthPreloadStrategy } from './auth/auth-preload-strategy';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AuthenticationGuard } from './auth/authentication.guard';
import { PermissionsGuard } from './auth/permissions.guard';
import { ListComponent } from './admin/list/list.component';
import { FormGuardGuard } from './auth/form-guard.guard';

// const routes: Routes = [
//   {
//     path: 'admin',
//     loadChildren: () =>
//       import('./admin/admin.module').then((m) => m.AdminModule),
//   },
//   {
//     path: '',
//     component: HomeComponent,
//   },
// ];

const routes: Routes = [
  {
    path: 'admin',
    component: WelcomeComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path:'',
        canActivateChild:[PermissionsGuard],
        children:[
          { 
            path: 'add-user', 
            component: AddUserComponent,
            canDeactivate:[FormGuardGuard]  
          },
          { 
            path: 'add-product', 
            component: AddProductComponent,
            canDeactivate:[FormGuardGuard] 
          },
        ]
      },
      {path:'list',component:ListComponent}
    ],
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  // imports: [
  //   RouterModule.forRoot(routes, {
  //     preloadingStrategy: AuthPreloadStrategy,
  //   }),
  // ],
  // exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

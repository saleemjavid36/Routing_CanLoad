import { AddProductComponent } from './admin/add-product/add-product.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './admin/welcome/welcome.component';
// import { AuthPreloadStrategy } from './auth/auth-preload-strategy';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AuthenticationGuard } from './auth/authentication.guard';
import { PermissionsGuard } from './auth/permissions.guard';
import { ListComponent } from './admin/list/list.component';
import { FormGuardGuard } from './auth/form-guard.guard';
import { LoadGuardGuard } from './auth/load-guard.guard';
import { AuthPreloadStrategy } from './auth/auth-preload-strategy';

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
    loadChildren:()=>
    import('./admin/admin.module').then((m)=>m.AdminModule),
    // canActivate: [AuthenticationGuard],
    canLoad:[LoadGuardGuard]
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports:[
    RouterModule.forRoot(routes,{
      preloadingStrategy:AuthPreloadStrategy
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// imports: [
//   RouterModule.forRoot(routes, {
//     preloadingStrategy: AuthPreloadStrategy,
//   }),
// ],
// exports: [RouterModule],
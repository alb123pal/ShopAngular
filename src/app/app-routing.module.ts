import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginShopComponentComponent } from './components/login-shop-component/login-shop-component.component';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';
import { ProductDetailsComponentComponent } from './components/product-details-component/product-details-component.component';
import { ErrorPageComponentComponent } from './components/error-page-component/error-page-component.component';
import { ErrorServerComponentComponent } from './components/error-server-component/error-server-component.component';

import { ProductListCainActivateGuard } from './components/services/product-list-can-activate-guard';
import { LoginCanActivateGuard } from './components/services/login-can-activate-guard';
import { ProductDeatilsCainActivateGuard } from './components/services/product-details-can-activate-guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginShopComponentComponent,
    canActivate: [LoginCanActivateGuard]
  },
  {
    path: 'lists',
    component: ProductListComponentComponent,
    canActivate: [ProductListCainActivateGuard]
  },
  {
    path: 'details',
    component: ProductDetailsComponentComponent,
    canActivate: [ProductDeatilsCainActivateGuard]
  },
  {
    path: 'error',
    component: ErrorPageComponentComponent
  },
  {
    path: 'server-error',
    component: ErrorServerComponentComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/error',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

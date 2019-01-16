import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginShopComponent } from './components/login-shop/login-shop.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ErrorServerComponent } from './components/error-server/error-server.component';

import { ProductListCainActivateGuard } from './services/product-list-can-activate-guard';
import { LoginCanActivateGuard } from './services/login-can-activate-guard';
import { ProductDeatilsCainActivateGuard } from './services/product-details-can-activate-guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginShopComponent,
    canActivate: [LoginCanActivateGuard]
  },
  {
    path: 'lists',
    component: ProductListComponent,
    canActivate: [ProductListCainActivateGuard]
  },
  {
    path: 'details',
    component: ProductDetailsComponent,
    canActivate: [ProductDeatilsCainActivateGuard]
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: 'server-error',
    component: ErrorServerComponent
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

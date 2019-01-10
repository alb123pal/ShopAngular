import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginShopComponentComponent } from './components/login-shop/login-shop.component';
import { ProductListComponentComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponentComponent } from './components/product-details/product-details.component';
import { ErrorPageComponentComponent } from './components/error-page/error-page.component';
import { ErrorServerComponentComponent } from './components/error-server/error-server.component';

import { ProductListCainActivateGuard } from './services/product-list-can-activate-guard';
import { LoginCanActivateGuard } from './services/login-can-activate-guard';
import { ProductDeatilsCainActivateGuard } from './services/product-details-can-activate-guard';

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

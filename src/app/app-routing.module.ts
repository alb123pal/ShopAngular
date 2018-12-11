import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginShopComponentComponent } from './components/login-shop-component/login-shop-component.component';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';

const routes: Routes = [
  { path: 'list', component: ProductListComponentComponent },
  { path: 'login', component: LoginShopComponentComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

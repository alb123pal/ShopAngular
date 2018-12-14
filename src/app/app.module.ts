import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './components/services/interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginShopComponentComponent } from './components/login-shop-component/login-shop-component.component';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';
import { ProductFilterPipe } from './components/product-list-component/product-filter.pipe';
import { ProductDetailsComponentComponent } from './components/product-details-component/product-details-component.component';
import { ErrorPageComponentComponent } from './components/error-page-component/error-page-component.component';
import { ErrorServerComponentComponent } from './components/error-server-component/error-server-component.component';

import { UserService } from './components/services/user.service';
import { ProductListCanActivateGuard } from './components/services/product-list-can-activate-guard';
import { LoginCanActivateGuard } from './components/services/login-can-activate-guard';
import { ProductDetailCanActivateGuard } from './components/services/product-detail-can-activate-guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginShopComponentComponent,
    ProductListComponentComponent,
    ProductDetailsComponentComponent,
    ErrorPageComponentComponent,
    ErrorServerComponentComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  UserService,
  ProductListCanActivateGuard,
  LoginCanActivateGuard,
  ProductDetailCanActivateGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }

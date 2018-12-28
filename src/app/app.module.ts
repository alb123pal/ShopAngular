import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './components/services/interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginShopComponentComponent } from './components/login-shop/login-shop.component';
import { ProductListComponentComponent } from './components/product-list/product-list.component';
import { ProductFilterPipe } from './components/product-list/product-filter.pipe';
import { ProductDetailsComponentComponent } from './components/product-details/product-details.component';
import { ErrorPageComponentComponent } from './components/error-page/error-page.component';
import { ErrorServerComponentComponent } from './components/error-server/error-server.component';

import { UserService } from './components/services/user.service';
import { ProductListCainActivateGuard } from './components/services/product-list-can-activate-guard';
import { DataService } from './components/services/product-data.service';
import { LoginCanActivateGuard } from './components/services/login-can-activate-guard';
import { ProductDeatilsCainActivateGuard } from './components/services/product-details-can-activate-guard';

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
  ProductListCainActivateGuard,
  ProductDeatilsCainActivateGuard,
  DataService,
  LoginCanActivateGuard,
],
  bootstrap: [AppComponent]
})
export class AppModule { }

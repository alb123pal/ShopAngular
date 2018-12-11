import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginShopComponentComponent } from './components/login-shop-component/login-shop-component.component';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';

import { UserService } from './components/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginShopComponentComponent,
    ProductListComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

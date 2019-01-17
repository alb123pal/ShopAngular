import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginShopComponent } from './components/login-shop/login-shop.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFilterPipe } from './components/product-list/product-filter.pipe';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ErrorPageComponent} from './components/error-page/error-page.component';
import { ErrorServerComponent } from './components/error-server/error-server.component';

import { UserService } from './services/user.service';
import { ProductListCainActivateGuard } from './services/product-list-can-activate-guard';
import { DataService } from './services/product-data.service';
import { LoginCanActivateGuard } from './services/login-can-activate-guard';
import { ProductDeatilsCainActivateGuard } from './services/product-details-can-activate-guard';
import { InputFormComponent } from './components/form-components/input-login/input-login.component';
import { InputPasswordComponent } from './components/form-components/input-password/input-password.component';
import { ButtonComponent } from './components/form-components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/form-components/input/input.component';
import { CheckboxGroupComponent } from './components/form-components/checkbox-group/checkbox-group.component';
import { DropdownComponent } from './components/form-components/dropdown/dropdown.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProductDetailsAdminEditComponent } from './components/product-details-admin-edit/product-details-admin-edit.component';
import { PanelStarsComponent } from './components/panel-stars/panel-stars.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginShopComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ErrorPageComponent,
    ErrorServerComponent,
    ProductFilterPipe,
    InputFormComponent,
    InputPasswordComponent,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    InputComponent,
    CheckboxGroupComponent,
    DropdownComponent,
    ProductItemComponent,
    PaginationComponent,
    ProductDetailsAdminEditComponent,
    PanelStarsComponent,
    ProductPriceComponent
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

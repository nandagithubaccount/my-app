import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './componets/login/login.component';
import { IssuerListComponent } from './componets/isser/issuer-list/issuer-list.component';
import { CustomerListComponent } from './componets/customer/customer-list/customer-list.component';
import { CustomerRegComponent } from './componets/customer/customer-reg/customer-reg.component';
import { IssuerRegComponent } from './componets/isser/issuer-reg/issuer-reg.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, IssuerRegComponent, IssuerListComponent, CustomerListComponent, CustomerRegComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteConstants } from './shared/constants/constants';
import { LoginComponent } from './componets/login/login.component';
import { IssuerListComponent } from './componets/isser/issuer-list/issuer-list.component';
import { IssuerRegComponent } from './componets/isser/issuer-reg/issuer-reg.component';
import { CustomerListComponent } from './componets/customer/customer-list/customer-list.component';
import { CustomerRegComponent } from './componets/customer/customer-reg/customer-reg.component';
import { CustomerBalComponent } from './componets/customer/customer-bal/customer-bal.component';

const routes: Routes = [
  { path: '', redirectTo: RouteConstants.LOGIN, pathMatch: 'full' },
  { path: RouteConstants.LOGIN, component: LoginComponent },
  { path: RouteConstants.ISSUER_LIST, component: IssuerListComponent },
  { path: RouteConstants.ISSUER_REG, component: IssuerRegComponent },
  { path: RouteConstants.CUSTOMER_LIST, component: CustomerListComponent },
  { path: RouteConstants.CUSTOMER_REG, component: CustomerRegComponent },
  { path: RouteConstants.CUSTOMER_BAL, component: CustomerBalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

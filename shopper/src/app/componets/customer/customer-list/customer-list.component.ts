import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from '../../../shared/constants/constants';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  addCustomer() {
    this.router.navigate([RouteConstants.CUSTOMER_REG])
  }
  addBalance() {
    this.router.navigate([RouteConstants.CUSTOMER_BAL])
  }
}

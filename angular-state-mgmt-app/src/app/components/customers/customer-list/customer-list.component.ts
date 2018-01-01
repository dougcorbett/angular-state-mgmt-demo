import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerService } from '../../../services/customer.service';

import { Customer, Order } from '../../../models/Customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers:Array<Customer>;

  constructor(
    private customerService: CustomerService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }

}

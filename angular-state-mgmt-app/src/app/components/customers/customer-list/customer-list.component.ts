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

  customers:Array<Customer> = this.customerService.getCustomers();

  constructor(
    private customerService: CustomerService, 
    private router: Router
  ) { }

  ngOnInit() {

  }

  addCustomerClick() {
console.log("addCustomerClick");
    var customer = {
      id: 0,
      firstName: "Patrick",
      lastName: "Starr",
      orders: [
        { id: 1,
          orderDate: new Date(),
          lineItems: [
            { id: 1, productNumber: 'aaa', productDescription: 'ssss', quantity: 3, itemCost: 12.11, totalCost: 45.33 },
            { id: 1, productNumber: 'ccc', productDescription: 'ffff', quantity: 1, itemCost: 12.11, totalCost: 145.33 }
          ],
          totalCost: 2001.03,
          tax: 200.01,
          discount:5.00,
          orderTotal: 300.00
        }
      ]
    }
console.log(customer);
    this.customerService.addCustomer(customer);
    this.customers = this.customerService.getCustomers();
  }

}

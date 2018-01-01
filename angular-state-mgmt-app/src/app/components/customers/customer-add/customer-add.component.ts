import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router"

import { CustomerService } from '../../../services/customer.service';

import { Customer, Order } from '../../../models/Customer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customer = {
    id: 0,
    firstName: "Patrick",
    lastName: "Starr",
    orders: [
      { id: 1,
        orderDate: new Date(),
        lineItems: [
          { id: 1, productNumber: 'aaa', productDescription: 'ssss', quantity: 3, itemCost: 12.11, totalCost: 45.33 },
          { id: 2, productNumber: 'ccc', productDescription: 'ffff', quantity: 1, itemCost: 12.11, totalCost: 145.33 }
        ],
        totalCost: 2001.03,
        tax: 200.01,
        discount:5.00,
        orderTotal: 300.00
      }
    ]
  }

  constructor(
    private customerService: CustomerService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  addCustomerClick() {
    console.log("addCustomerClick");
    console.log(this.customer);
    this.customerService.addCustomer(this.customer);
    this.router.navigate(['customers']);
  }
}

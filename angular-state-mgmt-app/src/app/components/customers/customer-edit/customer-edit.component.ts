import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router"

import { CustomerService } from '../../../services/customer.service';

import { Customer, Order } from '../../../models/Customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer;

  changes = {
    firstName: "Franklin"
  }

  constructor(
    private customerService:CustomerService,
    private route:ActivatedRoute, 
    private router:Router
  ) { }

  ngOnInit() {
    console.log("initialize");
    this.route.params.subscribe((params:Params) => {
      console.log("params.id", params.id);
      this.customer = this.customerService.getCustomer(params.id);
    });
  }


  saveCustomerClick() {
    let changes = {
      firstName: "Franklin"
    }
    console.log("saveCustomerClick");
    console.log(this.changes);
    this.customerService.updateCustomer(this.customer.id, this.changes);
    this.router.navigate(['customers']);
  }

}

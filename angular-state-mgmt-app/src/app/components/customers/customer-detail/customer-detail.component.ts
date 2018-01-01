import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router"

import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer;

  constructor(
    private customerService:CustomerService,
    private route:ActivatedRoute, 
    private router:Router
  ) { 
    console.log("constructor");
  }

  ngOnInit() {
    console.log("initialize");
    this.route.params.subscribe((params:Params) => {
      console.log("params.id", params.id);
      this.customer = this.customerService.getCustomer(params.id);
    });
  }

  delete(id:number) {
    if(confirm("Are you sure you want to delete " + this.customer.firstName + " " + this.customer.lastName + "?")){
      this.customerService.removeCustomer(id);
      this.router.navigate(['customers']);
    }
  }
}

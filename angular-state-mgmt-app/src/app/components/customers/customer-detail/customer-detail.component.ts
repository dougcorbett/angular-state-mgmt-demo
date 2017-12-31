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
    public customerService:CustomerService,
    private route:ActivatedRoute, 
    private router:Router
  ) { 
    this.route.params.subscribe((params:Params) => {
      this.customer = customerService.getCustomer(params.id);
    });
  }

  ngOnInit() {
  }

  delete(id:number) {
    if(confirm("Are you sure you want to delete " + this.customer.firstName + " " + this.customer.lastName + "?")){
      this.customerService.removeCustomer(id);
      this.router.navigate(['customers']);
    }
  }
}

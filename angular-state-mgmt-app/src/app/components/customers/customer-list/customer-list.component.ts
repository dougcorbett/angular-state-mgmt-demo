import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers = this.customerService.getAllCustomers();

  constructor(private customerService: CustomerService) 
  { 

  }

  ngOnInit() {
  }

}

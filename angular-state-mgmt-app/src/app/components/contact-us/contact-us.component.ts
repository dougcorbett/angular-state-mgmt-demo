import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

import { Customer } from '../../models/Customer'
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  customers: Array<Customer>;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }

}

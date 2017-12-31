import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/customer';

@Component({
  selector: 'app-seed-data',
  templateUrl: './seed-data.component.html',
  styleUrls: ['./seed-data.component.css']
})
export class SeedDataComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    
  }

  seedCustomers() {
    console.log('seeding');
    this.customerService.seedCustomers();
    console.log(this.customerService);
  }

}

import { Component, OnInit, Input } from '@angular/core';

import { Order } from '../../../../models/Customer'

@Component({
  selector: 'app-customer-order-list',
  templateUrl: './customer-order-list.component.html',
  styleUrls: ['./customer-order-list.component.css']
})
export class CustomerOrderListComponent implements OnInit {

  @Input() orders: Array<Order>;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Order } from '../../../../models/Customer'

@Component({
  selector: 'app-customer-order-list',
  templateUrl: './customer-order-list.component.html',
  styleUrls: ['./customer-order-list.component.css']
})
export class CustomerOrderListComponent implements OnInit {

  @Input() orders: Array<Order>;
  @Output() qtyChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleIncreaseQtyClicked(orderId, data) {
    data.orderId = orderId;
    console.log("handleIncreaseQtyClicked data", data)
    data.newValue = data.currentValue + 1;
    console.log("handleIncreaseQtyClicked", data)
    this.qtyChanged.emit(data);
  }

  handleDecreaseQtyClicked(orderId, data) {
    data.orderId = orderId
    if (data.currentValue > 1) { 
      data.newValue = data.currentValue - 1 
    } else {
      data.newValue = 1;
    }
    console.log("handleDecreaseQtyClicked", data)
    this.qtyChanged.emit(data);
  }

}

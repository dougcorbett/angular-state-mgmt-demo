import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Order } from '../../../../models/Customer'

@Component({
  selector: 'app-customer-order-detail',
  templateUrl: './customer-order-detail.component.html',
  styleUrls: ['./customer-order-detail.component.css']
})
export class CustomerOrderDetailComponent implements OnInit {

  @Input() order: Order;
  @Output() increaseQtyClicked = new EventEmitter();
  @Output() decreaseQtyClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increaseQty(lineitemId: number, currentValue: number) {
    let data = {
      'lineitemId': lineitemId,
      'currentValue': currentValue
    };
    this.increaseQtyClicked.emit(data)
  }

  decreaseQty(lineitemId: number, currentValue: number) {
    let data = {
      'lineitemId': lineitemId,
      'currentValue': currentValue
    };
    this.decreaseQtyClicked.emit(data)
  }

}

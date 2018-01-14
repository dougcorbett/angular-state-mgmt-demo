import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../../store';
import { INCREMENT } from  '../../../actions';

@Component({
  selector: 'app-customer-redux-list',
  templateUrl: './customer-redux-list.component.html',
  styleUrls: ['./customer-redux-list.component.css']
})
export class CustomerReduxListComponent implements OnInit {

  @select() counter;

  constructor(private ngRedux: NgRedux<IAppState>) {
    // ngRedux.subscribe(() => {
    //   console.log(ngRedux.getState());
    // })
  }

  ngOnInit() {
  }

  increment() {
    //this.counter++;
    this.ngRedux.dispatch({ type: INCREMENT })
  }


}

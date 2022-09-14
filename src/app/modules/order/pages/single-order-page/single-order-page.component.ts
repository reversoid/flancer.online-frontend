import { Component, OnInit } from '@angular/core';
import { Order } from '../orders-page/orders-page.component';

@Component({
  selector: 'app-single-order-page',
  templateUrl: './single-order-page.component.html',
  styleUrls: ['./single-order-page.component.scss'],
})
export class SingleOrderPageComponent implements OnInit {
  public order?: Order;

  ngOnInit() {
    // TODO IF WINDOW.HISTORY.STATE.ORDER ? THEN ASSIGN; ELSE MAKE API CALL
    this.order = window.history.state.order;
  }
}

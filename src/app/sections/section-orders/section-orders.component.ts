import { Order } from './../../shared/order';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.scss']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    { id: 1,
      customer: { id: 1, name: 'samuel', state: 'CO', email: 'femmy4lov@gmail.com'},
      total: 230, placed: new Date(2019, 1, 1),  fulfilled: new Date(2019, 2, 1), status: 'Completed'},
    { id: 2,
      customer: { id: 1, name: 'samuel', state: 'CO', email: 'femmy4lov@gmail.com'},
       total: 230, placed: new Date(2019,1,1),  fulfilled: new Date(2019,2,1), status: 'Completed'},
    { id: 3,
      customer: { id: 1, name: 'samuel', state: 'CO', email: 'femmy4lov@gmail.com'},
      total: 230, placed: new Date(2019,1,1),  fulfilled: new Date(2019,2,1), status: 'Completed'},
    { id: 4,
      customer: { id: 1, name: 'samuel', state: 'CO', email: 'femmy4lov@gmail.com'},
      total: 230, placed: new Date(2019,1,1),  fulfilled: new Date(2019,2,1), status: 'Completed'},
    { id: 5,
      customer: { id: 1, name: 'samuel', state: 'CO', email: 'femmy4lov@gmail.com'},
      total: 230, placed: new Date(2019,1,1),  fulfilled: new Date(2019,2,1), status: 'Completed'},
    { id: 6,
      customer: { id: 1, name: 'samuel', state: 'CO', email: 'femmy4lov@gmail.com'},
      total: 230, placed: new Date(2019,1,1),  fulfilled: new Date(2019,2,1), status: 'Completed'},
    { id: 7,
      customer: { id: 1, name: 'samuel', state: 'CO', email: 'femmy4lov@gmail.com'},
      total: 230, placed: new Date(2019,1,1),  fulfilled: new Date(2019,2,1), status: 'Completed'},
    { id: 8,
      customer: { id: 1, name: 'samuel', state: 'CO', email: 'femmy4lov@gmail.com'},
      total: 230, placed: new Date(2019,1,1),  fulfilled: new Date(2019,2,1), status: 'Completed'},
    { id: 9,
      customer: { id: 1, name: 'samuel', state: 'CO', email: 'femmy4lov@gmail.com'},
      total: 230, placed: new Date(2019,1,1),  fulfilled: new Date(2019,2,1), status: 'Completed'},
    { id: 10,
      customer: { id: 1, name: 'samuel', state: 'CO', email: 'femmy4lov@gmail.com'},
      total: 230, placed: new Date(2019,1,1),  fulfilled: new Date(2019,2,1), status: 'Completed'},
    { id: 11,
      customer: { id: 1, name: 'samuel', state: 'CO', email: 'femmy4lov@gmail.com'},
      total: 230, placed: new Date(2019,1,1),  fulfilled: new Date(2019,2,1), status: 'Completed'},
  ];

  ngOnInit() {
  }

}

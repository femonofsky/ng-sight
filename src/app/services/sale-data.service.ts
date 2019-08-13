import { Injectable } from '@angular/core';
// import {Http } from '@angular/http';
import { HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';


@Injectable()
export class SaleDataService {
  baseUrl = 'http://localhost:5000/api/order/';
  constructor(private _http: HttpClient) {}

  getOrders(pageIndex: number, pageSize: number) {
    return this._http.get( this.baseUrl + pageIndex + '/' + pageSize);
  }

  getOrdersByCustomer(n: number) {
    return this._http.get( this.baseUrl + 'ByCustomer' + '/' + n);
  }

  getOrdersByState() {
    return this._http.get( this.baseUrl + 'ByState');
  }
}


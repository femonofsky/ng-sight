import { SaleDataService } from './../../services/sale-data.service';
import { Order } from './../../shared/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  providers: [
    SaleDataService // added class in the providers
  ],
  styleUrls: ['./section-orders.component.scss']
})
export class SectionOrdersComponent implements OnInit {

  constructor(private _saleData: SaleDataService) { }

  orders: Order[] = [];
  total = 0;
  page = 1;
  limit = 10;
  loading: boolean =  true;
  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this._saleData.getOrders(this.page, this.limit)
      .subscribe( res => {
        console.log(res);
        this.orders = res["page"]["data"];
        this.total = res["page"]["total"];
        this.loading = false;
      });
  }

  goToPrevious(): void {
    this.page--;
    this.getOrders();
  }

  goToNext(): void {
    this.page++;
    this.getOrders();
  }

  goToPage(n: number): void {
    this.page = n;
    this.getOrders();
  }

}

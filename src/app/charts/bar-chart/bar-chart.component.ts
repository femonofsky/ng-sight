import { SaleDataService } from './../../services/sale-data.service';
import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor(private _saleDataService: SaleDataService) { }

  orders: any[];
  orderLabel: string[];
  orderData: number[];
  public barChartData: any[];
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  ngOnInit() {
    this._saleDataService.getOrders(1, 100)
      .subscribe( res => {
        const localChartData = this.getChartData(res);
        this.barChartLabels = localChartData.map(x => x[0]).reverse();
        this.barChartData = [{ 'data' : localChartData.map(x => x[1]), 'label': 'Sales'  }];

      });
  }

  getChartData(res) {
    this.orders = res['page']['data']
    const data = this.orders.map( o => o.total);
    const label = this.orders.map(p => moment(new Date(p.placed)).format('YY-MM-DD'));

    const FormattedOrder = this.orders.reduce((r, e) => {
      r.push([moment(e.placed).format('YY-MM-DD'), e.total]);
      return r;
    }, []);

    const p = {};
    const chartData = FormattedOrder.reduce((r,e) => {
      const key = e[0];
      if (!p[key]) {
        p[key] = e;
        r.push(p[key]);
      } else {
        p[key][1] += e[1];
      }
      return r;
    }, []);

    return chartData;
  }

}

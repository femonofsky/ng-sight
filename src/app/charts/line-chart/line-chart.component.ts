import { map } from 'rxjs/operators';
import { SaleDataService } from './../../services/sale-data.service';
import { LINE_CHART_COLORS } from './../../shared/chart.colors';
import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import * as moment from 'moment';

//  const SAMPLE_LINE_CHART_DATA:any[] = [
//   { data: [ 32, 14, 46, 23, 38, 56], label: 'Sentiment Analysis'},
//   { data: [ 65, 59, 80, 81, 56, 54], label: 'Image Recognition'},
//   { data: [ 12, 34, 49, 53, 68, 62], label: 'Forecasting'}
// ];

// const SAMPLE_LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor(private _saleDataService: SaleDataService) { }

  topCustomers: string[];
  allOrders: any[];

  public lineChartData: any[];
  public lineChartLabels: string[];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartOptions: any = {
    // scaleShowVerticalLines: false,
    responsive: true
  }

  public lineChartColors = LINE_CHART_COLORS;
  ngOnInit() {
    this._saleDataService.getOrders(1, 100).subscribe( res => {
      this.allOrders = res['page']['data'];

      this._saleDataService.getOrdersByCustomer(3).subscribe( cus => {
          this.topCustomers = _.values(cus).map((x) => x['customer']);

          const allCharData = this.topCustomers.reduce((results, i) => {
              results.push(this.getChartData(this.allOrders, i ));
              return results;
          }, []);

          let dates = allCharData.map(x => x['data']).reduce((a, i) => {
             a.push(i.map( o => new Date(o[0])));
             return a;
          }, []);

          dates = [].concat.apply([], dates);

          const r = this.getCustomerOrdersByDate(allCharData, dates)['date'];
          console.log('r', r);

          this.lineChartLabels = r[0]['order'].map( o => o['date']).reverse();
          this.lineChartData = [
            {'data': r[0]['order'].map(x => x['total']), 'label': r[0]['customer']},
            {'data': r[1]['order'].map(x => x['total']), 'label': r[1]['customer']},
            {'data': r[2]['order'].map(x => x['total']), 'label': r[2]['customer']},
          ]
      });
    });
  }

  getChartData(allOrders: any, name: string ) {
    const customerOrders = allOrders.filter( o => o.customer.name === name);

    const formattedOrder = customerOrders.reduce((r, e) => {
      r.push([e.placed, e.total]);
      return r;
    }, []);
    return {
      customer: name, data: formattedOrder
    };

  }

  getCustomerOrdersByDate(orders: any, dates:any)
  {
    const customers =  this.topCustomers;
    const prettyDate = dates.map( x => this.FriendlyDate(x));
    const u = Array.from(new Set(prettyDate)).sort();

    const result = {};
    const datasets = result['date'] = [];

    customers.reduce( (x, y, i) => {
      const  customerOrders = [];
      datasets[i] = {
        customer: y,
        order: u.reduce((r, e, j) => {
          const obj = {};
          obj['date'] = e;
          obj['total'] = this.getCustomerDateTotal(e, y);  // sum total orders for this customer on this day
          customerOrders.push(obj);
          return customerOrders;
        }, []),
      };
      return x;
    }, []);
    // console.log("chech ", datasets);

    return result;
  }

  FriendlyDate(date: Date) {
    return moment(date).endOf('day').format('YY-MM-DD');
  }

  getCustomerDateTotal(date: any, customer: string) {
    const r = this.allOrders.
      filter( o => o.customer.name === customer
        && this.FriendlyDate(o.placed) === date);

    const results = r.reduce((a, b) => {
      return a + b.total;
    }, 0);
    // console.log('af', results);
    return results;
  }


}

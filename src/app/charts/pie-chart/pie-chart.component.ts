import { THEME_COLORS } from './../../shared/theme.colors';
import { Component, OnInit, Input } from '@angular/core';

import _ from 'lodash';
const theme = 'Bright';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  @Input() inputData: any;
  @Input() limit: number;
  public pieChartData: number[];
  public pieChartLabels: string[];
  public pieChartType = 'doughnut';
  public colors: any[] = [
    {
      backgroundColor: this.themeColors(theme),
      borderColor: '#111'
    }
   ];
   ngOnInit() {
     this.parseChartData(this.inputData, this.limit);
  }

  parseChartData(res:any, limit?: number) {
    const allData = res.slice(-limit);

    this.pieChartData = allData.map(x => _.values(x)[1]);
    this.pieChartLabels = allData.map(x => _.values(x)[0]);
  }

  themeColors(setName:string): string[] {
    const c = THEME_COLORS.slice(0).find(se => se.name === setName).colorSet;
    return c;
  }
}

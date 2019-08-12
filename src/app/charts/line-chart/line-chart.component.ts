import { LINE_CHART_COLORS } from './../../shared/chart.colors';
import { Component, OnInit } from '@angular/core';

 const SAMPLE_LINE_CHART_DATA:any[] = [
  { data: [ 32, 14, 46, 23, 38, 56], label: 'Sentiment Analysis'},
  { data: [ 65, 59, 80, 81, 56, 54], label: 'Image Recognition'},
  { data: [ 12, 34, 49, 53, 68, 62], label: 'Forecasting'}
];

const SAMPLE_LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }
  public lineChartData: any[] = SAMPLE_LINE_CHART_DATA;
  public lineChartLabels: string[] = SAMPLE_LINE_CHART_LABELS;
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartOptions: any = {
    // scaleShowVerticalLines: false,
    responsive: true
  }

  public lineChartColors = LINE_CHART_COLORS;
  ngOnInit() {
  }

}

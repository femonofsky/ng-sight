import { SaleDataService } from './../../services/sale-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-sales',
  templateUrl: './section-sales.component.html',
  styleUrls: ['./section-sales.component.scss']
})
export class SectionSalesComponent implements OnInit {

  salesDataByCustomer: any;
  salesDataByState: any;
  constructor(private _saleDataService: SaleDataService) { }

  ngOnInit() {
    this._saleDataService.getOrdersByState().subscribe( res => {
      this.salesDataByState = res;
    });

    this._saleDataService.getOrdersByCustomer(5).subscribe( res => {
      this.salesDataByCustomer = res;
    });
  }

}

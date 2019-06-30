import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
@Component({
  selector: 'app-grafico-donuts',
  templateUrl: './grafico-donuts.component.html',
  styleUrls: ['./grafico-donuts.component.css']
})
export class GraficoDonutsComponent implements OnInit {
  @Input() dataDesdeFuera: MultiDataSet;
  @Input() labelsDesdeFuera: Label[];
  @Input() chartTypeDesdeFuera: ChartType;
  @Input() colorDesdeFuera: any;
  @Input() titulo: string;

  constructor() {}

  ngOnInit() {}
}

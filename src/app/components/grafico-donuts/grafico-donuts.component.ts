import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-donuts',
  templateUrl: './grafico-donuts.component.html',
  styleUrls: ['./grafico-donuts.component.css']
})
export class GraficoDonutsComponent implements OnInit {
  @Input() dataDesdeFuera;
  @Input() labelsDesdeFuera;
  @Input() chartTypeDesdeFuera;
  @Input() colorDesdeFuera;
  @Input() titulo;

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @Input() progreso: number = 50;
  @Input() leyenda: string = 'por definir';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    console.log('Leyenda', this.leyenda);
  }
  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso += valor;

    this.cambioValor.emit(this.progreso);
  }
}

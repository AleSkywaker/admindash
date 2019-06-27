import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgreso') txtProgress: ElementRef;
  @Input()
  progreso: number = 50;
  @Input() leyenda: string = 'por definir';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  onChange(nuevoValor: number) {
    const elementHTML: any = document.getElementsByName('progreso')[0];
    console.log(elementHTML.value);

    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    elementHTML.value = this.progreso;
    this.cambioValor.emit(this.progreso);
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

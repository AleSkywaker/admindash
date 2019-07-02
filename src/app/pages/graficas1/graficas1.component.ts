import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {
  graficos: any = {
    grafico1: {
      labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      data: [24, 30, 46],
      type: 'doughnut',
      backgroundColor: ['blue', 'green', 'yellow'],
      leyenda: 'El pan se come con',
      color: [
        {
          backgroundColor: ['olive', 'orange', 'tomato'],
          borderColor: ['white', 'white', 'white'],
          borderWidth: 1
        }
      ]
    },
    grafico2: {
      labels: ['Hombres', 'Mujeres'],
      data: [4500, 6000],
      type: 'doughnut',
      leyenda: 'Entrevistados',
      color: [
        {
          backgroundColor: ['olive', 'orange', 'tomato'],
          borderColor: ['white', 'white', 'white'],
          borderWidth: 1
        }
      ]
    },
    grafico3: {
      labels: ['Si', 'No'],
      data: [95, 5],
      type: 'doughnut',
      leyenda: '¿Le dan gases los frijoles?',
      color: [
        {
          backgroundColor: ['olive', 'orange', 'tomato'],
          borderColor: ['white', 'white', 'white'],
          borderWidth: 1
        }
      ]
    },
    grafico4: {
      labels: ['No', 'Si'],
      data: [85, 15],
      type: 'doughnut',
      leyenda: '¿Le importa que le den gases?',
      color: [
        {
          backgroundColor: ['olive', 'orange', 'tomato'],
          borderColor: ['white', 'white', 'white'],
          borderWidth: 1
        }
      ]
    }
  };

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  constructor() {
    const observable = new Observable(observer => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;
        observer.next(contador);
        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (contador === 2) {
          observer.error('S.O.S');
        }
      }, 1000);
    });
    observable.subscribe(
      n => console.log(n),
      error => console.log(error),
      () => console.log('El observador terminó!!')
    );
  }

  ngOnInit() {}
}

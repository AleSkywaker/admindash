import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  constructor() {
    observable
      .pipe(retry(2))
      .subscribe(
        n => console.log(n),
        error => console.log(error),
        () => console.log('El observador terminó!!')
      );
  }

  ngOnInit() {}

  regresaObservable() {
    const observable = new Observable((observer: Subscriber<number>) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;
        observer.next(contador);
        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (contador === 2) {
          // clearInterval(intervalo);
          observer.error('S.O.S');
        }
      }, 1000);
    });
  }
}

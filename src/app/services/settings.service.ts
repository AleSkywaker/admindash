import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
//
export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  // tslint:disable-next-line: deprecation
  constructor(@Inject(DOCUMENT) private documento: any) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    console.log('Guardado en localStorage');
  }
  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
      console.log('Cargando del localStorage');
    } else {
      console.log('Usando valores por defecto');
    }
  }
  aplicarTema(tema: string) {
    const url: string = `assets/css/colors/${tema}.css`;
    this.documento.getElementById('tema').setAttribute('href', url);

    this.ajustes.temaUrl = url;
    this.ajustes.tema = tema;

    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}

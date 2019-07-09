import { Injectable } from '@angular/core';

@Injectable()
// {providedIn: 'root'}
export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor() {}

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    console.log('Guardado en localStorage');
  }
  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log('Cargando del localStorage');
    } else {
      console.log('Usando valores por defecto');
    }
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}

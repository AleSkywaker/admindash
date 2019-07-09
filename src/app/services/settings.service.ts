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
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}

import { Injectable } from '@angular/core';

@Injectable()
// {providedIn: 'root'}
export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor() {}
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}

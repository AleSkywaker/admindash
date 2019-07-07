import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private documento: any) {}

  ngOnInit() {}

  cambiarColor(tema: string, link: any) {
    console.log(link);
    this.aplicarCheck(link);
    const url: string = `assets/css/colors/${tema}.css`;
    this.documento.getElementById('tema').setAttribute('href', url);
  }

  aplicarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
}

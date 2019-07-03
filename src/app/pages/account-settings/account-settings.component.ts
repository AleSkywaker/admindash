import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: any) {}

  ngOnInit() {}

  cambiarColor(tema: string) {
    console.log(tema);
    const url: string = `assets/css/colors/${tema}.css`;
    this.document.getElementById('tema').setAttribute('href', url);
  }
}

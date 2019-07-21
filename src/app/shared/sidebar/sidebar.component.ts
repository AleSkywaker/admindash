import { SidebarService } from './../../services/service.index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  menu: any;
  constructor(public sidebarService: SidebarService) {}

  ngOnInit() {
    this.menu = this.sidebarService.menu;
  }
}

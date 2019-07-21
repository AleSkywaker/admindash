import { NgModule } from '@angular/core';
import { SettingsService } from './service.index';
import { SharedService } from './service.index';
import { SidebarService } from './service.index';

@NgModule({
  declarations: [],
  imports: [],
  providers: [SettingsService, SharedService, SidebarService]
})
export class ServiceModule {}

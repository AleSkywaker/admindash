import { NgModule } from '@angular/core';
import { SettingsService } from './service.index';
import { SharedService } from './service.index';
import { SidebarService } from './service.index';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [SettingsService, SharedService, SidebarService]
})
export class ServiceModule {}

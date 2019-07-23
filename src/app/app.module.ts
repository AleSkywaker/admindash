import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { APP_ROUTES } from './app.routes';
// Modulos
import { PageModule } from './pages/pages.module';
// Components

// temporal
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
// Services
// No importo en providers porque esta providedIn: 'root'
// import { SettingsService } from './services/settings.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, APP_ROUTES, PageModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule, AuthService } from 'projects/takeoff/auth/src/public_api';
import { TakeoffNavbarComponent } from './components/navbar/takeoff-navbar.component';

@NgModule({
  declarations: [AppComponent, TakeoffNavbarComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './containers/app/app.component';
import { TakeoffAuthModule } from 'projects/takeoff/auth/public_api';
import { TakeoffNavbarComponent } from './components/navbar/takeoff-navbar.component';
import { TakeoffHomepageComponent } from './components/home/homepage.component';
import { TakeoffDashboardComponent } from './containers/dashboard/dashboard.component';
import { TakeoffUsersModule } from 'projects/takeoff/users/public_api';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TakeoffNavbarComponent,
    TakeoffHomepageComponent,
    TakeoffDashboardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    TakeoffAuthModule,
    TakeoffUsersModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeoffHomepageComponent } from '../components/home/homepage.component';
import { TakeoffDashboardComponent } from '../containers/dashboard/dashboard.component';
import { AuthGuardService } from 'projects/takeoff/auth/public_api';
import { TakeoffUsersContainerComponent } from 'projects/takeoff/users/public_api';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: TakeoffHomepageComponent,
  },
  {
    path: 'dashboard',
    component: TakeoffDashboardComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakeoffLoginComponent } from '../containers/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    children: [
      {
        path: 'user',
        component: TakeoffLoginComponent,
        data: {
          userType: 'user',
        },
      },
      {
        path: 'admin',
        pathMatch: 'full',
        component: TakeoffLoginComponent,
        data: {
          userType: 'admin',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutesModule {}

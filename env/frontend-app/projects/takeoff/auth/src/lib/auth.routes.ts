import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '/login/user',
    component: 'AuthComponent',
    data: {
      userType: 'user',
    },
  },
  {
    path: '/login/admin',
    component: 'AuthComponent',
    data: {
      userType: 'admin',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutesModule {}

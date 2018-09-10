import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../../../auth/public_api';
import { TakeoffUsersContainerComponent } from '../containers/users-container/users.component';
import { TakeoffUsersListComponent } from '../components/users-list/users-list.component';
import { TakeoffUserFormComponent } from '../components/user-form/user-form.component';
import { UsersResolve } from '../resolvers/users.resolver';
import { UserResolve } from '../resolvers/user.resolver';

const routes: Routes = [
  {
    path: 'users',
    component: TakeoffUsersContainerComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: TakeoffUsersListComponent,
        resolve: {
          users: UsersResolve,
        },
        outlet: 'users'
      },
      {
        path: ':id',
        component: TakeoffUserFormComponent,
        resolve: {
          user: UserResolve,
        },
        outlet: 'users'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutesModule {}

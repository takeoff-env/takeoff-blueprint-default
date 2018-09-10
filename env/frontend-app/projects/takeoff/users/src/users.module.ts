import { NgModule } from '@angular/core';
import { TakeoffUsersContainerComponent } from './containers/users-container/users.component';
import { TakeoffUsersService } from './services/users.service';
import { TakeoffAuthModule } from '../../auth/public_api';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutesModule } from './routes/users.routes';
import { TakeoffUsersListComponent } from './components/users-list/users-list.component';
import { TakeoffUserFormComponent } from './components/user-form/user-form.component';
import { UsersResolve } from './resolvers/users.resolver';
import { UserResolve } from './resolvers/user.resolver';

@NgModule({
  imports: [
    CommonModule,
    TakeoffAuthModule,
    ReactiveFormsModule,
    UsersRoutesModule,
  ],
  declarations: [
    TakeoffUsersContainerComponent,
    TakeoffUsersListComponent,
    TakeoffUserFormComponent,
  ],
  providers: [TakeoffUsersService, UsersResolve, UserResolve],
  exports: [TakeoffUsersContainerComponent],
})
export class TakeoffUsersModule {}

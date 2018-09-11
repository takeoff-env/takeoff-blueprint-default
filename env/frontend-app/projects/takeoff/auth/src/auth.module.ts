import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TakeoffLoginFormComponent } from './components/login-form/login-form.component';
import { AuthService } from './services/auth.service';
import { AuthRoutesModule } from './routes/auth.routes';
import { TakeoffLoginComponent } from './containers/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './services/guard.service';

@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    AuthRoutesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: AuthService.getSessionToken,
      },
    }),
  ],
  declarations: [TakeoffLoginFormComponent, TakeoffLoginComponent],
  providers: [AuthService, AuthGuardService],
  exports: [TakeoffLoginComponent],
})
export class TakeoffAuthModule {}

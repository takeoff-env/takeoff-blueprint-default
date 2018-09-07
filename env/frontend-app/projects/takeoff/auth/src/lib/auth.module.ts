import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import { AuthRoutesModule } from './auth.routes';

@NgModule({
  imports: [HttpClientModule, ReactiveFormsModule, AuthRoutesModule],
  declarations: [AuthComponent],
  providers: [AuthService],
  exports: [AuthComponent],
})
export class AuthModule {}

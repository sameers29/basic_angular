import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordRequestComponent } from './reset-password-request/reset-password-request.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResetPasswordRequestComponent],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ResetPasswordModule {}

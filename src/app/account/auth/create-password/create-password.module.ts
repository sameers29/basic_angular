import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePasswordRoutingModule } from './create-password-routing.module';
import { CreateNewPasswordComponent } from './create-new-password/create-new-password.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateNewPasswordComponent],
  imports: [
    CommonModule,
    CreatePasswordRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CreatePasswordModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginModule } from './auth/login/login.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LoginModule,
  ],
})
export class AccountModule {}

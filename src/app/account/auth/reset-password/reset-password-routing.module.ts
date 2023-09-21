import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordRequestComponent } from './reset-password-request/reset-password-request.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'password-reset',
  },
  {
    path: 'password-reset',
    component: ResetPasswordRequestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPasswordRoutingModule {}

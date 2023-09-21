import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewPasswordComponent } from './create-new-password/create-new-password.component';

const routes: Routes = [
  {
    path: 'setNewPassword/:token/:email',
    component: CreateNewPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePasswordRoutingModule {}

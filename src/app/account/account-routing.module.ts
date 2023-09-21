import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'pass-reset',
    loadChildren: () =>
      import('./auth/reset-password/reset-password.module').then(
        (m) => m.ResetPasswordModule
      ),
  },

  {
    path: 'pass-create',
    loadChildren: () =>
      import('./auth/create-password/create-password.module').then(
        (m) => m.CreatePasswordModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}

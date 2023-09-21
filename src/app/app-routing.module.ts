import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { UnAuthGuard } from './core/guards/pages.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
    canActivate: [UnAuthGuard],
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/pages',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

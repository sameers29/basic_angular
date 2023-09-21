import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }

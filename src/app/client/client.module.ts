import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HomeModule } from './home/home.module';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';

@NgModule({
  declarations: [
    ClientComponent,
    HomeBannerComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HomeModule
  ],
  exports: [
    ClientComponent,
  ]
})
export class ClientModule { }

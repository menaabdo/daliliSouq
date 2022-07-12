import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAdvertisingRoutingModule } from './my-advertising-routing.module';
import { MyAdvertisingLayoutComponent } from './my-advertising-layout.component';
import { ActiveAdsComponent } from './advertising-components/active-ads/active-ads.component';
import { PassiveAdsComponent } from './advertising-components/passive-ads/passive-ads.component';
import { ExpiredAdsComponent } from './advertising-components/expired-ads/expired-ads.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MyAdvertisingLayoutComponent,
    ActiveAdsComponent,
    PassiveAdsComponent,
    ExpiredAdsComponent
  ],
  imports: [
    CommonModule,
    MyAdvertisingRoutingModule,
    SharedModule
  ]
})
export class MyAdvertisingModule { }

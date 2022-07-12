import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveAdsComponent } from './advertising-components/active-ads/active-ads.component';
import { ExpiredAdsComponent } from './advertising-components/expired-ads/expired-ads.component';
import { PassiveAdsComponent } from './advertising-components/passive-ads/passive-ads.component';
import { MyAdvertisingLayoutComponent } from './my-advertising-layout.component';

const routes: Routes = [
  {
    path: "",
    component: MyAdvertisingLayoutComponent,
    children: [
      {
        path: "active-ads",
        component: ActiveAdsComponent
      },
      {
        path:"passive-ads",
        component: PassiveAdsComponent
      },
      {
        path: "expired-ads",
        component: ExpiredAdsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAdvertisingRoutingModule { }

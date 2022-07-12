import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';
import { AllAdsComponent } from './modules/pages/all-ads/all-ads.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { CategoriesComponent } from './modules/pages/categories/categories.component';
import { BuyOnlineComponent } from './modules/pages/buy-online/buy-online.component';
import { StoresComponent } from './modules/pages/stores/stores.component';
import { OffersComponent } from './modules/pages/offers/offers.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {
    path: "home",
    component: MasterLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "categories",
        component: CategoriesComponent
      },
      {
        path: "buy-online",
        component: BuyOnlineComponent
      },
      {
        path: "stores",
        component: StoresComponent
      },
      {
        path: "offers",
        component: OffersComponent
      },
      {
        path: "me",
        loadChildren: () => import('./modules/me/me.module').then(m => m.MeModule)
      },
      {
        path: "store/:id",
        loadChildren: () => import('./modules/store/store.module').then(m => m.StoreModule)
      }
      ,
      {
        path: "all-ads",
        component: AllAdsComponent
      }
    ]
  },
  { path: '', component: LoginFormComponent },
  {path:'regist',component:RegisterFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

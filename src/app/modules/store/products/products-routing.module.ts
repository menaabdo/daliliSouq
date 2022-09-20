import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsSizesComponent } from 'src/app/addproduct/colors-sizes/colors-sizes.component';
import { CitiesComponent } from 'src/app/cities/cities.component';
import { RegionsComponent } from 'src/app/cities/regions/regions.component';
import { EditColorsSizesComponent } from '../../me/profile/profile-components/edit-products/edit-colors-sizes/edit-colors-sizes.component';
import { EditProductsComponent } from '../../me/profile/profile-components/edit-products/edit-products.component';
import { ProperitiesComponent } from '../../me/profile/profile-components/edit-products/properities/properities.component';
import { EditStoreActiveComponent } from './components/edit-store-active/edit-store-active.component';
import { EditStoreExpireComponent } from './components/edit-store-expire/edit-store-expire.component';
import { EditStorePassiveComponent } from './components/edit-store-passive/edit-store-passive.component';
import { RepostproductinstoreComponent } from './components/repostproductinstore/repostproductinstore.component';
import { ProductDoubleViewComponent } from './components/store-product-active-ads/product-double-view/product-double-view.component';
import { StoreProductActiveAdsComponent } from './components/store-product-active-ads/store-product-active-ads.component';
import { StoreProductExpiredAdsComponent } from './components/store-product-expired-ads/store-product-expired-ads.component';
import { StoreProductPassiveAdsComponent } from './components/store-product-passive-ads/store-product-passive-ads.component';
import { StoreProductLayoutComponent } from './store-product-layout.component';

const routes: Routes = [
  {
    path: "",
    component: StoreProductLayoutComponent,
    children:[
      {
        path: "active-ads/:id",
        component: StoreProductActiveAdsComponent,
        
      },
      {
        path: "passive-ads/:id",
        component: StoreProductPassiveAdsComponent
      },
      {
        path: "expired-ads/:id",
        component: StoreProductExpiredAdsComponent
      },
      {
        path:'edit-product/:id',
        component:EditStoreActiveComponent
      },
      {
        path:'edit-passive/:id',
        component:EditStorePassiveComponent
      },
      {
        path:'edit-expire/:id',
        component:EditStoreExpireComponent
      },
      {path:'edit-properities',component:ProperitiesComponent},
    {path:'edit-color_size',component:EditColorsSizesComponent},
     {
        path:'cities/:data',
        component:CitiesComponent
      },
      {path:'regions/:data',
          component:RegionsComponent       
    }
     
    ]
  },
  {
    path:'doubleview/:product_id',
    component:ProductDoubleViewComponent
  },{
    path:'repost/:product_id/:category_id',
    component:RepostproductinstoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

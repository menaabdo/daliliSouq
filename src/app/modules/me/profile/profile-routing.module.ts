import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreLayoutComponent } from '../../store/store-layout.component';
import { MeLayoutComponent } from '../me-layout.component';
import { AccountComponent } from './profile-components/account/account.component';
import { CategoriesComponent } from './profile-components/account/categories/categories.component';
import { AddressesComponent } from './profile-components/addresses/addresses.component';
import { EditOfferComponent } from './profile-components/edit-offer/edit-offer.component';
import { EditProductsComponent } from './profile-components/edit-products/edit-products.component';
import { EditStoreComponent } from './profile-components/edit-store/edit-store.component';
import { FavouritesComponent } from './profile-components/favourites/favourites.component';
import { FollowersComponent } from './profile-components/followers/followers.component';
import { FollowingComponent } from './profile-components/following/following.component';
import { MyProfileComponent } from './profile-components/my-profile/my-profile.component';
import { OffersComponent } from './profile-components/offers/offers.component';
import { OrdersComponent } from './profile-components/orders/orders.component';
import { PaidSalesComponent } from './profile-components/paid-sales/paid-sales.component';
import { RecentlyViewComponent } from './profile-components/recently-view/recently-view.component';
import { RejectedSalesComponent } from './profile-components/rejected-sales/rejected-sales.component';
import { SalesComponent } from './profile-components/sales/sales.component';
import { StoresComponent } from './profile-components/stores/stores.component';
import { ProfileLayoutComponent } from './profile-layout.component';
import { StoreModule } from '../../store/store.module';
import { OrderComponent } from '../../../order/order.component';
import { AllcatComponent } from './profile-components/account/allcat/allcat.component';
import { PackagesOfCatComponent } from './profile-components/account/packages-of-cat/packages-of-cat.component';
import { ViewprofileComponent } from './profile-components/my-profile/viewprofile/viewprofile.component';
import { AddproductComponent } from '../../../addproduct/addproduct.component';
import { SelectparentcategoryComponent } from '../../../addproduct/selectparentcategory/selectparentcategory.component';
import { ColorsSizesComponent } from 'src/app/addproduct/colors-sizes/colors-sizes.component';
import { AddstoreComponent } from './profile-components/stores/addstore/addstore.component';
import { CitiesComponent } from 'src/app/cities/cities.component';
import { RegionsComponent } from 'src/app/cities/regions/regions.component';
import { AddofferComponent } from './profile-components/offers/addoffer/addoffer.component';
import { AddpackagesComponent } from './profile-components/offers/addpackages/addpackages.component';
const routes: Routes = [
  {
    path: "",
    component: ProfileLayoutComponent,
    children: [
      {
        path: "my-profile",
        children: [
          {
            path: "",
            component: MyProfileComponent
          },
          {
                path:'view',
                component:ViewprofileComponent
          },
          {
            path:'select-category/:data',
            component:SelectparentcategoryComponent
          },
          {path:'properity-color/:data',component:ColorsSizesComponent},
          {
            path:'add_product/:data',
            component:AddproductComponent
          },
          {
            path: "edit-product",
            component: EditProductsComponent
          }
        ]
      },
      
      {
        path: "followers",
        component: FollowersComponent
      },
      {
        path: "following",
        component: FollowingComponent
      },
      {
        path: "favourites",
        component: FavouritesComponent
      },
      {
        path: "addresses",
        component: AddressesComponent
      },
      {
        path: "account",
        children: [
          {
            path: "",
            component: AccountComponent
          },
          {
            path: "categories",
            component: CategoriesComponent
          }
          ,{path:'allcat',
          component:AllcatComponent,
         
          
        },
        {path:'packages/:id',component:PackagesOfCatComponent}
        ]
      },
      {
        path: "stores",

        children: [
          {
            path: "",
            component: StoresComponent,
          },
          {
            path: "edit-store",
            component: EditStoreComponent
          },
          {path:'add-store/:data', component:AddstoreComponent}
         
         
        ]

      },
      {
        path: "offers",
        children: [
          {
            path: "",
            component: OffersComponent,
          },
          {
            path:"edit-offer",
            component: EditOfferComponent
          },
          {
            path:'offer-add/:data',
            component:AddofferComponent
          },
          {path:'add-package',
          component:AddpackagesComponent
        }
        ]
      },
      {
        path: "orders",
        component: OrdersComponent
      },
      {
        path: "sales",
        component: SalesComponent
      },
      {
        path: "paid-sales",
        component: PaidSalesComponent
      },
      {
        path: "rejected-sales",
        component: RejectedSalesComponent
      },
      {
        path: "recently-view",
        component: RecentlyViewComponent
      }, {path:'order/:id',component:OrderComponent},
   
      {
        path:'cities/:data',
        component:CitiesComponent,
        
          
       
      },
      {path:'regions/:data',
          component:RegionsComponent
        }
     
        ],
        
        
  },
  // {
  //   path:'store-profile/:id',component:StoreProfileComponent
  //   },
    // {path:'store-layout/:id',component:StoreLayoutComponent}
    {
      path: "store/:id",
      loadChildren: () => import("../../store/store.module").then(m => m.StoreModule)
    },
   

 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterLayoutModule } from './layout/master-layout.module';
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AllAdsComponent } from './modules/pages/all-ads/all-ads.component';
import { MeModule } from './modules/me/me.module';
import { ProfileModule } from './modules/me/profile/profile.module';
import { HomeComponent } from './modules/pages/home/home.component';
import { CategoriesComponent } from './modules/pages/categories/categories.component';
import { BuyOnlineComponent } from './modules/pages/buy-online/buy-online.component';
import { StoresComponent } from './modules/pages/stores/stores.component';
import { OffersComponent } from './modules/pages/offers/offers.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AllcatComponent } from './modules/me/profile/profile-components/account/allcat/allcat.component';
import { PackagesOfCatComponent } from './modules/me/profile/profile-components/account/packages-of-cat/packages-of-cat.component';
import { ViewprofileComponent } from './modules/me/profile/profile-components/my-profile/viewprofile/viewprofile.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SelectparentcategoryComponent } from './addproduct/selectparentcategory/selectparentcategory.component';
import { ColorsSizesComponent } from './addproduct/colors-sizes/colors-sizes.component';
// import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
// import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { Loader } from "@googlemaps/js-api-loader";
import { AddstoreComponent } from './modules/me/profile/profile-components/stores/addstore/addstore.component';
import { CitiesComponent } from './cities/cities.component';
import { RegionsComponent } from './cities/regions/regions.component';
import { AddofferComponent } from './modules/me/profile/profile-components/offers/addoffer/addoffer.component';
import { AddpackagesComponent } from './modules/me/profile/profile-components/offers/addpackages/addpackages.component';
@NgModule({
  declarations: [
    AppComponent,
    AllAdsComponent,
    HomeComponent,
    CategoriesComponent,
    BuyOnlineComponent,
    StoresComponent,
    OffersComponent,
    LoginFormComponent,
    RegisterFormComponent,
    AllcatComponent,
    PackagesOfCatComponent,
    ViewprofileComponent,
    AddproductComponent,
    SelectparentcategoryComponent,
    ColorsSizesComponent,
    AddstoreComponent,
    CitiesComponent,
    RegionsComponent,
    AddofferComponent,
    AddpackagesComponent
    
   
    // OrderComponent,
   
    
  ],
  imports: [
    BrowserModule,
    MasterLayoutModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    NgbTooltipModule,
    MeModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    Ng2SearchPipeModule,
    // ShareButtonsModule.withConfig({debug:true}
    //   ),
    //  ShareIconsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

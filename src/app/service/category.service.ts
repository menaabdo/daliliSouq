import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Store } from '../models/store.model';
import { Country } from '../models/country.model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  headers=new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    
  })
country_id=localStorage.getItem('country_id')
 
  constructor(private httpclient: HttpClient,private cookieService: CookieService) { }
 //////////getallcategorries/////////////////
 countries(){
  return this.httpclient.get<{ Response: any }>(`${environment.apiURL}countries?os=android&lang=en`)
 
 }
 all(){
    return this.httpclient.get<{ cateories: Category }>(`${environment.apiURL}categories?os=android&country_id=1`)
  }
  //////////////////////////////////////////////////
  sub_categories(category_id:number,key_word:string){
    return this.httpclient.get<{ cateories: Category }>(`${environment.apiURL}sub_categories?os=android&country_id=1&category_id=${category_id}&key_word=${key_word}`)
  }
  //////////////////////end/////////////////
  ////////////////////////getallstories/////////
  stores():Observable<{stores:Store[]}>{
return this.httpclient.get<{stores:Store []}>(`${environment.apiURL}stores_categories?os=Android&lang=en&country_id=1`)
  }
  ////////////////////end//////////////////
  //////////////////////categories in each store//////////////////////
  categories_store(store_id:number,key_word:string){
    if(store_id!=0)
    return this.httpclient.get(`${environment.apiURL}list_categories?os=android&country_id=1&store_id=${store_id}&page=1&key_word=${key_word}`)
      else
      return this.httpclient.get(`${environment.apiURL}list_categories?os=android&country_id=1&page=1&key_word=${key_word}`)
     

    }

  ///////////////////////////end///////////////
  ///////////////////////////packages/////////
  packages(id:number)
  {const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}category/packages?os=android&category_id=${id}&country_id=1`,{headers})

  }
  subscribe_package(category_id:number,package_id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}subscribe/category/package?os=android`,{'category_id':category_id,'package_id':package_id},{headers})
  }
  accounts(countray_id:number){
    return this.httpclient.get(`${environment.apiURL}accounts?os=android&country_id=1`)
 
  }
  upgrade_account(account_id:number,price:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}profile/upgrade?os=android`,{'account_id':account_id,'price':price},{headers})

  }
  profile_packages(country_id:number,type_id:number){
    return this.httpclient.get(`${environment.apiURL}packages?os=android&country_id=${country_id}&type=${type_id}`)
 
  }
  properities(category_id:number){
    return this.httpclient.get(`${environment.apiURL}category/properties?os=android&category_id=${category_id}`)
 
  }
  category(id:number){
    return this.httpclient.get(`${environment.apiURL}category?os=android&category_id=${id}`)
 
  }
  can_post(category_id:number,country_id:number){
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}profile/can_post?os=android&category_id=${category_id}&country_id=${country_id}`,{headers})
 
  }
  ///////////////////////////////////////////////////////////////
  categories_home(){
   
    return this.httpclient.get(`${environment.apiURL}home-categories?os=android&country_id=${this.country_id}`)
 
  }
  getoneproduct(id:number){
  
    return this.httpclient.get(`${environment.apiURL}product?os=android&product_id=${id}`)
  }
}

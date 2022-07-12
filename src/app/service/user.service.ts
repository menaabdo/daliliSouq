import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';



@Injectable({
  providedIn: 'root'
})
export class UserService {
user?:any
id?:number
logininfo?:any
image_file?:any
token!:string
 headers=new HttpHeaders({
  Authorization: `Bearer ${localStorage.getItem('token')}`,
  
});
  activeroute: any;
 
  
  constructor(private httpclient: HttpClient,private cookieService: CookieService,private route:Router ) { }
 getimage(file:object){
this.image_file=file
 }
 
  login(user:any){
   
    return this.httpclient.post(`${environment.apiURL}login?os=android`,user)
    .subscribe(
       (res)=>{this.logininfo=res;this.token=this.logininfo.Response.access_token; 
       console.log(this.token)
       localStorage.setItem('token',this.token)
        this.route.navigateByUrl('/home');
      

       })
  }
  refresh_token(){
    const headers =this.headers
    return this.httpclient.post( `${environment.apiURL}refresh-token?os=android`,{headers})
  }
  whologin(user:any){
  this.user=user }
    getuser(){
      return this.user
    }
  profile(data:any){
   
    const headers =this.headers
    return this.httpclient.post( `${environment.apiURL}profile?os=android`,data,{headers})
  }  
  changepassword(data:any){
    return this.httpclient.post('http://dalilishop.smartstep-eg.com/api/profile/change_password',data)
  }
  register(user:User){
    return this.httpclient.post(`${environment.apiURL}register?os=android`,user)
  }
  update(data:any){
    const headers=this.headers
      return this.httpclient.post( `${environment.apiURL}profile/update?os=android`,data,{headers})
  
  }
  /////////////////////////////////Ads///////////
  Ads(){
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}profile/products?os=android&page=1`,{headers})

  }
  ////////////////////////////////end/////////////////
  ///////////////////////followers/////////////////////
  follwers(){
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}profile/followers?os=android`,{headers})
  }
  follow(id:number){
    const headers =this.headers
   return this.httpclient.post(`${environment.apiURL}user/follow?os=android`,{'follower_id':id},{headers})
  }
  //////////////////////endfollowers///////////////
  follwing(){
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}profile/followings?os=android`,{headers})
   
  }
 showalladdress(){
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}user/address?os=android`,{headers})
  }
  deleteaddress(id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}user/delete_address?os=android`,{'address_id':id},{headers})
 
  }
  cities(){
    
    return this.httpclient.get(`${environment.apiURL}cities?os=android&lang=en&country_id=1`)


  }
  ///////////////////////myfavourite/////////////
  favourite(){
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}profile/likes?os=android&page=1`,{headers})
  }
  //////////////////endfavourite////////////////
  ////////////////////////////myprofile///////////
  mystores(lang:string){
   
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}user/stores?os=android`,{headers})

  }
  create_store(data:any){
    const fd=new FormData();
    fd.append('image',this.image_file)
    console.log(fd)
   data.image=fd
   
   console.log(data)
    const headers =this.headers
   
//     
    return this.httpclient.post(`${environment.apiURL}store/create?os=android`,data ,{headers})
 
  }
  /////////////////////////////////////////////
  myorders(is_complete:number){
    console.log(is_complete)
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}store/create?os=android`,{'is_complete':is_complete},{headers})
 

  }
  orderdetailes(id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}user/order?os=android`,{'order_id':id},{headers})
 
  }
  myaccount(){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}profile/account?os=android`,{'country_id':1},{headers})
 
  }
 offer_like(offer_id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}offers/like?os=android`,{'offer_id':offer_id},{headers})
 
  }
  offer_create(data:any){
    const fd=new FormData();
    fd.append('image',this.image_file,'image')
   
   data.image=fd.getAll('image')
   
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}offers/create?os=android`,data,{headers})
 
  }
  offers(){
    //const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}offers?os=android&country_id=1`)
  }
  mysales(){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}seller/orders?os=android&users=[${this.id}]`,{headers})
 
  }
  paid_orders(start_d:string,end_d:string){
    const headers =this.headers
    console.log(headers)
    if(start_d||end_d)
   {let year1=(start_d.slice(0,4))
    let mounth1=start_d.slice(5,7)
    let day1=start_d.slice(8)
    let year2=(end_d.slice(0,4))
    let mounth2=end_d.slice(5,7)
    let day2=end_d.slice(8)
    
     return this.httpclient.post(`${environment.apiURL}seller/paid_orders?os=android`,{'start_date':`${day1}-${mounth1}-${year1}`,'end_date':`${day2}-${mounth2}-${year2}`},{headers})
 }
    return this.httpclient.post(`${environment.apiURL}seller/paid_orders?os=android`,{},{headers})
 

  }
  recently_view(){
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}recently_view?os=android`,{headers})
 
  }
  ////////////////////////////////user store////////////////////
  store_profile(id:number){
     console.log(id)
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}store?os=android&store_id=${id}&country_id=1&page=1`,{headers})
  }
  best_seller(id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}best_seller/stores?os=android`,{'store_id':id},{headers})
  }
  followers(id:number){
    return this.httpclient.get(`${environment.apiURL}store/followers?os=android&store_id=${id}`)
  }
  products(id:number){
    return this.httpclient.get(`${environment.apiURL}store/products?os=android&store_id=${id}&country_id=1&page=1`)


  }
  create_product(data:any){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}product/create?os=android`,data,{headers})
 
  }
  paid_orders_store(id:number,start_d:string,end_d:string){
    const headers =this.headers
    console.log(headers)
    if(start_d||end_d)
   {let year1=(start_d.slice(0,4))
    let mounth1=start_d.slice(5,7)
    let day1=start_d.slice(8)
    let year2=(end_d.slice(0,4))
    let mounth2=end_d.slice(5,7)
    let day2=end_d.slice(8)
    
     return this.httpclient.post(`${environment.apiURL}paid_orders/stores?os=android`,{'store_id':id,'start_date':`${day1}-${mounth1}-${year1}`,'end_date':`${day2}-${mounth2}-${year2}`},{headers})
 }
    return this.httpclient.post(`${environment.apiURL}paid_orders/stores?os=android`,{'store_id':id},{headers})
 

  }
  unpaid_orders_store(id:number,start_d:string,end_d:string){
    const headers =this.headers
    console.log(headers)
    if(start_d||end_d)
   {let year1=(start_d.slice(0,4))
    let mounth1=start_d.slice(5,7)
    let day1=start_d.slice(8)
    let year2=(end_d.slice(0,4))
    let mounth2=end_d.slice(5,7)
    let day2=end_d.slice(8)
    
     return this.httpclient.post(`${environment.apiURL}unpaid_orders/stores?os=android`,{'store_id':id,'start_date':`${day1}-${mounth1}-${year1}`,'end_date':`${day2}-${mounth2}-${year2}`},{headers})
 }
    return this.httpclient.post(`${environment.apiURL}unpaid_orders/stores?os=android`,{'store_id':id},{headers})
 

  }
  orders_store(id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}orders/stores?os=android`,{'store_id':id},{headers})
 
  }
  total_sales(id:number,start_d:string,end_d:string){
    const headers =this.headers
    console.log(headers)
    if(start_d||end_d)
   {let year1=(start_d.slice(0,4))
    let mounth1=start_d.slice(5,7)
    let day1=start_d.slice(8)
    let year2=(end_d.slice(0,4))
    let mounth2=end_d.slice(5,7)
    let day2=end_d.slice(8)
    
     return this.httpclient.post(`${environment.apiURL}store/sales?os=android`,{'store_id':id,'start_date':`${day1}-${mounth1}-${year1}`,'end_date':`${day2}-${mounth2}-${year2}`},{headers})
 }
    return this.httpclient.post(`${environment.apiURL}store/sales?os=android`,{'store_id':id},{headers})
 
  }
  delete_store(id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}store/delete?os=android`,{'store_id':id},{headers})
  }
  logout(){
    this.cookieService
    console.log(this.token)
  }
  // uploadimg(id:number){
  //   const fd=new FormData();
  //   fd.append('image',this.image_file)
    
  //  console.log(this.image_file)
  //   return this.httpclient.post(`${environment.apiURL}upload/${4}`,fd)
  // }
  
}


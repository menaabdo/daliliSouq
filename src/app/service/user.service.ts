import { Injectable, PACKAGE_ROOT_URL } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { Product } from '../models/product.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {

user?:any
id!:string
logininfo?:any
image_file?:any
files:any[]=[]
product_data!:Product
token!:string
country_id!:string
flagoncart=0

 headers= new HttpHeaders({
  Authorization: `Bearer ${localStorage.getItem('token')}`,})
 
  activeroute: any;
  
  constructor(private httpclient: HttpClient,private cookieService: CookieService,private route:Router ) { }
 getimage(file:object){
this.image_file=file

}
 
  login(user:any){
     localStorage.removeItem('index')
    return this.httpclient.post(`${environment.apiURL}login?os=android`,user)
    .subscribe(
       (res)=>{this.logininfo=res;this.token=this.logininfo.Response.access_token; 
      this.id=this.logininfo.Response.user.id
       localStorage.setItem('token',this.token)
       localStorage.setItem('id',this.id)
       console.log(this.logininfo)
       localStorage.setItem('country_id',this.logininfo.Response.user.country_id)
      this.country_id=this.logininfo.Response.user.country_id
       this.headers=new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,})
        if(this.headers)
        {console.log(this.headers)
          this.route.navigateByUrl('/home');
      }

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
    this.country_id=localStorage.getItem('country_id') as string
   
    return this.httpclient.get(`${environment.apiURL}profile/products?os=android&user_id=${localStorage.getItem('id')}&page=1&country_id=${this.country_id}`,{headers})

  }
  product_detailes(id:number){
    return this.httpclient.get(`${environment.apiURL}product?os=android&product_id=${id}`)

  }
  delete_product(id:number){
    const headers =this.headers
    return this.httpclient.post( `${environment.apiURL}product/delete?os=android`,{'id':id},{headers})
  
  }
  update_product(data:any){
    console.log(data)
    const headers =this.headers
    //means doesnt has image 
  //  {for(let i=0;i<this.files.length;i++){
  //    data.append(`image${i+1}`,this.files[i])
     
  //  }}
        return this.httpclient.post( `${environment.apiURL}product/edit?os=android`,data,{headers})
  
  }
  ////////////////////////////////end/////////////////
  delete_image(id:number){
    const headers =this.headers
    return this.httpclient.post( `${environment.apiURL}product/delete_image?os=android`,{'id':id},{headers})
  
  }
  //////////////////////////////
  select_offer(offer_id:number,package_type_category_id:number){
    const headers =this.headers
    return this.httpclient.post( `${environment.apiURL}offer/package?os=android`,{'offer_id':offer_id,'package_type_category_id':package_type_category_id},{headers})
  
  }
  repost(id:number){
    const headers =this.headers
    this.country_id=localStorage.getItem('country_id') as string
  
    return this.httpclient.post( `${environment.apiURL}repost/product?os=android`,{'product_id':id,'country_id': this.country_id},{headers})
  
  }
  ///////////////////////followers/////////////////////
  follwers(){
    
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}profile/followers?os=android&user_id=${localStorage.getItem('id')}`,{headers})
  }
  follow(id:number){
    const headers =this.headers
   return this.httpclient.post(`${environment.apiURL}user/follow?os=android`,{'follower_id':id},{headers})
  }
  //////////////////////endfollowers///////////////
  follwing(){
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}profile/followings?os=android&user_id=${localStorage.getItem('id')}`,{headers})
   
  }
 showalladdress(){
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}user/address?os=android`,{headers})
  }
  deleteaddress(id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}user/delete_address?os=android`,{'address_id':id},{headers})
 
  }
  addaddress(address:any){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}user/add_address?os=android`,address,{headers})
 
  }
  cities(){
    this.country_id=localStorage.getItem('country_id') as string
    return this.httpclient.get(`${environment.apiURL}cities?os=android&lang=en&country_id=${this.country_id}`)


  }
  ///////////////////////myfavourite/////////////
  favourite(){
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}profile/likes?os=android&page=1`,{headers})
  }
  //////////////////endfavourite////////////////
  ////////////////////////////myprofile///////////
  mystores(lang:string){
   this.country_id=localStorage.getItem('country_id') as string
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}user/stores?os=android&country_id=${this.country_id}`,{headers})

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
  myorders(is_complete:number,page:number){
    console.log(is_complete)
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}user/orders?os=android`,{'is_complete':is_complete,page:page},{headers})
 

  }
  orderdetailes(id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}order/details?os=android`,{'order_id':id,'is_driver':0},{headers})
 
  }
  myaccount(){
    const headers =this.headers
    this.country_id=localStorage.getItem('country_id') as string
    return this.httpclient.post(`${environment.apiURL}profile/account?os=android`,{'country_id':this.country_id},{headers})
 
  }
 offer_like(offer_id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}offers/like?os=android`,{'offer_id':offer_id},{headers})
 
  }
  offer_create(fd:any){
   
   
    fd.append('image',this.image_file)
  //  fd.append( 'en_name',data.name)
  //  data.image=fd.getAll('image')
   
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}offers/create?os=android`,fd,{headers})
 
  }
  offers(){
    //const headers =this.headers
    this.country_id=localStorage.getItem('country_id') as string

     return this.httpclient.get(`${environment.apiURL}offers?os=android&country_id=${this.country_id}`)
  }
  mysales(page:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}seller/orders?os=android`,{'page':page},{headers})
 
  }
  seller_order(id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}seller/order?os=android`,{'order_id':id},{headers})
 
  }
  setoutofstock(cart_id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}order/action?os=android`,{'cart_id':cart_id,'action':1},{headers})
 

  }
  paid_orders(start_d:string=undefined as unknown as string,end_d:string=undefined as unknown as string){
    const headers =this.headers
    
    if(start_d||end_d)
   {let year1=(start_d.slice(0,4))
    let mounth1=start_d.slice(5,7)
    let day1=start_d.slice(8)
    let year2=(end_d.slice(0,4))
    let mounth2=end_d.slice(5,7)
    let day2=end_d.slice(8)
    console.log(start_d,end_d)
     return this.httpclient.post(`${environment.apiURL}seller/paid_orders?os=android`,{'start_date':`${day1}-${mounth1}-${year1}`,'end_date':`${day2}-${mounth2}-${year2}`},{headers})
 }
    return this.httpclient.post(`${environment.apiURL}seller/paid_orders?os=android`,{},{headers})
 

  }
  rejected_orders(page:number,start_d:string=undefined as unknown as string,end_d:string=undefined as unknown as string){
    const headers =this.headers
    if(start_d||end_d)
    {let year1=(start_d.slice(0,4))
     let mounth1=start_d.slice(5,7)
     let day1=start_d.slice(8)
     let year2=(end_d.slice(0,4))
     let mounth2=end_d.slice(5,7)
     let day2=end_d.slice(8)
     return this.httpclient.post(`${environment.apiURL}seller/unpaid_orders?os=android`,{'start_date':`${day1}-${mounth1}-${year1}`,'end_date':`${day2}-${mounth2}-${year2}`},{headers})
   
    }
    return this.httpclient.post(`${environment.apiURL}seller/unpaid_orders?os=android`,{'page':page},{headers})
      }
  recently_view(){
    const headers =this.headers
    this.country_id=localStorage.getItem('country_id') as string
    return this.httpclient.get(`${environment.apiURL}view_history?os=android&country_id=${this.country_id}&city_id=1`,{headers})
 
  }
  ////////////////////////////////user store////////////////////
  store_profile(id:number){
     console.log(this.country_id)
    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}store?os=android&store_id=${id}&country_id=${this.country_id}&page=1`,{headers})
  }
  best_seller(id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}best_seller/stores?os=android`,{'store_id':id},{headers})
  }
  followers(id:number){
    return this.httpclient.get(`${environment.apiURL}store/followers?os=android&store_id=${localStorage.getItem('id')}`)
  }
  products(id:number){
    this.country_id=localStorage.getItem('country_id') as string
    return this.httpclient.get(`${environment.apiURL}store/products?os=android&store_id=${id}&country_id=${this.country_id}&page=1`)


  }
  create_product(data:any){
   localStorage.removeItem('imgs')
    const headers =this.headers
    
    if(this.files.length>0)
    {for(let i=0;i<this.files.length;i++)
    data.append(`image${i+1}`,this.files[i])
    data.append('image',this.files[0])}
    else  data.append('image',this.files[0])
    return this.httpclient.post(`${environment.apiURL}product/create?os=android`,data,{headers})
 
  }
  paid_orders_store(id:number,start_d:string=undefined as unknown as string,end_d:string=undefined as unknown as string){
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
  unpaid_orders_store(id:number,start_d:string=undefined as unknown as string,end_d:string=undefined as unknown as string){
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
  orders_store(id:number,page:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}orders/stores?os=android`,{'store_id':id,'page':page},{headers})
 
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
  store_order_detailes(store_id:number,order_id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}store/order?os=android`,{'store_id':store_id,'order_id':order_id},{headers})
 
  }
  delete_store(id:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}store/delete?os=android`,{'store_id':id},{headers})
  }
  logout(){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}logout?os=android`,{},{headers})
 
  }
  // uploadimg(id:number){
  //   const fd=new FormData();
  //   fd.append('image',this.image_file)
    
  //  console.log(this.image_file)
  //   return this.httpclient.post(`${environment.apiURL}upload/${4}`,fd)
  // }
  /////////////////////notifications functions/////////////////
  allnotification(object_type:string,page:number){
    const headers =this.headers
    return this.httpclient.get<any>(`${environment.apiURL}notifications?os=android&object_type=${object_type}&page=${page}`,{headers})
  }
  set_as_seen(noty_id:number){
    const headers =this.headers
    return  this.httpclient.get(`${environment.apiURL}notification?os=android&id=${noty_id}os=android`,{headers})
 
  }
  mymess(page:number){
    const headers =this.headers
    return this.httpclient.post(`${environment.apiURL}chat?os=android`,{'is_company':0,'user_id':0,'page':page},{headers})
 
  }
 sendmess(mess:any){
  
  const headers =this.headers
   
  
  return this.httpclient.post(`${environment.apiURL}send?os=android`,mess,{headers})
   


 }
 /////////////////////CART ENTITY//////////////////////////
 products_cart(){
  const headers =this.headers
  this.country_id=localStorage.getItem('country_id') as string
  
  return this.httpclient.get(`${environment.apiURL}cart?os=android&country_id=${this.country_id}`,{headers})
 
 }
 add_to_cart(data:any){
  const headers =this.headers
  this.country_id=localStorage.getItem('country_id') as string
  
  return this.httpclient.post(`${environment.apiURL}cart/add?os=android`,data,{headers})
 
 }
 delete_item_cart(cart_id:number){
  const headers =this.headers
  return this.httpclient.post(`${environment.apiURL}cart/delete?os=android`,{'cart_id':cart_id},{headers})
 
 }
 calc_delivery(data:any){
  const headers =this.headers
  return this.httpclient.post(`${environment.apiURL}calc_delivery?os=android`,data,{headers})
 
 }
 checkout(data:any){
  const headers =this.headers
  return this.httpclient.post(`${environment.apiURL}checkout?os=android`,data,{headers})
 
 }
  
}


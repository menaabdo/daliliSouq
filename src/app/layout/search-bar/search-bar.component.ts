import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router ,NavigationStart} from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { Country } from 'src/app/models/country.model';
import { notification } from 'src/app/models/notification.model';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
response!:any
counter_noty=0
counter_order=0
counter_cart=0
i!:notification
notifications!:notification[]
orders_notification!:notification[]
country!:Country
allcountries:any
countries!:Country[]
num_offernoty_page=1
num_ordernoty_page=1
///////////////variables for cart/////////
response_cart!:any
cart_products!:any
cart_data!:Cart
browserRefresh!:boolean
subscription: Subscription;
//////////////////////////////////
  constructor(private notifserve:UserService,private route:Router,private categoryserve:CategoryService) { 
    this.subscription = route.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.browserRefresh = !route.navigated;
        console.log(this.browserRefresh,'ddkkdkd')
      
      }
  });
  }
  profile_data:any

  ngOnInit(): void {
    
    this.notification_offer()
    this.notification_order()
   
    this.myprofiledata()
    this.getallcountries()
   // setInterval(()=>{this.cart()},1000)
    this.cart()
  }
  myprofiledata(){this.notifserve.profile({country_id:1}).subscribe((res)=>{
         this.profile_data=res
          this.country=this.profile_data.Response.country
           this.getallcountries()
          })
        }
        getallcountries(){
          this.categoryserve.countries().subscribe((res)=>{this.allcountries=res.Response.countries;
          if(localStorage.getItem('index'))
            this.country=this.allcountries[localStorage.getItem('index') ||{} as number]
          })
           }
 notification_offer(){
  this.notifserve.allnotification('offer',this.num_offernoty_page).subscribe((res)=>{
    this.response=res
    console.log(this.response)
    this.notifications=this.response.Response.data
    if(this.notifications){
      for(this.i of this.notifications){
             if(this.i.is_open==0)
             this.counter_noty++
      }
    }
    
  })
 }
 //////////////////////////////////more_offer_notification/////////////
 more(){
   this.num_offernoty_page++;
  this.notifserve.allnotification('offer',this.num_offernoty_page).subscribe((res)=>{
    this.response=res
    console.log(this.response.Response.data)
    let notifications=this.response.Response.data
    this.notifications=this.notifications.concat(notifications)
    if(this.notifications){
      for(this.i of this.notifications){
             if(this.i.is_open==0)
             this.counter_noty++
      }
    }
    
  })
 }
 /////////////////////////////////////////
 notification_order(){
  this.notifserve.allnotification('order',this.num_ordernoty_page).subscribe((res)=>{
    this.response=res
    this.orders_notification=this.response.Response.data
    if(this.orders_notification){
      for(this.i of this.orders_notification){
             if(this.i.is_open==0)
             this.counter_order++
      }
    }
    
  })
 }
 set_as_open(id:number,is_open:number,order_id:string){
 if(is_open==0){
   this.notifserve.set_as_seen(id).subscribe((res)=>{console.log(res)})
 }
//  if(order_id)
console.log(order_id)
//window.open(`/home/me/profile/my-profile/notification/${order_id}`,'_self')
//this.route.navigate([`home/notification/${order_id}`])
//window.location.reload()
 this.route.navigate([`home/me/profile/my-profile/notification/${order_id}`])
 }
 selectcountry(index:number){
   localStorage.setItem('index',index as unknown as string)
this.country=this.allcountries[index]
localStorage.setItem('country_id',this.allcountries[index].id)
window.location.reload()
 }
  /////////////////////cart//////////////////////////////
  /////////////////get_product/////////////////////
cart(){
  this.notifserve.products_cart().subscribe((res)=>{
    console.log(res)
    this.response_cart=res
    this.cart_data=this.response_cart.Response
    this.cart_products=this.cart_data.cart
  })
}
  /////////////end get_product/////////////////////
delete_item_cart(cart_id:number){
  console.log(cart_id)
  this.notifserve.delete_item_cart(cart_id).subscribe((res)=>{console.log(res)
   window.location.reload() })
}

}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country.model';
import { notification } from 'src/app/models/notification.model';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';

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
  constructor(private notifserve:UserService,private route:Router,private categoryserve:CategoryService) { }
  profile_data:any
  ngOnInit(): void {
    this.notification_offer()
    this.notification_order()
   
    this.myprofiledata()
    this.getallcountries()
  }
  myprofiledata(){this.notifserve.profile({country_id:1}).subscribe((res)=>{
         this.profile_data=res
          this.country=this.profile_data.Response.country
           this.getallcountries()
          })
        }
        getallcountries(){
          this.categoryserve.countries().subscribe((res)=>{this.allcountries=res.Response.countries;
          
            this.country=this.allcountries[localStorage.getItem('index') as unknown as number]})
           }
 notification_offer(){
  this.notifserve.allnotification('offer').subscribe((res)=>{
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
 notification_order(){
  this.notifserve.allnotification('order').subscribe((res)=>{
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

}
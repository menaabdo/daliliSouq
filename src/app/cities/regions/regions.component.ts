import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/models/city.model';
import { Region } from 'src/app/models/region.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
response!:any
cities!:City[]
regions!:Region[]
city!:City
data!:any
mydataforback!:any
  constructor(private storessserve:UserService,private route:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.mydataforback=this.activeroute.snapshot.params['data']
    if(this.activeroute.snapshot.params['data']!='data')
    this.data=JSON.parse(this.activeroute.snapshot.params['data'])
  
    this.storessserve.cities().subscribe((res)=>{this.response=res;this.cities=this.response.Response
    if(this.cities)
    {console.log('dkdkdkkdkd')
      for(let i=0;i<this.cities.length;i++){
        if(this.activeroute.snapshot.params['data']!='data')
         {if(this.cities[i].id==this.data.city_id){
          this.city=this.cities[i]
          break
        }}else{if(this.cities[i].id==this.storessserve.product_data.city_id){
          this.city=this.cities[i]
          break
        }

        }
        
      
      }
    }
    })
      
  }
  selectregion(city_id:number,region_id:number,city_name:string,region_name:string){
 if(this.activeroute.snapshot.params['data']!='data'){ 
   this.data.city_id=city_id
  this.data.city_name=city_name
  this.data.region_id=region_id
  this.data.region_name=region_name
  if(this.data.city_id)
    {
    this.data.city_name=this.data.city_name +'-'+this.data.region_name
    
    }
  if(this.data.store_flag==1)
  this.route.navigateByUrl(`/home/me/profile/stores/add-store/${JSON.stringify(this.data)}`)
  else
  {
    if(this.data.product_flag==1)
        this.route.navigateByUrl(`/home/me/profile/my-profile/add_product/${JSON.stringify(this.data)}`)
         else
        this.route.navigateByUrl(`/home/me/profile/offers/offer-add/${JSON.stringify(this.data)}`)
     
  }}else{
    if(this.storessserve.product_data.city_id)
    { this.storessserve.product_data.city_id=city_id
      this.storessserve.product_data.city_name=city_name
      this.storessserve.product_data.region_id=region_id
      this.storessserve.product_data.region_name=region_name
    this.storessserve.product_data.city_name=this.storessserve.product_data.city_name +'-'+this.storessserve.product_data.region_name
    if(this.storessserve.product_data.routation==1)
    this.route.navigateByUrl(`/home/me/my-advertising/edit-product/${this.storessserve.product_data.id}`)
    if(this.storessserve.product_data.routation==0)
    this.route.navigateByUrl(`/home/me/profile/my-profile/edit-product/${this.storessserve.product_data.id}`)
    if(this.storessserve.product_data.routation==2)
    this.route.navigateByUrl(`/home/me/my-advertising/edit-expire/${this.storessserve.product_data.id}`)
    if(this.storessserve.product_data.routation==3)
    this.route.navigateByUrl(`/home/me/my-advertising/edit-passive/${this.storessserve.product_data.id}`)
    if(this.storessserve.product_data.routation==4) 
    this.route.navigateByUrl(`/home/me/store/${this.storessserve.product_data.store_id}/edit-product/${this.storessserve.product_data.id}`)
    if(this.storessserve.product_data.routation==5) 
    this.route.navigateByUrl(`/home/me/store/${this.storessserve.product_data.store_id}/myproducts/${this.storessserve.product_data.store_id}/edit-product/${this.storessserve.product_data.id}`)
    if(this.storessserve.product_data.routation==6) 
    this.route.navigateByUrl(`/home/me/store/${this.storessserve.product_data.store_id}/myproducts/${this.storessserve.product_data.store_id}/edit-passive/${this.storessserve.product_data.id}`)
    if(this.storessserve.product_data.routation==7) 
    this.route.navigateByUrl(`/home/me/store/${this.storessserve.product_data.store_id}/myproducts/${this.storessserve.product_data.store_id}/edit-expire/${this.storessserve.product_data.id}`)
              
    }

  }
}
back(){
  console.log(this.storessserve.product_data.routation)
//if(this.data.edit)
  { 
    //if(this.storessserve.product_data.routation&& this.storessserve.product_data.routation==0)
  //this.route.navigateByUrl(`/home/me/profile/my-profile/edit-product/${this.storessserve.product_data.id}`)
 // this.route.navigateByUrl(`/home/me/profile/my-profile/edit-product/${this.storessserve.product_data.id}`)
   if(this.storessserve.product_data.routation&&this.storessserve.product_data.routation==1) 
   this.route.navigateByUrl(`/home/me/my-advertising/cities/data`)
   if(this.storessserve.product_data.routation&&this.storessserve.product_data.routation==2) 
   this.route.navigateByUrl(`/home/me/my-advertising/cities/data`)
   if(this.storessserve.product_data.routation&&this.storessserve.product_data.routation==3) 
   this.route.navigateByUrl(`/home/me/my-advertising/cities/data`)
   if(this.storessserve.product_data.routation&&this.storessserve.product_data.routation==4) 
   this.route.navigateByUrl(`/home/me/store/${this.storessserve.product_data.store_id}/cities/data`)

  } // else   {
    if(this.storessserve.product_data.routation&&this.storessserve.product_data.routation==4) 
    this.route.navigateByUrl(`/home/me/store/${this.storessserve.product_data.store_id}/cities/data`)
    if(this.storessserve.product_data.routation&&this.storessserve.product_data.routation==5||this.storessserve.product_data.routation==6||this.storessserve.product_data.routation==7) 
     
      
    this.route.navigateByUrl(`/home/me/store/${this.storessserve.product_data.store_id}/myproducts/${this.storessserve.product_data.store_id}/cities/data`)

// this.route.navigateByUrl(`/home/me/profile/my-profile/add_product/${this.data}`)
  // }
}
}

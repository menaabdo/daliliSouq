import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../models/city.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
response!:any
cities!:City[]
hasregion!:boolean
data!:any
  constructor(private storessserve:UserService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
     this.data=this.active.snapshot.params['data']
    console.log(this.storessserve.product_data)
  console.log(this.storessserve.product_data)
    this.storessserve.cities().subscribe((res)=>{this.response=res;this.cities=this.response.Response})
     }
  getregion(id:number,l:number,name:string){
   
    if(this.active.snapshot.params['data']!='data')
    {let data
     
    data=JSON.parse(this.active.snapshot.params['data'])
   this.data=data
   console.log(this.data.rotation)
     if(l!=0)
   { if(this.active.snapshot.params['data']!='data')
   
     data.city_id=id
     else
       this.storessserve.product_data.city_id=id
      this.route.navigateByUrl(`/home/me/profile/regions/${JSON.stringify(data)}`)
    }else {
      console.log('lllllllllllllll')
     data.city_name=name;data.city_id=id
     this.storessserve.product_data.city_name=name;this.storessserve.product_data.city_id=id
     if(this.active.snapshot.params['data']=='data')
   { if(this.storessserve.product_data.routation==0) 
     this.route.navigateByUrl(`/home/me/profile/my-profile/edit-product/${this.storessserve.product_data.id}`)
     if(this.storessserve.product_data.routation==1) 
     this.route.navigateByUrl(`/home/me/my-advertising/edit-product/${this.storessserve.product_data.id}`)
     if(this.storessserve.product_data.routation==2) 
     this.route.navigateByUrl(`/home/me/my-advertising/edit-expire/${this.storessserve.product_data.id}`)
     if(this.storessserve.product_data.routation==3) 
     this.route.navigateByUrl(`/home/me/my-advertising/edit-passive/${this.storessserve.product_data.id}`)
    
     if(this.storessserve.product_data.routation==4) 
     this.route.navigateByUrl(`/home/me/store/${this.storessserve.product_data.store_id}/edit-product/${this.storessserve.product_data.id}`)
     
    }
     if(data.store_flag==1)
      this.route.navigateByUrl(`/home/me/profile/stores/add-store/${JSON.stringify(data)}`)
      else
        if(data.product_flag==1)
        this.route.navigateByUrl(`/home/me/profile/my-profile/add_product/${JSON.stringify(data)}`)
        if(this.storessserve.product_data.routation==3) 
        this.route.navigateByUrl(`/home/me/store/${this.storessserve.product_data.store_id}/edit-product/${this.storessserve.product_data.id}`)
        
        else
        if(this.storessserve.product_data.routation==3) 
        this.route.navigateByUrl(`/home/me/store/${this.storessserve.product_data.store_id}/edit-product/${this.storessserve.product_data.id}`)
        
        this.route.navigateByUrl(`/home/me/profile/offers/offer-add/${JSON.stringify(data)}`)
     
}}else{
  if(l!=0)
   {
       this.storessserve.product_data.city_id=id
       if( this.storessserve.product_data.routation==0)
      this.route.navigateByUrl(`/home/me/profile/regions/data`)
      if( this.storessserve.product_data.routation==0||this.storessserve.product_data.routation==1||this.storessserve.product_data.routation==2||this.storessserve.product_data.routation==3)
      this.route.navigateByUrl(`/home/me/my-advertising/regions/data`)
      if(this.storessserve.product_data.routation==4) 
     this.route.navigateByUrl(`/home/me/store/${this.storessserve.product_data.store_id}/regions/data`)
     
   
    }else {
    
      console.log('lllllllllllllll')
     this.storessserve.product_data.city_name=name;this.storessserve.product_data.city_id=id
    this.route.navigateByUrl(`/home/me/profile/my-profile/edit-product/${this.storessserve.product_data.id}`)
     
     
}}
  }
  back(){
    console.log(this.storessserve.product_data.routation)
 //if(this.data.edit)
    { 
      //if(this.storessserve.product_data.routation&& this.storessserve.product_data.routation==0)
    //this.route.navigateByUrl(`/home/me/profile/my-profile/edit-product/${this.storessserve.product_data.id}`)
   // this.route.navigateByUrl(`/home/me/profile/my-profile/edit-product/${this.storessserve.product_data.id}`)
     if(this.storessserve.product_data.routation&&this.storessserve.product_data.routation==1) 
     this.route.navigateByUrl(`/home/me/my-advertising/edit-product/${this.storessserve.product_data.id}`)
     if(this.storessserve.product_data.routation&&this.storessserve.product_data.routation==2) 
     this.route.navigateByUrl(`/home/me/my-advertising/edit-expire/${this.storessserve.product_data.id}`)
     if(this.storessserve.product_data.routation&&this.storessserve.product_data.routation==3) 
     this.route.navigateByUrl(`/home/me/my-advertising/edit-passive/${this.storessserve.product_data.id}`)
     if(this.storessserve.product_data.routation&&this.storessserve.product_data.routation==4) 
     this.route.navigateByUrl(`/home/me/store/${this.storessserve.product_data.store_id}/edit-product/${this.storessserve.product_data.id}`)

    } // else   {
      if(this.storessserve.product_data.routation&&this.storessserve.product_data.routation==4) 
      this.route.navigateByUrl(`/home/me/store/${this.storessserve.product_data.store_id}/edit-product/${this.storessserve.product_data.id}`)
 
 // this.route.navigateByUrl(`/home/me/profile/my-profile/add_product/${this.data}`)
    // }
  }

}

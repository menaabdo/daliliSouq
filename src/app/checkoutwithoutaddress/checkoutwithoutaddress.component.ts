import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../models/addresss.model';
import { Cart } from '../models/cart.model';
import { City } from '../models/city.model';
import { Country } from '../models/country.model';
import { Region } from '../models/region.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-checkoutwithoutaddress',
  templateUrl: './checkoutwithoutaddress.component.html',
  styleUrls: ['./checkoutwithoutaddress.component.scss']
})
export class CheckoutwithoutaddressComponent implements OnInit {
  response_cart!:any
  cart_products!:any
  cart_data!:Cart
  /////////////////variables for address////////
  
  setdefault=0
  title!:string
  city!:string
  address_id!:number
  city_name!:string
  region_name!:string
  fmobile!:number
  smobile!:number
  street!:number
  building!:number
  floor!:number
  apartment!:number
  landmark!:number
  postalcode!:number
  response2: any;
  country!:Country
  add!:Address
  response_city!:any
  cities!:City[]
  ////////////end cities variables////
  ////////////variables for region////////////
  response_region!:any
  regions!:Region[]
  city_id!:number
  ////////variables for region end////////////////
  selected_city!:Region[]
  region_id!:number
///////////////////////////////////////////////
  constructor(private userserve:UserService,private route:Router) { }

  ngOnInit(): void {
    this.cart()
      //get last address
      this.address_profile()
      //////////////get cities
      this.getcitites()
  }
  ///////////////////////////cart////////////////
  cart(){
    this.userserve.products_cart().subscribe((res)=>{
      console.log(res)
      this.response_cart=res
      this.cart_data=this.response_cart.Response
      this.cart_products=this.cart_data.cart
    })
  }
  address_profile(){
    this.userserve.profile({country_id:1}).subscribe((res)=>{this.response2=res;this.add=this.response2.Response.address
      this.country=this.response2.Response.country ;console.log(res)
    })
  }
  getcitites(){
    this.userserve.cities().subscribe((res)=>{this.response_city=res;this.cities=this.response_city.Response})
  
  }
  getcityid(e:any){
    for(let i=0;i<e.target.childNodes.length;i++){
      if(e.target.value==e.target.childNodes[i].value)
            {console.log(e.target.childNodes[i].value)
              this.city_id=e.target.childNodes[i].id 
              this.city_name=e.target.value
              this.selected_city=this.cities[i-1]?.regions
              break;
            }
          }
  }
      /////////////////end cities functions/////////////////
  
     /////////////////////getregionid//////////////
  getregionid(e:any){
    for(let i=0;i<e.target.childNodes.length;i++){
      if(e.target.value==e.target.childNodes[i].value)
            {console.log(e.target.childNodes[i].value)
              this.region_id=e.target.childNodes[i].id 
             this.region_name=e.target.value
              break;
            }
          }
  }
     ////////////////////////////////
  
  
      setasdefault(){
        if(this.setdefault==0)
        this.setdefault=1
        else this.setdefault=0
      }
      addnewaddress(){
        console.log(this.title)
       let fd=new  FormData();
       let address=this.city_name+','+this.region_name
       if(this.title)
       fd.append('name',this.title)
       
        fd.append('city_id',this.city_id as unknown as string)
       fd.append('region_id',this.region_id as unknown as string)
       if(this.fmobile)
       fd.append('mobile',this.fmobile as unknown as string)
       if(this.smobile)
       fd.append('phone',this.smobile as unknown as string)
       if(this.street)
      {address+=','+this.street
         fd.append('street',this.street as unknown as string )}
       if(this.floor)
       {address+=','+this.floor
         fd.append('floor',this.floor as unknown as string)}
       if(this.building)
       {address+=','+this.building 
         fd.append('building',this.building as unknown as string)}
       if(this.apartment)
       {address+=','+this.apartment
         fd.append('apartment',this.apartment as unknown as string)}
       if(this.landmark)
       fd.append('landmark',this.landmark as unknown as string)
       if(this.setdefault==1){
         fd.append('is_default','1')
       }
       fd.append('address',address)
        this.userserve.addaddress(fd).subscribe((res)=>{
          this.route.navigateByUrl('/home/checkout/1')
         
        })
  
      }
  

}

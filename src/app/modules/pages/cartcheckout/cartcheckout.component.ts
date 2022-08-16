import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/addresss.model';
import { Cart } from 'src/app/models/cart.model';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cartcheckout',
  templateUrl: './cartcheckout.component.html',
  styleUrls: ['./cartcheckout.component.scss']
})
export class CartcheckoutComponent implements OnInit {
f=[0,9,9,3,4,3]
  response!:any
  addresses!:Address[]
  afterdel!:object
  mess!:string
  ///////////////variables for cart/////////
response_cart!:any
cart_products!:any
cart_data!:Cart
deliver_fast=0

//////////////////////////////////
    constructor(private addressserve:UserService,private activeroute:Router) { }
  
    ngOnInit(): void {
      //get all address
      this.getalladdress()
      //get all products in cart
      this.cart()
     
  
  
    }
    getalladdress(){
      this.addressserve.showalladdress().subscribe((res)=>{
        this.response=res;
        this.addresses=this.response.Response;
        
      })
    }
   newaddress(){
      
    }
    cart(){
      this.addressserve.products_cart().subscribe((res)=>{
        console.log(res)
        this.response_cart=res
        this.cart_data=this.response_cart.Response
        this.cart_products=this.cart_data.cart
      })
    }
    getstatus(e:any){
      if(this.deliver_fast==0)
     this.deliver_fast=1
     else 
     this.deliver_fast=0
    }
}

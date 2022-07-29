import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-salesdetailes',
  templateUrl: './salesdetailes.component.html',
  styleUrls: ['./salesdetailes.component.scss']
})
export class SalesdetailesComponent implements OnInit {

  term=''
  id!:number
  response!:any
  order!:Order
    constructor(private orderdetailes:UserService,private activeroute: ActivatedRoute,) {
      this.id=this.activeroute.snapshot.params['id'] 
     }
  
    ngOnInit(): void {
      //this.profile.store_profile(this.id).subscribe((res)=>{this.response=res;this.store=this.response.Response;console.log(res)})
  this.orderdetailes.seller_order(this.id).subscribe((res)=>{this.response=res;this.order=this.response.Response;console.log(res)})
    }
    setoutofstock(cart_id:number){
this.orderdetailes.setoutofstock(cart_id).subscribe((res)=>{console.log(res)})
    }

}

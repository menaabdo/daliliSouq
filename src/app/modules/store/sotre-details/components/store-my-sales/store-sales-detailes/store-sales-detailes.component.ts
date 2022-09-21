import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-store-sales-detailes',
  templateUrl: './store-sales-detailes.component.html',
  styleUrls: ['./store-sales-detailes.component.scss']
})
export class StoreSalesDetailesComponent implements OnInit {

  term=''
  id!:number
  response!:any
  order!:Order
  flag=0
    constructor(private orderdetailes:UserService,private activeroute: ActivatedRoute,) {
      this.id=this.activeroute.snapshot.params['store-id'] 
     }
  

  ngOnInit(): void {
    console.log(this.id)
    this.orderdetailes.store_order_detailes(this.activeroute.snapshot.params['store-id'],this.activeroute.snapshot.params['order-id']).subscribe((res)=>{this.response=res; this.order=this.response.Response
   console.log(res)})
  }
  setoutofstock(cart_id:number){
    this.flag=1
this.orderdetailes.setoutofstock(cart_id).subscribe((res)=>{console.log(res); window.location.reload()})
  }

}

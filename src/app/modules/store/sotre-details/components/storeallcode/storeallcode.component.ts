import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-storeallcode',
  templateUrl: './storeallcode.component.html',
  styleUrls: ['./storeallcode.component.scss']
})
export class StoreallcodeComponent implements OnInit {

  id!:number
  response!:any
  order!:Order
  flag=0
  store_id!:number
  order_id!:number
    constructor(private orderdetailes:UserService,private activeroute: ActivatedRoute,) {
      this.id=this.activeroute.snapshot.params['store-id'] 
      this.store_id=this.activeroute.snapshot.params['store-id']
      this.order_id=this.activeroute.snapshot.params['order-id']
    
     }
  

  ngOnInit(): void {
    console.log(this.id)
    this.orderdetailes.store_order_detailes(this.activeroute.snapshot.params['store-id'],this.activeroute.snapshot.params['order-id']).subscribe((res)=>{this.response=res; this.order=this.response.Response
   console.log(res)})
  }
  copyit(){
    const cb = navigator.clipboard;
    const paragraph = document.getElementById('p')!;
    cb.writeText(paragraph.innerText)
  
  }
}

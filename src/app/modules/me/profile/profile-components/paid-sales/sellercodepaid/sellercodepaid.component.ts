import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sellercodepaid',
  templateUrl: './sellercodepaid.component.html',
  styleUrls: ['./sellercodepaid.component.scss']
})
export class SellercodepaidComponent implements OnInit {

  id!:number
  response!:any
  order!:Order
  orders!:Order[]
    constructor(private orderdetailes:UserService,private activeroute: ActivatedRoute,) {
      this.id=this.activeroute.snapshot.params['id'] 
     }
  
    ngOnInit(): void {
      this.orderdetailes.paid_orders(undefined as unknown  as string,undefined as unknown  as string).subscribe((res)=>{
        this.response=res;
        this.orders=this.response.Response.orders.data;
        this.order=this.orders[this.id]
        console.log(this.order)
      })
    }
    copyit(){
      const cb = navigator.clipboard;
      const paragraph = document.getElementById('p')!;
      cb.writeText(paragraph.innerText)
    
    }
}
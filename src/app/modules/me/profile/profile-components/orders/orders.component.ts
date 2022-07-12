import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private ordersserve:UserService ) { }
response!:any
orders!:Order[]
is_complete=0
  ngOnInit(): void {
    this.ordersserve.myorders(this.is_complete).subscribe((res)=>{console.log(res);this.response=res;this.orders=this.response.Response.data;console.log(this.orders[0].id)})
  }
  waitingorders(){
    this.is_complete=0
    this.ordersserve.myorders(this.is_complete).subscribe((res)=>{console.log(res);this.response=res;this.orders=this.response.Response.data;console.log(this.orders[0].id)})
  
  }
  deliveredorders(){
    this.is_complete=1
    this.ordersserve.myorders(this.is_complete).subscribe((res)=>{console.log(res);this.response=res;this.orders=this.response.Response.data;console.log(this.orders[0].id)})
  
  }

}

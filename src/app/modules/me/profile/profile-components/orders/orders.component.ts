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
page=1
  ngOnInit(): void {
    this.ordersserve.myorders(this.is_complete,1).subscribe((res)=>{console.log(res);this.response=res;this.orders=this.response.Response.data;console.log(this.orders[0].id)
    while(this.page<=10){
      this.page++
      
    this.ordersserve.myorders(this.is_complete,this.page).subscribe((res)=>{console.log(res);this.response=res;
       let orders=this.response.Response.data;
      this.orders= this.orders.concat(orders)
       console.log(this.orders.length)})

       
    }
  })

  }
  waitingorders(){
    console.log(window.scroll)

    // this.is_complete=0
    // this.ordersserve.myorders(this.is_complete,1).subscribe((res)=>{console.log(res);this.response=res;this.orders=this.response.Response.data;console.log(this.orders[0].id)})
    while(this.page<10){
      this.is_complete=0
      
    this.ordersserve.myorders(this.is_complete,this.page).subscribe((res)=>{console.log(res);this.response=res;
       let orders=this.response.Response.data;
      this.orders= this.orders.concat(orders)
       console.log(this.orders)})
       this.page++
    }
  }
  deliveredorders(){
    // this.is_complete=1
    // this.ordersserve.myorders(this.is_complete,1).subscribe((res)=>{console.log(res);this.response=res;this.orders=this.response.Response.data;console.log(this.orders[0].id)})
    while(this.page<10){
      this.is_complete=1
      
    this.ordersserve.myorders(this.is_complete,this.page).subscribe((res)=>{console.log(res);this.response=res;
       let orders=this.response.Response.data;
      this.orders= this.orders.concat(orders)
       console.log(this.orders)})
       this.page++
    }

  }
  

}

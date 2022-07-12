import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-store-paid-sales',
  templateUrl: './store-paid-sales.component.html',
  styleUrls: ['./store-paid-sales.component.scss']
})
export class StorePaidSalesComponent implements OnInit {

  response!:any
orders?:Order[]
start_d!:string
end_d!:string
id!:number
  constructor(private paid_sales:UserService,private activeroute:ActivatedRoute) {
    this.id=this.activeroute.snapshot.params['id']
   }

  ngOnInit(): void {
  this.paid_sales.paid_orders_store(this.id,this.start_d,this.end_d).subscribe((res)=>{this.response=res;this.orders=this.response.Response.orders.data ;console.log(this.orders)})
  }
  filterorders(){
    this.paid_sales.paid_orders_store(this.id,this.start_d,this.end_d).subscribe((res)=>{this.response=res;this.orders=this.response.Response.orders.data ;console.log(this.orders)})

  }
  reset(){
    this.start_d=''
    this.end_d=''
  }

}

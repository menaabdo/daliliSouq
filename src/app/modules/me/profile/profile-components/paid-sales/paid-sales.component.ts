import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-paid-sales',
  templateUrl: './paid-sales.component.html',
  styleUrls: ['./paid-sales.component.scss']
})
export class PaidSalesComponent implements OnInit {
response!:any
orders?:Order[]
start_d!:string
end_d!:string
  constructor(private router:Router,private paid_sales:UserService) { }

  ngOnInit(): void {
  this.paid_sales.paid_orders(this.start_d,this.end_d).subscribe((res)=>{this.response=res;this.orders=this.response.Response.orders.data ;console.log(this.orders)})
  }
  filterorders(){
    this.paid_sales.paid_orders(this.start_d,this.end_d).subscribe((res)=>{this.response=res;this.orders=this.response.Response.orders.data ;console.log(this.orders)})

  }
  reset(){
    this.start_d=''
    this.end_d=''
  }
  details(order_id:number){
    this.router.navigateByUrl(`/home/me/profile/seller-order/${order_id}`)

  }


}

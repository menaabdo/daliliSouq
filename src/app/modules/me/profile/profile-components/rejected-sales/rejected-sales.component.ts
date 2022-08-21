import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-rejected-sales',
  templateUrl: './rejected-sales.component.html',
  styleUrls: ['./rejected-sales.component.scss']
})
export class RejectedSalesComponent implements OnInit {
response!:any
orders!:Order[]
  constructor(private router:Router,private rejected:UserService) { }

  ngOnInit(): void {
    this.rejected.rejected_orders().subscribe((res)=>{this.response=res;this.orders=this.response.Response.orders.data})
  }
  details(order_id:number){
    this.router.navigateByUrl(`/home/me/profile/seller-order/${order_id}`)

  }

}

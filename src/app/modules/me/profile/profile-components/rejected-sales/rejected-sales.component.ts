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
start_d!:string
end_d!:string
page=1
  constructor(private router:Router,private rejected:UserService) { }

  ngOnInit(): void {
    this.rejected.rejected_orders(this.page).subscribe((res)=>{this.response=res;this.orders=this.response.Response.orders.data
       if(this.orders)
       {while(this.page<11){
        this.page++
        this.rejected.rejected_orders(this.page).subscribe((res)=>{
          this.response=res;
          let orders=this.response.Response.orders.data
          this.orders=this.orders.concat(orders)
          
        })
        if(this.page==10)
        break;
       }}
      })
  }
  details(order_id:number){
    console.log(order_id)
    this.router.navigateByUrl(`/home/me/profile/seller-order/${order_id}`)

  }
  reset(){
    this.start_d=''
    this.end_d=''
    window.location.reload()
  }
  filterorders(){
    this.rejected.rejected_orders(1,this.start_d,this.end_d).subscribe((res)=>{this.response=res;this.orders=this.response.Response.orders.data})
 
  }

}

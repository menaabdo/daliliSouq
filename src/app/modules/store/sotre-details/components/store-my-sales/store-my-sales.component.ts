import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-store-my-sales',
  templateUrl: './store-my-sales.component.html',
  styleUrls: ['./store-my-sales.component.scss']
})
export class StoreMySalesComponent implements OnInit {

  response!:any
  orders?:Order[]
 page=1
  id!:number
    constructor(private sales:UserService,private activeroute:ActivatedRoute,private route:Router) {
      this.id=this.activeroute.snapshot.params['id']
     }
  
    ngOnInit(): void {
    this.sales.orders_store(this.id,this.page).subscribe((res)=>{this.response=res;this.orders=this.response.Response.orders.data ;console.log(this.orders)
    while(this.page<10){
      this.sales.orders_store(this.id,this.page).subscribe((res)=>{
        this.response=res;
        let orders=this.response.Response.orders.data ;
        this.orders=this.orders?.concat(orders)
        console.log(this.orders)})

        this.page++
    }})
  }
    getdetailes(id:number){
      
       this.route.navigateByUrl(`/home/me/store/${this.id}/sale-detailes/${id}/${this.id}`)
    }

}

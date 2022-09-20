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

pages!:number[]
    constructor(private sales:UserService,private activeroute:ActivatedRoute,private route:Router) {
      this.id=this.activeroute.snapshot.params['id']
     }
  
    ngOnInit(): void {
      this.pages=[]
    this.sales.orders_store(this.id,this.page).subscribe((res)=>{this.response=res;this.orders=this.response.Response.orders.data ;console.log(res)
      for(let i =0;i<  this.response.Response.orders.last_page;i++){
        this.pages.push(i+1)
        console.log(res)
      }
    })
  }
  paginate(page:number){
    document.getElementById('load')!.style.display='block'
   
    this.page=page
    this.sales.orders_store(this.id,this.page).subscribe((res)=>{this.response=res;this.orders=this.response.Response.orders.data ;console.log(this.orders)
      document.getElementById('load')!.style.display='none'
    
    })
  }
    getdetailes(id:number){
      
       this.route.navigateByUrl(`/home/me/store/${this.id}/sale-detailes/${id}/${this.id}`)
    }

}

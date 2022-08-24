import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
response!:any
sales!:any 
page=1

  constructor(private sale:UserService,private route:Router) { }

  ngOnInit(): void {
    this.sale.mysales(this.page).subscribe((res)=>{this.response=res;
      this.sales=this.response.Response.orders.data;})
     while(this.page<10)
    { 
   this.sale.mysales(this.page).subscribe((res)=>{this.response=res;
     let sales=this.response.Response.orders.data;
     this.sales=this.sales.concat(sales)
    
      console.log(sales)})
  this.page++
      }
  }
  details(id:number){
    this.route.navigateByUrl(`/home/me/profile/saledetailes/${id}`)
  }

}

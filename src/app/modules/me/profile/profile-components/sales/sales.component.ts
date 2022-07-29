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
  constructor(private sale:UserService,private route:Router) { }

  ngOnInit(): void {
    this.sale.mysales().subscribe((res)=>{this.response=res;
      this.sales=this.response.Response.orders.data;
      console.log(res)})
  }
  details(id:number){
    this.route.navigateByUrl(`/home/me/profile/saledetailes/${id}`)
  }

}

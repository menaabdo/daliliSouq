import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
response!:any
sales!:any
  constructor(private sale:UserService) { }

  ngOnInit(): void {
    this.sale.mysales().subscribe((res)=>{this.response=res;this.sale=this.response.Response.orders.data})
  }

}

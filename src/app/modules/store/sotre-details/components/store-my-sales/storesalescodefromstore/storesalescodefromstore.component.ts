import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-storesalescodefromstore',
  templateUrl: './storesalescodefromstore.component.html',
  styleUrls: ['./storesalescodefromstore.component.scss']
})
export class StoresalescodefromstoreComponent implements OnInit {

  id!:number
  response!:any
  order!:Order
  index!:number
 product!:any
  constructor(private orderdetailes:UserService,private activeroute: ActivatedRoute,) {
  }


  ngOnInit(): void {
    this.id=this.activeroute.snapshot.params['id'] 
    this.index=this.activeroute.snapshot.params['index'] 
    console.log(this.id,this.index)
    this.orderdetailes.store_order_detailes(this.activeroute.snapshot.params['index'],this.activeroute.snapshot.params['id']).subscribe((res)=>{this.response=res; this.order=this.response.Response
      console.log(res)})
  
  }
  copyit(){
    const cb = navigator.clipboard;
    const paragraph = document.getElementById('p')!;
    cb.writeText(paragraph.innerText)
  
  }


}

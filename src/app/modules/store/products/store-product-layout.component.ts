import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-store-product-layout',
  templateUrl: './store-product-layout.component.html',
  styleUrls: ['./store-product-layout.component.scss']
})
export class StoreProductLayoutComponent implements OnInit {
id!:number
term=''
response!:any
ads!:any
  constructor(private productservice:UserService,private activeroute:ActivatedRoute,private route :Router) {
    this.id=this.activeroute.snapshot.params['id']
   }

  ngOnInit(): void {
  this.route.navigateByUrl(`/home/me/store/${this.id}/myproducts/${this.id}/active-ads/${this.id}`)
this.getproducts() 
}
  getproducts(){
    this.productservice.products(this.id,this.term).subscribe((res)=>{this.response=res;this.ads=this.response.Response})
    
  }
}

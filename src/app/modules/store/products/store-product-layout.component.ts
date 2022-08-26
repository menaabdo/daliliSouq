import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-store-product-layout',
  templateUrl: './store-product-layout.component.html',
  styleUrls: ['./store-product-layout.component.scss']
})
export class StoreProductLayoutComponent implements OnInit {
id!:number
  constructor(private activeroute:ActivatedRoute,private route :Router) {
    this.id=this.activeroute.snapshot.params['id']
   }

  ngOnInit(): void {
  this.route.navigateByUrl(`/home/me/store/${this.id}/myproducts/${this.id}/active-ads/${this.id}`)
  }

}

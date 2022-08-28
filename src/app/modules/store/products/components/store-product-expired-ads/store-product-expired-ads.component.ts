import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-store-product-expired-ads',
  templateUrl: './store-product-expired-ads.component.html',
  styleUrls: ['./store-product-expired-ads.component.scss']
})
export class StoreProductExpiredAdsComponent implements OnInit {

  flag=0
term=''
id!:number
response!:any
products!:Product[]


catrgory_id!:number
  constructor(private router:Router,private productservice:UserService,private activeroute:ActivatedRoute) {
    this.id=this.activeroute.snapshot.params['id']
   }

  ngOnInit(): void {
    this.productservice.products(this.id).subscribe((res)=>{this.response=res;this.products=this.response.Response.expired.data})
    
  }
  shrink(){
    this.flag=0
      }
     spread(){
        this.flag=1
          }

          repost(i:number){
            let ad=(this.products[i])
            let ids:any
            if(ad.category?.hasOwnProperty('category')){
             ids=ad.category
             
            
             while(ids.hasOwnProperty('category')){
              ids=ids.category
              if(ids.hasOwnProperty('id'))
             { this.catrgory_id=ids.id
              //console.log(this.id)}
          
            }
          }
          console.log(this.catrgory_id)
          }
         else this.catrgory_id=ad.category?.id ||0
         this.router.navigateByUrl(`/home/me/store/${this.id}/myproducts/${this.id}/repost/${ad.id}/${this.catrgory_id}`)
         
         }



}

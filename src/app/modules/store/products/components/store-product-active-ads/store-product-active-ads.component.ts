import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-store-product-active-ads',
  templateUrl: './store-product-active-ads.component.html',
  styleUrls: ['./store-product-active-ads.component.scss']
})
export class StoreProductActiveAdsComponent implements OnInit {
flag=0
term=''
id!:number
response!:any
ads!:Product[]
catrgory_id!:number
  constructor(private productservice:UserService,private activeroute:ActivatedRoute,private router:Router) {
    this.id=this.activeroute.snapshot.params['id']
   }

  ngOnInit(): void {
    this.productservice.products(this.id).subscribe((res)=>{this.response=res;this.ads=this.response.Response.active.data})
    
  }
  delete(id:number){
    this.productservice.delete_product(id).subscribe((res)=>{
    window.location.reload()
     })
  }  
  setoutofstock(id:number){
    this.productservice.update_product({id:id,quantity:0,colors:'[]'}).subscribe((res)=>{console.log(res)})
    
  }   
  change(e:any){
    e.target.style.color='black'
  }
  shrink(){
    this.flag=0
      }
     spread(){
        this.flag=1
          }

          repost(i:number){
            let ad=(this.ads[i])
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

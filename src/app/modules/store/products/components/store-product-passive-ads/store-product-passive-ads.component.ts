import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-store-product-passive-ads',
  templateUrl: './store-product-passive-ads.component.html',
  styleUrls: ['./store-product-passive-ads.component.scss']
})
export class StoreProductPassiveAdsComponent implements OnInit {

  flag=0
  term=''
  id!:number
  response!:any
  ads!:Product[]
  catrgory_id!:number
    constructor(private router:Router,private productservice:UserService,private activeroute:ActivatedRoute) {
      this.id=this.activeroute.snapshot.params['id']
     }
  
    ngOnInit(): void {
      this.getproducts()
      }
    getproducts(){
      this.productservice.products(this.id,this.term).subscribe((res)=>{this.response=res;this.ads=this.response.Response.passive.data ;console.log(res)})
      
  
    }
    close(){
      //this.getproducts()
     if(this.term!='')
     {document.getElementById('icon')?.classList.remove('fa-times')
     document.getElementById('icon')?.classList.remove('fa')
    
     document.getElementById('icon')?.classList.add('porto-icon-search-3') 
   }
     else{document.getElementById('icon')?.classList.remove('porto-icon-search-3')
     console.log(document.getElementById('icon'))
     document.getElementById('icon')?.classList.add('fa') 
     document.getElementById('icon')?.classList.add('fa-times') 
   }
    }
    search(){
     this.getproducts()
      if(this.term=='')
     {document.getElementById('icon')?.classList.remove('fa-times')
     document.getElementById('icon')?.classList.remove('fa')
    
     document.getElementById('icon')?.classList.add('porto-icon-search-3') 
   }
   
    }
    toggle(){
     this.getproducts()
      if( document.getElementById('icon')?.classList.contains('fa')){
          this.term=''
          document.getElementById('icon')?.classList.remove('fa-times')
     document.getElementById('icon')?.classList.remove('fa')
    
     document.getElementById('icon')?.classList.add('porto-icon-search-3') 
   
      }
      this.getproducts()
     
    }
    setoutofstock(id:number){
      this.productservice.update_product({id:id,quantity:0,colors:'[]'}).subscribe((res)=>{console.log(res)})
      
    }   
    delete(id:number){
      this.productservice.delete_product(id).subscribe((res)=>{
      window.location.reload()
       })
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

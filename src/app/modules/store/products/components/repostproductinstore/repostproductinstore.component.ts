import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from 'src/app/models/package.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-repostproductinstore',
  templateUrl: './repostproductinstore.component.html',
  styleUrls: ['./repostproductinstore.component.scss']
})
export class RepostproductinstoreComponent implements OnInit {

  product_id!:number
  response!:any
  category_response!:any
  product!:Product
  id!:number
  response_package!:any
  response_repost!:any
packages!:Package[]
category_id!:number
store_id!:number
mess!:string
subscribevalue!:string
  constructor(private categoryserve:CategoryService,private route:Router,private active:ActivatedRoute,private userserve:UserService) { 
    this.product_id=this.active.snapshot.params['product_id']
    this.category_id=this.active.snapshot.params['category_id']
    this.store_id=this.active.snapshot.params['id']
    console.log(this.category_id)

  }  

  ngOnInit(): void {
    this.categoryserve.packages(this.category_id).subscribe((res)=>{this.response=res;this.packages=this.response.Response.packages;console.log(this.response.Response)} )

  
  }
  subscribe(category_id:number,package_id:number){
    this.categoryserve.subscribe_package(category_id,package_id).subscribe((res)=>{
    this.category_response=res
    if(this.category_response.Error.desc=='You already subscribed to this package')
    {this.mess='You already subscribed to this package'
     // this.subscribevalue='yes'
      var modal = document.getElementById("myModal")!;
          
      var span = document.getElementsByClassName("close")![0];
      modal.style.display = "block";
    }
    else{
           this.userserve.repost(this.product_id).subscribe((res)=>{console.log(res)
            this.response_repost=res
            if(this.response_repost.Error.desc=="Invalid product id")
           { 
             this.mess="Invalid product id"
             var modal = document.getElementById("myModal")!;
          
             var span = document.getElementsByClassName("close")![0];
             modal.style.display = "block";
             setTimeout(()=>{ this.route.navigateByUrl(`/home/me/store/${this.store_id}/myproducts/${this.store_id}/active-ads/${this.store_id}`)
            },1000) }
      else this.route.navigateByUrl(`/home/me/store/${this.store_id}/myproducts/${this.store_id}/active-ads/${this.store_id}`)
                 
     })
    }
   
    })
   


  }
  
  continueo(){
    this.userserve.repost(this.product_id).subscribe((res)=>{console.log(res)
          this.response_repost=res
      if(this.response_repost.Error.desc=="Invalid product id")
     { 
       this.mess="Invalid product id"
       var modal = document.getElementById("myModal")!;
    
       var span = document.getElementsByClassName("close")![0];
       modal.style.display = "block";
      setTimeout(()=>{ this.route.navigateByUrl(`/home/me/store/${this.store_id}/myproducts/${this.store_id}/active-ads/${this.store_id}`)
    },1000) }
    else this.route.navigateByUrl(`/home/me/store/${this.store_id}/myproducts/${this.store_id}/active-ads/${this.store_id}`)
         
    })
  }
  close(){
    var modal = document.getElementById("myModal")!;
          
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "none";
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from 'src/app/models/package.model';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-product-double-view',
  templateUrl: './product-double-view.component.html',
  styleUrls: ['./product-double-view.component.scss']
})
export class ProductDoubleViewComponent implements OnInit {

  response!:any
packages!:Package[]
selectedprice!:number
  constructor(private packageserve:CategoryService,private activeroute:ActivatedRoute,private userservese:UserService,private route:Router) { }
//country_id=this.activeroute.snapshot.params['country_id']
  ngOnInit(): void {
    this.packageserve.profile_packages(1,0).subscribe((res)=>{this.response=res;this.packages=this.response.Response; console.log(res)})
    
  }
  select(){
    console.log(this.selectedprice, )
    this.userservese.update_product({'id':this.activeroute.snapshot.params['product_id'],'package_type_country_id':this.selectedprice}).subscribe((res)=>{console.log(res)
       console.log(this.activeroute.snapshot.params)
         this.route.navigateByUrl(`/home/me/store/${this.activeroute.snapshot.params['id']}/myproducts/${this.activeroute.snapshot.params['id']}`)
        
  console.log(res)
    })
    
  }
  detectme(id:number,value:number,package_id:number,last_child:number,price_id:number){
  this.selectedprice=price_id
    let ele=document.getElementById((package_id+last_child) as unknown as string)!
       ele.innerHTML=value as unknown as string
   let all= document.getElementsByClassName('activedays')
   
    for(let i=0; i< all.length;i++){
      all[i].classList.remove('activedays')
    }
    document.getElementById(id as unknown as string)!.classList.add('activedays')
    
  }


}

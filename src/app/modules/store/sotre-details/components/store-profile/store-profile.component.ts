import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-store-profile',
  templateUrl: './store-profile.component.html',
  styleUrls: ['./store-profile.component.scss']
})
export class StoreProfileComponent implements OnInit {
  term=''
  flag=0
  id:number
  response!:any
  store!:Product[]
    constructor(private profile:UserService,private activeroute: ActivatedRoute,) {
      this.id=this.activeroute.snapshot.params['id'] 
     }
  
    ngOnInit(): void {
      console.log(this.id)
     this.getproducts()
    }
    getproducts(){
      this.profile.store_profile(this.id,this.term).subscribe((res)=>{this.response=res;this.store=this.response.Response.products.data;console.log(this.store)})
  
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
     //this.getproducts()
      if(this.term=='')
     {document.getElementById('icon')?.classList.remove('fa-times')
     document.getElementById('icon')?.classList.remove('fa')
    
     document.getElementById('icon')?.classList.add('porto-icon-search-3') 
   }
   
    }
    toggle(){
      console.log('kjuytrrrrdd')
     //this.getproducts()
      if( document.getElementById('icon')?.classList.contains('fa')){
          this.term=''
          document.getElementById('icon')?.classList.remove('fa-times')
     document.getElementById('icon')?.classList.remove('fa')
    
     document.getElementById('icon')?.classList.add('porto-icon-search-3') 
   
      }
      //this.getproducts()
     
    }

    shrink(){
      this.flag=0
        }
       spread(){
          this.flag=1
            }
      
delete(id:number){  this.profile.delete_product(id).subscribe((res)=>{
              window.location.reload()
            })

}}

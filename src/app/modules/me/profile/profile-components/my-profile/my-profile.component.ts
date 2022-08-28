import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})

export class MyProfileComponent implements OnInit {
response!:any
Ads!:Product[]
flag=0
term=''
catrgory_id!:number
  constructor(private Adsserve:UserService,private route:Router) { }

  ngOnInit(): void {
    this.Adsserve.Ads().subscribe((res)=>{console.log(res); this.response=res;this.Ads=this.response.Response.active.data;console.log(this.Ads)})
  }
  shrink(){
this.flag=0
  }
 spread(){
    this.flag=1
      }
 delete(id:number){
   this.Adsserve.delete_product(id).subscribe((res)=>{
   window.location.reload()
    })
 }  
 setoutofstock(id:number){
   this.Adsserve.update_product({id:id,quantity:0,colors:'[]'}).subscribe((res)=>{console.log(res) ;window.location.reload()})
   
 }   
 close(){
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
   if(this.term=='')
  {document.getElementById('icon')?.classList.remove('fa-times')
  document.getElementById('icon')?.classList.remove('fa')
 
  document.getElementById('icon')?.classList.add('porto-icon-search-3') 
}
 }
 toggle(){
   if( document.getElementById('icon')?.classList.contains('fa')){
       this.term=''
       document.getElementById('icon')?.classList.remove('fa-times')
  document.getElementById('icon')?.classList.remove('fa')
 
  document.getElementById('icon')?.classList.add('porto-icon-search-3') 

   }
  
 }
 change(e:any){
   e.target.style.color='black'
 }
 repost(i:number){
   let ad=(this.Ads[i])
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
this.route.navigateByUrl(`/home/me/profile/my-profile/repost/${ad.id}/${this.catrgory_id}`)

}
}

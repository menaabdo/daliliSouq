import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-one-ad',
  templateUrl: './one-ad.component.html',
  styleUrls: ['./one-ad.component.scss']
})
export class OneAdComponent implements OnInit {
product_id!:number
response!:any
product!:Product
categories!:string[]
selectedimg!:any
date!:number
user_id=localStorage.getItem('id')
clicked!:string
prevclick=''
  constructor(private categoryserve:CategoryService,private route:Router,private active:ActivatedRoute) { 
  this.product_id=this.active.snapshot.params['id']

  }
f!:number[]

  ngOnInit(): void {
    this.f=[1,2,3,4,5,6,7]
    this.categoryserve.getoneproduct(this.product_id).subscribe((res)=>{
      console.log(res);this.response=res;this.product=this.response.Response
      let ids:any
 let ids2:any[]=[]
 if(this.product.category){
   ids=this.product.category
   
  
   while(ids.hasOwnProperty('category')){
    
     ids2.push(ids.name)
   
     ids=ids.category
     if(ids.category&&Object.keys(ids.category).length === 0)
     break
     
   }
   ids2.push(ids.name)
  
 }this.categories=ids2

      
  })}
  changeimg(index:number){
       this.selectedimg=this.product.images[index]
       console.log(this.selectedimg)
  }
  getclicked(key:string){
   
    let icons=document.getElementsByClassName('fa-minus')!
    
  if(document.getElementById(`plus${key}`)!.classList.contains('fa-plus'))

  {
    this.clicked=key
   // document.getElementById(`plus${key}`)!.classList.add('fa-minus')

     document.getElementById(`plus${key}`)!.classList.remove('fa-plus')
  
  document.getElementById(key)?.classList.add('activetab')
  let eles= document.getElementsByClassName('activetab')!
   for(let i=0;i<eles.length;i++){
     eles[i].classList.remove('activetab')
     if(icons[i])
     { icons[i].classList.add('fa-plus')
    
       icons[i].classList.remove('fa-minus')     
      }
     
     document.getElementById(key)?.classList.add('activetab')
   } 
   document.getElementById(`plus${key}`)!.classList.add('fa-minus')

   
  }else{ document.getElementById(`plus${key}`)!.classList.add('fa-plus')

    document.getElementById(`plus${key}`)!.classList.remove('fa-minus')
   this.clicked=''
   }
  }
}

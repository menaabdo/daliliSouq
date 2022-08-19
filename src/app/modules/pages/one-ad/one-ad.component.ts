import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';

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
clickedcolor!:any
size!:any
indexofcolor!:number
  constructor(private categoryserve:CategoryService,private route:Router,private active:ActivatedRoute,private userserve:UserService) { 
  this.product_id=this.active.snapshot.params['id']

  }
f!:number[]

  ngOnInit(): void {
  
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
  getcolor(colorobj:any,index:number){
    this.clickedcolor=colorobj
    this.indexofcolor=index
    let eles= document.getElementsByClassName('divcolor')!
    for(let i=0;i<eles.length;i++){
      if(eles[i].classList.contains('activecolor'))
      eles[i].classList.remove('activecolor')}
      eles[index].classList.add('activecolor')
  }
  getsize(size:any,index:number){
  this.size=size
  let eles= document.getElementsByClassName('divsize')!
    for(let i=0;i<eles.length;i++){
      if(eles[i].classList.contains('activesize'))
      eles[i].classList.remove('activesize')}
      eles[index].classList.add('activesize')
  }
  add_to_cart(){
    let fd=new FormData();
    fd.append('product_id',this.product.id as unknown as string)
    fd.append('quantity','1')
    
    if(this.product.category?.is_color!=0&&this.product.category?.is_size!=0){
      if(this.clickedcolor&&this.size)
    { console.log(this.size.id)
   
     fd.append('color_id',this.clickedcolor.color)
     fd.append('size_id',this.size.size)
     this.userserve.add_to_cart(fd).subscribe((res)=>{console.log(res); this.userserve.products_cart().subscribe((res)=>{//window.location.reload()
    }) 
    })
  
   }else{
    if(this.product.category?.is_color!=0&&this.product.category?.is_size==0)
   { if(this.clickedcolor) { 
       fd.append('color_id',this.clickedcolor.color)
       this.userserve.add_to_cart(fd).subscribe((res)=>{console.log(res);  })
  
      }}
      if(this.product.category?.is_color==0&&this.product.category?.is_size!=0)
      
    {  if(this.size){  
        fd.append('size_id',this.size.size)
        this.userserve.add_to_cart(fd).subscribe((res)=>{console.log(res);  })
  
      }}
 
    }
  }


  }
}

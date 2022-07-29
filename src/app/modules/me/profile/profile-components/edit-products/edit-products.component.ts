import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Category } from 'src/app/models/category.model';
import { City } from 'src/app/models/city.model';
import { Country } from 'src/app/models/country.model';
import { Store } from 'src/app/models/store.model';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';
import { Loader } from '@googlemaps/js-api-loader';
import { Address } from 'src/app/models/addresss.model';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit {
  flag!:any
data:Product={
  id:0,
category_ids:[],
  name: '',
 
  image: '',
 
  // city:{},
  // seller:null,
  calls: 0,
  chats: 0,
  viewers: 0,
  offers: 0,
  // created_at:Date
  online_for: 0,
  expire_in: 0,
  favourite: false,
  // category:null,
  comments: 0,
  is_complete: false,
  created_at: '',
  rate: 0,
  // store:null,
  title: '',
  desc: '',
  
store_id:0,
  store_name:'my account',
  category_name:[],
  update:0,
  update2:0,
  

 
    
}
map:any
marker!:any
  response!:any
  response1!:any
  response2:any
  add!:Address
  cities!:City[]
  stores!:Store[]
  categories!: Category[]
  subcategories!:Category[]
  id!:number
  respose1!:any
  country!:Country
  result:any
  myLatlng !:any 
 
  constructor(private route:Router,private storessserve:UserService,private catserve:CategoryService,private active:ActivatedRoute) { }
    

  ngOnInit(): void {
    
    this.storessserve.cities().subscribe((res)=>{this.response1=res;this.cities=this.response1.Response
      
    })
   this.storessserve.product_detailes(this.active.snapshot.params['id']).subscribe((res)=>{this.response2=res;
    //this.add=this.response2.Response.address
   this.data.title=this.response2.Response.name
   this.data.desc=this.response2.Response.desc
   this.data.price=(this.response2.Response.price) 
   this.data.mobile=this.response2.Response.mobile
   //this.data.link=this.response2.Response.video
   this.data.city_name=this.response2.Response.city.name
   this.data.category_name.push(this.response2.Response.category.name)
   let ids:any
   let ids2:any[]=[]
   if(this.response2.Response.category){
     ids=this.response2.Response.category
    this.data.category_ids.push(ids.id)
     while(ids.hasOwnProperty('category')){
      
       ids2.push(ids.id)
     
       ids=ids.category
       
     }
     ids2.push(ids.id)
     this.data.category_ids=ids2
     this.data.category_ids=this.data.category_ids.reverse()

   }console.log(this.data.category_ids)
   if(this.response2.Response.colors){
     this.data.colors=this.response2.Response.colors
   }
   if(this.response2.Response.properties){
     this.data.properties=this.response2.Response.properties
   }
  
   
   
  this.country=this.response2.Response.country
      let loader=new Loader({apiKey:'AIzaSyCuU2Tnmy93AuQWWQ7DAGJT95OJKZYZdwY'})
      loader.load().then(() => {
        
       
      this. myLatlng = { lat:this.response2.Response.latitude, lng:this.response2.Response.longitude };
       
       const map= this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: this.myLatlng,    zoom: 4,
       
       });
      const marker= this. marker = new google.maps.Marker({
        position:this. myLatlng,
         map,
        title: "Click to zoom",
      });
      map.addListener("click", (mapsMouseEvent:any) => {
      
        this.data.lat= mapsMouseEvent.latLng.lat()
        this.data.lng=mapsMouseEvent.latLng.lng()
        this.marker.setPosition({lat:this.data.lat,lng:this.data.lng});
      
      });
     this. marker.addListener("click", () => {
        map.setZoom(8);
        map.setCenter(this.marker.getPosition() as google.maps.LatLng);
      });
      
     });
     
    })
   // this.storessserve.mystores('en').subscribe((res)=>{this.response=res;this.stores=this.response.Response.stores})
  

  }
  show(event:any){
 
    let value=(event.target.value)
    console.log(this.data)
    console.log(event.target.value)
     //if(value.slice(value.indexOf('+')+1)=='true'){
       this.route.navigateByUrl(`/home/me/profile/my-profile/select-category/${JSON.stringify(this.data)}`)
 
       
   }
   deleteitem(obj:any){
     console.log(this.data.colors)
     if(this.data.colors)
     this.data.colors.splice(this.data.colors.indexOf(obj),1)
 
   }
   changestyle(id:string){
     document.getElementById(id)!.style.color='black'
    console.log(this.data.store_name)
   }
   style(event:any){
     event.target.classList.add('removeborder')
 
   }
   displaylabel(id:string,store_id:number=0){
  let label=document.getElementsByClassName(id)[0].classList.remove('js-hide-label')
  let input= document.getElementsByClassName(id)[1]as HTMLInputElement
 
 
   }
   hidelabel(id:string){
     let input= document.getElementsByClassName(id)[1]as HTMLInputElement
 
     if(input.value==''){
         let label=document.getElementsByClassName(id)[0].classList.add('js-hide-label')
        
        }
       
    }
   getstore(id:string,e:any){
     let label=document.getElementsByClassName(id)[0].classList.remove('js-hide-label')
  let input= document.getElementsByClassName(id)[1]as HTMLInputElement
 
     // this.flag=true
     // this.data.store_name=name
     // this.data.properties=[]
     // this.data.category_name=[]
     // this.data.colors=[]
     // this.data.store_id=id
   for(let i=0;i<e.target.childNodes.length;i++){
    if(e.target.value==e.target.childNodes[i].value)
           this.data.store_id=e.target.childNodes[i].id
   }
    this.flag=true
     this.data.store_name=e.target.value
     this.data.properties=[]
     this.data.category_name=[]
     this.data.colors=[]
   }
   changecategory(id:number){
 this.data.update=id
 console.log(this.data.update)
 this.route.navigateByUrl(`/home/me/profile/my-profile/select-category/${(JSON.stringify(this.data)).replace('#','*')}`)
 
   }
   changepro(){
    this.data.edit=this.active.snapshot.params['id']
     this.data.update2=this.data.category_ids[(this.data.category_ids.length)-1]
     this.route.navigateByUrl(`/home/me/profile/my-profile/select-category/${(JSON.stringify(this.data)).replaceAll('#','*')}`)
 
   }
   navme(){
     
     this.route.navigateByUrl(`home/me/profile/my-profile/properity-color/${(JSON.stringify(this.data )).replaceAll('#','*')}`)
 
   }
 

}

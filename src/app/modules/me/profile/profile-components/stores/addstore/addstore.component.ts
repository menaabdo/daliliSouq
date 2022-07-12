import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { CookieService } from 'ngx-cookie-service';
import { Address } from 'src/app/models/addresss.model';
import { Category } from 'src/app/models/category.model';
import { City } from 'src/app/models/city.model';
import { Country } from 'src/app/models/country.model';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-addstore',
  templateUrl: './addstore.component.html',
  styleUrls: ['./addstore.component.scss']
})
export class AddstoreComponent implements OnInit {
  country!:Country
  result:any 
map:any
  response!:any
  response1!:any
  add!:Address
  cities!:City[]
  stores!:Store[]
  categories!: Category[]

  id!:number
  respose1!:any
  response2!:any
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
    update2:0
   
      
  }
  
  flag!:boolean
  selectedfile?:File
  imageSrc?: any;
  constructor(private route:Router,private storessserve:UserService,private catserve:CategoryService,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.imageSrc=localStorage.getItem('img')
    if(this.active.snapshot.params['data']!='data'){
      let data=JSON.parse(this.active.snapshot.params['data'])
      console.log(data.category_name)
      if(data.category_name)
    {
       this.data.category_id=data.category_id
     this.data.category_store_name=data.category_store_name}
     if(data.city_id&&!data.region_id){
       this.data.city_id=data.city_id
       this.data.city_name=data.city_name
     }
     if(data.city_id&&data.region_id){
      this.data.city_id=data.city_id
      this.data.city_name=data.city_name +'-'+data.region_name
      this.data.region_id=data.region_id
     }
    }
    
    this.storessserve.cities().subscribe((res)=>{this.response1=res;this.cities=this.response1.Response
      
    })
    this.storessserve.profile({country_id:1}).subscribe((res)=>{this.response2=res;this.add=this.response2.Response.address
      this.country=this.response2.Response.country
      console.log(res)
        let loader=new Loader({apiKey:'AIzaSyCuU2Tnmy93AuQWWQ7DAGJT95OJKZYZdwY'})
        loader.load().then(() => {
      
          const myLatlng = { lat:this.add.lat, lng:this.add.long };

         this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
           center: myLatlng,
           zoom: 8,
         
         });
       });
      })
  }
  show(event:any){
       this.data.store_flag=1
      this.route.navigateByUrl(`/home/me/profile/my-profile/select-category/${JSON.stringify(this.data)}`)
 
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
   create(){
    //this.storessserve.uploadimg(4).subscribe((res)=>{console.log(res)})
 
    localStorage.removeItem('img')
      
    let obj={ 
      en_name:this.data.name,
      ar_name:this.data.name,
     
      region_id:1,
      city_id:1,
      categories:JSON.stringify([this.data.category_id]),
      is_active:0,
      
     }
     this.storessserve.create_store(obj).subscribe((res)=>{
      
       console.log(res)})
    
   }
   getcity(){
    this.route.navigateByUrl(`/home/me/profile/cities/${JSON.stringify(this.data)}`)
 
   }
   selectedFile(event:any){
    this.selectedfile= <File> event.target.files[0]
     const fd=new FormData();
        fd.append('image',this.selectedfile)
        console.log(fd.getAll('image'))
  this.storessserve.getimage(this.selectedfile)
   if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = e => {this.imageSrc = reader.result;
   // this.data.store_img=this.selectedfile
    this.imageSrc=URL.createObjectURL(event.target.files[0])
    localStorage.setItem('img',this.imageSrc)
   console.log(this.data)
}
    reader.readAsDataURL(file);
}

  }
  

}

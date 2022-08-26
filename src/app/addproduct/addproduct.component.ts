import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Store } from 'src/app/models/store.model';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';
import { Address } from '../models/addresss.model';
import { Product } from '../models/product.model';
import { ProductsModule } from '../modules/store/products/products.module';
import {} from 'googlemaps';
import { ViewChild } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { City } from '../models/city.model';
import * as L from 'leaflet';


import { Country } from '../models/country.model';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})

export class AddproductComponent implements OnInit {
  //items=['file-input0','file-input1','file-input2','file-input3','file-input4','file-input5','file-input6','file-input7','file-input8','file-input9']
 counter=0
  country!:Country
  result:any 
map:any
marker!:any
  response!:any
  response1!:any
  add!:Address
  cities!:City[]
  stores!:Store[]
  categories!: Category[]
  subcategories!:Category[]
  id!:number
  respose1!:any
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
  temp!:number //used for toggle online input
  myLatlng !:any
  flag!:boolean
  response2: any;
  infoWindow:any
  note!:string
  selectedfile!: File;
  imageSrc:any[]=[]
  can_post!:any
  response_canpost!:any
  response_add_new!:any
  added_data!:any
  constructor(private categoryserve:CategoryService,private route:Router,private storessserve:UserService,private catserve:CategoryService,private active:ActivatedRoute) { 
    
   
  }


  ngOnInit(): void {
    L.Icon.Default.imagePath = "assets/marker-icon.png" 
    this.storessserve.cities().subscribe((res)=>{this.response1=res;this.cities=this.response1.Response
      
    })
   this.storessserve.profile({country_id:1}).subscribe((res)=>{this.response2=res;this.add=this.response2.Response
   this.data.lat=this.add.lat
   this.data.lng=this.add.long
   this.getmap()
    this.country=this.response2.Response.country ;console.log(res)
    if( this.active.snapshot.params['data']=='data')
  
    { 
      let mobile=(this.response2.Response.mobile).toString()
      mobile= mobile.slice((this.country.phone_code).toString().length)
        this.data.mobile=mobile}
        console.log(this.add.lat,this.add.long)
       
  
    //   let loader=new Loader({apiKey:'AIzaSyCuU2Tnmy93AuQWWQ7DAGJT95OJKZYZdwY'})
    //   loader.load().then(() => {
    
       
    //   this. myLatlng = { lat:this.add.lat, lng:this.add.long };

    //    const map= this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    //       center: this.myLatlng,    zoom: 4,
       
    //    });
    //   const marker= this. marker = new google.maps.Marker({
    //     position:this. myLatlng,
    //      map,
    //     title: "Click to zoom",
    //   });
    //   map.addListener("click", (mapsMouseEvent:any) => {
      
    //     this.data.lat= mapsMouseEvent.latLng.lat()
    //     this.data.lng=mapsMouseEvent.latLng.lng()
    //     this.marker.setPosition({lat:this.data.lat,lng:this.data.lng});
      
    //   });
    //  this. marker.addListener("click", () => {
    //     map.setZoom(8);
    //     map.setCenter(this.marker.getPosition() as google.maps.LatLng);
    //   });
      
    //  });
     
    })
   
  
   ////////////////////////////////////////////////////////
    if( this.active.snapshot.params['data']!='data'){
     //this.data= this.active.snapshot.params['data'].replace('*','#')
      this.flag=false
      ///////////////////////
      
       ////////////////////////////////
       if(localStorage.getItem('imgs'))
    {this.imageSrc=JSON.parse(localStorage.getItem('imgs')||'{}')
    for(let i=0;i<this.imageSrc.length;i++)
    document.getElementById(`img${i}`)!.style.display='block'
     
  }
      ////////////////////////////////////////
    console.log(( this.active.snapshot.params['data']))
    this.data=JSON.parse(this.active.snapshot.params['data'].replaceAll('*','#'))
    console.log(this.data)
      
    ////////////////////////////////
   if(this.data.category_ids.length!=0)
   {console.log(this.data.category_ids[0])
     this.categoryserve.can_post(this.data.category_ids[0],1).subscribe((res)=>{
     this.response_canpost=res;this.can_post=this.response_canpost.Response;
     console.log(this.can_post)
   })}

    // if(this.data.city_id)
    // {
    // this.data.city_name=this.data.city_name +'-'+this.data.region_name
    
    // }
    this.data.update2=0}
    else {this.flag=true;localStorage.removeItem('imgs');this.storessserve.files=[]}
//     if( this.active.snapshot.params['data']!='data'){
//           console.log( (this.active.snapshot.params['data']))
  console.log((this.data))
//   // this.data=JSON.parse(this.active.snapshot.params['data'])
//    if(this.active.snapshot.params['colors'])
//    console.log((this.active.snapshot.params['colors']))
//   }else this.flag=true
     this.storessserve.mystores('en').subscribe((res)=>{
       this.response=res;this.stores=this.response.Response.stores
       console.log(res)
       if(this.data.is_online==1)
   {this.temp=1
     this.note=this.response.Response.note}
   else {console.log(this.response.Response.offline_note)
     this.note=this.response.Response.offline_note}
       
      })
     
    }
    // getposition(){
    //   let infoWindow = new google.maps.InfoWindow({
    //     content: "Click the map to get Lat/Lng!",
    //     position: this.myLatlng,
        
    //   });
    //   infoWindow = new google.maps.InfoWindow({
    //     position: mapsMouseEvent.latLng,
    //   });
    //   console.log(infoWindow)
    //   // window.setTimeout(() => {
    //   //   this.map.panTo(this.marker.getPosition() as google.maps.LatLng);
    //   // }, 6000);
    //   //      this.map.setZoom(8);
    //   // this.map.setCenter(this.marker.getPosition() as google.maps.LatLng);
  
    //   // var latlng = new google.maps.LatLng(-24.397, 140.644);
    //   // this.marker.setPosition(latlng);
    //   // this. marker = new google.maps.Marker({
    //   //   position: latlng,
    //   //   map: this.map,
    //   //   title: "Click to zoom",
    //   // });
    // }
    
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
  changestyle(id:string,city_id:number){
    document.getElementById(id)!.style.color='black'
   console.log(this.data.store_name)
   this.data.store_city_id
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
         {
           //let mobile=(this.response2.Response.mobile).toString()
              // mobile= mobile.slice(2)
                console.log((this.country.phone_code).toString().length)
            this.data.store_id=e.target.childNodes[i].id
            console.log(e.target.value)
          if(e.target.value=='My account')
         {
           let mobile=(this.response2.Response.mobile).toString()
          mobile= mobile.slice((this.country.phone_code).toString().length)
            this.data.mobile=mobile}
         else{ 
          this.data.lng=this.stores[i-1].longitude;
          this.data.lat=this.stores[i-1].latitude
          this.movemarker()
          let mobile =(this.stores[i-1].mobile).toString();
           mobile= mobile.slice((this.country.phone_code).toString().length)
          this.data.mobile=mobile as unknown as number
       }
 } }
   this.flag=true
    this.data.store_name=e.target.value
    this.data.properties=[]
    this.data.category_name=[]
    this.data.colors=[]
  }
  changecategory(id:number){
this.data.update=id
console.log(this.data.update)
this.route.navigateByUrl(`/home/me/profile/my-profile/select-category/${(JSON.stringify(this.data)).replaceAll('#','*')}`)

  }
  changepro(){
    this.data.update2=this.data.category_ids[(this.data.category_ids.length)-1]
    this.route.navigateByUrl(`/home/me/profile/my-profile/select-category/${(JSON.stringify(this.data)).replaceAll('#','*')}`)

  }
  navme(){
    
    this.route.navigateByUrl(`home/me/profile/my-profile/properity-color/${(JSON.stringify(this.data )).replaceAll('#','*')}`)

  }
  getcity(){
    this.data.product_flag=1
    this.route.navigateByUrl(`/home/me/profile/cities/${(JSON.stringify(this.data )).replaceAll('#','*')}`)
   }
   toggleonline(){
    if(this.data.is_online==1)
    this.data.is_online=0
    else this.data.is_online=1 
   }
   selectedFile(event:any){
    this.selectedfile= <File> event.target.files[0]
   let image
  //this.storessserve.getimage(this.selectedfile)
  this.storessserve.files.push(this.selectedfile)
   if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = e => {image = reader.result;
   console.log(image)
    image=URL.createObjectURL(event.target.files[0])
    this.imageSrc.push(image)
    for(let i=0;i<this.imageSrc.length;i++)
  document.getElementById(`img${i}`)!.style.display='block'
    localStorage.setItem('imgs',JSON.stringify(this.imageSrc))
    let imgs=localStorage.getItem('imgs')
  
}
    reader.readAsDataURL(file);
}

  }
  count(){
    this.counter++
  }
  delete(index:number){
    
    this.storessserve.files.splice(index,1)
    
     if(index==this.imageSrc.length-1)
     
    document.getElementById(`img${index}`)!.style.display='none'
       else document.getElementById(`img${this.imageSrc.length-1}`)!.style.display='none'
       this.imageSrc.splice(index,1)
       localStorage.setItem('imgs',JSON.stringify(this.imageSrc))
   
   
   
  }

  


  create(){
   
   
    let fd=new FormData();
    fd.append('en_name',this.data.title)
    fd.append('ar_name',this.data.title,)
    fd.append('price',this.data.price as unknown as string)
    fd.append('category_id',this.data.category_ids[(this.data.category_ids.length)-1],
    )
    fd.append('parent_id',this.data.category_ids[(this.data.category_ids.length)-(this.data.category_ids.length)],
    )
     fd.append( 'country_id',this.country.id as unknown as string)
    fd.append('store_id',this.data.store_id as unknown as string)
    fd.append( 'city_id',this.data.city_id as unknown as string)
    fd.append('region_id',this.data.region_id as unknown as string)
    fd.append('region_id',this.data.region_id as unknown as string)
    fd.append( 'en_desc',this.data.desc)
    fd.append( 'ar_desc',this.data.desc)
    fd.append( "valid_to", "2022-11-22 02:50:37")
    fd.append('is_online',this.data.is_online as unknown as string)
    if(this.data.properties)
    fd.append('properties',JSON.stringify(this.data.properties))
    if(this.data.colors)
   {this.data.quantity=0
     for(let i=0 ;i< this.data.colors.length;i++ ){
     this.data.quantity  +=this.data.colors[i].quantity
   } 
  
   
      fd.append('colors',JSON.stringify(this.data.colors ))
      fd.append('quantity',this.data.quantity as unknown as string)
   
    }
    else
    {if(this.data.is_online==1) fd.append('quantity',this.data.quantity as unknown as string)
   
     else fd.append('quantity',1 as unknown as string  )
   }
    if(this.data.lat)
    fd.append('latitude',this.data.lat as unknown as string)
    if(this.data.lng)
    
    fd.append('longitude',this.data.lng as unknown as string)
    fd.append('mobile',this.data.mobile as unknown as string)
    
       console.log(this.can_post)
          if(this.can_post==true)
         {console.log('can')
            this.storessserve.create_product(fd).subscribe((res)=>{
             this.response_add_new=res ;this.added_data=this.response_add_new.Response
              this.route.navigateByUrl(`home/me/profile/my-profile/view/1/${this.added_data.id}`)
            })
        
          }
          if(this.can_post==false)
          {var modal = document.getElementById("myModal")!;
          modal.style.display = "block";}
        
  }
  close(){
    var modal = document.getElementById("myModal")!;
          
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "none";
  }
  upgrade(){
    this.route.navigateByUrl(`/home/me/profile/account/${(JSON.stringify(this.data)).replace('#','*')}/packages/${this.data.category_ids[0]}`)
  }
  getmap(){
    let map=this.map= new L.Map('map').setView([this.data.lat ||0, this.data.lng||0],10);
    var marker=this.marker = L.marker([this.add.lat, this.add.long]).addTo(map)
  
    console.log(this.data.lng,this.data.lat)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map)
  map.on('click', (e:any) =>{
    var lat,
    lon,
    zoom;

lat = e.latlng.lat;
lon = e.latlng.lng;
zoom = map.getZoom();
console.log("You clicked the map at LAT: "+ lat+" and LONG: "+lon );
if (marker != undefined) {
  map.removeLayer(marker);
};
marker =  L.marker([lat,lon]).addTo(map); 
this.data.lat=lat,
this.data.lng=lon

     })
  
  }
  movemarker(){
    this.map.remove()
    let map=this.map= new L.Map('map').setView([this.data.lat ||0, this.data.lng||0],10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 10,
      attribution: '© OpenStreetMap'
    }).addTo(this.map)
   this. map.removeLayer(this.marker);
    let lat=0;let lng=0
   lat =this.data.lat ||0
    lng=this.data.lng ||0
    console.log(lat,lng)
  this.marker =  L.marker([lat,lng]).addTo(this.map); 
 
  
       
  
  } 
}


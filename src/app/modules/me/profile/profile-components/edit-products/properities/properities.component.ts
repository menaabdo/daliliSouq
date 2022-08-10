import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { option } from 'src/app/models/options.model';
import { properity } from 'src/app/models/properity.model';
import { User } from 'src/app/models/user.model';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-properities',
  templateUrl: './properities.component.html',
  styleUrls: ['./properities.component.scss']
})
export class ProperitiesComponent implements OnInit {
  categories!: Category[]
  properties!:any
  next!:number
  prop:properity[]=[]
  constructor(private catserve:CategoryService,private route:Router,private active:ActivatedRoute,private userserve:UserService) {
  }
  

  ngOnInit(): void {
    this.properties =this.userserve.product_data.properties 
    console.log(this.properties)
  }
submit(){
 let  properities:option[]=[]
  let values=[]
  let options=[]
  let option
  
  let test=[]
 for(let i=0;i<this.properties.length;i++){
   for(let j=0;j<this.properties[i].options.length;j++){
    
     let input=document.getElementById(this.properties[i].options[j].id as unknown as string) as HTMLInputElement
     
     if(input!=null)
   {  if(input.checked){
       test.push(1)
      option={'id':this.properties[i].options[j].id,"mandatory":0,'name':this.properties[i].options[j].name,'selected':1,'type_id':this.properties[i].type_id}
      options.push(option)  
      values.push(this.properties[i].options[j].id) 
  //  { let p={id:this.properties[i].id,"mandatory":0,name:this.properties[i].name,
  //           options:{id:this.properties[i].options[j].id,"mandatory":0,name:this.properties[i].options[j].name,selected:1,type_id:this.properties[i].type_id},
  //           selected:1,type_id:this.properties[i].type_id,values:values.push(this.properties[i].options[j].id)}
  }else{
    option={'id':this.properties[i].options[j].id,"mandatory":0,'name':this.properties[i].options[j].name,'selected':0,'type_id':this.properties[i].type_id}
    options.push(option)  
   // values.push(this.properties[i].options[j].id) 
  }
 
  }
  
  }
  
   let p={'id':this.properties[i].id,"mandatory":0,'name':this.properties[i].name,
            'options':options,
             'selected':0,'type_id':this.properties[i].type_id,'value':JSON.stringify(values)
          }
  properities.push(p)
  options=[]
  values=[]
  if(test.length==0)
  {this.next=1
    document.getElementsByClassName('activediv')[0]?.classList.remove('activediv')
  
    document.getElementById(this.properties[i].name)?.classList.add('activediv')
    break;
  }
  else{
    this.next=0
 test=[]
 }}
 if(this.next!=1)
{ this.userserve.product_data.properties =properities ;
  this.route.navigateByUrl(`/home/me/profile/my-profile/edit-product/${this.userserve.product_data.id}`)
  
}
}
}

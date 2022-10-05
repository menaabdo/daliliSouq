import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
     messages!:Message[]
     response!:any
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  mymess!:string
  selectedfile?:any
  imageSrc?: any;
  page:number=1
   fd=new FormData();
  constructor(private chatservice:UserService) { }

  ngOnInit(): void {
    this.get_messages()
    document.getElementsByClassName('card-body')[0]!.scrollTop=document.getElementsByClassName('card-body')[0]!.scrollHeight
  
  }





  open(){
    
    let popup = document.getElementById("myPopup")!;
  popup.classList.toggle("show");
  //hide textarea
 // document.getElementById('myinput')! .classList.toggle("fademe")
 console.log( document.getElementsByClassName('card-body')[0]!.scrollHeight)
 document.getElementsByClassName('card-body')[0]!.scrollTop=document.getElementsByClassName('card-body')[0]!.scrollHeight
  this.get_messages()
 
    }
  send(){
    
   this.fd.append('receiver_id','0')
   this.fd.append('is_company','0')
   this.fd.append('product_id','0')
   this.fd.append('store_id','0')
   if(this.mymess)
   this.fd.append('message',this.mymess)
   
    this.chatservice.sendmess(this.fd).subscribe((res)=>{console.log(res); this.get_messages()})
   
    this.mymess=''
    this.imageSrc=''
    this.fd.delete('image')
  }
  get_messages(){
    this.chatservice.mymess(this.page).subscribe((res)=>{this.response=res;console.log(res);this.messages=this.response.Response.messages.data;this.messages.reverse()
      this.mymess=''
    this.imageSrc=''
    })

  }
  selectedFile(event:any){
    this.selectedfile= <File> event.target.files[0]
     
        this.fd.append('image',this.selectedfile)
       console.log(this.fd.get('image'))
 
   if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = e => {this.imageSrc = reader.result;
   // this.data.store_img=this.selectedfile
    this.imageSrc=URL.createObjectURL(event.target.files[0])
  
    console.log(this.imageSrc)
}
    reader.readAsDataURL(file);
}

  }
  ignoreimg(){
    this.imageSrc=''
  }

scrollup(e:any){
  console.log(e.target.scrollTop,e.target.scrollHeight)
 if(e.target.scrollTop==0)
 { this.page++
  console.log(this.page)
   this.chatservice.mymess(this.page).subscribe((res)=>{
     this.response=res;
     console.log(res);
     let newmess=this.response.Response.messages.data;
     newmess.reverse();
     console.log(newmess)
    //this.messages.reverse()
     this.messages=newmess.concat(this.messages);
     //this.messages.reverse()
     console.log(this.messages)
     //document.getElementsByClassName('card-body')[0]!.scrollTop=document.getElementsByClassName('card-body')[0]!.scrollHeight/this.page

    })
}
  
}
 
}

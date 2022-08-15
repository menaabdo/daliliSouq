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
   fd=new FormData();
  constructor(private chatservice:UserService) { }

  ngOnInit(): void {
   
  }





  open(){
    let popup = document.getElementById("myPopup")!;
  popup.classList.toggle("show");
  this.get_messages()
   }
  send(){
   
    this.chatservice.sendmess(this.mymess,this.fd).subscribe((res)=>{ this.get_messages()})
   
    this.mymess=''
  }
  get_messages(){
    this.chatservice.mymess().subscribe((res)=>{this.response=res;this.messages=this.response.Response.messages.data;this.messages.reverse()})

  }
  selectedFile(event:any){
    this.selectedfile= <File> event.target.files[0]
     
        this.fd.append('image',this.selectedfile)
       console.log(this.fd.get('image'))
 this.fd.getAll
   if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = e => {this.imageSrc = reader.result;
   // this.data.store_img=this.selectedfile
    this.imageSrc=URL.createObjectURL(event.target.files[0])
  
}
    reader.readAsDataURL(file);
}

  }
  ignoreimg(){
    this.imageSrc=''
  }
 
}

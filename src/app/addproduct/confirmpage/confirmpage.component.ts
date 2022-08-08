import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-confirmpage',
  templateUrl: './confirmpage.component.html',
  styleUrls: ['./confirmpage.component.scss']
})
export class ConfirmpageComponent implements OnInit {
  selectedfile: any;
  imageSrc: any;

  constructor(private userserve:UserService) { }

  ngOnInit(): void {
    console.log(this.userserve.files.length)
    this.showmainimage()
  }
  showmainimage(){
    
     
     
     if (this.userserve.files.length!=0) {
      const file = this.userserve.files[0];
  
      const reader = new FileReader();
      reader.onload = e => {this.imageSrc = reader.result;
     // this.data.store_img=this.selectedfile
      this.imageSrc=URL.createObjectURL(this.userserve.files[0])
  
     
  }
      reader.readAsDataURL(file);
  }
  
    }
    
  
  

}

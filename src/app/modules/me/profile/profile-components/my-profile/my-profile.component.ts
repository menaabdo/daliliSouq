import { Component, OnInit } from '@angular/core';
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
  constructor(private Adsserve:UserService) { }

  ngOnInit(): void {
    this.Adsserve.Ads().subscribe((res)=>{console.log(res); this.response=res;this.Ads=this.response.Response.active.data;})
  }
  shrink(){
this.flag=0
  }
 spread(){
    this.flag=1
      }

}

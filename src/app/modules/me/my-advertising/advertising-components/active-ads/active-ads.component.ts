import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-active-ads',
  templateUrl: './active-ads.component.html',
  styleUrls: ['./active-ads.component.scss']
})
export class ActiveAdsComponent implements OnInit {

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

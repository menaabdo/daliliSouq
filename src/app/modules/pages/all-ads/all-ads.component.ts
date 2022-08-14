import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Country } from 'src/app/models/country.model';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-all-ads',
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.scss']
})
export class AllAdsComponent implements OnInit {
  items:any;
 categories!:Category[]
 response!:any
 index=0
 selectedcountry!:Category
  constructor(private route:Router,private categoryserve:CategoryService) { }

  ngOnInit(): void {
    
  
       this.home_categories()
  }
  home_categories(){
this.categoryserve.categories_home().subscribe((res)=>{
  this.response=res;this.categories=this.response.Response
  this.selectedcountry=this.categories[this.index]
})
  }
  getproduct(id:number){
    this.route.navigateByUrl(`/home/product/${id}`)

  }
  getselected(index:number){
this.index=index
this.selectedcountry=this.categories[index]
console.log(this.selectedcountry)
  }
}

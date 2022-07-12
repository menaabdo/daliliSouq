import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account.model';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-allcat',
  templateUrl: './allcat.component.html',
  styleUrls: ['./allcat.component.scss']
})
export class AllcatComponent implements OnInit {
 is_account=1;
 is_category=0
  categories!: Category[]
  
  respose!:any
  accounts!:Account[]
  country_id!:number
  
    constructor(private catserve:CategoryService,private route:Router) { }
  
    ngOnInit(): void {
      this.catserve.all().subscribe((res)=>{this.respose=res
        this.categories=this.respose.Response
      })

  
    }
    isaccount(){
       this.is_account=1
       this.is_category=0
       this.catserve.accounts(this.country_id=1).subscribe((res)=>{this.respose=res;this.accounts=this.respose.Response;console.log(this.accounts)})
    }
iscategory(){
  this.is_account=0
  this.is_category=1
  this.catserve.all().subscribe((res)=>{this.respose=res
    this.categories=this.respose.Response })

}
upgrade(id:number,price:number){
this.catserve.upgrade_account(id,price).subscribe((res)=>{this.route.navigateByUrl('/home/me/profile/account')})
}
}

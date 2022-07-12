import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Package } from 'src/app/models/package.model';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-addpackages',
  templateUrl: './addpackages.component.html',
  styleUrls: ['./addpackages.component.scss']
})
export class AddpackagesComponent implements OnInit {

  response!:any
  packages!:Package[]
    constructor(private packageserve:CategoryService,private activeroute:ActivatedRoute) { }
  country_id=this.activeroute.snapshot.params['country_id']
    ngOnInit(): void {
      this.packageserve.profile_packages(this.country_id,1).subscribe((res)=>{this.response=res;this.packages=this.response.Response})
  
    }
    add_package(){

    }

}

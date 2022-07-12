import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Package } from 'src/app/models/package.model';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})

export class ViewprofileComponent implements OnInit {
response!:any
packages!:Package[]
  constructor(private packageserve:CategoryService,private activeroute:ActivatedRoute) { }
country_id=this.activeroute.snapshot.params['country_id']
  ngOnInit(): void {
    this.packageserve.profile_packages(this.country_id,0).subscribe((res)=>{this.response=res;this.packages=this.response.Response})

  }

}

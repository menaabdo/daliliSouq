import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-ads',
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.scss']
})
export class AllAdsComponent implements OnInit {
  items:any;

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.items=[1,,3,4,4,2,6]

  }
  getproduct(id:number){
    this.route.navigateByUrl('home/all-ads/product/id')

  }
}

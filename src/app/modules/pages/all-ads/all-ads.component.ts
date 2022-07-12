import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-ads',
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.scss']
})
export class AllAdsComponent implements OnInit {
  items:any;

  constructor() { }

  ngOnInit(): void {
    this.items=[1,,3,4,4,2,6]

  }
}

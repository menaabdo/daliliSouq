import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/models/store.model';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {
stores!:Store []
response!:any 
  constructor(private catserve:CategoryService) { }

  ngOnInit(): void {
    this.catserve.stores().subscribe((res)=>{this.response=res;this.stores=this.response.Response})
  }

}

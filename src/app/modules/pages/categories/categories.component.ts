import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/models/category.model';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
categories!: Category[]
respose!:any
  constructor(private catserve:CategoryService) { }

  ngOnInit(): void {
    this.catserve.all().subscribe((res)=>{this.respose=res
      this.categories=this.respose.Response
    })

  }

}

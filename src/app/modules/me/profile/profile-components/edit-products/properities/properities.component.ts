import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { properity } from 'src/app/models/properity.model';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-properities',
  templateUrl: './properities.component.html',
  styleUrls: ['./properities.component.scss']
})
export class ProperitiesComponent implements OnInit {
  categories!: Category[]
  properties!:properity[]
  constructor(private catserve:CategoryService,private route:Router,private active:ActivatedRoute) {
  }
  

  ngOnInit(): void {
  }

}

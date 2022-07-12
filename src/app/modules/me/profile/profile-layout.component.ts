import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss']
})
export class ProfileLayoutComponent implements OnInit {

  constructor(private userserve:UserService,private cookieserve:CookieService , private activeroute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  
  }
  logout(){
   localStorage.removeItem('token')
   this.router.navigateByUrl('/')
   
  }

}

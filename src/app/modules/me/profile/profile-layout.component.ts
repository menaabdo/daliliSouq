import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss']
})


export class ProfileLayoutComponent implements OnInit {
  followers!:User[]
  response_followers!:any
  followings!:User[]
  response_followings!:any
  constructor(private userserve:UserService,private cookieserve:CookieService , private activeroute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.count_followers();
    this.count_followings()
  }
  logout(){
    this.userserve.logout().subscribe((res)=>{
      localStorage.removeItem('token')
   localStorage.removeItem('id')
   localStorage.removeItem('lat')
   localStorage.removeItem('long')
   this.router.navigateByUrl('/')
   this.userserve.headers.delete('Authorization')
   console.log(this.userserve.headers)

    })}
    count_followers(){
      this.userserve.follwers().subscribe((res)=>{this.response_followers=res;this.followers=this.response_followers.Response
        console.log(this.followers)
        })
       
    }
    count_followings(){
      this.userserve.follwing().subscribe((res)=>{console.log(res);this.response_followings=res;this.followings=this.response_followings.Response.users
      })
      
    }

}

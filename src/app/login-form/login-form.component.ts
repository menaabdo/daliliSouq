import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{User} from '../models/user.model'
import { UserService } from '../service/user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
}) 
export class LoginFormComponent implements OnInit {
 user={} as User
 res!:any
 logininfo?:any
token?:any
  constructor(private loginservice:UserService,private activeroute:Router,private cookieService: CookieService) { }
 
  ngOnInit(): void {
  }
login(){
 
  this.loginservice.login(this.user)
  // .subscribe(
  //     (res)=>{this.logininfo=res;this.token=this.logininfo.Response.access_token;
  //      localStorage.setItem( 'token', this.token );
  //      this.loginservice.token=this.token
  //      this.activeroute.navigateByUrl('/home');
      
  //     })

     // this.loginservice.whologin( this.res)
    
    
  
}
}

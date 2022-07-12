import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
user={} as User
message_error?:any
  constructor(private registservice:UserService,private activeroute:Router) { }

  ngOnInit(): void {
  }
  regist(){
    this.user.gender=1
    this.user.country_code=1
    this.user.country_code=966
    this.user.country_id=3
    console.log(this.user)
    this.registservice.register(this.user).subscribe(
      (res)=>{this.message_error=res
        if(this.message_error.Error.status=='true')
        this.activeroute.navigate(['/login'])
        else
        this.message_error=this.message_error.Error
      })
    
    

  }

}

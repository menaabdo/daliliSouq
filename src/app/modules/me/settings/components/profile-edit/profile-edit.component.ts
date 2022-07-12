import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  profile_data!:any
  data!:any

  constructor(private profile:UserService) { }

  ngOnInit(): void {
    this.profile.profile({country_id:1    
    }).subscribe((res)=>{
  this.profile_data=res
  console.log(this.profile_data)
 
})

  }


edit(){
this.data={
  name:this.profile_data.Response.name,
  s_name:this.profile_data.Response.s_name,
  email:this.profile_data.Response.email,
  mobile:this.profile_data.Response.mobile,
  birth_date:this.profile_data.Response.birth_date,
  facebook:this.profile_data.Response.facebook,
  instagram:this.profile_data.Response.instagram,
  

}
  this.profile.update(this.data).subscribe((res)=>{this.profile_data=res;console.log(res)})

}}

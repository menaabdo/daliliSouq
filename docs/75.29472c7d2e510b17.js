"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[75],{4075:(T,u,p)=>{p.r(u),p.d(u,{SettingsModule:()=>M});var f=p(9808),d=p(4366),e=p(5e3),s=p(37),r=p(4182);let m=(()=>{class o{constructor(l){this.password=l}ngOnInit(){}change(){this.password.changepassword({password:this.curr_password,old_password:this.old_password}).subscribe(l=>{console.log(l)})}}return o.\u0275fac=function(l){return new(l||o)(e.Y36(s.K))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-change-password"]],decls:21,vars:2,consts:[[1,"card","mt-4"],[1,"card-header"],["routerLink","/me/settings/",1,"btn","btn-link","px-0"],[1,"fas","fa-arrow-left"],[1,"card-body"],[3,"ngSubmit"],[1,"form-group"],["for","exampleInputEmail1"],["type","password","id","exampleInputEmail1","aria-describedby","emailHelp","name","pass",1,"form-control",3,"ngModel","ngModelChange"],["for","exampleInputEmail2"],["type","password","id","exampleInputEmail2","aria-describedby","emailHelp","name","oldpass",1,"form-control",3,"ngModel","ngModelChange"],["for","exampleInputEmail3"],["type","password","id","exampleInputEmail3","aria-describedby","emailHelp",1,"form-control"],["type","submit",1,"btn","btn-primary"]],template:function(l,n){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"a",2),e._UZ(3,"i",3),e._uU(4," back to profile"),e.qZA()(),e.TgZ(5,"div",4)(6,"form",5),e.NdJ("ngSubmit",function(){return n.change()}),e.TgZ(7,"div",6)(8,"label",7),e._uU(9,"current password"),e.qZA(),e.TgZ(10,"input",8),e.NdJ("ngModelChange",function(a){return n.curr_password=a}),e.qZA()(),e.TgZ(11,"div",6)(12,"label",9),e._uU(13,"new password"),e.qZA(),e.TgZ(14,"input",10),e.NdJ("ngModelChange",function(a){return n.old_password=a}),e.qZA()(),e.TgZ(15,"div",6)(16,"label",11),e._uU(17,"confirm password"),e.qZA(),e._UZ(18,"input",12),e.qZA(),e.TgZ(19,"button",13),e._uU(20,"Submit"),e.qZA()()()()),2&l&&(e.xp6(10),e.Q6J("ngModel",n.curr_password),e.xp6(4),e.Q6J("ngModel",n.old_password))},directives:[d.yS,r._Y,r.JL,r.F,r.Fj,r.JJ,r.On],styles:[""]}),o})();var g=p(2160);function _(o,t){if(1&o&&(e.TgZ(0,"a",6),e._UZ(1,"i",26),e.qZA()),2&o){const l=e.oxw();e.Q6J("href",null==l.profile_data?null:l.profile_data.Response.facebook,e.LSH)}}function c(o,t){if(1&o&&(e.TgZ(0,"a",6),e._UZ(1,"i",27),e.qZA()),2&o){const l=e.oxw();e.Q6J("href",null==l.profile_data?null:l.profile_data.Response.twitter,e.LSH)}}function h(o,t){if(1&o&&(e.TgZ(0,"a",6),e._UZ(1,"i",28),e.qZA()),2&o){const l=e.oxw();e.Q6J("href",null==l.profile_data?null:l.profile_data.Response.youtube,e.LSH)}}const Z=[{path:"",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-settings-layout"]],decls:1,vars:0,template:function(l,n){1&l&&e._UZ(0,"router-outlet")},directives:[d.lC],styles:[""]}),o})(),children:[{path:"",component:(()=>{class o{constructor(l,n){this.profile=l,this.cookieService=n}ngOnInit(){this.user_data=this.profile.getuser(),this.profile.profile({country_id:1}).subscribe(l=>{this.profile_data=l,console.log(this.cookieService.get("token"))})}}return o.\u0275fac=function(l){return new(l||o)(e.Y36(s.K),e.Y36(g.N))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-profile-data"]],decls:50,vars:10,consts:[[1,"card","profile-data","mt-4"],[1,"card-header"],["routerLink","edit",1,"btn","btn-sm","btn-primary"],[1,"fa","fa-edit"],[1,"m-0"],[3,"href",4,"ngIf"],[3,"href"],[1,"fab","fa-instagram"],[1,"card-body"],[1,"row"],[1,"col-md-4"],["alt","",3,"src"],[1,"col-md-8"],[1,"list-group"],[1,"list-group-item"],[1,"fa","fa-user"],[1,"ml-2"],[1,"fa","fa-envelope"],[1,"fa","fa-phone"],[1,"fas","fa-venus-mars"],[1,"fa","fa-calendar"],[1,"form-group","form-check","m-0"],["type","checkbox","id","exampleCheck1",1,"form-check-input"],["for","exampleCheck1",1,"form-check-label","ml-2"],["routerLink","change-password",1,"btn","btn-sm","btn-primary","mt-2"],[1,"fa","fa-lock"],[1,"fab","fa-facebook-f"],[1,"fab","fa-twitter"],[1,"fab","fa-youtube"]],template:function(l,n){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"a",2),e._UZ(4,"i",3),e._uU(5," edit profile "),e.qZA()(),e.TgZ(6,"ul",4)(7,"li"),e.YNc(8,_,2,1,"a",5),e.qZA(),e.TgZ(9,"li")(10,"a",6),e._UZ(11,"i",7),e.qZA()(),e.TgZ(12,"li"),e.YNc(13,c,2,1,"a",5),e.qZA(),e.TgZ(14,"li"),e.YNc(15,h,2,1,"a",5),e.qZA()()(),e.TgZ(16,"div",8)(17,"div",9)(18,"div",10),e._UZ(19,"img",11),e.qZA(),e.TgZ(20,"div",12)(21,"ul",13)(22,"li",14),e._UZ(23,"i",15),e.TgZ(24,"span",16),e._uU(25),e.qZA()(),e.TgZ(26,"li",14),e._UZ(27,"i",17),e.TgZ(28,"span",16),e._uU(29),e.qZA()(),e.TgZ(30,"li",14),e._UZ(31,"i",18),e.TgZ(32,"span",16),e._uU(33),e.qZA()(),e.TgZ(34,"li",14),e._UZ(35,"i",19),e.TgZ(36,"span",16),e._uU(37),e.qZA()(),e.TgZ(38,"li",14),e._UZ(39,"i",20),e.TgZ(40,"span",16),e._uU(41),e.qZA()(),e.TgZ(42,"li",14)(43,"div",21),e._UZ(44,"input",22),e.TgZ(45,"label",23),e._uU(46," show number on profile and advertising"),e.qZA()()()(),e.TgZ(47,"button",24),e._UZ(48,"i",25),e._uU(49," change password "),e.qZA()()()()()),2&l&&(e.xp6(8),e.Q6J("ngIf",null==n.profile_data?null:n.profile_data.Response.facebook),e.xp6(2),e.s9C("href",null==n.profile_data?null:n.profile_data.Response.instagram,e.LSH),e.xp6(3),e.Q6J("ngIf",null==n.profile_data?null:n.profile_data.Response.twitter),e.xp6(2),e.Q6J("ngIf",null==n.profile_data?null:n.profile_data.Response.youtube),e.xp6(4),e.MGl("src","https://dalilisouq.com/",null==n.profile_data?null:n.profile_data.Response.image,"",e.LSH),e.xp6(6),e.Oqu(null==n.profile_data?null:n.profile_data.Response.url),e.xp6(4),e.Oqu(null==n.profile_data?null:n.profile_data.Response.email),e.xp6(4),e.Oqu(null==n.profile_data?null:n.profile_data.Response.mobile),e.xp6(4),e.Oqu(null==n.profile_data?null:n.profile_data.Response.gender),e.xp6(4),e.Oqu(null==n.profile_data?null:n.profile_data.Response.birth_date))},directives:[d.yS,f.O5,d.rH],styles:[".profile-data[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.profile-data[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex}.profile-data[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-of-type){margin-right:1rem}.profile-data[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:40px;height:40px;line-height:40px;text-align:center;border-radius:50%;color:#fff;cursor:pointer;background:#163e73}"]}),o})()},{path:"edit",component:(()=>{class o{constructor(l){this.profile=l}ngOnInit(){this.profile.profile({country_id:1}).subscribe(l=>{this.profile_data=l,console.log(this.profile_data)})}edit(){this.data={name:this.profile_data.Response.name,s_name:this.profile_data.Response.s_name,email:this.profile_data.Response.email,mobile:this.profile_data.Response.mobile,birth_date:this.profile_data.Response.birth_date,facebook:this.profile_data.Response.facebook,instagram:this.profile_data.Response.instagram},this.profile.update(this.data).subscribe(l=>{this.profile_data=l,console.log(l)})}}return o.\u0275fac=function(l){return new(l||o)(e.Y36(s.K))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-profile-edit"]],decls:60,vars:10,consts:[[1,"mt-4"],[3,"ngSubmit"],["f","ngForm"],[1,"row"],[1,"col-md-6"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","firstName",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","lastName",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","username",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","email",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","phone",1,"form-control",3,"ngModel","ngModelChange"],["type","date","id","exampleInputEmail1","aria-describedby","emailHelp","name","bdate",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","flink",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","tlink",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","ilink",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","ylink",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","form-check"],["type","checkbox","id","exampleCheck1",1,"form-check-input"],["for","exampleCheck1",1,"form-check-label"],["type","submit",1,"btn","btn-primary"]],template:function(l,n){1&l&&(e.TgZ(0,"div",0)(1,"form",1,2),e.NdJ("ngSubmit",function(){return n.edit()}),e.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"label",6),e._uU(7,"first name"),e.qZA(),e.TgZ(8,"input",7),e.NdJ("ngModelChange",function(a){return(null==n.profile_data?null:n.profile_data.Response).name=a}),e.qZA()()(),e.TgZ(9,"div",4)(10,"div",5)(11,"label",6),e._uU(12,"last name"),e.qZA(),e.TgZ(13,"input",8),e.NdJ("ngModelChange",function(a){return(null==n.profile_data?null:n.profile_data.Response).s_name=a}),e.qZA()()(),e.TgZ(14,"div",4)(15,"div",5)(16,"label",6),e._uU(17,"username"),e.qZA(),e.TgZ(18,"input",9),e.NdJ("ngModelChange",function(a){return(null==n.profile_data?null:n.profile_data.Response).name=a}),e.qZA()()(),e.TgZ(19,"div",4)(20,"div",5)(21,"label",6),e._uU(22,"email"),e.qZA(),e.TgZ(23,"input",10),e.NdJ("ngModelChange",function(a){return(null==n.profile_data?null:n.profile_data.Response).email=a}),e.qZA()()(),e.TgZ(24,"div",4)(25,"div",5)(26,"label",6),e._uU(27,"phone"),e.qZA(),e.TgZ(28,"input",11),e.NdJ("ngModelChange",function(a){return(null==n.profile_data?null:n.profile_data.Response).mobile=a}),e.qZA()()(),e.TgZ(29,"div",4)(30,"div",5)(31,"label",6),e._uU(32,"date of birth"),e.qZA(),e.TgZ(33,"input",12),e.NdJ("ngModelChange",function(a){return(null==n.profile_data?null:n.profile_data.Response).birth_date=a}),e.qZA()()(),e.TgZ(34,"div",4)(35,"div",5)(36,"label",6),e._uU(37,"facebook link"),e.qZA(),e.TgZ(38,"input",13),e.NdJ("ngModelChange",function(a){return(null==n.profile_data?null:n.profile_data.Response).facebook=a}),e.qZA()()(),e.TgZ(39,"div",4)(40,"div",5)(41,"label",6),e._uU(42,"twitter link"),e.qZA(),e.TgZ(43,"input",14),e.NdJ("ngModelChange",function(a){return(null==n.profile_data?null:n.profile_data.Response).twitter=a}),e.qZA()()(),e.TgZ(44,"div",4)(45,"div",5)(46,"label",6),e._uU(47,"instagram link"),e.qZA(),e.TgZ(48,"input",15),e.NdJ("ngModelChange",function(a){return(null==n.profile_data?null:n.profile_data.Response).instagram=a}),e.qZA()()(),e.TgZ(49,"div",4)(50,"div",5)(51,"label",6),e._uU(52,"youtube link"),e.qZA(),e.TgZ(53,"input",16),e.NdJ("ngModelChange",function(a){return(null==n.profile_data?null:n.profile_data.Response).google=a}),e.qZA()()()(),e.TgZ(54,"div",17),e._UZ(55,"input",18),e.TgZ(56,"label",19),e._uU(57,"show my number on profile and advetising"),e.qZA()(),e.TgZ(58,"button",20),e._uU(59,"Submit"),e.qZA()()()),2&l&&(e.xp6(8),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.name),e.xp6(5),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.s_name),e.xp6(5),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.name),e.xp6(5),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.email),e.xp6(5),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.mobile),e.xp6(5),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.birth_date),e.xp6(5),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.facebook),e.xp6(5),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.twitter),e.xp6(5),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.instagram),e.xp6(5),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.google))},directives:[r._Y,r.JL,r.F,r.Fj,r.JJ,r.On],styles:[""]}),o})()},{path:"change-password",component:m}]}];let b=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.Bz.forChild(Z)],d.Bz]}),o})();var C=p(5349);let M=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[f.ez,b,C.m]]}),o})()}}]);
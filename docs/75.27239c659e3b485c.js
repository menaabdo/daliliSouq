"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[75],{4075:(R,g,p)=>{p.r(g),p.d(g,{SettingsModule:()=>P});var s=p(9808),d=p(4366),e=p(5e3),u=p(37),r=p(4182);let f=(()=>{class o{constructor(t){this.password=t}ngOnInit(){}change(){this.password.changepassword({password:this.curr_password,old_password:this.old_password}).subscribe(t=>{console.log(t)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.K))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-change-password"]],decls:21,vars:2,consts:[[1,"card","mt-4"],[1,"card-header"],["routerLink","/me/settings/",1,"btn","btn-link","px-0"],[1,"fas","fa-arrow-left"],[1,"card-body"],[3,"ngSubmit"],[1,"form-group"],["for","exampleInputEmail1"],["type","password","id","exampleInputEmail1","aria-describedby","emailHelp","name","pass",1,"form-control",3,"ngModel","ngModelChange"],["for","exampleInputEmail2"],["type","password","id","exampleInputEmail2","aria-describedby","emailHelp","name","oldpass",1,"form-control",3,"ngModel","ngModelChange"],["for","exampleInputEmail3"],["type","password","id","exampleInputEmail3","aria-describedby","emailHelp",1,"form-control"],["type","submit",1,"btn","btn-primary"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"a",2),e._UZ(3,"i",3),e._uU(4," back to profile"),e.qZA()(),e.TgZ(5,"div",4)(6,"form",5),e.NdJ("ngSubmit",function(){return n.change()}),e.TgZ(7,"div",6)(8,"label",7),e._uU(9,"current password"),e.qZA(),e.TgZ(10,"input",8),e.NdJ("ngModelChange",function(l){return n.curr_password=l}),e.qZA()(),e.TgZ(11,"div",6)(12,"label",9),e._uU(13,"new password"),e.qZA(),e.TgZ(14,"input",10),e.NdJ("ngModelChange",function(l){return n.old_password=l}),e.qZA()(),e.TgZ(15,"div",6)(16,"label",11),e._uU(17,"confirm password"),e.qZA(),e._UZ(18,"input",12),e.qZA(),e.TgZ(19,"button",13),e._uU(20,"Submit"),e.qZA()()()()),2&t&&(e.xp6(10),e.Q6J("ngModel",n.curr_password),e.xp6(4),e.Q6J("ngModel",n.old_password))},directives:[d.yS,r._Y,r.JL,r.F,r.Fj,r.JJ,r.On],styles:[""]}),o})();var m=p(2160);function c(o,i){if(1&o&&(e.TgZ(0,"a",6),e._UZ(1,"i",28),e.qZA()),2&o){const t=e.oxw();e.Q6J("href",null==t.profile_data?null:t.profile_data.Response.facebook,e.LSH)}}function _(o,i){if(1&o&&(e.TgZ(0,"a",6),e._UZ(1,"i",29),e.qZA()),2&o){const t=e.oxw();e.Q6J("href",null==t.profile_data?null:t.profile_data.Response.twitter,e.LSH)}}function h(o,i){if(1&o&&(e.TgZ(0,"a",6),e._UZ(1,"i",30),e.qZA()),2&o){const t=e.oxw();e.Q6J("href",null==t.profile_data?null:t.profile_data.Response.youtube,e.LSH)}}function b(o,i){1&o&&(e.TgZ(0,"span",16),e._uU(1,"male"),e.qZA())}function Z(o,i){1&o&&(e.TgZ(0,"span",16),e._uU(1,"female"),e.qZA())}let C=(()=>{class o{constructor(t,n){this.profile=t,this.cookieService=n}ngOnInit(){this.user_data=this.profile.getuser(),this.profile.profile({country_id:1}).subscribe(t=>{this.profile_data=t,console.log(this.cookieService.get("token"))})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.K),e.Y36(m.N))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-profile-data"]],decls:51,vars:11,consts:[[1,"card","profile-data","mt-4"],[1,"card-header"],["routerLink","edit",1,"btn","btn-sm","btn-primary"],[1,"fa","fa-edit"],[1,"m-0"],[3,"href",4,"ngIf"],[3,"href"],[1,"fab","fa-instagram"],[1,"card-body"],[1,"row"],[1,"col-md-4"],["alt","",3,"src"],[1,"col-md-8"],[1,"list-group"],[1,"list-group-item"],[1,"fa","fa-user"],[1,"ml-2"],[1,"fa","fa-envelope"],[1,"fa","fa-phone"],[1,"fa","fa-check","bg-success","text-light","p-1","mx-5","rounded-circle","border"],[1,"fas","fa-venus-mars"],["class","ml-2",4,"ngIf"],[1,"fa","fa-calendar"],[1,"form-group","form-check","m-0"],["type","checkbox","id","exampleCheck1",1,"form-check-input"],["for","exampleCheck1",1,"form-check-label","ml-2"],["routerLink","change-password",1,"btn","btn-sm","btn-primary","mt-2"],[1,"fa","fa-lock"],[1,"fab","fa-facebook-f"],[1,"fab","fa-twitter"],[1,"fab","fa-youtube"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"a",2),e._UZ(4,"i",3),e._uU(5," edit profile "),e.qZA()(),e.TgZ(6,"ul",4)(7,"li"),e.YNc(8,c,2,1,"a",5),e.qZA(),e.TgZ(9,"li")(10,"a",6),e._UZ(11,"i",7),e.qZA()(),e.TgZ(12,"li"),e.YNc(13,_,2,1,"a",5),e.qZA(),e.TgZ(14,"li"),e.YNc(15,h,2,1,"a",5),e.qZA()()(),e.TgZ(16,"div",8)(17,"div",9)(18,"div",10),e._UZ(19,"img",11),e.qZA(),e.TgZ(20,"div",12)(21,"ul",13)(22,"li",14),e._UZ(23,"i",15),e.TgZ(24,"span",16),e._uU(25),e.qZA()(),e.TgZ(26,"li",14),e._UZ(27,"i",17),e.TgZ(28,"span",16),e._uU(29),e.qZA()(),e.TgZ(30,"li",14),e._UZ(31,"i",18),e.TgZ(32,"span",16),e._uU(33),e.qZA(),e._UZ(34,"i",19),e.qZA(),e.TgZ(35,"li",14),e._UZ(36,"i",20),e.YNc(37,b,2,0,"span",21),e.YNc(38,Z,2,0,"span",21),e.qZA(),e.TgZ(39,"li",14),e._UZ(40,"i",22),e.TgZ(41,"span",16),e._uU(42),e.qZA()(),e.TgZ(43,"li",14)(44,"div",23),e._UZ(45,"input",24),e.TgZ(46,"label",25),e._uU(47," show number on profile and advertising"),e.qZA()()()(),e.TgZ(48,"button",26),e._UZ(49,"i",27),e._uU(50," change password "),e.qZA()()()()()),2&t&&(e.xp6(8),e.Q6J("ngIf",null==n.profile_data?null:n.profile_data.Response.facebook),e.xp6(2),e.s9C("href",null==n.profile_data?null:n.profile_data.Response.instagram,e.LSH),e.xp6(3),e.Q6J("ngIf",null==n.profile_data?null:n.profile_data.Response.twitter),e.xp6(2),e.Q6J("ngIf",null==n.profile_data?null:n.profile_data.Response.youtube),e.xp6(4),e.MGl("src","https://dalilisouq.com/",null==n.profile_data?null:n.profile_data.Response.image,"",e.LSH),e.xp6(6),e.Oqu(null==n.profile_data?null:n.profile_data.Response.url),e.xp6(4),e.Oqu(null==n.profile_data?null:n.profile_data.Response.email),e.xp6(4),e.Oqu(null==n.profile_data?null:n.profile_data.Response.mobile),e.xp6(4),e.Q6J("ngIf",null==n.profile_data?null:n.profile_data.Response.gender),e.xp6(1),e.Q6J("ngIf",!(null!=n.profile_data&&n.profile_data.Response.gender)),e.xp6(4),e.Oqu(null==n.profile_data?null:n.profile_data.Response.birth_date))},directives:[d.yS,s.O5,d.rH],styles:[".profile-data[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.profile-data[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex}.profile-data[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-of-type){margin-right:1rem}.profile-data[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:40px;height:40px;line-height:40px;text-align:center;border-radius:50%;color:#fff;cursor:pointer;background:#163e73}"]}),o})();var y=p(7961);const M=function(o){return{"background-image":o}},T=[{path:"",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-settings-layout"]],decls:1,vars:0,template:function(t,n){1&t&&e._UZ(0,"router-outlet")},directives:[d.lC],styles:[""]}),o})(),children:[{path:"",component:C},{path:"edit",component:(()=>{class o{constructor(t,n,a){this.profile=t,this.categoryserve=n,this.route=a,this.fd=new FormData}ngOnInit(){this.getallcountries(),this.profile.profile({country_id:1}).subscribe(t=>{var n;this.profile_data=t,this.country=this.profile_data.Response.country;let a=this.profile_data.Response.mobile.toString();a=a.slice(this.country.phone_code.toString().length),this.profile_data.Response.mobile=a,this.gender=null===(n=this.profile_data)||void 0===n?void 0:n.Response.gender,this.imageSrc=`https://dalilisouq.com/${this.profile_data.Response.image}`,console.log(this.profile_data)})}changegender(t){this.gender=1==this.gender?0:1}getallcountries(){this.categoryserve.countries().subscribe(t=>{this.allcountries=t.cateories,console.log(this.allcountries)})}edit(){this.fd.append("name",this.profile_data.Response.name),this.fd.append("s_name",this.profile_data.Response.s_name),this.fd.append("email",this.profile_data.Response.email),this.fd.append("mobile",this.profile_data.Response.mobile),this.fd.append("birth_date",this.profile_data.Response.birth_date),this.fd.append("facebook",this.profile_data.Response.facebook),this.fd.append("instagram",this.profile_data.Response.instagram),this.fd.append("youtube",this.profile_data.Response.youtube),this.fd.append("google",this.profile_data.Response.google),this.fd.append("twitter",this.profile_data.Response.twitter),this.fd.append("gender",this.gender),this.selectedfile&&this.fd.append("image",this.selectedfile),this.profile.update(this.fd).subscribe(t=>{this.profile_data=t,this.route.navigateByUrl("/home/me/settings")})}selectedFile(t){if(this.selectedfile=t.target.files[0],t.target.files&&t.target.files[0]){const n=t.target.files[0],a=new FileReader;a.onload=l=>{this.imageSrc=a.result,this.imageSrc=URL.createObjectURL(t.target.files[0]),localStorage.setItem("img",this.imageSrc),console.log(this.data)},a.readAsDataURL(n)}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.K),e.Y36(y.H),e.Y36(d.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-profile-edit"]],decls:76,vars:17,consts:[[1,"mt-4","row"],[1,"container","col-10"],[3,"ngSubmit"],["f","ngForm"],[1,"bg1","text-d-flex","justify-content-center","border-bottom","border-ligth",2,"height","200px","padding-top","10px","margin-bottom","5px","margin-top","2px"],[1,"image-upload","text-center",3,"ngStyle"],["for","file-input",1,"text-center"],[1,"fa","fa-camera","fa-2x"],["required","","id","file-input","type","file","accept","image/*",3,"change"],[1,"rounded","d-flex","justify-content-center","text-light","mb-3"],[1,"btn",3,"ngClass","click"],[1,"row"],[1,"col-md-6"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","firstName",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","lastName",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","username",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","email",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-control","border-bottom-0","d-flex","justify-content-left","align-items-center"],[3,"src"],[1,"pl-2"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","phone",1,"form-control","border-0",3,"ngModel","ngModelChange"],["type","date","id","exampleInputEmail1","aria-describedby","emailHelp","name","bdate",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","flink",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","tlink",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","ilink",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","name","ylink",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","form-check"],["type","checkbox","id","exampleCheck1",1,"form-check-input"],["for","exampleCheck1",1,"form-check-label"],[1,"d-flex","justify-content-center","col-12"],["type","submit",1,"btn","rounded","btn-primary"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2,3),e.NdJ("ngSubmit",function(){return n.edit()}),e.TgZ(4,"div",4)(5,"div",5)(6,"label",6),e._UZ(7,"i",7),e.qZA(),e.TgZ(8,"input",8),e.NdJ("change",function(l){return n.selectedFile(l)}),e.qZA()()(),e.TgZ(9,"div",9)(10,"a",10),e.NdJ("click",function(){return n.changegender(n.gender)}),e._uU(11,"male"),e.qZA(),e.TgZ(12,"a",10),e.NdJ("click",function(){return n.changegender(n.gender)}),e._uU(13,"female"),e.qZA()(),e.TgZ(14,"div",11)(15,"div",12)(16,"div",13)(17,"label",14),e._uU(18,"first name"),e.qZA(),e.TgZ(19,"input",15),e.NdJ("ngModelChange",function(l){return(null==n.profile_data?null:n.profile_data.Response).name=l}),e.qZA()()(),e.TgZ(20,"div",12)(21,"div",13)(22,"label",14),e._uU(23,"last name"),e.qZA(),e.TgZ(24,"input",16),e.NdJ("ngModelChange",function(l){return(null==n.profile_data?null:n.profile_data.Response).s_name=l}),e.qZA()()(),e.TgZ(25,"div",12)(26,"div",13)(27,"label",14),e._uU(28,"username"),e.qZA(),e.TgZ(29,"input",17),e.NdJ("ngModelChange",function(l){return(null==n.profile_data?null:n.profile_data.Response).url=l}),e.qZA()()(),e.TgZ(30,"div",12)(31,"div",13)(32,"label",14),e._uU(33,"email"),e.qZA(),e.TgZ(34,"input",18),e.NdJ("ngModelChange",function(l){return(null==n.profile_data?null:n.profile_data.Response).email=l}),e.qZA()()(),e.TgZ(35,"div",12)(36,"div",13)(37,"label",14),e._uU(38,"phone"),e.qZA(),e.TgZ(39,"div",19),e._UZ(40,"img",20),e.TgZ(41,"span",21),e._uU(42),e.qZA(),e.TgZ(43,"input",22),e.NdJ("ngModelChange",function(l){return(null==n.profile_data?null:n.profile_data.Response).mobile=l}),e.qZA()()()(),e.TgZ(44,"div",12)(45,"div",13)(46,"label",14),e._uU(47,"date of birth"),e.qZA(),e.TgZ(48,"input",23),e.NdJ("ngModelChange",function(l){return(null==n.profile_data?null:n.profile_data.Response).birth_date=l}),e.qZA()()(),e.TgZ(49,"div",12)(50,"div",13)(51,"label",14),e._uU(52,"facebook link"),e.qZA(),e.TgZ(53,"input",24),e.NdJ("ngModelChange",function(l){return(null==n.profile_data?null:n.profile_data.Response).facebook=l}),e.qZA()()(),e.TgZ(54,"div",12)(55,"div",13)(56,"label",14),e._uU(57,"twitter link"),e.qZA(),e.TgZ(58,"input",25),e.NdJ("ngModelChange",function(l){return(null==n.profile_data?null:n.profile_data.Response).twitter=l}),e.qZA()()(),e.TgZ(59,"div",12)(60,"div",13)(61,"label",14),e._uU(62,"instagram link"),e.qZA(),e.TgZ(63,"input",26),e.NdJ("ngModelChange",function(l){return(null==n.profile_data?null:n.profile_data.Response).instagram=l}),e.qZA()()(),e.TgZ(64,"div",12)(65,"div",13)(66,"label",14),e._uU(67,"youtube link"),e.qZA(),e.TgZ(68,"input",27),e.NdJ("ngModelChange",function(l){return(null==n.profile_data?null:n.profile_data.Response).google=l}),e.qZA()()()(),e.TgZ(69,"div",28),e._UZ(70,"input",29),e.TgZ(71,"label",30),e._uU(72,"show my number on profile and advetising"),e.qZA()(),e.TgZ(73,"div",31)(74,"button",32),e._uU(75,"update"),e.qZA()()()()()),2&t&&(e.xp6(5),e.Q6J("ngStyle",e.VKq(15,M,"url("+n.imageSrc+")")),e.xp6(5),e.Q6J("ngClass",1==n.gender?"activegender":"togglebutton"),e.xp6(2),e.Q6J("ngClass",0==n.gender?"activegender":"togglebutton"),e.xp6(7),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.name),e.xp6(5),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.s_name),e.xp6(5),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.url),e.xp6(5),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.email),e.xp6(6),e.MGl("src","https://dalilisouq.com/",n.country.image,"",e.LSH),e.xp6(2),e.hij("+",null==n.country?null:n.country.phone_code,""),e.xp6(1),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.mobile),e.xp6(5),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.birth_date),e.xp6(5),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.facebook),e.xp6(5),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.twitter),e.xp6(5),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.instagram),e.xp6(5),e.Q6J("ngModel",null==n.profile_data?null:n.profile_data.Response.google))},directives:[r._Y,r.JL,r.F,s.PC,s.mk,r.Fj,r.JJ,r.On],styles:[".togglebutton[_ngcontent-%COMP%]{background-color:#8a1937;color:#fff;opacity:.4;transition:opacity 2s ease}.activegender[_ngcontent-%COMP%]{background-color:#163e73;color:#fff;opacity:1;transition:opacity 2s ease}a[_ngcontent-%COMP%]{cursor:pointer}.image-upload[_ngcontent-%COMP%]{height:130px;width:130px;border-radius:50%;box-shadow:#00000029 0 3px 6px,#0000003b 0 3px 6px;margin:auto auto 15px;overflow-y:hidden;background-color:#e9e5e5;background-size:100% 100%;background-repeat:no-repeat}.image-upload[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{display:none}.image-upload[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:80px;cursor:pointer;position:absolute;margin:auto;color:var(--white);color:silver}"]}),o})()},{path:"change-password",component:f}]}];let v=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.Bz.forChild(T)],d.Bz]}),o})();var A=p(5349);let P=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[s.ez,v,A.m]]}),o})()}}]);
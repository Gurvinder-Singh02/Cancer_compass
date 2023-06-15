"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9860],{9860:(x,c,a)=>{a.r(c),a.d(c,{SignupPageModule:()=>v});var u=a(6895),r=a(433),i=a(5035),g=a(1927),p=a(655),n=a(8256),m=a(1228);function d(e,s){1&e&&(n.TgZ(0,"ion-text",21)(1,"p",22),n._uU(2,"*Please enter proper Email Address"),n.qZA()())}function f(e,s){1&e&&(n.TgZ(0,"p",22),n._uU(1," *Please enter your Password "),n.qZA())}function h(e,s){1&e&&(n.TgZ(0,"p",22),n._uU(1," *Password must be of atleast 8 characters "),n.qZA())}function P(e,s){if(1&e&&(n.TgZ(0,"ion-text",21),n.YNc(1,f,2,0,"p",23),n.YNc(2,h,2,0,"p",23),n.qZA()),2&e){const o=n.oxw();n.xp6(1),n.Q6J("ngIf",o.signupForm.get("password").invalid&&o.signupForm.get("password").errors.required),n.xp6(1),n.Q6J("ngIf",o.signupForm.get("password").dirty)}}function _(e,s){if(1&e){const o=n.EpF();n.TgZ(0,"ion-button",24),n.NdJ("click",function(){n.CHM(o);const l=n.oxw();return n.KtG(l.onSubmit())}),n._uU(1,"Sign Up"),n.qZA()}}function w(e,s){1&e&&(n.TgZ(0,"ion-button",25),n._UZ(1,"ion-spinner",26),n.qZA())}const C=[{path:"",component:(()=>{class e{constructor(o,t,l){this.router=o,this.authService=t,this.alertController=l,this.isTypePassword=!0,this.isLoading=!1,this.initForm()}ngOnInit(){}initForm(){this.signupForm=new r.cw({username:new r.NI("",{validators:[r.kI.required]}),email:new r.NI("",{validators:[r.kI.required,r.kI.email]}),password:new r.NI("",{validators:[r.kI.required,r.kI.minLength(8)]})})}onChange(){this.isTypePassword=!this.isTypePassword}onSubmit(){!this.signupForm.valid||(console.log(this.signupForm.value),this.register(this.signupForm))}register(o){this.isLoading=!0,console.log(o.value),this.authService.register(o.value).then(t=>{console.log(t),this.router.navigateByUrl("/home",{replaceUrl:!0}),this.isLoading=!1,o.reset()}).catch(t=>{console.log(t),this.isLoading=!1;let l="Could not sign you up, please try again.";"auth/email-already-in-use"==t.code&&(l="Email already in use"),this.showAlert(l)})}showAlert(o){return(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Alert",message:o,buttons:["OK"]})).present()})}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(g.F0),n.Y36(m.e),n.Y36(i.Br))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-signup"]],decls:34,vars:9,consts:[[3,"fullscreen"],[1,"welcome_msg"],[1,"ion-text-center"],["color","dark",1,"ion-text-center","ion-no-margin","ion-no-padding",2,"font-size","12.5px"],[3,"formGroup"],["lines","none",1,"ion-margin","ion-padding","ion-text-center"],[1,"ion-margin-vertical"],["name","person-outline","slot","end","color","medium"],["formControlName","username","placeholder","Enter Username"],["name","mail-outline","slot","end","color","medium"],["formControlName","email","placeholder","Enter Email Address"],["class","ion-text-left","color","danger",4,"ngIf"],["slot","end",3,"name","color","click"],["formControlName","password","placeholder","Enter Password",3,"type"],["size","12",1,"alignItems"],["align","left"],["color","primary","shape","round",3,"click",4,"ngIf"],["fill","clear",4,"ngIf"],[1,"signup"],["color","warning","routerLink","/login"],["color","secondary","routerLink","../../tabs"],["color","danger",1,"ion-text-left"],[1,"error",2,"font-size","10px"],["style","font-size: 10px;","class","error",4,"ngIf"],["color","primary","shape","round",3,"click"],["fill","clear"],["name","crescent","color","primary"]],template:function(o,t){1&o&&(n.TgZ(0,"ion-content",0)(1,"ion-text",1)(2,"h1",2),n._uU(3,"New Member ? "),n.qZA(),n.TgZ(4,"p",3),n._uU(5,"Create an account to connect with the community "),n.qZA()(),n.TgZ(6,"form",4)(7,"ion-list",5)(8,"ion-item",6),n._UZ(9,"ion-icon",7)(10,"ion-input",8),n.qZA(),n.TgZ(11,"ion-item",6),n._UZ(12,"ion-icon",9)(13,"ion-input",10),n.qZA(),n.YNc(14,d,3,0,"ion-text",11),n.TgZ(15,"ion-item",6)(16,"ion-icon",12),n.NdJ("click",function(){return t.onChange()}),n.qZA(),n._UZ(17,"ion-input",13),n.qZA(),n.YNc(18,P,3,2,"ion-text",11),n.TgZ(19,"ion-row",6)(20,"ion-col",14)(21,"div",15),n._UZ(22,"ion-checkbox"),n.TgZ(23,"ion-note"),n._uU(24,"I accept the policy and terms"),n.qZA()()()(),n.YNc(25,_,2,0,"ion-button",16),n.YNc(26,w,2,0,"ion-button",17),n.TgZ(27,"p",18)(28,"ion-note"),n._UZ(29,"br"),n.TgZ(30,"ion-text",19),n._uU(31," Login "),n.qZA(),n.TgZ(32,"ion-text",20),n._uU(33," / Home "),n.qZA()()()()()()),2&o&&(n.Q6J("fullscreen",!0),n.xp6(6),n.Q6J("formGroup",t.signupForm),n.xp6(8),n.Q6J("ngIf",!t.signupForm.get("email").valid&&t.signupForm.get("email").touched),n.xp6(2),n.Q6J("name",t.isTypePassword?"lock-closed-outline":"lock-open-outline")("color",t.isTypePassword?"medium":"primary"),n.xp6(1),n.Q6J("type",t.isTypePassword?"password":"text"),n.xp6(1),n.Q6J("ngIf",!t.signupForm.get("password").valid&&t.signupForm.get("password").touched),n.xp6(7),n.Q6J("ngIf",!t.isLoading),n.xp6(1),n.Q6J("ngIf",t.isLoading))},dependencies:[u.O5,r._Y,r.JJ,r.JL,i.YG,i.nz,i.wI,i.W2,i.gu,i.pK,i.Ie,i.q_,i.uN,i.Nd,i.PQ,i.yW,i.w,i.j9,i.YI,g.rH,r.sg,r.u],styles:["[_ngcontent-%COMP%]::-webkit-scrollbar, *[_ngcontent-%COMP%]::-webkit-scrollbar{display:none;overflow:hidden}ion-content[_ngcontent-%COMP%]{overflow:hidden;--overflow: hidden}.welcome_msg[_ngcontent-%COMP%]{color:#57bf9c}.welcome_msg[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:50px;font-size:large;font-weight:600}.scroll-content[_ngcontent-%COMP%]{overflow:hidden}ion-list[_ngcontent-%COMP%]{background:transparent;transform:translateY(1vh)}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border:1px solid var(--ion-color-medium);border-radius:10px}ion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{margin-bottom:5vh}ion-list[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:30vh;margin:auto}ion-list[_ngcontent-%COMP%]   .alignItems[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%]   .alignItems[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}ion-list[_ngcontent-%COMP%]   .alignItems[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{margin-right:3vw;--size: 1.1rem}ion-list[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{font-size:.85rem}.backButton[_ngcontent-%COMP%]{position:absolute;top:190px;left:15px;font-size:2rem}"]}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[g.Bz.forChild(C),g.Bz]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[u.ez,r.u5,i.Pc,Z,r.UX]}),e})()}}]);
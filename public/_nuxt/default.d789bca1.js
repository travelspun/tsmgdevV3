import{_ as I}from"./nuxt-link.dc40e666.js";import{a as M,h as S,A as W,M as j,r as o,o as s,i as x,b as t,w as e,F as b,j as w,e as a,t as k,c as d,G as z,u as R,L as q,H,n as U,g as X,s as Y,m as J,p as K,q as O,N as Q,T as Z}from"./entry.cf4b33a3.js";import{_ as V}from"./_plugin-vue_export-helper.c27b6911.js";const tt={class:"mr-2"},et={class:"mr-2"},ot={class:"d-none d-sm-flex"},nt={class:"mr-2"},st={class:"mr-2"},at={class:"mr-2"},_t="#ffffff",F=!1,lt=M({__name:"TestTopNav",setup(u){const g=S(!1),r=S(!1),T=[{text:"Events",link:"/events"},{text:"Why TravelSMG",link:"/why",subNav:[{text:"Press/Blog",link:"/press"}]},{text:"About",link:"/about"}],h=()=>{g.value=window.innerWidth<850};return W(g,c=>{c||r&&(r.value=!1)}),j(()=>{h(),window.addEventListener("resize",h,{passive:!0})}),(c,_)=>{const m=o("v-divider"),i=o("v-img"),l=o("v-btn"),f=I,y=o("v-list-item"),v=o("v-list"),A=o("v-navigation-drawer"),E=o("v-app-bar-nav-icon"),P=o("v-app-bar-title"),D=o("v-spacer"),G=o("v-menu"),L=o("v-app-bar");return s(),x("div",null,[t(A,{modelValue:R(r),"onUpdate:modelValue":_[0]||(_[0]=n=>q(r)?r.value=n:null),app:"",temporary:"",dark:"",src:"/img/bgDrawer.jpg"},{default:e(()=>[t(m),t(i,{src:"/img/tsmglogo.png","max-width":"276px"}),t(v,{dense:""},{default:e(()=>[(s(),x(b,null,w(T,(n,N)=>t(y,{key:N,link:""},{default:e(()=>[t(f,{to:n.link},{default:e(()=>[t(l,{flat:""},{default:e(()=>[a("span",tt,k(n.text),1)]),_:2},1024)]),_:2},1032,["to"]),n.subNav?(s(!0),x(b,{key:0},w(n.subNav,(p,C)=>(s(),d(y,{key:C},{default:e(()=>[t(f,{to:p.link,class:"pl-2"},{default:e(()=>[t(l,{flat:""},{default:e(()=>[a("span",et,k(p.text),1)]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),128)):z("",!0)]),_:2},1024)),64))]),_:1})]),_:1},8,["modelValue"]),t(L,{app:"",color:_t,flat:F,class:Y(["px-15",{expand:F}])},{default:e(()=>[t(E,{class:"d-flex d-sm-none",onClick:_[1]||(_[1]=n=>r.value=!0)}),t(P,null,{default:e(()=>[t(i,{src:"/img/tsmglogo.png","max-width":"276px"})]),_:1}),t(D),a("div",ot,[(s(),x(b,null,w(T,(n,N)=>a("div",{key:N},[n.subNav?(s(),d(G,{key:1,"open-on-hover":""},{activator:e(({props:p})=>[t(f,{to:n.link},{default:e(()=>[t(l,H(p,{text:"",onClick:C=>c.$vuetify.goTo(n.link),color:"primary"}),{default:e(()=>[a("span",st,k(n.text),1)]),_:2},1040,["onClick"])]),_:2},1032,["to"])]),default:e(()=>[t(v,null,{default:e(()=>[(s(!0),x(b,null,w(n.subNav,(p,C)=>(s(),d(y,null,{default:e(()=>[t(f,{to:p.link},{default:e(()=>[t(l,U(X(c.props)),{default:e(()=>[a("span",at,k(p.text),1)]),_:2},1040)]),_:2},1032,["to"])]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)):(s(),d(f,{key:0,to:n.link},{default:e(()=>[n.subNav?z("",!0):(s(),d(l,{key:0,flat:"",onClick:p=>c.$vuetify.goTo(n.link),color:"primary"},{default:e(()=>[a("span",nt,k(n.text),1)]),_:2},1032,["onClick"]))]),_:2},1032,["to"]))])),64))])]),_:1},8,["class"])])}}});const rt=V(lt,[["__scopeId","data-v-8efc563a"]]),$=u=>(K("data-v-acf461ea"),u=u(),O(),u),ct={align:"center",class:"ma-0 pa-0 my-0 py-0"},it=$(()=>a("br",null,null,-1)),pt=$(()=>a("span",{class:"mr-2 text-primary"},"Events",-1)),dt=$(()=>a("span",{class:"mr-2 text-primary"},"Why TravelSMG",-1)),ut=$(()=>a("span",{class:"mr-2 text-primary"},"About",-1)),mt=$(()=>a("strong",null,"Travel Show Marketing All Rights Reserved",-1)),B="#ffffff",ft=M({__name:"FooterTest",setup(u){const g=S([{text:"mdi-facebook",link:"https://facebook.com"},{text:"mdi-instagram",link:"https://instagram.com"},{text:"mdi-linkedin",link:"https://linkedin.com"},{text:"mdi-youtube",link:"https://youtube.com"}]);return(r,T)=>{const h=o("v-img"),c=o("v-icon"),_=o("v-btn"),m=o("v-card-text"),i=I,l=o("v-divider"),f=o("v-card"),y=o("v-footer");return s(),d(y,{padless:"",color:B},{default:e(()=>[t(f,{flat:"",tile:"",class:"secondary text-center",color:B},{default:e(()=>[t(m,null,{default:e(()=>[a("div",ct,[t(h,{class:"ma-5",src:"/img/tsmglogo.png",width:"276px"}),it]),(s(!0),x(b,null,w(R(g),v=>(s(),d(_,{key:v.text,class:"mx-3",variant:"plain",size:"large",href:v.link,target:"_blank"},{default:e(()=>[t(c,{color:"primary",size:"large",icon:v.text},null,8,["icon"])]),_:2},1032,["href"]))),128))]),_:1}),t(m,{class:"text-white pt-0"},{default:e(()=>[t(i,{to:"/events"},{default:e(()=>[t(_,{color:"transparent",elevation:"0",text:""},{default:e(()=>[pt]),_:1})]),_:1}),t(i,{to:"/why"},{default:e(()=>[t(_,{color:"transparent",elevation:"0",text:""},{default:e(()=>[dt]),_:1})]),_:1}),t(i,{to:"/about"},{default:e(()=>[t(_,{color:"transparent",elevation:"0",text:""},{default:e(()=>[ut]),_:1})]),_:1})]),_:1}),t(l),t(m,{class:"text-white"},{default:e(()=>[J(k(new Date().getFullYear())+" — ",1),mt]),_:1})]),_:1})]),_:1})}}});const vt=V(ft,[["__scopeId","data-v-acf461ea"]]),xt={layout:"blank",data(){return{}},mounted(){},methods:{}};function kt(u,g,r,T,h,c){const _=rt,m=o("router-view"),i=vt,l=o("v-app");return s(),d(l,{app:""},{default:e(()=>[t(_),t(Z,{name:"layout",mode:"out-in"},{default:e(()=>[Q(u.$slots,"default",{},()=>[t(m)])]),_:3}),t(i)]),_:3})}const bt=V(xt,[["render",kt]]);export{bt as default};
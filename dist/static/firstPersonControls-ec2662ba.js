import{l as p,e as l,T as c,w as d}from"./trescientos-a922f233.js";import{B as m,N as _}from"./three.module-cbea6429.js";import{Y as f,o as u,s as h,B as g,aa as w,I as e,a as s,U as o}from"./vendor-19b019cc.js";const B=o("TresPerspectiveCamera",{position:[0,3,10]},null,-1),T=o("TresGridHelper",{args:[100,100]},null,-1),C=o("TresAmbientLight",{intensity:1},null,-1),x=f({__name:"firstPersonControls",setup(b){const n={clearColor:"#82DBC5",shadows:!0,alpha:!1,shadowMapType:m,toneMapping:_},r=a=>console.log(a);return(a,t)=>(u(),h(e(p),w(n,{"window-size":""}),{default:g(()=>[s(e(l)),B,s(e(c),{"make-default":"",onIsLock:t[0]||(t[0]=i=>r(i))}),s(e(d),{"head-bobbing":""}),T,C]),_:1},16))}});export{x as default};
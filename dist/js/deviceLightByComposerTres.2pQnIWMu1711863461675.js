import{a0 as P,aD as $,aE as F,ak as G,bb as w,a5 as V,az as X,o as g,c as q,X as n,K as v,E as I,a8 as K,a1 as _,a2 as O,a3 as j,a4 as H,aq as J,r as Q,v as M,D as k,a7 as U,a as x,a9 as S,aa as y,ab as W,ag as Y}from"./vendor.9kaiU6_A1711863461675.js";import{r as Z,u as ee}from"./device.YUpe6QRH1711863461675.js";import"./BufferGeometryUtils.BriwBTxZ1711863461675.js";import"./EffectComposer.qwATZMBH1711863461675.js";import"./UnrealBloomPass.vSBerymN1711863461675.js";const te=["object"],ae=["object"],se=P({__name:"ByComposerTres",props:{threshold:{default:0},strength:{default:.972},radius:{default:.21}},async setup(b){let r,l;const t=b,{nodes:a}=([r,l]=$(()=>F("./plugins/industry4/model/modelDraco.glb",{draco:!0,decoderPath:"./draco/"})),r=await r,l(),r),i=Z(a.Sketchfab_model),{camera:d,renderer:u,scene:p,sizes:B}=G();let h=null,m=null,s=null;const T=new w({color:"black"});V(()=>{if(d.value){const{finalComposer:e,effectComposer:o,bloomPass:A}=ee(p.value,d.value,u.value,B.width.value,B.height.value);h=e,m=o,s=A,s.threshold=t.threshold,s.strength=t.strength,s.radius=t.radius}t.threshold&&(s.threshold=t.threshold),t.strength&&(s.strength=t.strength),t.radius&&(s.radius=t.radius)});const c={},L=e=>{e.isMesh&&(c[e.uuid]=e.material,e.material=T)},N=e=>{c[e.uuid]&&(e.material=c[e.uuid],delete c[e.uuid])},{onLoop:z,onAfterLoop:D}=K();let C=.03,f=a.Sketchfab_model.getObjectByName("canister_turbine_011_Nickel-Light-PBR_0"),E=f.material.clone(),R=new w({color:new X("red"),transparent:!0,opacity:1});return z(({elapsed:e})=>{a.hull_turbine&&(a.hull_turbine.rotation.x+=C,a.blades_turbine_003.rotation.x+=C),Math.floor(e)%2?f.material=E:f.material=R}),D(({elapsed:e})=>{m&&(p.value.traverse(o=>{L(o)}),m.render(e)),h&&(p.value.traverse(o=>{N(o)}),h.render(e))}),(e,o)=>(g(),q(I,null,[n("primitive",{object:v(a).Sketchfab_model},null,8,te),n("primitive",{object:v(i)},null,8,ae)],64))}}),re=n("TresPerspectiveCamera",{position:[5,5,5],fov:45,near:1,far:1e3},null,-1),oe=n("TresAmbientLight",{color:"#ffffff",intensity:"40"},null,-1),ne=n("TresDirectionalLight",{position:[0,2,-4],intensity:1},null,-1),pe=P({__name:"deviceLightByComposerTres",setup(b){const r=_({clearColor:"#000",shadows:!0,alpha:!1,shadowMapType:O,outputColorSpace:j,toneMapping:H}),l=_({autoRotate:!0}),t=_({threshold:0,strength:.972,radius:.21}),a=new J({title:"参数"});return a.addBinding(t,"threshold",{label:"阈值",min:0,max:1,step:.1}),a.addBinding(t,"strength",{label:"强度",min:0,max:3,step:.2}),a.addBinding(t,"radius",{label:"半径",min:0,max:1,step:.1}),a.addBlade({view:"text",label:"post-processing",parse:i=>String(i),value:"未完成：等待Tresjs库更新"}),(i,d)=>{const u=Q("TresCanvas");return g(),M(u,U(r,{"window-size":""}),{default:k(()=>[re,x(v(W),S(y(l)),null,16),oe,ne,(g(),M(Y,null,{default:k(()=>[x(se,S(y(t)),null,16)]),_:1}))]),_:1},16)}}});export{pe as default};
import{Z as g,aR as d,ai as f,b2 as h,bW as x,c6 as c,ck as M,r as l,o as m,v as u,C as _,a8 as T,a9 as y,J as r,a7 as C,c5 as k,a as s,aa as w,aE as v,V as o,ah as B}from"./vendor.1c7977dc1706256882800.js";const b=g({__name:"skyBoxDmesh",props:{texture:{}},async setup(p){let a,n;const i=p,{scene:t}=d(),{map:e}=([a,n]=f(()=>h({map:i.texture})),a=await a,n(),a);return e.wrapS=e.wrapT=x,e.generateMipmaps=!1,e.magFilter=c,e.minFilter=c,e.mapping=M,t.value.environment=e,t.value.background=e,(D,G)=>null}}),S=o("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e4,"look-at":[0,0,0]},null,-1),E=o("TresMesh",{position:[10,2,-4],"cast-shadow":""},[o("TresBoxGeometry",{args:[2,2,2]}),o("TresMeshNormalMaterial")],-1),F={position:[0,0,0]},P=g({__name:"skyBoxD",setup(p){const a={clearColor:"#201919",windowSize:!0,toneMapping:k,toneMappingExposure:.8};return(n,i)=>{const t=l("TorusKnotGeometry"),e=l("MeshStandardMaterial");return m(),u(r(C),T(y(a)),{default:_(()=>[S,s(r(w),{enableDamping:""}),s(r(v),{args:[3,3,3],color:"orange",position:[-13,0,1]}),E,o("TresMesh",F,[s(t,{args:[3,1,64,8,2,3]}),s(e,{color:"0xffffff",metalness:1,roughness:.14})]),(m(),u(B,null,{default:_(()=>[s(b,{texture:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/images/skyBox/workshop_blur.jpg"})]),_:1}))]),_:1},16)}}});export{P as default};
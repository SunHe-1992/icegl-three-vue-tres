import{a0 as g,ak as d,db as f,r as n,o as i,v as l,D as u,a9 as h,aa as x,ch as M,a as e,K as _,ab as T,a$ as v,X as o,ag as C}from"./vendor.4LEatSF51711499076379.js";const y=g({__name:"skyBoxEmesh",props:{texture:{}},setup(r){const a=r,{scene:t}=d(),s=new f().setPath(a.texture).load(["pos-x.jpg","neg-x.jpg","pos-y.jpg","neg-y.jpg","pos-z.jpg","neg-z.jpg"]);return t.value.environment=s,t.value.background=s,(p,c)=>null}}),j=o("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e4,"look-at":[0,0,0]},null,-1),k=o("TresMesh",{position:[10,2,-4],"cast-shadow":""},[o("TresBoxGeometry",{args:[2,2,2]}),o("TresMeshNormalMaterial")],-1),B={position:[0,0,0]},w=g({__name:"skyBoxE",setup(r){const a={clearColor:"#201919",windowSize:!0,toneMapping:M,toneMappingExposure:.8};return(t,m)=>{const s=n("TorusKnotGeometry"),p=n("MeshStandardMaterial"),c=n("TresCanvas");return i(),l(c,h(x(a)),{default:u(()=>[j,e(_(T),{enableDamping:""}),e(_(v),{args:[3,3,3],color:"orange",position:[-13,0,1]}),k,o("TresMesh",B,[e(s,{args:[3,1,64,8,2,3]}),e(p,{color:"0xffffff",metalness:1,roughness:.14})]),(i(),l(C,null,{default:u(()=>[e(y,{texture:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/images/skyBox/6jpg/"})]),_:1}))]),_:1},16)}}});export{w as default};
import{a0 as u,k as d,ac as r,w as h,r as f,o as m,v as T,D as l,a7 as M,a2 as g,a3 as C,a4 as v,X as e,a,K as s,am as i,aZ as w,a$ as x,ap as y,ab as B}from"./vendor.nygm-hYA1712137381354.js";const k=e("TresPerspectiveCamera",{position:[3,3,3]},null,-1),R={"position-x":3},b=e("TresTorusKnotGeometry",{args:[1,.4,256,20]},null,-1),G={position:[0,0,-1]},S=e("TresPlaneGeometry",{args:[3,3]},null,-1),D=["side"],N=e("TresGridHelper",{args:[10,10]},null,-1),P=e("TresAmbientLight",{intensity:1},null,-1),z=e("TresDirectionalLight",{intensity:1,position:[2,2,2]},null,-1),V=u({__name:"glassMaterial",setup(H){const c={clearColor:"#82DBC5",shadows:!0,alpha:!1,shadowMapType:g,outputColorSpace:C,toneMapping:v},p=d(),t=r(),o=r();return h(t,n=>{o.value.value.material.dispose(),o.value.value.material=n.MeshGlassMaterialClass}),(n,K)=>{const _=f("TresCanvas");return m(),T(_,M(c,{ref_key:"context",ref:p,"window-size":""}),{default:l(()=>[k,e("TresMesh",R,[b,a(s(i),{ref_key:"glassMaterialRef",ref:t},null,512)]),a(s(w),{scale:.5},{default:l(()=>[a(s(i))]),_:1}),a(s(x),{ref_key:"boxRef",ref:o,"position-x":-3},null,512),e("TresMesh",G,[S,e("TresMeshBasicMaterial",{side:s(y),color:16716049},null,8,D)]),N,P,z,a(s(B))]),_:1},16)}}});export{V as default};
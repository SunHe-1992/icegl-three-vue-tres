import{a1 as u,l as i,a2 as h,r as d,o as f,x as m,E as s,a8 as t,a3 as x,a4 as T,a5 as M,a as o,L as a,ac as g,Y as e,al as n}from"./vendor.KJlYgoAc1713497459452.js";const w=e("TresPerspectiveCamera",{position:[3,0,8]},null,-1),C={position:[1,1,1]},v=e("TresBoxGeometry",null,null,-1),y=e("TresMeshNormalMaterial",null,null,-1),B=e("h1",{class:"bg-white text-xs p-0.5 rounded"}," I'm a Box 📦 ",-1),S=e("TresSphereGeometry",null,null,-1),b=e("TresMeshNormalMaterial",null,null,-1),N=e("h1",{class:"bg-white text-xs p-0.5 rounded"}," I'm a Sphere ⭕️ ",-1),R=e("TresTorusGeometry",null,null,-1),k=e("TresMeshNormalMaterial",null,null,-1),G=e("h1",{class:"bg-white text-xs p-0.5 text-fuchsia-500"}," I'm a Sprite 👻 ",-1),I=e("h1",{class:"bg-blue-gray-900 text-xs rounded p-0.5 text-green-100"}," I'm just a Div 🔖 ",-1),D=e("TresAmbientLight",{intensity:1},null,-1),z=u({__name:"htmls",setup(L){const c={clearColor:"#82DBC5",shadows:!0,alpha:!1,shadowMapType:x,outputColorSpace:T,toneMapping:M},l=i(null),_=i(null),r=h({wrapperClass:"wrapper",as:"div",center:!0});return(P,V)=>{const p=d("TresCanvas");return f(),m(p,t(c,{"window-size":""}),{default:s(()=>[w,o(a(g)),e("TresMesh",C,[v,y,o(a(n),t(r,{transform:"",occlude:[l.value]}),{default:s(()=>[B]),_:1},16,["occlude"])]),e("TresMesh",{ref_key:"sphereRef",ref:l,position:[4,1,1]},[S,b,o(a(n),t(r,{transform:""}),{default:s(()=>[N]),_:1},16)],512),e("TresMesh",{ref_key:"torusRef",ref:_,position:[7,1,1]},[R,k,o(a(n),t(r,{transform:"",sprite:""}),{default:s(()=>[G]),_:1},16)],512),o(a(n),t({position:[2,-1,1]},r,{transform:"",sprite:""}),{default:s(()=>[I]),_:1},16),D]),_:1},16)}}});export{z as default};
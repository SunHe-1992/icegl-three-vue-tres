import{Z as h,k as n,a4 as p,ar as C,a3 as P,o as v,c as E,a as i,J as u,aK as M,V as e,D as b,aX as R,v as L,C as N,a7 as V,aa as $}from"./vendor.7da8be181706685333825.js";import{R as G,E as z}from"./EffectComposer.f39088b61706685333825.js";import{U as D}from"./UnrealBloomPass.18e211271706685333825.js";const H=e("TresBoxGeometry",{args:[1,1,1]},null,-1),U=e("TresMeshNormalMaterial",null,null,-1),A=[H,U],F=e("TresBoxGeometry",{args:[1,1,1]},null,-1),I=e("TresMeshNormalMaterial",null,null,-1),J=[F,I],K=h({__name:"ecLayers",setup(y){const s=n(),a=n(),o=n();p(()=>{s.value&&s.value.value.layers.set(0),a.value&&a.value.layers.set(1),o.value&&o.value.layers.set(2)});const{camera:r,renderer:l,scene:f,sizes:_}=C(),c={threshold:0,strength:.972,radius:.21};let t=null;((d,m,B,g,w)=>{const T=new G(d,m),k=new D(new R(g,w),c.strength,c.radius,c.threshold);t=new z(B),t.addPass(T),t.addPass(k)})(f.value,r.value,l.value,_.width.value,_.height.value);const{onLoop:x}=P();return x(()=>{t&&r.value&&(l.value.clear(),r.value.layers.set(1),t.render(),l.value.clearDepth(),r.value.layers.set(0),l.value.render(f.value,r.value))}),(d,m)=>(v(),E(b,null,[i(u(M),{ref_key:"normalBox",ref:s,args:[1,1,1],color:"orange",position:[3,2,1]},null,512),e("TresMesh",{ref_key:"shineBox",ref:a,position:[0,2,-4]},A,512),e("TresMesh",{ref_key:"filmBox",ref:o,position:[1,2,3]},J,512)],64))}}),S=e("TresPerspectiveCamera",{position:[10,10,10]},null,-1),X=e("TresAmbientLight",{intensity:1},null,-1),Z=e("TresGridHelper",{args:[10,10]},null,-1),W=h({__name:"effectComposerLayers",setup(y){const s=n();return p(()=>{if(s.value){let a=s.value.context.renderer.value;a.autoClear=!1}}),(a,o)=>(v(),L(u(V),{disableRender:"","window-size":"",ref_key:"tcRef",ref:s},{default:N(()=>[S,X,i(u($)),Z,i(K)]),_:1},512))}});export{W as default};
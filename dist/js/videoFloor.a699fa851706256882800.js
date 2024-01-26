import{Z as y,k as x,a3 as P,c3 as S,b9 as u,$ as p,aJ as w,ao as z,w as m,o as d,c as B,V as l,a8 as T,a9 as b,al as R,am as V,v as h,C as _,J as v,a7 as C,a as t,aa as Z,a6 as g,ah as M}from"./vendor.1c7977dc1706256882800.js";import{_ as j}from"./reflectorDUDV.vue_vue_type_script_setup_true_lang.67be581f1706256882800.js";import"./dither.glsl.1a24d3091706256882800.js";import"./OimoPhysicsBuffer.3c79e15c1706256882800.js";const k=["rotation-x"],q=["args"],n=y({__name:"videoFloor",props:{size:{default:[10,10]},vSrcPath:{},loop:{type:Boolean,default:!0},color:{default:"#fff"},opacity:{default:.95},rotationZ:{default:.01},textureRepeat:{default:[1,1]}},setup(f){const r=x(),{onLoop:a}=P();a(()=>{r.value&&(r.value.rotation.z+=o.rotationZ)});const o=f;let e=document.createElement("video");e.src=o.vSrcPath,e.loop=o.loop,e.muted=!0,e.crossOrigin="",e.play();let s=new S(e);s.wrapS=u,s.wrapT=u,s.repeat.set(o.textureRepeat[0],o.textureRepeat[1]);const c=p({color:o.color,alphaMap:s,side:w,transparent:!0,opacity:o.opacity,blending:z,flatShading:!0,depthTest:!1});return m(()=>o.color,i=>{c.color=new R(i)}),m(()=>o.opacity,i=>{c.opacity=i}),(i,D)=>(d(),B("TresMesh",{ref_key:"tmRef",ref:r,"rotation-x":-Math.PI/2},[l("TresPlaneGeometry",{args:o.size},null,8,q),l("TresMeshStandardMaterial",T(b(c)),null,16)],8,k))}}),$=l("TresPerspectiveCamera",{position:[15,20,0],fov:45,near:.1,far:1e4},null,-1),A=l("TresAmbientLight",{intensity:6},null,-1),J=y({__name:"videoFloor",setup(f){const r=p({reflectivity:2.6,showGridHelper:!1,scale:4}),a=p({color:"#fff",opacity:.95,rotationZ:.01}),o=new V({title:"video地面",expanded:!0});return o.addBinding(a,"color",{label:"颜色"}),o.addBinding(a,"opacity",{label:"透明度",min:0,max:1,step:.01}),o.addBinding(a,"rotationZ",{label:"自转速度",min:-.1,max:.1,step:.01}),(e,s)=>(d(),h(v(C),{clearColor:"#201919","window-size":""},{default:_(()=>[$,t(v(Z),{enableDamping:""}),A,t(n,g(a,{position:[0,0,10],size:[10,10],vSrcPath:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/video/floor/floorV1.mp4"}),null,16),t(n,{color:"#02a7ff",position:[0,-1,10],size:[13,13],vSrcPath:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/video/floor/floorV2.mp4"}),t(n,{color:"#7300a8",opacity:.6,position:[0,0,-10],size:[10,10],vSrcPath:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/video/floor/floorV3.mp4"}),t(n,{color:"#f605ff",rotationZ:-.01,position:[0,-1,-10],size:[13,13],vSrcPath:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/video/floor/floorV3.mp4"}),t(n,{color:"#02a7ff",rotationZ:0,position:[0,-1.99,0],opacity:.06,textureRepeat:[3,2],size:[40,40],vSrcPath:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/video/floor/grid.mp4"}),(d(),h(M,null,{default:_(()=>[t(j,g({position:[0,-2,0]},r),null,16)]),_:1}))]),_:1}))}});export{J as default};
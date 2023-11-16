import{Y as g,Z as x,a2 as u,al as D,am as i,o as k,s as M,B as f,a6 as p,I as h,a7 as C,$ as F,a0 as T,a1 as w,a as y,an as b,U as o}from"./vendor-524e5929.js";const G=o("TresPerspectiveCamera",{position:[5,5,5]},null,-1),S=o("TresGridHelper",{position:[0,-1,0]},null,-1),A=o("TresBoxGeometry",{args:[2,2,2]},null,-1),E=o("TresMeshBasicMaterial",{color:"orange",wireframe:""},null,-1),N=[A,E],P=o("TresAmbientLight",{intensity:1},null,-1),H=g({__name:"cameraControls",setup(U){const m={clearColor:"#82DBC5",shadows:!0,alpha:!1,shadowMapType:F,outputColorSpace:T,toneMapping:w},l=x({distance:5,minDistance:0,maxDistance:100}),e=u(),r=u(),{pane:n}=D(),d=n.addFolder({title:"距离参数"});d.addBinding(l,"distance",{label:"设置距离",step:.01,min:0,max:100}),d.addBinding(l,"minDistance",{label:"最小距离",step:.01,min:0,max:10}),d.addBinding(l,"maxDistance",{label:"最大距离",step:.01,min:0,max:100});const c=n.addFolder({title:"远近"});c.addButton({title:"(+1)"}).on("click",()=>{var t,a;(a=(t=e==null?void 0:e.value)==null?void 0:t.value)==null||a.dolly(1,!0)}),c.addButton({title:"(-1)"}).on("click",()=>{var t,a;(a=(t=e==null?void 0:e.value)==null?void 0:t.value)==null||a.dolly(-1,!0)});const s=n.addFolder({title:"旋转"});s.addButton({title:"Rotate theta 45°"}).on("click",()=>{var t,a;(a=(t=e==null?void 0:e.value)==null?void 0:t.value)==null||a.rotate(45*i.DEG2RAD,0,!0)}),s.addButton({title:"Rotate theta -90°"}).on("click",()=>{var t,a;(a=(t=e==null?void 0:e.value)==null?void 0:t.value)==null||a.rotate(-90*i.DEG2RAD,0,!0)}),s.addButton({title:"Rotate theta 360°"}).on("click",()=>{var t,a;(a=(t=e==null?void 0:e.value)==null?void 0:t.value)==null||a.rotate(360*i.DEG2RAD,0,!0)}),s.addButton({title:"Rotate phi 20°"}).on("click",()=>{var t,a;(a=(t=e==null?void 0:e.value)==null?void 0:t.value)==null||a.rotate(0,20*i.DEG2RAD,!0)}),n.addFolder({title:"移动"}).addButton({title:"对焦到 box of the mesh"}).on("click",()=>{var t,a;(a=(t=e==null?void 0:e.value)==null?void 0:t.value)==null||a.fitToBox(r.value,!0)});function _(){console.log("change")}function B(){console.log("start")}function v(){console.log("end")}return(t,a)=>(k(),M(h(C),p(m,{"window-size":""}),{default:f(()=>[G,y(h(b),p(l,{ref_key:"controlsRef",ref:e,"make-default":"",onChange:_,onStart:B,onEnd:v}),null,16),S,o("TresMesh",{ref_key:"boxMeshRef",ref:r},N,512),P]),_:1},16))}});export{H as default};
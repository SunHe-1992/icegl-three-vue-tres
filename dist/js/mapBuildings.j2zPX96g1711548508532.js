import{a0 as b,aD as S,bd as R,bk as G,b3 as M,bY as k,o as c,c as v,E as T,G as E,X as y,K as n,bq as O,a8 as B,bp as j,bo as W,bf as H,bh as N,k as q,bQ as A,ak as $,a5 as D,aR as F,az as P,ap as U,a as p,v as _,D as g,ag as h,ac as V,a1 as Z,a2 as J,a3 as Q,a4 as X,be as Y,r as I,a7 as K}from"./vendor.gReklx3b1711548508532.js";import{C as ee}from"./vanilla.dhyGEl6d1711548508532.js";import{L as oe,a as te,b as ne}from"./LineSegments2.N3u1T2Ft1711548508532.js";import{T as ie}from"./TilesRenderer.hMtpEKJK1711548508532.js";import{l as x,U as ae,M as re,P as se,a as le,T as ue,O as ce,r as pe}from"./raycasterEvent.5V3KLDws1711548508532.js";import{_ as me,a as fe}from"./radraB.vue_vue_type_script_setup_true_lang.WbcF1VdV1711548508532.js";import{_ as de}from"./precipitation.vue_vue_type_script_setup_true_lang.8tEDLRLu1711548508532.js";import{_ as ge}from"./cloudMesh.vue_vue_type_script_setup_true_lang.D17GwhKA1711548508532.js";import{_ as L}from"./buildingsMarkA.vue_vue_type_script_setup_true_lang.ksdj-c7L1711548508532.js";import{_ as _e}from"./fireA.vue_vue_type_script_setup_true_lang.kqEgjHxQ1711548508532.js";import{_ as he}from"./fireB.vue_vue_type_script_setup_true_lang.w0vu-erg1711548508532.js";import{_ as we}from"./smokeA.vue_vue_type_script_setup_true_lang.9mYOD7Bt1711548508532.js";import{_ as ve}from"./rippleMesh.vue_vue_type_script_setup_true_lang.WjHdMlHz1711548508532.js";import{l as ye}from"./utils.g_WrZS2N1711548508532.js";import"./_commonjsHelpers.5-cIlDoe1711548508532.js";import"./BufferGeometryUtils.co2T2tkM1711548508532.js";import"./ExtensionUtilities.oxj7GfXT1711548508532.js";import"./SPE.NA0w4c6t1711548508532.js";import"./Water2.njZCYG561711548508532.js";import"./Reflector.cPmIepwJ1711548508532.js";const Ce={renderOrder:3e3},Me=["args"],be=["map","side","color"],Pe=b({__name:"roadLightByLonLat",props:{geoJson:{},color:{default:"#ffff00"},radius:{default:2},speed:{default:1}},async setup(r){let t,e;const o=r,{map:a}=([t,e]=S(()=>R({map:"./plugins/digitalCity/image/line.png"})),t=await t,e(),t);a.needsUpdate=!0,a.wrapS=a.wrapT=G,a.repeat.set(1,1);const s=([t,e]=S(()=>ye(o.geoJson)),t=await t,e(),t);let m=[];for(var f=0;f<s.length;f++){const i=s[f],u=[];i.geometry.coordinates.forEach(w=>{const C=x(w[0],w[1],50);u.push(new M(C[0],0,-C[1]))});let d=o.color;i.properties.highway==="primary"?d="#7eff10":i.properties.highway==="tertiary"?d="#0eeeee":i.properties.highway==="secondary"?d="#ffffff":d="#ff0ffe",m.push({cr3:new k(u),color:d})}const{onLoop:l}=B();return l(()=>{a.offset.x-=Math.random()/20*o.speed}),(i,u)=>(c(),v("TresGroup",null,[(c(!0),v(T,null,E(n(m),d=>(c(),v("TresMesh",Ce,[y("TresTubeGeometry",{args:[d.cr3,64,o.radius,20,!1]},null,8,Me),y("TresMeshBasicMaterial",{map:n(a),side:n(O),transparent:!0,color:d.color},null,8,be)]))),256))]))}}),xe=(r,t)=>{const e=new N,o=new M().crossVectors(r,t);return e.x=o.x,e.y=o.y,e.z=o.z,e.w=1+r.clone().dot(t),e.normalize(),e},Te=r=>{r.onLoadTileSet=t=>{const e=new j,o=new W,a=new H;let s=null,m=0;r.getOrientedBounds(e,a)?(s=new M().setFromMatrixPosition(a),m=s.length()):r.getBoundingSphere(o)&&(s=o.center.clone(),m=s.length());const f=s==null?void 0:s.normalize(),l=new M(0,1,0),i=xe(f,l);r.group.quaternion.x=i.x,r.group.quaternion.y=i.y,r.group.quaternion.z=i.z,r.group.quaternion.w=i.w,r.group.position.z=-m}},Be="varying vec4 vPosition;\nvoid main(){\n	vPosition=modelMatrix*vec4(position,1.);\n	csm_Position=position*vec3(1.);\n}",ze="uniform mat4 modelMatrix;\nvarying vec4 vPosition;\nuniform vec3 uMax;\nuniform vec3 uMin;\nuniform float uOpacity;\nuniform float uBorderWidth;\nuniform vec3 uLightColor;\nuniform vec3 uColor;\nuniform float uCircleTime;\nuniform float uTime;\nuniform vec3 uTopColor; // 顶部颜色\nuniform bool uGradient;\nvec4 uMax_world;\nvec4 uMin_world;\nvoid main() {\n  // 转世界坐标\n  uMax_world = modelMatrix * vec4(uMax, 1.);\n  uMin_world = modelMatrix * vec4(uMin, 1.);\n  vec3 distColor = uColor;\n  float residue = uTime - floor(uTime / uCircleTime) * uCircleTime;\n  float rate = residue / uCircleTime;\n  float lightOffset = rate * (uMax_world.y - uMin_world.y);\n\n  if (uMin_world.y + lightOffset < vPosition.y &&\n      uMin_world.y + lightOffset + uBorderWidth > vPosition.y) {\n    csm_DiffuseColor = vec4(uLightColor, uOpacity);\n  } else {\n    csm_DiffuseColor = vec4(distColor, uOpacity);\n  }\n\n  // 根据高度计算颜色\n  if (uGradient) {\n    float rateHight =\n        (vPosition.y - uMin_world.y) / (uMax_world.y - uMin_world.y);\n    // vec3 outColor = mix(csm_DiffuseColor.xyz, uTopColor, rateHight * 0.6);\n    float mixNumber = clamp(rateHight * 2.3 - 1.5, 0., 1.);\n    vec3 outColor = mix(csm_DiffuseColor.xyz, uTopColor, mixNumber);\n\n    csm_DiffuseColor = vec4(outColor, uOpacity);\n  }\n}",Se=["object"],Le=b({__name:"tilesBuildings",props:{bulidingsColor:{default:"#e523ff"},topColor:{default:"#ffff00"},opacity:{default:.8},gradient:{type:Boolean,default:!0},camera:{}},setup(r){const t=r,e=q(0),o=l=>{const{geometry:i}=l;i.computeBoundingBox(),i.computeBoundingSphere();const{max:u,min:d}=i.boundingBox,w=new ee({baseMaterial:new F,vertexShader:Be,fragmentShader:ze,silent:!0,uniforms:{uMax:{value:u},uMin:{value:d},uBorderWidth:{value:5},uCircleTime:{value:5},uColor:{value:new P(t.bulidingsColor)},uOpacity:{value:t.opacity},uLightColor:{value:new P("#ffffff")},uTopColor:{value:new P(t.topColor)},uTime:e,uGradient:{value:t.gradient}},depthWrite:!0,depthTest:!0,transparent:!0,side:U});l.material.dispose(),l.material=w},a=new ie("https://jdvop.oss-cn-qingdao.aliyuncs.com/mapv-data/titleset/sz_ns/no.json");a.errorTarget=2,a.onLoadModel=l=>{l.traverse(i=>{if(i.isMesh){o(i),i.receiveShadow=!1,i.castShadow=!1;const u=new A(i.geometry.clone());let w=new oe().fromEdgesGeometry(u),C=new te({color:0,linewidth:1,opacity:1,transparent:!0,depthWrite:!0,depthTest:!0});C.resolution.set(window.innerWidth,window.innerHeight);const z=new ne(w,C);z.applyMatrix4(i.matrix.clone()),i.parent.add(z)}})},Te(a);const{renderer:s,sizes:m}=$();D(()=>{m.width.value&&(a.setCamera(t.camera),a.setResolutionFromRenderer(t.camera,s.value))});const{onBeforeLoop:f}=B();return f(({delta:l})=>{e.value+=l*2,t.camera&&m.width.value&&(t.camera.updateMatrixWorld(),a.update())}),(l,i)=>(c(),v("TresGroup",null,[y("primitive",{object:n(a).group},null,8,Se)]))}}),$e=["object","rotation"],De=b({__name:"tileMapBuildingsMesh",props:{bbox:{default:[104.955976,20.149765,120.998419,30.528687]},maxZoom:{default:20},mapCenter:{},camera:{}},setup(r,{expose:t}){const e=r,{renderer:o,scene:a}=$(),s=new se;s.coordType=ae;const m=new le;m.source="https://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}",m.showTileNo=!1,m.useWorker=!0;const f=new ue(s,m);f.showBoundingBox=!1,f.wireframe=!1,f.flatShading=!1,f.filter={opposite:!0,genBright:1.3,genContrast:1,genSaturation:1};let l=new P("#4688b5");f.filter.monochrome={r:l.r,g:l.g,b:l.b};const i=new re;i.provider=f,i.bbox=e.bbox,i.maxZoom=e.maxZoom,e.camera.up=new M(0,1,0),e.camera.position.set(e.mapCenter[0],e.mapCenter[2],-e.mapCenter[1]+2e3),e.camera.lookAt(new M(e.camera.position.x,0,e.camera.position.z-3e3)),i.camera=e.camera;let u=null;D(()=>{o.value&&(u=new ce(e.camera,o.value.domElement),u.enableDamping=!0,u.dampingFactor=.05,u.minDistance=600,u.position0.set(e.camera.position.x,e.camera.position.y,e.camera.position.z),u.target.set(e.camera.position.x,0,e.camera.position.z-2e3))});const{onLoop:d}=B();return d(()=>{if(o.value){const w=Math.abs(e.camera.position.y)*50;e.camera.far=w+5e3,e.camera.updateProjectionMatrix(),u&&(u.update(),u.target.y=0),i.update(),o.value.render(a.value,e.camera)}}),t({camera:e.camera,map:i}),(w,C)=>(c(),v("primitive",{object:n(i),rotation:[-Math.PI/2,0,0]},null,8,$e))}}),Re=b({__name:"mapBuildingsMoreMeshes",props:{cPosition:{}},setup(r){const t=x(113.9456,22.5385,50),e=x(113.9498,22.5364,50);return(o,a)=>(c(),v(T,null,[p(n(me),{color:"#00c0ff",radius:300,size:300,position:[o.cPosition[0],8,-o.cPosition[1]]},null,8,["position"]),(c(),_(h,null,{default:g(()=>[p(n(L),{position:[o.cPosition[0],8,-o.cPosition[1]],scale:.13,img:"./plugins/digitalCity/image/znsba.png",foremost:!1},null,8,["position"])]),_:1})),p(n(fe),{position:[o.cPosition[0]+700,10,-o.cPosition[1]+300],color:"#ffff00",height:180,maxRadius:400},null,8,["position"]),(c(),_(h,null,{default:g(()=>[p(n(L),{position:[o.cPosition[0]+700,10,-o.cPosition[1]+300],scale:200,img:"./plugins/digitalCity/image/znsb-err.png",sizeAttenuation:!0,foremost:!0},null,8,["position"])]),_:1})),(c(),_(h,null,{default:g(()=>[p(n(_e),{fireScale:80,magnitude:1.3,lacunarity:2,gain:1,position:[o.cPosition[0]+280,1,-o.cPosition[1]+120]},null,8,["position"])]),_:1})),(c(),_(h,null,{default:g(()=>[p(n(he),{position:[o.cPosition[0]+388,6,-o.cPosition[1]+330]},null,8,["position"])]),_:1})),(c(),_(h,null,{default:g(()=>[p(n(we),{position:[o.cPosition[0]+388,6,-o.cPosition[1]+330]},null,8,["position"])]),_:1})),(c(),_(h,null,{default:g(()=>[p(n(de),{speed:12,size:20,count:2e4,color:"#fff",type:"snow",position:[o.cPosition[0],300,-o.cPosition[1]],areaX:5e3,areaY:600,areaZ:5e3},null,8,["position"])]),_:1})),(c(),_(h,null,{default:g(()=>[p(n(ge),{cPosition:[o.cPosition[0],600,-o.cPosition[1]]},null,8,["cPosition"])]),_:1})),p(n(ve),{"position-y":6,positionSrc:[{x:n(t)[0],y:-n(t)[1]},{x:n(t)[0],y:-n(e)[1]},{x:n(e)[0],y:-n(e)[1]},{x:n(e)[0],y:-n(t)[1]},{x:n(t)[0],y:-n(t)[1]}],height:220,color:"#00ffdd"},null,8,["positionSrc"]),(c(),_(h,null,{default:g(()=>[p(n(Pe),{position:[500,0,340],radius:5,geoJson:"plugins/digitalCity/geojson/shenzhen2.geojson"})]),_:1}))],64))}}),Ge=y("TresAmbientLight",{color:"#ffffff"},null,-1),ke=y("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1),Ee=y("TresGridHelper",{args:[1e4,10]},null,-1),Oe=y("TresAxesHelper",{args:[1e5]},null,-1),io=b({__name:"mapBuildings",setup(r){const t=x(113.942639739199,22.53171672540276,50),e=V(),o=Z({clearColor:"#000000",disableRender:!0,alpha:!1,shadowMapType:J,outputColorSpace:Q,toneMapping:X}),a=[t[0],t[1],1700],s=new Y(60,window.innerWidth/window.innerHeight,1,1e7*10);return(m,f)=>{const l=I("TresCanvas");return c(),v(T,null,[p(l,K(o,{"window-size":""}),{default:g(()=>[Ge,ke,p(n(Le),{position:[n(t)[0],1,-n(t)[1]+228],camera:n(s)},null,8,["position","camera"]),(c(),_(h,null,{default:g(()=>[p(n(De),{ref_key:"tileMapBuildingsMeshRef",ref:e,bbox:[104.955976,20.149765,120.998419,30.528687],mapCenter:a,camera:n(s)},null,8,["camera"])]),_:1})),(c(),_(h,null,{default:g(()=>[p(Re,{cPosition:n(t)},null,8,["cPosition"])]),_:1})),Ee,Oe]),_:1},16),p(pe,{tileMapRef:e.value},null,8,["tileMapRef"])],64)}}});export{io as default};

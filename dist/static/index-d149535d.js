var xe=Object.defineProperty,Re=Object.defineProperties;var Se=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var U=(t,n,e)=>n in t?xe(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,O=(t,n)=>{for(var e in n||(n={}))q.call(n,e)&&U(t,e,n[e]);if(B)for(var e of B(n))Z.call(n,e)&&U(t,e,n[e]);return t},N=(t,n)=>Re(t,Se(n));var J=(t,n)=>{var e={};for(var a in t)q.call(t,a)&&n.indexOf(a)<0&&(e[a]=t[a]);if(t!=null&&B)for(var a of B(t))n.indexOf(a)<0&&Z.call(t,a)&&(e[a]=t[a]);return e};import{_ as M,F as Le,r as T,o as _,c as P,a as r,u as Y,t as R,d as we,b as $,e as Ce,p as S,A as K,f as H,i as ke,g as Me,h as ee,j as w,k as Oe,l as Ie,m as G,n as z,q as C,w as te,s as x,v as Ve,x as De,y as Fe,z as He,R as Ke,M as Be,P as Ne,B as f,C as D,D as je,E as F,G as ze,H as We,I as L,J as Ge,K as Ue,L as qe,N as Ze,O as Je,Q as Qe,S as Xe,T as Ye,U as d,V as E,W as V,X as k,Y as I,Z as j,$ as ne,a0 as ae,a1 as oe,a2 as se,a3 as ie,a4 as le,a5 as re,a6 as ce,a7 as ue,a8 as de,a9 as _e,aa as $e,ab as et,ac as tt,ad as nt}from"./vendor-f6d30434.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();const at="modulepreload",ot=function(t){return"/icegl-three-vue-tres/"+t},Q={},u=function(n,e,a){if(!e||e.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(e.map(s=>{if(s=ot(s),s in Q)return;Q[s]=!0;const i=s.endsWith(".css"),v=i?'[rel="stylesheet"]':"";if(!!a)for(let m=o.length-1;m>=0;m--){const A=o[m];if(A.href===s&&(!i||A.rel==="stylesheet"))return}else if(document.querySelector('link[href="'.concat(s,'"]').concat(v)))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":at,i||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),i)return new Promise((m,A)=>{c.addEventListener("load",m),c.addEventListener("error",()=>A(new Error("Unable to preload CSS for ".concat(s))))})})).then(()=>n()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})};const st={components:{FSpin:Le},setup(){return{}}},it={class:"page-loading"};function lt(t,n,e,a,o,s){const i=T("f-spin");return _(),P("div",it,[r(i,{size:"large",stroke:"#5384ff"})])}const rt=M(st,[["render",lt]]);const ct={setup(){return{userModel:Y("user")}}},ut={class:"right"};function dt(t,n,e,a,o,s){return _(),P("div",ut,R(a.userModel.user.userName),1)}const _t=M(ct,[["render",dt]]);const ft=we({beforeRender:{loading:r(rt,null,null),action(){const{signin:t}=Y("user");t()}},layout:{renderCustom:()=>r(_t,null,null)}});function pt({app:t}){t.use($)}const mt=t=>{const n=/plugins\/([^/]+)\/pages\//,e=t.match(n);return e&&e[1]?e[1]:null};function ht({routes:t}){const n=Object.assign({"./plugins/basic/pages/base/penetrateEvent.vue":()=>u(()=>import("./penetrateEvent-ac944206.js"),["static/penetrateEvent-ac944206.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/base/shaderParticles.vue":()=>u(()=>import("./shaderParticles-7e5fbc3b.js"),["static/shaderParticles-7e5fbc3b.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/base/theBasic.vue":()=>u(()=>import("./theBasic-1703b606.js"),["static/theBasic-1703b606.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/base/theConditional.vue":()=>u(()=>import("./theConditional-ae5b0f8d.js"),["static/theConditional-ae5b0f8d.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/base/theEvents.vue":()=>u(()=>import("./theEvents-be8c9961.js"),["static/theEvents-be8c9961.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/base/theGroups.vue":()=>u(()=>import("./theGroups-c2d8919e.js"),["static/theGroups-c2d8919e.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/controls/cameraControls.vue":()=>u(()=>import("./cameraControls-ad42241f.js"),["static/cameraControls-ad42241f.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/controls/firstPersonControls.vue":()=>u(()=>import("./firstPersonControls-e560a82d.js"),["static/firstPersonControls-e560a82d.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/controls/mapControls.vue":()=>u(()=>import("./mapControls-76d28c6a.js"),["static/mapControls-76d28c6a.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/controls/orbitControls.vue":()=>u(()=>import("./orbitControls-c419905a.js"),["static/orbitControls-c419905a.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/controls/scrollControls.vue":()=>u(()=>import("./scrollControls-6540fa8b.js"),["static/scrollControls-6540fa8b.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css","static/scrollControls-e984f4d2.css"]),"./plugins/basic/pages/controls/transformControls.vue":()=>u(()=>import("./transformControls-68288fc4.js"),["static/transformControls-68288fc4.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/htmls/htmls.vue":()=>u(()=>import("./htmls-f95619b2.js"),["static/htmls-f95619b2.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css","static/htmls-c0c7ec5a.css"]),"./plugins/basic/pages/htmls/website.vue":()=>u(()=>import("./website-b143a79e.js"),["static/website-b143a79e.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/materials/glassMaterial.vue":()=>u(()=>import("./glassMaterial-5370b5bb.js"),["static/glassMaterial-5370b5bb.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/materials/wobbleMaterial.vue":()=>u(()=>import("./wobbleMaterial-6a2f6fbd.js"),["static/wobbleMaterial-6a2f6fbd.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/shine/shader.vue":()=>u(()=>import("./shader-c541fac0.js"),["static/shader-c541fac0.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/basic/pages/shine/spriteImage.vue":()=>u(()=>import("./spriteImage-20e911c1.js"),["static/spriteImage-20e911c1.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/digitalCity/pages/buildings.vue":()=>u(()=>import("./buildings-3f316e37.js"),["static/buildings-3f316e37.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css","static/pagesShow.vue_vue_type_script_setup_true_lang-b0b460a6.js","static/vanilla-307d3a93.esm-ce3430e0.js","static/_commonjsHelpers-725317a4.js"]),"./plugins/digitalCity/pages/fireA.vue":()=>u(()=>import("./fireA-1116dea5.js"),["static/fireA-1116dea5.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css","static/loading.vue_vue_type_script_setup_true_lang-6b2ccef1.js","static/pagesShow.vue_vue_type_script_setup_true_lang-b0b460a6.js","static/vanilla-307d3a93.esm-ce3430e0.js","static/_commonjsHelpers-725317a4.js"]),"./plugins/digitalCity/pages/heatmap.vue":()=>u(()=>import("./heatmap-8c3840a5.js"),["static/heatmap-8c3840a5.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css","static/heatmapJS.vue_vue_type_script_setup_true_lang-87e1893b.js","static/heatmap-d02141de.js","static/_commonjsHelpers-725317a4.js","static/loading.vue_vue_type_script_setup_true_lang-6b2ccef1.js","static/pagesShow.vue_vue_type_script_setup_true_lang-b0b460a6.js","static/vanilla-307d3a93.esm-ce3430e0.js"]),"./plugins/digitalCity/pages/heatmap2.vue":()=>u(()=>import("./heatmap2-8baa4280.js"),["static/heatmap2-8baa4280.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css","static/pagesShow.vue_vue_type_script_setup_true_lang-b0b460a6.js","static/vanilla-307d3a93.esm-ce3430e0.js","static/_commonjsHelpers-725317a4.js","static/heatmap-d02141de.js"]),"./plugins/digitalCity/pages/radars.vue":()=>u(()=>import("./radars-f0d2ad86.js"),["static/radars-f0d2ad86.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css","static/loading.vue_vue_type_script_setup_true_lang-6b2ccef1.js","static/pagesShow.vue_vue_type_script_setup_true_lang-b0b460a6.js","static/vanilla-307d3a93.esm-ce3430e0.js","static/_commonjsHelpers-725317a4.js"]),"./plugins/digitalCity/pages/weather.vue":()=>u(()=>import("./weather-2ede9910.js"),["static/weather-2ede9910.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css","static/pagesShow.vue_vue_type_script_setup_true_lang-b0b460a6.js","static/vanilla-307d3a93.esm-ce3430e0.js","static/_commonjsHelpers-725317a4.js","static/loading.vue_vue_type_script_setup_true_lang-6b2ccef1.js"]),"./plugins/earthSample/pages/earthA.vue":()=>u(()=>import("./earthA-1fd6ae39.js"),["static/earthA-1fd6ae39.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/earthSample/pages/lowpolyPlanet.vue":()=>u(()=>import("./lowpolyPlanet-97b7912c.js"),["static/lowpolyPlanet-97b7912c.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css","static/loading.vue_vue_type_script_setup_true_lang-6b2ccef1.js"]),"./plugins/earthSample/pages/menuA.vue":()=>u(()=>import("./menuA-d56a6e66.js"),["static/menuA-d56a6e66.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css","static/menuA-ddaff78a.css"]),"./plugins/heatMap/pages/heatmapExample.vue":()=>u(()=>import("./heatmapExample-07daf40c.js"),["static/heatmapExample-07daf40c.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css","static/heatmapJS.vue_vue_type_script_setup_true_lang-87e1893b.js","static/heatmap-d02141de.js","static/_commonjsHelpers-725317a4.js"]),"./plugins/heatMap/pages/simpleExample.vue":()=>u(()=>import("./simpleExample-9948557b.js"),["static/simpleExample-9948557b.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/industry4/pages/deviceLight.vue":()=>u(()=>import("./deviceLight-ff56a3d1.js"),["static/deviceLight-ff56a3d1.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css","static/device-b00e12ea.js","static/BufferGeometryUtils-f7af870a.js"]),"./plugins/industry4/pages/deviceLightByComposerTres.vue":()=>u(()=>import("./deviceLightByComposerTres-684a475b.js"),["static/deviceLightByComposerTres-684a475b.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css","static/device-b00e12ea.js","static/BufferGeometryUtils-f7af870a.js"]),"./plugins/medical/pages/digitalBrain.vue":()=>u(()=>import("./digitalBrain-8615827e.js"),["static/digitalBrain-8615827e.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css","static/BufferGeometryUtils-f7af870a.js"]),"./plugins/shadertoyToThreejs/pages/argestCircle.vue":()=>u(()=>import("./argestCircle-2af7f7d9.js"),["static/argestCircle-2af7f7d9.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),"./plugins/shadertoyToThreejs/pages/shadertoyMaterial.vue":()=>u(()=>import("./shadertoyMaterial-6119881a.js"),["static/shadertoyMaterial-6119881a.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css","static/vanilla-307d3a93.esm-ce3430e0.js","static/_commonjsHelpers-725317a4.js"]),"./plugins/vantaJS/pages/loadingA.vue":()=>u(()=>import("./loadingA-a6e3749c.js"),["static/loadingA-a6e3749c.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css","static/_commonjsHelpers-725317a4.js","static/loadingA-ef980813.css"])}),e={path:"/plugins",component:()=>u(()=>import("./suspenseLayout-81ed32ca.js"),["static/suspenseLayout-81ed32ca.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css"]),children:[]};for(const[a,o]of Object.entries(n)){const s=mt(a),i=a.match(/\.\/(.+)\.vue$/)[1].split("/");if(i.length===4)e.children.unshift({path:"/plugins/".concat(s,"/").concat(i[3]),component:o});else if(i.length===5)e.children.unshift({path:"/plugins/".concat(s,"/").concat(i[3],"/").concat(i[4]),component:o});else return}t.unshift(e)}function gt(t){{console.log("预览模式下 直接替换index的路由为 plugins/preview.vue");let n=t.routes.find(e=>e.path==="/");n&&(n=n.children.find(e=>e.path==="/"),n&&(n.component=()=>u(()=>import("./preview-7a7a48da.js"),["static/preview-7a7a48da.js","static/vendor-f6d30434.js","static/vendor-28ba1523.css","static/preview-6af5d8e1.css"]),n.meta={name:"preview",title:"开源框架展示"}))}return N(O({},t),{routes:[...t.routes]})}const yt=Object.freeze(Object.defineProperty({__proto__:null,default:ft,modifyRoute:gt,onAppCreated:pt,patchRoutes:ht},Symbol.toStringTag,{value:"Module"}));function vt({app:t,routes:n}){const e=Ce(n);t.use(e)}const bt=Object.freeze(Object.defineProperty({__proto__:null,onAppCreated:vt},Symbol.toStringTag,{value:"Module"}));function Pt({router:t}){t.beforeEach(async(n,e,a)=>{const o=S.applyPlugins({key:"access",type:K.modify,initialValue:{}});if(n.matched.length===0)return o.noFoundHandler&&typeof o.noFoundHandler=="function"?o.noFoundHandler({router:t,to:n,from:e,next:a}):a(!1);if(Array.isArray(o.ignoreAccess)&&await H.match(n.matched[n.matched.length-1].path,o.ignoreAccess)||await H.hasAccess(n.matched[n.matched.length-1].path))return a();if(o.unAccessHandler&&typeof o.unAccessHandler=="function")return o.unAccessHandler({router:t,to:n,from:e,next:a});a(!1)})}function Tt({app:t}){ke(t)}const At=Object.freeze(Object.defineProperty({__proto__:null,onAppCreated:Tt,onRouterCreated:Pt},Symbol.toStringTag,{value:"Module"})),fe=()=>{const t={title:"Icegl",footer:null,navigation:"top",multiTabs:!1,isFixedHeader:!0,logo:"logo.png",menus:[{name:"preview",path:"/",title:"开源框架展示"}]};return S.applyPlugins({key:"layout",type:K.modify,initialValue:t,args:{initialState:Me}})};if(!H)throw new Error("[plugin-layout]: plugin-layout depends on plugin-access，please install plugin-access first！");const Et=t=>{const n=fe(),e=H.getAccess();return e.includes("/403")||H.setAccess(e.concat("/403")),e.includes("/404")||H.setAccess(e.concat("/404")),O({unAccessHandler({router:a,to:o,from:s,next:i}){if(n.unAccessHandler&&typeof n.unAccessHandler=="function")return n.unAccessHandler({router:a,to:o,from:s,next:i});i("/403")},noFoundHandler({router:a,to:o,from:s,next:i}){if(n.noFoundHandler&&typeof n.noFoundHandler=="function")return n.noFoundHandler({router:a,to:o,from:s,next:i});i("/404")}},t)},xt=Object.freeze(Object.defineProperty({__proto__:null,access:Et},Symbol.toStringTag,{value:"Module"}));function W(t){if(t["default"]){const e=t,{default:a}=e,o=J(e,["default"]);return O(O({},a),o)}return t}S.register({apply:W(yt),path:"/Volumes/L-SSD/ice.GL/OpenSourceLib/icegl/icegl-three-vue-tres/src/app.jsx"});S.register({apply:W(bt),path:"@@/core/routes/runtime.js"});S.register({apply:W(At),path:"@@/plugin-access/runtime.js"});S.register({apply:W(xt),path:"@@/plugin-layout/runtime.js"});const pe=(t,n)=>{let e={};if(Array.isArray(t))for(let a=0;a<t.length;a++){const o=t[a];if(o.meta&&o.meta.name===n){e=o.meta,e.path=o.path;break}if(o.children&&o.children.length>0&&(e=pe(o.children,n),e.path))break}return e},me=(t,n,e=0)=>{e+=1,e>3&&console.warn("[plugin-layout]: 菜单层级最好不要超出三层！");const a=[];return Array.isArray(t)&&Array.isArray(n)&&t.forEach(o=>{const s={};o.name&&Object.assign(s,pe(n,o.name)),Object.keys(s).forEach(i=>{(o[i]===void 0||o[i]===null||o[i]==="")&&(o[i]=s[i])}),o.children&&o.children.length>0&&(o.children=me(o.children,n,e)),a.push(o)}),a},Rt="/icegl-three-vue-tres/static/logo-fad90dd5.png";if(!ee)throw new Error("[plugin-layout]: pLugin-layout depends on plugin-access，please install plugin-access first！");const he=t=>{const n=t.children&&t.children.length;return t.path&&!n?ee(t.path):n?t.children.some(e=>he(e)):!0},ge=t=>t.map(n=>he(n)?(n.children&&(n.children=ge(n.children)),n):!1).filter(Boolean),ye=t=>{if(!/^\$\S+$/.test(t))return t;const n=S.getShared("locale");if(n){const{t:e}=n.locale;return e(t.slice(1))}return t},ve=t=>t.map(n=>{const e=N(O({},n),{label:ye(n.label)});return n.children&&(e.children=ve(n.children)),e}),be=(t=[])=>t.reduce((n,e)=>(n.push(e),e.children&&(n=n.concat(be(e.children))),n),[]),St={},Lt=function(t){return typeof t=="string"},Pe=t=>{if(t.nodeType===1){if(t.nodeName.toLowerCase()==="script")return!1;for(let n=0;n<t.attributes.length;n++){const e=t.attributes[n].value;if(Lt(e)&&e.toLowerCase().indexOf("on")===0)return!1}for(let n=0;n<t.childNodes.length;n++)if(!Pe(t.childNodes[n]))return!1}return!0},wt=t=>{const n=document.createElement("div");n.innerHTML=t;for(let a=n.childNodes.length-1;a>=0;a--)n.childNodes[a].nodeName.toLowerCase()!=="svg"&&n.removeChild(n.childNodes[a]);const e=n.firstElementChild;return e&&e.nodeName.toLowerCase()==="svg"&&Pe(e)?n.innerHTML:""},Ct=/^((https?|ftp|file):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,kt=t=>Ct.test(t)||t.includes(".svg"),Mt={props:{icon:[String,Object]},setup(t){const n=w(null),e=w(null);return Oe(()=>{typeof t.icon=="string"&&(kt(t.icon)?fetch(t.icon).then(a=>{if(a.ok)return a.text().then(o=>{e.value=wt(o)})}):n.value=St[t.icon])}),()=>Ie(t.icon)?t.icon:n.value?r(n.value,null,null):e.value?r("span",{class:"fes-layout-icon",innerHTML:e.value},null):null}};const Te=(t,n=1)=>t.map((e,a)=>{const o=N(O({},e),{label:e.title,value:e.path||"".concat(n,"_").concat(a)});return e.icon&&(o.icon=()=>Ve(Mt,{icon:e.icon})),e.children&&(o.children=Te(e.children,n+1)),o}),Ot={components:{FMenu:$},props:{menus:{type:Array,default(){return[]}},mode:{type:String,default:"vertical"},inverted:{type:Boolean,default:!1},expandedKeys:{type:Array,default(){return[]}},defaultExpandAll:{type:Boolean,default:!1},accordion:{type:Boolean,default:!1}},setup(t){const n=G(),e=z(),a=C(()=>ve(ge(Te(t.menus)))),o=C(()=>be(a.value)),s=C(()=>{const g=o.value.filter(c=>{const m=c.match;return!m||!Array.isArray(m)?!1:m.some(A=>new RegExp(A).test(n.path))});return g.length===0?n.path:g[0].path}),i=w(t.expandedKeys);return te([o,s],()=>{var A;let g=o.value.findIndex(h=>h.value===s.value);if(g===-1)return;const c=o.value[g],m=(A=c.children)!=null&&A.length?[c]:[];for(;g>0;){g=g-1;const h=o.value[g];h.children&&h.children.indexOf(m[m.length-1])!==-1&&m.push(h)}i.value=i.value.concat(m.filter(h=>!i.value.includes(h.value)).map(h=>h.value))},{immediate:!0}),{activePath:s,expandedKeysRef:i,transformedMenus:a,onMenuClick:g=>{const c=g.value;/^https?:\/\//.test(c)?window.open(c,"_blank"):/^\//.test(c)?e.push(c):console.warn("[plugin-layout]: 菜单的path只能使以http(s)开头的网址或者路由地址")}}}};function It(t,n,e,a,o,s){const i=T("f-menu");return _(),x(i,{expandedKeys:a.expandedKeysRef,"onUpdate:expandedKeys":n[0]||(n[0]=v=>a.expandedKeysRef=v),modelValue:a.activePath,inverted:e.inverted,mode:e.mode,options:a.transformedMenus,defaultExpandAll:e.defaultExpandAll,accordion:e.accordion,onSelect:a.onMenuClick},null,8,["expandedKeys","modelValue","inverted","mode","options","defaultExpandAll","accordion","onSelect"])}const Vt=M(Ot,[["render",It]]);let Dt=0;const X=()=>++Dt,Ft={components:{FTabs:De,FTabPane:Fe,FDropdown:He,ReloadOutlined:Ke,MoreOutlined:Be,Page:Ne},props:{multiTabs:Boolean},setup(){const t=w(),n=G(),e=z(),a=p=>{var y;const l=C(()=>{const b=L(Ge(p.path));return b!=null?b:ye(p.meta.title)});return{path:p.path,route:p,name:(y=p.meta.name)!=null?y:p.name,title:l,key:X()}},o=w([a(e.currentRoute.value)]),s=[{value:"closeOtherPage",label:"关闭其他页签"},{value:"reloadPage",label:"刷新当前页签"}],i=p=>o.value.find(l=>L(l.path)===L(p));e.beforeEach(p=>{const l=i(p.path);return l?l.route=p:o.value=[...o.value,a(p)],!0});const v=async p=>{const l=i(p);l&&await e.push({path:p,query:l.route.query,params:l.route.params})},g=async p=>{const l=i(p),y=[...o.value],b=y.indexOf(l);n.path===l.path&&y.length>1&&(y.length-1===b?await v(y[b-1].path):await v(y[b+1].path)),y.splice(b,1),o.value=y,t.value.removeKeepAlive(l.name),Ue(l.path)},c=p=>{const l=i(p||L(n.path));l&&(l.key=X())},m=p=>{const l=i(p||L(n.path));o.value=[l],t.value.removeAllAndSaveKeepAlive(l.name)};return{pageRef:t,route:n,pageList:o,getPageKey:p=>{const l=i(p.path);return l?l.key:""},reloadPage:c,switchPage:v,handlerMore:p=>{switch(p){case"closeOtherPage":m();break;case"reloadPage":c();break}},handleCloseTab:g,actions:s}}};function Ht(t,n,e,a,o,s){const i=T("ReloadOutlined"),v=T("FTabPane"),g=T("MoreOutlined"),c=T("FDropdown"),m=T("FTabs"),A=T("Page");return e.multiTabs?(_(),P(D,{key:0},[r(m,{modelValue:a.route.path,closable:"",tabsPadding:24,type:"card",class:"layout-content-tabs",onClose:a.handleCloseTab,"onUpdate:modelValue":a.switchPage},{suffix:f(()=>[r(c,{arrow:"",options:a.actions,onClick:a.handlerMore},{default:f(()=>[r(g)]),_:1},8,["options","onClick"])]),default:f(()=>[(_(!0),P(D,null,je(a.pageList,h=>(_(),x(v,{key:h.path,value:h.path,closable:a.pageList.length>1},{tab:f(()=>[F(R(h.title)+" ",1),ze(r(i,{class:"layout-tabs-close-icon",onClick:p=>a.reloadPage(h.path)},null,8,["onClick"]),[[We,a.route.path===h.path]])]),_:2},1032,["value","closable"]))),128))]),_:1},8,["modelValue","onClose","onUpdate:modelValue"]),r(A,{ref:"pageRef",pageKey:a.getPageKey,isAllKeepAlive:""},null,8,["pageKey"])],64)):(_(),x(A,{key:1}))}const Kt=M(Ft,[["render",Ht]]);const Bt={components:{FLayout:qe,FAside:Ze,FMain:Je,FFooter:Qe,FHeader:Xe,Menu:Vt,MultiTabProvider:Kt},props:{menus:{type:Array,default(){return[]}},locale:{type:Boolean,default:!1},title:{type:String,default:""},logo:{type:String,default:Rt},theme:{type:String,default:"dark"},navigation:{type:String,default:"side"},isFixedHeader:{type:Boolean,default:!1},isFixedSidebar:{type:Boolean,default:!0},multiTabs:{type:Boolean,default:!1},sideWidth:{type:Number,default:200},footer:String,menuProps:{type:Object}},setup(t){const n=w(),e=w(0),a=w(!1),o=G(),s=z(),i=C(()=>o.meta.layout&&o.meta.layout.navigation!==void 0?o.meta.layout.navigation:t.navigation),v=C(()=>t.isFixedHeader||t.navigation==="mixin"),g=C(()=>v.value?{top:"".concat(e.value,"px")}:null),c=C(()=>{const m=a.value?"48px":"".concat(t.sideWidth,"px");return t.isFixedSidebar?{left:m}:null});return te(s.currentRoute,()=>{Ye(()=>{n.value&&(e.value=n.value.$el.offsetHeight)})},{immediate:!0}),{headerRef:n,headerHeightRef:e,route:o,collapsedRef:a,currentFixedHeaderRef:v,headerStyleRef:g,sideStyleRef:c,currentNavigation:i}}},Nt={class:"layout-logo"},jt=["src"],zt={key:1,class:"logo-name"},Wt={class:"layout-header-custom"},Gt={class:"flex-between"},Ut={class:"layout-logo"},qt=["src"],Zt={key:1,class:"logo-name"},Jt={class:"layout-aside-custom"},Qt={key:0,class:"layout-aside-locale"},Xt={class:"layout-logo"},Yt=["src"],$t={key:1,class:"logo-name"},en={class:"layout-header-custom"},tn={class:"layout-logo"},nn=["src"],an={key:1,class:"logo-name"},on={class:"layout-header-custom"};function sn(t,n,e,a,o,s){const i=T("Menu"),v=T("f-aside"),g=T("f-header"),c=T("MultiTabProvider"),m=T("f-main"),A=T("f-footer"),h=T("f-layout"),p=T("router-view");return _(),x(h,{class:"main-layout"},{default:f(()=>[a.currentNavigation==="side"?(_(),P(D,{key:0},[r(v,{collapsed:a.collapsedRef,"onUpdate:collapsed":n[0]||(n[0]=l=>a.collapsedRef=l),fixed:e.isFixedSidebar,width:"".concat(e.sideWidth,"px"),class:"layout-aside",collapsible:"",inverted:e.theme==="dark"},{default:f(()=>{var l,y,b;return[d("div",Nt,[e.logo?(_(),P("img",{key:0,src:e.logo,class:"logo-img"},null,8,jt)):E("",!0),e.title?(_(),P("div",zt,R(e.title),1)):E("",!0)]),r(i,{class:"layout-menu",menus:e.menus,collapsed:a.collapsedRef,mode:"vertical",inverted:e.theme==="dark",expandedKeys:(l=e.menuProps)==null?void 0:l.expandedKeys,defaultExpandAll:(y=e.menuProps)==null?void 0:y.defaultExpandAll,accordion:(b=e.menuProps)==null?void 0:b.accordion},null,8,["menus","collapsed","inverted","expandedKeys","defaultExpandAll","accordion"])]}),_:1},8,["collapsed","fixed","width","inverted"]),r(h,{fixed:e.isFixedSidebar,style:V(a.sideStyleRef)},{default:f(()=>[r(g,{ref:"headerRef",class:"layout-header",fixed:a.currentFixedHeaderRef},{default:f(()=>[d("div",Wt,[k(t.$slots,"renderCustom",{menus:e.menus},void 0,!0)]),e.locale?k(t.$slots,"locale",{key:0},void 0,!0):E("",!0)]),_:3},8,["fixed"]),r(h,{embedded:!e.multiTabs,fixed:a.currentFixedHeaderRef,style:V(a.headerStyleRef)},{default:f(()=>[r(m,{class:"layout-main"},{default:f(()=>[r(c,{multiTabs:e.multiTabs},null,8,["multiTabs"])]),_:1}),e.footer?(_(),x(A,{key:0,class:"layout-footer"},{default:f(()=>[F(R(e.footer),1)]),_:1})):E("",!0)]),_:1},8,["embedded","fixed","style"])]),_:3},8,["fixed","style"])],64)):a.currentNavigation==="left-right"?(_(),P(D,{key:1},[r(v,{collapsed:a.collapsedRef,"onUpdate:collapsed":n[1]||(n[1]=l=>a.collapsedRef=l),fixed:e.isFixedSidebar,width:"".concat(e.sideWidth,"px"),class:"layout-aside",collapsible:"",inverted:e.theme==="dark"},{default:f(()=>{var l,y,b;return[d("div",Gt,[d("div",null,[d("div",Ut,[e.logo?(_(),P("img",{key:0,src:e.logo,class:"logo-img"},null,8,qt)):E("",!0),e.title?(_(),P("div",Zt,R(e.title),1)):E("",!0)]),r(i,{class:"layout-menu",menus:e.menus,collapsed:a.collapsedRef,mode:"vertical",inverted:e.theme==="dark",expandedKeys:(l=e.menuProps)==null?void 0:l.expandedKeys,defaultExpandAll:(y=e.menuProps)==null?void 0:y.defaultExpandAll,accordion:(b=e.menuProps)==null?void 0:b.accordion},null,8,["menus","collapsed","inverted","expandedKeys","defaultExpandAll","accordion"])]),d("div",null,[d("div",Jt,[k(t.$slots,"renderCustom",{menus:e.menus},void 0,!0)]),e.locale?(_(),P("div",Qt,[k(t.$slots,"locale",{},void 0,!0)])):E("",!0)])])]}),_:3},8,["collapsed","fixed","width","inverted"]),r(h,{fixed:e.isFixedSidebar,style:V(a.sideStyleRef)},{default:f(()=>[r(h,{embedded:!e.multiTabs},{default:f(()=>[r(m,{class:"layout-main"},{default:f(()=>[r(c,{multiTabs:e.multiTabs},null,8,["multiTabs"])]),_:1}),e.footer?(_(),x(A,{key:0,class:"layout-footer"},{default:f(()=>[F(R(e.footer),1)]),_:1})):E("",!0)]),_:1},8,["embedded"])]),_:1},8,["fixed","style"])],64)):a.currentNavigation==="top"?(_(),P(D,{key:2},[r(g,{ref:"headerRef",class:"layout-header",inverted:e.theme==="dark",fixed:a.currentFixedHeaderRef},{default:f(()=>{var l,y,b;return[d("div",Xt,[e.logo?(_(),P("img",{key:0,src:e.logo,class:"logo-img"},null,8,Yt)):E("",!0),e.title?(_(),P("div",$t,R(e.title),1)):E("",!0)]),r(i,{class:"layout-menu",menus:e.menus,mode:"horizontal",inverted:e.theme==="dark",expandedKeys:(l=e.menuProps)==null?void 0:l.expandedKeys,defaultExpandAll:(y=e.menuProps)==null?void 0:y.defaultExpandAll,accordion:(b=e.menuProps)==null?void 0:b.accordion},null,8,["menus","inverted","expandedKeys","defaultExpandAll","accordion"]),d("div",en,[k(t.$slots,"renderCustom",{menus:e.menus},void 0,!0)]),e.locale?k(t.$slots,"locale",{key:0},void 0,!0):E("",!0)]}),_:3},8,["inverted","fixed"]),r(h,{embedded:!e.multiTabs,fixed:a.currentFixedHeaderRef,style:V(a.headerStyleRef)},{default:f(()=>[r(m,{class:"layout-main"},{default:f(()=>[r(c,{multiTabs:e.multiTabs},null,8,["multiTabs"])]),_:1}),e.footer?(_(),x(A,{key:0,class:"layout-footer"},{default:f(()=>[F(R(e.footer),1)]),_:1})):E("",!0)]),_:1},8,["embedded","fixed","style"])],64)):a.currentNavigation==="mixin"?(_(),P(D,{key:3},[r(g,{ref:"headerRef",class:"layout-header",fixed:a.currentFixedHeaderRef,inverted:e.theme==="dark"},{default:f(()=>[d("div",tn,[e.logo?(_(),P("img",{key:0,src:e.logo,class:"logo-img"},null,8,nn)):E("",!0),e.title?(_(),P("div",an,R(e.title),1)):E("",!0)]),d("div",on,[k(t.$slots,"renderCustom",{menus:e.menus},void 0,!0)]),e.locale?k(t.$slots,"locale",{key:0},void 0,!0):E("",!0)]),_:3},8,["fixed","inverted"]),r(h,{fixed:a.currentFixedHeaderRef,style:V(a.headerStyleRef)},{default:f(()=>[r(v,{collapsed:a.collapsedRef,"onUpdate:collapsed":n[2]||(n[2]=l=>a.collapsedRef=l),fixed:e.isFixedSidebar,width:"".concat(e.sideWidth,"px"),collapsible:"",class:"layout-aside"},{default:f(()=>{var l,y,b;return[r(i,{class:"layout-menu",menus:e.menus,collapsed:a.collapsedRef,mode:"vertical",expandedKeys:(l=e.menuProps)==null?void 0:l.expandedKeys,defaultExpandAll:(y=e.menuProps)==null?void 0:y.defaultExpandAll,accordion:(b=e.menuProps)==null?void 0:b.accordion},null,8,["menus","collapsed","expandedKeys","defaultExpandAll","accordion"])]}),_:1},8,["collapsed","fixed","width"]),r(h,{embedded:!e.multiTabs,fixed:e.isFixedSidebar,style:V(a.sideStyleRef)},{default:f(()=>[r(m,{class:"layout-main"},{default:f(()=>[r(c,{multiTabs:e.multiTabs},null,8,["multiTabs"])]),_:1}),e.footer?(_(),x(A,{key:0,class:"layout-footer"},{default:f(()=>[F(R(e.footer),1)]),_:1})):E("",!0)]),_:1},8,["embedded","fixed","style"])]),_:1},8,["fixed","style"])],64)):(_(),x(m,{key:4,class:"layout-main"},{default:f(()=>[r(p)]),_:1}))]),_:3})}const ln=M(Bt,[["render",sn],["__scopeId","data-v-69422c84"]]),rn=I({name:"Layout",setup(){const t=fe(),n=typeof t.menus=="function"?t.menus():t.menus,e=Ee(),a=C(()=>{var s;return me((s=L(n))!=null?s:[],e)}),o=S.getShared("locale");return()=>{const s={renderCustom:t.renderCustom,locale:()=>o?r(o.SelectLang,null,null):null};return r(ln,{menus:a.value,locale:!!o,title:t.title,logo:t.logo,theme:t.theme,navigation:t.navigation,isFixedHeader:t.isFixedHeader,isFixedSidebar:t.isFixedSidebar,multiTabs:t.multiTabs,sideWidth:t.sideWidth,footer:t.footer,menuProps:t.menuProps},s)}}}),cn=d("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1),un=d("TresAmbientLight",{intensity:.5},null,-1),dn={ref:"sphereRef",position:[0,4,0],"cast-shadow":""},_n=d("TresSphereGeometry",{args:[2,32,32]},null,-1),fn=d("TresMeshToonMaterial",{color:"#006060"},null,-1),pn=[_n,fn],mn={ref:"TDirectionalLight",position:[10,8,4],intensity:1,"cast-shadow":""},hn=d("TresDirectionalLight",{position:[10,2,4],intensity:1,"cast-shadow":""},null,-1),gn=d("TresGridHelper",null,null,-1),yn=I({__name:"test",setup(t){const n=j({clearColor:"#201919",shadows:!0,alpha:!1,shadowMapType:ne,outputColorSpace:ae,toneMapping:oe}),e=j({enableDamping:!0,dampingFactor:.05,enableZoom:!0,autoRotate:!1,autoRotateSpeed:2,maxPolarAngle:Math.PI,minPolarAngle:0,maxAzimuthAngle:Math.PI,minAzimuthAngle:-Math.PI,enablePan:!0,keyPanSpeed:7,maxDistance:100,minDistance:0,minZoom:0,maxZoom:100,zoomSpeed:1,enableRotate:!0,rotateSpeed:1}),{onLoop:a}=se();return a(({elapsed:o})=>{}),ie(()=>{}),le(()=>{}),(o,s)=>(_(),x(L(ce),re(n,{"window-size":""}),{default:f(()=>[cn,r(L(_e),ue(de(e)),null,16),un,d("TresMesh",dn,pn,512),d("TresDirectionalLight",mn,null,512),hn,gn]),_:1},16))}}),vn=d("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1),bn=d("TresAmbientLight",{intensity:.5},null,-1),Pn=d("TresSphereGeometry",{args:[2,32,32]},null,-1),Tn=d("TresMeshToonMaterial",{color:"#006060"},null,-1),An=[Pn,Tn],En=d("TresSphereGeometry",{args:[2,32,32]},null,-1),xn=d("TresMeshToonMaterial",{color:"#006060"},null,-1),Rn=[En,xn],Sn=["rotation"],Ln=d("TresPlaneGeometry",{args:[20,20,20,20]},null,-1),wn=d("TresMeshToonMaterial",null,null,-1),Cn=[Ln,wn],kn=d("TresDirectionalLight",{position:[10,2,4],intensity:1,"cast-shadow":""},null,-1),Mn=d("TresGridHelper",null,null,-1),On=I({__name:"index",setup(t){const n=j({clearColor:"#201919",shadows:!0,alpha:!1,shadowMapType:ne,outputColorSpace:ae,toneMapping:oe}),e=j({enableDamping:!0,dampingFactor:.05,enableZoom:!0,autoRotate:!1,autoRotateSpeed:2,maxPolarAngle:Math.PI,minPolarAngle:0,maxAzimuthAngle:Math.PI,minAzimuthAngle:-Math.PI,enablePan:!0,keyPanSpeed:7,maxDistance:100,minDistance:0,minZoom:0,maxZoom:100,zoomSpeed:1,enableRotate:!0,rotateSpeed:1}),a=w(),o=w(),s=$e(),{onLoop:i}=se();i(({elapsed:c})=>{a.value&&(a.value.position.y+=Math.sin(c)*.01,o.value.position.y+=Math.sin(c)*.01)});function v(c){c&&c.object.material.color.set("#DFFF45")}function g(c){c&&c.material.color.set("#006060")}return ie(()=>{s.value&&(s.value.shadow.mapSize.set(1e3,1e3),s.value.shadow.camera.near=.5,s.value.shadow.camera.top=20,s.value.shadow.camera.right=20,s.value.shadow.camera.left=-20,s.value.shadow.camera.bottom=-20)}),le(()=>{}),(c,m)=>(_(),x(L(ce),re(n,{"window-size":""}),{default:f(()=>[vn,r(L(_e),ue(de(e)),null,16),bn,d("TresMesh",{ref_key:"sphereRef",ref:a,position:[0,4,0],"cast-shadow":"",onPointerEnter:v,onPointerLeave:g},An,544),d("TresMesh",{ref_key:"sphereRef2",ref:o,position:[4,4,0],"cast-shadow":"",onPointerEnter:v,onPointerLeave:g},Rn,544),d("TresMesh",{rotation:[-Math.PI/2,0,0],"receive-shadow":""},Cn,8,Sn),d("TresDirectionalLight",{ref_key:"TDirectionalLight",ref:s,position:[10,8,4],intensity:1,"cast-shadow":""},null,512),kn,Mn]),_:1},16))}}),In="/icegl-three-vue-tres/static/403-c37bd830.png";const Vn=I({components:{FButton:et},props:{iconSrc:{required:!0},title:{type:String,required:!0},subTitle:{type:String}},setup(){const t=z();return{click:()=>{t.back()}}}}),Dn={class:"wrapper"},Fn=["src"],Hn={class:"title"},Kn={key:0,class:"sub-title"},Bn={class:"btn-wrapper"};function Nn(t,n,e,a,o,s){const i=T("FButton");return _(),P("div",Dn,[d("img",{src:t.iconSrc,class:"icon"},null,8,Fn),d("div",Hn,R(t.title),1),t.subTitle?(_(),P("div",Kn,R(t.subTitle),1)):E("",!0),d("div",Bn,[r(i,{type:"primary",onClick:t.click},{default:f(()=>[F(" 返回上一页 ")]),_:1},8,["onClick"])])])}const Ae=M(Vn,[["render",Nn],["__scopeId","data-v-25581ede"]]),jn=I({components:{Wrapper:Ae},setup(){return{img403:In}}});function zn(t,n,e,a,o,s){const i=T("Wrapper");return _(),x(i,{iconSrc:t.img403,title:"没有访问权限，请联系管理人员",subTitle:""},null,8,["iconSrc"])}const Wn=M(jn,[["render",zn]]),Gn="/icegl-three-vue-tres/static/404-ec600539.png",Un=I({components:{Wrapper:Ae},setup(){return{img404:Gn}}});function qn(t,n,e,a,o,s){const i=T("Wrapper");return _(),x(i,{iconSrc:t.img404,title:"哎呀！这个页面找不到了",subTitle:""},null,8,["iconSrc"])}const Zn=M(Un,[["render",qn]]);function Ee(){return[{path:"/",component:rn,children:[{path:"/test",component:yn,name:"test",meta:{},count:7},{path:"/",component:On,name:"index",meta:{},count:5},{path:"/403",name:"Exception403",component:Wn,meta:{title:"403"}},{path:"/404",name:"Exception404",component:Zn,meta:{title:"404"}}]}]}const Jn=I(()=>()=>r(tt,null,null));const Qn=(t={})=>{const{plugin:n,routes:e,rootElement:a}=t,o=n.applyPlugins({type:K.modify,key:"rootContainer",initialValue:Jn,args:{routes:e,plugin:n}}),s=nt(o);return n.applyPlugins({key:"onAppCreated",type:K.event,args:{app:s,routes:e}}),a&&s.mount(a),s},Xn=(t={})=>S.applyPlugins({key:"render",type:K.compose,initialValue:()=>{const n=S.applyPlugins({key:"modifyClientRenderOpts",type:K.modify,initialValue:{routes:t.routes||Ee(),plugin:S,rootElement:"#app",defaultTitle:"fes.js"}});return Qn(n)},args:t}),Yn=Xn();Yn();
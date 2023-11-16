import{a as C,P as j}from"./trescientos-a922f233.js";import{_ as z}from"./loading.vue_vue_type_script_setup_true_lang-c55fdfd4.js";import{_ as V}from"./pagesShow.vue_vue_type_style_index_0_lang-abc71cba.js";import{A as G,D as T,C as m,c as A,L as $,V as w}from"./three.module-cbea6429.js";import{Y as h,j as l,w as F,ae as b,o as u,c as _,U as g,ab as S,ac as k,a9 as M,a as R,B as D,C as L,s as P,V as B}from"./vendor-19b019cc.js";import"./_commonjsHelpers-725317a4.js";const N=["position"],E=["args"],I=h({__name:"radraA",props:{position:{default:[0,0,0]},size:{default:300},radius:{default:240},color:{default:"#ffff00"},opacity:{default:.9},speed:{default:300},followWidth:{default:220}},setup(c,{expose:s}){const e=c,{onLoop:a}=C(),t={value:0},o=l();a(({delta:n})=>{t.value+=n});const i={transparent:!0,blending:G,depthWrite:!1,side:T,depthTest:!0,vertexShader:"\n	varying vec3 vPosition;\n	void main() {\n		vPosition = position;\n		vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n		vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectionPosition = projectionMatrix * viewPosition;\n    gl_Position = projectionPosition;\n  }\n  ",fragmentShader:"\n	uniform float uRadius;     \n  uniform float uTime;            \n  uniform float uSpeed; \n  uniform float uFollowWidth; \n  varying vec3 vPosition;\n	uniform vec3 ncolor;\n  float calcAngle(vec3 oFrag){\n    float fragAngle;\n    const vec3 ox = vec3(1,0,0);\n    float dianji = oFrag.x * ox.x + oFrag.z*ox.z;\n    float oFrag_length = length(oFrag); // length是内置函数\n    float ox_length = length(ox); // length是内置函数\n    float yuxian = dianji / (oFrag_length * ox_length);\n    fragAngle = acos(yuxian);\n    fragAngle = degrees(fragAngle);\n    if(oFrag.z > 0.0) {\n      fragAngle = -fragAngle + 360.0;\n    }\n    float scanAngle = uTime * uSpeed - floor(uTime * uSpeed / 360.0) * 360.0;\n    float angle = scanAngle - fragAngle;\n    if(angle < 0.0){\n      angle = angle + 360.0;\n    }\n    return angle;\n  }\n  void main() {\n			// length内置函数，取向量的长度\n		if(length(vPosition) == 0.0 || length(vPosition) > uRadius-2.0){\n			gl_FragColor = vec4( ncolor, 1.0 );\n		} else {\n			float angle = calcAngle(vPosition);\n			if(angle < uFollowWidth){\n				// 尾焰区域\n				float opacity =  1.0 - angle / uFollowWidth; \n				gl_FragColor = vec4( ncolor, 1.0 * opacity );  \n			} else {\n				// 其他位置的像素均为透明\n				gl_FragColor = vec4( ncolor, 0.0 ); \n			}\n		}\n	}\n  ",uniforms:{uSpeed:{value:e.speed},uRadius:{value:e.radius},uTime:t,uFollowWidth:{value:e.followWidth},ncolor:{value:new m(e.color)}}};F(o,(n,d)=>{if(n&&d===void 0){const p=new A().makeRotationX(-Math.PI/180*90);o.value.applyMatrix4(p)}});const r=l();return b(()=>{e.color&&(i.uniforms.ncolor.value=new m(e.color)),e.radius&&(i.uniforms.uRadius.value=e.radius)}),l(-Math.PI/180*90),s({MeshRef:r}),(n,d)=>(u(),_("TresMesh",{ref_key:"MeshRef",ref:r,position:e.position},[g("TresCircleGeometry",{ref_key:"TresCircleGeometryRef",ref:o,args:[e.size,1e3]},null,8,E),g("TresShaderMaterial",S(k(i)),null,16)],8,N))}}),O=["position"],U=["args"],X=h({__name:"radraB",props:{position:{default:[0,0,0]},radius:{default:10},maxRadius:{default:200},color:{default:"#ffff00"},opacity:{default:.5},period:{default:2},height:{default:100}},setup(c,{expose:s}){const e=c,a=l(),t=l(1),o=l(.1),i={color:e.color,opacity:e.opacity,transparent:!0,depthWrite:!0,depthTest:!0,side:T,vertexShader:"\n	varying vec4 vPosition;\n  void main() {\n    vPosition = modelMatrix * vec4(position,1.0);\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  }\n  ",fragmentShader:"\n	uniform vec3 uColor; // 光墙半径        \n  uniform vec3 uMax; \n  uniform vec3 uMin;\n  uniform mat4 modelMatrix; // 世界矩阵\n  varying vec4 vPosition; // 接收顶点着色传递进来的位置数据\n  void main() {\n    // 转世界坐标\n    vec4 uMax_world = modelMatrix * vec4(uMax,1.0);\n    vec4 uMin_world = modelMatrix * vec4(uMin,1.0);\n    // 根据像素点世界坐标的y轴高度,设置透明度\n    float opacity =1.0 - (vPosition.y - uMin_world.y) / (uMax_world.y -uMin_world.y); \n    gl_FragColor = vec4( uColor, opacity);\n  }\n  ",uniforms:{uMax:t,uMin:o,uColor:{value:new m(e.color)}}},r=l();let n=null;F(r,(f,v)=>{f&&v===void 0&&(r.value.computeBoundingBox(),t.value=r.value.boundingBox.max,o.value=r.value.boundingBox.min,n=a.value.scale.clone())});const d=l(new $(new w(0,0,0),new w(0,e.height,0)));b(()=>{e.color&&(i.uniforms.uColor.value=new m(e.color))});const{onLoop:p}=C(),x={value:0};return p(({delta:f})=>{x.value+=f;const y=(x.value%e.period/e.period*(e.maxRadius-e.radius)+e.radius)/e.radius,W=new A().makeScale(y,1,y);n&&(a.value.scale.copy(n.clone().applyMatrix4(W)),a.value.updateMatrix())}),s({MeshRef:a}),(f,v)=>(u(),_("TresMesh",{ref_key:"MeshRef",ref:a,position:e.position,renderOrder:1001},[g("TresTubeGeometry",{ref_key:"TresTubeGeometryRef",ref:r,args:[d.value,20,e.radius,100,!1]},null,8,U),g("TresShaderMaterial",S(k(i)),null,16)],8,O))}}),ee=h({__name:"radars",setup(c){const s=l(),e=M({show:!0,color:"#00c0ff",radius:300}),a=new j({title:"雷达效果",expanded:!0}),t=a.addFolder({title:"A型"});t.addBinding(e,"show",{label:"显示"}),t.addBinding(e,"color",{label:"颜色"}),t.addBinding(e,"radius",{label:"大小",min:1,max:400,step:10});const o=M({show:!0,color:"#ffff00",maxRadius:300}),i=a.addFolder({title:"B型"});return i.addBinding(o,"show",{label:"显示"}),i.addBinding(o,"color",{label:"颜色"}),i.addBinding(o,"maxRadius",{label:"大小",min:10,max:400,step:10}),(r,n)=>(u(),_(L,null,[R(z),R(V,null,{ability:D(()=>[e.show?(u(),P(I,{key:0,ref_key:"radraARef",ref:s,color:e.color,radius:e.radius,size:300,position:[10,60,0]},null,8,["color","radius"])):B("",!0),o.show?(u(),P(X,{key:1,position:[600,30,0],color:o.color,height:80,maxRadius:o.maxRadius},null,8,["color","maxRadius"])):B("",!0)]),_:1})],64))}});export{ee as default};
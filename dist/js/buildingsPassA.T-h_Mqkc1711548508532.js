import{_ as S}from"./pagesShow.vue_vue_type_script_setup_true_lang.StWxPZ2r1711548508532.js";import{a0 as f,ak as w,a5 as v,a8 as g,bX as _,ax as W,az as m,aH as D,a1 as y,aq as C,o as b,v as B,D as z,a as M,a9 as F,aa as T}from"./vendor.gReklx3b1711548508532.js";import{E as U,R as j,S as p}from"./EffectComposer.9RmE51_11711548508532.js";import"./vanilla.dhyGEl6d1711548508532.js";import"./_commonjsHelpers.5-cIlDoe1711548508532.js";import"./LineSegments2.N3u1T2Ft1711548508532.js";const E={name:"GammaCorrectionShader",uniforms:{tDiffuse:{value:null}},vertexShader:"\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",fragmentShader:"\n\n		uniform sampler2D tDiffuse;\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vec4 tex = texture2D( tDiffuse, vUv );\n\n			gl_FragColor = sRGBTransferOETF( tex );\n\n		}"},I="varying vec2 vUv;\nvarying vec3 vPosition;\n\nvoid main(){\n	vUv=uv;\n	vPosition=position;\n	gl_Position=vec4(position,1.);\n}\n",R="varying vec2 vUv;\nvarying vec3 vPosition;\nuniform sampler2D tDiffuse;\nuniform sampler2D depthTexture;\n\nuniform mat4 uProjectionInverse;\nuniform mat4 uMatrixWorld;\n\nuniform float time;\nuniform vec3 uColor;\nuniform float uScalenum;//最大范围\nuniform float uScaleone;//单条圈间距\nuniform float uWidth;//单条厚度\nuniform vec2 uPosition;//位置\n\nvec3 WorldPosFromDepth(float depth){\n	float z=(depth-.5)*2.;\n	vec4 clipSpacePosition=vec4(vPosition.xy,z,1.);\n	vec4 viewSpacePosition=uProjectionInverse*clipSpacePosition;\n	viewSpacePosition/=viewSpacePosition.w;\n	vec4 worldSpacePosition=uMatrixWorld*viewSpacePosition;\n	return worldSpacePosition.xyz;\n}\nvec3 WorldPosFromDepth2(float depth){\n	// 规范化设备坐标系 ndc (Normalized Device Coordinates)\n	vec4 ndc=vec4(vPosition.x,vPosition.y,((depth-.5)*2.),1.);\n	// 根据视图中的位置和深度逆向MVP (ModelViewProjectionMatrix) 以获取真实渲染的位置\n	vec4 worldSpacePosition=uMatrixWorld*uProjectionInverse*ndc;\n	// 由于透视相机视图区域是一个截锥体 在乘以矩阵后，结果不在同一个射影空间上（这意味着 w 分量不是每个顶点的 1）\n	// 为了完成转换，我们需要将向量的每个分量除以 w 分量本身\n	// 这一步正常渲染时在GPU中做 我们复原需要手动处理\n	worldSpacePosition/=worldSpacePosition.w;\n	return worldSpacePosition.xyz;\n}\n\nvoid main(){\n	vec4 base=texture2D(tDiffuse,vUv);//之前的纹理\n	float depth=texture2D(depthTexture,vUv).r;\n	\n	// vec3 pos=WorldPosFromDepth(depth);\n	vec3 pos=WorldPosFromDepth2(depth);\n	pos.x=pos.x+uPosition.x;\n	pos.z=pos.z+uPosition.y;\n	float dis=distance(pos.xz,vec2(0,0));\n	vec3 color=vec3(base);\n	if(pos.y<=0.){\n		discard;\n	}\n	if(dis<uScalenum){\n		vec3 scanT=uColor;\n		float wave=fract((dis-time*10.)/uScaleone);\n		if(wave<uWidth){\n			float p=wave/uWidth;\n			color=mix(color,scanT+.1,p*(1.-(dis/uScalenum)));\n		}\n	}\n	gl_FragColor=vec4(color,1.);\n}\n",V=f({__name:"buildingsPassA",props:{color:{default:"#FFF"},uScalenum:{default:150},uScaleone:{default:24},uWidth:{default:1},speed:{default:1},uPosition:{default:{x:0,y:0}}},setup(s){const e=s,{renderer:n,scene:u,camera:a,sizes:r}=w();let l,c=0,o=null,t=null;const P=()=>{o=new U(n.value);const i=new _(l,c);o.readBuffer.depthBuffer=!0,o.readBuffer.depthTexture=i;const d=new j(u.value,a.value);o.addPass(d),t=new p(new W({uniforms:{time:{value:0},tDiffuse:{value:null},depthTexture:{value:i},uProjectionInverse:{value:a.value.projectionMatrixInverse},uMatrixWorld:{value:a.value.matrixWorld},uColor:{value:new m(e.color)},uScalenum:{value:e.uScalenum},uScaleone:{value:e.uScaleone},uWidth:{value:e.uWidth},uPosition:{value:new D(e.uPosition.x,e.uPosition.y)}},vertexShader:I,fragmentShader:R})),o.addPass(t);const x=new p(E);o.addPass(x)};v(()=>{r.width.value&&(l=r.width.value,c=r.height.value,P())});const{onLoop:h}=g();return h(({elapsed:i})=>{o&&(o.render(),t.uniforms.time.value+=e.speed/60)}),v(()=>{t&&(e.color&&(t.material.uniforms.uColor.value=new m(e.color)),e.uScalenum&&(t.material.uniforms.uScalenum.value=e.uScalenum),e.uScaleone&&(t.material.uniforms.uScaleone.value=e.uScaleone),e.uWidth&&(t.material.uniforms.uWidth.value=e.uWidth),e.uPosition&&t.material.uniforms.uPosition.value.set(e.uPosition.x,e.uPosition.y))}),(i,d)=>null}}),q=f({__name:"buildingsPassA",setup(s){const e=y({color:"#00b4fb",uScalenum:250,uScaleone:82,uWidth:.2,speed:10,uPosition:{x:0,y:0}}),n=new C({title:"后期效果",expanded:!0});return n.addBinding(e,"color",{label:"圈颜色"}),n.addBinding(e,"uScalenum",{label:"最大范围",min:1,max:500,step:10}),n.addBinding(e,"uScaleone",{label:"单条圈间距",min:1,max:100,step:1}),n.addBinding(e,"uWidth",{label:"单条圈宽度",min:0,max:1,step:.01}),n.addBinding(e,"speed",{label:"速度",min:1,max:20,step:1}),n.addBinding(e,"uPosition",{picker:"inline",label:"位置",expanded:!0,x:{min:-1e3,max:1e3,step:10},y:{min:-1e3,max:1e3,step:10}}),(u,a)=>(b(),B(S,{disableRender:!0,showAxesHelper:!1},{ability:z(()=>[M(V,F(T(e)),null,16)]),_:1}))}});export{q as default};

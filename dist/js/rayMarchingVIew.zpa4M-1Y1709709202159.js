import{$ as u,a4 as h,aR as y,aZ as r,a5 as g,o as p,c as q,W as t,a9 as f,aa as v,v as z,D as w,a7 as b,K as l,a8 as M,a as m,ab as T}from"./vendor.Fk0OTSuU1709709202159.js";const L="varying vec2 vUv;\nvoid main(){\n	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n	vUv=uv;\n}",P="#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\nvec3 palette(float t){\n	vec3 a=vec3(.5,.5,.5);\n	vec3 b=vec3(.5,.5,.5);\n	vec3 c=vec3(1.,1.,1.);\n	vec3 d=vec3(.263,.416,.557);\n	\n	return a+b*cos(6.28318*(c*t+d));\n}\n\nmat2 rot2D(float angle){\n	float s=sin(angle);\n	float c=cos(angle);\n	return mat2(c,-s,s,c);\n}\n\nfloat sdPyramid(vec3 p,float h)\n{\n	float m2=h*h+.25;\n	\n	p.xz=abs(p.xz);\n	p.xz=(p.z>p.x)?p.zx:p.xz;\n	p.xz-=.5;\n	\n	vec3 q=vec3(p.z,h*p.y-.5*p.x,h*p.x+.5*p.y);\n	\n	float s=max(-q.x,0.);\n	float t=clamp((q.y-.5*p.z)/(m2+.25),0.,1.);\n	\n	float a=m2*(q.x+s)*(q.x+s)+q.y*q.y;\n	float b=m2*(q.x+.5*t)*(q.x+.5*t)+(q.y-m2*t)*(q.y-m2*t);\n	\n	float d2=min(q.y,-q.x*m2-q.y*.5)>0.?0.:min(a,b);\n	\n	return sqrt((d2+q.z*q.z)/m2)*sign(max(q.z,-p.y));\n}\nfloat sdBoxFrame(vec3 p,vec3 b,float e)\n{\n	p=abs(p)-b;\n	vec3 q=abs(p+e)-e;\n	return min(min(\n			length(max(vec3(p.x,q.y,q.z),0.))+min(max(p.x,max(q.y,q.z)),0.),\n			length(max(vec3(q.x,p.y,q.z),0.))+min(max(q.x,max(p.y,q.z)),0.)),\n			length(max(vec3(q.x,q.y,p.z),0.))+min(max(q.x,max(q.y,p.z)),0.));\n		}\n		float map(vec3 p){\n			p.z+=u_time*.4;\n			\n			p.xy=fract(p.xy)-.5;\n			p.z=mod(p.z,.25)-.125;\n			float box=sdBoxFrame(p*8.,vec3(.5,.3,.5),.025)/8.;\n			// box=min(sdPyramid(p*15.,1.5)/15.,box);\n			return box;\n		}\n		\n		void main(){\n			vec2 uv=vUv-vec2(.5);\n			vec2 m=(u_mouse.xy*2.-u_resolution.xy)/u_resolution.y;\n			\n			//变量初始化\n			vec3 ro=vec3(0.,0.,-3.);\n			vec3 rd=normalize(vec3(uv,1.));\n			vec3 col=vec3(0);\n			\n			float t=0.;\n			\n			// 鼠标控制\n			// if(u_mouse.z<0.)\n			// m=vec2(cos(u_time*.2),sin(u_time*.2));\n			\n			// 光追\n			int i;\n			for(i=0;i<80;i++){\n				vec3 p=ro+rd*t;\n				\n				p.xy*=rot2D(t*.2);\n				p.y+=sin(t*(1.)*.5)*.35;\n				\n				float d=map(p);\n				\n				t+=d;\n				\n				if(d<.001||t>100.)break;\n			}\n			\n			// coloring\n			col=palette(t*.04+float(i)*.005);\n			\n			gl_FragColor=vec4(col,1.);\n		}",B=["rotation"],C={ref:"TresTubeGeometryRef",args:[1e3,1e3]},D=u({__name:"rayMarchingMaterial",setup(d){const{onLoop:n,onAfterLoop:o}=h(),e={transparent:!0,depthWrite:!0,depthTest:!0,side:y,vertexShader:L,fragmentShader:P,uniforms:{u_resolution:{value:new r(window.innerWidth,window.innerHeight)},u_mouse:{value:new r(0,0)},u_time:{value:0}}},s=window.innerWidth/2,x=window.innerHeight/2;let i=0,c=0;function _(a){i=a.clientX-s,c=a.clientY-x}return document.addEventListener("mousemove",_,!1),g(()=>{}),n(()=>{e.uniforms.u_time.value+=.01,e.uniforms.u_mouse.value=new r(i,c)}),o(()=>{}),(a,E)=>(p(),q("TresMesh",{ref:"MeshRef",rotation:[Math.PI/2,0,0]},[t("TresPlaneGeometry",C,null,512),t("TresShaderMaterial",f(v(e)),null,16)],8,B))}}),H={ref:"perspectiveCameraRef",position:[0,500,0],fov:45,near:1,far:1e4},R=t("TresAmbientLight",{color:"#ffffff"},null,-1),S=t("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1),V=t("TresAxesHelper",{args:[1e3],position:[0,19,0]},null,-1),k=t("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1),G=u({__name:"rayMarchingVIew",setup(d){const n={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0},o={autoRotate:!1,enableDamping:!0};return(e,s)=>(p(),z(l(M),b(n,{"window-size":""}),{default:w(()=>[t("TresPerspectiveCamera",H,null,512),m(l(T),f(v(o)),null,16),R,S,m(D),V,k]),_:1},16))}});export{G as default};

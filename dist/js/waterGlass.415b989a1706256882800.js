import{Z as p,aJ as m,al as l,a3 as u,w as x,o as d,c as y,a as s,a6 as v,ci as f,J as a,cs as h,V as o,$ as g,am as _,v as z,C as b,a7 as w,a0 as N,a1 as P,a2 as M,a8 as C,a9 as q,aa as B}from"./vendor.1c7977dc1706256882800.js";const S="uniform float time;\nuniform float amplitude;\nuniform float speed;\nuniform float frequency;\n\nvec3 mod289(vec3 x){\n	return x-floor(x*(1./289.))*289.;\n}\n\nvec4 mod289(vec4 x){\n	return x-floor(x*(1./289.))*289.;\n}\n\nvec4 permute(vec4 x){\n	return mod289(((x*34.)+1.)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r){\n	return 1.79284291400159-.85373472095314*r;\n}\n\nfloat noise(vec3 v){\n	const vec2 C=vec2(1./6.,1./3.);\n	const vec4 D=vec4(0.,.5,1.,2.);\n	\n	// First corner\n	vec3 i=floor(v+dot(v,C.yyy));\n	vec3 x0=v-i+dot(i,C.xxx);\n	\n	// Other corners\n	vec3 g=step(x0.yzx,x0.xyz);\n	vec3 l=1.-g;\n	vec3 i1=min(g.xyz,l.zxy);\n	vec3 i2=max(g.xyz,l.zxy);\n	\n	vec3 x1=x0-i1+C.xxx;\n	vec3 x2=x0-i2+C.yyy;\n	vec3 x3=x0-D.yyy;\n	\n	// Permutations\n	i=mod289(i);\n	vec4 p=permute(permute(permute(\n				i.z+vec4(0.,i1.z,i2.z,1.))\n				+i.y+vec4(0.,i1.y,i2.y,1.))\n				+i.x+vec4(0.,i1.x,i2.x,1.));\n				\n				float n_=.142857142857;// 1.0/7.0\n				vec3 ns=n_*D.wyz-D.xzx;\n				\n				vec4 j=p-49.*floor(p*ns.z*ns.z);//  mod(p,7*7)\n				\n				vec4 x_=floor(j*ns.z);\n				vec4 y_=floor(j-7.*x_);// mod(j,N)\n				\n				vec4 x=x_*ns.x+ns.yyyy;\n				vec4 y=y_*ns.x+ns.yyyy;\n				vec4 h=1.-abs(x)-abs(y);\n				\n				vec4 b0=vec4(x.xy,y.xy);\n				vec4 b1=vec4(x.zw,y.zw);\n				\n				vec4 s0=floor(b0)*2.+1.;\n				vec4 s1=floor(b1)*2.+1.;\n				vec4 sh=-step(h,vec4(0.));\n				\n				vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;\n				vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;\n				\n				vec3 p0=vec3(a0.xy,h.x);\n				vec3 p1=vec3(a0.zw,h.y);\n				vec3 p2=vec3(a1.xy,h.z);\n				vec3 p3=vec3(a1.zw,h.w);\n				\n				//Normalise gradients\n				vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));\n				p0*=norm.x;\n				p1*=norm.y;\n				p2*=norm.z;\n				p3*=norm.w;\n				\n				// Mix final noise value\n				vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);\n				m=m*m;\n				return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),\n				dot(p2,x2),dot(p3,x3)));\n			}\n			\n			// the function which defines the displacement\n			float displace(vec3 point){\n				return noise(vec3(point.x*frequency,point.y*frequency,time*speed))*amplitude;\n			}\n			\n			vec3 orthogonal(vec3 v){\n				return normalize(abs(v.x)>abs(v.z)\n				?vec3(-v.y,v.x,0.)\n				:vec3(0.,-v.z,v.y));\n			}\n			\n			void main(){\n				vec3 displacedPosition=position+normal*displace(position);\n				\n				float offset=.0001;\n				vec3 tangent=orthogonal(normal);\n				vec3 bitangent=normalize(cross(normal,tangent));\n				vec3 neighbour1=position+tangent*offset;\n				vec3 neighbour2=position+bitangent*offset;\n				vec3 displacedNeighbour1=neighbour1+normal*displace(neighbour1);\n				vec3 displacedNeighbour2=neighbour2+normal*displace(neighbour2);\n				\n				vec3 displacedTangent=displacedNeighbour1-displacedPosition;\n				vec3 displacedBitangent=displacedNeighbour2-displacedPosition;\n				\n				vec3 displacedNormal=normalize(cross(displacedTangent,displacedBitangent));\n				\n				// vNormal=normalMatrix*displacedNormal;\n				//vNormal = normal;\n				csm_Normal=normalMatrix*displacedNormal;\n				// csm_Normal=normal;\n				// gl_Position=projectionMatrix*modelViewMatrix*vec4(displacedPosition,1.);\n				csm_Position=displacedPosition;\n			}",T=["rotation-x"],D=o("TresPlaneGeometry",{args:[1,1,64,64]},null,-1),L=p({__name:"waterGlass",props:{color:{default:"#fff"},amplitude:{default:.066},frequency:{default:5}},setup(r){const e=r,t={time:{type:"f",value:.1},amplitude:{type:"f",value:e.amplitude},speed:{type:"f",value:.277},frequency:{type:"f",value:e.frequency}},n={side:m,color:new l("#006EFF"),metalness:.087,roughness:0,transmission:1,thickness:1.5,refractionRatio:1.5},{onLoop:c}=u();return c(({delta:i})=>{t.time.value+=i}),x(()=>e,()=>{n.color=new l(e.color),t.amplitude.value=e.amplitude,t.frequency.value=e.frequency},{deep:!0}),(i,$)=>(d(),y("TresMesh",{"rotation-x":-Math.PI/2,"position-y":.1},[D,s(a(h),v(n,{baseMaterial:f,vertexShader:a(S),uniforms:t,silent:""}),null,16,["baseMaterial","vertexShader"])],8,T))}}),j=o("TresPerspectiveCamera",{position:[1,1,1]},null,-1),G=o("TresAmbientLight",{intensity:1},null,-1),k=o("TresDirectionalLight",{args:[16777215,9],position:[0,.5,0]},null,-1),I=o("TresPointLight",{args:[16777215,100,0,.1],position:[.1,.3,0]},null,-1),V=o("TresGridHelper",{args:[1,10]},null,-1),R=p({__name:"waterGlass",setup(r){const e={clearColor:"#222",shadows:!0,alpha:!1,shadowMapType:N,outputColorSpace:P,toneMapping:M,useLegacyLights:!0,antialias:!0,logarithmicDepthBuffer:!0},t=g({color:"#346DB7",amplitude:.066,frequency:5}),n=new _({title:"参数",expanded:!0});return n.addBinding(t,"color",{label:"颜色"}),n.addBinding(t,"amplitude",{label:"amplitude",min:.01,max:1,step:.01}),n.addBinding(t,"frequency",{label:"frequency",min:.1,max:10,step:.1}),(c,i)=>(d(),z(a(w),v(e,{"window-size":""}),{default:b(()=>[j,G,k,I,s(L,C(q(t)),null,16),s(a(B)),V]),_:1},16))}});export{R as default};
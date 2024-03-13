import{au as h,at as f,bs as j,bk as V,aC as k,ay as C,aq as w,bg as T,aE as N,b1 as H,$ as R,aA as b,bj as X,c9 as P,ca as _,ak as U,b0 as A,aw as i,bl as G,aB as L,a4 as O,a5 as $,w as F,o as s,c as E,K as x,a0 as D,an as q,a as l,D as m,a9 as z,aa as B,a8 as Y,E as Z,cb as K,ab as J,v as y,ag as S,a7 as Q,W as I}from"./vendor.aMIuUFG31710334915622.js";import"./starLoading.vue_vue_type_style_index_0_scoped_86681af3_lang.WLq5ES0Y1710334915622.js";import{_ as tt}from"./randomLoading.vue_vue_type_script_setup_true_lang.H8GPJI1j1710334915622.js";import{_ as et}from"./whiteFloorMesh.vue_vue_type_script_setup_true_lang.JmzFfh681710334915622.js";import{_ as nt}from"./skyBoxAmesh.vue_vue_type_script_setup_true_lang.owUNPEtZ1710334915622.js";import"./starLoading.6Kqlu9vZ1710334915622.js";const rt="varying vec3 vWorldSpaceFragPos;\nvarying vec3 vWorldSpaceNormal;\n// NOTE: we don't need the projViewModel matrix, because vWorldSpaceFragPos is already multiplied by the model matrix\n// I'm repeating this comment 5 times because I've lost 2 hours of my life debugging this thing\nvarying mat4 vProjViewMatrix;\nvarying mat4 vViewMatrix;\n\nvoid main(){\n	// NOTE: the multiplication with modelMatrix is required otherwise viewDir in the fragment shader would be incorrect\n	vWorldSpaceFragPos=(modelMatrix*vec4(position,1.)).xyz;\n	vWorldSpaceNormal=normalize((modelMatrix*vec4(normal,0.)).xyz);\n	\n	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n	vProjViewMatrix=projectionMatrix*viewMatrix;\n	vViewMatrix=viewMatrix;\n}",ot="uniform sampler2D uSkybox;\nuniform sampler2D uBackFaceBuffer;\nuniform sampler2D uFrontFaceBuffer;\n\nuniform vec3 uExtintionColor1;\nuniform vec3 uExtintionColor2;\nuniform float uExtintionFactor;\nuniform float uExposure;\nuniform float uReflectionFactor;\nuniform vec4 uExtinctionFX1;\n\nuniform float uTime;\n\nuniform vec3 uCameraPos;\nuniform vec2 uScreenSizeInv;\nuniform float uCameraFarInverse;\n\nvarying vec3 vWorldSpaceFragPos;\nvarying vec3 vWorldSpaceNormal;\nvarying mat4 vProjViewMatrix;\nvarying mat4 vViewMatrix;\n\nconst float PI=3.14159265359;\nconst float e=2.7182818284590;\n\nconst float planeSize=3.;\nconst vec3 planeColor=pow(vec3(202./255.,205./255.,185./255.),vec3(3.));\n\nfloat mod289(float x){return x-floor(x*(1./289.))*289.;}\nvec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}\nvec4 perm(vec4 x){return mod289(((x*34.)+1.)*x);}\n\nfloat noise(vec3 p){\n	vec3 a=floor(p);\n	vec3 d=p-a;\n	d=d*d*(3.-2.*d);\n	\n	vec4 b=a.xxyy+vec4(0.,1.,0.,1.);\n	vec4 k1=perm(b.xyxy);\n	vec4 k2=perm(k1.xyxy+b.zzww);\n	\n	vec4 c=k2+a.zzzz;\n	vec4 k3=perm(c);\n	vec4 k4=perm(c+1.);\n	\n	vec4 o1=fract(k3*(1./41.));\n	vec4 o2=fract(k4*(1./41.));\n	\n	vec4 o3=o2*d.z+o1*(1.-d.z);\n	vec2 o4=o3.yw*d.x+o3.xz*(1.-d.x);\n	\n	return o4.y*d.y+o4.x*(1.-d.y);\n}\n\nvec3 acesFilm(const vec3 x){\n	const float a=2.51;\n	const float b=.03;\n	const float c=2.43;\n	const float d=.59;\n	const float e=.14;\n	return clamp((x*(a*x+b))/(x*(c*x+d)+e),0.,1.);\n}\n\n// gets the skybox color from a given view direction\nvec3 getSkyboxColor(vec3 viewDir){\n	// skybox coordinates\n	vec2 skyboxUV=vec2(\n		(atan(viewDir.x,viewDir.z)+PI)/(PI*2.),\n		(asin(viewDir.y)+PI*.5)/(PI)\n	);\n	\n	vec3 col=texture2D(uSkybox,skyboxUV).xyz;\n	col=pow(col,vec3(2.2));\n	return col;\n}\n\nbool refract2(vec3 v,vec3 n,float ni_over_nt,inout vec3 refracted){\n	vec3 uv=normalize(v);\n	float dt=dot(uv,n);\n	float discriminant=1.-ni_over_nt*ni_over_nt*(1.-dt*dt);\n	if(discriminant>0.){\n		refracted=ni_over_nt*(v-n*dt)-n*sqrt(discriminant);\n		return true;\n	}\n	\n	return false;\n}\n\nvec3 binarySearchHitPoint(vec3 lastP,vec3 hitP,vec3 rayDir){\n	\n	for(int i=0;i<10;i++){\n		vec3 midP=(lastP+hitP)*.5;\n		\n		// project midP in uv space\n		vec4 projCoord=vProjViewMatrix*vec4(midP,1.);\n		projCoord.xyz/=projCoord.w;\n		\n		vec2 midpNDC=projCoord.xy;\n		vec2 midpUV=midpNDC*.5+.5;\n		\n		// get depth at point\n		vec4 backBuffer=texture2D(uBackFaceBuffer,midpUV);\n		float depth=backBuffer.w;\n		\n		float midpDepth=abs((vViewMatrix*vec4(midP,1.)).z)*uCameraFarInverse;\n		if(midpDepth>depth){\n			hitP=midP;\n		}else{\n			lastP=midP;\n		}\n	}\n	\n	return hitP;\n}\n\nvec3 getRefractedColor(vec3 refractionDir,vec3 hitPoint,float refractionIndex){\n	// move the hitpoint inside the mesh with epsilon\n	hitPoint+=refractionDir*.0001;\n	\n	// raymarch!\n	float stepSize=.02;\n	float stepMult=1.5;\n	\n	vec3 lastP=hitPoint;\n	vec3 p=hitPoint;\n	vec3 hitPNormal;\n	float currStepSize=stepSize;\n	float transmissionDistance=0.;\n	for(int i=0;i<20;i++){\n		p+=currStepSize*refractionDir;\n		\n		// project p in uv space\n		vec4 projCoord=vProjViewMatrix*vec4(p,1.);\n		projCoord.xyz/=projCoord.w;\n		\n		vec2 pNDC=projCoord.xy;\n		vec2 pUV=pNDC*.5+.5;\n		\n		// get depth at point\n		vec4 backBuffer=texture2D(uBackFaceBuffer,pUV);\n		float depth=backBuffer.w;\n		vec3 norm=backBuffer.xyz;\n		\n		// get p depth\n		float pDepth=abs((vViewMatrix*vec4(p,1.)).z)*uCameraFarInverse;\n		\n		if(pDepth>depth){\n			\n			vec3 hitp=binarySearchHitPoint(lastP,p,refractionDir);\n			p=hitp;\n			\n			// ************ get the hitpoint normal\n			vec4 projCoord=vProjViewMatrix*vec4(p,1.);\n			projCoord.xyz/=projCoord.w;\n			\n			vec2 pNDC=projCoord.xy;\n			vec2 pUV=pNDC*.5+.5;\n			\n			// get depth at point\n			hitPNormal=texture2D(uBackFaceBuffer,pUV).xyz;\n			// ************ get the hitpoint normal - END\n			\n			break;\n		}\n		\n		lastP=p;\n		currStepSize*=stepMult;\n	}\n	\n	transmissionDistance=length(hitPoint-p);\n	\n	// ******************** recalc directions\n	vec3 outward_normal;\n	vec3 reflected=reflect(refractionDir,hitPNormal);\n	float ni_over_nt;\n	vec3 refr;\n	// vec3 refracted;\n	float reflect_prob;\n	float cosine;\n	\n	if(dot(refractionDir,hitPNormal)>0.){\n		outward_normal=-hitPNormal;\n		ni_over_nt=refractionIndex;\n		cosine=refractionIndex*dot(refractionDir,hitPNormal);\n	}else{\n		outward_normal=hitPNormal;\n		ni_over_nt=1./refractionIndex;\n		cosine=-dot(refractionDir,hitPNormal);\n	}\n	\n	// if (refract2(refractionDir, outward_normal, ni_over_nt, refracted)) {\n		if(refract2(refractionDir,outward_normal,ni_over_nt,refr)){\n			float r0=(1.-refractionIndex)/(1.+refractionIndex);\n			r0*=r0;\n			reflect_prob=r0+(1.-r0)*pow((1.-cosine),5.);\n		}else{\n			reflect_prob=1.;\n		}\n		// ******************** recalc directions - END\n		\n		// ******************** get colors\n		vec3 col;\n		vec3 colrefl;\n		vec3 colrefr;\n		// if(refracted.y < 0.0) {\n			if(refr.y<0.){\n				// float t = p.y / abs(refracted.y);\n				// vec3 planeHitP = p + refracted * t;\n				float t=p.y/abs(refr.y);\n				vec3 planeHitP=p+refr*t;\n				if(abs(planeHitP.x)<planeSize&&abs(planeHitP.z)<planeSize){\n					colrefr=planeColor;\n				}else{\n					// colrefr = getSkyboxColor(refracted);\n					colrefr=getSkyboxColor(refr);\n				}\n			}else{\n				// colrefr = getSkyboxColor(refracted);\n				colrefr=getSkyboxColor(refr);\n			}\n			\n			if(reflected.y<0.){\n				float t=p.y/abs(reflected.y);\n				vec3 planeHitP=p+reflected*t;\n				if(abs(planeHitP.x)<planeSize&&abs(planeHitP.z)<planeSize){\n					colrefl=planeColor;\n				}else{\n					colrefl=getSkyboxColor(reflected);\n				}\n			}else{\n				colrefl=getSkyboxColor(reflected);\n			}\n			\n			col=colrefl*(reflect_prob*uReflectionFactor)+colrefr*(1.-reflect_prob);\n			// ******************** get colors\n			\n			vec3 transm=vec3(1.);\n			// const int steps = 8;\n			const int steps=15;\n			float step=transmissionDistance/float(steps);\n			float fc=uExtintionFactor*.07;\n			\n			// raymarching transmission color\n			\n			// float noiseStrength = 0.8;\n			float noiseSpeed=.5;\n			float noiseTimeSpeed=.5;\n			\n			for(int i=0;i<steps;i++){\n				vec3 np=hitPoint+refractionDir*float(i)*step;\n				\n				vec3 nnp=np;\n				vec3 w=normalize(np-vec3(.75,1.5,0.));\n				vec3 u=vec3(0.,0.,1.);\n				// vec3 timeOffset = uTime * normalize(np - vec3(0.75, 1.5, 0.0));\n				vec3 timeOffset=cos(uTime)*w+sin(uTime)*u;\n				float colorNoiseX=noise(np*noiseSpeed+timeOffset*noiseTimeSpeed);\n				float colorNoiseY=noise(np*noiseSpeed+timeOffset*noiseTimeSpeed+vec3(15.3278,125.19879,0.));\n				float colorNoiseZ=noise(np*noiseSpeed+timeOffset*noiseTimeSpeed+vec3(2.6008,78.19879,543.12993));\n				\n				float targ=length(nnp*.8*uExtinctionFX1.w-vec3(.75,1.5,0.));\n				float targAperture=.25;\n				\n				// wave raymarch\n				if(uExtinctionFX1.z>.5){\n					nnp=np+sin(np.x*2.5+uTime*1.5)*.3;\n					targ=nnp.y-.85*uExtinctionFX1.w;\n				}else{\n					nnp=np+vec3(colorNoiseX,colorNoiseY,colorNoiseZ)*1.05;\n					vec3 diff=nnp-vec3(3.3,4.5,0.);\n					float angle=(atan(diff.x,diff.y)+PI)/(PI*2.);\n					targ=length(diff)+sin(angle*32.*PI+uTime*1.5)*.4;\n					targ*=.475;\n					targAperture=.5+colorNoiseX*.75;\n				}\n				\n				// what's the color at np?\n				vec3 col1=uExtintionColor1;\n				vec3 col2=uExtintionColor2;\n				if(uExtinctionFX1.x>.5){\n					col1=vec3(colorNoiseX,colorNoiseY,colorNoiseZ)*.85;\n				}\n				if(uExtinctionFX1.y>.5){\n					col2=vec3(colorNoiseX,colorNoiseY,colorNoiseZ)*.85;\n				}\n				\n				if(targ<1.){\n					\n					transm*=exp(-step*col2*fc);\n					\n				}else if(targ>1.&&targ<1.+targAperture){\n					float t=(targ-1.)/targAperture;\n					\n					transm*=exp(-step*(col1*t+col2*(1.-t))*fc);\n					\n				}else if(targ<(1.+targAperture)*1.85){\n					transm*=exp(-step*col1*fc);\n					\n				}else{\n					// transm = (col1) * targAperture;\n					// transm *= exp(-step * col1 * uExtintionFactor);\n					\n				}\n			}\n			\n			// return col * uExtintionColor2 * transm;\n			col*=transm;\n			\n			return col;\n		}\n		\n		void main(){\n			vec2 screenUV=gl_FragCoord.xy*uScreenSizeInv;\n			\n			vec3 viewDir=normalize(vWorldSpaceFragPos-uCameraPos);\n			vec3 normal=vWorldSpaceNormal;\n			float refractionIndex=1.5;\n			\n			vec3 outward_normal;\n			vec3 reflected=reflect(viewDir,normal);\n			float ni_over_nt;\n			vec3 refracted;\n			float reflect_prob;\n			float cosine;\n			\n			if(dot(viewDir,normal)>0.){\n				outward_normal=-normal;\n				ni_over_nt=refractionIndex;\n				cosine=refractionIndex*dot(viewDir,normal);\n			}else{\n				outward_normal=normal;\n				ni_over_nt=1./refractionIndex;\n				cosine=-dot(viewDir,normal);\n			}\n			\n			if(refract2(viewDir,outward_normal,ni_over_nt,refracted)){\n				float r0=(1.-refractionIndex)/(1.+refractionIndex);\n				r0*=r0;\n				reflect_prob=r0+(1.-r0)*pow((1.-cosine),5.);\n			}else{\n				reflect_prob=1.;\n			}\n			\n			vec3 reflectedCol;\n			if(reflected.y<0.){\n				float t=vWorldSpaceFragPos.y/abs(reflected.y);\n				vec3 planeHitP=vWorldSpaceFragPos+reflected*t;\n				if(abs(planeHitP.x)<planeSize&&abs(planeHitP.z)<planeSize){\n					reflectedCol=planeColor;\n				}else{\n					reflectedCol=getSkyboxColor(reflected);\n				}\n			}else{\n				reflectedCol=getSkyboxColor(reflected);\n			}\n			\n			vec3 col=reflectedCol*reflect_prob*uReflectionFactor+getRefractedColor(refracted,vWorldSpaceFragPos,refractionIndex)*(1.-reflect_prob);\n			// getRefractedColor(normalize(refracted + vec3(0.0, 0.0, 0.0)), vWorldSpaceFragPos) * (1.0 - reflect_prob) * 0.333 +\n			// getRefractedColor(normalize(refracted + vec3(0.0, 0.15, 0.0)), vWorldSpaceFragPos) * (1.0 - reflect_prob) * 0.333 +\n			// getRefractedColor(normalize(refracted + vec3(0.0, 0.35, 0.0)), vWorldSpaceFragPos) * (1.0 - reflect_prob) * 0.333;\n			\n			// col = getRefractedColor(refracted, vWorldSpaceFragPos) * (1.0 - reflect_prob);\n			// vec3 col = getRefractedColor(refracted, vWorldSpaceFragPos);\n			// col = getSkyboxColor(reflected) * reflect_prob * 1.0;\n			\n			// vec3 col = viewDir;\n			// gl_FragColor = vec4(col, 1.0);\n			// return;\n			\n			col*=pow(2.,uExposure);\n			col=acesFilm(col);\n			col=pow(col,vec3(1./2.2));\n			\n			gl_FragColor=vec4(col,1.);\n			// gl_FragColor = vec4(getSkyboxColor(viewDir), 1.0) * 0.5 + vec4(viewDir * 0.5 + 0.5, 1.0);\n		}";class at{constructor(n,e){this.material=new h({uniforms:{uTexture:{type:"t",value:null}},vertexShader:"\n                varying vec2 vUv;\n\n                void main() {\n                    vUv = uv;\n                    gl_Position = vec4(position.xy, 0.0, 1.0);    \n                }",fragmentShader:"\n                uniform sampler2D uTexture;\n\n                varying vec2 vUv;\n\n                void main() {\n                    ".concat(e||"gl_FragColor = texture2D(uTexture, vUv);","  \n                }"),depthTest:!1,depthWrite:!1}),this.mesh=new f(new j(2,2),this.material),this.camera=new V(45,window.innerWidth/window.innerHeight,1,1e3),this.renderer=n,this.scene=new k,this.scene.add(this.mesh)}blit(n,e){this.renderer.setRenderTarget(e),this.material.uniforms.uTexture.value=n,this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null)}}class it{constructor(n,e,t){this.mesh=n.clone(),this.camera=e,this.renderer=t,this.scene=new k,this.scene.add(this.mesh),this.blitProgram=new at(this.renderer),this.ping=new C(innerWidth,innerHeight,{type:w,depthBuffer:!1,stencilBuffer:!1}),this.pong=new C(innerWidth,innerHeight,{type:w,depthBuffer:!1,stencilBuffer:!1}),this.frontFaceRT=new C(innerWidth,innerHeight,{type:w}),this.frontFaceMaterial=new h({uniforms:{uCameraFarInverse:{value:1/this.camera.far}},vertexShader:"\n                varying vec3 vCameraSpacePos;\n                varying vec3 vWorldSpaceNormal;\n\n                void main() {\n                    vCameraSpacePos = (modelViewMatrix * vec4(position, 1.0)).xyz;\n                    vWorldSpaceNormal = normal;\n\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);    \n                }",fragmentShader:"\n                uniform float uCameraFarInverse;\n\n                varying vec3 vWorldSpaceNormal;\n                varying vec3 vCameraSpacePos;\n\n                void main() {\n                    float currentDepth = abs(vCameraSpacePos.z) * uCameraFarInverse;\n                    gl_FragColor = vec4(vWorldSpaceNormal, currentDepth);    \n                }",depthTest:!0,depthWrite:!0,side:T}),this.material=new h({uniforms:{uScreenSize:{value:new N(innerWidth,innerHeight)},uPrevDepth:{type:"t",value:this.ping.texture},uCameraFarInverse:{value:1/this.camera.far},uSample:{value:0}},vertexShader:"\n                varying vec3 vCameraSpacePos;\n                varying vec3 vWorldSpaceNormal;\n\n                void main() {\n                    vCameraSpacePos = (modelViewMatrix * vec4(position, 1.0)).xyz;\n                    vWorldSpaceNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);\n\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);    \n                }",fragmentShader:"\n                uniform sampler2D uPrevDepth;\n                uniform float uCameraFarInverse;\n                uniform float uSample;\n                uniform vec2  uScreenSize;\n\n                varying vec3 vWorldSpaceNormal;\n                varying vec3 vCameraSpacePos;\n\n                void main() {\n\n                    vec2 uv = gl_FragCoord.xy / uScreenSize;\n                    float prevRegisteredDepth = texture2D(uPrevDepth, uv).w;\n                    float currentDepth        = abs(vCameraSpacePos.z) * uCameraFarInverse;\n\n                    if(currentDepth <= prevRegisteredDepth) {\n                        discard;\n                    }\n\n                    gl_FragColor = vec4(vWorldSpaceNormal, currentDepth);    \n                }",depthTest:!1,depthWrite:!1,side:H}),this.mesh.traverse(r=>{r instanceof f&&(r.material=this.material)})}compute(n){this.renderer.setRenderTarget(this.ping),this.renderer.clear(),this.renderer.setRenderTarget(this.pong),this.renderer.clear(),this.mesh.traverse(e=>{e instanceof f&&(e.material=this.material)}),this.material.uniforms.uCameraFarInverse.value=1/this.camera.far;for(let e=0;e<n;e++){let t=e%2===0?this.ping:this.pong,r=e%2===0?this.pong:this.ping;this.material.uniforms.uPrevDepth.value=t.texture,this.material.uniforms.uSample.value=e,this.renderer.autoClear=!1,this.renderer.setRenderTarget(r),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=!0,this.blitProgram.blit(r.texture,t)}n%2===0?this.resultBuffer=this.ping:this.resultBuffer=this.pong,this.mesh.traverse(e=>{e instanceof f&&(e.material=this.frontFaceMaterial)}),this.renderer.setRenderTarget(this.frontFaceRT),this.renderer.render(this.scene,this.camera)}getBackFaceTexture(){return this.resultBuffer.texture}getFrontFaceTexture(){return this.frontFaceRT.texture}}const lt=["object"],ct=R({__name:"ssrtGlassMesh",props:{skyBoxTexture:{},modelPath:{},modelName:{},extintionFactor:{default:5},reflectionFactor:{default:1},exposure:{default:0},extintionColor1:{default:"rgb(192,123,25)"},extintionColor2:{default:"rgb(26, 166, 192)"},extintionCol1Random:{type:Boolean,default:!1},extintionCol2Random:{type:Boolean,default:!1}},async setup(p){let n,e;const t=p,{map:r}=([n,e]=b(()=>X({map:t.skyBoxTexture})),n=await n,e(),n);r.wrapS=P,r.wrapT=P,r.magFilter=_,r.minFilter=_;const{camera:u,renderer:v,scene:pt}=U(),o=new h({uniforms:{uSkybox:{type:"t",value:r},uBackFaceBuffer:{type:"t",value:null},uFrontFaceBuffer:{type:"t",value:null},uCameraFarInverse:{value:1/u.value.far},uScreenSizeInv:{value:new N(1/window.innerWidth,1/window.innerHeight)},uCameraPos:{value:new A(0,0,0)},uTime:{value:0},uExtintionColor1:{value:new i("#fff").sub(new i(t.extintionColor1).convertLinearToSRGB())},uExtintionColor2:{value:new i("#fff").sub(new i(t.extintionColor2).convertLinearToSRGB())},uExtintionFactor:{value:t.extintionFactor},uExposure:{value:t.exposure},uReflectionFactor:{value:t.reflectionFactor},uExtinctionFX1:{value:new G(t.extintionCol1Random?1:0,t.extintionCol2Random?1:0,0,1)}},vertexShader:rt,fragmentShader:ot}),{nodes:M}=([n,e]=b(()=>L(t.modelPath,{draco:!0,decoderPath:"./draco/"})),n=await n,e(),n),c=M.Scene.getObjectByName(t.modelName),g=new it(c,u.value,v.value),d=c==null?void 0:c.clone();d==null||d.traverse(a=>{a instanceof f&&(a.material=o,a.material.side=T)});const{onAfterLoop:W}=O();return W(({elapsed:a})=>{c&&o&&(o.uniforms.uCameraPos.value=u.value.position.clone(),o.uniforms.uTime.value=a,g.compute(6),o.uniforms.uBackFaceBuffer.value=g.getBackFaceTexture(),o.uniforms.uFrontFaceBuffer.value=g.getFrontFaceTexture(),v.value.setRenderTarget(null),v.value.autoClear=!1)}),$(()=>{t.extintionFactor&&(o.uniforms.uExtintionFactor.value=t.extintionFactor),t.reflectionFactor&&(o.uniforms.uReflectionFactor.value=t.reflectionFactor),t.exposure&&(o.uniforms.uExposure.value=t.exposure),t.extintionColor1&&(o.uniforms.uExtintionColor1.value=new i("#fff").sub(new i(t.extintionColor1).convertLinearToSRGB())),t.extintionColor2&&(o.uniforms.uExtintionColor2.value=new i("#fff").sub(new i(t.extintionColor2).convertLinearToSRGB())),t.extintionCol1Random&&(o.uniforms.uExposure.value=t.exposure)}),F(()=>t.extintionCol1Random,a=>{o.uniforms.uExtinctionFX1.value.x=a?1:0},{immediate:!0}),F(()=>t.extintionCol2Random,a=>{o.uniforms.uExtinctionFX1.value.y=a?1:0},{immediate:!0}),(a,ut)=>(s(),E("primitive",{object:x(d)},null,8,lt))}}),st=I("TresPerspectiveCamera",{position:[0,8,-13],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1),ft=I("TresAmbientLight",{intensity:10},null,-1),Ct=R({__name:"ssrtGlass",setup(p){const n={clearColor:"#201919",windowSize:!0,toneMapping:K,toneMappingExposure:.8},e=D({size:[20,20],color:"#cbcb96",shadowColor:"#b8b59e",edge:.35}),t=D({extintionFactor:5,reflectionFactor:1,exposure:0,extintionColor1:"rgb(192,123,25)",extintionColor2:"rgb(26, 166, 192)",extintionCol1Random:!1,extintionCol2Random:!1}),r=new q({title:"参数"});return r.addBinding(t,"extintionFactor",{label:"消光系数",min:0,max:10,step:.1}),r.addBinding(t,"reflectionFactor",{label:"反射系数",min:0,max:2,step:.1}),r.addBinding(t,"exposure",{label:"曝光系数",min:-1,max:1,step:.1}),r.addBinding(t,"extintionColor1",{label:"消光颜色一"}),r.addBinding(t,"extintionColor2",{label:"消光颜色二"}),r.addBinding(t,"extintionCol1Random",{label:"随机色1"}),r.addBinding(t,"extintionCol2Random",{label:"随机色2"}),(u,v)=>(s(),E(Z,null,[l(x(tt)),l(x(Y),z(B(n)),{default:m(()=>[st,l(x(J),{enableDamping:""}),ft,(s(),y(S,null,{default:m(()=>[l(et,z(B(e)),null,16)]),_:1})),(s(),y(S,null,{default:m(()=>[l(ct,Q({scale:2},t,{modelPath:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/eCommerce/guanYu.glb",modelName:"statue",skyBoxTexture:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/images/skyBox/workshop_blur.jpg"}),null,16)]),_:1})),(s(),y(S,null,{default:m(()=>[l(nt,{texture:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/images/skyBox/workshop_blur.jpg"})]),_:1}))]),_:1},16)],64))}});export{Ct as default};

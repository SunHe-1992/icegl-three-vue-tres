import{Z as l,aB as p,aR as u,aG as y,a$ as d,aF as g,b0 as _,aH as z,a3 as h,a4 as v,o as t,c as x,V as m,a8 as S,a9 as P,af as C,$ as w,k as b,a as i,C as c,D as T,v as M,a6 as W,aA as D}from"./vendor.63b8dc9b1704502812662.js";import{_ as F}from"./loading.vue_vue_type_script_setup_true_lang.2c85402e1704502812662.js";import{_ as B}from"./pagesShow.vue_vue_type_script_setup_true_lang.1639c3971704502812662.js";import"./vanilla-307d3a93.esm.47fd99ca1704502812662.js";import"./_commonjsHelpers.725317a41704502812662.js";import"./LineSegments2.ff6ac8781704502812662.js";const q="varying vec3 vWorldPos;\nuniform float fireScale;\nuniform vec3 offsetPositin;\nvarying vec3 vUnCameraPosition;\nvoid main(){\n    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n    vWorldPos=(modelMatrix*vec4(position,1.)).xyz;\n    vUnCameraPosition=cameraPosition-offsetPositin;\n    vWorldPos.x=vWorldPos.x-offsetPositin.x;\n    vWorldPos.y=vWorldPos.y-offsetPositin.y-.46*fireScale;\n    vWorldPos.z=vWorldPos.z-offsetPositin.z;\n    vWorldPos=vWorldPos/fireScale;\n}",I="uniform vec3 color;\nuniform float time;\nuniform float seed;\nuniform mat4 invModelMatrix;\nuniform vec3 scale;\n\nuniform vec4 noiseScale;\nuniform float magnitude;\nuniform float lacunarity;\nuniform float gain;\n\nuniform sampler2D fireTex;\n\nvarying vec3 vWorldPos;\nvarying vec3 vUnCameraPosition;\n\n// GLSL simplex noise function by ashima / https://github.com/ashima/webgl-noise/blob/master/src/noise3D.glsl\n// -------- simplex noise\nvec3 mod289(vec3 x){\n    return x-floor(x*(1./289.))*289.;\n}\n\nvec4 mod289(vec4 x){\n    return x-floor(x*(1./289.))*289.;\n}\n\nvec4 permute(vec4 x){\n    return mod289(((x*34.)+1.)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r){\n    return 1.79284291400159-.85373472095314*r;\n}\n\nfloat snoise(vec3 v){\n    const vec2 C=vec2(1./6.,1./3.);\n    const vec4 D=vec4(0.,.5,1.,2.);\n    \n    // First corner\n    vec3 i=floor(v+dot(v,C.yyy));\n    vec3 x0=v-i+dot(i,C.xxx);\n    \n    // Other corners\n    vec3 g=step(x0.yzx,x0.xyz);\n    vec3 l=1.-g;\n    vec3 i1=min(g.xyz,l.zxy);\n    vec3 i2=max(g.xyz,l.zxy);\n    \n    //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n    //   x1 = x0 - i1  + 1.0 * C.xxx;\n    //   x2 = x0 - i2  + 2.0 * C.xxx;\n    //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n    vec3 x1=x0-i1+C.xxx;\n    vec3 x2=x0-i2+C.yyy;// 2.0*C.x = 1/3 = C.y\n    vec3 x3=x0-D.yyy;// -1.0+3.0*C.x = -0.5 = -D.y\n    \n    // Permutations\n    i=mod289(i);\n    vec4 p=permute(permute(permute(\n                i.z+vec4(0.,i1.z,i2.z,1.))\n                +i.y+vec4(0.,i1.y,i2.y,1.))\n                +i.x+vec4(0.,i1.x,i2.x,1.));\n                \n                // Gradients: 7x7 points over a square, mapped onto an octahedron.\n                // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n                float n_=.142857142857;// 1.0/7.0\n                vec3 ns=n_*D.wyz-D.xzx;\n                \n                vec4 j=p-49.*floor(p*ns.z*ns.z);//  mod(p,7*7)\n                \n                vec4 x_=floor(j*ns.z);\n                vec4 y_=floor(j-7.*x_);// mod(j,N)\n                \n                vec4 x=x_*ns.x+ns.yyyy;\n                vec4 y=y_*ns.x+ns.yyyy;\n                vec4 h=1.-abs(x)-abs(y);\n                \n                vec4 b0=vec4(x.xy,y.xy);\n                vec4 b1=vec4(x.zw,y.zw);\n                \n                //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n                //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n                vec4 s0=floor(b0)*2.+1.;\n                vec4 s1=floor(b1)*2.+1.;\n                vec4 sh=-step(h,vec4(0.));\n                \n                vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;\n                vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;\n                \n                vec3 p0=vec3(a0.xy,h.x);\n                vec3 p1=vec3(a0.zw,h.y);\n                vec3 p2=vec3(a1.xy,h.z);\n                vec3 p3=vec3(a1.zw,h.w);\n                \n                //Normalise gradients\n                vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));\n                p0*=norm.x;\n                p1*=norm.y;\n                p2*=norm.z;\n                p3*=norm.w;\n                \n                // Mix final noise value\n                vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);\n                m=m*m;\n                return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));\n            }\n            // simplex noise --------\n            \n            float turbulence(vec3 p){\n                float sum=0.;\n                float freq=1.;\n                float amp=1.;\n                \n                for(int i=0;i<OCTIVES;i++){\n                    sum+=abs(snoise(p*freq))*amp;\n                    freq*=lacunarity;\n                    amp*=gain;\n                }\n                \n                return sum;\n            }\n            \n            vec4 samplerFire(vec3 p,vec4 scale){\n                vec2 st=vec2(sqrt(dot(p.xz,p.xz)),p.y);\n                \n                if(st.x<=0.||st.x>=1.||st.y<=0.||st.y>=1.)return vec4(0.);\n                \n                p.y-=(seed+time)*scale.w;\n                p*=scale.xyz;\n                \n                st.y+=sqrt(st.y)*magnitude*turbulence(p);\n                \n                if(st.y<=0.||st.y>=1.)return vec4(0.);\n                \n                return texture2D(fireTex,st);\n            }\n            \n            vec3 localize(vec3 p){\n                return(invModelMatrix*vec4(p,1.)).xyz;\n            }\n            \n            void main(){\n                vec3 rayPos=vWorldPos;\n                vec3 rayDir=normalize(rayPos-vUnCameraPosition);\n                float rayLen=.0288*length(scale.xyz);\n                \n                vec4 col=vec4(0.);\n                \n                for(int i=0;i<ITERATIONS;i++){\n                    rayPos+=rayDir*rayLen;\n                    \n                    vec3 lp=localize(rayPos);\n                    \n                    lp.y+=.5;\n                    lp.xz*=2.;\n                    col+=samplerFire(lp,noiseScale);\n                }\n                if(col.x<.12&&col.y<.12&&col.z<.12){\n                    gl_FragColor=vec4(0,0,0,0);\n                    // gl_FragColor=col;\n                }else{\n                    gl_FragColor=col;\n                    // gl_FragColor=vec4(mix(color,col.xyz,.1),1.);\n                }\n                // gl_FragColor=vec4(1.,.0,1.,1.);\n            }\n            ",V=["position","scale"],A=m("TresSphereGeometry",{args:[1,32,16]},null,-1),R=l({__name:"fireA",props:{position:{default:[100,19,0]},fireScale:{default:60},magnitude:{default:1.3},lacunarity:{default:2},gain:{default:1}},async setup(r){let n,a;const e=r,{map:s}=([n,a]=p(()=>u({map:"./plugins/digitalCity/image/fire.png"})),n=await n,a(),n),o={defines:{ITERATIONS:"20",OCTIVES:"3"},uniforms:{fireScale:{type:"f",value:e.fireScale},offsetPositin:{type:"f",value:e.position},fireTex:{type:"t",value:s},color:{type:"c",value:new y(4095)},time:{type:"f",value:0},seed:{type:"f",value:Math.random()*19.19},invModelMatrix:{type:"m4",value:new d},scale:{type:"v3",value:new g(1,1,1)},noiseScale:{type:"v4",value:new _(1,2,1,.3)},magnitude:{type:"f",value:e.magnitude},lacunarity:{type:"f",value:e.lacunarity},gain:{type:"f",value:e.gain}},vertexShader:q,fragmentShader:I,transparent:!0,depthWrite:!0,depthTest:!0,side:z},{onLoop:f}=h();return f(()=>{o.uniforms.time.value+=.01}),v(()=>{e.fireScale&&(o.uniforms.fireScale.value=e.fireScale),e.magnitude&&(o.uniforms.magnitude.value=e.magnitude),e.lacunarity&&(o.uniforms.lacunarity.value=e.lacunarity),e.gain&&(o.uniforms.gain.value=e.gain)}),(E,N)=>(t(),x("TresMesh",{position:e.position,scale:[e.fireScale,e.fireScale,e.fireScale],renderOrder:9999},[A,m("TresShaderMaterial",S(P(o)),null,16)],8,V))}}),U=l({__name:"fireA",setup(r){const n=new C({title:"火-参数",expanded:!0}),a=w({fireScale:60,magnitude:1.3,lacunarity:2,gain:1});n.addBinding(a,"fireScale",{label:"大小",min:10,max:300,step:10}),n.addBinding(a,"magnitude",{label:"magnitude",min:.05,max:3,step:.05}),n.addBinding(a,"lacunarity",{label:"lacunarity",min:.1,max:10,step:.2}),n.addBinding(a,"gain",{label:"gain",min:.1,max:2,step:.1});const e=b();return v(()=>{e.value&&e.value.$refs.perspectiveCameraRef.position.set(580,360,500)}),(s,o)=>(t(),x(T,null,[i(F),i(B,{ref_key:"pagesShowRef",ref:e},{ability:c(()=>[(t(),M(D,null,{default:c(()=>[i(R,W(a,{position:[200,19,120]}),null,16)]),_:1}))]),_:1},512)],64))}});export{U as default};
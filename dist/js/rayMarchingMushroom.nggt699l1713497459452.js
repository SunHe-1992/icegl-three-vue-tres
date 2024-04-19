import{a1 as f,ap as _,aH as s,a6 as x,o as v,c as y,Y as n,aa as d,ab as u,a9 as m,a7 as w,r as g,x as C,E as q,a8 as M,a as p,L as S,ac as k}from"./vendor.KJlYgoAc1713497459452.js";const z="varying vec2 vUv;\nvoid main(){\n	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n	vUv=uv;\n}",P="#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\n\nmat2 rot2D(float angle){\n  float s=sin(angle);\n  float c=cos(angle);\n  return mat2(c,-s,s,c);\n}\n\nfloat sdCutHollowSphere(vec3 p,float r,float h,float t)\n{\n  float w=sqrt(r*r-h*h);\n  vec2 q=vec2(length(p.xz),p.y);\n  return((h*q.x<w*q.y)?length(q-vec2(w,h)):\n  abs(length(q)-r))-t;\n}\nvec4 sdstripe(vec3 p,vec3 color){\n  p.xz=abs(p.xz);\n  float d1=sdCutHollowSphere(p-vec3(.0,-3.3,0.),.8,.01,.01);\n  float d2=sdCutHollowSphere(p-vec3(.9,-3.3,.9),.5,.005,.01);\n  float d=min(d1,d2);\n  return vec4(d,color);\n}\nvec4 sdCutSphere(vec3 p,float r,float h,vec3 color)\n{\n  \n  float w=sqrt(r*r-h*h);\n  \n  vec2 q=vec2(length(p.xz),p.y);\n  float s=max((h-r)*q.x*q.x+w*w*(h+r-2.*q.y),h*q.x-w*q.y);\n  float d=(s<0.)?length(q)-r:\n  (q.x<w)?h-q.y:\n  length(q-vec2(w,h));\n  \n  return vec4(d,color);\n}\nvec4 sdPlane(vec3 p,vec3 color){\n  return vec4(-p.y+.2,color);\n  \n}\nvec4 sdCappedCone(vec3 p,vec3 a,vec3 b,float ra,float rb,vec3 color)\n{\n  float rba=rb-ra;\n  float baba=dot(b-a,b-a);\n  float papa=dot(p-a,p-a);\n  float paba=dot(p-a,b-a)/baba;\n  float x=sqrt(papa-paba*paba*baba);\n  float cax=max(0.,x-((paba<.5)?ra:rb));\n  float cay=abs(paba-.5)-.5;\n  float k=rba*rba+baba;\n  float f=clamp((rba*(x-ra)+paba*baba)/k,0.,1.);\n  float cbx=x-ra-f*rba;\n  float cby=paba-f;\n  float s=(cbx<0.&&cay<0.)?-1.:1.;\n  return vec4(s*sqrt(min(cax*cax+cay*cay*baba,\n      cbx*cbx+cby*cby*baba)),color);\n    }\n    float smin(float d1,float d2,float k){\n      float h=clamp(.5+.5*(d2-d1)/k,0.,1.);\n      return mix(d2,d1,h)-k*h*(1.-h);\n    }\n    vec4 colorMin(vec4 a,vec4 b){\n      if(a.x<b.x){\n        return a;\n      }else{\n        return b;\n      }\n    }\n    //模糊摆动，y的值越大，摆动频率越大\n    vec3 bendPoint(vec3 p,float k)\n    {\n      float c=cos(k*p.y);\n      float s=sin(k*p.y);\n      mat2 m=mat2(c,-s,s,c);\n      vec3 q=vec3(m*p.xy,p.z);\n      return q;\n    }\n    vec4 map(vec3 p){\n      vec3 q=p;\n      p=bendPoint(p,sin(u_time*5.));\n      vec3 pp2=vec3(0.,.8,0.);\n      vec3 pp1=vec3(0.,-.2,0.);\n      vec4 CappedConesdf=sdCappedCone(-p,pp1,pp2,.2,.1,vec3(.8667,.8667,.7216));\n      vec4 CutSpheresdf=sdCutSphere(-p-vec3(0.,.4,0.),.5,.2,vec3(.9608,.4667,.4))-.1;\n      vec4 entity=colorMin(CappedConesdf,CutSpheresdf);\n      entity=colorMin(entity,sdstripe(p*4.,vec3(3.5))/4.);\n      entity=colorMin(entity,sdPlane(q,vec3(.4196,.5529,.3647)));\n      return entity;\n    }\n    \n    void main(){\n      vec3 ro=vec3(0.,0.,-8.);//起始位置\n      vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n      ro.xz*=rot2D(-u_time);\n      rd.xz*=rot2D(-u_time);\n      ro.y-=4.;\n      rd.y+=.5;\n      float t=0.;\n      vec4 color=vec4(0.);\n      for(int i=0;i<80;i++){\n        vec3 p=ro+rd*t;\n        vec4 d=map(p)/1.8;\n        t+=d.x;\n        //优化效率\n        if(t>100.||d.x<.001){\n          break;\n        }\n        color=vec4(t*d.yzw*.13,1.);\n      }\n      \n      gl_FragColor=color;\n      \n    }",T=["rotation"],L={ref:"TresTubeGeometryRef",args:[1e3,1e3]},H=f({__name:"rayMarchingMaterialMushroom",setup(h){const{onLoop:o,onAfterLoop:r}=m(),e={transparent:!0,depthWrite:!0,depthTest:!0,side:_,vertexShader:z,fragmentShader:P,uniforms:{u_resolution:{value:new s(window.innerWidth,window.innerHeight)},u_mouse:{value:new s(0,0)},u_time:{value:0}}},c=window.innerWidth/2,l=window.innerHeight/2;let a=0,i=0;function b(t){a=t.clientX-c,i=t.clientY-l}return document.addEventListener("mousemove",b,!1),x(()=>{}),o(({elapsed:t})=>{e.uniforms.u_time.value+=.001,e.uniforms.u_mouse.value=new s(a,i)}),r(()=>{}),(t,V)=>(v(),y("TresMesh",{ref:"MeshRef",rotation:[Math.PI/2,0,0]},[n("TresPlaneGeometry",L,null,512),n("TresShaderMaterial",d(u(e)),null,16)],8,T))}}),D={ref:"perspectiveCameraRef",position:[0,1500,0],fov:45,near:1,far:1e4},E=n("TresAmbientLight",{color:"#ffffff"},null,-1),R=n("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1),U=f({__name:"rayMarchingMushroom",setup(h){const o={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0},r={autoRotate:!1,enableDamping:!0},{onLoop:e}=m();return e(({delta:c})=>{}),w(()=>{}),(c,l)=>{const a=g("TresCanvas");return v(),C(a,M(o,{"window-size":""}),{default:q(()=>[n("TresPerspectiveCamera",D,null,512),p(S(k),d(u(r)),null,16),E,R,p(H)]),_:1},16)}}});export{U as default};
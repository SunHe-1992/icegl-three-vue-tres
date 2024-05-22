import{bd as d,aB as s,aC as i,bm as a,ax as n,bQ as h}from"./vendor.lj85K5ev1716383888730.js";import{P as m,F as r}from"./Pass.-q9LWgSK1716383888730.js";const u={name:"AfterimageShader",uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:"\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",fragmentShader:"\n\n		uniform float damp;\n\n		uniform sampler2D tOld;\n		uniform sampler2D tNew;\n\n		varying vec2 vUv;\n\n		vec4 when_gt( vec4 x, float y ) {\n\n			return max( sign( x - y ), 0.0 );\n\n		}\n\n		void main() {\n\n			vec4 texelOld = texture2D( tOld, vUv );\n			vec4 texelNew = texture2D( tNew, vUv );\n\n			texelOld *= damp * when_gt( texelOld, 0.1 );\n\n			gl_FragColor = max(texelNew, texelOld);\n\n		}"};class v extends m{constructor(e=.96){super(),this.shader=u,this.uniforms=d.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new s(window.innerWidth,window.innerHeight,{magFilter:i,type:a}),this.textureOld=new s(window.innerWidth,window.innerHeight,{magFilter:i,type:a}),this.compFsMaterial=new n({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new r(this.compFsMaterial),this.copyFsMaterial=new h,this.copyFsQuad=new r(this.copyFsMaterial)}render(e,t,o){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=o.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.map=this.textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this.copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.copyFsQuad.render(e));const l=this.textureOld;this.textureOld=this.textureComp,this.textureComp=l}setSize(e,t){this.textureComp.setSize(e,t),this.textureOld.setSize(e,t)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}export{v as A};
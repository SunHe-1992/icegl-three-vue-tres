import{Z as n,$ as o,as as s,o as i,c as r,a as e,C as m,D as p,a6 as l}from"./vendor.7da8be181706685333825.js";import{_}from"./heatmapJS.vue_vue_type_script_setup_true_lang.47638f861706685333825.js";import{_ as c}from"./loading.vue_vue_type_script_setup_true_lang.8df3138d1706685333825.js";import{_ as d}from"./pagesShow.vue_vue_type_script_setup_true_lang.6764079a1706685333825.js";import"./heatmap.1d69ca441706685333825.js";import"./_commonjsHelpers.725317a41706685333825.js";import"./vanilla-307d3a93.esm.911d1b851706685333825.js";import"./LineSegments2.502fb1d51706685333825.js";const P=n({__name:"heatmap",setup(f){const a=o({show2dCanvas:!0,heightRatio:20,position:[0,20,0],Plane:[1e3,1e3,1e3,1e3]}),t=new s({title:"参数",expanded:!0});return t.addBinding(a,"show2dCanvas",{label:"显示二维图"}),t.addBinding(a,"heightRatio",{label:"高度",min:10,max:100,step:10}),(h,u)=>(i(),r(p,null,[e(c),e(d,null,{ability:m(()=>[e(_,l({ref:"heatmapJSRef"},a),null,16)]),_:1})],64))}});export{P as default};
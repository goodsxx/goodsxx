import{g as _,h as g,i as m,s,j as f,v as y,k as R,l as a,C as h,_ as r}from"./app-203f50af.js";const w=e=>JSON.parse(decodeURIComponent(e));var V=_({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const u=g(),i=m(!0),t=s(),l=s(),n=s(),o=f(()=>y({},u,w(e.settings))),d=async()=>{const[{ReplStore:v,Repl:p},{default:c}]=await Promise.all([r(()=>import("./vue-repl-c535b3b2.js"),["assets/vue-repl-c535b3b2.js","assets/app-203f50af.js","assets/commonjs-dynamic-modules-302442b1.js","assets/commonjsHelpers-042e6b4d.js","assets/utils-a5e1dbae-143be013.js"]),r(()=>import("./codemirror-editor-60e1cb4c.js"),["assets/codemirror-editor-60e1cb4c.js","assets/utils-a5e1dbae-143be013.js","assets/app-203f50af.js"])]);t.value=p,n.value=c,l.value=new v({serializedState:decodeURIComponent(e.files)}),o.value.vueVersion&&await l.value.setVueVersion(o.value.vueVersion)};return R(async()=>{await d(),i.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[i.value?a(h,{class:"preview-loading",height:192}):null,t.value?a(t.value,{editor:n.value,store:l.value,autoResize:!0,...o.value,layout:"horizontal"}):null])])]}});export{V as default};

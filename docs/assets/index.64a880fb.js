import{E as m}from"./md-editor-v3.es.72d05168.js";import"./index.c414f892.js";import{d as s,H as i,I as p,n as l}from"./vendor.3635d60d.js";var u=(e,o)=>{const t=e.__vccOpts||e;for(const[n,r]of o)t[n]=r;return t};const c=s({components:{MdEditor:m},data(){return{text:`# 123 
\u54C8\u54C8\u54C8\u54C8
# 456`}},methods:{markedHeading(e,o,t){return`<h${o} id="${t}" ddd>${e}</h${o}>`}}});function f(e,o,t,n,r,_){const d=p("md-editor");return l(),i(d,{modelValue:e.text,"onUpdate:modelValue":o[0]||(o[0]=a=>e.text=a),"marked-heading":e.markedHeading,"preview-only":""},null,8,["modelValue","marked-heading"])}var v=u(c,[["render",f]]);export{v as default};

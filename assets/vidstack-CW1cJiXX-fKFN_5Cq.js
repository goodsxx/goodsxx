import{aj as c,a as n,l as a,e as h,p as u,b9 as d,y as l}from"./vidstack-CSaHpIQV-DOQ0QhVh.js";function p(r,t=3e3){const s=c();return setTimeout(()=>{const i=r();i&&s.reject(i)},t),s}class f{constructor(t){this.Lb=t,this.sc=n(""),this.referrerPolicy=null,t.setAttribute("frameBorder","0"),t.setAttribute("aria-hidden","true"),t.setAttribute("allow","autoplay; fullscreen; encrypted-media; picture-in-picture; accelerometer; gyroscope"),this.referrerPolicy!==null&&t.setAttribute("referrerpolicy",this.referrerPolicy)}get iframe(){return this.Lb}setup(){a(window,"message",this.Xi.bind(this)),a(this.Lb,"load",this.gd.bind(this)),h(this.Mb.bind(this))}Mb(){const t=this.sc();if(!t.length){this.Lb.setAttribute("src","");return}const s=u(()=>this.mg());this.Lb.setAttribute("src",d(t,s))}se(t,s){var i;(i=this.Lb.contentWindow)==null||i.postMessage(JSON.stringify(t),s??"*")}Xi(t){var o;const s=this.Nb();if((t.source===null||t.source===((o=this.Lb)==null?void 0:o.contentWindow))&&(!l(s)||s===t.origin)){try{const e=JSON.parse(t.data);e&&this.te(e,t);return}catch{}t.data&&this.te(t.data,t)}}}export{f as E,p as t};
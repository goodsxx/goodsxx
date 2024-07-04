/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var P;const w=window,g=w.trustedTypes,D=g?g.createPolicy("lit-html",{createHTML:s=>s}):void 0,G="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,Y="?"+_,et=`<${Y}>`,f=document,x=()=>f.createComment(""),T=s=>s===null||typeof s!="object"&&typeof s!="function",q=Array.isArray,it=s=>q(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",L=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,O=/>/g,v=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,j=/"/g,F=/^(?:script|style|textarea|title)$/i,st=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),ft=st(1),m=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),z=new WeakMap,p=f.createTreeWalker(f,129,null,!1);function J(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return D!==void 0?D.createHTML(t):t}const nt=(s,t)=>{const e=s.length-1,i=[];let n,r=t===2?"<svg>":"",o=H;for(let $=0;$<e;$++){const l=s[$];let h,c,a=-1,u=0;for(;u<l.length&&(o.lastIndex=u,c=o.exec(l),c!==null);)u=o.lastIndex,o===H?c[1]==="!--"?o=V:c[1]!==void 0?o=O:c[2]!==void 0?(F.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=v):c[3]!==void 0&&(o=v):o===v?c[0]===">"?(o=n??H,a=-1):c[1]===void 0?a=-2:(a=o.lastIndex-c[2].length,h=c[1],o=c[3]===void 0?v:c[3]==='"'?j:W):o===j||o===W?o=v:o===V||o===O?o=H:(o=v,n=void 0);const A=o===v&&s[$+1].startsWith("/>")?" ":"";r+=o===H?l+et:a>=0?(i.push(h),l.slice(0,a)+G+l.slice(a)+_+A):l+_+(a===-2?(i.push(void 0),$):A)}return[J(s,r+(s[e]||"<?>")+(t===2?"</svg>":"")),i]};class C{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,o=0;const $=t.length-1,l=this.parts,[h,c]=nt(t,e);if(this.el=C.createElement(h,i),p.currentNode=this.el.content,e===2){const a=this.el.content,u=a.firstChild;u.remove(),a.append(...u.childNodes)}for(;(n=p.nextNode())!==null&&l.length<$;){if(n.nodeType===1){if(n.hasAttributes()){const a=[];for(const u of n.getAttributeNames())if(u.endsWith(G)||u.startsWith(_)){const A=c[o++];if(a.push(u),A!==void 0){const tt=n.getAttribute(A.toLowerCase()+G).split(_),b=/([.?@])?(.*)/.exec(A);l.push({type:1,index:r,name:b[2],strings:tt,ctor:b[1]==="."?rt:b[1]==="?"?ht:b[1]==="@"?dt:S})}else l.push({type:6,index:r})}for(const u of a)n.removeAttribute(u)}if(F.test(n.tagName)){const a=n.textContent.split(_),u=a.length-1;if(u>0){n.textContent=g?g.emptyScript:"";for(let A=0;A<u;A++)n.append(a[A],x()),p.nextNode(),l.push({type:2,index:++r});n.append(a[u],x())}}}else if(n.nodeType===8)if(n.data===Y)l.push({type:2,index:r});else{let a=-1;for(;(a=n.data.indexOf(_,a+1))!==-1;)l.push({type:7,index:r}),a+=_.length-1}r++}}static createElement(t,e){const i=f.createElement("template");return i.innerHTML=t,i}}function y(s,t,e=s,i){var n,r,o,$;if(t===m)return t;let l=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const h=T(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(s),l._$AT(s,e,i)),i!==void 0?((o=($=e)._$Co)!==null&&o!==void 0?o:$._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=y(s,l._$AS(s,t.values),l,i)),t}class ot{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:f).importNode(i,!0);p.currentNode=r;let o=p.nextNode(),$=0,l=0,h=n[0];for(;h!==void 0;){if($===h.index){let c;h.type===2?c=new M(o,o.nextSibling,this,t):h.type===1?c=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(c=new $t(o,this,t)),this._$AV.push(c),h=n[++l]}$!==(h==null?void 0:h.index)&&(o=p.nextNode(),$++)}return p.currentNode=f,r}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class M{constructor(t,e,i,n){var r;this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=y(this,t,e),T(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==m&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):it(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==d&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(f.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=C.createElement(J(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(i);else{const o=new ot(r,this),$=o.u(this.options);o.v(i),this.$($),this._$AH=o}}_$AC(t){let e=z.get(t.strings);return e===void 0&&z.set(t.strings,e=new C(t)),e}T(t){q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new M(this.k(x()),this.k(x()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class S{constructor(t,e,i,n,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const r=this.strings;let o=!1;if(r===void 0)t=y(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==m,o&&(this._$AH=t);else{const $=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=y(this,$[i+l],e,l),h===m&&(h=this._$AH[l]),o||(o=!T(h)||h!==this._$AH[l]),h===d?t=d:t!==d&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!n&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}const lt=g?g.emptyScript:"";class ht extends S{constructor(){super(...arguments),this.type=4}j(t){t&&t!==d?this.element.setAttribute(this.name,lt):this.element.removeAttribute(this.name)}}class dt extends S{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=y(this,t,e,0))!==null&&i!==void 0?i:d)===m)return;const n=this._$AH,r=t===d&&n!==d||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==d&&(n===d||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class $t{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){y(this,t)}}const Z=w.litHtmlPolyfillSupport;Z==null||Z(C,M),((P=w.litHtmlVersions)!==null&&P!==void 0?P:w.litHtmlVersions=[]).push("2.8.0");const Q=(s,t,e)=>{var i,n;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=r._$litPart$;if(o===void 0){const $=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new M(t.insertBefore(x(),$),$,void 0,e??{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=s=>s.strings===void 0,at={},ut=(s,t=at)=>s._$AH=t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},k=s=>(...t)=>({_$litDirective$:s,values:t});let R=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=(s,t)=>{var e,i;const n=s._$AN;if(n===void 0)return!1;for(const r of n)(i=(e=r)._$AO)===null||i===void 0||i.call(e,t,!1),N(r,t);return!0},E=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while((e==null?void 0:e.size)===0)},X=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),vt(t)}};function At(s){this._$AN!==void 0?(E(this),this._$AM=s,X(this)):this._$AM=s}function _t(s,t=!1,e=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(i))for(let r=e;r<i.length;r++)N(i[r],!1),E(i[r]);else i!=null&&(N(i,!1),E(i));else N(this,s)}const vt=s=>{var t,e,i,n;s.type==K.CHILD&&((t=(i=s)._$AP)!==null&&t!==void 0||(i._$AP=_t),(e=(n=s)._$AQ)!==null&&e!==void 0||(n._$AQ=At))};class pt extends R{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),X(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,n;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)===null||i===void 0||i.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),e&&(N(this,t),E(this))}setValue(t){if(ct(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=s=>s??d,B=new WeakMap,yt=k(class extends pt{render(s){return d}update(s,[t]){var e;const i=t!==this.G;return i&&this.G!==void 0&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=t,this.dt=(e=s.options)===null||e===void 0?void 0:e.host,this.ot(this.lt=s.element)),d}ot(s){var t;if(typeof this.G=="function"){const e=(t=this.dt)!==null&&t!==void 0?t:globalThis;let i=B.get(e);i===void 0&&(i=new WeakMap,B.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.dt,void 0),i.set(this.G,s),s!==void 0&&this.G.call(this.dt,s)}else this.G.value=s}get rt(){var s,t,e;return typeof this.G=="function"?(t=B.get((s=this.dt)!==null&&s!==void 0?s:globalThis))===null||t===void 0?void 0:t.get(this.G):(e=this.G)===null||e===void 0?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class I extends R{constructor(t){if(super(t),this.et=d,t.type!==K.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===d||t==null)return this.ft=void 0,this.et=t;if(t===m)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}I.directiveName="unsafeHTML",I.resultType=1;const Ht=k(I);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class U extends I{}U.directiveName="unsafeSVG",U.resultType=2;const Nt=k(U);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=k(class extends R{constructor(){super(...arguments),this.key=d}render(s,t){return this.key=s,t}update(s,[t,e]){return t!==this.key&&(ut(s),this.key=t),e}});class Tt extends HTMLElement{constructor(){super(...arguments),this.rootPart=null}connectedCallback(){this.rootPart=Q(this.render(),this,{renderBefore:this.firstChild}),this.rootPart.setConnected(!0)}disconnectedCallback(){var t;(t=this.rootPart)==null||t.setConnected(!1),this.rootPart=null,Q(null,this)}}export{d as A,Q as D,Tt as L,Ht as a,pt as c,k as e,xt as i,mt as l,yt as n,Nt as o,K as t,ft as x};

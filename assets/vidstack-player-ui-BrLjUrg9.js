import{C as l,x as $s,o as Hs,G as u,F as fs,H as a,u as x,e as c,aZ as bs,U as Cs,a_ as qs,s as o,a$ as Tt,y as bt,b0 as ys,a as ks,b1 as ws,aI as Ys,c as Os,a2 as Ls,d as s}from"./vidstack-CSaHpIQV-DOQ0QhVh.js";import{F as Ss,t as Ts,b as vs,T as As,c as Zs,A as zs,C as Fs,d as Ds,L as js,e as Js,P as Ks,f as Us,S as Is,g as Xs,h as Qs,i as Vs,j as Bs,k as Rs,Q as Ps,l as Gs,m as Es,n as _s,V as Ms,o as Ws,p as ta,G as sa,q as aa,r as ea,s as ia,u as na,v as ca,w as oa,x as ra,y as ha,z as ma,R as la,B as pa,D as ga,E as ua,H as xa,I as da,J as Na,K as Ha,N as fa}from"./vidstack-CpPO9Fgt-D86AHuDa.js";import{L as La,x as Ta}from"./vidstack-rsZGrNIW-CJxWesQC.js";import"./app-DbRsw7jK.js";class ba extends l{onAttach(t){t.style.pointerEvents||$s(t,"pointer-events","auto")}}class Ca extends l{constructor(){super(),new Ss}onConnect(t){Hs(u(()=>{if(!this.connectScope)return;this.xb();const e=fs(Ts);Hs(()=>{const i=this.Bd();i&&e._e(i)})}))}xb(){const t=this.Bd(),e=fs(Ts);t&&e.Ze(t)}Bd(){const t=this.el.firstElementChild;return(t==null?void 0:t.localName)==="button"||(t==null?void 0:t.getAttribute("role"))==="button"?t:this.el}}class ya extends vs{}const va=ys('<img loading="eager" decoding="async" aria-hidden="true">'),H=class H extends a(HTMLElement,As){constructor(){super(...arguments),this.Wm=this.nn()}onSetup(){this.a=x(),this.$state.img.set(this.Wm)}onConnect(){const{src:t,crossOrigin:e}=this.$state;this.Wm.parentNode!==this&&this.prepend(this.Wm),c(()=>{o(this.Wm,"src",t()),o(this.Wm,"crossorigin",e())})}nn(){return bs(va)}};H.tagName="media-thumbnail",H.attrs={crossOrigin:"crossorigin"};let N=H;const Ct=class Ct extends a(HTMLElement,Zs){onConnect(){c(()=>{this.textContent=this.$state.timeText()})}};Ct.tagName="media-time";let C=Ct;const yt=class yt extends a(HTMLElement,zs){};yt.tagName="media-airplay-button";let y=yt;const vt=class vt extends a(HTMLElement,Fs){};vt.tagName="media-caption-button";let v=vt;const Wt=class Wt extends a(HTMLElement,Ds){};Wt.tagName="media-fullscreen-button";let W=Wt;const $t=class $t extends a(HTMLElement,js){};$t.tagName="media-live-button";let $=$t;const qt=class qt extends a(HTMLElement,Js){};qt.tagName="media-mute-button";let q=qt;const kt=class kt extends a(HTMLElement,Ks){};kt.tagName="media-pip-button";let k=kt;const wt=class wt extends a(HTMLElement,Us){};wt.tagName="media-play-button";let w=wt;const Yt=class Yt extends a(HTMLElement,Is){};Yt.tagName="media-seek-button";let Y=Yt;function g(m,t){u(()=>{if(!m.connectScope)return;const e=m.querySelector("template");e&&c(()=>{const i=m.getOptions();Tt(e,i.length,(n,h)=>{const{label:r,value:d}=i[h],p=n.querySelector('[data-part="label"]');n.setAttribute("value",d),p&&(bt(r)?p.textContent=r:c(()=>{p.textContent=r()})),t==null||t(n,i[h],h)})})})}const Ot=class Ot extends a(HTMLElement,Xs){onConnect(){g(this)}};Ot.tagName="media-audio-radio-group";let O=Ot;const St=class St extends a(HTMLElement,Qs){onConnect(){g(this)}};St.tagName="media-captions-radio-group";let S=St;const At=class At extends a(HTMLElement,Vs){};At.tagName="media-menu";let A=At;const Zt=class Zt extends a(HTMLElement,vs){};Zt.tagName="media-menu-button";let Z=Zt;const zt=class zt extends a(HTMLElement,ya){};zt.tagName="media-menu-item";let z=zt;const Ft=class Ft extends a(HTMLElement,Bs){};Ft.tagName="media-menu-items";let F=Ft;const Dt=class Dt extends a(HTMLElement,Rs){onConnect(){g(this)}};Dt.tagName="media-speed-radio-group";let D=Dt;const jt=class jt extends a(HTMLElement,Ps){onConnect(){g(this,(t,e)=>{const i=e.bitrate,n=t.querySelector('[data-part="bitrate"]');i&&n&&c(()=>{n.textContent=i()||""})})}};jt.tagName="media-quality-radio-group";let j=jt;const Jt=class Jt extends N{onSetup(){super.onSetup(),this.ia=Cs(Ws.state)}onConnect(){super.onConnect(),c(this.Yh.bind(this))}Yh(){const{duration:t,clipStartTime:e}=this.a.$state;this.time=e()+this.ia.pointerRate()*t()}};Jt.tagName="media-slider-thumbnail";let J=Jt;const f=class f extends a(HTMLElement,Gs){onConnect(){c(()=>{this.textContent=this.getValueText()})}};f.tagName="media-slider-value",f.attrs={padMinutes:{converter:qs}};let K=f;const Kt=class Kt extends a(HTMLElement,Es){};Kt.tagName="media-time-slider";let U=Kt;const Ut=class Ut extends a(HTMLElement,_s){};Ut.tagName="media-slider-preview";let I=Ut;const It=class It extends a(HTMLElement,Ms){};It.tagName="media-volume-slider";let X=It;const Xt=class Xt extends a(HTMLElement,ta){};Xt.tagName="media-captions";let Q=Xt;const Qt=class Qt extends a(HTMLElement,sa){};Qt.tagName="media-gesture";let V=Qt;const Vt=class Vt extends a(HTMLElement,aa){};Vt.tagName="media-announcer";let B=Vt;const Bt=class Bt extends a(HTMLElement,ea){};Bt.tagName="media-controls";let R=Bt;const Rt=class Rt extends a(HTMLElement,ba){};Rt.tagName="media-controls-group";let P=Rt;class Wa extends l{}const Pt=class Pt extends a(HTMLElement,Wa){onSetup(){this.a=x()}onConnect(){c(this.td.bind(this))}td(){const{title:t}=this.a.$state;this.textContent=t()}};Pt.tagName="media-title";let G=Pt;const Gt=class Gt extends l{};Gt.props={defaultText:""};let E=Gt;const Et=class Et extends a(HTMLElement,E){onSetup(){this.a=x(),this.bn=ks("")}onConnect(){const t=this.a.textTracks;ws(t,"chapters",this.bn.set),c(this.pn.bind(this))}pn(){const{defaultText:t}=this.$props;this.textContent=this.bn()||t()}};Et.tagName="media-chapter-title";let _=Et;const _t=class _t extends l{onConnect(t){u(()=>{if(!this.connectScope)return;const e=t.querySelector("svg"),i=e.firstElementChild,n=i.nextElementSibling;c(this.Ha.bind(this,e,i,n))})}Ha(t,e,i){const{size:n,trackWidth:h,fillPercent:r}=this.$props;o(t,"width",n()),o(t,"height",n()),o(e,"stroke-width",h()),o(i,"stroke-width",h()),o(i,"stroke-dashoffset",100-r())}};_t.props={size:96,trackWidth:8,fillPercent:50};let M=_t;const Mt=class Mt extends a(La,M){render(){return Ta`
      <svg fill="none" viewBox="0 0 120 120" aria-hidden="true" data-part="root">
        <circle cx="60" cy="60" r="54" stroke="currentColor" data-part="track"></circle>
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          pathLength="100"
          stroke-dasharray="100"
          data-part="track-fill"
        ></circle>
      </svg>
    `}};Mt.tagName="media-spinner";let tt=Mt;const ts=class ts extends l{};ts.props={when:!1};let st=ts;const ss=class ss extends a(HTMLElement,st){onSetup(){this.a=x()}onConnect(){c(this.qn.bind(this))}qn(){const t=this.firstElementChild,e=(t==null?void 0:t.localName)==="template",i=this.$props.when();if(!(Ys(i)?i:Os(()=>i(this.a.player.state))())){e?(this.textContent="",this.appendChild(t)):Ls(t)&&(t.style.display="none");return}e?this.append(t.content.cloneNode(!0)):Ls(t)&&(t.style.display="")}};ss.tagName="media-layout";let at=ss;const as=class as extends a(HTMLElement,ia){};as.tagName="media-google-cast-button";let et=as;const es=class es extends a(HTMLElement,na){};es.tagName="media-toggle-button";let it=es;const is=class is extends a(HTMLElement,ca){};is.tagName="media-tooltip";let nt=is;const ns=class ns extends a(HTMLElement,Ca){onConnect(){this.style.display="contents"}};ns.tagName="media-tooltip-trigger";let ct=ns;const cs=class cs extends a(HTMLElement,oa){};cs.tagName="media-tooltip-content";let ot=cs;const L=class L extends a(HTMLElement,ra){};L.tagName="media-menu-portal",L.attrs={disabled:{converter(t){return bt(t)?t:t!==null}}};let rt=L;const os=class os extends a(HTMLElement,ha){onConnect(){g(this,(t,e)=>{const{cue:i,startTime:n,duration:h}=e,r=t.querySelector(".vds-thumbnail,media-thumbnail"),d=t.querySelector('[data-part="start-time"]'),p=t.querySelector('[data-part="duration"]');d&&(d.textContent=n),p&&(p.textContent=h),r&&(r.setAttribute("time",i.startTime+""),c(()=>{const b=this.$props.thumbnails();"src"in r?r.src=b:bt(b)&&r.setAttribute("src",b)}))})}};os.tagName="media-chapters-radio-group";let ht=os;const rs=class rs extends a(HTMLElement,ma){onConnect(){g(this)}};rs.tagName="media-audio-gain-radio-group";let mt=rs;const hs=class hs extends a(HTMLElement,la){};hs.tagName="media-radio";let lt=hs;const ms=class ms extends a(HTMLElement,pa){};ms.tagName="media-radio-group";let pt=ms;const ls=class ls extends a(HTMLElement,Ws){};ls.tagName="media-slider";let gt=ls;const $a=ys('<video muted playsinline preload="none" style="max-width: unset;"></video>'),ps=class ps extends a(HTMLElement,ga){constructor(){super(...arguments),this.m=this.an()}onSetup(){this.a=x(),this.$state.video.set(this.m)}onConnect(){const{canLoad:t}=this.a.$state,{src:e,crossOrigin:i}=this.$state;this.m.parentNode!==this&&this.prepend(this.m),c(()=>{o(this.m,"crossorigin",i()),o(this.m,"preload",t()?"auto":"none"),o(this.m,"src",e())})}an(){return bs($a)}};ps.tagName="media-slider-video";let ut=ps;const gs=class gs extends a(HTMLElement,ua){};gs.tagName="media-audio-gain-slider";let xt=gs;const us=class us extends a(HTMLElement,xa){};us.tagName="media-speed-slider";let dt=us;const xs=class xs extends a(HTMLElement,da){};xs.tagName="media-quality-slider";let Nt=xs;const ds=class ds extends a(HTMLElement,Na){constructor(){super(...arguments),this.Ym=null}onConnect(){u(()=>{if(!this.connectScope)return;const t=this.querySelector("template");t&&(this.Ym=t,c(this.un.bind(this)))})}un(){if(!this.Ym)return;const t=Tt(this.Ym,this.cues.length||1);this.setRefs(t)}};ds.tagName="media-slider-chapters";let Ht=ds;class qa extends l{}const Ns=class Ns extends a(HTMLElement,qa){constructor(){super(...arguments),this.Ym=null}onConnect(t){u(()=>{this.connectScope&&(this.Ym=t.querySelector("template"),this.Ym&&c(this.Zm.bind(this)))})}Zm(){if(!this.Ym)return;const{min:t,max:e,step:i}=Cs(Ha),n=(e()-t())/i();Tt(this.Ym,Math.floor(n)+1)}};Ns.tagName="media-slider-steps";let ft=Ns;const T=class T extends a(HTMLElement,fa){constructor(){super(...arguments),this.Wm=document.createElement("img")}onSetup(){this.$state.img.set(this.Wm)}onConnect(){const{src:t,alt:e,crossOrigin:i}=this.$state;this.Wm.parentNode!==this&&this.prepend(this.Wm),c(()=>{o(this.Wm,"alt",e()),o(this.Wm,"crossorigin",i()),o(this.Wm,"src",t()||"")}),c(()=>{const{loading:n,hidden:h}=this.$state;this.Wm.style.display=n()||h()?"none":""})}};T.tagName="media-poster",T.attrs={crossOrigin:"crossorigin"};let Lt=T;s(at);s(R);s(P);s(Lt);s(B);s(nt);s(ct);s(ot);s(w);s(q);s(v);s(W);s(k);s(Y);s(y);s(et);s(it);s(gt);s(xt);s(X);s(U);s(dt);s(Nt);s(Ht);s(ft);s(I);s(K);s(J);s(ut);s(A);s(Z);s(rt);s(F);s(z);s(O);s(S);s(D);s(mt);s(j);s(ht);s(pt);s(lt);s(V);s(N);s(Q);s($);s(C);s(G);s(_);s(tt);

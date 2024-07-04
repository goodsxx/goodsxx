import{Z as p,as as h,a as d,aa as k,e as u,p as l,y as v,aj as m,ad as o,l as y,ae as w,B as T}from"./vidstack-CSaHpIQV-DOQ0QhVh.js";import{U as b}from"./vidstack-CpPO9Fgt-D86AHuDa.js";import{R as $}from"./vidstack-D6ttsqNA-CnsOxWXz.js";import{E as j,t as f}from"./vidstack-CW1cJiXX-fKFN_5Cq.js";import{resolveVimeoVideoId as I,getVimeoVideoInfo as R}from"./vidstack-BInq9zTH-C3UUF7YD.js";import"./app-DbRsw7jK.js";const P=["bufferend","bufferstart","durationchange","ended","enterpictureinpicture","error","fullscreenchange","leavepictureinpicture","loaded","playProgress","loadProgress","pause","play","playbackratechange","qualitychange","seeked","seeking","timeupdate","volumechange","waiting"];class Q extends j{constructor(t,e){super(t),this.b=e,this.$$PROVIDER_TYPE="VIMEO",this.scope=p(),this.ga=0,this.ba=new h(0,0),this.Aa=new h(0,0),this.I=null,this.R=null,this.ue=null,this.ha=d(""),this.tc=d(!1),this.ve=null,this.K=null,this.Yi=null,this.fa=new $(this.kc.bind(this)),this.hd=null,this.cookies=!1,this.title=!0,this.byline=!0,this.portrait=!0,this.color="00ADEF",this.jd=!1}get c(){return this.b.delegate.c}get type(){return"vimeo"}get currentSrc(){return this.K}get videoId(){return this.ha()}get hash(){return this.ve}get isPro(){return this.tc()}preconnect(){k(this.Nb())}setup(){super.setup(),u(this.we.bind(this)),u(this.Zi.bind(this)),u(this._i.bind(this)),this.c("provider-setup",this)}destroy(){this.z(),this.t("destroy")}async play(){const{paused:t}=this.b.$state;return this.I||(this.I=f(()=>{if(this.I=null,t())return"Timed out."}),this.t("play")),this.I.promise}async pause(){const{paused:t}=this.b.$state;return this.R||(this.R=f(()=>{if(this.R=null,!t())return"Timed out."}),this.t("pause")),this.R.promise}setMuted(t){this.t("setMuted",t)}setCurrentTime(t){this.t("seekTo",t),this.c("seeking",t)}setVolume(t){this.t("setVolume",t),this.t("setMuted",l(this.b.$state.muted))}setPlaybackRate(t){this.t("setPlaybackRate",t)}async loadSource(t){if(!v(t.src)){this.K=null,this.ve=null,this.ha.set("");return}const{videoId:e,hash:s}=I(t.src);this.ha.set(e??""),this.ve=s??null,this.K=t}we(){this.z();const t=this.ha();if(!t){this.sc.set("");return}this.sc.set(`${this.Nb()}/video/${t}`),this.c("load-start")}Zi(){const t=this.ha();if(!t)return;const e=m(),s=new AbortController;return this.ue=e,R(t,s,this.ve).then(i=>{e.resolve(i)}).catch(i=>{e.reject()}),()=>{e.reject(),s.abort()}}_i(){const t=this.tc(),{$state:e,qualities:s}=this.b;if(e.canSetPlaybackRate.set(t),s[o.Od](!t),t)return y(s,"change",()=>{var a;if(s.auto)return;const i=(a=s.selected)==null?void 0:a.id;i&&this.t("setQuality",i)})}Nb(){return"https://player.vimeo.com"}mg(){const{keyDisabled:t}=this.b.$props,{playsInline:e,nativeControls:s}=this.b.$state,i=s();return{title:this.title,byline:this.byline,color:this.color,portrait:this.portrait,controls:i,h:this.hash,keyboard:i&&!t(),transparent:!0,playsinline:e(),dnt:!this.cookies}}kc(){this.t("getCurrentTime")}mc(t,e){if(this.jd&&t===0)return;const{realCurrentTime:s,realDuration:i,paused:a,bufferedEnd:n}=this.b.$state;if(s()===t)return;const c=s(),r={currentTime:t,played:this.uc(t)};this.c("time-update",r,e),Math.abs(c-t)>1.5&&(this.c("seeking",t,e),!a()&&n()<t&&this.c("waiting",void 0,e)),i()-t<.01&&(this.c("end",void 0,e),this.jd=!0,setTimeout(()=>{this.jd=!1},500))}uc(t){return this.ga>=t?this.ba:this.ba=new h(0,this.ga=t)}ob(t,e){this.c("seeked",t,e)}tb(t){var s;const e=this.ha();(s=this.ue)==null||s.promise.then(i=>{if(!i)return;const{title:a,poster:n,duration:c,pro:r}=i;this.tc.set(r),this.c("title-change",a,t),this.c("poster-change",n,t),this.c("duration-change",c,t),this.kd(c,t)}).catch(()=>{e===this.ha()&&(this.t("getVideoTitle"),this.t("getDuration"))})}kd(t,e){const{nativeControls:s}=this.b.$state,i=s();this.Aa=new h(0,t);const a={buffered:new h(0,0),seekable:this.Aa,duration:t};this.b.delegate.Ga(a,e),i||this.t("_hideOverlay"),this.t("getQualities"),this.t("getChapters")}$i(t,e,s){switch(t){case"getVideoTitle":const i=e;this.c("title-change",i,s);break;case"getDuration":const a=e;this.b.$state.canPlay()?this.c("duration-change",a,s):this.kd(a,s);break;case"getCurrentTime":this.mc(e,s);break;case"getBuffered":w(e)&&e.length&&this.ng(e[e.length-1][1],s);break;case"setMuted":this.Na(l(this.b.$state.volume),e,s);break;case"getChapters":this.aj(e);break;case"getQualities":this.ld(e,s);break}}bj(){for(const t of P)this.t("addEventListener",t)}ib(t){var e;this.fa.$(),this.c("pause",void 0,t),(e=this.R)==null||e.resolve(),this.R=null}gc(t){var e;this.fa.Xa(),this.c("play",void 0,t),(e=this.I)==null||e.resolve(),this.I=null}cj(t){const{paused:e}=this.b.$state;!e()&&!this.jd&&this.c("playing",void 0,t)}ng(t,e){const s={buffered:new h(0,t),seekable:this.Aa};this.c("progress",s,e)}dj(t){this.c("waiting",void 0,t)}ej(t){const{paused:e}=this.b.$state;e()||this.c("playing",void 0,t)}ee(t){const{paused:e}=this.b.$state;e()&&this.c("play",void 0,t),this.c("waiting",void 0,t)}Na(t,e,s){const i={volume:t,muted:e};this.c("volume-change",i,s)}aj(t){if(this.og(),!t.length)return;const e=new T({kind:"chapters",default:!0}),{realDuration:s}=this.b.$state;for(let i=0;i<t.length;i++){const a=t[i],n=t[i+1];e.addCue(new window.VTTCue(a.startTime,(n==null?void 0:n.startTime)??s(),a.title))}this.hd=e,this.b.textTracks.add(e)}og(){this.hd&&(this.b.textTracks.remove(this.hd),this.hd=null)}ld(t,e){this.b.qualities[b.Ia]=t.some(s=>s.id==="auto")?()=>this.t("setQuality","auto"):void 0;for(const s of t){if(s.id==="auto")continue;const i=+s.id.slice(0,-1);isNaN(i)||this.b.qualities[o.da]({id:s.id,width:i*(16/9),height:i,codec:"avc1,h.264",bitrate:-1},e)}this.Za(t.find(s=>s.active),e)}Za({id:t}={},e){if(!t)return;const s=t==="auto",i=this.b.qualities.getById(t);s?(this.b.qualities[b.Wa](s,e),this.b.qualities[o.ea](void 0,!0,e)):this.b.qualities[o.ea](i??void 0,!0,e)}fj(t,e,s){switch(t){case"ready":this.bj();break;case"loaded":this.tb(s);break;case"play":this.gc(s);break;case"playProgress":this.cj(s);break;case"pause":this.ib(s);break;case"loadProgress":this.ng(e.seconds,s);break;case"waiting":this.ee(s);break;case"bufferstart":this.dj(s);break;case"bufferend":this.ej(s);break;case"volumechange":this.Na(e.volume,l(this.b.$state.muted),s);break;case"durationchange":this.Aa=new h(0,e.duration),this.c("duration-change",e.duration,s);break;case"playbackratechange":this.c("rate-change",e.playbackRate,s);break;case"qualitychange":this.Za(e,s);break;case"fullscreenchange":this.c("fullscreen-change",e.fullscreen,s);break;case"enterpictureinpicture":this.c("picture-in-picture-change",!0,s);break;case"leavepictureinpicture":this.c("picture-in-picture-change",!1,s);break;case"ended":this.c("end",void 0,s);break;case"error":this.Q(e,s);break;case"seek":case"seeked":this.ob(e.seconds,s);break}}Q(t,e){var s;if(t.method==="setPlaybackRate"&&this.tc.set(!1),t.method==="play"){(s=this.I)==null||s.reject(t.message);return}}te(t,e){t.event?this.fj(t.event,t.data,e):t.method&&this.$i(t.method,t.value,e)}gd(){}t(t,e){return this.se({method:t,value:e})}z(){this.fa.$(),this.ga=0,this.ba=new h(0,0),this.Aa=new h(0,0),this.I=null,this.R=null,this.ue=null,this.Yi=null,this.tc.set(!1),this.og()}}export{Q as VimeoProvider};

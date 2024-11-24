import './polyfills.server.mjs';
import{a as h,b as W,c as q,d as X,e as y,h as Y,n as Z}from"./chunk-2SWQX4PK.mjs";import{Aa as f,Ba as g,Ca as m,Da as N,Ea as j,Fa as k,Ga as U,Ha as B,I,Ia as H,J as s,Ja as Q,Ka as c,O as A,P as l,S as d,V as F,_a as V,cb as L,fa as M,ga as E,hb as z,ib as p,lb as v,ma as u,na as P,oa as w,pa as D,qa as R,s as x,sa as _,ta as O,ya as S,za as T}from"./chunk-UTRA2TPH.mjs";var G=(()=>{class i{constructor(e){this.http=e,this.apiUrl="http://localhost:8000/api/process-frame/"}detectPlate(e){let t=new FormData;return t.append("frame",e),this.http.post(this.apiUrl,t)}static{this.\u0275fac=function(t){return new(t||i)(A(h))}}static{this.\u0275prov=s({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var J={backend:"https://placas.brayanroa.com/api"};var ae=["videoElement"];function se(i,r){if(i&1&&(f(0,"div",4)(1,"p"),B(2),g()()),i&2){let e=N();u(2),H(e.detectedText)}}var K=(()=>{class i{constructor(e){this.http=e,this.detectedText="",this.data64Img="",this.platformID=l(M)}ngOnInit(){v(this.platformID)&&(this.startCamera(),v(this.platformID)&&x(500).subscribe(()=>{this.captureFrame()}))}startCamera(){navigator.mediaDevices.getUserMedia({video:!0}).then(e=>{this.videoElement.nativeElement.srcObject=e}).catch(e=>{console.error("Error al acceder a la c\xE1mara: ",e)})}captureFrame(){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=this.videoElement.nativeElement.videoWidth,e.height=this.videoElement.nativeElement.videoHeight,t?.drawImage(this.videoElement.nativeElement,0,0);let o=e.toDataURL("image/jpeg");this.data64Img=o,this.sendFrameToServer(o)}sendFrameToServer(e){this.http.post(J.backend+"/detect_plate",{image:e}).subscribe(t=>{this.detectedText=t.plate.slice(0,7)},t=>{console.error("Error al enviar la imagen al servidor",t)})}static{this.\u0275fac=function(t){return new(t||i)(P(h))}}static{this.\u0275cmp=d({type:i,selectors:[["app-camera"]],viewQuery:function(t,o){if(t&1&&j(ae,5),t&2){let n;k(n=U())&&(o.videoElement=n.first)}},standalone:!0,features:[Q([G]),c],decls:5,vars:1,consts:[["videoElement",""],[1,"camera-container"],["class","placa",4,"ngIf"],["autoplay","","playsinline",""],[1,"placa"]],template:function(t,o){t&1&&(f(0,"div",1)(1,"div"),S(2,se,3,1,"div",2),m(3,"video",3,0),g()()),t&2&&(u(2),T("ngIf",o.detectedText))},dependencies:[W,p,z],styles:["[_nghost-%COMP%]   .camera-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}[_nghost-%COMP%]   .placa[_ngcontent-%COMP%]{position:absolute;background:#e2bd00;border:1px solid black;border-radius:.5em;padding:10px 15px;font-family:monospace}[_nghost-%COMP%]   .placa[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;margin:0}"]})}}return i})();var $=(()=>{class i{constructor(){this.title="BM"}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=d({type:i,selectors:[["app-root"]],standalone:!0,features:[c],decls:1,vars:0,template:function(t,o){t&1&&m(0,"app-camera")},dependencies:[K,p]})}}return i})();var ee=[];var le="@",de=(()=>{class i{constructor(e,t,o,n,a){this.doc=e,this.delegate=t,this.zone=o,this.animationType=n,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=l(D,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-UONTWIWI.mjs")).catch(t=>{throw new I(5300,!1)}).then(({\u0275createEngine:t,\u0275AnimationRendererFactory:o})=>{this._engine=t(this.animationType,this.doc,this.scheduler);let n=new o(this.delegate,this._engine,this.zone);return this.delegate=n,n})}createRenderer(e,t){let o=this.delegate.createRenderer(e,t);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let n=new b(o);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let ie=a.createRenderer(e,t);n.use(ie)}).catch(a=>{n.use(o)}),n}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(t){w()}}static{this.\u0275prov=s({token:i,factory:i.\u0275fac})}}return i})(),b=class{constructor(r){this.delegate=r,this.replay=[],this.\u0275type=1}use(r){if(this.delegate=r,this.replay!==null){for(let e of this.replay)e(r);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(r,e){return this.delegate.createElement(r,e)}createComment(r){return this.delegate.createComment(r)}createText(r){return this.delegate.createText(r)}get destroyNode(){return this.delegate.destroyNode}appendChild(r,e){this.delegate.appendChild(r,e)}insertBefore(r,e,t,o){this.delegate.insertBefore(r,e,t,o)}removeChild(r,e,t){this.delegate.removeChild(r,e,t)}selectRootElement(r,e){return this.delegate.selectRootElement(r,e)}parentNode(r){return this.delegate.parentNode(r)}nextSibling(r){return this.delegate.nextSibling(r)}setAttribute(r,e,t,o){this.delegate.setAttribute(r,e,t,o)}removeAttribute(r,e,t){this.delegate.removeAttribute(r,e,t)}addClass(r,e){this.delegate.addClass(r,e)}removeClass(r,e){this.delegate.removeClass(r,e)}setStyle(r,e,t,o){this.delegate.setStyle(r,e,t,o)}removeStyle(r,e,t){this.delegate.removeStyle(r,e,t)}setProperty(r,e,t){this.shouldReplay(e)&&this.replay.push(o=>o.setProperty(r,e,t)),this.delegate.setProperty(r,e,t)}setValue(r,e){this.delegate.setValue(r,e)}listen(r,e,t){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(r,e,t)),this.delegate.listen(r,e,t)}shouldReplay(r){return this.replay!==null&&r.startsWith(le)}};function te(i="animations"){return _("NgAsyncAnimations"),F([{provide:R,useFactory:(r,e,t)=>new de(r,e,t,i),deps:[L,q,O]},{provide:E,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var re={providers:[Z(ee),y(),te(),y()]};var me={providers:[Y()]},oe=V(re,me);var ce=()=>X($,oe),We=ce;export{We as a};

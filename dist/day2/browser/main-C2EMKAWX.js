import{$ as Tn,$a as v,A as _s,Aa as Pn,Ab as Dt,B as Cs,Ba as Qr,Bb as St,C as bt,Ca as _t,Cb as Y,D as bi,Da as ye,Db as Di,E as ws,Ea as R,Eb as Ls,F as Kt,Fa as Fs,Fb as ge,G as Ne,Ga as Bn,Gb as Se,H as ze,Ha as Os,Hb as Vs,I as Me,Ia as Ci,Ib as be,J as $,Ja as S,Jb as Re,K as vi,Ka as N,Kb as Us,L as it,La as x,Lb as js,M as b,Ma as et,Mb as U,N as O,Na as P,Nb as tt,O as Ds,Oa as le,Ob as $s,P as _,Pa as Ns,Q as z,Qa as Jr,R as d,Ra as Ln,S as Yt,Sa as wi,T as Ss,Ta as Ps,U as at,Ua as Zt,V as Pe,Va as te,W as vt,Wa as He,X as yt,Xa as We,Y as Rn,Ya as Xt,Z as ve,Za as Qt,_ as F,_a as w,a as h,aa as Es,ab as y,b as j,ba as G,bb as ie,c as us,ca as ce,cb as he,d as qr,da as yi,db as re,e as ps,ea as Yr,eb as Ve,f as hs,fa as xs,fb as st,g as J,ga as V,gb as ct,h as ke,ha as ks,hb as Ct,i as Oe,ia as Ae,ib as eo,j as Ie,ja as Be,jb as to,k as M,ka as A,kb as ne,l as ms,la as Z,lb as T,m as hi,ma as Fn,mb as ae,n as fs,na as Is,nb as H,o as pe,oa as On,ob as lt,p as gs,pa as As,pb as Bs,q as ft,qa as Le,qb as q,r as bs,ra as Zr,rb as K,s as Kr,sa as Nn,sb as Vn,t as vs,ta as Xr,tb as me,u as mi,ua as Ms,ub as no,v as gt,va as f,vb as L,w as fi,wa as Nt,wb as C,x as gi,xa as Rs,xb as fe,y as ys,ya as Ts,yb as dt,z as qt,za as _i,zb as wt}from"./chunk-F55VDS5L.js";var zs=null;function Ue(){return zs}function Si(t){zs??=t}var Un=class{},ro=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>d(Hs),providedIn:"platform"})}return t})();var Hs=(()=>{class t extends ro{_location;_history;_doc=d(F);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ue().getBaseHref(this._doc)}onPopState(e){let n=Ue().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Ue().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,o){this._history.pushState(e,n,o)}replaceState(e,n,o){this._history.replaceState(e,n,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function qs(t,r){return t?r?t.endsWith("/")?r.startsWith("/")?t+r.slice(1):t+r:r.startsWith("/")?t+r:`${t}/${r}`:t:r}function Ws(t){let r=t.search(/#|\?|$/);return t[r-1]==="/"?t.slice(0,r-1)+t.slice(r):t}function Et(t){return t&&t[0]!=="?"?`?${t}`:t}var oo=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>d(xh),providedIn:"root"})}return t})(),Eh=new _(""),xh=(()=>{class t extends oo{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??d(F).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return qs(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Et(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${n}${o}`:n}pushState(e,n,o,i){let a=this.prepareExternalUrl(o+Et(i));this._platformLocation.pushState(e,n,a)}replaceState(e,n,o,i){let a=this.prepareExternalUrl(o+Et(i));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(z(ro),z(Eh,8))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Jt=(()=>{class t{_subject=new J;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Ah(Ws(Gs(n))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Et(n))}normalize(e){return t.stripTrailingSlash(Ih(this._basePath,Gs(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",o=null){this._locationStrategy.pushState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Et(n)),o)}replaceState(e,n="",o=null){this._locationStrategy.replaceState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Et(n)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(o=>o(e,n))}subscribe(e,n,o){return this._subject.subscribe({next:e,error:n??void 0,complete:o??void 0})}static normalizeQueryParams=Et;static joinWithSlash=qs;static stripTrailingSlash=Ws;static \u0275fac=function(n){return new(n||t)(z(oo))};static \u0275prov=b({token:t,factory:()=>kh(),providedIn:"root"})}return t})();function kh(){return new Jt(z(oo))}function Ih(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function Gs(t){return t.replace(/\/index.html$/,"")}function Ah(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Ei=/\s+/,Ks=[],xi=(()=>{class t{_ngEl;_renderer;initialClasses=Ks;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(Ei):Ks}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Ei):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let o=this.stateMap.get(e);o!==void 0?(o.enabled!==n&&(o.changed=!0,o.enabled=n),o.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],o=e[1];o.changed?(this._toggleClass(n,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),o.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(Ei).forEach(o=>{n?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static \u0275fac=function(n){return new(n||t)(R(Z),R(ye))};static \u0275dir=x({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Pt=(()=>{class t{_viewContainer;_context=new io;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Ys(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Ys(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(R(Bn),R(Qr))};static \u0275dir=x({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),io=class{$implicit=null;ngIf=null};function Ys(t,r){if(t&&!t.createEmbeddedView)throw new $(2020,!1)}var ki=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,o){this._ngEl=e,this._differs=n,this._renderer=o}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[o,i]=e.split("."),a=o.indexOf("-")===-1?void 0:Nt.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,o,i?`${n}${i}`:n,a):this._renderer.removeStyle(this._ngEl.nativeElement,o,a)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(R(Z),R(Us),R(ye))};static \u0275dir=x({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Bt=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=d(ve);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,o):!1,get:(e,n,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,o)}})}static \u0275fac=function(n){return new(n||t)(R(Bn))};static \u0275dir=x({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Be]})}return t})();var Ee=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=O({})}return t})();function Ii(t,r){r=encodeURIComponent(r);for(let e of t.split(";")){let n=e.indexOf("="),[o,i]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(o.trim()===r)return decodeURIComponent(i)}return null}var jn=class{};var Ai="browser",Rh="server";function Lt(t){return t===Ai}function Mi(t){return t===Rh}var $n=class{_doc;constructor(r){this._doc=r}manager},ao=(()=>{class t extends $n{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,o,i){return e.addEventListener(n,o,i),()=>this.removeEventListener(e,n,o,i)}removeEventListener(e,n,o,i){return e.removeEventListener(n,o,i)}static \u0275fac=function(n){return new(n||t)(z(F))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),lo=new _(""),Ni=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let o=e.filter(a=>!(a instanceof ao));this._plugins=o.slice().reverse();let i=e.find(a=>a instanceof ao);i&&this._plugins.push(i)}addEventListener(e,n,o,i){return this._findPluginFor(n).addEventListener(e,n,o,i)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(i=>i.supports(e)),!n)throw new $(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(z(lo),z(ce))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Ti="ng-app-id";function Zs(t){for(let r of t)r.remove()}function Xs(t,r){let e=r.createElement("style");return e.textContent=t,e}function Th(t,r,e,n){let o=t.head?.querySelectorAll(`style[${Ti}="${r}"],link[${Ti}="${r}"]`);if(o)for(let i of o)i.removeAttribute(Ti),i instanceof HTMLLinkElement?n.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&e.set(i.textContent,{usage:0,elements:[i]})}function Oi(t,r){let e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Pi=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,o,i={}){this.doc=e,this.appId=n,this.nonce=o,Th(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let o of e)this.addUsage(o,this.inline,Xs);n?.forEach(o=>this.addUsage(o,this.external,Oi))}removeStyles(e,n){for(let o of e)this.removeUsage(o,this.inline);n?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,n,o){let i=n.get(e);i?i.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,o(e,this.doc)))})}removeUsage(e,n){let o=n.get(e);o&&(o.usage--,o.usage<=0&&(Zs(o.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Zs(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:o}]of this.inline)o.push(this.addElement(e,Xs(n,this.doc)));for(let[n,{elements:o}]of this.external)o.push(this.addElement(e,Oi(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(z(F),z(On),z(Nn,8),z(Le))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Fi={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Bi=/%COMP%/g;var Js="%COMP%",Fh=`_nghost-${Js}`,Oh=`_ngcontent-${Js}`,Nh=!0,Ph=new _("",{factory:()=>Nh});function Bh(t){return Oh.replace(Bi,t)}function Lh(t){return Fh.replace(Bi,t)}function ec(t,r){return r.map(e=>e.replace(Bi,t))}var Wn=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,o,i,a,s,c=null,l=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=l,this.defaultRenderer=new zn(e,a,s,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let o=this.getOrCreateRenderer(e,n);return o instanceof co?o.applyToHost(e):o instanceof Hn&&o.applyStyles(),o}getOrCreateRenderer(e,n){let o=this.rendererByCompId,i=o.get(n.id);if(!i){let a=this.doc,s=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,p=this.tracingService;switch(n.encapsulation){case Xr.Emulated:i=new co(c,l,n,this.appId,u,a,s,p);break;case Xr.ShadowDom:return new so(c,e,n,a,s,this.nonce,p,l);case Xr.ExperimentalIsolatedShadowDom:return new so(c,e,n,a,s,this.nonce,p);default:i=new Hn(c,l,n,u,a,s,p);break}o.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(z(Ni),z(Pi),z(On),z(Ph),z(F),z(ce),z(Nn),z(Ts,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),zn=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,n,o){this.eventManager=r,this.doc=e,this.ngZone=n,this.tracingService=o}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(Fi[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(Qs(r)?r.content:r).appendChild(e)}insertBefore(r,e,n){r&&(Qs(r)?r.content:r).insertBefore(e,n)}removeChild(r,e){e.remove()}selectRootElement(r,e){let n=typeof r=="string"?this.doc.querySelector(r):r;if(!n)throw new $(-5104,!1);return e||(n.textContent=""),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,n,o){if(o){e=o+":"+e;let i=Fi[o];i?r.setAttributeNS(i,e,n):r.setAttribute(e,n)}else r.setAttribute(e,n)}removeAttribute(r,e,n){if(n){let o=Fi[n];o?r.removeAttributeNS(o,e):r.removeAttribute(`${n}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,n,o){o&(Nt.DashCase|Nt.Important)?r.style.setProperty(e,n,o&Nt.Important?"important":""):r.style[e]=n}removeStyle(r,e,n){n&Nt.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,n){r!=null&&(r[e]=n)}setValue(r,e){r.nodeValue=e}listen(r,e,n,o){if(typeof r=="string"&&(r=Ue().getGlobalEventTarget(this.doc,r),!r))throw new $(5102,!1);let i=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(r,e,i)),this.eventManager.addEventListener(r,e,i,o)}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;r(e)===!1&&e.preventDefault()}}};function Qs(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var so=class extends zn{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,n,o,i,a,s,c){super(r,o,i,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=n.styles;l=ec(n.id,l);for(let p of l){let m=document.createElement("style");a&&m.setAttribute("nonce",a),m.textContent=p,this.shadowRoot.appendChild(m)}let u=n.getExternalStyles?.();if(u)for(let p of u){let m=Oi(p,o);a&&m.setAttribute("nonce",a),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,n){return super.insertBefore(this.nodeOrShadowRoot(r),e,n)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Hn=class extends zn{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,n,o,i,a,s,c){super(r,i,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o;let l=n.styles;this.styles=c?ec(c,l):l,this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Rs.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},co=class extends Hn{contentAttr;hostAttr;constructor(r,e,n,o,i,a,s,c){let l=o+"-"+n.id;super(r,e,n,i,a,s,c,l),this.contentAttr=Bh(l),this.hostAttr=Lh(l)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let n=super.createElement(r,e);return super.setAttribute(n,this.contentAttr,""),n}};var uo=class t extends Un{supportsDOMEvents=!0;static makeCurrent(){Si(new t)}onAndCancel(r,e,n,o){return r.addEventListener(e,n,o),()=>{r.removeEventListener(e,n,o)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=Vh();return e==null?null:Uh(e)}resetBaseElement(){Gn=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return Ii(document.cookie,r)}},Gn=null;function Vh(){return Gn=Gn||document.head.querySelector("base"),Gn?Gn.getAttribute("href"):null}function Uh(t){return new URL(t,document.baseURI).pathname}var jh=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),tc=["alt","control","meta","shift"],$h={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},zh={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},nc=(()=>{class t extends $n{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,o,i){let a=t.parseEventName(n),s=t.eventCallback(a.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ue().onAndCancel(e,a.domEventName,s,i))}static parseEventName(e){let n=e.toLowerCase().split("."),o=n.shift();if(n.length===0||!(o==="keydown"||o==="keyup"))return null;let i=t._normalizeKey(n.pop()),a="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),a="code."),tc.forEach(l=>{let u=n.indexOf(l);u>-1&&(n.splice(u,1),a+=l+".")}),a+=i,n.length!=0||i.length===0)return null;let c={};return c.domEventName=o,c.fullKey=a,c}static matchEventFullKeyCode(e,n){let o=$h[e.key]||e.key,i="";return n.indexOf("code.")>-1&&(o=e.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),tc.forEach(a=>{if(a!==o){let s=zh[a];s(e)&&(i+=a+".")}}),i+=o,i===n)}static eventCallback(e,n,o){return i=>{t.matchEventFullKeyCode(i,e)&&o.runGuarded(()=>n(i))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(z(F))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();async function Li(t,r,e){let n=h({rootComponent:t},Hh(r,e));return js(n)}function Hh(t,r){return{platformRef:r?.platformRef,appProviders:[...Yh,...t?.providers??[]],platformProviders:Kh}}function Wh(){uo.makeCurrent()}function Gh(){return new yi}function qh(){return Is(document),document}var Kh=[{provide:Le,useValue:Ai},{provide:As,useValue:Wh,multi:!0},{provide:F,useFactory:qh}];var Yh=[{provide:Ss,useValue:"root"},{provide:yi,useFactory:Gh},{provide:lo,useClass:ao,multi:!0},{provide:lo,useClass:nc,multi:!0},Wn,Pi,Ni,{provide:_t,useExisting:Wn},{provide:jn,useClass:jh},[]];var rc=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(z(F))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xh="@",Qh=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=d(ve);loadingSchedulerFn=d(Jh,{optional:!0});_engine;constructor(e,n,o,i,a){this.doc=e,this.delegate=n,this.zone=o,this.animationType=i,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-ZU3RTOLL.js").then(o=>o),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(o=>{throw new $(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:i})=>{this._engine=o(this.animationType,this.doc);let a=new i(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,n){let o=this.delegate.createRenderer(e,n);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let i=new Vi(o);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,n);i.use(s),this.scheduler??=this.injector.get(ks,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{i.use(o)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(n){Fs()};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Vi=class{delegate;replay=[];\u0275type=1;constructor(r){this.delegate=r}use(r){if(this.delegate=r,this.replay!==null){for(let e of this.replay)e(r);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(r,e){return this.delegate.createElement(r,e)}createComment(r){return this.delegate.createComment(r)}createText(r){return this.delegate.createText(r)}get destroyNode(){return this.delegate.destroyNode}appendChild(r,e){this.delegate.appendChild(r,e)}insertBefore(r,e,n,o){this.delegate.insertBefore(r,e,n,o)}removeChild(r,e,n,o){this.delegate.removeChild(r,e,n,o)}selectRootElement(r,e){return this.delegate.selectRootElement(r,e)}parentNode(r){return this.delegate.parentNode(r)}nextSibling(r){return this.delegate.nextSibling(r)}setAttribute(r,e,n,o){this.delegate.setAttribute(r,e,n,o)}removeAttribute(r,e,n){this.delegate.removeAttribute(r,e,n)}addClass(r,e){this.delegate.addClass(r,e)}removeClass(r,e){this.delegate.removeClass(r,e)}setStyle(r,e,n,o){this.delegate.setStyle(r,e,n,o)}removeStyle(r,e,n){this.delegate.removeStyle(r,e,n)}setProperty(r,e,n){this.shouldReplay(e)&&this.replay.push(o=>o.setProperty(r,e,n)),this.delegate.setProperty(r,e,n)}setValue(r,e){this.delegate.setValue(r,e)}listen(r,e,n,o){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(r,e,n,o)),this.delegate.listen(r,e,n,o)}shouldReplay(r){return this.replay!==null&&r.startsWith(Xh)}},Jh=new _("");function oc(t="animations"){return _i("NgAsyncAnimations"),Yt([{provide:_t,useFactory:()=>new Qh(d(F),d(Wn),d(ce),t)},{provide:Zr,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var I="primary",or=Symbol("RouteTitle"),Hi=class{params;constructor(r){this.params=r||{}}has(r){return Object.prototype.hasOwnProperty.call(this.params,r)}get(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e[0]:e}return null}getAll(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function rn(t){return new Hi(t)}function Ui(t,r,e){for(let n=0;n<t.length;n++){let o=t[n],i=r[n];if(o[0]===":")e[o.substring(1)]=i;else if(o!==i.path)return!1}return!0}function em(t,r,e){let n=e.path.split("/"),o=n.indexOf("**");if(o===-1){if(n.length>t.length||e.pathMatch==="full"&&(r.hasChildren()||n.length<t.length))return null;let c={},l=t.slice(0,n.length);return Ui(n,l,c)?{consumed:l,posParams:c}:null}if(o!==n.lastIndexOf("**"))return null;let i=n.slice(0,o),a=n.slice(o+1);if(i.length+a.length>t.length||e.pathMatch==="full"&&r.hasChildren()&&e.path!=="**")return null;let s={};return!Ui(i,t.slice(0,i.length),s)||!Ui(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function bo(t){return new Promise((r,e)=>{t.pipe(bt()).subscribe({next:n=>r(n),error:n=>e(n)})})}function tm(t,r){if(t.length!==r.length)return!1;for(let e=0;e<t.length;++e)if(!nt(t[e],r[e]))return!1;return!0}function nt(t,r){let e=t?Wi(t):void 0,n=r?Wi(r):void 0;if(!e||!n||e.length!=n.length)return!1;let o;for(let i=0;i<e.length;i++)if(o=e[i],!pc(t[o],r[o]))return!1;return!0}function Wi(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function pc(t,r){if(Array.isArray(t)&&Array.isArray(r)){if(t.length!==r.length)return!1;let e=[...t].sort(),n=[...r].sort();return e.every((o,i)=>n[i]===o)}else return t===r}function nm(t){return t.length>0?t[t.length-1]:null}function zt(t){return hi(t)?t:Ln(t)?Ie(Promise.resolve(t)):M(t)}function hc(t){return hi(t)?bo(t):Promise.resolve(t)}var rm={exact:gc,subset:bc},mc={exact:om,subset:im,ignored:()=>!0},fc={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Gi={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function ic(t,r,e){return rm[e.paths](t.root,r.root,e.matrixParams)&&mc[e.queryParams](t.queryParams,r.queryParams)&&!(e.fragment==="exact"&&t.fragment!==r.fragment)}function om(t,r){return nt(t,r)}function gc(t,r,e){if(!Ut(t.segments,r.segments)||!mo(t.segments,r.segments,e)||t.numberOfChildren!==r.numberOfChildren)return!1;for(let n in r.children)if(!t.children[n]||!gc(t.children[n],r.children[n],e))return!1;return!0}function im(t,r){return Object.keys(r).length<=Object.keys(t).length&&Object.keys(r).every(e=>pc(t[e],r[e]))}function bc(t,r,e){return vc(t,r,r.segments,e)}function vc(t,r,e,n){if(t.segments.length>e.length){let o=t.segments.slice(0,e.length);return!(!Ut(o,e)||r.hasChildren()||!mo(o,e,n))}else if(t.segments.length===e.length){if(!Ut(t.segments,e)||!mo(t.segments,e,n))return!1;for(let o in r.children)if(!t.children[o]||!bc(t.children[o],r.children[o],n))return!1;return!0}else{let o=e.slice(0,t.segments.length),i=e.slice(t.segments.length);return!Ut(t.segments,o)||!mo(t.segments,o,n)||!t.children[I]?!1:vc(t.children[I],r,i,n)}}function mo(t,r,e){return r.every((n,o)=>mc[e](t[o].parameters,n.parameters))}var Ke=class{root;queryParams;fragment;_queryParamMap;constructor(r=new W([],{}),e={},n=null){this.root=r,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=rn(this.queryParams),this._queryParamMap}toString(){return cm.serialize(this)}},W=class{segments;children;parent=null;constructor(r,e){this.segments=r,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return fo(this)}},Vt=class{path;parameters;_parameterMap;constructor(r,e){this.path=r,this.parameters=e}get parameterMap(){return this._parameterMap??=rn(this.parameters),this._parameterMap}toString(){return _c(this)}};function am(t,r){return Ut(t,r)&&t.every((e,n)=>nt(e.parameters,r[n].parameters))}function Ut(t,r){return t.length!==r.length?!1:t.every((e,n)=>e.path===r[n].path)}function sm(t,r){let e=[];return Object.entries(t.children).forEach(([n,o])=>{n===I&&(e=e.concat(r(o,n)))}),Object.entries(t.children).forEach(([n,o])=>{n!==I&&(e=e.concat(r(o,n)))}),e}var ko=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>new jt,providedIn:"root"})}return t})(),jt=class{parse(r){let e=new Ki(r);return new Ke(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(r){let e=`/${qn(r.root,!0)}`,n=um(r.queryParams),o=typeof r.fragment=="string"?`#${lm(r.fragment)}`:"";return`${e}${n}${o}`}},cm=new jt;function fo(t){return t.segments.map(r=>_c(r)).join("/")}function qn(t,r){if(!t.hasChildren())return fo(t);if(r){let e=t.children[I]?qn(t.children[I],!1):"",n=[];return Object.entries(t.children).forEach(([o,i])=>{o!==I&&n.push(`${o}:${qn(i,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=sm(t,(n,o)=>o===I?[qn(t.children[I],!1)]:[`${o}:${qn(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[I]!=null?`${fo(t)}/${e[0]}`:`${fo(t)}/(${e.join("//")})`}}function yc(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function po(t){return yc(t).replace(/%3B/gi,";")}function lm(t){return encodeURI(t)}function qi(t){return yc(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function go(t){return decodeURIComponent(t)}function ac(t){return go(t.replace(/\+/g,"%20"))}function _c(t){return`${qi(t.path)}${dm(t.parameters)}`}function dm(t){return Object.entries(t).map(([r,e])=>`;${qi(r)}=${qi(e)}`).join("")}function um(t){let r=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(o=>`${po(e)}=${po(o)}`).join("&"):`${po(e)}=${po(n)}`).filter(e=>e);return r.length?`?${r.join("&")}`:""}var pm=/^[^\/()?;#]+/;function ji(t){let r=t.match(pm);return r?r[0]:""}var hm=/^[^\/()?;=#]+/;function mm(t){let r=t.match(hm);return r?r[0]:""}var fm=/^[^=?&#]+/;function gm(t){let r=t.match(fm);return r?r[0]:""}var bm=/^[^&#]+/;function vm(t){let r=t.match(bm);return r?r[0]:""}var Ki=class{url;remaining;constructor(r){this.url=r,this.remaining=r}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new W([],{}):new W([],this.parseChildren())}parseQueryParams(){let r={};if(this.consumeOptional("?"))do this.parseQueryParam(r);while(this.consumeOptional("&"));return r}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(r=0){if(r>50)throw new $(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,r));let o={};return this.peekStartsWith("(")&&(o=this.parseParens(!1,r)),(e.length>0||Object.keys(n).length>0)&&(o[I]=new W(e,n)),o}parseSegment(){let r=ji(this.remaining);if(r===""&&this.peekStartsWith(";"))throw new $(4009,!1);return this.capture(r),new Vt(go(r),this.parseMatrixParams())}parseMatrixParams(){let r={};for(;this.consumeOptional(";");)this.parseParam(r);return r}parseParam(r){let e=mm(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let o=ji(this.remaining);o&&(n=o,this.capture(n))}r[go(e)]=go(n)}parseQueryParam(r){let e=gm(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let a=vm(this.remaining);a&&(n=a,this.capture(n))}let o=ac(e),i=ac(n);if(r.hasOwnProperty(o)){let a=r[o];Array.isArray(a)||(a=[a],r[o]=a),a.push(i)}else r[o]=i}parseParens(r,e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let o=ji(this.remaining),i=this.remaining[o.length];if(i!=="/"&&i!==")"&&i!==";")throw new $(4010,!1);let a;o.indexOf(":")>-1?(a=o.slice(0,o.indexOf(":")),this.capture(a),this.capture(":")):r&&(a=I);let s=this.parseChildren(e+1);n[a??I]=Object.keys(s).length===1&&s[I]?s[I]:new W([],s),this.consumeOptional("//")}return n}peekStartsWith(r){return this.remaining.startsWith(r)}consumeOptional(r){return this.peekStartsWith(r)?(this.remaining=this.remaining.substring(r.length),!0):!1}capture(r){if(!this.consumeOptional(r))throw new $(4011,!1)}};function Cc(t){return t.segments.length>0?new W([],{[I]:t}):t}function wc(t){let r={};for(let[n,o]of Object.entries(t.children)){let i=wc(o);if(n===I&&i.segments.length===0&&i.hasChildren())for(let[a,s]of Object.entries(i.children))r[a]=s;else(i.segments.length>0||i.hasChildren())&&(r[n]=i)}let e=new W(t.segments,r);return ym(e)}function ym(t){if(t.numberOfChildren===1&&t.children[I]){let r=t.children[I];return new W(t.segments.concat(r.segments),r.children)}return t}function on(t){return t instanceof Ke}function _m(t,r,e=null,n=null,o=new jt){let i=Dc(t);return Sc(i,r,e,n,o)}function Dc(t){let r;function e(i){let a={};for(let c of i.children){let l=e(c);a[c.outlet]=l}let s=new W(i.url,a);return i===t&&(r=s),s}let n=e(t.root),o=Cc(n);return r??o}function Sc(t,r,e,n,o){let i=t;for(;i.parent;)i=i.parent;if(r.length===0)return $i(i,i,i,e,n,o);let a=Cm(r);if(a.toRoot())return $i(i,i,new W([],{}),e,n,o);let s=wm(a,i,t),c=s.processChildren?Yn(s.segmentGroup,s.index,a.commands):xc(s.segmentGroup,s.index,a.commands);return $i(i,s.segmentGroup,c,e,n,o)}function vo(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Qn(t){return typeof t=="object"&&t!=null&&t.outlets}function sc(t,r,e){t||="\u0275";let n=new Ke;return n.queryParams={[t]:r},e.parse(e.serialize(n)).queryParams[t]}function $i(t,r,e,n,o,i){let a={};for(let[l,u]of Object.entries(n??{}))a[l]=Array.isArray(u)?u.map(p=>sc(l,p,i)):sc(l,u,i);let s;t===r?s=e:s=Ec(t,r,e);let c=Cc(wc(s));return new Ke(c,a,o)}function Ec(t,r,e){let n={};return Object.entries(t.children).forEach(([o,i])=>{i===r?n[o]=e:n[o]=Ec(i,r,e)}),new W(t.segments,n)}var yo=class{isAbsolute;numberOfDoubleDots;commands;constructor(r,e,n){if(this.isAbsolute=r,this.numberOfDoubleDots=e,this.commands=n,r&&n.length>0&&vo(n[0]))throw new $(4003,!1);let o=n.find(Qn);if(o&&o!==nm(n))throw new $(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Cm(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new yo(!0,0,t);let r=0,e=!1,n=t.reduce((o,i,a)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let s={};return Object.entries(i.outlets).forEach(([c,l])=>{s[c]=typeof l=="string"?l.split("/"):l}),[...o,{outlets:s}]}if(i.segmentPath)return[...o,i.segmentPath]}return typeof i!="string"?[...o,i]:a===0?(i.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?r++:s!=""&&o.push(s))}),o):[...o,i]},[]);return new yo(e,r,n)}var tn=class{segmentGroup;processChildren;index;constructor(r,e,n){this.segmentGroup=r,this.processChildren=e,this.index=n}};function wm(t,r,e){if(t.isAbsolute)return new tn(r,!0,0);if(!e)return new tn(r,!1,NaN);if(e.parent===null)return new tn(e,!0,0);let n=vo(t.commands[0])?0:1,o=e.segments.length-1+n;return Dm(e,o,t.numberOfDoubleDots)}function Dm(t,r,e){let n=t,o=r,i=e;for(;i>o;){if(i-=o,n=n.parent,!n)throw new $(4005,!1);o=n.segments.length}return new tn(n,!1,o-i)}function Sm(t){return Qn(t[0])?t[0].outlets:{[I]:t}}function xc(t,r,e){if(t??=new W([],{}),t.segments.length===0&&t.hasChildren())return Yn(t,r,e);let n=Em(t,r,e),o=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let i=new W(t.segments.slice(0,n.pathIndex),{});return i.children[I]=new W(t.segments.slice(n.pathIndex),t.children),Yn(i,0,o)}else return n.match&&o.length===0?new W(t.segments,{}):n.match&&!t.hasChildren()?Yi(t,r,e):n.match?Yn(t,0,o):Yi(t,r,e)}function Yn(t,r,e){if(e.length===0)return new W(t.segments,{});{let n=Sm(e),o={};if(Object.keys(n).some(i=>i!==I)&&t.children[I]&&t.numberOfChildren===1&&t.children[I].segments.length===0){let i=Yn(t.children[I],r,e);return new W(t.segments,i.children)}return Object.entries(n).forEach(([i,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(o[i]=xc(t.children[i],r,a))}),Object.entries(t.children).forEach(([i,a])=>{n[i]===void 0&&(o[i]=a)}),new W(t.segments,o)}}function Em(t,r,e){let n=0,o=r,i={match:!1,pathIndex:0,commandIndex:0};for(;o<t.segments.length;){if(n>=e.length)return i;let a=t.segments[o],s=e[n];if(Qn(s))break;let c=`${s}`,l=n<e.length-1?e[n+1]:null;if(o>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!lc(c,l,a))return i;n+=2}else{if(!lc(c,{},a))return i;n++}o++}return{match:!0,pathIndex:o,commandIndex:n}}function Yi(t,r,e){let n=t.segments.slice(0,r),o=0;for(;o<e.length;){let i=e[o];if(Qn(i)){let c=xm(i.outlets);return new W(n,c)}if(o===0&&vo(e[0])){let c=t.segments[r];n.push(new Vt(c.path,cc(e[0]))),o++;continue}let a=Qn(i)?i.outlets[I]:`${i}`,s=o<e.length-1?e[o+1]:null;a&&s&&vo(s)?(n.push(new Vt(a,cc(s))),o+=2):(n.push(new Vt(a,{})),o++)}return new W(n,{})}function xm(t){let r={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(r[e]=Yi(new W([],{}),0,n))}),r}function cc(t){let r={};return Object.entries(t).forEach(([e,n])=>r[e]=`${n}`),r}function lc(t,r,e){return t==e.path&&nt(r,e.parameters)}var Zn="imperative",_e=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(_e||{}),je=class{id;url;constructor(r,e){this.id=r,this.url=e}},an=class extends je{type=_e.NavigationStart;navigationTrigger;restoredState;constructor(r,e,n="imperative",o=null){super(r,e),this.navigationTrigger=n,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},xt=class extends je{urlAfterRedirects;type=_e.NavigationEnd;constructor(r,e,n){super(r,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},xe=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(xe||{}),_o=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(_o||{}),Ge=class extends je{reason;code;type=_e.NavigationCancel;constructor(r,e,n,o){super(r,e),this.reason=n,this.code=o}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function kc(t){return t instanceof Ge&&(t.code===xe.Redirect||t.code===xe.SupersededByNewNavigation)}var kt=class extends je{reason;code;type=_e.NavigationSkipped;constructor(r,e,n,o){super(r,e),this.reason=n,this.code=o}},sn=class extends je{error;target;type=_e.NavigationError;constructor(r,e,n,o){super(r,e),this.error=n,this.target=o}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Co=class extends je{urlAfterRedirects;state;type=_e.RoutesRecognized;constructor(r,e,n,o){super(r,e),this.urlAfterRedirects=n,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Zi=class extends je{urlAfterRedirects;state;type=_e.GuardsCheckStart;constructor(r,e,n,o){super(r,e),this.urlAfterRedirects=n,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xi=class extends je{urlAfterRedirects;state;shouldActivate;type=_e.GuardsCheckEnd;constructor(r,e,n,o,i){super(r,e),this.urlAfterRedirects=n,this.state=o,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Qi=class extends je{urlAfterRedirects;state;type=_e.ResolveStart;constructor(r,e,n,o){super(r,e),this.urlAfterRedirects=n,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ji=class extends je{urlAfterRedirects;state;type=_e.ResolveEnd;constructor(r,e,n,o){super(r,e),this.urlAfterRedirects=n,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ea=class{route;type=_e.RouteConfigLoadStart;constructor(r){this.route=r}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ta=class{route;type=_e.RouteConfigLoadEnd;constructor(r){this.route=r}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},na=class{snapshot;type=_e.ChildActivationStart;constructor(r){this.snapshot=r}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ra=class{snapshot;type=_e.ChildActivationEnd;constructor(r){this.snapshot=r}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},oa=class{snapshot;type=_e.ActivationStart;constructor(r){this.snapshot=r}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ia=class{snapshot;type=_e.ActivationEnd;constructor(r){this.snapshot=r}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var cn=class{},Jn=class{},ln=class{url;navigationBehaviorOptions;constructor(r,e){this.url=r,this.navigationBehaviorOptions=e}};function km(t){return!(t instanceof cn)&&!(t instanceof ln)&&!(t instanceof Jn)}var aa=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(r){this.rootInjector=r,this.children=new ir(this.rootInjector)}},ir=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let o=this.getOrCreateContext(e);o.outlet=n,this.contexts.set(e,o)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new aa(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(z(at))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),wo=class{_root;constructor(r){this._root=r}get root(){return this._root.value}parent(r){let e=this.pathFromRoot(r);return e.length>1?e[e.length-2]:null}children(r){let e=sa(r,this._root);return e?e.children.map(n=>n.value):[]}firstChild(r){let e=sa(r,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(r){let e=ca(r,this._root);return e.length<2?[]:e[e.length-2].children.map(o=>o.value).filter(o=>o!==r)}pathFromRoot(r){return ca(r,this._root).map(e=>e.value)}};function sa(t,r){if(t===r.value)return r;for(let e of r.children){let n=sa(t,e);if(n)return n}return null}function ca(t,r){if(t===r.value)return[r];for(let e of r.children){let n=ca(t,e);if(n.length)return n.unshift(r),n}return[]}var Te=class{value;children;constructor(r,e){this.value=r,this.children=e}toString(){return`TreeNode(${this.value})`}};function en(t){let r={};return t&&t.children.forEach(e=>r[e.value.outlet]=e),r}var Do=class extends wo{snapshot;constructor(r,e){super(r),this.snapshot=e,va(this,r)}toString(){return this.snapshot.toString()}};function Ic(t,r){let e=Im(t,r),n=new ke([new Vt("",{})]),o=new ke({}),i=new ke({}),a=new ke({}),s=new ke(""),c=new $t(n,o,a,s,i,I,t,e.root);return c.snapshot=e.root,new Do(new Te(c,[]),e)}function Im(t,r){let e={},n={},o={},a=new er([],e,o,"",n,I,t,null,{},r);return new So("",new Te(a,[]))}var $t=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(r,e,n,o,i,a,s,c){this.urlSubject=r,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=o,this.dataSubject=i,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(pe(l=>l[or]))??M(void 0),this.url=r,this.params=e,this.queryParams=n,this.fragment=o,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(pe(r=>rn(r))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(pe(r=>rn(r))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ba(t,r,e="emptyOnly"){let n,{routeConfig:o}=t;return r!==null&&(e==="always"||o?.path===""||!r.component&&!r.routeConfig?.loadComponent)?n={params:h(h({},r.params),t.params),data:h(h({},r.data),t.data),resolve:h(h(h(h({},t.data),r.data),o?.data),t._resolvedData)}:n={params:h({},t.params),data:h({},t.data),resolve:h(h({},t.data),t._resolvedData??{})},o&&Mc(o)&&(n.resolve[or]=o.title),n}var er=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[or]}constructor(r,e,n,o,i,a,s,c,l,u){this.url=r,this.params=e,this.queryParams=n,this.fragment=o,this.data=i,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=l,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=rn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=rn(this.queryParams),this._queryParamMap}toString(){let r=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${r}', path:'${e}')`}},So=class extends wo{url;constructor(r,e){super(e),this.url=r,va(this,e)}toString(){return Ac(this._root)}};function va(t,r){r.value._routerState=t,r.children.forEach(e=>va(t,e))}function Ac(t){let r=t.children.length>0?` { ${t.children.map(Ac).join(", ")} } `:"";return`${t.value}${r}`}function zi(t){if(t.snapshot){let r=t.snapshot,e=t._futureSnapshot;t.snapshot=e,nt(r.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),r.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),nt(r.params,e.params)||t.paramsSubject.next(e.params),tm(r.url,e.url)||t.urlSubject.next(e.url),nt(r.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function la(t,r){let e=nt(t.params,r.params)&&am(t.url,r.url),n=!t.parent!=!r.parent;return e&&!n&&(!t.parent||la(t.parent,r.parent))}function Mc(t){return typeof t.title=="string"||t.title===null}var Am=new _(""),Rc=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=I;activateEvents=new G;deactivateEvents=new G;attachEvents=new G;detachEvents=new G;routerOutletData=be();parentContexts=d(ir);location=d(Bn);changeDetector=d(Re);inputBinder=d(Io,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:o}=e.name;if(n)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new $(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new $(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new $(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new $(4013,!1);this._activatedRoute=e;let o=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new da(e,s,o.injector,this.routerOutletData);this.activated=o.createComponent(a,{index:o.length,injector:c,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Be]})}return t})(),da=class{route;childContexts;parent;outletData;constructor(r,e,n,o){this.route=r,this.childContexts=e,this.parent=n,this.outletData=o}get(r,e){return r===$t?this.route:r===ir?this.childContexts:r===Am?this.outletData:this.parent.get(r,e)}},Io=new _("");var Tc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,o){n&1&&ie(0,"router-outlet")},dependencies:[Rc],encapsulation:2})}return t})();function ya(t){let r=t.children&&t.children.map(ya),e=r?j(h({},t),{children:r}):h({},t);return!e.component&&!e.loadComponent&&(r||e.loadChildren)&&e.outlet&&e.outlet!==I&&(e.component=Tc),e}function Mm(t,r,e){let n=tr(t,r._root,e?e._root:void 0);return new Do(n,r)}function tr(t,r,e){if(e&&t.shouldReuseRoute(r.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=r.value;let o=Rm(t,r,e);return new Te(n,o)}else{if(t.shouldAttach(r.value)){let i=t.retrieve(r.value);if(i!==null){let a=i.route;return a.value._futureSnapshot=r.value,a.children=r.children.map(s=>tr(t,s)),a}}let n=Tm(r.value),o=r.children.map(i=>tr(t,i));return new Te(n,o)}}function Rm(t,r,e){return r.children.map(n=>{for(let o of e.children)if(t.shouldReuseRoute(n.value,o.value.snapshot))return tr(t,n,o);return tr(t,n)})}function Tm(t){return new $t(new ke(t.url),new ke(t.params),new ke(t.queryParams),new ke(t.fragment),new ke(t.data),t.outlet,t.component,t)}var nr=class{redirectTo;navigationBehaviorOptions;constructor(r,e){this.redirectTo=r,this.navigationBehaviorOptions=e}},Fc="ngNavigationCancelingError";function Eo(t,r){let{redirectTo:e,navigationBehaviorOptions:n}=on(r)?{redirectTo:r,navigationBehaviorOptions:void 0}:r,o=Oc(!1,xe.Redirect);return o.url=e,o.navigationBehaviorOptions=n,o}function Oc(t,r){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Fc]=!0,e.cancellationCode=r,e}function Fm(t){return Nc(t)&&on(t.url)}function Nc(t){return!!t&&t[Fc]}var ua=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(r,e,n,o,i){this.routeReuseStrategy=r,this.futureState=e,this.currState=n,this.forwardEvent=o,this.inputBindingEnabled=i}activate(r){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,r),zi(this.futureState.root),this.activateChildRoutes(e,n,r)}deactivateChildRoutes(r,e,n){let o=en(e);r.children.forEach(i=>{let a=i.value.outlet;this.deactivateRoutes(i,o[a],n),delete o[a]}),Object.values(o).forEach(i=>{this.deactivateRouteAndItsChildren(i,n)})}deactivateRoutes(r,e,n){let o=r.value,i=e?e.value:null;if(o===i)if(o.component){let a=n.getContext(o.outlet);a&&this.deactivateChildRoutes(r,e,a.children)}else this.deactivateChildRoutes(r,e,n);else i&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(r,e){r.value.component&&this.routeReuseStrategy.shouldDetach(r.value.snapshot)?this.detachAndStoreRouteSubtree(r,e):this.deactivateRouteAndOutlet(r,e)}detachAndStoreRouteSubtree(r,e){let n=e.getContext(r.value.outlet),o=n&&r.value.component?n.children:e,i=en(r);for(let a of Object.values(i))this.deactivateRouteAndItsChildren(a,o);if(n&&n.outlet){let a=n.outlet.detach(),s=n.children.onOutletDeactivated();this.routeReuseStrategy.store(r.value.snapshot,{componentRef:a,route:r,contexts:s})}}deactivateRouteAndOutlet(r,e){let n=e.getContext(r.value.outlet),o=n&&r.value.component?n.children:e,i=en(r);for(let a of Object.values(i))this.deactivateRouteAndItsChildren(a,o);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(r,e,n){let o=en(e);r.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],n),this.forwardEvent(new ia(i.value.snapshot))}),r.children.length&&this.forwardEvent(new ra(r.value.snapshot))}activateRoutes(r,e,n){let o=r.value,i=e?e.value:null;if(zi(o),o===i)if(o.component){let a=n.getOrCreateContext(o.outlet);this.activateChildRoutes(r,e,a.children)}else this.activateChildRoutes(r,e,n);else if(o.component){let a=n.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let s=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),zi(s.route.value),this.activateChildRoutes(r,null,a.children)}else a.attachRef=null,a.route=o,a.outlet&&a.outlet.activateWith(o,a.injector),this.activateChildRoutes(r,null,a.children)}else this.activateChildRoutes(r,null,n)}},xo=class{path;route;constructor(r){this.path=r,this.route=this.path[this.path.length-1]}},nn=class{component;route;constructor(r,e){this.component=r,this.route=e}};function Om(t,r,e){let n=t._root,o=r?r._root:null;return Kn(n,o,e,[n.value])}function Nm(t){let r=t.routeConfig?t.routeConfig.canActivateChild:null;return!r||r.length===0?null:{node:t,guards:r}}function un(t,r){let e=Symbol(),n=r.get(t,e);return n===e?typeof t=="function"&&!Ds(t)?t:r.get(t):n}function Kn(t,r,e,n,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=en(r);return t.children.forEach(a=>{Pm(a,i[a.value.outlet],e,n.concat([a.value]),o),delete i[a.value.outlet]}),Object.entries(i).forEach(([a,s])=>Xn(s,e.getContext(a),o)),o}function Pm(t,r,e,n,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=t.value,a=r?r.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&i.routeConfig===a.routeConfig){let c=Bm(a,i,i.routeConfig.runGuardsAndResolvers);c?o.canActivateChecks.push(new xo(n)):(i.data=a.data,i._resolvedData=a._resolvedData),i.component?Kn(t,r,s?s.children:null,n,o):Kn(t,r,e,n,o),c&&s&&s.outlet&&s.outlet.isActivated&&o.canDeactivateChecks.push(new nn(s.outlet.component,a))}else a&&Xn(r,s,o),o.canActivateChecks.push(new xo(n)),i.component?Kn(t,null,s?s.children:null,n,o):Kn(t,null,e,n,o);return o}function Bm(t,r,e){if(typeof e=="function")return Pe(r._environmentInjector,()=>e(t,r));switch(e){case"pathParamsChange":return!Ut(t.url,r.url);case"pathParamsOrQueryParamsChange":return!Ut(t.url,r.url)||!nt(t.queryParams,r.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!la(t,r)||!nt(t.queryParams,r.queryParams);default:return!la(t,r)}}function Xn(t,r,e){let n=en(t),o=t.value;Object.entries(n).forEach(([i,a])=>{o.component?r?Xn(a,r.children.getContext(i),e):Xn(a,null,e):Xn(a,r,e)}),o.component?r&&r.outlet&&r.outlet.isActivated?e.canDeactivateChecks.push(new nn(r.outlet.component,o)):e.canDeactivateChecks.push(new nn(null,o)):e.canDeactivateChecks.push(new nn(null,o))}function ar(t){return typeof t=="function"}function Lm(t){return typeof t=="boolean"}function Vm(t){return t&&ar(t.canLoad)}function Um(t){return t&&ar(t.canActivate)}function jm(t){return t&&ar(t.canActivateChild)}function $m(t){return t&&ar(t.canDeactivate)}function zm(t){return t&&ar(t.canMatch)}function Pc(t){return t instanceof fs||t?.name==="EmptyError"}var ho=Symbol("INITIAL_VALUE");function dn(){return Ne(t=>gs(t.map(r=>r.pipe(qt(1),Kt(ho)))).pipe(pe(r=>{for(let e of r)if(e!==!0){if(e===ho)return ho;if(e===!1||Hm(e))return e}return!0}),gt(r=>r!==ho),qt(1)))}function Hm(t){return on(t)||t instanceof nr}function Bc(t){return t.aborted?M(void 0).pipe(qt(1)):new hs(r=>{let e=()=>{r.next(),r.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function Lc(t){return ze(Bc(t))}function Wm(t){return ft(r=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:o,canDeactivateChecks:i}}=r;return i.length===0&&o.length===0?M(j(h({},r),{guardsResult:!0})):Gm(i,e,n).pipe(ft(a=>a&&Lm(a)?qm(e,o,t):M(a)),pe(a=>j(h({},r),{guardsResult:a})))})}function Gm(t,r,e){return Ie(t).pipe(ft(n=>Qm(n.component,n.route,e,r)),bt(n=>n!==!0,!0))}function qm(t,r,e){return Ie(r).pipe(gi(n=>bs(Ym(n.route.parent,e),Km(n.route,e),Xm(t,n.path),Zm(t,n.route))),bt(n=>n!==!0,!0))}function Km(t,r){return t!==null&&r&&r(new oa(t)),M(!0)}function Ym(t,r){return t!==null&&r&&r(new na(t)),M(!0)}function Zm(t,r){let e=r.routeConfig?r.routeConfig.canActivate:null;if(!e||e.length===0)return M(!0);let n=e.map(o=>Kr(()=>{let i=r._environmentInjector,a=un(o,i),s=Um(a)?a.canActivate(r,t):Pe(i,()=>a(r,t));return zt(s).pipe(bt())}));return M(n).pipe(dn())}function Xm(t,r){let e=r[r.length-1],o=r.slice(0,r.length-1).reverse().map(i=>Nm(i)).filter(i=>i!==null).map(i=>Kr(()=>{let a=i.guards.map(s=>{let c=i.node._environmentInjector,l=un(s,c),u=jm(l)?l.canActivateChild(e,t):Pe(c,()=>l(e,t));return zt(u).pipe(bt())});return M(a).pipe(dn())}));return M(o).pipe(dn())}function Qm(t,r,e,n){let o=r&&r.routeConfig?r.routeConfig.canDeactivate:null;if(!o||o.length===0)return M(!0);let i=o.map(a=>{let s=r._environmentInjector,c=un(a,s),l=$m(c)?c.canDeactivate(t,r,e,n):Pe(s,()=>c(t,r,e,n));return zt(l).pipe(bt())});return M(i).pipe(dn())}function Jm(t,r,e,n,o){let i=r.canLoad;if(i===void 0||i.length===0)return M(!0);let a=i.map(s=>{let c=un(s,t),l=Vm(c)?c.canLoad(r,e):Pe(t,()=>c(r,e)),u=zt(l);return o?u.pipe(Lc(o)):u});return M(a).pipe(dn(),Vc(n))}function Vc(t){return ps(Me(r=>{if(typeof r!="boolean")throw Eo(t,r)}),pe(r=>r===!0))}function ef(t,r,e,n,o,i){let a=r.canMatch;if(!a||a.length===0)return M(!0);let s=a.map(c=>{let l=un(c,t),u=zm(l)?l.canMatch(r,e,o):Pe(t,()=>l(r,e,o));return zt(u).pipe(Lc(i))});return M(s).pipe(dn(),Vc(n))}var ut=class t extends Error{segmentGroup;constructor(r){super(),this.segmentGroup=r||null,Object.setPrototypeOf(this,t.prototype)}},rr=class t extends Error{urlTree;constructor(r){super(),this.urlTree=r,Object.setPrototypeOf(this,t.prototype)}};function tf(t){throw new $(4e3,!1)}function nf(t){throw Oc(!1,xe.GuardRejected)}var pa=class{urlSerializer;urlTree;constructor(r,e){this.urlSerializer=r,this.urlTree=e}async lineralizeSegments(r,e){let n=[],o=e.root;for(;;){if(n=n.concat(o.segments),o.numberOfChildren===0)return n;if(o.numberOfChildren>1||!o.children[I])throw tf(`${r.redirectTo}`);o=o.children[I]}}async applyRedirectCommands(r,e,n,o,i){let a=await rf(e,o,i);if(a instanceof Ke)throw new rr(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),r,n);if(a[0]==="/")throw new rr(s);return s}applyRedirectCreateUrlTree(r,e,n,o){let i=this.createSegmentGroup(r,e.root,n,o);return new Ke(i,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(r,e){let n={};return Object.entries(r).forEach(([o,i])=>{if(typeof i=="string"&&i[0]===":"){let s=i.substring(1);n[o]=e[s]}else n[o]=i}),n}createSegmentGroup(r,e,n,o){let i=this.createSegments(r,e.segments,n,o),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(r,c,n,o)}),new W(i,a)}createSegments(r,e,n,o){return e.map(i=>i.path[0]===":"?this.findPosParam(r,i,o):this.findOrReturn(i,n))}findPosParam(r,e,n){let o=n[e.path.substring(1)];if(!o)throw new $(4001,!1);return o}findOrReturn(r,e){let n=0;for(let o of e){if(o.path===r.path)return e.splice(n),o;n++}return r}};function rf(t,r,e){if(typeof t=="string")return Promise.resolve(t);let n=t;return bo(zt(Pe(e,()=>n(r))))}function of(t,r){return t.providers&&!t._injector&&(t._injector=Ci(t.providers,r,`Route: ${t.path}`)),t._injector??r}function qe(t){return t.outlet||I}function af(t,r){let e=t.filter(n=>qe(n)===r);return e.push(...t.filter(n=>qe(n)!==r)),e}var ha={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Uc(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function sf(t,r,e,n,o,i,a){let s=jc(t,r,e);if(!s.matched)return M(s);let c=Uc(i(s));return n=of(r,n),ef(n,r,e,o,c,a).pipe(pe(l=>l===!0?s:h({},ha)))}function jc(t,r,e){if(r.path==="")return r.pathMatch==="full"&&(t.hasChildren()||e.length>0)?h({},ha):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let o=(r.matcher||em)(e,t,r);if(!o)return h({},ha);let i={};Object.entries(o.posParams??{}).forEach(([s,c])=>{i[s]=c.path});let a=o.consumed.length>0?h(h({},i),o.consumed[o.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:o.consumed,remainingSegments:e.slice(o.consumed.length),parameters:a,positionalParamSegments:o.posParams??{}}}function dc(t,r,e,n,o){return e.length>0&&df(t,e,n,o)?{segmentGroup:new W(r,lf(n,new W(e,t.children))),slicedSegments:[]}:e.length===0&&uf(t,e,n)?{segmentGroup:new W(t.segments,cf(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new W(t.segments,t.children),slicedSegments:e}}function cf(t,r,e,n){let o={};for(let i of e)if(Ao(t,r,i)&&!n[qe(i)]){let a=new W([],{});o[qe(i)]=a}return h(h({},n),o)}function lf(t,r){let e={};e[I]=r;for(let n of t)if(n.path===""&&qe(n)!==I){let o=new W([],{});e[qe(n)]=o}return e}function df(t,r,e,n){return e.some(o=>!Ao(t,r,o)||!(qe(o)!==I)?!1:!(n!==void 0&&qe(o)===n))}function uf(t,r,e){return e.some(n=>Ao(t,r,n))}function Ao(t,r,e){return(t.hasChildren()||r.length>0)&&e.pathMatch==="full"?!1:e.path===""}function pf(t,r,e){return r.length===0&&!t.children[e]}var ma=class{};async function hf(t,r,e,n,o,i,a="emptyOnly",s){return new fa(t,r,e,n,o,a,i,s).recognize()}var mf=31,fa=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(r,e,n,o,i,a,s,c){this.injector=r,this.configLoader=e,this.rootComponentType=n,this.config=o,this.urlTree=i,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new pa(this.urlSerializer,this.urlTree)}noMatchError(r){return new $(4002,`'${r.segmentGroup}'`)}async recognize(){let r=dc(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(r),o=new Te(n,e),i=new So("",o),a=_m(n,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(a),{state:i,tree:a}}async match(r){let e=new er([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),I,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,r,I,e),rootSnapshot:e}}catch(n){if(n instanceof rr)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof ut?this.noMatchError(n):n}}async processSegmentGroup(r,e,n,o,i){if(n.segments.length===0&&n.hasChildren())return this.processChildren(r,e,n,i);let a=await this.processSegment(r,e,n,n.segments,o,!0,i);return a instanceof Te?[a]:[]}async processChildren(r,e,n,o){let i=[];for(let c of Object.keys(n.children))c==="primary"?i.unshift(c):i.push(c);let a=[];for(let c of i){let l=n.children[c],u=af(e,c),p=await this.processSegmentGroup(r,u,l,c,o);a.push(...p)}let s=$c(a);return ff(s),s}async processSegment(r,e,n,o,i,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??r,e,c,n,o,i,a,s)}catch(l){if(l instanceof ut||Pc(l))continue;throw l}if(pf(n,o,i))return new ma;throw new ut(n)}async processSegmentAgainstRoute(r,e,n,o,i,a,s,c){if(qe(n)!==a&&(a===I||!Ao(o,i,n)))throw new ut(o);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(r,o,n,i,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(r,o,e,n,i,a,c);throw new ut(o)}async expandSegmentAgainstRouteUsingRedirect(r,e,n,o,i,a,s){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:p,remainingSegments:m}=jc(e,o,i);if(!c)throw new ut(e);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>mf&&(this.allowRedirects=!1));let g=this.createSnapshot(r,o,i,l,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let D=await this.applyRedirects.applyRedirectCommands(u,o.redirectTo,p,Uc(g),r),E=await this.applyRedirects.lineralizeSegments(o,D);return this.processSegment(r,n,e,E.concat(m),a,!1,s)}createSnapshot(r,e,n,o,i){let a=new er(n,o,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,bf(e),qe(e),e.component??e._loadedComponent??null,e,vf(e),r),s=ba(a,i,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(r,e,n,o,i,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=se=>this.createSnapshot(r,n,se.consumedSegments,se.parameters,a),c=await bo(sf(e,n,o,r,this.urlSerializer,s,this.abortSignal));if(n.path==="**"&&(e.children={}),!c?.matched)throw new ut(e);r=n._injector??r;let{routes:l}=await this.getChildConfig(r,n,o),u=n._loadedInjector??r,{parameters:p,consumedSegments:m,remainingSegments:g}=c,D=this.createSnapshot(r,n,m,p,a),{segmentGroup:E,slicedSegments:B}=dc(e,m,g,l,i);if(B.length===0&&E.hasChildren()){let se=await this.processChildren(u,l,E,D);return new Te(D,se)}if(l.length===0&&B.length===0)return new Te(D,[]);let ee=qe(n)===i,Q=await this.processSegment(u,l,E,B,ee?I:i,!0,D);return new Te(D,Q instanceof Te?[Q]:[])}async getChildConfig(r,e,n){if(e.children)return{routes:e.children,injector:r};if(e.loadChildren){if(e._loadedRoutes!==void 0){let i=e._loadedNgModuleFactory;return i&&!e._loadedInjector&&(e._loadedInjector=i.create(r).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await bo(Jm(r,e,n,this.urlSerializer,this.abortSignal))){let i=await this.configLoader.loadChildren(r,e);return e._loadedRoutes=i.routes,e._loadedInjector=i.injector,e._loadedNgModuleFactory=i.factory,i}throw nf(e)}return{routes:[],injector:r}}};function ff(t){t.sort((r,e)=>r.value.outlet===I?-1:e.value.outlet===I?1:r.value.outlet.localeCompare(e.value.outlet))}function gf(t){let r=t.value.routeConfig;return r&&r.path===""}function $c(t){let r=[],e=new Set;for(let n of t){if(!gf(n)){r.push(n);continue}let o=r.find(i=>n.value.routeConfig===i.value.routeConfig);o!==void 0?(o.children.push(...n.children),e.add(o)):r.push(n)}for(let n of e){let o=$c(n.children);r.push(new Te(n.value,o))}return r.filter(n=>!e.has(n))}function bf(t){return t.data||{}}function vf(t){return t.resolve||{}}function yf(t,r,e,n,o,i,a){return ft(async s=>{let{state:c,tree:l}=await hf(t,r,e,n,s.extractedUrl,o,i,a);return j(h({},s),{targetSnapshot:c,urlAfterRedirects:l})})}function _f(t){return ft(r=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=r;if(!n.length)return M(r);let o=new Set(n.map(s=>s.route)),i=new Set;for(let s of o)if(!i.has(s))for(let c of zc(s))i.add(c);let a=0;return Ie(i).pipe(gi(s=>o.has(s)?Cf(s,e,t):(s.data=ba(s,s.parent,t).resolve,M(void 0))),Me(()=>a++),bi(1),ft(s=>a===i.size?M(r):Oe))})}function zc(t){let r=t.children.map(e=>zc(e)).flat();return[t,...r]}function Cf(t,r,e){let n=t.routeConfig,o=t._resolve;return n?.title!==void 0&&!Mc(n)&&(o[or]=n.title),Kr(()=>(t.data=ba(t,t.parent,e).resolve,wf(o,t,r).pipe(pe(i=>(t._resolvedData=i,t.data=h(h({},t.data),i),null)))))}function wf(t,r,e){let n=Wi(t);if(n.length===0)return M({});let o={};return Ie(n).pipe(ft(i=>Df(t[i],r,e).pipe(bt(),Me(a=>{if(a instanceof nr)throw Eo(new jt,a);o[i]=a}))),bi(1),pe(()=>o),fi(i=>Pc(i)?Oe:ms(i)))}function Df(t,r,e){let n=r._environmentInjector,o=un(t,n),i=o.resolve?o.resolve(r,e):Pe(n,()=>o(r,e));return zt(i)}function uc(t){return Ne(r=>{let e=t(r);return e?Ie(e).pipe(pe(()=>r)):M(r)})}var Hc=(()=>{class t{buildTitle(e){let n,o=e.root;for(;o!==void 0;)n=this.getResolvedTitleForRoute(o)??n,o=o.children.find(i=>i.outlet===I);return n}getResolvedTitleForRoute(e){return e.data[or]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>d(Sf),providedIn:"root"})}return t})(),Sf=(()=>{class t extends Hc{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(z(rc))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Mo=new _("",{factory:()=>({})}),Ro=new _(""),Wc=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(Ls);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let o=(async()=>{try{let i=await hc(Pe(e,()=>n.loadComponent())),a=await qc(Gc(i));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=a,a}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,o),o}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let o=(async()=>{try{let i=await Ef(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=i.routes,n._loadedInjector=i.injector,n._loadedNgModuleFactory=i.factory,i}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,o),o}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function Ef(t,r,e,n){let o=await hc(Pe(e,()=>t.loadChildren())),i=await qc(Gc(o)),a;i instanceof Os||Array.isArray(i)?a=i:a=await r.compileModuleAsync(i),n&&n(t);let s,c,l=!1,u;return Array.isArray(a)?(c=a,l=!0):(s=a.create(e).injector,u=a,c=s.get(Ro,[],{optional:!0,self:!0}).flat()),{routes:c.map(ya),injector:s,factory:u}}function xf(t){return t&&typeof t=="object"&&"default"in t}function Gc(t){return xf(t)?t.default:t}async function qc(t){return t}var _a=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>d(kf),providedIn:"root"})}return t})(),kf=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Kc=new _("");var If=()=>{},Yc=new _(""),Zc=(()=>{class t{currentNavigation=V(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=V(null);events=new J;transitionAbortWithErrorSubject=new J;configLoader=d(Wc);environmentInjector=d(at);destroyRef=d(Tn);urlSerializer=d(ko);rootContexts=d(ir);location=d(Jt);inputBindingEnabled=d(Io,{optional:!0})!==null;titleStrategy=d(Hc);options=d(Mo,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(_a);createViewTransition=d(Kc,{optional:!0});navigationErrorHandler=d(Yc,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>M(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=o=>this.events.next(new ea(o)),n=o=>this.events.next(new ta(o));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;ge(()=>{this.transitions?.next(j(h({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new ke(null),this.transitions.pipe(gt(n=>n!==null),Ne(n=>{let o=!1,i=new AbortController,a=()=>!o&&this.currentTransition?.id===n.id;return M(n).pipe(Ne(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",xe.SupersededByNewNavigation),Oe;this.currentTransition=n;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?j(h({},c),{previousNavigation:null}):null,abort:()=>i.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&u!=="reload")return this.events.next(new kt(s.id,this.urlSerializer.serialize(s.rawUrl),"",_o.IgnoredSameUrlNavigation)),s.resolve(!1),Oe;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return M(s).pipe(Ne(p=>(this.events.next(new an(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),p.id!==this.navigationId?Oe:Promise.resolve(p))),yf(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,i.signal),Me(p=>{n.targetSnapshot=p.targetSnapshot,n.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation.update(m=>(m.finalUrl=p.urlAfterRedirects,m)),this.events.next(new Jn)}),Ne(p=>Ie(n.routesRecognizeHandler.deferredHandle??M(void 0)).pipe(pe(()=>p))),Me(()=>{let p=new Co(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:p,extractedUrl:m,source:g,restoredState:D,extras:E}=s,B=new an(p,this.urlSerializer.serialize(m),g,D);this.events.next(B);let ee=Ic(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=j(h({},s),{targetSnapshot:ee,urlAfterRedirects:m,extras:j(h({},E),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Q=>(Q.finalUrl=m,Q)),M(n)}else return this.events.next(new kt(s.id,this.urlSerializer.serialize(s.extractedUrl),"",_o.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Oe}),pe(s=>{let c=new Zi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=n=j(h({},s),{guards:Om(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n}),Wm(s=>this.events.next(s)),Ne(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Eo(this.urlSerializer,s.guardsResult);let c=new Xi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return Oe;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",xe.GuardRejected),Oe;if(s.guards.canActivateChecks.length===0)return M(s);let l=new Qi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(l),!a())return Oe;let u=!1;return M(s).pipe(_f(this.paramsInheritanceStrategy),Me({next:()=>{u=!0;let p=new Ji(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)},complete:()=>{u||this.cancelNavigationTransition(s,"",xe.NoDataFromResolver)}}))}),uc(s=>{let c=u=>{let p=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let m=u._environmentInjector;p.push(this.configLoader.loadComponent(m,u.routeConfig).then(g=>{u.component=g}))}for(let m of u.children)p.push(...c(m));return p},l=c(s.targetSnapshot.root);return l.length===0?M(s):Ie(Promise.all(l).then(()=>s))}),uc(()=>this.afterPreactivation()),Ne(()=>{let{currentSnapshot:s,targetSnapshot:c}=n,l=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return l?Ie(l).pipe(pe(()=>n)):M(n)}),qt(1),Ne(s=>{let c=Mm(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=n=s=j(h({},s),{targetRouterState:c}),this.currentNavigation.update(u=>(u.targetRouterState=c,u)),this.events.next(new cn);let l=n.beforeActivateHandler.deferredHandle;return l?Ie(l.then(()=>s)):M(s)}),Me(s=>{new ua(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(o=!0,this.currentNavigation.update(c=>(c.abort=If,c)),this.lastSuccessfulNavigation.set(ge(this.currentNavigation)),this.events.next(new xt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ze(Bc(i.signal).pipe(gt(()=>!o&&!n.targetRouterState),Me(()=>{this.cancelNavigationTransition(n,i.signal.reason+"",xe.Aborted)}))),Me({complete:()=>{o=!0}}),ze(this.transitionAbortWithErrorSubject.pipe(Me(s=>{throw s}))),Cs(()=>{i.abort(),o||this.cancelNavigationTransition(n,"",xe.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),fi(s=>{if(o=!0,this.destroyed)return n.resolve(!1),Oe;if(Nc(s))this.events.next(new Ge(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),Fm(s)?this.events.next(new ln(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let c=new sn(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let l=Pe(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof nr){let{message:u,cancellationCode:p}=Eo(this.urlSerializer,l);this.events.next(new Ge(n.id,this.urlSerializer.serialize(n.extractedUrl),u,p)),this.events.next(new ln(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(l){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(l)}}return Oe}))}))}cancelNavigationTransition(e,n,o){let i=new Ge(e.id,this.urlSerializer.serialize(e.extractedUrl),n,o);this.events.next(i),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=ge(this.currentNavigation),o=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==o?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Af(t){return t!==Zn}var Xc=new _("");var Mf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>d(Rf),providedIn:"root"})}return t})(),ga=class{shouldDetach(r){return!1}store(r,e){}shouldAttach(r){return!1}retrieve(r){return null}shouldReuseRoute(r,e){return r.routeConfig===e.routeConfig}shouldDestroyInjector(r){return!0}},Rf=(()=>{class t extends ga{static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ca=(()=>{class t{urlSerializer=d(ko);options=d(Mo,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(Jt);urlHandlingStrategy=d(_a);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ke;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:o}){let i=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,a=o??i;return a instanceof Ke?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:o}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,o),this.routerState=e):this.rawUrlTree=o}routerState=Ic(null,d(at));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>d(Tf),providedIn:"root"})}return t})(),Tf=(()=>{class t extends Ca{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof an?this.updateStateMemento():e instanceof kt?this.commitTransition(n):e instanceof Co?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof cn?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Ge&&!kc(e)?this.restoreHistory(n):e instanceof sn?this.restoreHistory(n,!0):e instanceof xt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let{extras:o,id:i}=n,{replaceUrl:a,state:s}=o;if(this.location.isCurrentPathEqualTo(e)||a){let c=this.browserPageId,l=h(h({},s),this.generateNgRouterState(i,c,n));this.location.replaceState(e,"",l)}else{let c=h(h({},s),this.generateNgRouterState(i,this.browserPageId+1,n));this.location.go(e,"",c)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,i=this.currentPageId-o;i!==0?this.location.historyGo(i):this.getCurrentUrlTree()===e.finalUrl&&i===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n,o){return this.canceledNavigationResolution==="computed"?h({navigationId:e,\u0275routerPageId:n},this.routerUrlState(o)):h({navigationId:e},this.routerUrlState(o))}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Qc(t,r){t.events.pipe(gt(e=>e instanceof xt||e instanceof Ge||e instanceof sn||e instanceof kt),pe(e=>e instanceof xt||e instanceof kt?0:(e instanceof Ge?e.code===xe.Redirect||e.code===xe.SupersededByNewNavigation:!1)?2:1),gt(e=>e!==2),qt(1)).subscribe(()=>{r()})}var wa=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(Ns);stateManager=d(Ca);options=d(Mo,{optional:!0})||{};pendingTasks=d(Es);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(Zc);urlSerializer=d(ko);location=d(Jt);urlHandlingStrategy=d(_a);injector=d(at);_events=new J;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(Mf);injectorCleanup=d(Xc,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(Ro,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(Io,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new qr;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let o=this.navigationTransitions.currentTransition,i=ge(this.navigationTransitions.currentNavigation);if(o!==null&&i!==null){if(this.stateManager.handleRouterEvent(n,i),n instanceof Ge&&n.code!==xe.Redirect&&n.code!==xe.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof xt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof ln){let a=n.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(n.url,o.currentRawUrl),c=h({scroll:o.extras.scroll,browserUrl:o.extras.browserUrl,info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Af(o.source)},a);this.scheduleNavigation(s,Zn,null,c,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}km(n)&&this._events.next(n)}catch(o){this.navigationTransitions.transitionAbortWithErrorSubject.next(o)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Zn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,o,i)=>{this.navigateToSyncWithBrowser(e,o,n,i)})}navigateToSyncWithBrowser(e,n,o,i){let a=o?.navigationId?o:null,s=o?.\u0275routerUrl??e;if(o?.\u0275routerUrl&&(i=j(h({},i),{browserUrl:e})),o){let l=h({},o);delete l.navigationId,delete l.\u0275routerPageId,delete l.\u0275routerUrl,Object.keys(l).length!==0&&(i.state=l)}let c=this.parseUrl(s);this.scheduleNavigation(c,n,a,i).catch(l=>{this.disposed||this.injector.get(Yr)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ge(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(ya),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:o,queryParams:i,fragment:a,queryParamsHandling:s,preserveFragment:c}=n,l=c?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=h(h({},this.currentUrlTree.queryParams),i);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=i||null}u!==null&&(u=this.removeEmptyProps(u));let p;try{let m=o?o.snapshot:this.routerState.snapshot.root;p=Dc(m)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),p=this.currentUrlTree.root}return Sc(p,e,u,l??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let o=on(e)?e:this.parseUrl(e),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,Zn,null,n)}navigate(e,n={skipLocationChange:!1}){return Ff(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(vi(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let o;if(n===!0?o=h({},fc):n===!1?o=h({},Gi):o=h(h({},Gi),n),on(e))return ic(this.currentUrlTree,e,o);let i=this.parseUrl(e);return ic(this.currentUrlTree,i,o)}removeEmptyProps(e){return Object.entries(e).reduce((n,[o,i])=>(i!=null&&(n[o]=i),n),{})}scheduleNavigation(e,n,o,i,a){if(this.disposed)return Promise.resolve(!1);let s,c,l;a?(s=a.resolve,c=a.reject,l=a.promise):l=new Promise((p,m)=>{s=p,c=m});let u=this.pendingTasks.add();return Qc(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:i,resolve:s,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ff(t){for(let r=0;r<t.length;r++)if(t[r]==null)throw new $(4008,!1)}var Of=new _("");function Da(t,...r){return Yt([{provide:Ro,multi:!0,useValue:t},[],{provide:$t,useFactory:Nf},{provide:Ps,multi:!0,useFactory:Pf},r.map(e=>e.\u0275providers)])}function Nf(){return d(wa).routerState.root}function Pf(){let t=d(ve);return r=>{let e=t.get(Zt);if(r!==e.components[0])return;let n=t.get(wa),o=t.get(Bf);t.get(Lf)===1&&n.initialNavigation(),t.get(Vf,null,{optional:!0})?.setUpPreloading(),t.get(Of,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var Bf=new _("",{factory:()=>new J}),Lf=new _("",{factory:()=>1});var Vf=new _("");var jf={transitionDuration:"{transition.duration}"},$f={borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},zf={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},Hf={borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"},Jc={root:jf,panel:$f,header:zf,content:Hf};var Wf={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},Gf={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},qf={padding:"{list.padding}",gap:"{list.gap}"},Kf={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},Yf={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},Zf={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Xf={borderRadius:"{border.radius.sm}"},Qf={padding:"{list.option.padding}"},Jf={light:{chip:{focusBackground:"{surface.200}",focusColor:"{surface.800}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}},el={root:Wf,overlay:Gf,list:qf,option:Kf,optionGroup:Yf,dropdown:Zf,chip:Xf,emptyMessage:Qf,colorScheme:Jf};var eg={width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},tg={size:"1rem"},ng={borderColor:"{content.background}",offset:"-0.75rem"},rg={width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},og={width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}},tl={root:eg,icon:tg,group:ng,lg:rg,xl:og};var ig={borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},ag={size:"0.5rem"},sg={fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},cg={fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},lg={fontSize:"1rem",minWidth:"2rem",height:"2rem"},dg={light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},nl={root:ig,dot:ag,sm:sg,lg:cg,xl:lg,colorScheme:dg};var ug={borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},pg={transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.3s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}},rl={primitive:ug,semantic:pg};var hg={borderRadius:"{content.border.radius}"},ol={root:hg};var mg={padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},fg={color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},gg={color:"{navigation.item.icon.color}"},il={root:mg,item:fg,separator:gg};var bg={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}",iconOnlyWidth:"2rem"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}",iconOnlyWidth:"3rem"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},vg={light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}},al={root:bg,colorScheme:vg};var yg={background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},_g={padding:"1.25rem",gap:"0.5rem"},Cg={gap:"0.5rem"},wg={fontSize:"1.25rem",fontWeight:"500"},Dg={color:"{text.muted.color}"},sl={root:yg,body:_g,caption:Cg,title:wg,subtitle:Dg};var Sg={transitionDuration:"{transition.duration}"},Eg={gap:"0.25rem"},xg={padding:"1rem",gap:"0.5rem"},kg={width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ig={light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}},cl={root:Sg,content:Eg,indicatorList:xg,indicator:kg,colorScheme:Ig};var Ag={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Mg={width:"2.5rem",color:"{form.field.icon.color}"},Rg={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Tg={padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},Fg={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},Og={color:"{form.field.icon.color}"},ll={root:Ag,dropdown:Mg,overlay:Rg,list:Tg,option:Fg,clearIcon:Og};var Ng={borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},Pg={size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}},dl={root:Ng,icon:Pg};var Bg={borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},Lg={width:"2rem",height:"2rem"},Vg={size:"1rem"},Ug={size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},jg={light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}},ul={root:Bg,image:Lg,icon:Vg,removeIcon:Ug,colorScheme:jg};var $g={transitionDuration:"{transition.duration}"},zg={width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Hg={shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},Wg={light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}},pl={root:$g,preview:zg,panel:Hg,colorScheme:Wg};var Gg={size:"2rem",color:"{overlay.modal.color}"},qg={gap:"1rem"},hl={icon:Gg,content:qg};var Kg={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},Yg={padding:"{overlay.popover.padding}",gap:"1rem"},Zg={size:"1.5rem",color:"{overlay.popover.color}"},Xg={gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"},ml={root:Kg,content:Yg,icon:Zg,footer:Xg};var Qg={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},Jg={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},eb={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},tb={mobileIndent:"1rem"},nb={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},rb={borderColor:"{content.border.color}"},fl={root:Qg,list:Jg,item:eb,submenu:tb,submenuIcon:nb,separator:rb};var gl=`
    li.p-autocomplete-option,
    div.p-cascadeselect-option-content,
    li.p-listbox-option,
    li.p-multiselect-option,
    li.p-select-option,
    li.p-listbox-option,
    div.p-tree-node-content,
    li.p-datatable-filter-constraint,
    .p-datatable .p-datatable-tbody > tr,
    .p-treetable .p-treetable-tbody > tr,
    div.p-menu-item-content,
    div.p-tieredmenu-item-content,
    div.p-contextmenu-item-content,
    div.p-menubar-item-content,
    div.p-megamenu-item-content,
    div.p-panelmenu-header-content,
    div.p-panelmenu-item-content,
    th.p-datatable-header-cell,
    th.p-treetable-header-cell,
    thead.p-datatable-thead > tr > th,
    .p-treetable thead.p-treetable-thead>tr>th {
        transition: none;
    }
`;var ob={transitionDuration:"{transition.duration}"},ib={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},ab={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},sb={fontWeight:"600"},cb={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},lb={borderColor:"{datatable.border.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},db={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},ub={fontWeight:"600"},pb={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},hb={color:"{primary.color}"},mb={width:"0.5rem"},fb={width:"1px",color:"{primary.color}"},gb={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},bb={size:"2rem"},vb={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},yb={inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},_b={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},Cb={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},wb={light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},Db=`
    .p-datatable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`,bl={root:ob,header:ib,headerCell:ab,columnTitle:sb,row:cb,bodyCell:lb,footerCell:db,columnFooter:ub,footer:pb,dropPoint:hb,columnResizer:mb,resizeIndicator:fb,sortIcon:gb,loadingIcon:bb,rowToggleButton:vb,filter:yb,paginatorTop:_b,paginatorBottom:Cb,colorScheme:wb,css:Db};var Sb={borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},Eb={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},xb={background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},kb={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},Ib={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},Ab={borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"},vl={root:Sb,header:Eb,content:xb,footer:kb,paginatorTop:Ib,paginatorBottom:Ab};var Mb={transitionDuration:"{transition.duration}"},Rb={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},Tb={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},Fb={gap:"0.5rem",fontWeight:"500"},Ob={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Nb={color:"{form.field.icon.color}"},Pb={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},Bb={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},Lb={borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},Vb={margin:"0.5rem 0 0 0"},Ub={padding:"0.25rem",fontWeight:"500",color:"{content.color}"},jb={hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},$b={margin:"0.5rem 0 0 0"},zb={padding:"0.375rem",borderRadius:"{content.border.radius}"},Hb={margin:"0.5rem 0 0 0"},Wb={padding:"0.375rem",borderRadius:"{content.border.radius}"},Gb={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},qb={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},Kb={light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}},yl={root:Mb,panel:Rb,header:Tb,title:Fb,dropdown:Ob,inputIcon:Nb,selectMonth:Pb,selectYear:Bb,group:Lb,dayView:Vb,weekDay:Ub,date:jb,monthView:$b,month:zb,yearView:Hb,year:Wb,buttonbar:Gb,timePicker:qb,colorScheme:Kb};var Yb={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},Zb={padding:"{overlay.modal.padding}",gap:"0.5rem"},Xb={fontSize:"1.25rem",fontWeight:"600"},Qb={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},Jb={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"},_l={root:Yb,header:Zb,title:Xb,content:Qb,footer:Jb};var e0={borderColor:"{content.border.color}"},t0={background:"{content.background}",color:"{text.color}"},n0={margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},r0={margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}},Cl={root:e0,content:t0,horizontal:n0,vertical:r0};var o0={background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},i0={borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},wl={root:o0,item:i0};var a0={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},s0={padding:"{overlay.modal.padding}"},c0={fontSize:"1.5rem",fontWeight:"600"},l0={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},d0={padding:"{overlay.modal.padding}"},Dl={root:a0,header:s0,title:c0,content:l0,footer:d0};var u0={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},p0={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},h0={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},m0={focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},f0={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},Sl={toolbar:u0,toolbarItem:p0,overlay:h0,overlayOption:m0,content:f0};var g0={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},b0={background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},v0={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},y0={padding:"0"},El={root:g0,legend:b0,toggleIcon:v0,content:y0};var _0={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},C0={background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},w0={highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem",gap:"1rem"},D0={padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},S0={gap:"0.5rem"},E0={height:"0.25rem"},x0={gap:"0.5rem"},xl={root:_0,header:C0,content:w0,file:D0,fileList:S0,progressbar:E0,basic:x0};var k0={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},I0={active:{top:"-1.25rem"}},A0={input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},M0={borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}},kl={root:k0,over:I0,in:A0,on:M0};var R0={borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},T0={background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},F0={size:"1.5rem"},O0={background:"{content.background}",padding:"1rem 0.25rem"},N0={size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},P0={size:"1rem"},B0={background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},L0={gap:"0.5rem",padding:"1rem"},V0={width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},U0={background:"rgba(0, 0, 0, 0.5)"},j0={background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},$0={size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},z0={size:"1.5rem"},H0={light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}},Il={root:R0,navButton:T0,navIcon:F0,thumbnailsContent:O0,thumbnailNavButton:N0,thumbnailNavButtonIcon:P0,caption:B0,indicatorList:L0,indicatorButton:V0,insetIndicatorList:U0,insetIndicatorButton:j0,closeButton:$0,closeButtonIcon:z0,colorScheme:H0};var W0={color:"{form.field.icon.color}"},Al={icon:W0};var G0={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},q0={paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},Ml={root:G0,input:q0};var K0={transitionDuration:"{transition.duration}"},Y0={icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},Z0={position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},X0={hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Rl={root:K0,preview:Y0,toolbar:Z0,action:X0};var Q0={size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Tl={handle:Q0};var J0={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},ev={fontWeight:"500"},tv={size:"1rem"},nv={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}},Fl={root:J0,text:ev,icon:tv,colorScheme:nv};var rv={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},ov={hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"},Ol={root:rv,display:ov};var iv={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},av={borderRadius:"{border.radius.sm}"},sv={light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}},Nl={root:iv,chip:av,colorScheme:sv};var cv={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"},Pl={addon:cv};var lv={transitionDuration:"{transition.duration}"},dv={width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},uv={light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}},Bl={root:lv,button:dv,colorScheme:uv};var pv={gap:"0.5rem"},hv={width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"}},Ll={root:pv,input:hv};var mv={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Vl={root:mv};var fv={transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},gv={background:"{primary.color}"},bv={background:"{content.border.color}"},vv={color:"{text.muted.color}"},Ul={root:fv,value:gv,range:bv,text:vv};var yv={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},_v={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},Cv={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},wv={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},Dv={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},Sv={padding:"{list.option.padding}"},Ev={light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}},jl={root:yv,list:_v,option:Cv,optionGroup:wv,checkmark:Dv,emptyMessage:Sv,colorScheme:Ev};var xv={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},kv={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},Iv={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},Av={padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},Mv={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},Rv={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},Tv={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},Fv={borderColor:"{content.border.color}"},Ov={borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},$l={root:xv,baseItem:kv,item:Iv,overlay:Av,submenu:Mv,submenuLabel:Rv,submenuIcon:Tv,separator:Fv,mobileButton:Ov};var Nv={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},Pv={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},Bv={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},Lv={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},Vv={borderColor:"{content.border.color}"},zl={root:Nv,list:Pv,item:Bv,submenuLabel:Lv,separator:Vv};var Uv={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},jv={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},$v={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},zv={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},Hv={borderColor:"{content.border.color}"},Wv={borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Hl={root:Uv,baseItem:jv,item:$v,submenu:zv,separator:Hv,mobileButton:Wv};var Gv={borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},qv={padding:"0.5rem 0.75rem",gap:"0.5rem",sm:{padding:"0.375rem 0.625rem"},lg:{padding:"0.625rem 0.875rem"}},Kv={fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},Yv={size:"1.125rem",sm:{size:"1rem"},lg:{size:"1.25rem"}},Zv={width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},Xv={size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},Qv={root:{borderWidth:"1px"}},Jv={content:{padding:"0"}},ey={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.600}",borderColor:"{yellow.600}"},simple:{color:"{yellow.600}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.500}",borderColor:"{surface.500}"},simple:{color:"{surface.500}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}},Wl={root:Gv,content:qv,text:Kv,icon:Yv,closeButton:Zv,closeIcon:Xv,outlined:Qv,simple:Jv,colorScheme:ey};var ty={borderRadius:"{content.border.radius}",gap:"1rem"},ny={background:"{content.border.color}",size:"0.5rem"},ry={gap:"0.5rem"},oy={size:"0.5rem"},iy={size:"1rem"},ay={verticalGap:"0.5rem",horizontalGap:"1rem"},Gl={root:ty,meters:ny,label:ry,labelMarker:oy,labelIcon:iy,labelList:ay};var sy={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},cy={width:"2.5rem",color:"{form.field.icon.color}"},ly={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},dy={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},uy={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},py={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},hy={color:"{form.field.icon.color}"},my={borderRadius:"{border.radius.sm}"},fy={padding:"{list.option.padding}"},ql={root:sy,dropdown:cy,overlay:ly,list:dy,option:uy,optionGroup:py,chip:my,clearIcon:hy,emptyMessage:fy};var gy={gap:"1.125rem"},by={gap:"0.5rem"},Kl={root:gy,controls:by};var vy={gutter:"0.75rem",transitionDuration:"{transition.duration}"},yy={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},_y={background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Cy={color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"},Yl={root:vy,node:yy,nodeToggleButton:_y,connector:Cy};var wy={outline:{width:"2px",color:"{content.background}"}},Zl={root:wy};var Dy={padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},Sy={background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ey={color:"{text.muted.color}"},xy={maxWidth:"2.5rem"},Xl={root:Dy,navButton:Sy,currentPageReport:Ey,jumpToPageInput:xy};var ky={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},Iy={background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},Ay={padding:"0.375rem 1.125rem"},My={fontWeight:"600"},Ry={padding:"0 1.125rem 1.125rem 1.125rem"},Ty={padding:"0 1.125rem 1.125rem 1.125rem"},Ql={root:ky,header:Iy,toggleableHeader:Ay,title:My,content:Ry,footer:Ty};var Fy={gap:"0.5rem",transitionDuration:"{transition.duration}"},Oy={background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},Ny={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},Py={indent:"1rem"},By={color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},Jl={root:Fy,panel:Oy,item:Ny,submenu:Py,submenuIcon:By};var Ly={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},Vy={color:"{form.field.icon.color}"},Uy={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},jy={gap:"0.5rem"},$y={light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}},ed={meter:Ly,icon:Vy,overlay:Uy,content:jy,colorScheme:$y};var zy={gap:"1.125rem"},Hy={gap:"0.5rem"},td={root:zy,controls:Hy};var Wy={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},Gy={padding:"{overlay.popover.padding}"},nd={root:Wy,content:Gy};var qy={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},Ky={background:"{primary.color}"},Yy={color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"},rd={root:qy,value:Ky,label:Yy};var Zy={light:{root:{colorOne:"{red.500}",colorTwo:"{blue.500}",colorThree:"{green.500}",colorFour:"{yellow.500}"}},dark:{root:{colorOne:"{red.400}",colorTwo:"{blue.400}",colorThree:"{green.400}",colorFour:"{yellow.400}"}}},od={colorScheme:Zy};var Xy={width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},Qy={size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.5rem"},lg:{size:"1rem"}},id={root:Xy,icon:Qy};var Jy={gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},e_={size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},ad={root:Jy,icon:e_};var t_={light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}},sd={colorScheme:t_};var n_={transitionDuration:"{transition.duration}"},r_={size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},o_={light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}},cd={root:n_,bar:r_,colorScheme:o_};var i_={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},a_={width:"2.5rem",color:"{form.field.icon.color}"},s_={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},c_={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},l_={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},d_={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},u_={color:"{form.field.icon.color}"},p_={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},h_={padding:"{list.option.padding}"},ld={root:i_,dropdown:a_,overlay:s_,list:c_,option:l_,optionGroup:d_,clearIcon:u_,checkmark:p_,emptyMessage:h_};var m_={borderRadius:"{form.field.border.radius}"},f_={light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}},dd={root:m_,colorScheme:f_};var g_={borderRadius:"{content.border.radius}"},b_={light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}},ud={root:g_,colorScheme:b_};var v_={transitionDuration:"{transition.duration}"},y_={background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},__={background:"{primary.color}"},C_={width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},w_={light:{handle:{content:{background:"{surface.0}"}}},dark:{handle:{content:{background:"{surface.950}"}}}},pd={root:v_,track:y_,range:__,handle:C_,colorScheme:w_};var D_={gap:"0.5rem",transitionDuration:"{transition.duration}"},hd={root:D_};var S_={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"},md={root:S_};var E_={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},x_={background:"{content.border.color}"},k_={size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},fd={root:E_,gutter:x_,handle:k_};var I_={transitionDuration:"{transition.duration}"},A_={background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},M_={padding:"0.5rem",gap:"1rem"},R_={padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},T_={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},F_={background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},O_={padding:"0.875rem 0.5rem 1.125rem 0.5rem"},N_={background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"},gd={root:I_,separator:A_,step:M_,stepHeader:R_,stepTitle:T_,stepNumber:F_,steppanels:O_,steppanel:N_};var P_={transitionDuration:"{transition.duration}"},B_={background:"{content.border.color}"},L_={borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},V_={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},U_={background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},bd={root:P_,separator:B_,itemLink:L_,itemLabel:V_,itemNumber:U_};var j_={transitionDuration:"{transition.duration}"},$_={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},z_={background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},H_={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},W_={height:"1px",bottom:"-1px",background:"{primary.color}"},vd={root:j_,tablist:$_,item:z_,itemIcon:H_,activeBar:W_};var G_={transitionDuration:"{transition.duration}"},q_={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},K_={background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Y_={background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},Z_={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},X_={height:"1px",bottom:"-1px",background:"{primary.color}"},Q_={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}},yd={root:G_,tablist:q_,tab:K_,tabpanel:Y_,navButton:Z_,activeBar:X_,colorScheme:Q_};var J_={transitionDuration:"{transition.duration}"},eC={background:"{content.background}",borderColor:"{content.border.color}"},tC={borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},nC={background:"{content.background}",color:"{content.color}"},rC={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},oC={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}},_d={root:J_,tabList:eC,tab:tC,tabPanel:nC,navButton:rC,colorScheme:oC};var iC={fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},aC={size:"0.75rem"},sC={light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}},Cd={root:iC,icon:aC,colorScheme:sC};var cC={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},lC={gap:"0.25rem"},dC={margin:"2px 0"},wd={root:cC,prompt:lC,commandResponse:dC};var uC={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Dd={root:uC};var pC={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},hC={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},mC={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},fC={mobileIndent:"1rem"},gC={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},bC={borderColor:"{content.border.color}"},Sd={root:pC,list:hC,item:mC,submenu:fC,submenuIcon:gC,separator:bC};var vC={minHeight:"5rem"},yC={eventContent:{padding:"1rem 0"}},_C={eventContent:{padding:"0 1rem"}},CC={size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},wC={color:"{content.border.color}",size:"2px"},Ed={event:vC,horizontal:yC,vertical:_C,eventMarker:CC,eventConnector:wC};var DC={width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},SC={size:"1.125rem"},EC={padding:"{overlay.popover.padding}",gap:"0.5rem"},xC={gap:"0.5rem"},kC={fontWeight:"500",fontSize:"1rem"},IC={fontWeight:"500",fontSize:"0.875rem"},AC={width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},MC={size:"1rem"},RC={light:{root:{blur:"1.5px"},info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{root:{blur:"10px"},info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}},xd={root:DC,icon:SC,content:EC,text:xC,summary:kC,detail:IC,closeButton:AC,closeIcon:MC,colorScheme:RC};var TC={padding:"0.25rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.25rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.25rem"}},FC={disabledColor:"{form.field.disabled.color}"},OC={padding:"0.25rem 0.75rem",borderRadius:"{content.border.radius}",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",sm:{padding:"0.25rem 0.75rem"},lg:{padding:"0.25rem 0.75rem"}},NC={light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}},kd={root:TC,icon:FC,content:OC,colorScheme:NC};var PC={width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},BC={borderRadius:"50%",size:"1rem"},LC={light:{root:{background:"{surface.300}",disabledBackground:"{form.field.disabled.background}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",disabledBackground:"{form.field.disabled.color}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.900}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}},Id={root:PC,handle:BC,colorScheme:LC};var VC={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"},Ad={root:VC};var UC={maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},jC={light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}},Md={root:UC,colorScheme:jC};var $C={background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},zC={padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},HC={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},WC={borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},GC={size:"2rem"},qC={margin:"0 0 0.5rem 0"},KC=`
    .p-tree-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`,Rd={root:$C,node:zC,nodeIcon:HC,nodeToggleButton:WC,loadingIcon:GC,filter:qC,css:KC};var YC={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},ZC={width:"2.5rem",color:"{form.field.icon.color}"},XC={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},QC={padding:"{list.padding}"},JC={padding:"{list.option.padding}"},ew={borderRadius:"{border.radius.sm}"},tw={color:"{form.field.icon.color}"},Td={root:YC,dropdown:ZC,overlay:XC,tree:QC,emptyMessage:JC,chip:ew,clearIcon:tw};var nw={transitionDuration:"{transition.duration}"},rw={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},ow={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},iw={fontWeight:"600"},aw={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},sw={borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},cw={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},lw={fontWeight:"600"},dw={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},uw={width:"0.5rem"},pw={width:"1px",color:"{primary.color}"},hw={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},mw={size:"2rem"},fw={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},gw={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},bw={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},vw={light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},yw=`
    .p-treetable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`,Fd={root:nw,header:rw,headerCell:ow,columnTitle:iw,row:aw,bodyCell:sw,footerCell:cw,columnFooter:lw,footer:dw,columnResizer:uw,resizeIndicator:pw,sortIcon:hw,loadingIcon:mw,nodeToggleButton:fw,paginatorTop:gw,paginatorBottom:bw,colorScheme:vw,css:yw};var _w={mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}},Od={loader:_w};var Cw=Object.defineProperty,ww=Object.defineProperties,Dw=Object.getOwnPropertyDescriptors,Nd=Object.getOwnPropertySymbols,Sw=Object.prototype.hasOwnProperty,Ew=Object.prototype.propertyIsEnumerable,Pd=(t,r,e)=>r in t?Cw(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,Bd,Ld=(Bd=((t,r)=>{for(var e in r||(r={}))Sw.call(r,e)&&Pd(t,e,r[e]);if(Nd)for(var e of Nd(r))Ew.call(r,e)&&Pd(t,e,r[e]);return t})({},rl),ww(Bd,Dw({components:{accordion:Jc,autocomplete:el,avatar:tl,badge:nl,blockui:ol,breadcrumb:il,button:al,card:sl,carousel:cl,cascadeselect:ll,checkbox:dl,chip:ul,colorpicker:pl,confirmdialog:hl,confirmpopup:ml,contextmenu:fl,datatable:bl,dataview:vl,datepicker:yl,dialog:_l,divider:Cl,dock:wl,drawer:Dl,editor:Sl,fieldset:El,fileupload:xl,floatlabel:kl,galleria:Il,iconfield:Al,iftalabel:Ml,image:Rl,imagecompare:Tl,inlinemessage:Fl,inplace:Ol,inputchips:Nl,inputgroup:Pl,inputnumber:Bl,inputotp:Ll,inputtext:Vl,knob:Ul,listbox:jl,megamenu:$l,menu:zl,menubar:Hl,message:Wl,metergroup:Gl,multiselect:ql,orderlist:Kl,organizationchart:Yl,overlaybadge:Zl,paginator:Xl,panel:Ql,panelmenu:Jl,password:ed,picklist:td,popover:nd,progressbar:rd,progressspinner:od,radiobutton:id,rating:ad,ripple:sd,scrollpanel:cd,select:ld,selectbutton:dd,skeleton:ud,slider:pd,speeddial:hd,splitbutton:md,splitter:fd,stepper:gd,steps:bd,tabmenu:vd,tabs:yd,tabview:_d,tag:Cd,terminal:wd,textarea:Dd,tieredmenu:Sd,timeline:Ed,toast:xd,togglebutton:kd,toggleswitch:Id,toolbar:Ad,tooltip:Md,tree:Rd,treeselect:Td,treetable:Fd,virtualscroller:Od},css:gl})));function It(...t){if(t){let r=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")r.push(n);else if(o==="object"){let i=Array.isArray(n)?[It(...n)]:Object.entries(n).map(([a,s])=>s?a:void 0);r=i.length?r.concat(i.filter(a=>!!a)):r}}return r.join(" ").trim()}}function Ea(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Sa(t,r,e=new WeakSet){if(t===r)return!0;if(!t||!r||typeof t!="object"||typeof r!="object"||e.has(t)||e.has(r))return!1;e.add(t).add(r);let n=Array.isArray(t),o=Array.isArray(r),i,a,s;if(n&&o){if(a=t.length,a!=r.length)return!1;for(i=a;i--!==0;)if(!Sa(t[i],r[i],e))return!1;return!0}if(n!=o)return!1;let c=t instanceof Date,l=r instanceof Date;if(c!=l)return!1;if(c&&l)return t.getTime()==r.getTime();let u=t instanceof RegExp,p=r instanceof RegExp;if(u!=p)return!1;if(u&&p)return t.toString()==r.toString();let m=Object.keys(t);if(a=m.length,a!==Object.keys(r).length)return!1;for(i=a;i--!==0;)if(!Object.prototype.hasOwnProperty.call(r,m[i]))return!1;for(i=a;i--!==0;)if(s=m[i],!Sa(t[s],r[s],e))return!1;return!0}function xw(t,r){return Sa(t,r)}function To(t){return typeof t=="function"&&"call"in t&&"apply"in t}function pn(t){return!Ea(t)}function Vd(t,r){if(!t||!r)return null;try{let e=t[r];if(pn(e))return e}catch{}if(Object.keys(t).length){if(To(r))return r(t);if(r.indexOf(".")===-1)return t[r];{let e=r.split("."),n=t;for(let o=0,i=e.length;o<i;++o){if(n==null)return null;n=n[e[o]]}return n}}return null}function Fo(t,r,e){return e?Vd(t,e)===Vd(r,e):xw(t,r)}function kw(t,r=!0){return t instanceof Object&&t.constructor===Object&&(r||Object.keys(t).length!==0)}function rt(t,...r){return To(t)?t(...r):t}function sr(t,r=!0){return typeof t=="string"&&(r||t!=="")}function At(t){return sr(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function xa(t,r="",e={}){let n=At(r).split("."),o=n.shift();if(o){if(kw(t)){let i=Object.keys(t).find(a=>At(a)===o)||"";return xa(rt(t[i],e),n.join("."),e)}return}return rt(t,e)}function Ud(t,r=!0){return Array.isArray(t)&&(r||t.length!==0)}function Oo(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function $d(t,r){return t?t.classList?t.classList.contains(r):new RegExp("(^| )"+r+"( |$)","gi").test(t.className):!1}function ka(t,r){if(t&&r){let e=n=>{$d(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[r].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function hn(t,r){if(t&&r){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[r].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function zd(t){for(let r of document?.styleSheets)try{for(let e of r?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function jd(t){return t?Math.abs(t.scrollLeft):0}function Hd(t,r){if(t instanceof HTMLElement){let e=t.offsetWidth;if(r){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function Wd(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function Ia(t,r={}){if(Wd(t)){let e=(o,i)=>{var a,s;let c=(a=t?.$attrs)!=null&&a[o]?[(s=t?.$attrs)==null?void 0:s[o]]:[];return[i].flat().reduce((l,u)=>{if(u!=null){let p=typeof u;if(p==="string"||p==="number")l.push(u);else if(p==="object"){let m=Array.isArray(u)?e(o,u):Object.entries(u).map(([g,D])=>o==="style"&&(D||D===0)?`${g.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${D}`:D?g:void 0);l=m.length?l.concat(m.filter(g=>!!g)):l}}return l},c)},n=o=>{e("style",o).forEach(i=>{let a=i.indexOf(":");if(a<0)return;let s=i.slice(0,a).trim(),c=i.slice(a+1).trim();s&&t.style.setProperty(s,c)})};Object.entries(r).forEach(([o,i])=>{if(i!=null){let a=o.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),i):o==="p-bind"||o==="pBind"?Ia(t,i):o==="style"?(n(i),(t.$attrs=t.$attrs||{})&&(t.$attrs[o]=t.style.cssText)):(i=o==="class"?[...new Set(e("class",i))].join(" ").trim():i,(t.$attrs=t.$attrs||{})&&(t.$attrs[o]=i),t.setAttribute(o,i))}})}}function Aa(t){if(t){let r=t.offsetHeight,e=getComputedStyle(t);return r-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),r}return 0}function Gd(t){if(t){let r=t.getBoundingClientRect();return{top:r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:r.left+(window.pageXOffset||jd(document.documentElement)||jd(document.body)||0)}}return{top:"auto",left:"auto"}}function qd(t,r){if(t){let e=t.offsetHeight;if(r){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function Ma(t){if(t){let r=t.offsetWidth,e=getComputedStyle(t);return r-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),r}return 0}function Kd(t){var r;t&&("remove"in Element.prototype?t.remove():(r=t.parentNode)==null||r.removeChild(t))}function Yd(t,r="",e){if(Wd(t)&&e!==null&&e!==void 0){if(r==="style"){typeof e=="string"?t.style.cssText=e:typeof e=="object"&&Object.entries(e).forEach(([n,o])=>{if(o==null)return;let i=n.startsWith("--")?n:n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();t.style.setProperty(i,String(o))});return}t.setAttribute(r,e)}}var Iw=Object.defineProperty,Zd=Object.getOwnPropertySymbols,Aw=Object.prototype.hasOwnProperty,Mw=Object.prototype.propertyIsEnumerable,Xd=(t,r,e)=>r in t?Iw(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,Qd=(t,r)=>{for(var e in r||(r={}))Aw.call(r,e)&&Xd(t,e,r[e]);if(Zd)for(var e of Zd(r))Mw.call(r,e)&&Xd(t,e,r[e]);return t};function Jd(...t){if(t){let r=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")r.push(n);else if(o==="object"){let i=Array.isArray(n)?[Jd(...n)]:Object.entries(n).map(([a,s])=>s?a:void 0);r=i.length?r.concat(i.filter(a=>!!a)):r}}return r.join(" ").trim()}}function Rw(t){return typeof t=="function"&&"call"in t&&"apply"in t}function Tw({skipUndefined:t=!1},...r){return r?.reduce((e,n={})=>{for(let o in n){let i=n[o];if(!(t&&i===void 0))if(o==="style")e.style=Qd(Qd({},e.style),n.style);else if(o==="class"||o==="className")e[o]=Jd(e[o],n[o]);else if(Rw(i)){let a=e[o];e[o]=a?(...s)=>{a(...s),i(...s)}:i}else e[o]=i}return e},{})}function Ra(...t){return Tw({skipUndefined:!1},...t)}var No={};function cr(t="pui_id_"){return Object.hasOwn(No,t)||(No[t]=0),No[t]++,`${t}${No[t]}`}var eu=["*"];var Ce=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var tu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=S({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:eu,decls:1,vars:0,template:function(n,o){n&1&&(ae(),H(0))},encapsulation:2})}return t})(),nu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=S({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:eu,decls:1,vars:0,template:function(n,o){n&1&&(ae(),H(0))},encapsulation:2})}return t})(),mn=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(R(Qr))};static \u0275dir=x({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),we=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=O({imports:[Ee]})}return t})();function lr(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Fw(t){return typeof t=="function"&&"call"in t&&"apply"in t}function de(t){return!lr(t)}function Mt(t,r=!0){return t instanceof Object&&t.constructor===Object&&(r||Object.keys(t).length!==0)}function Rt(t,...r){return Fw(t)?t(...r):t}function Ht(t,r=!0){return typeof t=="string"&&(r||t!=="")}function ru(t){return de(t)&&!isNaN(t)}function Ye(t,r){if(r){let e=r.test(t);return r.lastIndex=0,e}return!1}function Ta(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function Po(t){return Ht(t)?t.replace(/(_)/g,"-").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():t}function ou(){let t=new Map;return{on(r,e){let n=t.get(r);return n?n.push(e):n=[e],t.set(r,n),this},off(r,e){let n=t.get(r);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(r,e){let n=t.get(r);n&&n.forEach(o=>{o(e)})},clear(){t.clear()}}}var Ow=Object.defineProperty,Nw=Object.defineProperties,Pw=Object.getOwnPropertyDescriptors,Bo=Object.getOwnPropertySymbols,su=Object.prototype.hasOwnProperty,cu=Object.prototype.propertyIsEnumerable,iu=(t,r,e)=>r in t?Ow(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,Xe=(t,r)=>{for(var e in r||(r={}))su.call(r,e)&&iu(t,e,r[e]);if(Bo)for(var e of Bo(r))cu.call(r,e)&&iu(t,e,r[e]);return t},Fa=(t,r)=>Nw(t,Pw(r)),pt=(t,r)=>{var e={};for(var n in t)su.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&Bo)for(var n of Bo(t))r.indexOf(n)<0&&cu.call(t,n)&&(e[n]=t[n]);return e};var Bw=ou(),Fe=Bw,dr=/{([^}]*)}/g,lu=/(\d+\s+[\+\-\*\/]\s+\d+)/g,du=/var\([^)]+\)/g;function au(t){return Ht(t)?t.replace(/[A-Z]/g,(r,e)=>e===0?r:"."+r.toLowerCase()).toLowerCase():t}function Lw(t){return Mt(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function Vw(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Oa(t="",r=""){return Vw(`${Ht(t,!1)&&Ht(r,!1)?`${t}-`:t}${r}`)}function uu(t="",r=""){return`--${Oa(t,r)}`}function Uw(t=""){let r=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(r+e)%2!==0}function pu(t,r="",e="",n=[],o){if(Ht(t)){let i=t.trim();if(Uw(i))return;if(Ye(i,dr)){let a=i.replaceAll(dr,s=>{let c=s.replace(/{|}/g,"").split(".").filter(l=>!n.some(u=>Ye(l,u)));return`var(${uu(e,Po(c.join("-")))}${de(o)?`, ${o}`:""})`});return Ye(a.replace(du,"0"),lu)?`calc(${a})`:a}return i}else if(ru(t))return t}function jw(t,r,e){Ht(r,!1)&&t.push(`${r}:${e};`)}function fn(t,r){return t?`${t}{${r}}`:""}function hu(t,r){if(t.indexOf("dt(")===-1)return t;function e(a,s){let c=[],l=0,u="",p=null,m=0;for(;l<=a.length;){let g=a[l];if((g==='"'||g==="'"||g==="`")&&a[l-1]!=="\\"&&(p=p===g?null:g),!p&&(g==="("&&m++,g===")"&&m--,(g===","||l===a.length)&&m===0)){let D=u.trim();D.startsWith("dt(")?c.push(hu(D,s)):c.push(n(D)),u="",l++;continue}g!==void 0&&(u+=g),l++}return c}function n(a){let s=a[0];if((s==='"'||s==="'"||s==="`")&&a[a.length-1]===s)return a.slice(1,-1);let c=Number(a);return isNaN(c)?a:c}let o=[],i=[];for(let a=0;a<t.length;a++)if(t[a]==="d"&&t.slice(a,a+3)==="dt(")i.push(a),a+=2;else if(t[a]===")"&&i.length>0){let s=i.pop();i.length===0&&o.push([s,a])}if(!o.length)return t;for(let a=o.length-1;a>=0;a--){let[s,c]=o[a],l=t.slice(s+3,c),u=e(l,r),p=r(...u);t=t.slice(0,s)+p+t.slice(c+1)}return t}var ht=(...t)=>$w(X.getTheme(),...t),$w=(t={},r,e,n)=>{if(r){let{variable:o,options:i}=X.defaults||{},{prefix:a,transform:s}=t?.options||i||{},c=Ye(r,dr)?r:`{${r}}`;return n==="value"||lr(n)&&s==="strict"?X.getTokenValue(r):pu(c,void 0,a,[o.excludedKeyRegex],e)}return""};function gn(t,...r){if(t instanceof Array){let e=t.reduce((n,o,i)=>{var a;return n+o+((a=Rt(r[i],{dt:ht}))!=null?a:"")},"");return hu(e,ht)}return Rt(t,{dt:ht})}function zw(t,r={}){let e=X.defaults.variable,{prefix:n=e.prefix,selector:o=e.selector,excludedKeyRegex:i=e.excludedKeyRegex}=r,a=[],s=[],c=[{node:t,path:n}];for(;c.length;){let{node:u,path:p}=c.pop();for(let m in u){let g=u[m],D=Lw(g),E=Ye(m,i)?Oa(p):Oa(p,Po(m));if(Mt(D))c.push({node:D,path:E});else{let B=uu(E),ee=pu(D,E,n,[i]);jw(s,B,ee);let Q=E;n&&Q.startsWith(n+"-")&&(Q=Q.slice(n.length+1)),a.push(Q.replace(/-/g,"."))}}}let l=s.join("");return{value:s,tokens:a,declarations:l,css:fn(o,l)}}var Ze={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t},:host${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let r=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=r.map(o=>o.resolve(e)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,r){return zw(t,{prefix:r?.prefix})},getCommon({name:t="",theme:r={},params:e,set:n,defaults:o}){var i,a,s,c,l,u,p;let{preset:m,options:g}=r,D,E,B,ee,Q,se,Rr;if(de(m)&&g.transform!=="strict"){let{primitive:Tr,semantic:Fr,extend:Or}=m,In=Fr||{},{colorScheme:Nr}=In,Pr=pt(In,["colorScheme"]),Br=Or||{},{colorScheme:Lr}=Br,An=pt(Br,["colorScheme"]),Mn=Nr||{},{dark:Vr}=Mn,Ur=pt(Mn,["dark"]),jr=Lr||{},{dark:$r}=jr,zr=pt(jr,["dark"]),Hr=de(Tr)?this._toVariables({primitive:Tr},g):{},Wr=de(Pr)?this._toVariables({semantic:Pr},g):{},Gr=de(Ur)?this._toVariables({light:Ur},g):{},ss=de(Vr)?this._toVariables({dark:Vr},g):{},cs=de(An)?this._toVariables({semantic:An},g):{},ls=de(zr)?this._toVariables({light:zr},g):{},ds=de($r)?this._toVariables({dark:$r},g):{},[sh,ch]=[(i=Hr.declarations)!=null?i:"",Hr.tokens],[lh,dh]=[(a=Wr.declarations)!=null?a:"",Wr.tokens||[]],[uh,ph]=[(s=Gr.declarations)!=null?s:"",Gr.tokens||[]],[hh,mh]=[(c=ss.declarations)!=null?c:"",ss.tokens||[]],[fh,gh]=[(l=cs.declarations)!=null?l:"",cs.tokens||[]],[bh,vh]=[(u=ls.declarations)!=null?u:"",ls.tokens||[]],[yh,_h]=[(p=ds.declarations)!=null?p:"",ds.tokens||[]];D=this.transformCSS(t,sh,"light","variable",g,n,o),E=ch;let Ch=this.transformCSS(t,`${lh}${uh}`,"light","variable",g,n,o),wh=this.transformCSS(t,`${hh}`,"dark","variable",g,n,o);B=`${Ch}${wh}`,ee=[...new Set([...dh,...ph,...mh])];let Dh=this.transformCSS(t,`${fh}${bh}color-scheme:light`,"light","variable",g,n,o),Sh=this.transformCSS(t,`${yh}color-scheme:dark`,"dark","variable",g,n,o);Q=`${Dh}${Sh}`,se=[...new Set([...gh,...vh,..._h])],Rr=Rt(m.css,{dt:ht})}return{primitive:{css:D,tokens:E},semantic:{css:B,tokens:ee},global:{css:Q,tokens:se},style:Rr}},getPreset({name:t="",preset:r={},options:e,params:n,set:o,defaults:i,selector:a}){var s,c,l;let u,p,m;if(de(r)&&e.transform!=="strict"){let g=t.replace("-directive",""),D=r,{colorScheme:E,extend:B,css:ee}=D,Q=pt(D,["colorScheme","extend","css"]),se=B||{},{colorScheme:Rr}=se,Tr=pt(se,["colorScheme"]),Fr=E||{},{dark:Or}=Fr,In=pt(Fr,["dark"]),Nr=Rr||{},{dark:Pr}=Nr,Br=pt(Nr,["dark"]),Lr=de(Q)?this._toVariables({[g]:Xe(Xe({},Q),Tr)},e):{},An=de(In)?this._toVariables({[g]:Xe(Xe({},In),Br)},e):{},Mn=de(Or)?this._toVariables({[g]:Xe(Xe({},Or),Pr)},e):{},[Vr,Ur]=[(s=Lr.declarations)!=null?s:"",Lr.tokens||[]],[jr,$r]=[(c=An.declarations)!=null?c:"",An.tokens||[]],[zr,Hr]=[(l=Mn.declarations)!=null?l:"",Mn.tokens||[]],Wr=this.transformCSS(g,`${Vr}${jr}`,"light","variable",e,o,i,a),Gr=this.transformCSS(g,zr,"dark","variable",e,o,i,a);u=`${Wr}${Gr}`,p=[...new Set([...Ur,...$r,...Hr])],m=Rt(ee,{dt:ht})}return{css:u,tokens:p,style:m}},getPresetC({name:t="",theme:r={},params:e,set:n,defaults:o}){var i;let{preset:a,options:s}=r,c=(i=a?.components)==null?void 0:i[t];return this.getPreset({name:t,preset:c,options:s,params:e,set:n,defaults:o})},getPresetD({name:t="",theme:r={},params:e,set:n,defaults:o}){var i,a;let s=t.replace("-directive",""),{preset:c,options:l}=r,u=((i=c?.components)==null?void 0:i[s])||((a=c?.directives)==null?void 0:a[s]);return this.getPreset({name:s,preset:u,options:l,params:e,set:n,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,r){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?r.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:r.options.darkModeSelector):[]},getLayerOrder(t,r={},e,n){let{cssLayer:o}=r;return o?`@layer ${Rt(o.order||o.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:r={},params:e,props:n={},set:o,defaults:i}){let a=this.getCommon({name:t,theme:r,params:e,set:o,defaults:i}),s=Object.entries(n).reduce((c,[l,u])=>c.push(`${l}="${u}"`)&&c,[]).join(" ");return Object.entries(a||{}).reduce((c,[l,u])=>{if(Mt(u)&&Object.hasOwn(u,"css")){let p=Ta(u.css),m=`${l}-variables`;c.push(`<style type="text/css" data-primevue-style-id="${m}" ${s}>${p}</style>`)}return c},[]).join("")},getStyleSheet({name:t="",theme:r={},params:e,props:n={},set:o,defaults:i}){var a;let s={name:t,theme:r,params:e,set:o,defaults:i},c=(a=t.includes("-directive")?this.getPresetD(s):this.getPresetC(s))==null?void 0:a.css,l=Object.entries(n).reduce((u,[p,m])=>u.push(`${p}="${m}"`)&&u,[]).join(" ");return c?`<style type="text/css" data-primevue-style-id="${t}-variables" ${l}>${Ta(c)}</style>`:""},createTokens(t={},r,e="",n="",o={}){let i=function(s,c={},l=[]){if(l.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:s,path:this.path,paths:c,value:void 0};l.push(this.path),c.name=this.path,c.binding||(c.binding={});let u=this.value;if(typeof this.value=="string"&&dr.test(this.value)){let p=this.value.trim().replace(dr,m=>{var g;let D=m.slice(1,-1),E=this.tokens[D];if(!E)return console.warn(`Token not found for path: ${D}`),"__UNRESOLVED__";let B=E.computed(s,c,l);return Array.isArray(B)&&B.length===2?`light-dark(${B[0].value},${B[1].value})`:(g=B?.value)!=null?g:"__UNRESOLVED__"});u=lu.test(p.replace(du,"0"))?`calc(${p})`:p}return lr(c.binding)&&delete c.binding,l.pop(),{colorScheme:s,path:this.path,paths:c,value:u.includes("__UNRESOLVED__")?void 0:u}},a=(s,c,l)=>{Object.entries(s).forEach(([u,p])=>{let m=Ye(u,r.variable.excludedKeyRegex)?c:c?`${c}.${au(u)}`:au(u),g=l?`${l}.${u}`:u;Mt(p)?a(p,m,g):(o[m]||(o[m]={paths:[],computed:(D,E={},B=[])=>{if(o[m].paths.length===1)return o[m].paths[0].computed(o[m].paths[0].scheme,E.binding,B);if(D&&D!=="none")for(let ee=0;ee<o[m].paths.length;ee++){let Q=o[m].paths[ee];if(Q.scheme===D)return Q.computed(D,E.binding,B)}return o[m].paths.map(ee=>ee.computed(ee.scheme,E[ee.scheme],B))}}),o[m].paths.push({path:g,value:p,scheme:g.includes("colorScheme.light")?"light":g.includes("colorScheme.dark")?"dark":"none",computed:i,tokens:o}))})};return a(t,e,n),o},getTokenValue(t,r,e){var n;let o=(s=>s.split(".").filter(c=>!Ye(c.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(r),i=r.includes("colorScheme.light")?"light":r.includes("colorScheme.dark")?"dark":void 0,a=[(n=t[o])==null?void 0:n.computed(i)].flat().filter(s=>s);return a.length===1?a[0].value:a.reduce((s={},c)=>{let l=c,{colorScheme:u}=l,p=pt(l,["colorScheme"]);return s[u]=p,s},void 0)},getSelectorRule(t,r,e,n){return e==="class"||e==="attr"?fn(de(r)?`${t}${r},${t} ${r}`:t,n):fn(t,fn(r??":root,:host",n))},transformCSS(t,r,e,n,o={},i,a,s){if(de(r)){let{cssLayer:c}=o;if(n!=="style"){let l=this.getColorSchemeOption(o,a);r=e==="dark"?l.reduce((u,{type:p,selector:m})=>(de(m)&&(u+=m.includes("[CSS]")?m.replace("[CSS]",r):this.getSelectorRule(m,s,p,r)),u),""):fn(s??":root,:host",r)}if(c){let l={name:"primeui",order:"primeui"};Mt(c)&&(l.name=Rt(c.name,{name:t,type:n})),de(l.name)&&(r=fn(`@layer ${l.name}`,r),i?.layerNames(l.name))}return r}return""}},X={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:r}=t;r&&(this._theme=Fa(Xe({},r),{options:Xe(Xe({},this.defaults.options),r.options)}),this._tokens=Ze.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),Fe.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Fa(Xe({},this.theme),{preset:t}),this._tokens=Ze.createTokens(t,this.defaults),this.clearLoadedStyleNames(),Fe.emit("preset:change",t),Fe.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Fa(Xe({},this.theme),{options:t}),this.clearLoadedStyleNames(),Fe.emit("options:change",t),Fe.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return Ze.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",r){return Ze.getCommon({name:t,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",r){let e={name:t,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ze.getPresetC(e)},getDirective(t="",r){let e={name:t,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ze.getPresetD(e)},getCustomPreset(t="",r,e,n){let o={name:t,preset:r,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ze.getPreset(o)},getLayerOrderCSS(t=""){return Ze.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",r,e="style",n){return Ze.transformCSS(t,r,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",r,e={}){return Ze.getCommonStyleSheet({name:t,theme:this.theme,params:r,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,r,e={}){return Ze.getStyleSheet({name:t,theme:this.theme,params:r,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:r}){this._loadingStyles.size&&(this._loadingStyles.delete(r),Fe.emit(`theme:${r}:load`,t),!this._loadingStyles.size&&Fe.emit("theme:load"))}};var mu=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    .p-collapsible-enter-active {
        animation: p-animate-collapsible-expand 0.2s ease-out;
        overflow: hidden;
    }

    .p-collapsible-leave-active {
        animation: p-animate-collapsible-collapse 0.2s ease-out;
        overflow: hidden;
    }

    @keyframes p-animate-collapsible-expand {
        from {
            grid-template-rows: 0fr;
        }
        to {
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-collapsible-collapse {
        from {
            grid-template-rows: 1fr;
        }
        to {
            grid-template-rows: 0fr;
        }
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: var(--px-mask-background, dt('mask.background'));
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter-active {
        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave-active {
        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;
    }

    @keyframes p-animate-overlay-mask-enter {
        from {
            background: transparent;
        }
        to {
            background: var(--px-mask-background, dt('mask.background'));
        }
    }
    @keyframes p-animate-overlay-mask-leave {
        from {
            background: var(--px-mask-background, dt('mask.background'));
        }
        to {
            background: transparent;
        }
    }

    .p-anchored-overlay-enter-active {
        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-anchored-overlay-leave-active {
        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-anchored-overlay-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-anchored-overlay-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var Hw=0,fu=(()=>{class t{document=d(F);use(e,n={}){let o=!1,i=e,a=null,{immediate:s=!0,manual:c=!1,name:l=`style_${++Hw}`,id:u=void 0,media:p=void 0,nonce:m=void 0,first:g=!1,props:D={}}=n;if(this.document){if(a=this.document.querySelector(`style[data-primeng-style-id="${l}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),a){if(!a.isConnected){i=e;let E=this.document.head;Yd(a,"nonce",m),g&&E.firstChild?E.insertBefore(a,E.firstChild):E.appendChild(a),Ia(a,{type:"text/css",media:p,nonce:m,"data-primeng-style-id":l})}a.textContent!==i&&(a.textContent=i)}return{id:u,name:l,el:a,css:i}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var bn={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Ww=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,ue=(()=>{class t{name="base";useStyle=d(fu);css=void 0;style=void 0;classes={};inlineStyles={};load=(e,n={},o=i=>i)=>{let i=o(gn`${rt(e,{dt:ht})}`);return i?this.useStyle.use(Oo(i),h({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadStyle=(e={},n="")=>this.load(this.style,e,(o="")=>X.transformCSS(e.name||this.name,`${o}${gn`${n}`}`));loadBaseCSS=(e={})=>this.load(Ww,e);loadBaseStyle=(e={},n="")=>this.load(mu,e,(o="")=>X.transformCSS(e.name||this.name,`${o}${gn`${n}`}`));getCommonTheme=e=>X.getCommon(this.name,e);getComponentTheme=e=>X.getComponent(this.name,e);getPresetTheme=(e,n,o)=>X.getCustomPreset(this.name,e,n,o);getLayerOrderThemeCSS=()=>X.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let o=rt(this.css,{dt:ht}),i=Oo(gn`${o}${e}`),a=Object.entries(n).reduce((s,[c,l])=>s.push(`${c}="${l}"`)&&s,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${a}>${i}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>X.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let o=[X.getStyleSheet(this.name,e,n)];if(this.style){let i=this.name==="base"?"global-style":`${this.name}-style`,a=gn`${rt(this.style,{dt:ht})}`,s=Oo(X.transformCSS(i,a)),c=Object.entries(n).reduce((l,[u,p])=>l.push(`${u}="${p}"`)&&l,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${i}" ${c}>${s}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Gw=(()=>{class t{theme=V(void 0);csp=V({nonce:void 0});isThemeChanged=!1;document=d(F);baseStyle=d(ue);constructor(){Ae(()=>{Fe.on("theme:change",e=>{ge(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),Ae(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){X.clearLoadedStyleNames(),Fe.clear()}onThemeChange(e){X.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!X.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:i}=this.baseStyle.getCommonTheme?.()||{},a={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,h({name:"primitive-variables"},a)),this.baseStyle.load(n?.css,h({name:"semantic-variables"},a)),this.baseStyle.load(o?.css,h({name:"global-variables"},a)),this.baseStyle.loadBaseStyle(h({name:"global-style"},a),i),X.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:o}=e||{};n&&this.theme.set(n),o&&this.csp.set(o)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Na=(()=>{class t extends Gw{ripple=V(!1);platformId=d(Le);inputStyle=V(null);inputVariant=V(null);overlayAppendTo=V("self");overlayOptions={};csp=V({nonce:void 0});unstyled=V(void 0);pt=V(void 0);ptOptions=V(void 0);filterMatchModeOptions={text:[Ce.STARTS_WITH,Ce.CONTAINS,Ce.NOT_CONTAINS,Ce.ENDS_WITH,Ce.EQUALS,Ce.NOT_EQUALS],numeric:[Ce.EQUALS,Ce.NOT_EQUALS,Ce.LESS_THAN,Ce.LESS_THAN_OR_EQUAL_TO,Ce.GREATER_THAN,Ce.GREATER_THAN_OR_EQUAL_TO],date:[Ce.DATE_IS,Ce.DATE_IS_NOT,Ce.DATE_BEFORE,Ce.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize",minimizeLabel:"Minimize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new J;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=h(h({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:o,inputStyle:i,inputVariant:a,theme:s,overlayOptions:c,translation:l,filterMatchModeOptions:u,overlayAppendTo:p,zIndex:m,ptOptions:g,pt:D,unstyled:E}=e||{};n&&this.csp.set(n),p&&this.overlayAppendTo.set(p),o&&this.ripple.set(o),i&&this.inputStyle.set(i),a&&this.inputVariant.set(a),c&&(this.overlayOptions=c),l&&this.setTranslation(l),u&&(this.filterMatchModeOptions=u),m&&(this.zIndex=m),D&&this.pt.set(D),g&&this.ptOptions.set(g),E&&this.unstyled.set(E),s&&this.setThemeConfig({theme:s,csp:n})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qw=new _("PRIME_NG_CONFIG");function gu(...t){let r=t?.map(n=>({provide:qw,useValue:n,multi:!1})),e=wi(()=>{let n=d(Na);t?.forEach(o=>n.setConfig(o))});return Yt([...r,e])}var bu=[];var vu={providers:[xs(),Da(bu),oc(),gu({theme:{preset:Ld}})]};var Iu=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(R(ye),R(Z))};static \u0275dir=x({type:t})}return t})(),Go=(()=>{class t extends Iu{static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275dir=x({type:t,features:[P]})}return t})(),br=new _("");var Kw={provide:br,useExisting:it(()=>Cn),multi:!0};function Yw(){let t=Ue()?Ue().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Zw=new _(""),Cn=(()=>{class t extends Iu{_compositionMode;_composing=!1;constructor(e,n,o){super(e,n),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Yw())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(R(ye),R(Z),R(Zw,8))};static \u0275dir=x({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&ne("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},standalone:!1,features:[Y([Kw]),P]})}return t})();var La=new _(""),Au=new _("");function Xw(t){return r=>{if(r.value==null||t==null)return null;let e=parseFloat(r.value);return!isNaN(e)&&e<t?{min:{min:t,actual:r.value}}:null}}function yu(t){return null}function Mu(t){return t!=null}function Ru(t){return Ln(t)?Ie(t):t}function Tu(t){let r={};return t.forEach(e=>{r=e!=null?h(h({},r),e):r}),Object.keys(r).length===0?null:r}function Fu(t,r){return r.map(e=>e(t))}function Qw(t){return!t.validate}function Ou(t){return t.map(r=>Qw(r)?r:e=>r.validate(e))}function Jw(t){if(!t)return null;let r=t.filter(Mu);return r.length==0?null:function(e){return Tu(Fu(e,r))}}function Va(t){return t!=null?Jw(Ou(t)):null}function eD(t){if(!t)return null;let r=t.filter(Mu);return r.length==0?null:function(e){let n=Fu(e,r).map(Ru);return vs(n).pipe(pe(Tu))}}function Ua(t){return t!=null?eD(Ou(t)):null}function _u(t,r){return t===null?[r]:Array.isArray(t)?[...t,r]:[t,r]}function tD(t){return t._rawValidators}function nD(t){return t._rawAsyncValidators}function Pa(t){return t?Array.isArray(t)?t:[t]:[]}function Vo(t,r){return Array.isArray(t)?t.includes(r):t===r}function Cu(t,r){let e=Pa(r);return Pa(t).forEach(o=>{Vo(e,o)||e.push(o)}),e}function wu(t,r){return Pa(r).filter(e=>!Vo(t,e))}var Uo=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(r){this._rawValidators=r||[],this._composedValidatorFn=Va(this._rawValidators)}_setAsyncValidators(r){this._rawAsyncValidators=r||[],this._composedAsyncValidatorFn=Ua(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(r){this._onDestroyCallbacks.push(r)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(r=>r()),this._onDestroyCallbacks=[]}reset(r=void 0){this.control?.reset(r)}hasError(r,e){return this.control?this.control.hasError(r,e):!1}getError(r,e){return this.control?this.control.getError(r,e):null}},_n=class extends Uo{name;get formDirective(){return null}get path(){return null}},gr=class extends Uo{_parent=null;name=null;valueAccessor=null},jo=class{_cd;constructor(r){this._cd=r}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var wn=(()=>{class t extends jo{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(R(gr,2))};static \u0275dir=x({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&me("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[P]})}return t})(),qo=(()=>{class t extends jo{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(R(_n,10))};static \u0275dir=x({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,o){n&2&&me("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[P]})}return t})();var ur="VALID",Lo="INVALID",vn="PENDING",pr="DISABLED",Tt=class{},$o=class extends Tt{value;source;constructor(r,e){super(),this.value=r,this.source=e}},mr=class extends Tt{pristine;source;constructor(r,e){super(),this.pristine=r,this.source=e}},fr=class extends Tt{touched;source;constructor(r,e){super(),this.touched=r,this.source=e}},yn=class extends Tt{status;source;constructor(r,e){super(),this.status=r,this.source=e}},Ba=class extends Tt{source;constructor(r){super(),this.source=r}},zo=class extends Tt{source;constructor(r){super(),this.source=r}};function Nu(t){return(Ko(t)?t.validators:t)||null}function rD(t){return Array.isArray(t)?Va(t):t||null}function Pu(t,r){return(Ko(r)?r.asyncValidators:t)||null}function oD(t){return Array.isArray(t)?Ua(t):t||null}function Ko(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function iD(t,r,e){let n=t.controls;if(!(r?Object.keys(n):n).length)throw new $(1e3,"");if(!n[e])throw new $(1001,"")}function aD(t,r,e){t._forEachChild((n,o)=>{if(e[o]===void 0)throw new $(-1002,"")})}var Ho=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(r,e){this._assignValidators(r),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(r){this._rawValidators=this._composedValidatorFn=r}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(r){this._rawAsyncValidators=this._composedAsyncValidatorFn=r}get parent(){return this._parent}get status(){return ge(this.statusReactive)}set status(r){ge(()=>this.statusReactive.set(r))}_status=Se(()=>this.statusReactive());statusReactive=V(void 0);get valid(){return this.status===ur}get invalid(){return this.status===Lo}get pending(){return this.status===vn}get disabled(){return this.status===pr}get enabled(){return this.status!==pr}errors;get pristine(){return ge(this.pristineReactive)}set pristine(r){ge(()=>this.pristineReactive.set(r))}_pristine=Se(()=>this.pristineReactive());pristineReactive=V(!0);get dirty(){return!this.pristine}get touched(){return ge(this.touchedReactive)}set touched(r){ge(()=>this.touchedReactive.set(r))}_touched=Se(()=>this.touchedReactive());touchedReactive=V(!1);get untouched(){return!this.touched}_events=new J;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(r){this._assignValidators(r)}setAsyncValidators(r){this._assignAsyncValidators(r)}addValidators(r){this.setValidators(Cu(r,this._rawValidators))}addAsyncValidators(r){this.setAsyncValidators(Cu(r,this._rawAsyncValidators))}removeValidators(r){this.setValidators(wu(r,this._rawValidators))}removeAsyncValidators(r){this.setAsyncValidators(wu(r,this._rawAsyncValidators))}hasValidator(r){return Vo(this._rawValidators,r)}hasAsyncValidator(r){return Vo(this._rawAsyncValidators,r)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(r={}){let e=this.touched===!1;this.touched=!0;let n=r.sourceControl??this;r.onlySelf||this._parent?.markAsTouched(j(h({},r),{sourceControl:n})),e&&r.emitEvent!==!1&&this._events.next(new fr(!0,n))}markAllAsDirty(r={}){this.markAsDirty({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(r))}markAllAsTouched(r={}){this.markAsTouched({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(r))}markAsUntouched(r={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=r.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:n})}),r.onlySelf||this._parent?._updateTouched(r,n),e&&r.emitEvent!==!1&&this._events.next(new fr(!1,n))}markAsDirty(r={}){let e=this.pristine===!0;this.pristine=!1;let n=r.sourceControl??this;r.onlySelf||this._parent?.markAsDirty(j(h({},r),{sourceControl:n})),e&&r.emitEvent!==!1&&this._events.next(new mr(!1,n))}markAsPristine(r={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=r.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:r.emitEvent})}),r.onlySelf||this._parent?._updatePristine(r,n),e&&r.emitEvent!==!1&&this._events.next(new mr(!0,n))}markAsPending(r={}){this.status=vn;let e=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new yn(this.status,e)),this.statusChanges.emit(this.status)),r.onlySelf||this._parent?.markAsPending(j(h({},r),{sourceControl:e}))}disable(r={}){let e=this._parentMarkedDirty(r.onlySelf);this.status=pr,this.errors=null,this._forEachChild(o=>{o.disable(j(h({},r),{onlySelf:!0}))}),this._updateValue();let n=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new $o(this.value,n)),this._events.next(new yn(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(j(h({},r),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(r={}){let e=this._parentMarkedDirty(r.onlySelf);this.status=ur,this._forEachChild(n=>{n.enable(j(h({},r),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:r.emitEvent}),this._updateAncestors(j(h({},r),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(r,e){r.onlySelf||(this._parent?.updateValueAndValidity(r),r.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(r){this._parent=r}getRawValue(){return this.value}updateValueAndValidity(r={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ur||this.status===vn)&&this._runAsyncValidator(n,r.emitEvent)}let e=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new $o(this.value,e)),this._events.next(new yn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),r.onlySelf||this._parent?.updateValueAndValidity(j(h({},r),{sourceControl:e}))}_updateTreeValidity(r={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(r)),this.updateValueAndValidity({onlySelf:!0,emitEvent:r.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?pr:ur}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(r,e){if(this.asyncValidator){this.status=vn,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:r!==!1};let n=Ru(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:r})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let r=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,r}return!1}setErrors(r,e={}){this.errors=r,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(r){let e=r;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,o)=>n&&n._find(o),this)}getError(r,e){let n=e?this.get(e):this;return n?.errors?n.errors[r]:null}hasError(r,e){return!!this.getError(r,e)}get root(){let r=this;for(;r._parent;)r=r._parent;return r}_updateControlsErrors(r,e,n){this.status=this._calculateStatus(),r&&this.statusChanges.emit(this.status),(r||n)&&this._events.next(new yn(this.status,e)),this._parent&&this._parent._updateControlsErrors(r,e,n)}_initObservables(){this.valueChanges=new G,this.statusChanges=new G}_calculateStatus(){return this._allControlsDisabled()?pr:this.errors?Lo:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(vn)?vn:this._anyControlsHaveStatus(Lo)?Lo:ur}_anyControlsHaveStatus(r){return this._anyControls(e=>e.status===r)}_anyControlsDirty(){return this._anyControls(r=>r.dirty)}_anyControlsTouched(){return this._anyControls(r=>r.touched)}_updatePristine(r,e){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,r.onlySelf||this._parent?._updatePristine(r,e),o&&this._events.next(new mr(this.pristine,e))}_updateTouched(r={},e){this.touched=this._anyControlsTouched(),this._events.next(new fr(this.touched,e)),r.onlySelf||this._parent?._updateTouched(r,e)}_onDisabledChange=[];_registerOnCollectionChange(r){this._onCollectionChange=r}_setUpdateStrategy(r){Ko(r)&&r.updateOn!=null&&(this._updateOn=r.updateOn)}_parentMarkedDirty(r){return!r&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(r){return null}_assignValidators(r){this._rawValidators=Array.isArray(r)?r.slice():r,this._composedValidatorFn=rD(this._rawValidators)}_assignAsyncValidators(r){this._rawAsyncValidators=Array.isArray(r)?r.slice():r,this._composedAsyncValidatorFn=oD(this._rawAsyncValidators)}},Wo=class extends Ho{constructor(r,e,n){super(Nu(e),Pu(n,e)),this.controls=r,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(r,e){return this.controls[r]?this.controls[r]:(this.controls[r]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(r,e,n={}){this.registerControl(r,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(r,e={}){this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),delete this.controls[r],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(r,e,n={}){this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),delete this.controls[r],e&&this.registerControl(r,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(r){return this.controls.hasOwnProperty(r)&&this.controls[r].enabled}setValue(r,e={}){aD(this,!0,r),Object.keys(r).forEach(n=>{iD(this,!0,n),this.controls[n].setValue(r[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(r,e={}){r!=null&&(Object.keys(r).forEach(n=>{let o=this.controls[n];o&&o.patchValue(r[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(r={},e={}){this._forEachChild((n,o)=>{n.reset(r?r[o]:null,j(h({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new zo(this))}getRawValue(){return this._reduceChildren({},(r,e,n)=>(r[n]=e.getRawValue(),r))}_syncPendingControls(){let r=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return r&&this.updateValueAndValidity({onlySelf:!0}),r}_forEachChild(r){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&r(n,e)})}_setUpControls(){this._forEachChild(r=>{r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(r){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&r(n))return!0;return!1}_reduceValue(){let r={};return this._reduceChildren(r,(e,n,o)=>((n.enabled||this.disabled)&&(e[o]=n.value),e))}_reduceChildren(r,e){let n=r;return this._forEachChild((o,i)=>{n=e(n,o,i)}),n}_allControlsDisabled(){for(let r of Object.keys(this.controls))if(this.controls[r].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(r){return this.controls.hasOwnProperty(r)?this.controls[r]:null}};var ja=new _("",{factory:()=>$a}),$a="always";function sD(t,r){return[...r.path,t]}function Bu(t,r,e=$a){Lu(t,r),r.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&r.valueAccessor.setDisabledState?.(t.disabled),lD(t,r),uD(t,r),dD(t,r),cD(t,r)}function Du(t,r){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(r)})}function cD(t,r){if(r.valueAccessor.setDisabledState){let e=n=>{r.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),r._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Lu(t,r){let e=tD(t);r.validator!==null?t.setValidators(_u(e,r.validator)):typeof e=="function"&&t.setValidators([e]);let n=nD(t);r.asyncValidator!==null?t.setAsyncValidators(_u(n,r.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let o=()=>t.updateValueAndValidity();Du(r._rawValidators,o),Du(r._rawAsyncValidators,o)}function lD(t,r){r.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Vu(t,r)})}function dD(t,r){r.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Vu(t,r),t.updateOn!=="submit"&&t.markAsTouched()})}function Vu(t,r){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),r.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function uD(t,r){let e=(n,o)=>{r.valueAccessor.writeValue(n),o&&r.viewToModelUpdate(n)};t.registerOnChange(e),r._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function pD(t,r){t==null,Lu(t,r)}function hD(t,r){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(r,e.currentValue)}function mD(t){return Object.getPrototypeOf(t.constructor)===Go}function fD(t,r){t._syncPendingControls(),r.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function gD(t,r){if(!r)return null;Array.isArray(r);let e,n,o;return r.forEach(i=>{i.constructor===Cn?e=i:mD(i)?n=i:o=i}),o||n||e||null}var bD={provide:_n,useExisting:it(()=>vr)},hr=Promise.resolve(),vr=(()=>{class t extends _n{callSetDisabledState;get submitted(){return ge(this.submittedReactive)}_submitted=Se(()=>this.submittedReactive());submittedReactive=V(!1);_directives=new Set;form;ngSubmit=new G;options;constructor(e,n,o){super(),this.callSetDisabledState=o,this.form=new Wo({},Va(e),Ua(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){hr.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),Bu(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){hr.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){hr.then(()=>{let n=this._findContainer(e.path),o=new Wo({});pD(o,e),n.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){hr.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){hr.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),fD(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Ba(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(R(La,10),R(Au,10),R(ja,8))};static \u0275dir=x({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,o){n&1&&ne("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Y([bD]),P]})}return t})();function Su(t,r){let e=t.indexOf(r);e>-1&&t.splice(e,1)}function Eu(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var vD=class extends Ho{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(r=null,e,n){super(Nu(e),Pu(n,e)),this._applyFormState(r),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ko(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Eu(r)?this.defaultValue=r.value:this.defaultValue=r)}setValue(r,e={}){this.value=this._pendingValue=r,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(r,e={}){this.setValue(r,e)}reset(r=this.defaultValue,e={}){this._applyFormState(r),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new zo(this))}_updateValue(){}_anyControls(r){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(r){this._onChange.push(r)}_unregisterOnChange(r){Su(this._onChange,r)}registerOnDisabledChange(r){this._onDisabledChange.push(r)}_unregisterOnDisabledChange(r){Su(this._onDisabledChange,r)}_forEachChild(r){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(r){Eu(r)?(this.value=this._pendingValue=r.value,r.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=r}};var yD={provide:gr,useExisting:it(()=>Wt)},xu=Promise.resolve(),Wt=(()=>{class t extends gr{_changeDetectorRef;callSetDisabledState;control=new vD;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new G;constructor(e,n,o,i,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=gD(this,i)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),hD(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Bu(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){xu.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,o=n!==0&&U(n);xu.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?sD(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(R(_n,9),R(La,10),R(Au,10),R(br,10),R(Re,8),R(ja,8))};static \u0275dir=x({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Y([yD]),P,Be]})}return t})();var Yo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),_D={provide:br,useExisting:it(()=>yr),multi:!0},yr=(()=>{class t extends Go{writeValue(e){let n=e??"";this.setProperty("value",n)}registerOnChange(e){this.onChange=n=>{e(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275dir=x({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,o){n&1&&ne("input",function(a){return o.onChange(a.target.value)})("blur",function(){return o.onTouched()})},standalone:!1,features:[Y([_D]),P]})}return t})();var CD={provide:br,useExisting:it(()=>Zo),multi:!0};function Uu(t,r){return t==null?`${r}`:(r&&typeof r=="object"&&(r="Object"),`${t}: ${r}`.slice(0,50))}function wD(t){return t.split(":")[0]}var Zo=(()=>{class t extends Go{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;appRefInjector=d(Zt).injector;destroyRef=d(Tn);cdr=d(Re);_queuedWrite=!1;_writeValueAfterRender(){this._queuedWrite||this.appRefInjector.destroyed||(this._queuedWrite=!0,Pn({write:()=>{this.destroyRef.destroyed||(this._queuedWrite=!1,this.writeValue(this.value))}},{injector:this.appRefInjector}))}writeValue(e){this.cdr.markForCheck(),this.value=e;let n=this._getOptionId(e),o=Uu(n,e);this.setProperty("value",o)}registerOnChange(e){this.onChange=n=>{this.value=this._getOptionValue(n),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n),e))return n;return null}_getOptionValue(e){let n=wD(e);return this._optionMap.has(n)?this._optionMap.get(n):e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275dir=x({type:t,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,o){n&1&&ne("change",function(a){return o.onChange(a.target.value)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[Y([CD]),P]})}return t})(),ju=(()=>{class t{_element;_renderer;_select;id;constructor(e,n,o){this._element=e,this._renderer=n,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(Uu(this.id,e)),this._select._writeValueAfterRender())}set value(e){this._setElementValue(e),this._select?._writeValueAfterRender()}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select?._optionMap.delete(this.id),this._select?._writeValueAfterRender()}static \u0275fac=function(n){return new(n||t)(R(Z),R(ye),R(Zo,9))};static \u0275dir=x({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return t})(),DD={provide:br,useExisting:it(()=>$u),multi:!0};function ku(t,r){return t==null?`${r}`:(typeof r=="string"&&(r=`'${r}'`),r&&typeof r=="object"&&(r="Object"),`${t}: ${r}`.slice(0,50))}function SD(t){return t.split(":")[0]}var $u=(()=>{class t extends Go{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;writeValue(e){this.value=e;let n;if(Array.isArray(e)){let o=e.map(i=>this._getOptionId(i));n=(i,a)=>{i._setSelected(o.indexOf(a)>-1)}}else n=o=>{o._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(e){this.onChange=n=>{let o=[],i=n.selectedOptions;if(i!==void 0){let a=i;for(let s=0;s<a.length;s++){let c=a[s],l=this._getOptionValue(c.value);o.push(l)}}else{let a=n.options;for(let s=0;s<a.length;s++){let c=a[s];if(c.selected){let l=this._getOptionValue(c.value);o.push(l)}}}this.value=o,e(o)}}_registerOption(e){let n=(this._idCounter++).toString();return this._optionMap.set(n,e),n}_getOptionId(e){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n)._value,e))return n;return null}_getOptionValue(e){let n=SD(e);return this._optionMap.has(n)?this._optionMap.get(n)._value:e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275dir=x({type:t,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,o){n&1&&ne("change",function(a){return o.onChange(a.target)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[Y([DD]),P]})}return t})(),zu=(()=>{class t{_element;_renderer;_select;id;_value;constructor(e,n,o){this._element=e,this._renderer=n,this._select=o,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(ku(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(ku(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(n){return new(n||t)(R(Z),R(ye),R($u,9))};static \u0275dir=x({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return t})();function ED(t){return typeof t=="number"?t:parseFloat(t)}var xD=(()=>{class t{_validator=yu;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):yu,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,features:[Be]})}return t})();var kD={provide:La,useExisting:it(()=>_r),multi:!0},_r=(()=>{class t extends xD{min;inputName="min";normalizeInput=e=>ED(e);createValidator=e=>Xw(e);static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275dir=x({type:t,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(n,o){n&2&&te("min",o._enabled?o.min:null)},inputs:{min:"min"},standalone:!1,features:[Y([kD]),P]})}return t})();var ID=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=O({})}return t})();var Dn=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:ja,useValue:e.callSetDisabledState??$a}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=O({imports:[ID]})}return t})();var AD=(t,r)=>r.id;function MD(t,r){if(t&1&&(v(0,"option",2),C(1),y()),t&2){let e=r.$implicit;w("ngValue",e.id),f(),fe(e.name)}}var Xo=class t{categories=[];totalPrice=0;categorySelected=new G;selectedCategoryId=0;onCategoryChange(){this.categorySelected.emit(Number(this.selectedCategoryId))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-product-filter"]],inputs:{categories:"categories",totalPrice:"totalPrice"},outputs:{categorySelected:"categorySelected"},decls:12,vars:3,consts:[[1,"product-filter"],["name","category",3,"ngModelChange","ngModel"],[3,"ngValue"]],template:function(e,n){e&1&&(v(0,"div",0)(1,"label"),C(2," Category "),v(3,"select",1),St("ngModelChange",function(i){return Dt(n.selectedCategoryId,i)||(n.selectedCategoryId=i),i}),ne("ngModelChange",function(){return n.onCategoryChange()}),v(4,"option",2),C(5,"All categories"),y(),Xt(6,MD,2,2,"option",2,AD),y()(),v(8,"p"),C(9,"Total price: "),v(10,"strong"),C(11),y()()()),e&2&&(f(3),wt("ngModel",n.selectedCategoryId),f(),w("ngValue",0),f(2),Qt(n.categories),f(5),dt("",n.totalPrice," EGP"))},dependencies:[Dn,ju,zu,Zo,wn,Wt],styles:[".product-filter[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:end;justify-content:space-between;gap:16px;padding:16px;border:1px solid #ddd;border-radius:8px;background:#fff}label[_ngcontent-%COMP%]{display:grid;gap:6px;color:#333}select[_ngcontent-%COMP%]{min-width:220px;min-height:38px;padding:0 10px;border:1px solid #bbb;border-radius:6px;font:inherit}p[_ngcontent-%COMP%]{margin:0;color:#333}"]})};var RD=(t,r)=>r.id;function TD(t,r){if(t&1&&(v(0,"p",9),C(1),y()),t&2){let e=T().$implicit;f(),dt("Quantity: ",e.quantity)}}function FD(t,r){t&1&&(v(0,"p",10),C(1,"Out of stock"),y())}function OD(t,r){if(t&1&&(v(0,"article",3),ie(1,"img",5),v(2,"div",6)(3,"span",7),C(4),y(),v(5,"h2"),C(6),y(),v(7,"p",8),C(8),y(),He(9,TD,2,1,"p",9)(10,FD,2,0,"p",10),y()()),t&2){let e=r.$implicit,n=T();f(),w("src",e.imgUrl,Ms)("alt",e.name),f(3),fe(n.getCategoryName(e.catId)),f(2),fe(e.name),f(2),dt("",e.price," EGP"),f(),We(e.quantity>0?9:10)}}function ND(t,r){t&1&&(v(0,"p",4),C(1,"No products in this category."),y())}var Qo=class t{products=[{id:1,name:"Laptop",imgUrl:"https://fastly.picsum.photos/id/842/200/200.jpg?hmac=RW9iEgAYLKwoinQWSz_zrZHyOwmVEgqvoZTPebkRGMM",price:1200,quantity:10,catId:1},{id:2,name:"Mouse",imgUrl:"https://picsum.photos/200?random=2",price:25,quantity:0,catId:1},{id:3,name:"T-Shirt",imgUrl:"https://picsum.photos/200?random=3",price:30,quantity:1,catId:2},{id:4,name:"Jeans",imgUrl:"https://picsum.photos/200?random=4",price:70,quantity:25,catId:2},{id:5,name:"Coffee Mug",imgUrl:"https://picsum.photos/200?random=5",price:12,quantity:0,catId:3},{id:6,name:"Notebook",imgUrl:"https://picsum.photos/200?random=6",price:8,quantity:100,catId:3}];categories=[{id:1,name:"Electronics"},{id:2,name:"Clothing"},{id:3,name:"Stationery"}];selectedCategoryId=0;get filteredProducts(){return this.selectedCategoryId===0?this.products:this.products.filter(r=>r.catId===this.selectedCategoryId)}get totalPrice(){return this.filteredProducts.reduce((r,e)=>r+e.price*e.quantity,0)}getCategoryName(r){return this.categories.find(e=>e.id===r)?.name??"Unknown"}filterByCategory(r){this.selectedCategoryId=r}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-product-list"]],decls:8,vars:3,consts:[[1,"product-list"],[3,"categorySelected","categories","totalPrice"],[1,"products-grid"],[1,"product-card"],[1,"empty-state"],[3,"src","alt"],[1,"product-info"],[1,"category"],[1,"price"],[1,"quantity"],[1,"quantity","out-of-stock"]],template:function(e,n){e&1&&(v(0,"section",0)(1,"h1"),C(2,"Products"),y(),v(3,"app-product-filter",1),ne("categorySelected",function(i){return n.filterByCategory(i)}),y(),v(4,"div",2),Xt(5,OD,11,6,"article",3,RD,!1,ND,2,0,"p",4),y()()),e&2&&(f(3),w("categories",n.categories)("totalPrice",n.totalPrice),f(2),Qt(n.filteredProducts))},dependencies:[Xo],styles:[".product-list[_ngcontent-%COMP%]{max-width:1100px;margin:40px auto;padding:24px;font-family:Arial,sans-serif}h1[_ngcontent-%COMP%]{margin:0 0 24px;color:#222}app-product-filter[_ngcontent-%COMP%]{display:block;margin-bottom:20px}.products-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px}.product-card[_ngcontent-%COMP%]{overflow:hidden;border:1px solid #ddd;border-radius:8px;background:#fff;box-shadow:0 4px 12px #00000014}.product-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:180px;object-fit:cover;display:block}.product-info[_ngcontent-%COMP%]{padding:16px}.category[_ngcontent-%COMP%]{display:inline-block;margin-bottom:8px;color:#555;font-size:14px}h2[_ngcontent-%COMP%]{margin:0 0 10px;color:#222;font-size:20px}.price[_ngcontent-%COMP%]{margin:0 0 8px;color:#0b6b4f;font-weight:700}.quantity[_ngcontent-%COMP%]{margin:0;color:#333}.out-of-stock[_ngcontent-%COMP%]{color:#c62828;font-weight:700}.empty-state[_ngcontent-%COMP%]{margin:0;color:#555}"]})};function PD(t,r){if(t&1&&(he(0,"p")(1,"strong"),C(2,"Id:"),re(),C(3),re(),he(4,"p")(5,"strong"),C(6,"Name:"),re(),C(7),re(),he(8,"p")(9,"strong"),C(10,"Age:"),re(),C(11),re()),t&2){let e=T();f(3),dt(" ",e.student.id),f(4),dt(" ",e.student.name),f(4),dt(" ",e.student.age)}}function BD(t,r){t&1&&(he(0,"p"),C(1,"Select a student to view details."),re())}var Jo=class t{student;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-student-details"]],inputs:{student:"student"},decls:5,vars:1,consts:[[1,"student-details"]],template:function(e,n){e&1&&(he(0,"section",0)(1,"h2"),C(2,"Student Details"),re(),He(3,PD,12,3)(4,BD,2,0,"p"),re()),e&2&&(f(3),We(n.student?3:4))},styles:[".student-details[_ngcontent-%COMP%]{min-height:170px;padding:16px;border:1px solid #ddd;border-radius:8px;background:#fff}h2[_ngcontent-%COMP%]{margin:0 0 12px;font-size:20px}p[_ngcontent-%COMP%]{margin:8px 0}"]})};function LD(t,r){if(t&1){let e=eo();v(0,"form",1),ne("ngSubmit",function(){vt(e);let o=T();return yt(o.save())}),v(1,"label"),C(2," Name "),v(3,"input",2),St("ngModelChange",function(o){vt(e);let i=T();return Dt(i.editedStudent.name,o)||(i.editedStudent.name=o),yt(o)}),y()(),v(4,"label"),C(5," Age "),v(6,"input",3),St("ngModelChange",function(o){vt(e);let i=T();return Dt(i.editedStudent.age,o)||(i.editedStudent.age=o),yt(o)}),y()(),v(7,"div",4)(8,"button",5),C(9,"Save"),y(),v(10,"button",6),ne("click",function(){vt(e);let o=T();return yt(o.cancel())}),C(11,"Cancel"),y()()()}if(t&2){let e=T();f(3),wt("ngModel",e.editedStudent.name),f(3),wt("ngModel",e.editedStudent.age)}}function VD(t,r){t&1&&(v(0,"p"),C(1,"Select a student to edit."),y())}var ei=class t{student;studentUpdated=new G;editCancelled=new G;editedStudent;ngOnChanges(r){r.student&&(this.editedStudent=this.student?h({},this.student):void 0)}save(){!this.editedStudent||!this.editedStudent.name.trim()||this.editedStudent.age<=0||this.studentUpdated.emit(j(h({},this.editedStudent),{name:this.editedStudent.name.trim()}))}cancel(){this.editCancelled.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-student-edit"]],inputs:{student:"student"},outputs:{studentUpdated:"studentUpdated",editCancelled:"editCancelled"},features:[Be],decls:5,vars:1,consts:[[1,"student-edit"],[3,"ngSubmit"],["type","text","name","editName",3,"ngModelChange","ngModel"],["type","number","name","editAge","min","1",3,"ngModelChange","ngModel"],[1,"buttons"],["type","submit"],["type","button",1,"secondary",3,"click"]],template:function(e,n){e&1&&(v(0,"section",0)(1,"h2"),C(2,"Edit Student"),y(),He(3,LD,12,2,"form")(4,VD,2,0,"p"),y()),e&2&&(f(3),We(n.editedStudent?3:4))},dependencies:[Dn,Yo,Cn,yr,wn,qo,_r,Wt,vr],styles:[".student-edit[_ngcontent-%COMP%]{min-height:170px;padding:16px;border:1px solid #ddd;border-radius:8px;background:#fff}h2[_ngcontent-%COMP%]{margin:0 0 12px;font-size:20px}form[_ngcontent-%COMP%]{display:grid;gap:12px}label[_ngcontent-%COMP%]{display:grid;gap:6px;color:#333}input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{min-height:36px;border:1px solid #bbb;border-radius:6px;font:inherit}input[_ngcontent-%COMP%]{padding:0 10px}button[_ngcontent-%COMP%]{cursor:pointer;padding:0 14px;background:#164e63;color:#fff}.buttons[_ngcontent-%COMP%]{display:flex;gap:8px}.secondary[_ngcontent-%COMP%]{background:#64748b}p[_ngcontent-%COMP%]{margin:8px 0}"]})};var UD=(t,r)=>r.id;function jD(t,r){if(t&1){let e=eo();v(0,"tr")(1,"td"),C(2),y(),v(3,"td"),C(4),y(),v(5,"td"),C(6),y(),v(7,"td",8)(8,"button",9),ne("click",function(){let o=vt(e).$implicit,i=T();return yt(i.showDetails(o))}),C(9,"Details"),y(),v(10,"button",9),ne("click",function(){let o=vt(e).$implicit,i=T();return yt(i.editStudent(o))}),C(11,"Edit"),y()()()}if(t&2){let e=r.$implicit;f(2),fe(e.id),f(2),fe(e.name),f(2),fe(e.age)}}var ti=class t{students=[{id:1,name:"Ahmed",age:22},{id:2,name:"Mona",age:21},{id:3,name:"Omar",age:23},{id:4,name:"Sara",age:20}];selectedStudent;editingStudent;newStudent={name:"",age:18};addStudent(){let r=this.newStudent.name.trim();if(!r||this.newStudent.age<=0)return;let e=Math.max(...this.students.map(n=>n.id),0)+1;this.students=[...this.students,{id:e,name:r,age:this.newStudent.age}],this.newStudent={name:"",age:18}}showDetails(r){this.selectedStudent=r}editStudent(r){this.editingStudent=r}saveStudent(r){this.students=this.students.map(e=>e.id===r.id?r:e),this.selectedStudent=r,this.editingStudent=void 0}cancelEdit(){this.editingStudent=void 0}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-student-list"]],decls:25,vars:4,consts:[[1,"student-list"],[1,"student-form",3,"ngSubmit"],["type","text","name","studentName","placeholder","Student name",3,"ngModelChange","ngModel"],["type","number","name","studentAge","min","1","placeholder","Age",3,"ngModelChange","ngModel"],["type","submit"],[1,"student-panels"],[3,"student"],[3,"studentUpdated","editCancelled","student"],[1,"actions"],["type","button",3,"click"]],template:function(e,n){e&1&&(v(0,"section",0)(1,"h1"),C(2,"Student List"),y(),v(3,"form",1),ne("ngSubmit",function(){return n.addStudent()}),v(4,"input",2),St("ngModelChange",function(i){return Dt(n.newStudent.name,i)||(n.newStudent.name=i),i}),y(),v(5,"input",3),St("ngModelChange",function(i){return Dt(n.newStudent.age,i)||(n.newStudent.age=i),i}),y(),v(6,"button",4),C(7,"Add Student"),y()(),v(8,"table")(9,"thead")(10,"tr")(11,"th"),C(12,"Id"),y(),v(13,"th"),C(14,"Name"),y(),v(15,"th"),C(16,"Age"),y(),v(17,"th"),C(18,"Actions"),y()()(),v(19,"tbody"),Xt(20,jD,12,3,"tr",null,UD),y()(),v(22,"div",5),ie(23,"app-student-details",6),v(24,"app-student-edit",7),ne("studentUpdated",function(i){return n.saveStudent(i)})("editCancelled",function(){return n.cancelEdit()}),y()()()),e&2&&(f(4),wt("ngModel",n.newStudent.name),f(),wt("ngModel",n.newStudent.age),f(15),Qt(n.students),f(3),w("student",n.selectedStudent),f(),w("student",n.editingStudent))},dependencies:[Dn,Yo,Cn,yr,wn,qo,_r,Wt,vr,Jo,ei],styles:[".student-list[_ngcontent-%COMP%]{max-width:900px;margin:40px auto;padding:24px;font-family:Arial,sans-serif}h1[_ngcontent-%COMP%]{margin:0 0 20px;color:#222}.student-form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px}input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{min-height:38px;border:1px solid #bbb;border-radius:6px;font:inherit}input[_ngcontent-%COMP%]{flex:1 1 180px;padding:0 10px}button[_ngcontent-%COMP%]{cursor:pointer;padding:0 14px;background:#164e63;color:#fff}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background:#fff}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:12px;border:1px solid #ddd;text-align:left}th[_ngcontent-%COMP%]{background:#f2f2f2}.actions[_ngcontent-%COMP%]{display:flex;gap:8px}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-height:32px;background:#334155}.student-panels[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin-top:20px}"]})};function Cr(t){return t.buttons===0||t.detail===0}function wr(t){let r=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var Ha;function Hu(){if(Ha==null){let t=typeof document<"u"?document.head:null;Ha=!!(t&&(t.createShadowRoot||t.attachShadow))}return Ha}function Wa(t){if(Hu()){let r=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function Qe(t){return t.composedPath?t.composedPath()[0]:t.target}var Ga;try{Ga=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Ga=!1}var mt=(()=>{class t{_platformId=d(Le);isBrowser=this._platformId?Lt(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ga)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Dr;function Wu(){if(Dr==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Dr=!0}))}finally{Dr=Dr||!1}return Dr}function En(t){return Wu()?t:!!t.capture}function Ft(t){return t instanceof Z?t.nativeElement:t}var Gu=new _("cdk-input-modality-detector-options"),qu={ignoreKeys:[18,17,224,91,16]},Ku=650,qa={passive:!0,capture:!0},Yu=(()=>{class t{_platform=d(mt);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ke(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Qe(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Ku||(this._modality.next(Cr(e)?"keyboard":"mouse"),this._mostRecentTarget=Qe(e))};_onTouchstart=e=>{if(wr(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Qe(e)};constructor(){let e=d(ce),n=d(F),o=d(Gu,{optional:!0});if(this._options=h(h({},qu),o),this.modalityDetected=this._modality.pipe(ws(1)),this.modalityChanged=this.modalityDetected.pipe(_s()),this._platform.isBrowser){let i=d(_t).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[i.listen(n,"keydown",this._onKeydown,qa),i.listen(n,"mousedown",this._onMousedown,qa),i.listen(n,"touchstart",this._onTouchstart,qa)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Sr=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Sr||{}),Zu=new _("cdk-focus-monitor-default-options"),ni=En({passive:!0,capture:!0}),Er=(()=>{class t{_ngZone=d(ce);_platform=d(mt);_inputModalityDetector=d(Yu);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(F);_stopInputModalityDetector=new J;constructor(){let e=d(Zu,{optional:!0});this._detectionMode=e?.detectionMode||Sr.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=Qe(e);for(let o=n;o;o=o.parentElement)e.type==="focus"?this._onFocus(e,o):this._onBlur(e,o)};monitor(e,n=!1){let o=Ft(e);if(!this._platform.isBrowser||o.nodeType!==1)return M();let i=Wa(o)||this._document,a=this._elementInfo.get(o);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new J,rootNode:i};return this._elementInfo.set(o,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=Ft(e),o=this._elementInfo.get(n);o&&(o.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(o))}focusVia(e,n,o){let i=Ft(e),a=this._document.activeElement;i===a?this._getClosestElementsInfo(i).forEach(([s,c])=>this._originChanged(s,n,c)):(this._setOrigin(n),typeof i.focus=="function"&&i.focus(o))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Sr.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===Sr.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Ku:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(e,n){let o=this._elementInfo.get(n),i=Qe(e);!o||!o.checkChildren&&n!==i||this._originChanged(n,this._getFocusOrigin(i),o)}_onBlur(e,n){let o=this._elementInfo.get(n);!o||o.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(o,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,o=this._rootNodeFocusListenerCount.get(n)||0;o||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,ni),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,ni)}),this._rootNodeFocusListenerCount.set(n,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ze(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let o=this._rootNodeFocusListenerCount.get(n);o>1?this._rootNodeFocusListenerCount.set(n,o-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,ni),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,ni),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,o){this._setClasses(e,n),this._emitOrigin(o,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((o,i)=>{(i===e||o.checkChildren&&i.contains(e))&&n.push([i,o])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let i=e.labels;if(i){for(let a=0;a<i.length;a++)if(i[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ri=new WeakMap,Ot=(()=>{class t{_appRef;_injector=d(ve);_environmentInjector=d(at);load(e){let n=this._appRef=this._appRef||this._injector.get(Zt),o=ri.get(n);o||(o={loaders:new Set,refs:[]},ri.set(n,o),n.onDestroy(()=>{ri.get(n)?.refs.forEach(i=>i.destroy()),ri.delete(n)})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push($s(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var Qu=new Set,Gt,Ka=(()=>{class t{_platform=d(mt);_nonce=d(Nn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):zD}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&$D(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function $D(t,r){if(!Qu.has(t))try{Gt||(Gt=document.createElement("style"),r&&Gt.setAttribute("nonce",r),Gt.setAttribute("type","text/css"),document.head.appendChild(Gt)),Gt.sheet&&(Gt.sheet.insertRule(`@media ${t} {body{ }}`,0),Qu.add(t))}catch(e){console.error(e)}}function zD(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var HD=200,oi=class{_letterKeyStream=new J;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new J;selectedItem=this._selectedItem;constructor(r,e){let n=typeof e?.debounceInterval=="number"?e.debounceInterval:HD;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(r),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(r){this._selectedItemIndex=r}setItems(r){this._items=r}handleKey(r){let e=r.keyCode;r.key&&r.key.length===1?this._letterKeyStream.next(r.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(r){this._letterKeyStream.pipe(Me(e=>this._pressedLetters.push(e)),ys(r),gt(()=>this._pressedLetters.length>0),pe(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let o=(this._selectedItemIndex+n)%this._items.length,i=this._items[o];if(!this._skipPredicateFn?.(i)&&i.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(i);break}}this._pressedLetters=[]})}};function Ju(t,...r){return r.length?r.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var ii=class{_items;_activeItemIndex=V(-1);_activeItem=V(null);_wrap=!1;_typeaheadSubscription=qr.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=r=>r.disabled;constructor(r,e){this._items=r,r instanceof Fn?this._itemChangesSubscription=r.changes.subscribe(n=>this._itemsChanged(n.toArray())):Jr(r)&&(this._effectRef=Ae(()=>this._itemsChanged(r()),{injector:e}))}tabOut=new J;change=new J;skipPredicate(r){return this._skipPredicateFn=r,this}withWrap(r=!0){return this._wrap=r,this}withVerticalOrientation(r=!0){return this._vertical=r,this}withHorizontalOrientation(r){return this._horizontal=r,this}withAllowedModifierKeys(r){return this._allowedModifierKeys=r,this}withTypeAhead(r=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new oi(e,{debounceInterval:typeof r=="number"?r:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(r=!0){return this._homeAndEnd=r,this}withPageUpDown(r=!0,e=10){return this._pageUpAndDown={enabled:r,delta:e},this}setActiveItem(r){let e=this._activeItem();this.updateActiveItem(r),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(r){let e=r.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(i=>!r[i]||this._allowedModifierKeys.indexOf(i)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(i>0?i:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(i<a?i:a-1,-1);break}else return;default:(o||Ju(r,"shiftKey"))&&this._typeahead?.handleKey(r);return}this._typeahead?.reset(),r.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(r){let e=this._getItemsArray(),n=typeof r=="number"?r:e.indexOf(r),o=e[n];this._activeItem.set(o??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(r){this._wrap?this._setActiveInWrapMode(r):this._setActiveInDefaultMode(r)}_setActiveInWrapMode(r){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let o=(this._activeItemIndex()+r*n+e.length)%e.length,i=e[o];if(!this._skipPredicateFn(i)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(r){this._setActiveItemByIndex(this._activeItemIndex()+r,r)}_setActiveItemByIndex(r,e){let n=this._getItemsArray();if(n[r]){for(;this._skipPredicateFn(n[r]);)if(r+=e,!n[r])return;this.setActiveItem(r)}}_getItemsArray(){return Jr(this._items)?this._items():this._items instanceof Fn?this._items.toArray():this._items}_itemsChanged(r){this._typeahead?.setItems(r);let e=this._activeItem();if(e){let n=r.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var xr=class extends ii{_origin="program";setFocusOrigin(r){return this._origin=r,this}setActiveItem(r){super.setActiveItem(r),this.activeItem&&this.activeItem.focus(this._origin)}};var Ya={},kr=class t{_appId=d(On);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,e=!1){return this._appId!=="ng"&&(r+=this._appId),Ya.hasOwnProperty(r)||(Ya[r]=0),`${r}${e?t._infix+"-":""}${Ya[r]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var WD=new _("MATERIAL_ANIMATIONS"),ep=null;function Za(){return d(WD,{optional:!0})?.animationsDisabled||d(Zr,{optional:!0})==="NoopAnimations"?"di-disabled":(ep??=d(Ka).matchMedia("(prefers-reduced-motion)").matches,ep?"reduced-motion":"enabled")}function xn(){return Za()!=="enabled"}var $e=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})($e||{}),Xa=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=$e.HIDDEN;constructor(r,e,n,o=!1){this._renderer=r,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},tp=En({passive:!0,capture:!0}),Qa=class{_events=new Map;addHandler(r,e,n,o){let i=this._events.get(e);if(i){let a=i.get(n);a?a.add(o):i.set(n,new Set([o]))}else this._events.set(e,new Map([[n,new Set([o])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,tp)})}removeHandler(r,e,n){let o=this._events.get(r);if(!o)return;let i=o.get(e);i&&(i.delete(n),i.size===0&&o.delete(e),o.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,tp)))}_delegateEventHandler=r=>{let e=Qe(r);e&&this._events.get(r.type)?.forEach((n,o)=>{(o===e||o.contains(e))&&n.forEach(i=>i.handleEvent(r))})}},Ir={enterDuration:225,exitDuration:150},GD=800,np=En({passive:!0,capture:!0}),rp=["mousedown","touchstart"],op=["mouseup","mouseleave","touchend","touchcancel"],qD=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),ai=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Qa;constructor(r,e,n,o,i){this._target=r,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=Ft(n)),i&&i.get(Ot).load(qD)}fadeInRipple(r,e,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=h(h({},Ir),n.animation);n.centered&&(r=o.left+o.width/2,e=o.top+o.height/2);let a=n.radius||KD(r,e,o),s=r-o.left,c=e-o.top,l=i.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${c-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,n.color!=null&&(u.style.backgroundColor=n.color),u.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(u);let p=window.getComputedStyle(u),m=p.transitionProperty,g=p.transitionDuration,D=m==="none"||g==="0s"||g==="0s, 0s"||o.width===0&&o.height===0,E=new Xa(this,u,n,D);u.style.transform="scale3d(1, 1, 1)",E.state=$e.FADING_IN,n.persistent||(this._mostRecentTransientRipple=E);let B=null;return!D&&(l||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ee=()=>{B&&(B.fallbackTimer=null),clearTimeout(se),this._finishRippleTransition(E)},Q=()=>this._destroyRipple(E),se=setTimeout(Q,l+100);u.addEventListener("transitionend",ee),u.addEventListener("transitioncancel",Q),B={onTransitionEnd:ee,onTransitionCancel:Q,fallbackTimer:se}}),this._activeRipples.set(E,B),(D||!l)&&this._finishRippleTransition(E),E}fadeOutRipple(r){if(r.state===$e.FADING_OUT||r.state===$e.HIDDEN)return;let e=r.element,n=h(h({},Ir),r.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",r.state=$e.FADING_OUT,(r._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=Ft(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,rp.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(r){r.type==="mousedown"?this._onMousedown(r):r.type==="touchstart"?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{op.forEach(e=>{this._triggerElement.addEventListener(e,this,np)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===$e.FADING_IN?this._startFadeOutTransition(r):r.state===$e.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:n}=r.config;r.state=$e.VISIBLE,!n&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=$e.HIDDEN,e!==null&&(r.element.removeEventListener("transitionend",e.onTransitionEnd),r.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=Cr(r),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+GD;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!wr(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===$e.VISIBLE||r.config.terminateOnPointerUp&&r.state===$e.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(rp.forEach(e=>t._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&(op.forEach(e=>r.removeEventListener(e,this,np)),this._pointerUpEventsRegistered=!1))}};function KD(t,r,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),o=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(n*n+o*o)}var si=new _("mat-ripple-global-options");var YD={capture:!0},ZD=["focus","mousedown","mouseenter","touchstart"],Ja="mat-ripple-loader-uninitialized",es="mat-ripple-loader-class-name",ip="mat-ripple-loader-centered",ci="mat-ripple-loader-disabled",li=(()=>{class t{_document=d(F);_animationsDisabled=xn();_globalRippleOptions=d(si,{optional:!0});_platform=d(mt);_ngZone=d(ce);_injector=d(ve);_eventCleanups;_hosts=new Map;constructor(){let e=d(_t).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ZD.map(n=>e.listen(this._document,n,this._onInteraction,YD)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(Ja,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(es))&&e.setAttribute(es,n.className||""),n.centered&&e.setAttribute(ip,""),n.disabled&&e.setAttribute(ci,"")}setDisabled(e,n){let o=this._hosts.get(e);o?(o.target.rippleDisabled=n,!n&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(e))):n?e.setAttribute(ci,""):e.removeAttribute(ci)}_onInteraction=e=>{let n=Qe(e);if(n instanceof HTMLElement){let o=n.closest(`[${Ja}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(es)),e.append(n);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??Ir.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??Ir.exitDuration,s={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(ci),rippleConfig:{centered:e.hasAttribute(ip),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:a}}},c=new ai(s,this._ngZone,n,this._platform,this._injector),l=!s.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:l}),e.removeAttribute(Ja)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ar=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=S({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var XD=new _("MAT_BUTTON_CONFIG");function ap(t){return t==null?void 0:tt(t)}var sp=(()=>{class t{_elementRef=d(Z);_ngZone=d(ce);_animationsDisabled=xn();_config=d(XD,{optional:!0});_focusMonitor=d(Er);_cleanupClick;_renderer=d(ye);_rippleLoader=d(li);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(Ot).load(Ar);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,o){n&2&&(te("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),L(o.color?"mat-"+o.color:""),me("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",U],disabled:[2,"disabled","disabled",U],ariaDisabled:[2,"aria-disabled","ariaDisabled",U],disabledInteractive:[2,"disabledInteractive","disabledInteractive",U],tabIndex:[2,"tabIndex","tabIndex",ap],_tabindex:[2,"tabindex","_tabindex",ap]}})}return t})();var QD=new _("cdk-dir-doc",{providedIn:"root",factory:()=>d(F)}),JD=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function cp(t){let r=t?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?JD.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var ts=(()=>{class t{get value(){return this.valueSignal()}valueSignal=V("ltr");change=new G;constructor(){let e=d(QD,{optional:!0});if(e){let n=e.body?e.body.dir:null,o=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(cp(n||o||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ot=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=O({})}return t})();var di=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=O({imports:[ot]})}return t})();var e1=["matButton",""],t1=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],n1=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var lp=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),dp=(()=>{class t extends sp{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=r1(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,o=this._appearance?lp.get(this._appearance):null,i=lp.get(e);o&&n.remove(...o),n.add(...i),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=S({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[P],attrs:e1,ngContentSelectors:n1,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,o){n&1&&(ae(t1),Ve(0,"span",0),H(1),he(2,"span",1),H(3,1),re(),H(4,2),Ve(5,"span",2)(6,"span",3)),n&2&&me("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function r1(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var up=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=O({imports:[di,ot]})}return t})();var i1=["*"];var a1=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],s1=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],c1=new _("MAT_CARD_CONFIG"),pp=(()=>{class t{appearance;constructor(){let e=d(c1,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=S({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,o){n&2&&me("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:i1,decls:1,vars:0,template:function(n,o){n&1&&(ae(),H(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})(),hp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var mp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),fp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})(),gp=(()=>{class t{align="start";static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(n,o){n&2&&me("mat-mdc-card-actions-align-end",o.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),bp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=S({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:s1,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,o){n&1&&(ae(a1),H(0),he(1,"div",0),H(2,1),re(),H(3,2))},encapsulation:2,changeDetection:0})}return t})();var vp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=O({imports:[ot]})}return t})();var yp=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var d1=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],u1=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function p1(t,r){t&1&&(v(0,"span",3),H(1,1),y())}function h1(t,r){t&1&&(v(0,"span",6),H(1,2),y())}var m1=["*"];var f1=new _("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),_p=new _("MatChipAvatar"),Cp=new _("MatChipTrailingIcon"),wp=new _("MatChipEdit"),Dp=new _("MatChipRemove"),Ep=new _("MatChip"),xp=(()=>{class t{_elementRef=d(Z);_parentChip=d(Ep);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){d(Ot).load(Ar),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(n,o){n&2&&(te("disabled",o._getDisabledAttribute())("aria-disabled",o.disabled),me("mdc-evolution-chip__action--primary",o._isPrimary)("mdc-evolution-chip__action--secondary",!o._isPrimary)("mdc-evolution-chip__action--trailing",!o._isPrimary&&!o._isLeading))},inputs:{disabled:[2,"disabled","disabled",U],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:tt(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return t})(),g1=(()=>{class t extends xp{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275dir=x({type:t,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(n,o){n&1&&ne("click",function(a){return o._handleClick(a)})("keydown",function(a){return o._handleKeydown(a)}),n&2&&(te("tabindex",o._getTabindex()),me("mdc-evolution-chip__action--presentational",!1))},features:[P]})}return t})();var ns=(()=>{class t{_changeDetectorRef=d(Re);_elementRef=d(Z);_tagName=d(Vs);_ngZone=d(ce);_focusMonitor=d(Er);_globalRippleOptions=d(si,{optional:!0});_document=d(F);_onFocus=new J;_onBlur=new J;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=xn();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=d(kr).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new G;destroyed=new G;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=d(li);_injector=d(ve);constructor(){let e=d(Ot);e.load(Ar),e.load(Xu),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=mi(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(n=>{let o=n._elementRef.nativeElement;return o===e||o.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let n=e!==null;n!==this._hasFocusInternal&&(this._hasFocusInternal=n,n?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=S({type:t,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(n,o,i){if(n&1&&lt(i,_p,5)(i,wp,5)(i,Cp,5)(i,Dp,5)(i,_p,5)(i,Cp,5)(i,wp,5)(i,Dp,5),n&2){let a;q(a=K())&&(o.leadingIcon=a.first),q(a=K())&&(o.editIcon=a.first),q(a=K())&&(o.trailingIcon=a.first),q(a=K())&&(o.removeIcon=a.first),q(a=K())&&(o._allLeadingIcons=a),q(a=K())&&(o._allTrailingIcons=a),q(a=K())&&(o._allEditIcons=a),q(a=K())&&(o._allRemoveIcons=a)}},viewQuery:function(n,o){if(n&1&&Bs(g1,5),n&2){let i;q(i=K())&&(o.primaryAction=i.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(n,o){n&1&&ne("keydown",function(a){return o._handleKeydown(a)}),n&2&&(to("id",o.id),te("role",o.role)("aria-label",o.ariaLabel),L("mat-"+(o.color||"primary")),me("mdc-evolution-chip",!o._isBasicChip)("mdc-evolution-chip--disabled",o.disabled)("mdc-evolution-chip--with-trailing-action",o._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",o.leadingIcon)("mdc-evolution-chip--with-primary-icon",o.leadingIcon)("mdc-evolution-chip--with-avatar",o.leadingIcon)("mat-mdc-chip-with-avatar",o.leadingIcon)("mat-mdc-chip-highlighted",o.highlighted)("mat-mdc-chip-disabled",o.disabled)("mat-mdc-basic-chip",o._isBasicChip)("mat-mdc-standard-chip",!o._isBasicChip)("mat-mdc-chip-with-trailing-icon",o._hasTrailingIcon())("_mat-animation-noopable",o._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",U],highlighted:[2,"highlighted","highlighted",U],disableRipple:[2,"disableRipple","disableRipple",U],disabled:[2,"disabled","disabled",U]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[Y([{provide:Ep,useExisting:t}])],ngContentSelectors:u1,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(n,o){n&1&&(ae(d1),ie(0,"span",0),v(1,"span",1)(2,"span",2),He(3,p1,2,0,"span",3),v(4,"span",4),H(5),ie(6,"span",5),y()()(),He(7,h1,2,0,"span",6)),n&2&&(f(3),We(o.leadingIcon?3:-1),f(4),We(o._hasTrailingIcon()?7:-1))},dependencies:[xp],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var kp=(()=>{class t{_elementRef=d(Z);_changeDetectorRef=d(Re);_dir=d(ts,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new J;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Fn;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Kt(null),Ne(()=>mi(...this._chips.map(e))))}_originatesFromChip(e){let n=e.target;for(;n&&n!==this._elementRef.nativeElement;){if(n.classList.contains("mat-mdc-chip"))return!0;n=n.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Kt(this._chips)).subscribe(e=>{let n=[];e.forEach(o=>o._getActions().forEach(i=>n.push(i))),this._chipActions.reset(n),this._chipActions.notifyOnChanges()}),this._keyManager=new xr(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(ze(this._destroyed)).subscribe(({chip:e})=>{let n=e._getSourceAction(document.activeElement);n&&this._keyManager.updateActiveItem(n)}),this._dir?.change.pipe(ze(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Kt(null),ze(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(ze(this._destroyed)).subscribe(e=>{let o=this._chips.toArray().indexOf(e.chip),i=e.chip._hasFocus(),a=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),s=i||a;this._isValidIndex(o)&&s&&(this._lastDestroyedFocusedChipIndex=o)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),n=this._chips.toArray()[e];n.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():n.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=S({type:t,selectors:[["mat-chip-set"]],contentQueries:function(n,o,i){if(n&1&&lt(i,ns,5),n&2){let a;q(a=K())&&(o._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(n,o){n&1&&ne("keydown",function(a){return o._handleKeydown(a)}),n&2&&te("role",o.role)},inputs:{disabled:[2,"disabled","disabled",U],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:tt(e)]},ngContentSelectors:m1,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(n,o){n&1&&(ae(),he(0,"div",0),H(1),re())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var Ip=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=O({providers:[yp,{provide:f1,useValue:{separatorKeyCodes:[13]}}],imports:[di,ot]})}return t})();function v1(t,r){t&1&&Ve(0,"div",2)}var y1=new _("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Mp=(()=>{class t{_elementRef=d(Z);_ngZone=d(ce);_changeDetectorRef=d(Re);_renderer=d(ye);_cleanupTransitionEnd;constructor(){let e=Za(),n=d(y1,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Ap(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Ap(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new G;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=S({type:t,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(n,o){n&2&&(te("aria-valuenow",o._isIndeterminate()?null:o.value)("mode",o.mode),L("mat-"+o.color),me("_mat-animation-noopable",o._isNoopAnimation)("mdc-linear-progress--animation-ready",!o._isNoopAnimation)("mdc-linear-progress--indeterminate",o._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",tt],bufferValue:[2,"bufferValue","bufferValue",tt],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(n,o){n&1&&(he(0,"div",0),Ve(1,"div",1),He(2,v1,1,0,"div",2),re(),he(3,"div",3),Ve(4,"span",4),re(),he(5,"div",5),Ve(6,"span",4),re()),n&2&&(f(),Vn("flex-basis",o._getBufferBarFlexBasis()),f(),We(o.mode==="buffer"?2:-1),f(),Vn("transform",o._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function Ap(t,r=0,e=100){return Math.max(r,Math.min(e,t))}var Rp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=O({imports:[ot]})}return t})();var Tp=(()=>{class t extends ue{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Je=new _("PARENT_INSTANCE"),De=(()=>{class t{document=d(F);platformId=d(Le);el=d(Z);injector=d(ve);cd=d(Re);renderer=d(ye);config=d(Na);$parentInstance=d(Je,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=d(Tp);baseStyle=d(ue);scopedStyleEl;parent=this.$params.parent;cn=It;_themeScopedListener;themeChangeListenerMap=new Map;dt=be();unstyled=be();pt=be();ptOptions=be();$attrSelector=cr("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=V(void 0);directiveUnstyled=V(void 0);$unstyled=Se(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=Se(()=>rt(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>rt(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||rt(e,this.$params))}get $style(){return h(h({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){Ae(e=>{this.document&&!Mi(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),Ae(e=>{this.document&&!Mi(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...n){return To(e)?e(...n):Ra(...n)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,n="",o={}){return xa(e,n,o)}_hook(e,...n){if(!this.$hostName){let o=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),i=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);o?.(...n),i?.(...n)}}_load(){bn.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),bn.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);pn(e)&&this.baseStyle.load(e,h({name:"global"},this.$styleOptions))}_loadCoreStyles(){!bn.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),bn.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!X.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:i}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,h({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,h({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(o?.css,h({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(h({name:"global-style"},this.$styleOptions),i),X.setLoadedStyleName("common")}if(!X.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,h({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(h({name:`${this.$style?.name}-style`},this.$styleOptions),n),X.setLoadedStyleName(this.$style?.name)}if(!X.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,h({name:"layer-order",first:!0},this.$styleOptions)),X.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:n}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},o=this.$style?.load(n,h({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,n=()=>{}){this._offThemeChangeListener(e),bn.clearLoadedStyleNames();let o=n.bind(this);this.themeChangeListenerMap.set(e,o),Fe.on("theme:change",o)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(Fe.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},n="",o={},i=!0){let a=/./g.test(n)&&!!o[n.split(".")[0]],{mergeSections:s=!0,mergeProps:c=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},l=i?a?this._useGlobalPT(this._getPTClassValue,n,o):this._useDefaultPT(this._getPTClassValue,n,o):void 0,u=a?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,n,j(h({},o),{global:l||{}})),p=this._getPTDatasets(n);return s||!s&&u?c?this._mergeProps(c,l,u,p):h(h(h({},l),u),p):h(h({},u),p)}_getPTDatasets(e=""){let n="data-pc-",o=e==="root"&&pn(this.$pt()?.["data-pc-section"]);return e!=="transition"&&j(h({},e==="root"&&j(h({[`${n}name`]:At(o?this.$pt()?.["data-pc-section"]:this.$name)},o&&{[`${n}extend`]:At(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:At(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,n,o){let i=this._getOptionValue(e,n,o);return sr(i)||Ud(i)?{class:i}:i}_getPT(e,n="",o){let i=(a,s=!1)=>{let c=o?o(a):a,l=At(n),u=At(this.$hostName||this.$name);return(s?l!==u?c?.[l]:void 0:c?.[l])??c};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:i(e.originalValue),value:i(e.value)}:i(e,!0)}_usePT(e,n,o,i){let a=s=>n?.call(this,s,o,i);if(e?.hasOwnProperty("_usept")){let{mergeSections:s=!0,mergeProps:c=!1}=e._usept||this.config?.ptOptions()||{},l=a(e.originalValue),u=a(e.value);return l===void 0&&u===void 0?void 0:sr(u)?u:sr(l)?l:s||!s&&u?c?this._mergeProps(c,l,u):h(h({},l),u):u}return a(e)}_useGlobalPT(e,n,o){return this._usePT(this.$globalPT,e,n,o)}_useDefaultPT(e,n,o){return this._usePT(this.$defaultPT,e,n,o)}ptm(e="",n={}){return this._getPTValue(this.$pt(),e,h(h({},this.$params),n))}ptms(e,n={}){return e.reduce((o,i)=>(o=Ra(o,this.ptm(i,n))||{},o),{})}ptmo(e={},n="",o={}){return this._getPTValue(e,n,h({instance:this},o),!1)}cx(e,n={}){return this.$unstyled()?void 0:It(this._getOptionValue(this.$style.classes,e,h(h({},this.$params),n)))}sx(e="",n=!0,o={}){if(n){let i=this._getOptionValue(this.$style.inlineStyles,e,h(h({},this.$params),o)),a=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,h(h({},this.$params),o));return h(h({},a),i)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[Y([Tp,ue]),Be]})}return t})();var Fp=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let o=n.trim().split(" ");for(let i=0;i<o.length;i++)e.classList.add(o[i])}else{let o=n.split(" ");for(let i=0;i<o.length;i++)e.className+=" "+o[i]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(i=>this.removeClass(e,i)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,o=0;for(var i=0;i<n.length;i++){if(n[i]==e)return o;n[i].nodeType==1&&o++}return-1}static indexWithinGroup(e,n){let o=e.parentNode?e.parentNode.childNodes:[],i=0;for(var a=0;a<o.length;a++){if(o[a]==e)return i;o[a].attributes&&o[a].attributes[n]&&o[a].nodeType==1&&i++}return-1}static appendOverlay(e,n,o="self"){o!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,o="self",i=!0){e&&n&&(i&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),o==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,o=!0){let i=se=>{if(se)return getComputedStyle(se).getPropertyValue("position")==="relative"?se:i(se.parentElement)},a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=n.offsetHeight,c=n.getBoundingClientRect(),l=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),p=this.getViewport(),g=i(e)?.getBoundingClientRect()||{top:-1*l,left:-1*u},D,E,B="top";c.top+s+a.height>p.height?(D=c.top-g.top-a.height,B="bottom",c.top+D<0&&(D=-1*c.top)):(D=s+c.top-g.top,B="top");let ee=c.left+a.width-p.width,Q=c.left-g.left;if(a.width>p.width?E=(c.left-g.left)*-1:ee>0?E=Q-ee:E=c.left-g.left,e.style.top=D+"px",e.style.left=E+"px",e.style.transformOrigin=B,o){let se=zd(/-anchor-gutter$/)?.value;e.style.marginTop=B==="bottom"?`calc(${se??"2px"} * -1)`:se??""}}static absolutePosition(e,n,o=!0){let i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=i.height,s=i.width,c=n.offsetHeight,l=n.offsetWidth,u=n.getBoundingClientRect(),p=this.getWindowScrollTop(),m=this.getWindowScrollLeft(),g=this.getViewport(),D,E;u.top+c+a>g.height?(D=u.top+p-a,e.style.transformOrigin="bottom",D<0&&(D=p)):(D=c+u.top+p,e.style.transformOrigin="top"),u.left+s>g.width?E=Math.max(0,u.left+m+l-s):E=u.left+m,e.style.top=D+"px",e.style.left=E+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let o=this.getParents(e),i=/(auto|scroll)/,a=s=>{let c=window.getComputedStyle(s,null);return i.test(c.getPropertyValue("overflow"))||i.test(c.getPropertyValue("overflowX"))||i.test(c.getPropertyValue("overflowY"))};for(let s of o){let c=s.nodeType===1&&s.dataset.scrollselectors;if(c){let l=c.split(",");for(let u of l){let p=this.findSingle(s,u);p&&a(p)&&n.push(p)}}s.nodeType!==9&&a(s)&&n.push(s)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),i=o?parseFloat(o):0,a=getComputedStyle(e).getPropertyValue("paddingTop"),s=a?parseFloat(a):0,c=e.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(c.top+document.body.scrollTop)-i-s,p=e.scrollTop,m=e.clientHeight,g=this.getOuterHeight(n);u<0?e.scrollTop=p+u:u+g>m&&(e.scrollTop=p+u-m+g)}static fadeIn(e,n){e.style.opacity=0;let o=+new Date,i=0,a=function(){i=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,e.style.opacity=i,o=+new Date,+i<1&&(window.requestAnimationFrame?window.requestAnimationFrame(a):setTimeout(a,16))};a()}static fadeOut(e,n){var o=1,i=50,a=n,s=i/a;let c=setInterval(()=>{o=o-s,o<=0&&(o=0,clearInterval(c)),e.style.opacity=o},i)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var o=Element.prototype,i=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(a){return[].indexOf.call(document.querySelectorAll(a),this)!==-1};return i.call(e,n)}static getOuterWidth(e,n){let o=e.offsetWidth;if(n){let i=getComputedStyle(e);o+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return o}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(e,n){let o=e.offsetHeight;if(n){let i=getComputedStyle(e);o+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return o}static getHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let e=window,n=document,o=n.documentElement,i=n.getElementsByTagName("body")[0],a=e.innerWidth||o.clientWidth||i.clientWidth,s=e.innerHeight||o.clientHeight||i.clientHeight;return{width:a,height:s}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var o=e.indexOf("Trident/");if(o>0){var i=e.indexOf("rv:");return!0}var a=e.indexOf("Edge/");return a>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,o){e[n].apply(e,o)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let o=this.find(e,this.getFocusableSelectorString(n)),i=[];for(let a of o){let s=getComputedStyle(a);this.isVisible(a)&&s.display!="none"&&s.visibility!="hidden"&&i.push(a)}return i}static getFocusableElement(e,n=""){let o=this.findSingle(e,this.getFocusableSelectorString(n));if(o){let i=getComputedStyle(o);if(this.isVisible(o)&&i.display!="none"&&i.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,n=""){let o=this.getFocusableElements(e,n);return o.length>0?o[0]:null}static getLastFocusableElement(e,n){let o=this.getFocusableElements(e,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,n=!1){let o=t.getFocusableElements(e),i=0;if(o&&o.length>0){let a=o.indexOf(o[0].ownerDocument.activeElement);n?a==-1||a===0?i=o.length-1:i=a-1:a!=-1&&a!==o.length-1&&(i=a+1)}return o[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let a=(s=>!!(s&&s.constructor&&s.call&&s.apply))(e)?e():e;return a&&a.nodeType===9||this.isExist(a)?a:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let o=e.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...o){if(e){let i=document.createElement(e);return this.setAttributes(i,n),i.append(...o),i}}static setAttribute(e,n="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(n,o)}static setAttributes(e,n={}){if(this.isElement(e)){let o=(i,a)=>{let s=e?.$attrs?.[i]?[e?.$attrs?.[i]]:[];return[a].flat().reduce((c,l)=>{if(l!=null){let u=typeof l;if(u==="string"||u==="number")c.push(l);else if(u==="object"){let p=Array.isArray(l)?o(i,l):Object.entries(l).map(([m,g])=>i==="style"&&(g||g===0)?`${m.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${g}`:g?m:void 0);c=p.length?c.concat(p.filter(m=>!!m)):c}}return c},s)};Object.entries(n).forEach(([i,a])=>{if(a!=null){let s=i.match(/^on(.+)/);s?e.addEventListener(s[1].toLowerCase(),a):i==="pBind"?this.setAttributes(e,a):(a=i==="class"?[...new Set(o("class",a))].join(" ").trim():i==="style"?o("style",a).join(";").trim():a,(e.$attrs=e.$attrs||{})&&(e.$attrs[i]=a),e.setAttribute(i,a))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();var Op=(()=>{class t extends De{autofocus=!1;focused=!1;platformId=d(Le);document=d(F);host=d(Z);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Lt(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=Fp.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275dir=x({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[P]})}return t})();var oe=(()=>{class t{el;renderer;pBind=be(void 0);_attrs=V(void 0);attrs=Se(()=>this._attrs()||this.pBind());styles=Se(()=>this.attrs()?.style);classes=Se(()=>It(this.attrs()?.class));listeners=[];constructor(e,n){this.el=e,this.renderer=n,Ae(()=>{let s=this.attrs()||{},{style:o,class:i}=s,a=us(s,["style","class"]);for(let[c,l]of Object.entries(a))if(c.startsWith("on")&&typeof l=="function"){let u=c.slice(2).toLowerCase();if(!this.listeners.some(p=>p.eventName===u)){let p=this.renderer.listen(this.el.nativeElement,u,l);this.listeners.push({eventName:u,unlisten:p})}}else l==null?this.renderer.removeAttribute(this.el.nativeElement,c):(this.renderer.setAttribute(this.el.nativeElement,c,l.toString()),c in this.el.nativeElement&&(this.el.nativeElement[c]=l))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){Fo(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(n){return new(n||t)(R(Z),R(ye))};static \u0275dir=x({type:t,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,o){n&2&&(no(o.styles()),L(o.classes()))},inputs:{pBind:[1,"pBind"]}})}return t})(),kn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=O({})}return t})();var Np=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var C1=`
    ${Np}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,w1={root:({instance:t})=>{let r=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,n=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,o=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":pn(r)&&String(r).length===1,"p-badge-dot":Ea(r),"p-badge-sm":e==="small"||n==="small","p-badge-lg":e==="large"||n==="large","p-badge-xl":e==="xlarge"||n==="xlarge","p-badge-info":o==="info","p-badge-success":o==="success","p-badge-warn":o==="warn","p-badge-danger":o==="danger","p-badge-secondary":o==="secondary","p-badge-contrast":o==="contrast"}]}},Pp=(()=>{class t extends ue{name="badge";style=C1;classes=w1;static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Bp=new _("BADGE_INSTANCE");var rs=(()=>{class t extends De{componentName="Badge";$pcBadge=d(Bp,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(oe,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=be();badgeSize=be();size=be();severity=be();value=be();badgeDisabled=be(!1,{transform:U});_componentStyle=d(Pp);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275cmp=S({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,o){n&2&&(te("data-p",o.dataP),L(o.cn(o.cx("root"),o.styleClass())),Vn("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[Y([Pp,{provide:Bp,useExisting:t},{provide:Je,useExisting:t}]),et([oe]),P],decls:1,vars:1,template:function(n,o){n&1&&C(0),n&2&&fe(o.value())},dependencies:[Ee,we,kn],encapsulation:2,changeDetection:0})}return t})(),Lp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=O({imports:[rs,we,we]})}return t})();var S1=["*"],E1={root:"p-fluid"},Vp=(()=>{class t extends ue{name="fluid";classes=E1;static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Up=new _("FLUID_INSTANCE"),jp=(()=>{class t extends De{componentName="Fluid";$pcFluid=d(Up,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(oe,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=d(Vp);static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275cmp=S({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&L(o.cx("root"))},features:[Y([Vp,{provide:Up,useExisting:t},{provide:Je,useExisting:t}]),et([oe]),P],ngContentSelectors:S1,decls:1,vars:0,template:function(n,o){n&1&&(ae(),H(0))},dependencies:[Ee],encapsulation:2,changeDetection:0})}return t})();var x1=["*"],k1=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,$p=(()=>{class t extends ue{name="baseicon";css=k1;static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var zp=(()=>{class t extends De{spin=!1;_componentStyle=d($p);getClassNames(){return It("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275cmp=S({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&L(o.getClassNames())},inputs:{spin:[2,"spin","spin",U]},features:[Y([$p]),P],ngContentSelectors:x1,decls:1,vars:0,template:function(n,o){n&1&&(ae(),H(0))},encapsulation:2,changeDetection:0})}return t})();var I1=["data-p-icon","spinner"],Hp=(()=>{class t extends zp{pathId;onInit(){this.pathId="url(#"+cr()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275cmp=S({type:t,selectors:[["","data-p-icon","spinner"]],features:[P],attrs:I1,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(Rn(),he(0,"g"),Ve(1,"path",0),re(),he(2,"defs")(3,"clipPath",1),Ve(4,"rect",2),re()()),n&2&&(te("clip-path",o.pathId),f(3),to("id",o.pathId))},encapsulation:2})}return t})();var Wp=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var A1=`
    ${Wp}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,M1={root:"p-ink"},Gp=(()=>{class t extends ue{name="ripple";style=A1;classes=M1;static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var qp=(()=>{class t extends De{componentName="Ripple";zone=d(ce);_componentStyle=d(Gp);animationListener;mouseDownListener;timeout;constructor(){super(),Ae(()=>{Lt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&hn(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!Aa(n)&&!Ma(n)){let s=Math.max(Hd(this.el.nativeElement),qd(this.el.nativeElement));n.style.height=s+"px",n.style.width=s+"px"}let o=Gd(this.el.nativeElement),i=e.pageX-o.left+this.document.body.scrollTop-Ma(n)/2,a=e.pageY-o.top+this.document.body.scrollLeft-Aa(n)/2;this.renderer.setStyle(n,"top",a+"px"),this.renderer.setStyle(n,"left",i+"px"),!this.$unstyled()&&ka(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let s=this.getInk();s&&(!this.$unstyled()&&hn(s,"p-ink-active"),s.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&hn(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&hn(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Kd(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[Y([Gp]),P]})}return t})();var Kp=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var R1=["content"],T1=["loadingicon"],F1=["icon"],O1=["*"],Xp=(t,r)=>({class:t,pt:r});function N1(t,r){t&1&&Ct(0)}function P1(t,r){if(t&1&&ie(0,"span",7),t&2){let e=T(3);L(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),w("pBind",e.ptm("loadingIcon")),te("aria-hidden",!0)}}function B1(t,r){if(t&1&&(Rn(),ie(0,"svg",8)),t&2){let e=T(3);L(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),w("pBind",e.ptm("loadingIcon"))("spin",!0),te("aria-hidden",!0)}}function L1(t,r){if(t&1&&(st(0),le(1,P1,1,4,"span",3)(2,B1,1,5,"svg",6),ct()),t&2){let e=T(2);f(),w("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),f(),w("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function V1(t,r){}function U1(t,r){if(t&1&&le(0,V1,0,0,"ng-template",9),t&2){let e=T(2);w("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function j1(t,r){if(t&1&&(st(0),le(1,L1,3,2,"ng-container",2)(2,U1,1,1,null,5),ct()),t&2){let e=T();f(),w("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),f(),w("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Di(3,Xp,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function $1(t,r){if(t&1&&ie(0,"span",7),t&2){let e=T(2);L(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),w("pBind",e.ptm("icon")),te("data-p",e.dataIconP)}}function z1(t,r){}function H1(t,r){if(t&1&&le(0,z1,0,0,"ng-template",9),t&2){let e=T(2);w("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function W1(t,r){if(t&1&&(st(0),le(1,$1,1,4,"span",3)(2,H1,1,1,null,5),ct()),t&2){let e=T();f(),w("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),f(),w("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Di(3,Xp,e.cx("icon"),e.ptm("icon")))}}function G1(t,r){if(t&1&&(v(0,"span",7),C(1),y()),t&2){let e=T();L(e.cx("label")),w("pBind",e.ptm("label")),te("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),f(),fe(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function q1(t,r){if(t&1&&ie(0,"p-badge",10),t&2){let e=T();w("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var K1={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,r])=>!!r).reduce((r,[e])=>r+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Yp=(()=>{class t extends ue{name="button";style=Kp;classes=K1;static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Zp=new _("BUTTON_INSTANCE");var os=(()=>{class t extends De{componentName="Button";hostName="";$pcButton=d(Zp,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(oe,{self:!0});_componentStyle=d(Yp);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=be(void 0,{transform:U});onClick=new G;onFocus=new G;onBlur=new G;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=d(jp,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275cmp=S({type:t,selectors:[["p-button"]],contentQueries:function(n,o,i){if(n&1&&lt(i,R1,5)(i,T1,5)(i,F1,5)(i,mn,4),n&2){let a;q(a=K())&&(o.contentTemplate=a.first),q(a=K())&&(o.loadingIconTemplate=a.first),q(a=K())&&(o.iconTemplate=a.first),q(a=K())&&(o.templates=a)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",U],raised:[2,"raised","raised",U],rounded:[2,"rounded","rounded",U],text:[2,"text","text",U],plain:[2,"plain","plain",U],outlined:[2,"outlined","outlined",U],link:[2,"link","link",U],tabindex:[2,"tabindex","tabindex",tt],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",U],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",U],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[Y([Yp,{provide:Zp,useExisting:t},{provide:Je,useExisting:t}]),et([oe]),P],ngContentSelectors:O1,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,o){n&1&&(ae(),v(0,"button",0),ne("click",function(a){return o.onClick.emit(a)})("focus",function(a){return o.onFocus.emit(a)})("blur",function(a){return o.onBlur.emit(a)}),H(1),le(2,N1,1,0,"ng-container",1)(3,j1,3,6,"ng-container",2)(4,W1,3,6,"ng-container",2)(5,G1,2,6,"span",3)(6,q1,1,4,"p-badge",4),y()),n&2&&(L(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),w("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus))("pBind",o.ptm("root")),te("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex))("data-p",o.dataP)("data-p-disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("data-p-severity",o.severity||(o.buttonProps==null?null:o.buttonProps.severity)),f(2),w("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),f(),w("ngIf",o.loading||(o.buttonProps==null?null:o.buttonProps.loading)),f(),w("ngIf",!(o.loading||o.buttonProps!=null&&o.buttonProps.loading)),f(),w("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.label||(o.buttonProps==null?null:o.buttonProps.label))),f(),w("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.badge||(o.buttonProps==null?null:o.buttonProps.badge))))},dependencies:[Ee,Pt,Bt,ki,qp,Op,Hp,Lp,rs,we,oe],encapsulation:2,changeDetection:0})}return t})(),Qp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=O({imports:[Ee,os,we,we]})}return t})();var Jp=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var Z1=["header"],X1=["title"],Q1=["subtitle"],J1=["content"],eS=["footer"],tS=["*",[["p-header"]],[["p-footer"]]],nS=["*","p-header","p-footer"];function rS(t,r){t&1&&Ct(0)}function oS(t,r){if(t&1&&(v(0,"div",1),H(1,1),le(2,rS,1,0,"ng-container",2),y()),t&2){let e=T();L(e.cx("header")),w("pBind",e.ptm("header")),f(2),w("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function iS(t,r){if(t&1&&(st(0),C(1),ct()),t&2){let e=T(2);f(),fe(e.header)}}function aS(t,r){t&1&&Ct(0)}function sS(t,r){if(t&1&&(v(0,"div",1),le(1,iS,2,1,"ng-container",3)(2,aS,1,0,"ng-container",2),y()),t&2){let e=T();L(e.cx("title")),w("pBind",e.ptm("title")),f(),w("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),f(),w("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function cS(t,r){if(t&1&&(st(0),C(1),ct()),t&2){let e=T(2);f(),fe(e.subheader)}}function lS(t,r){t&1&&Ct(0)}function dS(t,r){if(t&1&&(v(0,"div",1),le(1,cS,2,1,"ng-container",3)(2,lS,1,0,"ng-container",2),y()),t&2){let e=T();L(e.cx("subtitle")),w("pBind",e.ptm("subtitle")),f(),w("ngIf",e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),f(),w("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function uS(t,r){t&1&&Ct(0)}function pS(t,r){t&1&&Ct(0)}function hS(t,r){if(t&1&&(v(0,"div",1),H(1,2),le(2,pS,1,0,"ng-container",2),y()),t&2){let e=T();L(e.cx("footer")),w("pBind",e.ptm("footer")),f(2),w("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var mS=`
    ${Jp}

    .p-card {
        display: block;
    }
`,fS={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},eh=(()=>{class t extends ue{name="card";style=mS;classes=fS;static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var th=new _("CARD_INSTANCE"),is=(()=>{class t extends De{componentName="Card";$pcCard=d(th,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(oe,{self:!0});_componentStyle=d(eh);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(e){Fo(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(n=>{this.el.nativeElement.style[n]=e[n]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=V(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275cmp=S({type:t,selectors:[["p-card"]],contentQueries:function(n,o,i){if(n&1&&lt(i,tu,5)(i,nu,5)(i,Z1,4)(i,X1,4)(i,Q1,4)(i,J1,4)(i,eS,4)(i,mn,4),n&2){let a;q(a=K())&&(o.headerFacet=a.first),q(a=K())&&(o.footerFacet=a.first),q(a=K())&&(o.headerTemplate=a.first),q(a=K())&&(o.titleTemplate=a.first),q(a=K())&&(o.subtitleTemplate=a.first),q(a=K())&&(o.contentTemplate=a.first),q(a=K())&&(o.footerTemplate=a.first),q(a=K())&&(o.templates=a)}},hostVars:4,hostBindings:function(n,o){n&2&&(no(o._style()),L(o.cn(o.cx("root"),o.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[Y([eh,{provide:th,useExisting:t},{provide:Je,useExisting:t}]),et([oe]),P],ngContentSelectors:nS,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(n,o){n&1&&(ae(tS),le(0,oS,3,4,"div",0),v(1,"div",1),le(2,sS,3,5,"div",0)(3,dS,3,5,"div",0),v(4,"div",1),H(5),le(6,uS,1,0,"ng-container",2),y(),le(7,hS,3,4,"div",0),y()),n&2&&(w("ngIf",o.headerFacet||o.headerTemplate||o._headerTemplate),f(),L(o.cx("body")),w("pBind",o.ptm("body")),f(),w("ngIf",o.header||o.titleTemplate||o._titleTemplate),f(),w("ngIf",o.subheader||o.subtitleTemplate||o._subtitleTemplate),f(),L(o.cx("content")),w("pBind",o.ptm("content")),f(2),w("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),f(),w("ngIf",o.footerFacet||o.footerTemplate||o._footerTemplate))},dependencies:[Ee,Pt,Bt,we,kn,oe],encapsulation:2,changeDetection:0})}return t})(),nh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=O({imports:[is,we,kn,we,kn]})}return t})();var rh=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var bS=["icon"],vS=["*"];function yS(t,r){if(t&1&&ie(0,"span",4),t&2){let e=T(2);L(e.cx("icon")),w("ngClass",e.icon)("pBind",e.ptm("icon"))}}function _S(t,r){if(t&1&&(st(0),le(1,yS,1,4,"span",3),ct()),t&2){let e=T();f(),w("ngIf",e.icon)}}function CS(t,r){}function wS(t,r){t&1&&le(0,CS,0,0,"ng-template")}function DS(t,r){if(t&1&&(v(0,"span",2),le(1,wS,1,0,null,5),y()),t&2){let e=T();L(e.cx("icon")),w("pBind",e.ptm("icon")),f(),w("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}var SS={root:({instance:t})=>["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}],icon:"p-tag-icon",label:"p-tag-label"},oh=(()=>{class t extends ue{name="tag";style=rh;classes=SS;static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var ih=new _("TAG_INSTANCE"),as=(()=>{class t extends De{componentName="Tag";$pcTag=d(ih,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(oe,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=d(oh);onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="icon"&&(this._iconTemplate=e.template)})}get dataP(){return this.cn({rounded:this.rounded,[this.severity]:this.severity})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(t)))(o||t)}})();static \u0275cmp=S({type:t,selectors:[["p-tag"]],contentQueries:function(n,o,i){if(n&1&&lt(i,bS,4)(i,mn,4),n&2){let a;q(a=K())&&(o.iconTemplate=a.first),q(a=K())&&(o.templates=a)}},hostVars:3,hostBindings:function(n,o){n&2&&(te("data-p",o.dataP),L(o.cn(o.cx("root"),o.styleClass)))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",U]},features:[Y([oh,{provide:ih,useExisting:t},{provide:Je,useExisting:t}]),et([oe]),P],ngContentSelectors:vS,decls:5,vars:6,consts:[[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"pBind"],[3,"class","ngClass","pBind",4,"ngIf"],[3,"ngClass","pBind"],[4,"ngTemplateOutlet"]],template:function(n,o){n&1&&(ae(),H(0),le(1,_S,2,1,"ng-container",0)(2,DS,2,4,"span",1),v(3,"span",2),C(4),y()),n&2&&(f(),w("ngIf",!o.iconTemplate&&!o._iconTemplate),f(),w("ngIf",o.iconTemplate||o._iconTemplate),f(),L(o.cx("label")),w("pBind",o.ptm("label")),f(),fe(o.value))},dependencies:[Ee,xi,Pt,Bt,we,oe],encapsulation:2,changeDetection:0})}return t})(),ah=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=N({type:t});static \u0275inj=O({imports:[as,we,we]})}return t})();var ui=class t{progressValue=65;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-ui-demo"]],decls:26,vars:1,consts:[[1,"ui-demo"],[1,"demo-grid"],["header","PrimeNG Components","subheader","Card, Button, Tag"],[1,"demo-content"],["value","PrimeNG","severity","success"],["label","Prime Button","icon","pi pi-check"],["aria-label","Material examples"],["mode","determinate",3,"value"],["matButton","filled"]],template:function(e,n){e&1&&(v(0,"section",0)(1,"h1"),C(2,"UI Libraries Demo"),y(),v(3,"div",1)(4,"p-card",2)(5,"div",3),ie(6,"p-tag",4),v(7,"p"),C(8,"This card uses three PrimeNG components."),y(),ie(9,"p-button",5),y()(),v(10,"mat-card")(11,"mat-card-header")(12,"mat-card-title"),C(13,"Angular Material Components"),y(),v(14,"mat-card-subtitle"),C(15,"Card, Chips, Progress Bar, Button"),y()(),v(16,"mat-card-content")(17,"mat-chip-set",6)(18,"mat-chip"),C(19,"Material"),y(),v(20,"mat-chip"),C(21,"Angular"),y()(),ie(22,"mat-progress-bar",7),y(),v(23,"mat-card-actions")(24,"button",8),C(25,"Material Button"),y()()()()()),e&2&&(f(22),w("value",n.progressValue))},dependencies:[Qp,os,nh,is,ah,as,up,dp,vp,pp,gp,mp,bp,fp,hp,Ip,ns,kp,Rp,Mp],styles:[".ui-demo[_ngcontent-%COMP%]{max-width:1100px;margin:40px auto;padding:24px;font-family:Arial,sans-serif}h1[_ngcontent-%COMP%]{margin:0 0 24px;color:#222}.demo-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}[_nghost-%COMP%]     .p-card, mat-card[_ngcontent-%COMP%]{background:#fff;color:#222}.demo-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:16px}mat-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;padding-top:16px}"]})};var pi=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-root"]],decls:3,vars:0,template:function(e,n){e&1&&ie(0,"app-student-list")(1,"app-product-list")(2,"app-ui-demo")},dependencies:[ti,Qo,ui],encapsulation:2})};Li(pi,vu).catch(t=>console.error(t));

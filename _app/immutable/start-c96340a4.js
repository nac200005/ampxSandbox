import{n as ye,s as et,S as rt,i as at,a as st,e as N,c as ot,b as z,g as Q,t as D,d as Z,f as V,h as B,j as it,o as $e,k as lt,l as ct,m as ft,p as ve,q as H,r as ut,u as dt,v as pt,w as J,x as F,y as se,z as K,A as G,B as Ke}from"./chunks/index-b3cd2fd6.js";const ht=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),mt=function(r,e){return new URL(r,e).href},Ge={},M=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(a=>{if(a=mt(a,o),a in Ge)return;Ge[a]=!0;const c=a.endsWith(".css"),n=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${n}`))return;const i=document.createElement("link");if(i.rel=c?"stylesheet":ht,c||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),c)return new Promise((f,p)=>{i.addEventListener("load",f),i.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())};function _t(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function gt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const wt=["href","pathname","search","searchParams","toString","toJSON"];function bt(r,e){const t=new URL(r);for(const o of wt){let a=t[o];Object.defineProperty(t,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(o,a,c)=>c(r,a),yt(t),t}function yt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ee=[];function Pe(r,e=ye){let t;const o=new Set;function a(i){if(et(r,i)&&(r=i,t)){const f=!ee.length;for(const p of o)p[1](),ee.push(p,r);if(f){for(let p=0;p<ee.length;p+=2)ee[p][0](ee[p+1]);ee.length=0}}}function c(i){a(i(r))}function n(i,f=ye){const p=[i,f];return o.add(p),o.size===1&&(t=e(a)||ye),i(r),()=>{o.delete(p),o.size===0&&(t(),t=null)}}return{set:a,update:c,subscribe:n}}let We="",tt="";function vt(r){We=r.base,tt=r.assets||We}function He(r){let e=r.baseURI;if(!e){const t=r.getElementsByTagName("base");e=t.length?t[0].href:r.URL}return e}function Re(){return{x:pageXOffset,y:pageYOffset}}function Me(r){let e,t=null,o=null,a=null;for(const n of r.composedPath())n instanceof Element&&(!e&&n.nodeName.toUpperCase()==="A"&&(e=n),t===null&&(t=ke(n,"data-sveltekit-noscroll")),o===null&&(o=ke(n,"data-sveltekit-prefetch")),a===null&&(a=ke(n,"data-sveltekit-reload")));const c=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI);return{a:e,url:c,options:{noscroll:t,prefetch:o,reload:a}}}function ke(r,e){const t=r.getAttribute(e);return t===null?t:t===""?!0:(t==="off",!1)}function Xe(r){const e=Pe(r);let t=!0;function o(){t=!0,e.update(n=>n)}function a(n){t=!1,e.set(n)}function c(n){let i;return e.subscribe(f=>{(i===void 0||t&&f!==i)&&n(i=f)})}return{notify:o,set:a,subscribe:c}}function kt(){const{set:r,subscribe:e}=Pe(!1);let t;async function o(){clearTimeout(t);const a=await fetch(`${tt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const{version:c}=await a.json(),n=c!=="1671024907320";return n&&(r(!0),clearTimeout(t)),n}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:e,check:o}}function Et(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=t.length;for(;o;)e=e*33^t[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const Ae=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;de.delete(o)}return Ae(r,e)};const de=new Map;function $t(r,e,t){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(a+=`[data-hash="${Et(t.body)}"]`);const c=document.querySelector(a);if(c!=null&&c.textContent){const{body:n,...i}=JSON.parse(c.textContent),f=c.getAttribute("data-ttl");return f&&de.set(e,{body:n,init:i,ttl:1e3*Number(f)}),Promise.resolve(new Response(n,i))}return Ae(r,t)}function Rt(r,e){const t=de.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);de.delete(r)}return Ae(r,e)}const St=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function Lt(r){const e=[],t=[];let o=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(Ot).map((c,n,i)=>{const f=decodeURIComponent(c),p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(p)return e.push(p[1]),t.push(p[2]),"(?:/(.*))?";const g=n===i.length-1;return f&&"/"+f.split(/\[(.+?)\]/).map((L,j)=>{if(j%2){const v=St.exec(L);if(!v)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,C,W,q]=v;return e.push(W),t.push(q),C?"(.*?)":"([^/]+?)"}return g&&L.includes(".")&&(o=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function Ot(r){return!/^\([^)]+\)$/.test(r)}function Pt(r,e,t,o){const a={};for(let c=0;c<e.length;c+=1){const n=e[c],i=t[c],f=r[c+1]||"";if(i){const p=o[i];if(!p)throw new Error(`Missing "${i}" param matcher`);if(!p(f))return}a[n]=f}return a}function At(r,e,t,o){const a=new Set(e);return Object.entries(t).map(([i,[f,p,g]])=>{const{pattern:L,names:j,types:v}=Lt(i),C={id:i,exec:W=>{const q=L.exec(W);if(q)return Pt(q,j,v,o)},errors:[1,...g||[]].map(W=>r[W]),layouts:[0,...p||[]].map(n),leaf:c(f)};return C.errors.length=C.layouts.length=Math.max(C.errors.length,C.layouts.length),C});function c(i){const f=i<0;return f&&(i=~i),[f,r[i]]}function n(i){return i===void 0?i:[a.has(i),r[i]]}}function It(r){let e,t,o;var a=r[0][0];function c(n){return{props:{data:n[2],form:n[1]}}}return a&&(e=J(a,c(r))),{c(){e&&F(e.$$.fragment),t=N()},l(n){e&&se(e.$$.fragment,n),t=N()},m(n,i){e&&K(e,n,i),z(n,t,i),o=!0},p(n,i){const f={};if(i&4&&(f.data=n[2]),i&2&&(f.form=n[1]),a!==(a=n[0][0])){if(e){Q();const p=e;D(p.$$.fragment,1,0,()=>{G(p,1)}),Z()}a?(e=J(a,c(n)),F(e.$$.fragment),V(e.$$.fragment,1),K(e,t.parentNode,t)):e=null}else a&&e.$set(f)},i(n){o||(e&&V(e.$$.fragment,n),o=!0)},o(n){e&&D(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&G(e,n)}}}function Ut(r){let e,t,o;var a=r[0][0];function c(n){return{props:{data:n[2],$$slots:{default:[Dt]},$$scope:{ctx:n}}}}return a&&(e=J(a,c(r))),{c(){e&&F(e.$$.fragment),t=N()},l(n){e&&se(e.$$.fragment,n),t=N()},m(n,i){e&&K(e,n,i),z(n,t,i),o=!0},p(n,i){const f={};if(i&4&&(f.data=n[2]),i&1051&&(f.$$scope={dirty:i,ctx:n}),a!==(a=n[0][0])){if(e){Q();const p=e;D(p.$$.fragment,1,0,()=>{G(p,1)}),Z()}a?(e=J(a,c(n)),F(e.$$.fragment),V(e.$$.fragment,1),K(e,t.parentNode,t)):e=null}else a&&e.$set(f)},i(n){o||(e&&V(e.$$.fragment,n),o=!0)},o(n){e&&D(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&G(e,n)}}}function Tt(r){let e,t,o;var a=r[0][1];function c(n){return{props:{data:n[3],form:n[1]}}}return a&&(e=J(a,c(r))),{c(){e&&F(e.$$.fragment),t=N()},l(n){e&&se(e.$$.fragment,n),t=N()},m(n,i){e&&K(e,n,i),z(n,t,i),o=!0},p(n,i){const f={};if(i&8&&(f.data=n[3]),i&2&&(f.form=n[1]),a!==(a=n[0][1])){if(e){Q();const p=e;D(p.$$.fragment,1,0,()=>{G(p,1)}),Z()}a?(e=J(a,c(n)),F(e.$$.fragment),V(e.$$.fragment,1),K(e,t.parentNode,t)):e=null}else a&&e.$set(f)},i(n){o||(e&&V(e.$$.fragment,n),o=!0)},o(n){e&&D(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&G(e,n)}}}function jt(r){let e,t,o;var a=r[0][1];function c(n){return{props:{data:n[3],$$slots:{default:[Nt]},$$scope:{ctx:n}}}}return a&&(e=J(a,c(r))),{c(){e&&F(e.$$.fragment),t=N()},l(n){e&&se(e.$$.fragment,n),t=N()},m(n,i){e&&K(e,n,i),z(n,t,i),o=!0},p(n,i){const f={};if(i&8&&(f.data=n[3]),i&1043&&(f.$$scope={dirty:i,ctx:n}),a!==(a=n[0][1])){if(e){Q();const p=e;D(p.$$.fragment,1,0,()=>{G(p,1)}),Z()}a?(e=J(a,c(n)),F(e.$$.fragment),V(e.$$.fragment,1),K(e,t.parentNode,t)):e=null}else a&&e.$set(f)},i(n){o||(e&&V(e.$$.fragment,n),o=!0)},o(n){e&&D(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&G(e,n)}}}function Nt(r){let e,t,o;var a=r[0][2];function c(n){return{props:{data:n[4],form:n[1]}}}return a&&(e=J(a,c(r))),{c(){e&&F(e.$$.fragment),t=N()},l(n){e&&se(e.$$.fragment,n),t=N()},m(n,i){e&&K(e,n,i),z(n,t,i),o=!0},p(n,i){const f={};if(i&16&&(f.data=n[4]),i&2&&(f.form=n[1]),a!==(a=n[0][2])){if(e){Q();const p=e;D(p.$$.fragment,1,0,()=>{G(p,1)}),Z()}a?(e=J(a,c(n)),F(e.$$.fragment),V(e.$$.fragment,1),K(e,t.parentNode,t)):e=null}else a&&e.$set(f)},i(n){o||(e&&V(e.$$.fragment,n),o=!0)},o(n){e&&D(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&G(e,n)}}}function Dt(r){let e,t,o,a;const c=[jt,Tt],n=[];function i(f,p){return f[0][2]?0:1}return e=i(r),t=n[e]=c[e](r),{c(){t.c(),o=N()},l(f){t.l(f),o=N()},m(f,p){n[e].m(f,p),z(f,o,p),a=!0},p(f,p){let g=e;e=i(f),e===g?n[e].p(f,p):(Q(),D(n[g],1,1,()=>{n[g]=null}),Z(),t=n[e],t?t.p(f,p):(t=n[e]=c[e](f),t.c()),V(t,1),t.m(o.parentNode,o))},i(f){a||(V(t),a=!0)},o(f){D(t),a=!1},d(f){n[e].d(f),f&&B(o)}}}function Ye(r){let e,t=r[6]&&Qe(r);return{c(){e=lt("div"),t&&t.c(),this.h()},l(o){e=ct(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=ft(e);t&&t.l(a),a.forEach(B),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px")},m(o,a){z(o,e,a),t&&t.m(e,null)},p(o,a){o[6]?t?t.p(o,a):(t=Qe(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&B(e),t&&t.d()}}}function Qe(r){let e;return{c(){e=ut(r[7])},l(t){e=dt(t,r[7])},m(t,o){z(t,e,o)},p(t,o){o&128&&pt(e,t[7])},d(t){t&&B(e)}}}function Vt(r){let e,t,o,a,c;const n=[Ut,It],i=[];function f(g,L){return g[0][1]?0:1}e=f(r),t=i[e]=n[e](r);let p=r[5]&&Ye(r);return{c(){t.c(),o=st(),p&&p.c(),a=N()},l(g){t.l(g),o=ot(g),p&&p.l(g),a=N()},m(g,L){i[e].m(g,L),z(g,o,L),p&&p.m(g,L),z(g,a,L),c=!0},p(g,[L]){let j=e;e=f(g),e===j?i[e].p(g,L):(Q(),D(i[j],1,1,()=>{i[j]=null}),Z(),t=i[e],t?t.p(g,L):(t=i[e]=n[e](g),t.c()),V(t,1),t.m(o.parentNode,o)),g[5]?p?p.p(g,L):(p=Ye(g),p.c(),p.m(a.parentNode,a)):p&&(p.d(1),p=null)},i(g){c||(V(t),c=!0)},o(g){D(t),c=!1},d(g){i[e].d(g),g&&B(o),p&&p.d(g),g&&B(a)}}}function qt(r,e,t){let{stores:o}=e,{page:a}=e,{components:c}=e,{form:n}=e,{data_0:i=null}=e,{data_1:f=null}=e,{data_2:p=null}=e;it(o.page.notify);let g=!1,L=!1,j=null;return $e(()=>{const v=o.page.subscribe(()=>{g&&(t(6,L=!0),t(7,j=document.title||"untitled page"))});return t(5,g=!0),v}),r.$$set=v=>{"stores"in v&&t(8,o=v.stores),"page"in v&&t(9,a=v.page),"components"in v&&t(0,c=v.components),"form"in v&&t(1,n=v.form),"data_0"in v&&t(2,i=v.data_0),"data_1"in v&&t(3,f=v.data_1),"data_2"in v&&t(4,p=v.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(a)},[c,n,i,f,p,g,L,j,o,a]}class Ct extends rt{constructor(e){super(),at(this,e,qt,Vt,et,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Bt={},pe=[()=>M(()=>import("./chunks/0-89406e42.js"),["chunks/0-89406e42.js","components/pages/_layout.svelte-dcc21aab.js","assets/app-c496eac0.css","chunks/index-b3cd2fd6.js"],import.meta.url),()=>M(()=>import("./chunks/1-0f585267.js"),["chunks/1-0f585267.js","components/pages/_error.svelte-62eeabb5.js","chunks/index-b3cd2fd6.js"],import.meta.url),()=>M(()=>import("./chunks/2-a0f22296.js"),["chunks/2-a0f22296.js","components/pages/search/_layout.svelte-3ca98311.js","assets/app-c496eac0.css","chunks/index-b3cd2fd6.js"],import.meta.url),()=>M(()=>import("./chunks/3-f2bde62f.js"),["chunks/3-f2bde62f.js","chunks/_page-8d45a3db.js","components/pages/_page.svelte-d2efa424.js","chunks/index-b3cd2fd6.js","chunks/index-1c030dae.js"],import.meta.url),()=>M(()=>import("./chunks/4-2779e86a.js"),["chunks/4-2779e86a.js","chunks/_page-87ed1544.js","components/pages/apc/_page.svelte-88c30972.js","chunks/index-b3cd2fd6.js"],import.meta.url),()=>M(()=>import("./chunks/5-e79228f8.js"),["chunks/5-e79228f8.js","chunks/_page-dd1b794c.js","components/pages/latex/_page.svelte-7e91274d.js","chunks/index-b3cd2fd6.js"],import.meta.url),()=>M(()=>import("./chunks/6-e3d3f3bc.js"),["chunks/6-e3d3f3bc.js","chunks/_page-5d7c88a5.js","components/pages/search/_page.svelte-2ac9fe7f.js","chunks/index-b3cd2fd6.js","chunks/index-1c030dae.js"],import.meta.url),()=>M(()=>import("./chunks/7-8e8e3d77.js"),["chunks/7-8e8e3d77.js","chunks/_page-74fbb0be.js","components/pages/stem/_page.svelte-42c0d3b0.js","chunks/index-b3cd2fd6.js"],import.meta.url)],zt=[],Jt={"":[3],apc:[4],latex:[5],search:[6,[2]],stem:[7]},Ft={handleError:({error:r})=>{console.error(r)}};class Se{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ze{constructor(e,t){this.status=e,this.location=t}}function Kt(r){r.client}const Y={url:Xe({}),page:Xe({}),navigating:Pe(null),updated:kt()},Gt="/__data.js";async function Wt(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,a])=>[o,await a])));return r}const nt="sveltekit:scroll",X="sveltekit:index",ce=At(pe,zt,Jt,Bt),Le=pe[0],Oe=pe[1];Le();Oe();let ae={};try{ae=JSON.parse(sessionStorage[nt])}catch{}function Ee(r){ae[r]=Re()}function Ht({target:r,base:e,trailing_slash:t}){var ze;const o=[];let a=null;const c={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},i=!1,f=!1,p=!0,g=!1,L=!1,j,v=(ze=history.state)==null?void 0:ze[X];v||(v=Date.now(),history.replaceState({...history.state,[X]:v},"",location.href));const C=ae[v];C&&(history.scrollRestoration="manual",scrollTo(C.x,C.y));let W=!1,q,Ie,oe;async function Ue(){oe=oe||Promise.resolve(),await oe,oe=null;const s=new URL(location.href),d=ge(s,!0);a=null,await je(d,s,[])}async function he(s,{noscroll:d=!1,replaceState:h=!1,keepfocus:l=!1,state:u={}},m,_){return typeof s=="string"&&(s=new URL(s,He(document))),we({url:s,scroll:d?Re():null,keepfocus:l,redirect_chain:m,details:{state:u,replaceState:h},nav_token:_,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Te(s){const d=ge(s,!1);if(!d)throw new Error("Attempted to prefetch a URL that does not belong to this app");return a={id:d.id,promise:Ve(d)},a.promise}async function je(s,d,h,l,u={},m){var E,k;Ie=u;let _=s&&await Ve(s);if(_||(_=await Be(d,null,re(new Error(`Not found: ${d.pathname}`),{url:d,params:{},routeId:null}),404)),d=(s==null?void 0:s.url)||d,Ie!==u)return!1;if(_.type==="redirect")if(h.length>10||h.includes(d.pathname))_=await ie({status:500,error:re(new Error("Redirect loop"),{url:d,params:{},routeId:null}),url:d,routeId:null});else return he(new URL(_.location,d).href,{},[...h,d.pathname],u),!1;else((k=(E=_.props)==null?void 0:E.page)==null?void 0:k.status)>=400&&await Y.updated.check()&&await le(d);if(o.length=0,L=!1,g=!0,l&&l.details){const{details:b}=l,y=b.replaceState?0:1;b.state[X]=v+=y,history[b.replaceState?"replaceState":"pushState"](b.state,"",d)}if(a=null,f){n=_.state,_.props.page&&(_.props.page.url=d);const b=ue();j.$set(_.props),b()}else Ne(_);if(l){const{scroll:b,keepfocus:y}=l;if(!y){const R=document.body,O=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var P;(P=getSelection())==null||P.removeAllRanges()}),O!==null?R.setAttribute("tabindex",O):R.removeAttribute("tabindex")}if(await Ke(),p){const R=d.hash&&document.getElementById(d.hash.slice(1));b?scrollTo(b.x,b.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Ke();p=!0,_.props.page&&(q=_.props.page),m&&m(),g=!1}function Ne(s){var u,m;n=s.state;const d=document.querySelector("style[data-sveltekit]");d&&d.remove(),q=s.props.page;const h=ue();j=new Ct({target:r,props:{...s.props,stores:Y},hydrate:!0}),h();const l={from:null,to:fe("to",{params:n.params,routeId:(m=(u=n.route)==null?void 0:u.id)!=null?m:null,url:new URL(location.href)}),type:"load"};c.after_navigate.forEach(_=>_(l)),f=!0}async function te({url:s,params:d,branch:h,status:l,error:u,route:m,form:_}){var O;const E=h.filter(Boolean),k={type:"loaded",state:{url:s,params:d,branch:h,error:u,route:m},props:{components:E.map(P=>P.node.component)}};_!==void 0&&(k.props.form=_);let b={},y=!q;for(let P=0;P<E.length;P+=1){const U=E[P];b={...b,...U.data},(y||!n.branch.some(T=>T===U))&&(k.props[`data_${P}`]=b,y=y||Object.keys((O=U.data)!=null?O:{}).length>0)}if(y||(y=Object.keys(q.data).length!==Object.keys(b).length),!n.url||s.href!==n.url.href||n.error!==u||_!==void 0||y){k.props.page={error:u,params:d,routeId:m&&m.id,status:l,url:s,form:_,data:y?b:q.data};const P=(U,T)=>{Object.defineProperty(k.props.page,U,{get:()=>{throw new Error(`$page.${U} has been replaced by $page.url.${T}`)}})};P("origin","origin"),P("path","pathname"),P("query","searchParams")}return k}async function me({loader:s,parent:d,url:h,params:l,routeId:u,server_data_node:m}){var b,y,R,O,P;let _=null;const E={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await s();if((b=k.shared)!=null&&b.load){let U=function(...S){for(const w of S){const{href:$}=new URL(w,h);E.dependencies.add($)}};const T={routeId:u,params:new Proxy(l,{get:(S,w)=>(E.params.add(w),S[w])}),data:(y=m==null?void 0:m.data)!=null?y:null,url:bt(h,()=>{E.url=!0}),async fetch(S,w){let $;S instanceof Request?($=S.url,w={body:S.method==="GET"||S.method==="HEAD"?void 0:await S.blob(),cache:S.cache,credentials:S.credentials,headers:S.headers,integrity:S.integrity,keepalive:S.keepalive,method:S.method,mode:S.mode,redirect:S.redirect,referrer:S.referrer,referrerPolicy:S.referrerPolicy,signal:S.signal,...w}):$=S;const I=new URL($,h).href;return U(I),f?Rt(I,w):$t($,I,w)},setHeaders:()=>{},depends:U,parent(){return E.parent=!0,d()}};Object.defineProperties(T,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=(R=await k.shared.load.call(null,T))!=null?R:null,_=_?await Wt(_):null}return{node:k,loader:s,server:m,shared:(O=k.shared)!=null&&O.load?{type:"data",data:_,uses:E}:null,data:(P=_!=null?_:m==null?void 0:m.data)!=null?P:null}}function De(s,d,h,l){if(L)return!0;if(!h)return!1;if(h.parent&&d||h.url&&s)return!0;for(const u of h.params)if(l[u]!==n.params[u])return!0;for(const u of h.dependencies)if(o.some(m=>m(new URL(u))))return!0;return!1}function _e(s,d){var h,l;return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set((h=s.uses.dependencies)!=null?h:[]),params:new Set((l=s.uses.params)!=null?l:[]),parent:!!s.uses.parent,url:!!s.uses.url}}:(s==null?void 0:s.type)==="skip"&&d!=null?d:null}async function Ve({id:s,invalidating:d,url:h,params:l,route:u}){var S;if((a==null?void 0:a.id)===s)return a.promise;const{errors:m,layouts:_,leaf:E}=u,k=[..._,E];m.forEach(w=>w==null?void 0:w().catch(()=>{})),k.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let b=null;const y=n.url?s!==n.url.pathname+n.url.search:!1,R=k.reduce((w,$,I)=>{var ne;const A=n.branch[I],x=!!($!=null&&$[0])&&((A==null?void 0:A.loader)!==$[1]||De(y,w.some(Boolean),(ne=A.server)==null?void 0:ne.uses,l));return w.push(x),w},[]);if(R.some(Boolean)){try{b=await xe(h,R)}catch(w){return ie({status:500,error:re(w,{url:h,params:l,routeId:u.id}),url:h,routeId:u.id})}if(b.type==="redirect")return b}const O=b==null?void 0:b.nodes;let P=!1;const U=k.map(async(w,$)=>{var ne;if(!w)return;const I=n.branch[$],A=O==null?void 0:O[$];if((!A||A.type==="skip")&&w[1]===(I==null?void 0:I.loader)&&!De(y,P,(ne=I.shared)==null?void 0:ne.uses,l))return I;if(P=!0,(A==null?void 0:A.type)==="error")throw A;return me({loader:w[1],url:h,params:l,routeId:u.id,parent:async()=>{var Fe;const Je={};for(let be=0;be<$;be+=1)Object.assign(Je,(Fe=await U[be])==null?void 0:Fe.data);return Je},server_data_node:_e(A===void 0&&w[0]?{type:"skip"}:A!=null?A:null,I==null?void 0:I.server)})});for(const w of U)w.catch(()=>{});const T=[];for(let w=0;w<k.length;w+=1)if(k[w])try{T.push(await U[w])}catch($){if($ instanceof Ze)return{type:"redirect",location:$.location};let I=500,A;O!=null&&O.includes($)?(I=(S=$.status)!=null?S:I,A=$.error):$ instanceof Se?(I=$.status,A=$.body):A=re($,{params:l,url:h,routeId:u.id});const x=await qe(w,T,m);return x?await te({url:h,params:l,branch:T.slice(0,x.idx).concat(x.node),status:I,error:A,route:u}):await Be(h,u.id,A,I)}else T.push(void 0);return await te({url:h,params:l,branch:T,status:200,error:null,route:u,form:d?void 0:null})}async function qe(s,d,h){for(;s--;)if(h[s]){let l=s;for(;!d[l];)l-=1;try{return{idx:l+1,node:{node:await h[s](),loader:h[s],data:{},server:null,shared:null}}}catch{continue}}}async function ie({status:s,error:d,url:h,routeId:l}){var b;const u={},m=await Le();let _=null;if(m.server)try{const y=await xe(h,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;_=(b=y.nodes[0])!=null?b:null}catch{(h.origin!==location.origin||h.pathname!==location.pathname||i)&&await le(h)}const E=await me({loader:Le,url:h,params:u,routeId:l,parent:()=>Promise.resolve({}),server_data_node:_e(_)}),k={node:await Oe(),loader:Oe,shared:null,server:null,data:null};return await te({url:h,params:u,branch:[E,k],status:s,error:d,route:null})}function ge(s,d){if(Ce(s))return;const h=decodeURI(s.pathname.slice(e.length)||"/");for(const l of ce){const u=l.exec(h);if(u){const m=new URL(s.origin+_t(s.pathname,t)+s.search+s.hash);return{id:m.pathname+m.search,invalidating:d,route:l,params:gt(u),url:m}}}}function Ce(s){return s.origin!==location.origin||!s.pathname.startsWith(e)}async function we({url:s,scroll:d,keepfocus:h,redirect_chain:l,details:u,type:m,delta:_,nav_token:E,accepted:k,blocked:b}){var U,T,S,w;let y=!1;const R=ge(s,!1),O={from:fe("from",{params:n.params,routeId:(T=(U=n.route)==null?void 0:U.id)!=null?T:null,url:n.url}),to:fe("to",{params:(S=R==null?void 0:R.params)!=null?S:null,routeId:(w=R==null?void 0:R.route.id)!=null?w:null,url:s}),type:m};_!==void 0&&(O.delta=_);const P={...O,cancel:()=>{y=!0}};if(c.before_navigate.forEach($=>$(P)),y){b();return}Ee(v),k(),f&&Y.navigating.set(O),await je(R,s,l,{scroll:d,keepfocus:h,details:u},E,()=>{c.after_navigate.forEach($=>$(O)),Y.navigating.set(null)})}async function Be(s,d,h,l){return s.origin===location.origin&&s.pathname===location.pathname&&!i?await ie({status:l,error:h,url:s,routeId:d}):await le(s)}function le(s){return location.href=s.href,new Promise(()=>{})}return{after_navigate:s=>{$e(()=>(c.after_navigate.push(s),()=>{const d=c.after_navigate.indexOf(s);c.after_navigate.splice(d,1)}))},before_navigate:s=>{$e(()=>(c.before_navigate.push(s),()=>{const d=c.before_navigate.indexOf(s);c.before_navigate.splice(d,1)}))},disable_scroll_handling:()=>{(g||!f)&&(p=!1)},goto:(s,d={})=>he(s,d,[]),invalidate:s=>{if(s===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof s=="function")o.push(s);else{const{href:d}=new URL(s,location.href);o.push(h=>h.href===d)}return Ue()},invalidateAll:()=>(L=!0,Ue()),prefetch:async s=>{const d=new URL(s,He(document));await Te(d)},prefetch_routes:async s=>{const h=(s?ce.filter(l=>s.some(u=>l.exec(u))):ce).map(l=>Promise.all([...l.layouts,l.leaf].map(u=>u==null?void 0:u[1]())));await Promise.all(h)},apply_action:async s=>{if(s.type==="error"){const d=new URL(location.href),{branch:h,route:l}=n;if(!l)return;const u=await qe(n.branch.length,h,l.errors);if(u){const m=await te({url:d,params:n.params,branch:h.slice(0,u.idx).concat(u.node),status:500,error:s.error,route:l});n=m.state;const _=ue();j.$set(m.props),_()}}else if(s.type==="redirect")he(s.location,{},[]);else{const d={form:s.data,page:{...q,form:s.data,status:s.status}},h=ue();j.$set(d),h()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",l=>{var _,E;let u=!1;const m={from:fe("from",{params:n.params,routeId:(E=(_=n.route)==null?void 0:_.id)!=null?E:null,url:n.url}),to:null,type:"unload",cancel:()=>u=!0};c.before_navigate.forEach(k=>k(m)),u?(l.preventDefault(),l.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ee(v);try{sessionStorage[nt]=JSON.stringify(ae)}catch{}}});const s=l=>{const{url:u,options:m}=Me(l);if(u&&m.prefetch){if(Ce(u))return;Te(u)}};let d;const h=l=>{clearTimeout(d),d=setTimeout(()=>{var u;(u=l.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",s),addEventListener("mousemove",h),addEventListener("sveltekit:trigger_prefetch",s),addEventListener("click",l=>{if(l.button||l.which!==1||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.defaultPrevented)return;const{a:u,url:m,options:_}=Me(l);if(!u||!m)return;const E=u instanceof SVGAElement;if(!E&&!(m.protocol==="https:"||m.protocol==="http:"))return;const k=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||k.includes("external")||_.reload||(E?u.target.baseVal:u.target))return;const[b,y]=m.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){W=!0,Ee(v),n.url=m,Y.page.set({...q,url:m}),Y.page.notify();return}we({url:m,scroll:_.noscroll?Re():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>l.preventDefault(),blocked:()=>l.preventDefault(),type:"link"})}),addEventListener("popstate",l=>{if(l.state){if(l.state[X]===v)return;const u=l.state[X]-v;we({url:new URL(location.href),scroll:ae[l.state[X]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{v=l.state[X]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}}),addEventListener("hashchange",()=>{W&&(W=!1,history.replaceState({...history.state,[X]:++v},"",location.href))});for(const l of document.querySelectorAll("link"))l.rel==="icon"&&(l.href=l.href);addEventListener("pageshow",l=>{l.persisted&&Y.navigating.set(null)})},_hydrate:async({status:s,error:d,node_ids:h,params:l,routeId:u,data:m,form:_})=>{var b;i=!0;const E=new URL(location.href);let k;try{const y=h.map(async(R,O)=>{const P=m[O];return me({loader:pe[R],url:E,params:l,routeId:u,parent:async()=>{const U={};for(let T=0;T<O;T+=1)Object.assign(U,(await y[T]).data);return U},server_data_node:_e(P)})});k=await te({url:E,params:l,branch:await Promise.all(y),status:s,error:d,form:_,route:(b=ce.find(R=>R.id===u))!=null?b:null})}catch(y){if(y instanceof Ze){await le(new URL(y.location,location.href));return}k=await ie({status:y instanceof Se?y.status:500,error:re(y,{url:E,params:l,routeId:u}),url:E,routeId:u})}Ne(k)}}}let Mt=1;async function xe(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+Gt,t.searchParams.set("__invalid",e.map(a=>a?"y":"n").join("")),t.searchParams.set("__id",String(Mt++)),await M(()=>import(t.href),[],import.meta.url);const o=window.__sveltekit_data;return delete window.__sveltekit_data,o}function re(r,e){var t;return r instanceof Se?r.body:(t=Ft.handleError({error:r,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Xt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function fe(r,e){for(const t of Xt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return e}function ue(){return()=>{}}async function Qt({env:r,hydrate:e,paths:t,target:o,trailing_slash:a}){vt(t);const c=Ht({target:o,base:t.base,trailing_slash:a});Kt({client:c}),e?await c._hydrate(e):c.goto(location.href,{replaceState:!0}),c._start_router()}export{Qt as start};

import{S as Q,i as Z,s as $,k as w,r as I,a as F,l as x,m as E,u as V,h as f,c as M,q as D,p as k,b as H,G as h,K as ee,f as U,H as Y,n as z,L as W,o as te,v as q,I as B,N as ae}from"../../../chunks/index-b3cd2fd6.js";import{S as le,f as J}from"../../../chunks/index-f8c4813c.js";function N(c,l,t){const r=c.slice();return r[5]=l[t],r[7]=t,r}function O(c,l,t){const r=c.slice();return r[8]=l[t],r}function P(c){let l,t,r=c[8]+"",o,b;return{c(){l=w("div"),t=w("h2"),o=I(r),b=F(),this.h()},l(_){l=x(_,"DIV",{class:!0});var u=E(l);t=x(u,"H2",{class:!0});var v=E(t);o=V(v,r),v.forEach(f),b=M(u),u.forEach(f),this.h()},h(){k(t,"class","text-[0.60rem] text-gray-50 tracking-widest mx-4 uppercase"),k(l,"class","")},m(_,u){H(_,l,u),h(l,t),h(t,o),h(l,b)},p(_,u){u&2&&r!==(r=_[8]+"")&&q(o,r)},d(_){_&&f(l)}}}function X(c){let l,t,r,o,b,_,u=c[5].name+"",v,L,g,d=c[5].description+"",y,p,S,C,A,i,a=c[5].topics,s=[];for(let e=0;e<a.length;e+=1)s[e]=P(O(c,a,e));return{c(){l=w("div"),t=w("a"),r=w("h2"),o=w("mark"),b=I("#"),_=I("\xA0"),v=I(u),L=F(),g=w("h2"),y=I(d),p=F(),S=w("div");for(let e=0;e<s.length;e+=1)s[e].c();A=F(),this.h()},l(e){l=x(e,"DIV",{class:!0});var m=E(l);t=x(m,"A",{href:!0,rel:!0,target:!0,class:!0});var n=E(t);r=x(n,"H2",{class:!0});var R=E(r);o=x(R,"MARK",{style:!0,class:!0});var j=E(o);b=V(j,"#"),j.forEach(f),_=V(R,"\xA0"),v=V(R,u),R.forEach(f),L=M(n),g=x(n,"H2",{class:!0});var G=E(g);y=V(G,d),G.forEach(f),p=M(n),S=x(n,"DIV",{class:!0});var K=E(S);for(let T=0;T<s.length;T+=1)s[T].l(K);K.forEach(f),n.forEach(f),A=M(m),m.forEach(f),this.h()},h(){D(o,"background","none"),k(o,"class","text-[#FF0055]"),k(r,"class","text-white text-center text-xl font-black"),k(g,"class","text-gray-200 text-center text-md font-base mt-4"),k(S,"class","flex justify-center items-center mt-6"),k(t,"href",C=c[5].html_url),k(t,"rel","noopener noreferrer"),k(t,"target","_blank"),k(t,"class","mb-48 h-64 px-10 pt-6 rounded-[2.5rem] tracking-widest shadow-[#202020]"),k(l,"class","group my-20 translate-y-0 hover:-translate-y-8 duration-[400ms] ease-in-out lg:mr-10 mx-28 lg:mx-0 w-[20rem] md:w-[40rem] 2xl:w-[50rem]")},m(e,m){H(e,l,m),h(l,t),h(t,r),h(r,o),h(o,b),h(r,_),h(r,v),h(t,L),h(t,g),h(g,y),h(t,p),h(t,S);for(let n=0;n<s.length;n+=1)s[n].m(S,null);h(l,A)},p(e,m){if(m&2&&u!==(u=e[5].name+"")&&q(v,u),m&2&&d!==(d=e[5].description+"")&&q(y,d),m&2){a=e[5].topics;let n;for(n=0;n<a.length;n+=1){const R=O(e,a,n);s[n]?s[n].p(R,m):(s[n]=P(R),s[n].c(),s[n].m(S,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=a.length}m&2&&C!==(C=e[5].html_url)&&k(t,"href",C)},i(e){i||Y(()=>{i=B(l,J,{delay:250*c[7],duration:1e3}),i.start()})},o:z,d(e){e&&f(l),W(s,e)}}}function se(c){let l,t,r,o,b=c[2].toUpperCase()+"",_,u,v,L,g,d,y,p,S,C,A=c[1],i=[];for(let a=0;a<A.length;a+=1)i[a]=X(N(c,A,a));return{c(){l=w("div"),t=w("div"),r=I(`THE 
        `),o=w("mark"),_=I(b),u=I(`
        GALAXY`),L=F(),g=w("div"),d=w("div");for(let a=0;a<i.length;a+=1)i[a].c();y=F(),p=w("canvas"),this.h()},l(a){l=x(a,"DIV",{class:!0});var s=E(l);t=x(s,"DIV",{class:!0});var e=E(t);r=V(e,`THE 
        `),o=x(e,"MARK",{style:!0});var m=E(o);_=V(m,b),m.forEach(f),u=V(e,`
        GALAXY`),e.forEach(f),s.forEach(f),L=M(a),g=x(a,"DIV",{class:!0});var n=E(g);d=x(n,"DIV",{});var R=E(d);for(let j=0;j<i.length;j+=1)i[j].l(R);R.forEach(f),n.forEach(f),y=M(a),p=x(a,"CANVAS",{style:!0}),E(p).forEach(f),this.h()},h(){D(o,"background","none"),D(o,"color","#FF0055"),k(t,"class","mt-24 mb-10 font-black text-white tracking-widest text-6xl cursor-pointer hover:tracking-[0.25em] duration-500 ease-in-out"),k(l,"class","justify-center items-center flex mx-20"),k(g,"class","flex justify-center items-center"),D(p,"position","absolute"),D(p,"top","0"),D(p,"left","0"),D(p,"z-index","-1"),D(p,"position","fixed")},m(a,s){H(a,l,s),h(l,t),h(t,r),h(t,o),h(o,_),h(t,u),H(a,L,s),H(a,g,s),h(g,d);for(let e=0;e<i.length;e+=1)i[e].m(d,null);H(a,y,s),H(a,p,s),c[4](p),S||(C=ee(t,"click",c[3]),S=!0)},p(a,[s]){if(s&2){A=a[1];let e;for(e=0;e<A.length;e+=1){const m=N(a,A,e);i[e]?(i[e].p(m,s),U(i[e],1)):(i[e]=X(m),i[e].c(),U(i[e],1),i[e].m(d,null))}for(;e<i.length;e+=1)i[e].d(1);i.length=A.length}},i(a){v||Y(()=>{v=B(l,J,{delay:400,duration:1200}),v.start()});for(let s=0;s<A.length;s+=1)U(i[s])},o:z,d(a){a&&f(l),a&&f(L),a&&f(g),W(i,a),a&&f(y),a&&f(p),c[4](null),S=!1,C()}}}function re(c,l,t){const r=new URLSearchParams(window.location.search).get("query");let o,b=[];te(async()=>{await le(o),["https://api.github.com/users/Simpson-Computer-Technologies-Research/repos?per_page=100","https://api.github.com/users/realTristan/repos?per_page=100"].forEach(async(L,g)=>{await self.fetch(L).then(d=>d.json()).then(d=>{new Map(Object.entries(d)).forEach((y,p)=>{y.name.toLowerCase().includes(r.toLowerCase())&&t(1,b=[...b,y])})}).catch(d=>console.log(d))})});const _=()=>window.location.reload();function u(v){ae[v?"unshift":"push"](()=>{o=v,t(0,o)})}return[o,b,r,_,u]}class ie extends Q{constructor(l){super(),Z(this,l,re,se,$,{})}}export{ie as default};

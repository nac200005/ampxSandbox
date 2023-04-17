import{S as Z,i as j,s as ee,k as g,q as E,a as R,P as te,l as v,m as w,r as T,h as f,c as A,n as h,p as re,G as u,b as C,H as U,O as Q,o as le,e as Y,u as W}from"../chunks/index.7d9c5eda.js";function z(p,o,b){const a=p.slice();a[3]=o[b];const s=a[0][a[3]];return a[4]=s,a}function B(p,o,b){const a=p.slice();return a[7]=o[b],a}function J(p){let o,b=p[7].name+"",a,s,c,r,l,e,i,t,D,F,x;return{c(){o=g("h2"),a=E(b),s=R(),c=g("div"),r=g("a"),l=E("View PDF"),i=R(),t=g("a"),D=E("View Code"),x=R(),this.h()},l(_){o=v(_,"H2",{class:!0});var m=w(o);a=T(m,b),m.forEach(f),s=A(_),c=v(_,"DIV",{class:!0});var S=w(c);r=v(S,"A",{href:!0,rel:!0,target:!0,class:!0});var L=w(r);l=T(L,"View PDF"),L.forEach(f),i=A(S),t=v(S,"A",{href:!0,rel:!0,target:!0,class:!0});var V=w(t);D=T(V,"View Code"),V.forEach(f),x=A(S),S.forEach(f),this.h()},h(){h(o,"class","text-black text-2xl my-10"),h(r,"href",e="https://docs.google.com/viewer?url="+p[7].pdf_url),h(r,"rel","noopener noreferrer"),h(r,"target","_blank"),h(r,"class","bg-black px-10 py-4 text-white hover:bg-amber-400 hover:text-black"),h(t,"href",F=p[7].src_url),h(t,"rel","noopener noreferrer"),h(t,"target","_blank"),h(t,"class","bg-black mt-4 px-10 py-4 text-white shadow-lg hover:bg-amber-400 hover:text-black"),h(c,"class","mb-6 flex flex-col lg:block text-center")},m(_,m){C(_,o,m),u(o,a),C(_,s,m),C(_,c,m),u(c,r),u(r,l),u(c,i),u(c,t),u(t,D),u(c,x)},p(_,m){m&1&&b!==(b=_[7].name+"")&&W(a,b),m&1&&e!==(e="https://docs.google.com/viewer?url="+_[7].pdf_url)&&h(r,"href",e),m&1&&F!==(F=_[7].src_url)&&h(t,"href",F)},d(_){_&&f(o),_&&f(s),_&&f(c)}}}function K(p){let o,b=p[4].name+"",a,s,c,r=p[4].docs,l=[];for(let e=0;e<r.length;e+=1)l[e]=J(B(p,r,e));return{c(){o=g("h2"),a=E(b),s=R();for(let e=0;e<l.length;e+=1)l[e].c();c=Y(),this.h()},l(e){o=v(e,"H2",{class:!0});var i=w(o);a=T(i,b),i.forEach(f),s=A(e);for(let t=0;t<l.length;t+=1)l[t].l(e);c=Y(),this.h()},h(){h(o,"class","text-black text-4xl mt-10 font-black")},m(e,i){C(e,o,i),u(o,a),C(e,s,i);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,i);C(e,c,i)},p(e,i){if(i&1&&b!==(b=e[4].name+"")&&W(a,b),i&1){r=e[4].docs;let t;for(t=0;t<r.length;t+=1){const D=B(e,r,t);l[t]?l[t].p(D,i):(l[t]=J(D),l[t].c(),l[t].m(c.parentNode,c))}for(;t<l.length;t+=1)l[t].d(1);l.length=r.length}},d(e){e&&f(o),e&&f(s),Q(l,e),e&&f(c)}}}function ae(p){let o,b,a,s,c,r,l,e,i,t,D,F,x,_,m,S,L,V,I,X,H=Object.keys(p[0]),k=[];for(let n=0;n<H.length;n+=1)k[n]=K(z(p,H,n));return{c(){o=g("style"),b=E(`body {\r
      background: white;\r
    }\r
    :root::-webkit-scrollbar {\r
      width: 1rem;\r
    }\r
    :root::-webkit-scrollbar-track {\r
      background: lightgray;\r
    }\r
\r
    :root::-webkit-scrollbar-thumb {\r
      background: black;\r
    }\r
    :root::-webkit-scrollbar-thumb:hover {\r
      background: #fbbf24;\r
    }`),a=R(),s=g("div"),c=g("h2"),r=E("Simpson Research"),l=R(),e=g("h2"),i=E("All the PDFs were made with "),t=g("a"),D=E("LaTeX"),F=R(),x=g("h2"),_=E("Check out "),m=g("a"),S=E("RaTeX"),L=E(" to build PDF's like this in Python!"),V=R();for(let n=0;n<k.length;n+=1)k[n].c();I=R(),X=g("div"),this.h()},l(n){const P=te("svelte-quffjv",document.head);o=v(P,"STYLE",{});var d=w(o);b=T(d,`body {\r
      background: white;\r
    }\r
    :root::-webkit-scrollbar {\r
      width: 1rem;\r
    }\r
    :root::-webkit-scrollbar-track {\r
      background: lightgray;\r
    }\r
\r
    :root::-webkit-scrollbar-thumb {\r
      background: black;\r
    }\r
    :root::-webkit-scrollbar-thumb:hover {\r
      background: #fbbf24;\r
    }`),d.forEach(f),P.forEach(f),a=A(n),s=v(n,"DIV",{class:!0});var y=w(s);c=v(y,"H2",{class:!0});var N=w(c);r=T(N,"Simpson Research"),N.forEach(f),l=A(y),e=v(y,"H2",{class:!0});var O=w(e);i=T(O,"All the PDFs were made with "),t=v(O,"A",{href:!0,rel:!0,target:!0,class:!0});var $=w(t);D=T($,"LaTeX"),$.forEach(f),O.forEach(f),F=A(y),x=v(y,"H2",{class:!0});var q=w(x);_=T(q,"Check out "),m=v(q,"A",{rel:!0,target:!0,href:!0,style:!0,class:!0});var G=w(m);S=T(G,"RaTeX"),G.forEach(f),L=T(q," to build PDF's like this in Python!"),q.forEach(f),V=A(y);for(let M=0;M<k.length;M+=1)k[M].l(y);y.forEach(f),I=A(n),X=v(n,"DIV",{class:!0}),w(X).forEach(f),this.h()},h(){h(c,"class","text-black text-6xl mt-10 font-black"),h(t,"href","https://www.latex-project.org/"),h(t,"rel","noopener noreferrer"),h(t,"target","_blank"),h(t,"class","hover:underline text-amber-500 font-black tracking-wider"),h(e,"class","text-black text-lg mt-6"),h(m,"rel","noopener noreferrer"),h(m,"target","_blank"),h(m,"href","https://github.com/realTristan/ratex"),re(m,"background","none"),h(m,"class","text-amber-500 font-black hover:underline tracking-wider"),h(x,"class","text-black text-lg mt-2"),h(s,"class","flex flex-col items-center justify-center my-10 mx-10"),h(X,"class","my-12 w-10 h-1")},m(n,P){u(document.head,o),u(o,b),C(n,a,P),C(n,s,P),u(s,c),u(c,r),u(s,l),u(s,e),u(e,i),u(e,t),u(t,D),u(s,F),u(s,x),u(x,_),u(x,m),u(m,S),u(x,L),u(s,V);for(let d=0;d<k.length;d+=1)k[d]&&k[d].m(s,null);C(n,I,P),C(n,X,P)},p(n,[P]){if(P&1){H=Object.keys(n[0]);let d;for(d=0;d<H.length;d+=1){const y=z(n,H,d);k[d]?k[d].p(y,P):(k[d]=K(y),k[d].c(),k[d].m(s,null))}for(;d<k.length;d+=1)k[d].d(1);k.length=H.length}},i:U,o:U,d(n){f(o),n&&f(a),n&&f(s),Q(k,n),n&&f(I),n&&f(X)}}}function oe(p,o,b){let a={};const s=r=>(r=r.replace("api.github.com/repos/Simpson-Computer-Technologies-Research/LaTeX/contents/","raw.githubusercontent.com/Simpson-Computer-Technologies-Research/LaTeX/main/"),r.split("?ref")[0]+"/build/main.pdf"),c=async(r,l)=>{await fetch(l).then(e=>e.json()).then(e=>{for(var i=0;i<e.length;i++)b(0,a[r].docs=[...a[r].docs,{name:e[i].name,pdf_url:s(e[i].url),src_url:e[i].html_url}],a)})};return le(async()=>{await fetch("https://api.github.com/repos/Simpson-Computer-Technologies-Research/LaTeX/contents/").then(r=>r.json()).then(async r=>{for(let l=0;l<r.length;l++)["LICENSE",".vscode","README.md","Hidden",".gitignore"].includes(r[l].name)||(b(0,a[r[l].sha]={name:r[l].name,docs:[]},a),await c(r[l].sha,r[l].url))})}),[a]}class ne extends Z{constructor(o){super(),j(this,o,oe,ae,ee,{})}}export{ne as default};

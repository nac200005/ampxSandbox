import{S as Z,i as j,s as ee,k as g,q as E,a as R,P as te,l as v,m as w,r as T,h as f,c as A,n,p as le,G as u,b as C,H as U,O as Q,o as re,e as Y,u as W}from"../chunks/index.7d9c5eda.js";function z(p,s,b){const h=p.slice();h[3]=s[b];const a=h[0][h[3]];return h[4]=a,h}function B(p,s,b){const h=p.slice();return h[7]=s[b],h}function J(p){let s,b=p[7].name+"",h,a,c,l,r,e,i,t,D,F,x;return{c(){s=g("h2"),h=E(b),a=R(),c=g("div"),l=g("a"),r=E("View PDF"),i=R(),t=g("a"),D=E("View Code"),x=R(),this.h()},l(_){s=v(_,"H2",{class:!0});var m=w(s);h=T(m,b),m.forEach(f),a=A(_),c=v(_,"DIV",{class:!0});var S=w(c);l=v(S,"A",{href:!0,rel:!0,target:!0,class:!0});var L=w(l);r=T(L,"View PDF"),L.forEach(f),i=A(S),t=v(S,"A",{href:!0,rel:!0,target:!0,class:!0});var V=w(t);D=T(V,"View Code"),V.forEach(f),x=A(S),S.forEach(f),this.h()},h(){n(s,"class","text-black text-2xl my-10"),n(l,"href",e="https://docs.google.com/viewer?url="+p[7].pdf_url),n(l,"rel","noopener noreferrer"),n(l,"target","_blank"),n(l,"class","bg-black px-10 py-4 text-white hover:bg-amber-400 hover:text-black"),n(t,"href",F=p[7].src_url),n(t,"rel","noopener noreferrer"),n(t,"target","_blank"),n(t,"class","bg-black mt-4 px-10 py-4 text-white shadow-lg hover:bg-amber-400 hover:text-black"),n(c,"class","mb-6 flex flex-col lg:block text-center")},m(_,m){C(_,s,m),u(s,h),C(_,a,m),C(_,c,m),u(c,l),u(l,r),u(c,i),u(c,t),u(t,D),u(c,x)},p(_,m){m&1&&b!==(b=_[7].name+"")&&W(h,b),m&1&&e!==(e="https://docs.google.com/viewer?url="+_[7].pdf_url)&&n(l,"href",e),m&1&&F!==(F=_[7].src_url)&&n(t,"href",F)},d(_){_&&f(s),_&&f(a),_&&f(c)}}}function K(p){let s,b=p[4].name+"",h,a,c,l=p[4].docs,r=[];for(let e=0;e<l.length;e+=1)r[e]=J(B(p,l,e));return{c(){s=g("h2"),h=E(b),a=R();for(let e=0;e<r.length;e+=1)r[e].c();c=Y(),this.h()},l(e){s=v(e,"H2",{class:!0});var i=w(s);h=T(i,b),i.forEach(f),a=A(e);for(let t=0;t<r.length;t+=1)r[t].l(e);c=Y(),this.h()},h(){n(s,"class","text-black text-4xl mt-10 font-black")},m(e,i){C(e,s,i),u(s,h),C(e,a,i);for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(e,i);C(e,c,i)},p(e,i){if(i&1&&b!==(b=e[4].name+"")&&W(h,b),i&1){l=e[4].docs;let t;for(t=0;t<l.length;t+=1){const D=B(e,l,t);r[t]?r[t].p(D,i):(r[t]=J(D),r[t].c(),r[t].m(c.parentNode,c))}for(;t<r.length;t+=1)r[t].d(1);r.length=l.length}},d(e){e&&f(s),e&&f(a),Q(r,e),e&&f(c)}}}function ae(p){let s,b,h,a,c,l,r,e,i,t,D,F,x,_,m,S,L,V,I,X,H=Object.keys(p[0]),k=[];for(let o=0;o<H.length;o+=1)k[o]=K(z(p,H,o));return{c(){s=g("style"),b=E(`body { background: white; }
    :root::-webkit-scrollbar { width: 1rem; }
    :root::-webkit-scrollbar-track { background: lightgray; }
    :root::-webkit-scrollbar-thumb { background: black; }
    :root::-webkit-scrollbar-thumb:hover { background: #fbbf24; }`),h=R(),a=g("div"),c=g("h2"),l=E("Simpson Research"),r=R(),e=g("h2"),i=E("All the PDFs were made with "),t=g("a"),D=E("LaTeX"),F=R(),x=g("h2"),_=E("Check out "),m=g("a"),S=E("RaTeX"),L=E(" to build PDF's like this in Python!"),V=R();for(let o=0;o<k.length;o+=1)k[o].c();I=R(),X=g("div"),this.h()},l(o){const P=te("svelte-1d332sv",document.head);s=v(P,"STYLE",{});var d=w(s);b=T(d,`body { background: white; }
    :root::-webkit-scrollbar { width: 1rem; }
    :root::-webkit-scrollbar-track { background: lightgray; }
    :root::-webkit-scrollbar-thumb { background: black; }
    :root::-webkit-scrollbar-thumb:hover { background: #fbbf24; }`),d.forEach(f),P.forEach(f),h=A(o),a=v(o,"DIV",{class:!0});var y=w(a);c=v(y,"H2",{class:!0});var N=w(c);l=T(N,"Simpson Research"),N.forEach(f),r=A(y),e=v(y,"H2",{class:!0});var q=w(e);i=T(q,"All the PDFs were made with "),t=v(q,"A",{href:!0,rel:!0,target:!0,class:!0});var $=w(t);D=T($,"LaTeX"),$.forEach(f),q.forEach(f),F=A(y),x=v(y,"H2",{class:!0});var O=w(x);_=T(O,"Check out "),m=v(O,"A",{rel:!0,target:!0,href:!0,style:!0,class:!0});var G=w(m);S=T(G,"RaTeX"),G.forEach(f),L=T(O," to build PDF's like this in Python!"),O.forEach(f),V=A(y);for(let M=0;M<k.length;M+=1)k[M].l(y);y.forEach(f),I=A(o),X=v(o,"DIV",{class:!0}),w(X).forEach(f),this.h()},h(){n(c,"class","text-black text-6xl mt-10 font-black"),n(t,"href","https://www.latex-project.org/"),n(t,"rel","noopener noreferrer"),n(t,"target","_blank"),n(t,"class","hover:underline text-amber-500 font-black tracking-wider"),n(e,"class","text-black text-lg mt-6"),n(m,"rel","noopener noreferrer"),n(m,"target","_blank"),n(m,"href","https://github.com/realTristan/ratex"),le(m,"background","none"),n(m,"class","text-amber-500 font-black hover:underline tracking-wider"),n(x,"class","text-black text-lg mt-2"),n(a,"class","flex flex-col items-center justify-center my-10 mx-10"),n(X,"class","my-12 w-10 h-1")},m(o,P){u(document.head,s),u(s,b),C(o,h,P),C(o,a,P),u(a,c),u(c,l),u(a,r),u(a,e),u(e,i),u(e,t),u(t,D),u(a,F),u(a,x),u(x,_),u(x,m),u(m,S),u(x,L),u(a,V);for(let d=0;d<k.length;d+=1)k[d]&&k[d].m(a,null);C(o,I,P),C(o,X,P)},p(o,[P]){if(P&1){H=Object.keys(o[0]);let d;for(d=0;d<H.length;d+=1){const y=z(o,H,d);k[d]?k[d].p(y,P):(k[d]=K(y),k[d].c(),k[d].m(a,null))}for(;d<k.length;d+=1)k[d].d(1);k.length=H.length}},i:U,o:U,d(o){f(s),o&&f(h),o&&f(a),Q(k,o),o&&f(I),o&&f(X)}}}function se(p,s,b){const h=l=>(l=l.replace("api.github.com/repos/Simpson-Computer-Technologies-Research/LaTeX/contents/","raw.githubusercontent.com/Simpson-Computer-Technologies-Research/LaTeX/main/"),l.split("?ref")[0]+"/build/main.pdf");let a={};const c=async(l,r)=>{await fetch(r).then(e=>e.json()).then(e=>{for(var i=0;i<e.length;i++)b(0,a[l].docs=[...a[l].docs,{name:e[i].name,pdf_url:h(e[i].url),src_url:e[i].html_url}],a)})};return re(async()=>{await fetch("https://api.github.com/repos/Simpson-Computer-Technologies-Research/LaTeX/contents/").then(l=>l.json()).then(async l=>{for(let r=0;r<l.length;r++)["LICENSE",".vscode","README.md","Hidden",".gitignore"].includes(l[r].name)||(b(0,a[l[r].sha]={name:l[r].name,docs:[]},a),await c(l[r].sha,l[r].url))})}),[a]}class ce extends Z{constructor(s){super(),j(this,s,se,ae,ee,{})}}export{ce as default};
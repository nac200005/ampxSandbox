import{S as Z,i as j,s as ee,k,r as E,a as L,M as te,l as v,m as w,u as T,h as i,c as R,p as c,q as le,G as f,b as C,n as G,L as Q,o as re,e as U,v as W}from"../../../chunks/index-b3cd2fd6.js";function Y(p,o,u){const b=p.slice();return b[3]=o[u][0],b[4]=o[u][1],b}function B(p,o,u){const b=p.slice();return b[7]=o[u],b}function J(p){let o,u=p[7].name+"",b,n,a,l,r,e,h,t,D,A,x;return{c(){o=k("h2"),b=E(u),n=L(),a=k("div"),l=k("a"),r=E("View PDF"),h=L(),t=k("a"),D=E("View Code"),x=L(),this.h()},l(d){o=v(d,"H2",{class:!0});var m=w(o);b=T(m,u),m.forEach(i),n=R(d),a=v(d,"DIV",{class:!0});var S=w(a);l=v(S,"A",{href:!0,rel:!0,target:!0,class:!0});var F=w(l);r=T(F,"View PDF"),F.forEach(i),h=R(S),t=v(S,"A",{href:!0,rel:!0,target:!0,class:!0});var V=w(t);D=T(V,"View Code"),V.forEach(i),x=R(S),S.forEach(i),this.h()},h(){c(o,"class","text-black text-2xl my-10"),c(l,"href",e="https://docs.google.com/viewer?url="+p[7].pdf_url),c(l,"rel","noopener noreferrer"),c(l,"target","_blank"),c(l,"class","bg-black px-10 py-4 text-white hover:bg-amber-400 hover:text-black"),c(t,"href",A=p[7].src_url),c(t,"rel","noopener noreferrer"),c(t,"target","_blank"),c(t,"class","bg-black mt-4 px-10 py-4 text-white shadow-lg hover:bg-amber-400 hover:text-black"),c(a,"class","mb-6 flex flex-col lg:block text-center")},m(d,m){C(d,o,m),f(o,b),C(d,n,m),C(d,a,m),f(a,l),f(l,r),f(a,h),f(a,t),f(t,D),f(a,x)},p(d,m){m&1&&u!==(u=d[7].name+"")&&W(b,u),m&1&&e!==(e="https://docs.google.com/viewer?url="+d[7].pdf_url)&&c(l,"href",e),m&1&&A!==(A=d[7].src_url)&&c(t,"href",A)},d(d){d&&i(o),d&&i(n),d&&i(a)}}}function K(p){let o,u=p[4].name+"",b,n,a,l=p[4].docs,r=[];for(let e=0;e<l.length;e+=1)r[e]=J(B(p,l,e));return{c(){o=k("h2"),b=E(u),n=L();for(let e=0;e<r.length;e+=1)r[e].c();a=U(),this.h()},l(e){o=v(e,"H2",{class:!0});var h=w(o);b=T(h,u),h.forEach(i),n=R(e);for(let t=0;t<r.length;t+=1)r[t].l(e);a=U(),this.h()},h(){c(o,"class","text-black text-4xl mt-10 font-black")},m(e,h){C(e,o,h),f(o,b),C(e,n,h);for(let t=0;t<r.length;t+=1)r[t].m(e,h);C(e,a,h)},p(e,h){if(h&1&&u!==(u=e[4].name+"")&&W(b,u),h&1){l=e[4].docs;let t;for(t=0;t<l.length;t+=1){const D=B(e,l,t);r[t]?r[t].p(D,h):(r[t]=J(D),r[t].c(),r[t].m(a.parentNode,a))}for(;t<r.length;t+=1)r[t].d(1);r.length=l.length}},d(e){e&&i(o),e&&i(n),Q(r,e),e&&i(a)}}}function ae(p){let o,u,b,n,a,l,r,e,h,t,D,A,x,d,m,S,F,V,I,X,H=Object.entries(p[0]),g=[];for(let s=0;s<H.length;s+=1)g[s]=K(Y(p,H,s));return{c(){o=k("style"),u=E(`body {
            background: white;
        }
        :root::-webkit-scrollbar {
            width: 1rem;
        }
        :root::-webkit-scrollbar-track {
            background: lightgray;
        }

        :root::-webkit-scrollbar-thumb {
            background: black;
        }
        :root::-webkit-scrollbar-thumb:hover {
            background: #fbbf24;
        }`),b=L(),n=k("div"),a=k("h2"),l=E("Simpson Research"),r=L(),e=k("h2"),h=E("All the PDFs were made with "),t=k("a"),D=E("LaTeX"),A=L(),x=k("h2"),d=E("Check out "),m=k("a"),S=E("RaTeX"),F=E(" to build PDF's like this in Python!"),V=L();for(let s=0;s<g.length;s+=1)g[s].c();I=L(),X=k("div"),this.h()},l(s){const P=te("svelte-1f7bczf",document.head);o=v(P,"STYLE",{});var _=w(o);u=T(_,`body {
            background: white;
        }
        :root::-webkit-scrollbar {
            width: 1rem;
        }
        :root::-webkit-scrollbar-track {
            background: lightgray;
        }

        :root::-webkit-scrollbar-thumb {
            background: black;
        }
        :root::-webkit-scrollbar-thumb:hover {
            background: #fbbf24;
        }`),_.forEach(i),P.forEach(i),b=R(s),n=v(s,"DIV",{class:!0});var y=w(n);a=v(y,"H2",{class:!0});var O=w(a);l=T(O,"Simpson Research"),O.forEach(i),r=R(y),e=v(y,"H2",{class:!0});var q=w(e);h=T(q,"All the PDFs were made with "),t=v(q,"A",{href:!0,rel:!0,target:!0,class:!0});var $=w(t);D=T($,"LaTeX"),$.forEach(i),q.forEach(i),A=R(y),x=v(y,"H2",{class:!0});var M=w(x);d=T(M,"Check out "),m=v(M,"A",{rel:!0,target:!0,href:!0,style:!0,class:!0});var z=w(m);S=T(z,"RaTeX"),z.forEach(i),F=T(M," to build PDF's like this in Python!"),M.forEach(i),V=R(y);for(let N=0;N<g.length;N+=1)g[N].l(y);y.forEach(i),I=R(s),X=v(s,"DIV",{class:!0}),w(X).forEach(i),this.h()},h(){c(a,"class","text-black text-6xl mt-10 font-black"),c(t,"href","https://www.latex-project.org/"),c(t,"rel","noopener noreferrer"),c(t,"target","_blank"),c(t,"class","hover:underline text-amber-500 font-black tracking-wider"),c(e,"class","text-black text-lg mt-6"),c(m,"rel","noopener noreferrer"),c(m,"target","_blank"),c(m,"href","https://github.com/realTristan/ratex"),le(m,"background","none"),c(m,"class","text-amber-500 font-black hover:underline tracking-wider"),c(x,"class","text-black text-lg mt-2 "),c(n,"class","flex flex-col items-center justify-center my-10 mx-10"),c(X,"class","my-12 w-10 h-1")},m(s,P){f(document.head,o),f(o,u),C(s,b,P),C(s,n,P),f(n,a),f(a,l),f(n,r),f(n,e),f(e,h),f(e,t),f(t,D),f(n,A),f(n,x),f(x,d),f(x,m),f(m,S),f(x,F),f(n,V);for(let _=0;_<g.length;_+=1)g[_].m(n,null);C(s,I,P),C(s,X,P)},p(s,[P]){if(P&1){H=Object.entries(s[0]);let _;for(_=0;_<H.length;_+=1){const y=Y(s,H,_);g[_]?g[_].p(y,P):(g[_]=K(y),g[_].c(),g[_].m(n,null))}for(;_<g.length;_+=1)g[_].d(1);g.length=H.length}},i:G,o:G,d(s){i(o),s&&i(b),s&&i(n),Q(g,s),s&&i(I),s&&i(X)}}}function oe(p,o,u){const b=l=>(l=l.replace("api.github.com/repos/Simpson-Computer-Technologies-Research/LaTeX/contents/","raw.githubusercontent.com/Simpson-Computer-Technologies-Research/LaTeX/main/"),l.split("?ref")[0]+"/build/main.pdf"),n=async(l,r)=>{await fetch(r).then(e=>e.json()).then(e=>{for(var h=0;h<e.length;h++)u(0,a[l].docs=[...a[l].docs,{name:e[h].name,pdf_url:b(e[h].url),src_url:e[h].html_url}],a)})};let a={};return re(async()=>{await fetch("https://api.github.com/repos/Simpson-Computer-Technologies-Research/LaTeX/contents/").then(l=>l.json()).then(async l=>{for(let r=0;r<l.length;r++)["LICENSE",".vscode","README.md","Hidden",".gitignore"].includes(l[r].name)||(u(0,a[l[r].sha]={name:l[r].name,docs:[]},a),await n(l[r].sha,l[r].url))})}),[a]}class ne extends Z{constructor(o){super(),j(this,o,oe,ae,ee,{})}}export{ne as default};

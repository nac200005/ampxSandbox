import{S as J,i as K,s as Q,k,r as V,a as A,M as W,l as v,m as w,u as I,h,c as P,p as u,G as b,b as S,n as O,L as Y,o as Z,e as $,v as B}from"../../../chunks/index-b3cd2fd6.js";function q(_,o,i){const f=_.slice();return f[3]=o[i][0],f[4]=o[i][1],f}function z(_,o,i){const f=_.slice();return f[7]=o[i],f}function G(_){let o,i=_[7].name+"",f,n,a,l,r,e,c,t,E,F,y;return{c(){o=k("h2"),f=V(i),n=A(),a=k("div"),l=k("a"),r=V("View PDF"),c=A(),t=k("a"),E=V("View Code"),y=A(),this.h()},l(m){o=v(m,"H2",{class:!0});var g=w(o);f=I(g,i),g.forEach(h),n=P(m),a=v(m,"DIV",{class:!0});var T=w(a);l=v(T,"A",{href:!0,rel:!0,target:!0,class:!0});var L=w(l);r=I(L,"View PDF"),L.forEach(h),c=P(T),t=v(T,"A",{href:!0,rel:!0,target:!0,class:!0});var C=w(t);E=I(C,"View Code"),C.forEach(h),y=P(T),T.forEach(h),this.h()},h(){u(o,"class","text-black text-2xl my-10"),u(l,"href",e="https://docs.google.com/viewer?url="+_[7].pdf_url),u(l,"rel","noopener noreferrer"),u(l,"target","_blank"),u(l,"class","bg-black px-10 py-4 text-white hover:bg-amber-400 hover:text-black"),u(t,"href",F=_[7].src_url),u(t,"rel","noopener noreferrer"),u(t,"target","_blank"),u(t,"class","bg-black mt-4 px-10 py-4 text-white shadow-lg hover:bg-amber-400 hover:text-black"),u(a,"class","mb-6 flex flex-col lg:block text-center")},m(m,g){S(m,o,g),b(o,f),S(m,n,g),S(m,a,g),b(a,l),b(l,r),b(a,c),b(a,t),b(t,E),b(a,y)},p(m,g){g&1&&i!==(i=m[7].name+"")&&B(f,i),g&1&&e!==(e="https://docs.google.com/viewer?url="+m[7].pdf_url)&&u(l,"href",e),g&1&&F!==(F=m[7].src_url)&&u(t,"href",F)},d(m){m&&h(o),m&&h(n),m&&h(a)}}}function U(_){let o,i=_[4].name+"",f,n,a,l=_[4].docs,r=[];for(let e=0;e<l.length;e+=1)r[e]=G(z(_,l,e));return{c(){o=k("h2"),f=V(i),n=A();for(let e=0;e<r.length;e+=1)r[e].c();a=$(),this.h()},l(e){o=v(e,"H2",{class:!0});var c=w(o);f=I(c,i),c.forEach(h),n=P(e);for(let t=0;t<r.length;t+=1)r[t].l(e);a=$(),this.h()},h(){u(o,"class","text-black text-4xl mt-10 font-black")},m(e,c){S(e,o,c),b(o,f),S(e,n,c);for(let t=0;t<r.length;t+=1)r[t].m(e,c);S(e,a,c)},p(e,c){if(c&1&&i!==(i=e[4].name+"")&&B(f,i),c&1){l=e[4].docs;let t;for(t=0;t<l.length;t+=1){const E=z(e,l,t);r[t]?r[t].p(E,c):(r[t]=G(E),r[t].c(),r[t].m(a.parentNode,a))}for(;t<r.length;t+=1)r[t].d(1);r.length=l.length}},d(e){e&&h(o),e&&h(n),Y(r,e),e&&h(a)}}}function j(_){let o,i,f,n,a,l,r,e,c,t,E,F,y,m,g,T,L,C=Object.entries(_[0]),p=[];for(let s=0;s<C.length;s+=1)p[s]=U(q(_,C,s));return{c(){o=k("style"),i=V(`body {
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
        }`),f=A(),n=k("div"),a=k("h2"),l=V("Tristan Simpson"),r=A(),e=k("h2"),c=V("All the PDFs were made with "),t=k("a"),E=V("LaTeX"),F=A(),y=k("h2"),m=V("If you want to learn how dm me on discord @tristan#2230"),g=A();for(let s=0;s<p.length;s+=1)p[s].c();T=A(),L=k("div"),this.h()},l(s){const D=W("svelte-1f7bczf",document.head);o=v(D,"STYLE",{});var d=w(o);i=I(d,`body {
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
        }`),d.forEach(h),D.forEach(h),f=P(s),n=v(s,"DIV",{class:!0});var x=w(n);a=v(x,"H2",{class:!0});var R=w(a);l=I(R,"Tristan Simpson"),R.forEach(h),r=P(x),e=v(x,"H2",{class:!0});var H=w(e);c=I(H,"All the PDFs were made with "),t=v(H,"A",{href:!0,rel:!0,target:!0,class:!0});var M=w(t);E=I(M,"LaTeX"),M.forEach(h),H.forEach(h),F=P(x),y=v(x,"H2",{class:!0});var N=w(y);m=I(N,"If you want to learn how dm me on discord @tristan#2230"),N.forEach(h),g=P(x);for(let X=0;X<p.length;X+=1)p[X].l(x);x.forEach(h),T=P(s),L=v(s,"DIV",{class:!0}),w(L).forEach(h),this.h()},h(){u(a,"class","text-black text-6xl mt-10 font-black"),u(t,"href","https://www.latex-project.org/"),u(t,"rel","noopener noreferrer"),u(t,"target","_blank"),u(t,"class","hover:underline text-amber-400 font-bold"),u(e,"class","text-black text-lg mt-6"),u(y,"class","text-black text-lg mt-2 "),u(n,"class","flex flex-col items-center justify-center my-10 mx-10"),u(L,"class","my-12 w-10 h-1")},m(s,D){b(document.head,o),b(o,i),S(s,f,D),S(s,n,D),b(n,a),b(a,l),b(n,r),b(n,e),b(e,c),b(e,t),b(t,E),b(n,F),b(n,y),b(y,m),b(n,g);for(let d=0;d<p.length;d+=1)p[d].m(n,null);S(s,T,D),S(s,L,D)},p(s,[D]){if(D&1){C=Object.entries(s[0]);let d;for(d=0;d<C.length;d+=1){const x=q(s,C,d);p[d]?p[d].p(x,D):(p[d]=U(x),p[d].c(),p[d].m(n,null))}for(;d<p.length;d+=1)p[d].d(1);p.length=C.length}},i:O,o:O,d(s){h(o),s&&h(f),s&&h(n),Y(p,s),s&&h(T),s&&h(L)}}}function ee(_,o,i){const f=l=>(l=l.replace("api.github.com/repos/Simpson-Computer-Technologies-Research/LaTeX/contents/","raw.githubusercontent.com/Simpson-Computer-Technologies-Research/LaTeX/main/"),l.split("?ref")[0]+"/build/main.pdf"),n=async(l,r)=>{await fetch(r).then(e=>e.json()).then(e=>{for(var c=0;c<e.length;c++)i(0,a[l].docs=[...a[l].docs,{name:e[c].name,pdf_url:f(e[c].url),src_url:e[c].html_url}],a)})};let a={};return Z(async()=>{await fetch("https://api.github.com/repos/Simpson-Computer-Technologies-Research/LaTeX/contents/").then(l=>l.json()).then(async l=>{for(let r=0;r<l.length;r++)["LICENSE",".vscode","README.md","Hidden",".gitignore"].includes(l[r].name)||(i(0,a[l[r].sha]={name:l[r].name,docs:[]},a),await n(l[r].sha,l[r].url))})}),[a]}class le extends J{constructor(o){super(),K(this,o,ee,j,Q,{})}}export{le as default};

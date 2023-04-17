import{S as F,i as J,s as K,k,q as y,a as E,O as Q,l as p,m as v,r as w,h as a,c as S,n as h,p as X,G as r,b as V,B as O,N as Z,o as ee,u as te}from"../../../chunks/index-8c56bedf.js";function Y(x,s,f){const i=x.slice();return i[1]=s[f],i}function j(x){let s,f=x[1].name+"",i,e,l,b,C,_,R;return{c(){s=k("h2"),i=y(f),e=E(),l=k("div"),b=k("a"),C=y("Visit Github Repo"),R=E(),this.h()},l(c){s=p(c,"H2",{class:!0});var n=v(s);i=w(n,f),n.forEach(a),e=S(c),l=p(c,"DIV",{class:!0});var H=v(l);b=p(H,"A",{href:!0,rel:!0,target:!0,class:!0});var m=v(b);C=w(m,"Visit Github Repo"),m.forEach(a),R=S(H),H.forEach(a),this.h()},h(){h(s,"class","text-black text-2xl my-10"),h(b,"href",_=x[1].html_url),h(b,"rel","noopener noreferrer"),h(b,"target","_blank"),h(b,"class","bg-black px-10 py-4 text-white hover:bg-amber-400 hover:text-black"),h(l,"class","mb-6 text-center")},m(c,n){V(c,s,n),r(s,i),V(c,e,n),V(c,l,n),r(l,b),r(b,C),r(l,R)},p(c,n){n&1&&f!==(f=c[1].name+"")&&te(i,f),n&1&&_!==(_=c[1].html_url)&&h(b,"href",_)},d(c){c&&a(s),c&&a(e),c&&a(l)}}}function le(x){let s,f,i,e,l,b,C,_,R,c,n,H,m,G,I,L,T,M,P,B,W,$=x[0],u=[];for(let t=0;t<$.length;t+=1)u[t]=j(Y(x,$,t));return{c(){s=k("style"),f=y(`body {
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
        }`),i=E(),e=k("div"),l=k("h2"),b=y("Simpson Research"),C=E(),_=k("h2"),R=y("Welcome to the Stem Club Python Curriculum!"),c=E(),n=k("h2"),H=y("Check out "),m=k("a"),G=y("Simpson Research"),I=y(" for more open-source projects!"),L=E(),T=k("h2"),M=y("Stem Club"),P=E();for(let t=0;t<u.length;t+=1)u[t].c();B=E(),W=k("div"),this.h()},l(t){const g=Q("svelte-1f7bczf",document.head);s=p(g,"STYLE",{});var o=v(s);f=w(o,`body {
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
        }`),o.forEach(a),g.forEach(a),i=S(t),e=p(t,"DIV",{class:!0});var d=v(e);l=p(d,"H2",{class:!0});var A=v(l);b=w(A,"Simpson Research"),A.forEach(a),C=S(d),_=p(d,"H2",{class:!0});var U=v(_);R=w(U,"Welcome to the Stem Club Python Curriculum!"),U.forEach(a),c=S(d),n=p(d,"H2",{class:!0});var D=v(n);H=w(D,"Check out "),m=p(D,"A",{rel:!0,target:!0,href:!0,style:!0,class:!0});var z=v(m);G=w(z,"Simpson Research"),z.forEach(a),I=w(D," for more open-source projects!"),D.forEach(a),L=S(d),T=p(d,"H2",{class:!0});var N=v(T);M=w(N,"Stem Club"),N.forEach(a),P=S(d);for(let q=0;q<u.length;q+=1)u[q].l(d);d.forEach(a),B=S(t),W=p(t,"DIV",{class:!0}),v(W).forEach(a),this.h()},h(){h(l,"class","text-black text-6xl mt-10 font-black"),h(_,"class","text-black text-lg mt-6"),h(m,"rel","noopener noreferrer"),h(m,"target","_blank"),h(m,"href","https://simpsonresearch.ca"),X(m,"background","none"),h(m,"class","text-amber-500 font-black hover:underline tracking-wider"),h(n,"class","text-black text-lg mt-2 "),h(T,"class","text-black text-4xl mt-10 font-black"),h(e,"class","flex flex-col items-center justify-center my-10 mx-10"),h(W,"class","my-12 w-10 h-1")},m(t,g){r(document.head,s),r(s,f),V(t,i,g),V(t,e,g),r(e,l),r(l,b),r(e,C),r(e,_),r(_,R),r(e,c),r(e,n),r(n,H),r(n,m),r(m,G),r(n,I),r(e,L),r(e,T),r(T,M),r(e,P);for(let o=0;o<u.length;o+=1)u[o].m(e,null);V(t,B,g),V(t,W,g)},p(t,[g]){if(g&1){$=t[0];let o;for(o=0;o<$.length;o+=1){const d=Y(t,$,o);u[o]?u[o].p(d,g):(u[o]=j(d),u[o].c(),u[o].m(e,null))}for(;o<u.length;o+=1)u[o].d(1);u.length=$.length}},i:O,o:O,d(t){a(s),t&&a(i),t&&a(e),Z(u,t),t&&a(B),t&&a(W)}}}function re(x,s,f){let i=[];return ee(async()=>{await self.fetch("https://api.github.com/users/Simpson-Computer-Technologies-Research/repos?per_page=100").then(e=>e.json()).then(e=>{for(let l=0;l<e.length;l++)e[l].name.includes("STEM_CLUB")&&(e[l].name=e[l].name.replace("STEM_CLUB_Week","Stem Club Week "),f(0,i=[...i,e[l]]))}).catch(e=>console.log(e))}),[i]}class se extends F{constructor(s){super(),J(this,s,re,le,K,{})}}export{se as default};

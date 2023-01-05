import{S as K,i as N,s as O,k as _,r as y,a as E,M as Q,l as p,m as v,u as w,h as a,c as S,p as h,q as X,G as r,b as V,n as j,L as Z,o as ee,v as te}from"../../../chunks/index-b3cd2fd6.js";function F(x,s,f){const i=x.slice();return i[1]=s[f],i}function J(x){let s,f=x[1].name+"",i,e,l,b,C,k,R;return{c(){s=_("h2"),i=y(f),e=E(),l=_("div"),b=_("a"),C=y("Visit Github Repo"),R=E(),this.h()},l(c){s=p(c,"H2",{class:!0});var n=v(s);i=w(n,f),n.forEach(a),e=S(c),l=p(c,"DIV",{class:!0});var H=v(l);b=p(H,"A",{href:!0,rel:!0,target:!0,class:!0});var m=v(b);C=w(m,"Visit Github Repo"),m.forEach(a),R=S(H),H.forEach(a),this.h()},h(){h(s,"class","text-black text-2xl my-10"),h(b,"href",k=x[1].html_url),h(b,"rel","noopener noreferrer"),h(b,"target","_blank"),h(b,"class","bg-black px-10 py-4 text-white hover:bg-amber-400 hover:text-black"),h(l,"class","mb-6 text-center")},m(c,n){V(c,s,n),r(s,i),V(c,e,n),V(c,l,n),r(l,b),r(b,C),r(l,R)},p(c,n){n&1&&f!==(f=c[1].name+"")&&te(i,f),n&1&&k!==(k=c[1].html_url)&&h(b,"href",k)},d(c){c&&a(s),c&&a(e),c&&a(l)}}}function le(x){let s,f,i,e,l,b,C,k,R,c,n,H,m,D,G,I,L,P,q,W,M,T=x[0],u=[];for(let t=0;t<T.length;t+=1)u[t]=J(F(x,T,t));return{c(){s=_("style"),f=y(`body {
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
        }`),i=E(),e=_("div"),l=_("h2"),b=y("Simpson Research"),C=E(),k=_("h2"),R=y("Welcome to the Stem Club Python Curriculum!"),c=E(),n=_("h2"),H=y("Check out "),m=_("a"),D=y("Simpson Research"),G=y(" for more open-source projects!"),I=E(),L=_("h2"),P=y("Stem Club"),q=E();for(let t=0;t<u.length;t+=1)u[t].c();W=E(),M=_("div"),this.h()},l(t){const g=Q("svelte-1f7bczf",document.head);s=p(g,"STYLE",{});var o=v(s);f=w(o,`body {
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
        }`),o.forEach(a),g.forEach(a),i=S(t),e=p(t,"DIV",{class:!0});var d=v(e);l=p(d,"H2",{class:!0});var B=v(l);b=w(B,"Simpson Research"),B.forEach(a),C=S(d),k=p(d,"H2",{class:!0});var U=v(k);R=w(U,"Welcome to the Stem Club Python Curriculum!"),U.forEach(a),c=S(d),n=p(d,"H2",{class:!0});var $=v(n);H=w($,"Check out "),m=p($,"A",{rel:!0,target:!0,href:!0,style:!0,class:!0});var z=v(m);D=w(z,"Simpson Research"),z.forEach(a),G=w($," for more open-source projects!"),$.forEach(a),I=S(d),L=p(d,"H2",{class:!0});var Y=v(L);P=w(Y,"Stem Club"),Y.forEach(a),q=S(d);for(let A=0;A<u.length;A+=1)u[A].l(d);d.forEach(a),W=S(t),M=p(t,"DIV",{class:!0}),v(M).forEach(a),this.h()},h(){h(l,"class","text-black text-6xl mt-10 font-black"),h(k,"class","text-black text-lg mt-6"),h(m,"rel","noopener noreferrer"),h(m,"target","_blank"),h(m,"href","https://simpsonresearch.ca"),X(m,"background","none"),h(m,"class","text-amber-500 font-black hover:underline tracking-wider"),h(n,"class","text-black text-lg mt-2 "),h(L,"class","text-black text-4xl mt-10 font-black"),h(e,"class","flex flex-col items-center justify-center my-10 mx-10"),h(M,"class","my-12 w-10 h-1")},m(t,g){r(document.head,s),r(s,f),V(t,i,g),V(t,e,g),r(e,l),r(l,b),r(e,C),r(e,k),r(k,R),r(e,c),r(e,n),r(n,H),r(n,m),r(m,D),r(n,G),r(e,I),r(e,L),r(L,P),r(e,q);for(let o=0;o<u.length;o+=1)u[o].m(e,null);V(t,W,g),V(t,M,g)},p(t,[g]){if(g&1){T=t[0];let o;for(o=0;o<T.length;o+=1){const d=F(t,T,o);u[o]?u[o].p(d,g):(u[o]=J(d),u[o].c(),u[o].m(e,null))}for(;o<u.length;o+=1)u[o].d(1);u.length=T.length}},i:j,o:j,d(t){a(s),t&&a(i),t&&a(e),Z(u,t),t&&a(W),t&&a(M)}}}function re(x,s,f){let i=[];return ee(async()=>{await self.fetch("https://api.github.com/users/Simpson-Computer-Technologies-Research/repos").then(e=>e.json()).then(e=>{for(let l=0;l<e.length;l++)e[l].name.includes("STEM_CLUB")&&(e[l].name=e[l].name.replace("STEM_CLUB_Week","Stem Club Week "),f(0,i=[...i,e[l]]))}).catch(e=>console.log(e))}),[i]}class se extends K{constructor(s){super(),N(this,s,re,le,O,{})}}export{se as default};

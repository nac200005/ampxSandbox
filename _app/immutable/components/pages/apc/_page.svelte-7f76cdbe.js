import{S as N,i as O,s as Q,k,r as w,a as E,M as U,l as _,m as g,u as y,h as a,c as C,p as h,q as X,G as l,b as P,n as F,L as Z,o as ee,v as te}from"../../../chunks/index-b3cd2fd6.js";function J(x,o,m){const i=x.slice();return i[1]=o[m],i}function K(x){let o,m=x[1].name+"",i,e,r,b,A,p,R;return{c(){o=k("h2"),i=w(m),e=E(),r=k("div"),b=k("a"),A=w("Visit Github Repo"),R=E(),this.h()},l(n){o=_(n,"H2",{class:!0});var c=g(o);i=y(c,m),c.forEach(a),e=C(n),r=_(n,"DIV",{class:!0});var S=g(r);b=_(S,"A",{href:!0,rel:!0,target:!0,class:!0});var f=g(b);A=y(f,"Visit Github Repo"),f.forEach(a),R=C(S),S.forEach(a),this.h()},h(){h(o,"class","text-black text-2xl my-10"),h(b,"href",p=x[1].html_url),h(b,"rel","noopener noreferrer"),h(b,"target","_blank"),h(b,"class","bg-black px-10 py-4 text-white hover:bg-amber-400 hover:text-black"),h(r,"class","mb-6 text-center")},m(n,c){P(n,o,c),l(o,i),P(n,e,c),P(n,r,c),l(r,b),l(b,A),l(r,R)},p(n,c){c&1&&m!==(m=n[1].name+"")&&te(i,m),c&1&&p!==(p=n[1].html_url)&&h(b,"href",p)},d(n){n&&a(o),n&&a(e),n&&a(r)}}}function re(x){let o,m,i,e,r,b,A,p,R,n,c,S,f,I,L,W,H,q,M,D,V,$=x[0],u=[];for(let t=0;t<$.length;t+=1)u[t]=K(J(x,$,t));return{c(){o=k("style"),m=w(`body {
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
        }`),i=E(),e=k("div"),r=k("h2"),b=w("Simpson Research"),A=E(),p=k("h2"),R=w("Welcome to the Advanced Programming Club Curriculum!"),n=E(),c=k("h2"),S=w("Check out "),f=k("a"),I=w("Simpson Research"),L=w(" for more open-source projects!"),W=E(),H=k("h2"),q=w("Advanced Programming Club"),M=E();for(let t=0;t<u.length;t+=1)u[t].c();D=E(),V=k("div"),this.h()},l(t){const v=U("svelte-1f7bczf",document.head);o=_(v,"STYLE",{});var s=g(o);m=y(s,`body {
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
        }`),s.forEach(a),v.forEach(a),i=C(t),e=_(t,"DIV",{class:!0});var d=g(e);r=_(d,"H2",{class:!0});var z=g(r);b=y(z,"Simpson Research"),z.forEach(a),A=C(d),p=_(d,"H2",{class:!0});var Y=g(p);R=y(Y,"Welcome to the Advanced Programming Club Curriculum!"),Y.forEach(a),n=C(d),c=_(d,"H2",{class:!0});var G=g(c);S=y(G,"Check out "),f=_(G,"A",{rel:!0,target:!0,href:!0,style:!0,class:!0});var j=g(f);I=y(j,"Simpson Research"),j.forEach(a),L=y(G," for more open-source projects!"),G.forEach(a),W=C(d),H=_(d,"H2",{class:!0});var B=g(H);q=y(B,"Advanced Programming Club"),B.forEach(a),M=C(d);for(let T=0;T<u.length;T+=1)u[T].l(d);d.forEach(a),D=C(t),V=_(t,"DIV",{class:!0}),g(V).forEach(a),this.h()},h(){h(r,"class","text-black text-6xl mt-10 font-black"),h(p,"class","text-black text-lg mt-6"),h(f,"rel","noopener noreferrer"),h(f,"target","_blank"),h(f,"href","https://simpsonresearch.ca"),X(f,"background","none"),h(f,"class","text-amber-500 font-black hover:underline tracking-wider"),h(c,"class","text-black text-lg mt-2 "),h(H,"class","text-black text-4xl mt-10 font-black"),h(e,"class","flex flex-col items-center justify-center my-10 mx-10"),h(V,"class","my-12 w-10 h-1")},m(t,v){l(document.head,o),l(o,m),P(t,i,v),P(t,e,v),l(e,r),l(r,b),l(e,A),l(e,p),l(p,R),l(e,n),l(e,c),l(c,S),l(c,f),l(f,I),l(c,L),l(e,W),l(e,H),l(H,q),l(e,M);for(let s=0;s<u.length;s+=1)u[s].m(e,null);P(t,D,v),P(t,V,v)},p(t,[v]){if(v&1){$=t[0];let s;for(s=0;s<$.length;s+=1){const d=J(t,$,s);u[s]?u[s].p(d,v):(u[s]=K(d),u[s].c(),u[s].m(e,null))}for(;s<u.length;s+=1)u[s].d(1);u.length=$.length}},i:F,o:F,d(t){a(o),t&&a(i),t&&a(e),Z(u,t),t&&a(D),t&&a(V)}}}function le(x,o,m){let i=[];return ee(async()=>{await self.fetch("https://api.github.com/users/Simpson-Computer-Technologies-Research/repos?per_page=100").then(e=>e.json()).then(e=>{for(let r=0;r<e.length;r++)e[r].name.toLowerCase().includes("apc")&&(e[r].name=e[r].name.replace("APC","Advanced Programming Week "),m(0,i=[...i,e[r]]))}).catch(e=>console.log(e))}),[i]}class oe extends N{constructor(o){super(),O(this,o,le,re,Q,{})}}export{oe as default};

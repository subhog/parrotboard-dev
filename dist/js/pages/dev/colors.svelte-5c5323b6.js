import{S as te,i as se,s as le,e as m,t as k,k as p,c as y,a as E,g as F,d as g,n as I,b as M,f as W,E as n,F as B,M as ne}from"../../chunks/vendor-8c5dc6c6.js";function X(o,t,c){const s=o.slice();return s[5]=t[c],s}function Y(o){let t,c,s=o[5].name+"",l,h,e,r,i,a,b=o[5].hsl[0]+"",_,v,d,x,C,G=o[5].hsl[1]+"",j,q,D,w,H,J=o[5].hsl[2]+"",L,O,$,K=o[5].hex+"",U,z,V,Z,A,ee;return{c(){t=m("div"),c=m("div"),l=k(s),h=p(),e=m("div"),r=m("i"),i=k("H"),a=p(),_=k(b),v=p(),d=m("i"),x=k("S"),C=p(),j=k(G),q=p(),D=m("i"),w=k("L"),H=p(),L=k(J),O=p(),$=m("div"),U=k(K),z=p(),V=m("div"),A=p(),this.h()},l(S){t=y(S,"DIV",{class:!0,style:!0});var f=E(t);c=y(f,"DIV",{});var N=E(c);l=F(N,s),N.forEach(g),h=I(f),e=y(f,"DIV",{});var u=E(e);r=y(u,"I",{class:!0});var P=E(r);i=F(P,"H"),P.forEach(g),a=I(u),_=F(u,b),v=I(u),d=y(u,"I",{class:!0});var Q=E(d);x=F(Q,"S"),Q.forEach(g),C=I(u),j=F(u,G),q=I(u),D=y(u,"I",{class:!0});var R=E(D);w=F(R,"L"),R.forEach(g),H=I(u),L=F(u,J),u.forEach(g),O=I(f),$=y(f,"DIV",{});var T=E($);U=F(T,K),T.forEach(g),z=I(f),V=y(f,"DIV",{class:!0,style:!0}),E(V).forEach(g),A=I(f),f.forEach(g),this.h()},h(){M(r,"class","svelte-1v7nv4e"),M(d,"class","svelte-1v7nv4e"),M(D,"class","svelte-1v7nv4e"),M(V,"class","check svelte-1v7nv4e"),M(V,"style",Z=`background-color: ${o[5].hex};`),M(t,"class","color svelte-1v7nv4e"),M(t,"style",ee=`background-color: hsl(${o[5].hsl[0]}, ${o[5].hsl[1]}%, ${o[5].hsl[2]}%);`)},m(S,f){W(S,t,f),n(t,c),n(c,l),n(t,h),n(t,e),n(e,r),n(r,i),n(e,a),n(e,_),n(e,v),n(e,d),n(d,x),n(e,C),n(e,j),n(e,q),n(e,D),n(D,w),n(e,H),n(e,L),n(t,O),n(t,$),n($,U),n(t,z),n(t,V),n(t,A)},p:B,d(S){S&&g(t)}}}function ae(o){let t,c=o[0],s=[];for(let l=0;l<c.length;l+=1)s[l]=Y(X(o,c,l));return{c(){t=m("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){t=y(l,"DIV",{class:!0});var h=E(t);for(let e=0;e<s.length;e+=1)s[e].l(h);h.forEach(g),this.h()},h(){M(t,"class","colors svelte-1v7nv4e")},m(l,h){W(l,t,h);for(let e=0;e<s.length;e+=1)s[e].m(t,null)},p(l,[h]){if(h&1){c=l[0];let e;for(e=0;e<c.length;e+=1){const r=X(l,c,e);s[e]?s[e].p(r,h):(s[e]=Y(r),s[e].c(),s[e].m(t,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=c.length}},i:B,o:B,d(l){l&&g(t),ne(s,l)}}}function re(o){const t=e=>{const i=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"#"+"000000".substring(i.length)+i},c=e=>{const r=e[0]/60,i=e[1]/100;let a=e[2]/100;const b=Math.floor(r)%6,_=r-Math.floor(r),v=255*a*(1-i),d=255*a*(1-i*_),x=255*a*(1-i*(1-_));switch(a*=255,b){case 0:return[a,x,v];case 1:return[d,a,v];case 2:return[v,a,x];case 3:return[v,d,a];case 4:return[x,v,a];case 5:return[a,v,d]}},s=e=>{const r=e[0];let i=e[1]/100,a=e[2]/100,b=i;const _=Math.max(a,.01);a*=2,i*=a<=1?a:2-a,b*=_<=1?_:2-_;const v=(a+i)/2,d=a===0?2*b/(_+b):2*i/(a+i);return[r,d*100,v*100]},l=e=>t(c(s(e)));return[Object.entries({earth:[7,75,35],fire:[21,80,50],energy:[45,90,60],lime:[85,50,50],air:[180,40,50],water:[210,60,40],entropy:[285,40,30],balance:[0,0,70]}).map(([e,r])=>({name:e,hsl:r,hex:l(r)}))]}class ce extends te{constructor(t){super();se(this,t,re,ae,le,{})}}export{ce as default};
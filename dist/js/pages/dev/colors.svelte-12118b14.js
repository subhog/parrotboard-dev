import{S as te,i as le,s as se,e as m,t as k,j as p,c as y,a as E,g as x,d as g,l as I,b as D,f as W,E as n,J as z,R as ne}from"../../chunks/vendor-2046ff8d.js";function X(o,t,c){const l=o.slice();return l[5]=t[c],l}function Y(o){let t,c,l=o[5].name+"",s,h,e,r,i,a,b=o[5].hsl[0]+"",_,v,d,F,j,A=o[5].hsl[1]+"",C,q,M,w,H,B=o[5].hsl[2]+"",L,J,$,G=o[5].hex+"",O,R,V,Z,U,ee;return{c(){t=m("div"),c=m("div"),s=k(l),h=p(),e=m("div"),r=m("i"),i=k("H"),a=p(),_=k(b),v=p(),d=m("i"),F=k("S"),j=p(),C=k(A),q=p(),M=m("i"),w=k("L"),H=p(),L=k(B),J=p(),$=m("div"),O=k(G),R=p(),V=m("div"),U=p(),this.h()},l(S){t=y(S,"DIV",{class:!0,style:!0});var f=E(t);c=y(f,"DIV",{});var K=E(c);s=x(K,l),K.forEach(g),h=I(f),e=y(f,"DIV",{});var u=E(e);r=y(u,"I",{class:!0});var N=E(r);i=x(N,"H"),N.forEach(g),a=I(u),_=x(u,b),v=I(u),d=y(u,"I",{class:!0});var P=E(d);F=x(P,"S"),P.forEach(g),j=I(u),C=x(u,A),q=I(u),M=y(u,"I",{class:!0});var Q=E(M);w=x(Q,"L"),Q.forEach(g),H=I(u),L=x(u,B),u.forEach(g),J=I(f),$=y(f,"DIV",{});var T=E($);O=x(T,G),T.forEach(g),R=I(f),V=y(f,"DIV",{class:!0,style:!0}),E(V).forEach(g),U=I(f),f.forEach(g),this.h()},h(){D(r,"class","svelte-1v7nv4e"),D(d,"class","svelte-1v7nv4e"),D(M,"class","svelte-1v7nv4e"),D(V,"class","check svelte-1v7nv4e"),D(V,"style",Z=`background-color: ${o[5].hex};`),D(t,"class","color svelte-1v7nv4e"),D(t,"style",ee=`background-color: hsl(${o[5].hsl[0]}, ${o[5].hsl[1]}%, ${o[5].hsl[2]}%);`)},m(S,f){W(S,t,f),n(t,c),n(c,s),n(t,h),n(t,e),n(e,r),n(r,i),n(e,a),n(e,_),n(e,v),n(e,d),n(d,F),n(e,j),n(e,C),n(e,q),n(e,M),n(M,w),n(e,H),n(e,L),n(t,J),n(t,$),n($,O),n(t,R),n(t,V),n(t,U)},p:z,d(S){S&&g(t)}}}function ae(o){let t,c=o[0],l=[];for(let s=0;s<c.length;s+=1)l[s]=Y(X(o,c,s));return{c(){t=m("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){t=y(s,"DIV",{class:!0});var h=E(t);for(let e=0;e<l.length;e+=1)l[e].l(h);h.forEach(g),this.h()},h(){D(t,"class","colors svelte-1v7nv4e")},m(s,h){W(s,t,h);for(let e=0;e<l.length;e+=1)l[e].m(t,null)},p(s,[h]){if(h&1){c=s[0];let e;for(e=0;e<c.length;e+=1){const r=X(s,c,e);l[e]?l[e].p(r,h):(l[e]=Y(r),l[e].c(),l[e].m(t,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=c.length}},i:z,o:z,d(s){s&&g(t),ne(l,s)}}}function re(o){const t=e=>{const i=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"#"+"000000".substring(i.length)+i},c=e=>{const r=e[0]/60,i=e[1]/100;let a=e[2]/100;const b=Math.floor(r)%6,_=r-Math.floor(r),v=255*a*(1-i),d=255*a*(1-i*_),F=255*a*(1-i*(1-_));switch(a*=255,b){case 0:return[a,F,v];case 1:return[d,a,v];case 2:return[v,a,F];case 3:return[v,d,a];case 4:return[F,v,a];case 5:return[a,v,d]}},l=e=>{const r=e[0];let i=e[1]/100,a=e[2]/100,b=i;const _=Math.max(a,.01);a*=2,i*=a<=1?a:2-a,b*=_<=1?_:2-_;const v=(a+i)/2,d=a===0?2*b/(_+b):2*i/(a+i);return[r,d*100,v*100]},s=e=>t(c(l(e)));return[Object.entries({earth:[7,75,35],fire:[21,80,50],energy:[45,90,60],lime:[85,50,50],air:[180,40,50],water:[210,60,40],entropy:[285,40,30],balance:[0,0,70]}).map(([e,r])=>({name:e,hsl:r,hex:s(r)}))]}class ce extends te{constructor(t){super();le(this,t,re,ae,se,{})}}export{ce as default};

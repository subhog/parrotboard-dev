var x=Object.defineProperty;var M=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var V=(s,t,e)=>t in s?x(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,X=(s,t)=>{for(var e in t||(t={}))B.call(t,e)&&V(s,e,t[e]);if(M)for(var e of M(t))J.call(t,e)&&V(s,e,t[e]);return s};import{S as K,i as Q,s as T,D as U,e as Y,c as k,a as q,d as C,b as p,f as Z,E as $,F as ee,G as se,H as te,p as ae,n as ne,I as w,u as ie,P as le,C as h,a0 as oe,a1 as F,R as G,a2 as N}from"./vendor-2ee6ea9e.js";/* empty css                                              */function re(s){let t,e,l,r;const c=s[15].default,i=U(c,s,s[14],null);return{c(){t=Y("div"),e=Y("div"),i&&i.c(),this.h()},l(n){t=k(n,"DIV",{class:!0});var f=q(t);e=k(f,"DIV",{class:!0,style:!0});var _=q(e);i&&i.l(_),_.forEach(C),f.forEach(C),this.h()},h(){p(e,"class","scale svelte-1nyz9uj"),p(e,"style",l=`width: ${s[1]}px; height: ${s[2]}px; left: ${s[3]}px; top: ${s[4]}px; transform: scale(${s[5]});`),p(t,"class","box svelte-1nyz9uj")},m(n,f){Z(n,t,f),$(t,e),i&&i.m(e,null),s[16](t),r=!0},p(n,[f]){i&&i.p&&(!r||f&16384)&&ee(i,c,n,n[14],r?te(c,n[14],f,null):se(n[14]),null),(!r||f&62&&l!==(l=`width: ${n[1]}px; height: ${n[2]}px; left: ${n[3]}px; top: ${n[4]}px; transform: scale(${n[5]});`))&&p(e,"style",l)},i(n){r||(ae(i,n),r=!0)},o(n){ne(i,n),r=!1},d(n){n&&C(t),i&&i.d(n),s[16](null)}}}function fe(s,t,e){let l,r,c,i,n,{$$slots:f={},$$scope:_}=t,{sizes:b=void 0}=t,{w:g=160}=t,{h:v=160}=t,d;const z=h(0);w(s,z,a=>e(1,l=a));const S=h(0);w(s,S,a=>e(2,r=a));const j=h(0);w(s,j,a=>e(3,c=a));const E=h(0);w(s,E,a=>e(4,i=a));const D=h(0);w(s,D,a=>e(5,n=a));const O=h(""),y=()=>{let a=[{name:"default",w:g,h:v}];b&&(a=Object.entries(b).map(([o,H])=>X({name:o},H)));let I=0,u=null;const W=d.offsetWidth,A=d.offsetHeight;for(let o of a){const H=W/o.w,R=A/o.h,m=Math.min(H,R);let L=o.w*o.h/(m*m);L>I&&(I=L,u={w:o.w,h:o.h,x:(W-m*o.w)/2,y:(A-m*o.h)/2,s:m,name:o.name})}u&&(z.set(u.w),S.set(u.h),j.set(u.x),E.set(u.y),D.set(u.s),O.set(u.name))};ie(()=>{y(),typeof window!="undefined"&&window.addEventListener("resize",y)}),le(()=>{typeof window!="undefined"&&window.removeEventListener("resize",y)});function P(a){oe[a?"unshift":"push"](()=>{d=a,e(0,d)})}return s.$$set=a=>{"sizes"in a&&e(11,b=a.sizes),"w"in a&&e(12,g=a.w),"h"in a&&e(13,v=a.h),"$$scope"in a&&e(14,_=a.$$scope)},s.$$.update=()=>{s.$$.dirty&14337&&d&&y()},[d,l,r,c,i,n,z,S,j,E,D,b,g,v,_,f,P]}class he extends K{constructor(t){super();Q(this,t,fe,re,T,{sizes:11,w:12,h:13})}}const _e=(s,t)=>({subscribe:e=>s.subscribe(l=>e(F(l,t))),set:e=>s.update(G(l=>{N(l,t,e)})),update:e=>s.update(G(l=>{N(l,t,e(F(l,t)))}))});export{he as S,_e as a};

import{S as Y,i as H,s as B,v as S,w as V,x as M,p as b,n as k,A as L,j as P,l as R,f as I,d as u,t as C,g as T,J as G,e as w,c as y,a as E,b as v,_ as ue,E as $,h as K,M as ee,L as Q,k as U,P as re,Q as se,R as ne,K as Le,O as Pe,m as z,o as J,I as A,N as he,u as Re,T as Ne}from"../chunks/vendor-2046ff8d.js";import{S as de,M as Ge,a as q}from"../chunks/MultisetFlavorSelector-a5aab036.js";import{e as Ae,g as Ce,S as Te,h as j,n as je,j as Fe,k as Be,l as qe,m as Oe,o as Z,p as me,W as Ye,D as te,H as He,q as We,r as _e,u as Xe,v as ae,b as ze}from"../chunks/PlaySectionMenu.svelte_svelte_type_style_lang-68ddda4a.js";/* empty css                                                                */import{S as ie}from"../chunks/index-07fd6a39.js";import{M as Je}from"../chunks/MultisetCardFront-0f3b8692.js";import"../chunks/array-20a0621b.js";function Ke(s){let e;return{c(){e=C("Multiset Practice")},l(l){e=T(l,"Multiset Practice")},m(l,t){I(l,e,t)},d(l){l&&u(e)}}}function Qe(s){let e,l;return e=new Ge({}),e.$on("select",s[0]),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,r){M(e,t,r),l=!0},p:G,i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Ue(s){let e,l,t,r;return e=new ie.Header({props:{$$slots:{default:[Ke]},$$scope:{ctx:s}}}),t=new ie.Content({props:{$$slots:{default:[Qe]},$$scope:{ctx:s}}}),{c(){S(e.$$.fragment),l=P(),S(t.$$.fragment)},l(n){V(e.$$.fragment,n),l=R(n),V(t.$$.fragment,n)},m(n,a){M(e,n,a),I(n,l,a),M(t,n,a),r=!0},p(n,a){const i={};a&2&&(i.$$scope={dirty:a,ctx:n}),e.$set(i);const o={};a&2&&(o.$$scope={dirty:a,ctx:n}),t.$set(o)},i(n){r||(b(e.$$.fragment,n),b(t.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),k(t.$$.fragment,n),r=!1},d(n){L(e,n),n&&u(l),L(t,n)}}}function Ze(s){let e,l;return e=new ie.Box({props:{fill:!0,$$slots:{default:[Ue]},$$scope:{ctx:s}}}),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,r){M(e,t,r),l=!0},p(t,r){const n={};r&2&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function xe(s){let e,l;return e=new de({props:{w:640,h:640,$$slots:{default:[Ze]},$$scope:{ctx:s}}}),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,r){M(e,t,r),l=!0},p(t,[r]){const n={};r&2&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function et(s){return[l=>{Ae(l.detail.flavor),Ce()}]}class tt extends Y{constructor(e){super();H(this,e,et,xe,B,{})}}function lt(s){let e,l,t,r,n,a;return{c(){e=w("div"),l=w("img"),r=P(),n=w("div"),a=C("GET READY!"),this.h()},l(i){e=y(i,"DIV",{class:!0});var o=E(e);l=y(o,"IMG",{class:!0,src:!0,alt:!0}),r=R(o),n=y(o,"DIV",{class:!0});var f=E(n);a=T(f,"GET READY!"),f.forEach(u),o.forEach(u),this.h()},h(){v(l,"class","birb svelte-11nky23"),ue(l.src,t="/assets/img/birb-yellow-m.png")||v(l,"src",t),v(l,"alt","birb"),v(n,"class","message svelte-11nky23"),v(e,"class","box svelte-11nky23")},m(i,o){I(i,e,o),$(e,l),$(e,r),$(e,n),$(n,a)},p:G,i:G,o:G,d(i){i&&u(e)}}}class rt extends Y{constructor(e){super();H(this,e,null,lt,B,{})}}function ve(s,e,l){const t=s.slice();return t[13]=e[l],t}function st(s){let e,l,t,r,n,a;return{c(){e=re("use"),this.h()},l(i){e=se(i,"use",{href:!0,x:!0,y:!0,width:!0,height:!0,class:!0}),E(e).forEach(u),this.h()},h(){v(e,"href","#multiset-hex"),v(e,"x",l=s[13].x),v(e,"y",t=s[13].y),v(e,"width",r=7),v(e,"height",n=8),v(e,"class",a=""+(Pe(`hex ${s[13].color}`)+" svelte-11i0lhw"))},m(i,o){I(i,e,o)},p:G,d(i){i&&u(e)}}}function ge(s){let e,l=s[13].color&&st(s);return{c(){l&&l.c(),e=U()},l(t){l&&l.l(t),e=U()},m(t,r){l&&l.m(t,r),I(t,e,r)},p(t,r){t[13].color&&l.p(t,r)},d(t){l&&l.d(t),t&&u(e)}}}function nt(s){let e,l,t,r,n=s[8],a=[];for(let i=0;i<n.length;i+=1)a[i]=ge(ve(s,n,i));return{c(){for(let i=0;i<a.length;i+=1)a[i].c();e=P(),l=re("path"),t=P(),r=re("path"),this.h()},l(i){for(let o=0;o<a.length;o+=1)a[o].l(i);e=R(i),l=se(i,"path",{class:!0,d:!0}),E(l).forEach(u),t=R(i),r=se(i,"path",{class:!0,d:!0}),E(r).forEach(u),this.h()},h(){v(l,"class","line svelte-11i0lhw"),v(l,"d",`M${s[7]},12L${s[7]},40`),v(r,"class","line svelte-11i0lhw"),v(r,"d",`M${s[7]},122L${s[7]},150`)},m(i,o){for(let f=0;f<a.length;f+=1)a[f].m(i,o);I(i,e,o),I(i,l,o),I(i,t,o),I(i,r,o)},p(i,o){if(o&256){n=i[8];let f;for(f=0;f<n.length;f+=1){const c=ve(i,n,f);a[f]?a[f].p(c,o):(a[f]=ge(c),a[f].c(),a[f].m(e.parentNode,e))}for(;f<a.length;f+=1)a[f].d(1);a.length=n.length}},d(i){ne(a,i),i&&u(e),i&&u(l),i&&u(t),i&&u(r)}}}function $e(s){let e,l;return{c(){e=w("div"),l=C(s[3]),this.h()},l(t){e=y(t,"DIV",{class:!0});var r=E(e);l=T(r,s[3]),r.forEach(u),this.h()},h(){v(e,"class","label topLeft svelte-11i0lhw")},m(t,r){I(t,e,r),$(e,l)},p(t,r){r&8&&K(l,t[3])},d(t){t&&u(e)}}}function pe(s){let e,l;return{c(){e=w("div"),l=C(s[4]),this.h()},l(t){e=y(t,"DIV",{class:!0});var r=E(e);l=T(r,s[4]),r.forEach(u),this.h()},h(){v(e,"class","label topRight svelte-11i0lhw")},m(t,r){I(t,e,r),$(e,l)},p(t,r){r&16&&K(l,t[4])},d(t){t&&u(e)}}}function be(s){let e,l;return{c(){e=w("div"),l=C(s[5]),this.h()},l(t){e=y(t,"DIV",{class:!0});var r=E(e);l=T(r,s[5]),r.forEach(u),this.h()},h(){v(e,"class","label bottomLeft svelte-11i0lhw")},m(t,r){I(t,e,r),$(e,l)},p(t,r){r&32&&K(l,t[5])},d(t){t&&u(e)}}}function ke(s){let e,l;return{c(){e=w("div"),l=C(s[6]),this.h()},l(t){e=y(t,"DIV",{class:!0});var r=E(e);l=T(r,s[6]),r.forEach(u),this.h()},h(){v(e,"class","label bottomRight svelte-11i0lhw")},m(t,r){I(t,e,r),$(e,l)},p(t,r){r&64&&K(l,t[6])},d(t){t&&u(e)}}}function at(s){let e,l,t,r,n,a,i,o,f;l=new Te({props:{x:[0,s[0]],y:[0,s[1]],$$slots:{default:[nt]},$$scope:{ctx:s}}});let c=s[3]&&$e(s),_=s[4]&&pe(s),p=s[5]&&be(s),m=s[6]&&ke(s);return{c(){e=w("div"),S(l.$$.fragment),t=P(),c&&c.c(),r=P(),_&&_.c(),n=P(),p&&p.c(),a=P(),m&&m.c(),this.h()},l(d){e=y(d,"DIV",{class:!0});var h=E(e);V(l.$$.fragment,h),t=R(h),c&&c.l(h),r=R(h),_&&_.l(h),n=R(h),p&&p.l(h),a=R(h),m&&m.l(h),h.forEach(u),this.h()},h(){v(e,"class","card svelte-11i0lhw"),ee(e,"haserror",s[2])},m(d,h){I(d,e,h),M(l,e,null),$(e,t),c&&c.m(e,null),$(e,r),_&&_.m(e,null),$(e,n),p&&p.m(e,null),$(e,a),m&&m.m(e,null),i=!0,o||(f=Q(e,"click",s[9]),o=!0)},p(d,[h]){const g={};h&1&&(g.x=[0,d[0]]),h&2&&(g.y=[0,d[1]]),h&65536&&(g.$$scope={dirty:h,ctx:d}),l.$set(g),d[3]?c?c.p(d,h):(c=$e(d),c.c(),c.m(e,r)):c&&(c.d(1),c=null),d[4]?_?_.p(d,h):(_=pe(d),_.c(),_.m(e,n)):_&&(_.d(1),_=null),d[5]?p?p.p(d,h):(p=be(d),p.c(),p.m(e,a)):p&&(p.d(1),p=null),d[6]?m?m.p(d,h):(m=ke(d),m.c(),m.m(e,null)):m&&(m.d(1),m=null),h&4&&ee(e,"haserror",d[2])},i(d){i||(b(l.$$.fragment,d),i=!0)},o(d){k(l.$$.fragment,d),i=!1},d(d){d&&u(e),L(l),c&&c.d(),_&&_.d(),p&&p.d(),m&&m.d(),o=!1,f()}}}const Ee=7,it=6;function ot(s,e,l){let{width:t=90}=e,{height:r=162}=e,{hasError:n=!1}=e,{topLeft:a=void 0}=e,{topRight:i=void 0}=e,{bottomLeft:o=void 0}=e,{bottomRight:f=void 0}=e;const c=t/2,_=r/2,p=c-7/2,m=_-8/2,d=[[-5,-1,["energy","air"]],[-4,-2,["energy","air",null,"water","air"]],[-3,-4,["energy","air",null,"water","entropy",null,"water","air"]],[-2,-4,["fire",null,"water","entropy",null,"earth","entropy",null,"water"]],[-1,-4,["energy","air",null,"earth","fire",null,"earth","entropy"]],[0,-4,["fire",null,"water","entropy",null,"energy","fire",null,"water"]],[1,-4,["energy","air",null,"water","air",null,"earth","entropy"]],[2,-4,["fire",null,"energy","air",null,"energy","fire",null,"water"]],[3,-4,["earth","fire",null,"energy","fire",null,"earth","entropy"]],[4,-2,["earth","fire",null,"earth","entropy"]],[5,-1,["earth","entropy"]]].map(([g,O,X])=>X.map((W,D)=>({x:p+(D+O)*Ee+(g+1024)%2*Ee/2,y:m+g*it,color:W})).filter(W=>W.color)).flat();function h(g){Le.call(this,s,g)}return s.$$set=g=>{"width"in g&&l(0,t=g.width),"height"in g&&l(1,r=g.height),"hasError"in g&&l(2,n=g.hasError),"topLeft"in g&&l(3,a=g.topLeft),"topRight"in g&&l(4,i=g.topRight),"bottomLeft"in g&&l(5,o=g.bottomLeft),"bottomRight"in g&&l(6,f=g.bottomRight)},[t,r,n,a,i,o,f,c,d,h]}class ft extends Y{constructor(e){super();H(this,e,ot,at,B,{width:0,height:1,hasError:2,topLeft:3,topRight:4,bottomLeft:5,bottomRight:6})}}function ct(s){let e,l,t;return{c(){e=w("div"),l=w("div"),t=C(s[0]),this.h()},l(r){e=y(r,"DIV",{class:!0});var n=E(e);l=y(n,"DIV",{class:!0});var a=E(l);t=T(a,s[0]),a.forEach(u),n.forEach(u),this.h()},h(){v(l,"class","inner svelte-1t7qbgq"),v(e,"class","clock svelte-1t7qbgq")},m(r,n){I(r,e,n),$(e,l),$(l,t)},p(r,[n]){n&1&&K(t,r[0])},i:G,o:G,d(r){r&&u(e)}}}function ut(s,e,l){let{value:t=""}=e;return s.$$set=r=>{"value"in r&&l(0,t=r.value)},[t]}class ht extends Y{constructor(e){super();H(this,e,ut,ct,B,{value:0})}}function dt(s){let e,l,t,r,n;return{c(){e=w("div"),l=w("div"),t=C("DONE"),this.h()},l(a){e=y(a,"DIV",{class:!0});var i=E(e);l=y(i,"DIV",{class:!0});var o=E(l);t=T(o,"DONE"),o.forEach(u),i.forEach(u),this.h()},h(){v(l,"class","doneButtonInner svelte-7s6oog"),v(e,"class","doneButton svelte-7s6oog"),ee(e,"hasError",s[2])},m(a,i){I(a,e,i),$(e,l),$(l,t),r||(n=Q(e,"click",qe),r=!0)},p(a,i){i&4&&ee(e,"hasError",a[2])},i:G,o:G,d(a){a&&u(e),r=!1,n()}}}function mt(s){let e,l;return e=new ft({props:{topLeft:s[0].toString(),bottomLeft:"\u2199",hasError:s[2]}}),e.$on("click",Oe),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,r){M(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.topLeft=t[0].toString()),r&4&&(n.hasError=t[2]),e.$set(n)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function _t(s){let e,l,t,r,n,a,i,o,f;const c=[mt,dt],_=[];function p(m,d){return m[0]>0?0:1}return t=p(s),r=_[t]=c[t](s),o=new ht({props:{value:s[1]}}),{c(){e=w("div"),l=w("div"),r.c(),n=P(),a=P(),i=w("div"),S(o.$$.fragment),this.h()},l(m){e=y(m,"DIV",{class:!0});var d=E(e);l=y(d,"DIV",{class:!0});var h=E(l);r.l(h),h.forEach(u),n=R(d),a=R(d),i=y(d,"DIV",{class:!0});var g=E(i);V(o.$$.fragment,g),g.forEach(u),d.forEach(u),this.h()},h(){v(l,"class","element svelte-7s6oog"),v(i,"class","element svelte-7s6oog"),v(e,"class","box svelte-7s6oog")},m(m,d){I(m,e,d),$(e,l),_[t].m(l,null),$(e,n),$(e,a),$(e,i),M(o,i,null),f=!0},p(m,[d]){let h=t;t=p(m),t===h?_[t].p(m,d):(z(),k(_[h],1,1,()=>{_[h]=null}),J(),r=_[t],r?r.p(m,d):(r=_[t]=c[t](m),r.c()),b(r,1),r.m(l,null));const g={};d&2&&(g.value=m[1]),o.$set(g)},i(m){f||(b(r),b(o.$$.fragment,m),f=!0)},o(m){k(r),k(o.$$.fragment,m),f=!1},d(m){m&&u(e),_[t].d(),L(o)}}}function vt(s,e,l){let t,r,n,a,i,o,f,c;A(s,j,h=>l(10,o=h)),A(s,je,h=>l(11,f=h));const _=q(j,"game.flavor");A(s,_,h=>l(8,a=h));const p=q(j,"game.table");A(s,p,h=>l(7,n=h));const m=q(j,"game.deck");A(s,m,h=>l(9,i=h));const d=q(j,"dealError");return A(s,d,h=>l(2,c=h)),s.$$.update=()=>{s.$$.dirty&3072&&l(1,t=Fe(f-o.startTime)),s.$$.dirty&512&&l(0,r=(i==null?void 0:i.length)||0),s.$$.dirty&384&&n&&Be.getMatchCount(a,n)},[r,t,c,_,p,m,d,n,a,i,o,f]}class gt extends Y{constructor(e){super();H(this,e,vt,_t,B,{})}}function we(s,e,l){const t=s.slice();return t[17]=e[l],t}function ye(s,e,l){const t=s.slice();return t[20]=e[l],t}function De(s){let e,l,t,r,n,a,i;return t=new de({props:{w:s[4],h:s[3],$$slots:{default:[$t]},$$scope:{ctx:s}}}),a=new gt({}),{c(){e=w("div"),l=w("div"),S(t.$$.fragment),r=P(),n=w("div"),S(a.$$.fragment),this.h()},l(o){e=y(o,"DIV",{class:!0});var f=E(e);l=y(f,"DIV",{class:!0});var c=E(l);V(t.$$.fragment,c),c.forEach(u),r=R(f),n=y(f,"DIV",{class:!0});var _=E(n);V(a.$$.fragment,_),_.forEach(u),f.forEach(u),this.h()},h(){v(l,"class","scale svelte-1nfvf7s"),v(n,"class","menu svelte-1nfvf7s"),v(e,"class","box svelte-1nfvf7s")},m(o,f){I(o,e,f),$(e,l),M(t,l,null),$(e,r),$(e,n),M(a,n,null),i=!0},p(o,f){const c={};f&16&&(c.w=o[4]),f&8&&(c.h=o[3]),f&8388807&&(c.$$scope={dirty:f,ctx:o}),t.$set(c)},i(o){i||(b(t.$$.fragment,o),b(a.$$.fragment,o),i=!0)},o(o){k(t.$$.fragment,o),k(a.$$.fragment,o),i=!1},d(o){o&&u(e),L(t),L(a)}}}function Ie(s){let e=s[1][s[20]].toString(),l,t,r=Se(s);return{c(){r.c(),l=U()},l(n){r.l(n),l=U()},m(n,a){r.m(n,a),I(n,l,a),t=!0},p(n,a){a&3&&B(e,e=n[1][n[20]].toString())?(z(),k(r,1,1,G),J(),r=Se(n),r.c(),b(r),r.m(l.parentNode,l)):r.p(n,a)},i(n){t||(b(r),t=!0)},o(n){k(r),t=!1},d(n){n&&u(l),r.d(n)}}}function Se(s){let e,l;return e=new Je({props:{flavor:s[2],card:s[1][s[20]],selected:s[6][s[20]],haserror:s[7][s[20]]}}),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,r){M(e,t,r),l=!0},p(t,r){const n={};r&4&&(n.flavor=t[2]),r&3&&(n.card=t[1][t[20]]),r&65&&(n.selected=t[6][t[20]]),r&129&&(n.haserror=t[7][t[20]]),e.$set(n)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Ve(s){let e,l,t,r,n,a=s[1][s[20]]&&Ie(s);function i(){return s[14](s[20])}function o(){return s[15](s[20])}return{c(){e=w("div"),l=w("div"),a&&a.c(),this.h()},l(f){e=y(f,"DIV",{class:!0});var c=E(e);l=y(c,"DIV",{class:!0});var _=E(l);a&&a.l(_),_.forEach(u),c.forEach(u),this.h()},h(){v(l,"class","card svelte-1nfvf7s"),v(e,"class","spot svelte-1nfvf7s")},m(f,c){I(f,e,c),$(e,l),a&&a.m(l,null),t=!0,r||(n=[Q(e,"click",i),Q(e,"touchend",o,{passive:!0})],r=!0)},p(f,c){s=f,s[1][s[20]]?a?(a.p(s,c),c&3&&b(a,1)):(a=Ie(s),a.c(),b(a,1),a.m(l,null)):a&&(z(),k(a,1,1,()=>{a=null}),J())},i(f){t||(b(a),t=!0)},o(f){k(a),t=!1},d(f){f&&u(e),a&&a.d(),r=!1,he(n)}}}function Me(s){let e,l,t,r=s[17],n=[];for(let i=0;i<r.length;i+=1)n[i]=Ve(ye(s,r,i));const a=i=>k(n[i],1,1,()=>{n[i]=null});return{c(){e=w("div");for(let i=0;i<n.length;i+=1)n[i].c();l=P(),this.h()},l(i){e=y(i,"DIV",{class:!0});var o=E(e);for(let f=0;f<n.length;f+=1)n[f].l(o);l=R(o),o.forEach(u),this.h()},h(){v(e,"class","row svelte-1nfvf7s")},m(i,o){I(i,e,o);for(let f=0;f<n.length;f+=1)n[f].m(e,null);$(e,l),t=!0},p(i,o){if(o&8391){r=i[17];let f;for(f=0;f<r.length;f+=1){const c=ye(i,r,f);n[f]?(n[f].p(c,o),b(n[f],1)):(n[f]=Ve(c),n[f].c(),b(n[f],1),n[f].m(e,l))}for(z(),f=r.length;f<n.length;f+=1)a(f);J()}},i(i){if(!t){for(let o=0;o<r.length;o+=1)b(n[o]);t=!0}},o(i){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)k(n[o]);t=!1},d(i){i&&u(e),ne(n,i)}}}function $t(s){let e,l,t=s[0],r=[];for(let a=0;a<t.length;a+=1)r[a]=Me(we(s,t,a));const n=a=>k(r[a],1,1,()=>{r[a]=null});return{c(){e=w("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=y(a,"DIV",{class:!0});var i=E(e);for(let o=0;o<r.length;o+=1)r[o].l(i);i.forEach(u),this.h()},h(){v(e,"class","cards svelte-1nfvf7s")},m(a,i){I(a,e,i);for(let o=0;o<r.length;o+=1)r[o].m(e,null);l=!0},p(a,i){if(i&8391){t=a[0];let o;for(o=0;o<t.length;o+=1){const f=we(a,t,o);r[o]?(r[o].p(f,i),b(r[o],1)):(r[o]=Me(f),r[o].c(),b(r[o],1),r[o].m(e,null))}for(z(),o=t.length;o<r.length;o+=1)n(o);J()}},i(a){if(!l){for(let i=0;i<t.length;i+=1)b(r[i]);l=!0}},o(a){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)k(r[i]);l=!1},d(a){a&&u(e),ne(r,a)}}}function pt(s){let e,l,t=s[5]===Z.PLAYING&&De(s);return{c(){t&&t.c(),e=U()},l(r){t&&t.l(r),e=U()},m(r,n){t&&t.m(r,n),I(r,e,n),l=!0},p(r,[n]){r[5]===Z.PLAYING?t?(t.p(r,n),n&32&&b(t,1)):(t=De(r),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(z(),k(t,1,1,()=>{t=null}),J())},i(r){l||(b(t),l=!0)},o(r){k(t),l=!1},d(r){t&&t.d(r),r&&u(e)}}}function bt(s,e,l){let t,r,n,a,i;const o=q(j,"status");A(s,o,D=>l(5,n=D));const f=q(j,"game.flavor");A(s,f,D=>l(2,r=D));const c=q(j,"game.table");A(s,c,D=>l(1,t=D));const _=q(j,"game.selected");A(s,_,D=>l(6,a=D));const p=q(j,"game.errors");A(s,p,D=>l(7,i=D));let m=1,d=1,h=[],g=!1;const O=(D,N)=>{if(N)g=!0;else if(g)return;t[D]&&We(D)},X=D=>O(D,!1),W=D=>O(D,!0);return s.$$.update=()=>{if(s.$$.dirty&7){let D=r.tableCards/3,N=(t==null?void 0:t.length)/3||D;l(0,h=[[],[],[]]),l(4,d=2*me+N*(Ye+te)-te),l(3,m=2*me+3*(He+te)-te);for(let F=0;F<N;F++)h[0].push(0+F*3),h[1].push(1+F*3),h[2].push(2+F*3)}},[h,t,r,m,d,n,a,i,o,f,c,_,p,O,X,W]}class kt extends Y{constructor(e){super();H(this,e,bt,pt,B,{})}}function Et(s){let e,l,t,r,n,a,i,o,f=_e(s[0].totalTime)+"",c,_,p,m,d,h,g,O,X,W;return{c(){e=w("div"),l=w("img"),r=P(),n=w("div"),a=w("div"),i=C(`GAME COMPLETED IN
      `),o=w("div"),c=C(f),_=P(),p=w("div"),m=w("div"),d=C("Play again!"),h=P(),g=w("div"),O=C("Select different deck"),this.h()},l(D){e=y(D,"DIV",{class:!0});var N=E(e);l=y(N,"IMG",{class:!0,src:!0,alt:!0}),r=R(N),n=y(N,"DIV",{class:!0});var F=E(n);a=y(F,"DIV",{class:!0});var le=E(a);i=T(le,`GAME COMPLETED IN
      `),o=y(le,"DIV",{class:!0});var oe=E(o);c=T(oe,f),oe.forEach(u),le.forEach(u),_=R(F),p=y(F,"DIV",{class:!0});var x=E(p);m=y(x,"DIV",{class:!0});var fe=E(m);d=T(fe,"Play again!"),fe.forEach(u),h=R(x),g=y(x,"DIV",{class:!0});var ce=E(g);O=T(ce,"Select different deck"),ce.forEach(u),x.forEach(u),F.forEach(u),N.forEach(u),this.h()},h(){v(l,"class","birb svelte-1tey1lf"),ue(l.src,t="/assets/img/birb/birb-yellow-m.png")||v(l,"src",t),v(l,"alt","birb"),v(o,"class","time svelte-1tey1lf"),v(a,"class","message svelte-1tey1lf"),v(m,"class","button svelte-1tey1lf"),v(g,"class","button svelte-1tey1lf"),v(p,"class","menu"),v(n,"class","overlay svelte-1tey1lf"),v(e,"class","box svelte-1tey1lf")},m(D,N){I(D,e,N),$(e,l),$(e,r),$(e,n),$(n,a),$(a,i),$(a,o),$(o,c),$(n,_),$(n,p),$(p,m),$(m,d),$(p,h),$(p,g),$(g,O),X||(W=[Q(m,"click",s[1]),Q(g,"click",s[2])],X=!0)},p(D,[N]){N&1&&f!==(f=_e(D[0].totalTime)+"")&&K(c,f)},i:G,o:G,d(D){D&&u(e),X=!1,he(W)}}}function wt(s,e,l){let t;return A(s,j,a=>l(0,t=a)),[t,()=>{Xe()},()=>{ae()}]}class yt extends Y{constructor(e){super();H(this,e,wt,Et,B,{})}}function Dt(s){let e,l;return e=new yt({}),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,r){M(e,t,r),l=!0},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function It(s){let e,l;return e=new kt({}),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,r){M(e,t,r),l=!0},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function St(s){let e,l;return e=new rt({}),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,r){M(e,t,r),l=!0},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Vt(s){let e,l;return e=new tt({}),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,r){M(e,t,r),l=!0},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Mt(s){let e,l,t,r,n;const a=[Vt,St,It,Dt],i=[];function o(f,c){return f[0]===Z.CONFIGURING?0:f[0]===Z.READY?1:f[0]===Z.PLAYING?2:f[0]===Z.DONE?3:-1}return~(e=o(s))&&(l=i[e]=a[e](s)),r=new ze({}),{c(){l&&l.c(),t=P(),S(r.$$.fragment)},l(f){l&&l.l(f),t=R(f),V(r.$$.fragment,f)},m(f,c){~e&&i[e].m(f,c),I(f,t,c),M(r,f,c),n=!0},p(f,[c]){let _=e;e=o(f),e!==_&&(l&&(z(),k(i[_],1,1,()=>{i[_]=null}),J()),~e?(l=i[e],l||(l=i[e]=a[e](f),l.c()),b(l,1),l.m(t.parentNode,t)):l=null)},i(f){n||(b(l),b(r.$$.fragment,f),n=!0)},o(f){k(l),k(r.$$.fragment,f),n=!1},d(f){~e&&i[e].d(f),f&&u(t),L(r,f)}}}function Lt(s,e,l){let t;Re(()=>{ae()}),Ne(()=>{ae()});const r=q(j,"status");return A(s,r,n=>l(0,t=n)),[t,r]}class Pt extends Y{constructor(e){super();H(this,e,Lt,Mt,B,{})}}function Rt(s){let e,l;return e=new Pt({}),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,r){M(e,t,r),l=!0},p:G,i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}class Bt extends Y{constructor(e){super();H(this,e,null,Rt,B,{})}}export{Bt as default};

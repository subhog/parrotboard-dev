import{S as P,i as C,s as V,e as k,c as w,a as y,d,b as S,f as B,F as I,A as te,a4 as ne,a5 as le,j as v,m as A,o as E,x as _,u as $,v as x,k as T,n as D,t as re,g as oe,E as j,r as F,w as G,X as R}from"../chunks/vendor-02c9792e.js";/* empty css                                                   */import{P as ae,S as H}from"../chunks/index-f84ca534.js";const M=["alarm-clock","album","alert-triangle","anchor","aperture","archive","arrow-big-down","arrow-down-circle","asterisk","at-sign","award","axe","banknote","battery-full","beaker","bell","bike","binary","book","bookmark","bot","box","box-select","briefcase","brush","bug","building","calendar","camera","car","check-circle","circle","clipboard-check","clock","cloud","cloud-lightning","cloud-moon","cloud-sun","clover","coffee","coins","columns","command","compass","contact","contrast","copy","cpu","credit-card","cross","crosshair","crown","database","disc","droplet","edit-2","expand","eye","feather","film","flag","flag-triangle-left","flame","flashlight","flask-conical","flask-round","form-input","frown","gamepad-2","gem","ghost","gift","glasses","globe","grid","hammer","hand","haze","headphones","heart","hexagon","home","image","infinity","key","landmark","layout-dashboard","life-buoy","lightbulb","loader","mail","map","map-pin","megaphone","meh","message-circle","mic","minus-square","moon","mountain-snow","mouse-pointer-2","music","network","package","palette","paperclip","pen-tool","pencil","person-standing","phone","piggy-bank","pipette","plane","power","pointer","printer","radio","ruler","rocking-chair","scale","scissors","settings","sheet","shield","shirt","shopping-cart","shovel","skull","smile","snowflake","speaker","sprout","star","sun","sunrise","target","tent","thermometer","timer","toggle-left","trash-2","triangle","verified","watch","wind","wrench","zap"];function ce(s){let e;return{c(){e=k("i"),this.h()},l(n){e=w(n,"I",{"icon-name":!0}),y(e).forEach(d),this.h()},h(){S(e,"icon-name",s[0])},m(n,t){B(n,e,t)},p(n,[t]){t&1&&S(e,"icon-name",n[0])},i:I,o:I,d(n){n&&d(e)}}}function se(s,e,n){let{icon:t}=e;return te(()=>{ne({icons:le})}),s.$$set=r=>{"icon"in r&&n(0,t=r.icon)},[t]}class L extends P{constructor(e){super();C(this,e,se,ce,V,{icon:0})}}const q=s=>Math.floor(Math.random()*s);Array.range=function(s){return new Array(s).fill(void 0).map((e,n)=>n)};Array.prototype.sample=function(){return this[q(this.length)]};Array.prototype.sampleFew=function(s){const e=[...this],n=Math.min(s,e.length);for(let t=0;t<n;t+=1){const r=t+q(e.length-t);if(t===r)continue;const c=e[t];e[t]=e[r],e[r]=c}return e.slice(0,n)};Array.prototype.shuffle=function(){return this.sampleFew(this.length)};Array.prototype.unique=function(){return[...new Set(this)]};const ie=s=>{let e=Array.range(s).map(()=>M.sampleFew(2)),n=Array.range(s).map(()=>M.sampleFew(2)),t=Array.range(s).map((g,m)=>Array.range(s).map((p,h)=>[...e[m],...n[h]].unique().sampleFew(3)));const r=q(s),c=q(s),u=q(t[r][c].length),l=[...e[r],...n[c]];let o=M.sample();for(;l.includes(o);)o=M.sample();return t[r][c][u]=o,console.log("RCI",r,c,u),{rows:e,cols:n,grid:t}};function X(s,e,n){const t=s.slice();return t[2]=e[n],t}function J(s,e,n){const t=s.slice();return t[5]=e[n],t}function K(s,e,n){const t=s.slice();return t[8]=e[n],t}function N(s,e,n){const t=s.slice();return t[8]=e[n],t}function O(s,e,n){const t=s.slice();return t[5]=e[n],t}function Q(s,e,n){const t=s.slice();return t[8]=e[n],t}function fe(s){let e;return{c(){e=re("GRID!")},l(n){e=oe(n,"GRID!")},m(n,t){B(n,e,t)},d(n){n&&d(e)}}}function U(s){let e,n;return e=new L({props:{icon:s[8]}}),{c(){v(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p:I,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function W(s){let e,n,t,r=s[0].cols[s[5]],c=[];for(let l=0;l<r.length;l+=1)c[l]=U(Q(s,r,l));const u=l=>$(c[l],1,1,()=>{c[l]=null});return{c(){e=k("td");for(let l=0;l<c.length;l+=1)c[l].c();n=T(),this.h()},l(l){e=w(l,"TD",{class:!0});var o=y(e);for(let g=0;g<c.length;g+=1)c[g].l(o);n=D(o),o.forEach(d),this.h()},h(){S(e,"class","field svelte-1y3hcfj")},m(l,o){B(l,e,o);for(let g=0;g<c.length;g+=1)c[g].m(e,null);j(e,n),t=!0},p(l,o){if(o&3){r=l[0].cols[l[5]];let g;for(g=0;g<r.length;g+=1){const m=Q(l,r,g);c[g]?(c[g].p(m,o),_(c[g],1)):(c[g]=U(m),c[g].c(),_(c[g],1),c[g].m(e,n))}for(F(),g=r.length;g<c.length;g+=1)u(g);G()}},i(l){if(!t){for(let o=0;o<r.length;o+=1)_(c[o]);t=!0}},o(l){c=c.filter(Boolean);for(let o=0;o<c.length;o+=1)$(c[o]);t=!1},d(l){l&&d(e),R(c,l)}}}function Y(s){let e,n;return e=new L({props:{icon:s[8]}}),{c(){v(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p:I,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function Z(s){let e,n;return e=new L({props:{icon:s[8]}}),{c(){v(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p:I,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function z(s){let e,n,t=s[0].grid[s[2]][s[5]],r=[];for(let u=0;u<t.length;u+=1)r[u]=Z(K(s,t,u));const c=u=>$(r[u],1,1,()=>{r[u]=null});return{c(){e=k("td");for(let u=0;u<r.length;u+=1)r[u].c();this.h()},l(u){e=w(u,"TD",{class:!0});var l=y(e);for(let o=0;o<r.length;o+=1)r[o].l(l);l.forEach(d),this.h()},h(){S(e,"class","field svelte-1y3hcfj")},m(u,l){B(u,e,l);for(let o=0;o<r.length;o+=1)r[o].m(e,null);n=!0},p(u,l){if(l&3){t=u[0].grid[u[2]][u[5]];let o;for(o=0;o<t.length;o+=1){const g=K(u,t,o);r[o]?(r[o].p(g,l),_(r[o],1)):(r[o]=Z(g),r[o].c(),_(r[o],1),r[o].m(e,null))}for(F(),o=t.length;o<r.length;o+=1)c(o);G()}},i(u){if(!n){for(let l=0;l<t.length;l+=1)_(r[l]);n=!0}},o(u){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)$(r[l]);n=!1},d(u){u&&d(e),R(r,u)}}}function ee(s){let e,n,t,r,c,u=s[0].rows[s[2]],l=[];for(let h=0;h<u.length;h+=1)l[h]=Y(N(s,u,h));const o=h=>$(l[h],1,1,()=>{l[h]=null});let g=s[1],m=[];for(let h=0;h<g.length;h+=1)m[h]=z(J(s,g,h));const p=h=>$(m[h],1,1,()=>{m[h]=null});return{c(){e=k("tr"),n=k("td");for(let h=0;h<l.length;h+=1)l[h].c();t=T();for(let h=0;h<m.length;h+=1)m[h].c();r=T(),this.h()},l(h){e=w(h,"TR",{});var i=y(e);n=w(i,"TD",{class:!0});var a=y(n);for(let f=0;f<l.length;f+=1)l[f].l(a);a.forEach(d),t=D(i);for(let f=0;f<m.length;f+=1)m[f].l(i);r=D(i),i.forEach(d),this.h()},h(){S(n,"class","field svelte-1y3hcfj")},m(h,i){B(h,e,i),j(e,n);for(let a=0;a<l.length;a+=1)l[a].m(n,null);j(e,t);for(let a=0;a<m.length;a+=1)m[a].m(e,null);j(e,r),c=!0},p(h,i){if(i&3){u=h[0].rows[h[2]];let a;for(a=0;a<u.length;a+=1){const f=N(h,u,a);l[a]?(l[a].p(f,i),_(l[a],1)):(l[a]=Y(f),l[a].c(),_(l[a],1),l[a].m(n,null))}for(F(),a=u.length;a<l.length;a+=1)o(a);G()}if(i&3){g=h[1];let a;for(a=0;a<g.length;a+=1){const f=J(h,g,a);m[a]?(m[a].p(f,i),_(m[a],1)):(m[a]=z(f),m[a].c(),_(m[a],1),m[a].m(e,r))}for(F(),a=g.length;a<m.length;a+=1)p(a);G()}},i(h){if(!c){for(let i=0;i<u.length;i+=1)_(l[i]);for(let i=0;i<g.length;i+=1)_(m[i]);c=!0}},o(h){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)$(l[i]);m=m.filter(Boolean);for(let i=0;i<m.length;i+=1)$(m[i]);c=!1},d(h){h&&d(e),R(l,h),R(m,h)}}}function ue(s){let e,n,t,r,c,u,l=s[1],o=[];for(let i=0;i<l.length;i+=1)o[i]=W(O(s,l,i));const g=i=>$(o[i],1,1,()=>{o[i]=null});let m=s[1],p=[];for(let i=0;i<m.length;i+=1)p[i]=ee(X(s,m,i));const h=i=>$(p[i],1,1,()=>{p[i]=null});return{c(){e=k("table"),n=k("tr"),t=k("td"),r=T();for(let i=0;i<o.length;i+=1)o[i].c();c=T();for(let i=0;i<p.length;i+=1)p[i].c()},l(i){e=w(i,"TABLE",{});var a=y(e);n=w(a,"TR",{});var f=y(n);t=w(f,"TD",{}),y(t).forEach(d),r=D(f);for(let b=0;b<o.length;b+=1)o[b].l(f);f.forEach(d),c=D(a);for(let b=0;b<p.length;b+=1)p[b].l(a);a.forEach(d)},m(i,a){B(i,e,a),j(e,n),j(n,t),j(n,r);for(let f=0;f<o.length;f+=1)o[f].m(n,null);j(e,c);for(let f=0;f<p.length;f+=1)p[f].m(e,null);u=!0},p(i,a){if(a&3){l=i[1];let f;for(f=0;f<l.length;f+=1){const b=O(i,l,f);o[f]?(o[f].p(b,a),_(o[f],1)):(o[f]=W(b),o[f].c(),_(o[f],1),o[f].m(n,null))}for(F(),f=l.length;f<o.length;f+=1)g(f);G()}if(a&3){m=i[1];let f;for(f=0;f<m.length;f+=1){const b=X(i,m,f);p[f]?(p[f].p(b,a),_(p[f],1)):(p[f]=ee(b),p[f].c(),_(p[f],1),p[f].m(e,null))}for(F(),f=m.length;f<p.length;f+=1)h(f);G()}},i(i){if(!u){for(let a=0;a<l.length;a+=1)_(o[a]);for(let a=0;a<m.length;a+=1)_(p[a]);u=!0}},o(i){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)$(o[a]);p=p.filter(Boolean);for(let a=0;a<p.length;a+=1)$(p[a]);u=!1},d(i){i&&d(e),R(o,i),R(p,i)}}}function he(s){let e,n,t,r;return e=new H.Header({props:{$$slots:{default:[fe]},$$scope:{ctx:s}}}),t=new H.Content({props:{$$slots:{default:[ue]},$$scope:{ctx:s}}}),{c(){v(e.$$.fragment),n=T(),v(t.$$.fragment)},l(c){A(e.$$.fragment,c),n=D(c),A(t.$$.fragment,c)},m(c,u){E(e,c,u),B(c,n,u),E(t,c,u),r=!0},p(c,u){const l={};u&131072&&(l.$$scope={dirty:u,ctx:c}),e.$set(l);const o={};u&131072&&(o.$$scope={dirty:u,ctx:c}),t.$set(o)},i(c){r||(_(e.$$.fragment,c),_(t.$$.fragment,c),r=!0)},o(c){$(e.$$.fragment,c),$(t.$$.fragment,c),r=!1},d(c){x(e,c),c&&d(n),x(t,c)}}}function ge(s){let e,n;return e=new H.Box({props:{$$slots:{default:[he]},$$scope:{ctx:s}}}),{c(){v(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,r){const c={};r&131072&&(c.$$scope={dirty:r,ctx:t}),e.$set(c)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function me(s){let e,n;return e=new ae({props:{$$slots:{default:[ge]},$$scope:{ctx:s}}}),{c(){v(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p(t,[r]){const c={};r&131072&&(c.$$scope={dirty:r,ctx:t}),e.$set(c)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function pe(s){let e=ie(6),n=Array.range(6);return[e,n]}class _e extends P{constructor(e){super();C(this,e,pe,me,V,{})}}function $e(s){let e,n;return e=new _e({}),{c(){v(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,r){E(e,t,r),n=!0},p:I,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}class we extends P{constructor(e){super();C(this,e,null,$e,V,{})}}export{we as default};

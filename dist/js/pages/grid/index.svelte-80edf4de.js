import{S as d,i as h,s as w,v as o,w as l,x as c,p as f,n as u,A as p,j as P,l as S,f as _,d as g,t as j,g as k,K as v}from"../../chunks/vendor-337f2982.js";import{s as x}from"../../chunks/store-a2fdd1f9.js";import"../../chunks/ParrotPlaceholder.svelte_svelte_type_style_lang-17c5e8e7.js";import{S as C,a as W,b}from"../../chunks/SwitcherTile-0ec68046.js";import{P as A,a as T,b as q}from"../../chunks/PanelContent-1044807e.js";function G(s){let t;return{c(){t=j("Warmup?")},l(n){t=k(n,"Warmup?")},m(n,e){_(n,t,e)},d(n){n&&g(t)}}}function H(s){let t,n;return t=new b({props:{href:"/grid/warmup",title:"Warmup",picture:"/assets/placeholder.png"}}),{c(){o(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,a){c(t,e,a),n=!0},p:v,i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function K(s){let t,n;return t=new W({props:{$$slots:{default:[H]},$$scope:{ctx:s}}}),{c(){o(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,a){c(t,e,a),n=!0},p(e,a){const r={};a&1&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function z(s){let t,n,e,a;return t=new T({props:{$$slots:{default:[G]},$$scope:{ctx:s}}}),e=new q({props:{$$slots:{default:[K]},$$scope:{ctx:s}}}),{c(){o(t.$$.fragment),n=P(),o(e.$$.fragment)},l(r){l(t.$$.fragment,r),n=S(r),l(e.$$.fragment,r)},m(r,$){c(t,r,$),_(r,n,$),c(e,r,$),a=!0},p(r,$){const m={};$&1&&(m.$$scope={dirty:$,ctx:r}),t.$set(m);const i={};$&1&&(i.$$scope={dirty:$,ctx:r}),e.$set(i)},i(r){a||(f(t.$$.fragment,r),f(e.$$.fragment,r),a=!0)},o(r){u(t.$$.fragment,r),u(e.$$.fragment,r),a=!1},d(r){p(t,r),r&&g(n),p(e,r)}}}function B(s){let t,n;return t=new A({props:{fill:!0,$$slots:{default:[z]},$$scope:{ctx:s}}}),{c(){o(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,a){c(t,e,a),n=!0},p(e,a){const r={};a&1&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function D(s){let t,n;return t=new C({props:{w:640,h:640,$$slots:{default:[B]},$$scope:{ctx:s}}}),{c(){o(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,a){c(t,e,a),n=!0},p(e,[a]){const r={};a&1&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function E(s){return x("grid"),[]}class N extends d{constructor(t){super();h(this,t,E,D,w,{})}}export{N as default};
import{_ as c}from"../../chunks/preload-helper-2f7412c4.js";import{S as i,i as l,s as d,t as f,g as p,f as u,K as n,d as _}from"../../chunks/vendor-337f2982.js";function m(o){let t;return{c(){t=f("RANDOM!")},l(e){t=p(e,"RANDOM!")},m(e,s){u(e,t,s)},p:n,i:n,o:n,d(e){e&&_(t)}}}function h(o){return(async()=>{let t;if(typeof crypto=="undefined"){const s=await c(()=>import("../../chunks/__vite-browser-external-58e73a3c.js"),[]);t=a=>{const r=s.randomBytes(a.length);a.set(r)}}else t=s=>crypto.getRandomValues(s);const e=new Uint8Array(5);t(e),console.log("RAND",e)})(),[]}class g extends i{constructor(t){super();l(this,t,h,m,d,{})}}export{g as default};

const m=([e,t,r])=>{const a=(((Math.round(e)&255)<<16)+((Math.round(t)&255)<<8)+(Math.round(r)&255)).toString(16).toUpperCase();return"#"+"000000".substring(a.length)+a},k=([e,t,r])=>{let l=t/100,a=r/100,s=t;const v=Math.max(r,.001);a*=2,l*=a<=1?a:2-a,s*=v<=1?v:2-v;const y=(a+l)/2,c=a===0?2*s/(v+s):2*l/(a+l),p=e/60,w=Math.floor(p)%6,d=p-Math.floor(p),n=255*y,o=255*y*(1-c),g=255*y*(1-c*d),f=255*y*(1-c*(1-d));switch(w){case 0:return[n,f,o];case 1:return[g,n,o];case 2:return[o,n,f];case 3:return[o,g,n];case 4:return[f,o,n];case 5:return[n,o,g]}},h=(e,t,r)=>m(k([e,t,r])),_={void:"#101012",slate:"#303134",blueish:h(210,50,80),offwhite:"#c0c0c0",accent:h(40,80,40),white:"#ffffff"},i={regular:"250",bold:"550"},u=(e,t)=>`${e} solid ${t}`,b=(e,t)=>`${e}${t}`,S={fontWeight:{regular:i.regular,bold:i.bold},body:{background:_.void},nav:{background:_.slate,height:"40px",color:"#080808",highlight:"#808080",hover:{background:_.slate,color:_.accent},active:{background:b(_.accent,10),color:_.accent}},text:{color:_.offwhite},page:{padding:"20px",paddingMobile:"5px"},section:{header:{color:_.white+"60",weight:i.bold},border:u("2px",b(_.white,"10")),background:"#202024",color:_.offwhite,padding:"20px",paddingMobile:"5px",radius:"5px"},card:{hover:{background:"#f0f0ff20"},background:"#f0f0ff10",title:{color:_.offwhite+"60",weight:i.bold,padding:"10px"},border:u("2px","#ffffff10"),pictureShadow:"0px 0px 20px #00000080 inset, 0px 0px 5px #000000FF inset",margin:"20px",marginMobile:"5px",size:"164px",innerSize:"160px",radius:"5px",innerRadius:"3px"},parrot:{color:{earth:"#4e130b",fire:"#8a3a0f",energy:"#ae8509",air:"#456020",water:"#1d4772",entropy:"#572c66",void:"#909090",full:"#333333",empty:"#bfbfbf",white:"#",gray:"#",black:"#0C0C0C"}}};const M=Object.fromEntries(["earth","fire","energy","air","water","entropy","empty","full","void","wild","party"].map(e=>[e,e]));const x=e=>Math.floor(Math.random()*e);Array.range=function(e){return new Array(e).fill(void 0).map((t,r)=>r)};Array.rectRange=function(e,t){return new Array(e).fill(void 0).map((r,l)=>new Array(t).fill(void 0).map((a,s)=>s*e+l))};Array.prototype.sample=function(){return this[x(this.length)]};Array.prototype.sampleFew=function(e){const t=[...this],r=Math.min(e,t.length);for(let l=0;l<r;l+=1){const a=l+x(t.length-l);if(l===a)continue;const s=t[l];t[l]=t[a],t[a]=s}return t.slice(0,r)};Array.prototype.shuffle=function(){return this.sampleFew(this.length)};Array.prototype.unique=function(){return[...new Set(this)]};export{M as S,S as d,x as r};
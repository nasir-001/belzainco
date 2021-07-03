(()=>{"use strict";var e={5031:(e,t,r)=>{var n=r(8880),o=r(1768),a=r(1868),i=r(7083),u=r(9582);r(71);const l=[{path:"/",component:()=>Promise.all([r.e(736),r.e(167)]).then(r.bind(r,7167))},{path:"/about",name:"about",component:()=>Promise.all([r.e(736),r.e(491)]).then(r.bind(r,9491))},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,2193))}],s=l,c=(0,i.BC)((function(){const e=u.r5,t=(0,u.p7)({scrollBehavior:()=>({left:0,top:0}),routes:s,history:e("")});return t}));async function d(e,t){const r="function"===typeof c?await c({}):c,n=e(a.Z);return n.use(o.Z,t),{app:n,router:r}}const p={config:{}};async function f({app:e,router:t}){e.use(t),e.mount("#q-app")}d(n.ri,p).then(f)},1868:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(3673);function o(e,t,r,o,a,i){const u=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(u)}const a=(0,n.aZ)({name:"App"});a.render=o;const i=a}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(s=0;s<e.length;s++){for(var[n,o,a]=e[s],u=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(u=!1,a<i&&(i=a));u&&(e.splice(s--,1),t=o())}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{167:"6c55bd5d",193:"391ecddb",491:"1bbfd7c6"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/vendor.d361ff19.css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="landing:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var u,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.setAttribute("data-webpack",t+a),u.src=n),e[n]=[o];var p=(t,r)=>{u.onerror=u.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),l&&document.head.appendChild(u)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),u=new Error,l=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,u,l]=n,s=0;for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(l)var c=l(r);for(t&&t(n);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[i[s]]=0;return r.O(c)},n=self["webpackChunklanding"]=self["webpackChunklanding"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(5031)));n=r.O(n)})();
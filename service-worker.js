if(!self.define){let e,t={};const n=(n,s)=>(n=new URL(n+".js",s).href,t[n]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=t,document.head.appendChild(e)}else e=n,importScripts(n),t()})).then((()=>{let e=t[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let i={};const c=e=>n(e,r),l={module:{uri:r},exports:i,require:c};t[r]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(o(...e),i)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"contexte"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/contexte/css/app.f1ef4739.css",revision:null},{url:"/contexte/index.html",revision:"37c6477114ccb2a0ee147de2d6091772"},{url:"/contexte/js/about.12938127.js",revision:null},{url:"/contexte/js/app.44d68265.js",revision:null},{url:"/contexte/js/chunk-vendors.04b3750d.js",revision:null},{url:"/contexte/manifest.json",revision:"5982d186bcd9846068e3562ac71a3b28"},{url:"/contexte/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
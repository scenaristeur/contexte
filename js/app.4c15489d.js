(function(){"use strict";var e={1451:function(e,n,o){var t=o(9242),r=o(3396);function i(e,n){const o=(0,r.up)("router-link"),t=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(o,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Accueil")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(o,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})]),(0,r.Wm)(t)],64)}var u=o(89);const l={},a=(0,u.Z)(l,[["render",i]]);var c=a,s=o(5431);(0,s.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("New content is available; please close the app & re-open.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var p=o(2483);const d={class:"home"};function f(e,n,o,t,i,u){const l=(0,r.up)("QqoqcpComponent");return(0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)(l,{msg:"Bienvunue sur Qqoqcp, l'appli de gestion de contexte pour l'interopérabilité"})])}var m=o(7139);const q=e=>((0,r.dD)("data-v-5203f103"),e=e(),(0,r.Cn)(),e),b={class:"hello"},g=q((()=>(0,r._)("p",null,[(0,r.Uk)(" Pour un guide de comment utiliser le contexte QQOQCCP,"),(0,r._)("br"),(0,r.Uk)(" jetez un opeil à la page wikipedia "),(0,r._)("a",{href:"https://fr.wikipedia.org/wiki/QQOQCCP",target:"_blank",rel:"noopener"},"QQOQCCP"),(0,r.Uk)(". ")],-1))),v=q((()=>(0,r._)("h3",null,"QQOQCCP",-1))),h=q((()=>(0,r._)("label",{for:"qui"},"Qui / Who / Quién ? ",-1))),w=q((()=>(0,r._)("br",null,null,-1))),_=q((()=>(0,r._)("label",{for:"quoi"},"Quoi / What / Qué ? ",-1))),k=q((()=>(0,r._)("br",null,null,-1))),y=q((()=>(0,r._)("label",{for:"ou"},"Où / Where / Donde ? ",-1))),C=q((()=>(0,r._)("br",null,null,-1))),Q=q((()=>(0,r._)("label",{for:"quand"},"Quand / When / Cuando ? ",-1))),O=q((()=>(0,r._)("br",null,null,-1))),U=q((()=>(0,r._)("label",{for:"comment"},"Comment / How / Como ?",-1))),j=q((()=>(0,r._)("br",null,null,-1))),P=q((()=>(0,r._)("label",{for:"combien"},"Combien / How many, How much ? ",-1))),x=q((()=>(0,r._)("br",null,null,-1))),A=q((()=>(0,r._)("label",{for:"pourquoi"},"Pourquoi / Why / Por qué ? ",-1))),W=q((()=>(0,r._)("br",null,null,-1)));function T(e,n,o,i,u,l){return(0,r.wg)(),(0,r.iD)("div",b,[(0,r._)("h1",null,(0,m.zw)(o.msg),1),g,v,h,(0,r.wy)((0,r._)("input",{id:"qui","onUpdate:modelValue":n[0]||(n[0]=e=>u.qqoqccp.qui=e)},null,512),[[t.nr,u.qqoqccp.qui]]),(0,r.Uk)(" wikidata suggestion "),w,_,(0,r.wy)((0,r._)("input",{id:"quoi","onUpdate:modelValue":n[1]||(n[1]=e=>u.qqoqccp.quoi=e)},null,512),[[t.nr,u.qqoqccp.quoi]]),k,y,(0,r.wy)((0,r._)("input",{id:"ou","onUpdate:modelValue":n[2]||(n[2]=e=>u.qqoqccp.ou=e)},null,512),[[t.nr,u.qqoqccp.ou]]),(0,r.Uk)(" wikidata suggestion + openstreetmap "),C,Q,(0,r.wy)((0,r._)("input",{id:"quand","onUpdate:modelValue":n[3]||(n[3]=e=>u.qqoqccp.quand=e),type:"datetime-local"},null,512),[[t.nr,u.qqoqccp.quand]]),O,U,(0,r.wy)((0,r._)("input",{id:"comment","onUpdate:modelValue":n[4]||(n[4]=e=>u.qqoqccp.comment=e)},null,512),[[t.nr,u.qqoqccp.comment]]),j,P,(0,r.wy)((0,r._)("input",{id:"combien","onUpdate:modelValue":n[5]||(n[5]=e=>u.qqoqccp.combien=e)},null,512),[[t.nr,u.qqoqccp.combien]]),(0,r.Uk)(" specify unity with wikidata suggestion "),x,A,(0,r.wy)((0,r._)("textarea",{id:"pourquoi","onUpdate:modelValue":n[6]||(n[6]=e=>u.qqoqccp.pourquoi=e)},null,512),[[t.nr,u.qqoqccp.pourquoi]]),W,(0,r._)("button",{onClick:n[7]||(n[7]=(...e)=>l.generate&&l.generate(...e))},"Generer le contexte / Generate the contexte"),(0,r._)("button",{onClick:n[8]||(n[8]=(...e)=>l.init&&l.init(...e))},"Init formulaire")])}var V={name:"QqoqcpComponent",props:{msg:String},data(){return{qqoqccp:{}}},methods:{generate(){console.log(this.qqoqccp)},init(){this.qqoqccp={}}}};const E=(0,u.Z)(V,[["render",T],["__scopeId","data-v-5203f103"]]);var N=E,S={name:"HomeView",components:{QqoqcpComponent:N}};const D=(0,u.Z)(S,[["render",f]]);var H=D;const F=[{path:"/",name:"home",component:H},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,7381))}],M=(0,p.p7)({history:(0,p.PO)("/"),routes:F});var z=M,B=o(65),Z=(0,B.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,t.ri)(c).use(Z).use(z).mount("#app")}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(n,t,r,i){if(!t){var u=1/0;for(s=0;s<e.length;s++){t=e[s][0],r=e[s][1],i=e[s][2];for(var l=!0,a=0;a<t.length;a++)(!1&i||u>=i)&&Object.keys(o.O).every((function(e){return o.O[e](t[a])}))?t.splice(a--,1):(l=!1,i<u&&(u=i));if(l){e.splice(s--,1);var c=r();void 0!==c&&(n=c)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[t,r,i]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(n,t){return o.f[t](e,n),n}),[]))}}(),function(){o.u=function(e){return"js/about.12938127.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="contexte:";o.l=function(t,r,i,u){if(e[t])e[t].push(r);else{var l,a;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var p=c[s];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==n+i){l=p;break}}l||(a=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",n+i),l.src=t),e[t]=[r];var d=function(n,o){l.onerror=l.onload=null,clearTimeout(f);var r=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(o)})),n)return n(o)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),a&&document.head.appendChild(l)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e={143:0};o.f.j=function(n,t){var r=o.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(o,t){r=e[n]=[o,t]}));t.push(r[2]=i);var u=o.p+o.u(n),l=new Error,a=function(t){if(o.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;l.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",l.name="ChunkLoadError",l.type=i,l.request=u,r[1](l)}};o.l(u,a,"chunk-"+n,n)}},o.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,i,u=t[0],l=t[1],a=t[2],c=0;if(u.some((function(n){return 0!==e[n]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(a)var s=a(o)}for(n&&n(t);c<u.length;c++)i=u[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(s)},t=self["webpackChunkcontexte"]=self["webpackChunkcontexte"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(1451)}));t=o.O(t)})();
//# sourceMappingURL=app.4c15489d.js.map
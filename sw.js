if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let t={};const d=e=>n(e,c),o={module:{uri:c},exports:t,require:d};i[c]=Promise.all(r.map((e=>o[e]||d(e)))).then((e=>(s(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index-CdUumnkj.css",revision:"854e5ae4abc1ec7e36043b590dfd6dec"},{url:"index-D-82I9uK.js",revision:"485339fd92bb80c31cb22d096f7ecc91"},{url:"index.html",revision:"a2b2151881ae33d0fb91e508a0c46cd5"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"bc7e0c8b45ac96c76d7b46872939df0c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

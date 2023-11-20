(function(){"use strict";var e={3416:function(e,t,n){var r=n(9242),o=n(3396);function i(e,t){const n=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(n,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("首頁")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(n,{to:"/train"},{default:(0,o.w5)((()=>[(0,o.Uk)("詞彙向量化模型訓練")])),_:1}),(0,o.Uk)("| "),(0,o.Wm)(n,{to:"/UpdateVectorDB"},{default:(0,o.w5)((()=>[(0,o.Uk)("建立詞彙向量資料庫")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(n,{to:"/AddNewThesaurus"},{default:(0,o.w5)((()=>[(0,o.Uk)("建立同義詞庫")])),_:1}),(0,o.Uk)(" | ")]),(0,o.Wm)(r)],64)}var u=n(89);const a={},c=(0,u.Z)(a,[["render",i]]);var s=c,l=n(2483),f=n.p+"img/sheep.bfd30219.jpeg";const d=e=>((0,o.dD)("data-v-cdeb5914"),e=e(),(0,o.Cn)(),e),p={class:"home"},v=d((()=>(0,o._)("img",{alt:"Sheep logo",class:"logo",src:f},null,-1)));function m(e,t,n,r,i,u){const a=(0,o.up)("WebsiteDescription");return(0,o.wg)(),(0,o.iD)("div",p,[v,(0,o.Wm)(a,{msg:"Training AI User Interface."})])}var h=n(7139);const b=e=>((0,o.dD)("data-v-bee43c10"),e=e(),(0,o.Cn)(),e),g={class:"Description"},_={class:"pipline"},k={class:"piplinestep"},w=b((()=>(0,o._)("p",null,[(0,o.Uk)(" 1. 上傳產品中英文名稱，以進行模型訓練(csv,xlsx)"),(0,o._)("br"),(0,o.Uk)(" 2. 選取中英文名稱欄位(2)"),(0,o._)("br"),(0,o.Uk)(" 3. 點選submit"),(0,o._)("br"),(0,o.Uk)(" 4. 資料上傳完成後，開始訓練"),(0,o._)("br")],-1))),y={class:"piplinestep"},U=b((()=>(0,o._)("p",null,[(0,o.Uk)(" 1. 上傳需要的關鍵字"),(0,o._)("br"),(0,o.Uk)(" 2. 選取關鍵字欄位(1)"),(0,o._)("br"),(0,o.Uk)(" 3. 將所有關鍵字轉成向量後，匯入Vector Data Base"),(0,o._)("br")],-1))),D={class:"piplinestep"},O=b((()=>(0,o._)("p",null,[(0,o.Uk)(" 1.點選列表關鍵字"),(0,o._)("br"),(0,o.Uk)(" 2.推薦相似詞彙"),(0,o._)("br"),(0,o.Uk)(" 3.選取相似詞，匯入同義詞庫"),(0,o._)("br")],-1)));function C(e,t,n,r,i,u){const a=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("h1",null,(0,h.zw)(n.msg),1),(0,o._)("div",_,[(0,o._)("div",k,[(0,o._)("h3",null,[(0,o.Wm)(a,{to:"/train"},{default:(0,o.w5)((()=>[(0,o.Uk)("詞彙向量化模型訓練")])),_:1})]),w]),(0,o._)("div",y,[(0,o._)("h3",null,[(0,o.Wm)(a,{to:"/UpdateVectorDB"},{default:(0,o.w5)((()=>[(0,o.Uk)("建立詞彙向量資料庫")])),_:1})]),U]),(0,o._)("div",D,[(0,o._)("h3",null,[(0,o.Wm)(a,{to:"/AddNewThesaurus"},{default:(0,o.w5)((()=>[(0,o.Uk)("建立同義詞庫")])),_:1})]),O])])])}var A={name:"WebsiteDescription",props:{msg:String}};const T=(0,u.Z)(A,[["render",C],["__scopeId","data-v-bee43c10"]]);var j=T,N={name:"HomeView",components:{WebsiteDescription:j}};const S=(0,u.Z)(N,[["render",m],["__scopeId","data-v-cdeb5914"]]);var W=S;const E=[{path:"/",name:"home",component:W},{path:"/train",name:"train",component:()=>n.e(443).then(n.bind(n,7062))},{path:"/UpdateVectorDB",name:"UpdateVectorDB",component:()=>n.e(443).then(n.bind(n,6496))},{path:"/AddNewThesaurus",name:"AddNewThesaurus",component:()=>n.e(443).then(n.bind(n,1846))}],x=(0,l.p7)({history:(0,l.PO)("/"),routes:E});var B=x;(0,r.ri)(s).use(B).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.43323713.js"}}(),function(){n.miniCssF=function(e){return"css/about.ff4d62f1.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-route:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var u=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=u,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={443:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var l=c(n)}for(t&&t(r);s<u.length;s++)i=u[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkvue_route"]=self["webpackChunkvue_route"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3416)}));r=n.O(r)})();
//# sourceMappingURL=app.a39ed885.js.map
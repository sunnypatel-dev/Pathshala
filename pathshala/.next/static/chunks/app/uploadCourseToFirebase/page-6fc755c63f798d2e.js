(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{7205:function(e,t,r){Promise.resolve().then(r.bind(r,8237))},2104:function(e,t,r){"use strict";var n,s;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(s=r.g.process)?void 0:s.env)?r.g.process:r(8769)},8769:function(e){!function(){var t={229:function(e){var t,r,n,s=e.exports={};function a(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l=[],c=!1,d=-1;function u(){c&&n&&(c=!1,n.length?l=n.concat(l):d=-1,l.length&&h())}function h(){if(!c){var e=o(u);c=!0;for(var t=l.length;t;){for(n=l,l=[];++d<t;)n&&n[d].run();d=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function x(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new g(e,t)),1!==l.length||c||o(h)},g.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=x,s.addListener=x,s.once=x,s.off=x,s.removeListener=x,s.removeAllListeners=x,s.emit=x,s.prependListener=x,s.prependOnceListener=x,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var a=r[e]={exports:{}},i=!0;try{t[e](a,a.exports,n),i=!1}finally{i&&delete r[e]}return a.exports}n.ab="//";var s=n(229);e.exports=s}()},8237:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(8903),s=r(617),a=r(4764),i=r(8464);function o(){let[e,t]=(0,s.useState)([]),[r,o]=(0,s.useState)(0),[l,c]=(0,s.useState)([]),d=async()=>{if(0===e.length)return;let r=e.map(async e=>{let t=(0,a.iH)(i.default,"videos/"+e.name),r=(0,a.B0)(t,e);r.on("state_changed",e=>{o(e.bytesTransferred/e.totalBytes*100)}),await r;let n=await (0,a.Jt)(t);return{name:e.name,url:n}});c(await Promise.all(r)),console.log("Videos uploaded successfully"),t([])},[u,h]=(0,s.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("nav",{class:"fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700",children:(0,n.jsx)("div",{class:"px-3 py-3 lg:px-5 lg:pl-3",children:(0,n.jsxs)("div",{class:"flex items-center justify-between",children:[(0,n.jsxs)("div",{class:"flex items-center justify-start rtl:justify-end",children:[(0,n.jsxs)("button",{onClick:()=>setOpenSidebar(!openSidebar),"data-drawer-target":"logo-sidebar","data-drawer-toggle":"logo-sidebar","aria-controls":"logo-sidebar",type:"button",class:"inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:[(0,n.jsx)("span",{class:"sr-only",children:"Open sidebar"}),(0,n.jsx)("svg",{class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{"clip-rule":"evenodd","fill-rule":"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})]}),(0,n.jsxs)("a",{href:"/",class:"flex ms-2 md:me-24",children:[(0,n.jsx)("img",{src:"logo1.png",class:"w-48",alt:"FlowBite Logo"}),(0,n.jsx)("span",{class:"self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"})]})]}),(0,n.jsx)("div",{class:"flex items-center ",children:(0,n.jsxs)("div",{class:"flex items-center ms-3 ",children:[(0,n.jsx)("div",{children:(0,n.jsxs)("button",{onClick:()=>h(!u),type:"button",class:"flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600","aria-expanded":"false","data-dropdown-toggle":"dropdown-user",children:[(0,n.jsx)("span",{class:"sr-only",children:"Open user menu"}),(0,n.jsx)("img",{class:"w-8 h-8 rounded-full",src:"https://flowbite.com/docs/images/people/profile-picture-5.jpg",alt:"user photo"})]})}),(0,n.jsxs)("div",{class:"z-50 ".concat(u?"absolute":"hidden"," my-4 text-base list-none top-10 right-0 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"),id:"dropdown-user",children:[(0,n.jsxs)("div",{class:"px-4 py-3",role:"none",children:[(0,n.jsx)("p",{class:"text-sm text-gray-900 dark:text-white",role:"none",children:"Neil Sims"}),(0,n.jsx)("p",{class:"text-sm font-medium text-gray-900 truncate dark:text-gray-300",role:"none",children:"neil.sims@flowbite.com"})]}),(0,n.jsxs)("ul",{class:"py-1",role:"none",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",role:"menuitem",children:"Dashboard"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",role:"menuitem",children:"Settings"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",role:"menuitem",children:"Earnings"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",role:"menuitem",children:"Sign out"})})]})]})]})})]})})}),(0,n.jsxs)("div",{className:" max-w-screen-sm m-auto grid place-content-center h-screen gap-4 ",children:[(0,n.jsx)("input",{type:"file",multiple:!0,onChange:e=>{t(Array.from(e.target.files))}}),(0,n.jsx)("div",{style:{width:"100%",height:"20px",background:"#eee"},children:(0,n.jsx)("div",{style:{width:"".concat(r,"%"),height:"100%",background:"green"}})}),(0,n.jsxs)("p",{children:[r.toFixed(2),"% uploaded"]}),(0,n.jsx)("button",{className:"bg-teal-500 text-white py-2 px-4",onClick:d,children:"Upload Videos"}),l.length>0&&(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("p",{className:"pb-3 font-semibold",children:"Uploaded Videos:-"}),(0,n.jsx)("ul",{className:"flex flex-col gap-2",children:l.map((e,t)=>(0,n.jsxs)("li",{className:"text-sm font-medium",children:[e.name,":"," ",(0,n.jsx)("a",{className:"text-xs font-light",target:"_blank",rel:"noopener noreferrer",children:e.url})]},t))})]})]})]})}},8464:function(e,t,r){"use strict";r.d(t,{l:function(){return a}});var n=r(5551),s=r(4764);let a=(0,n.ZF)({apiKey:"AIzaSyDdDB0xX-noYKJrV3HZbNocqt8t6IZDAgo",authDomain:"pathshala-486d4.firebaseapp.com",projectId:"pathshala-486d4",storageBucket:"pathshala-486d4.appspot.com",messagingSenderId:"869664099003",appId:"1:869664099003:web:30dca44d35b788115f779e"});(0,s.cF)(a)}},function(e){e.O(0,[8,306,89,744],function(){return e(e.s=7205)}),_N_E=e.O()}]);
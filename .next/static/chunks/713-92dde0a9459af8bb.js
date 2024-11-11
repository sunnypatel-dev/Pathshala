"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[713],{7712:function(t,e,n){n.d(e,{j:function(){return o}});let r=t=>"boolean"==typeof t?"".concat(t):0===t?"0":t,i=function(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=function t(e){var n,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e){if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(r=t(e[n]))&&(i&&(i+=" "),i+=r);else for(n in e)e[n]&&(i&&(i+=" "),i+=n)}return i}(t))&&(r&&(r+=" "),r+=e);return r},o=(t,e)=>n=>{var o;if((null==e?void 0:e.variants)==null)return i(t,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:u,defaultVariants:c}=e,l=Object.keys(u).map(t=>{let e=null==n?void 0:n[t],i=null==c?void 0:c[t];if(null===e)return null;let o=r(e)||r(i);return u[t][o]}),a=n&&Object.entries(n).reduce((t,e)=>{let[n,r]=e;return void 0===r||(t[n]=r),t},{});return i(t,l,null==e?void 0:null===(o=e.compoundVariants)||void 0===o?void 0:o.reduce((t,e)=>{let{class:n,className:r,...i}=e;return Object.entries(i).every(t=>{let[e,n]=t;return Array.isArray(n)?n.includes({...c,...a}[e]):({...c,...a})[e]===n})?[...t,n,r]:t},[]),null==n?void 0:n.class,null==n?void 0:n.className)}},9467:function(t,e,n){n.d(e,{Z:function(){return k}});var r=n(2265);function i(t){return"[object Object]"===Object.prototype.toString.call(t)||Array.isArray(t)}function o(t,e){let n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&JSON.stringify(Object.keys(t.breakpoints||{}))===JSON.stringify(Object.keys(e.breakpoints||{}))&&n.every(n=>{let r=t[n],u=e[n];return"function"==typeof r?`${r}`==`${u}`:i(r)&&i(u)?o(r,u):r===u})}function u(t){return t.concat().sort((t,e)=>t.name>e.name?1:-1).map(t=>t.options)}function c(t){return"number"==typeof t}function l(t){return"string"==typeof t}function a(t){return"boolean"==typeof t}function s(t){return"[object Object]"===Object.prototype.toString.call(t)}function f(t){return Math.abs(t)}function d(t){return Math.sign(t)}function p(t){return y(t).map(Number)}function m(t){return t[g(t)]}function g(t){return Math.max(0,t.length-1)}function h(t,e=0){return Array.from(Array(t),(t,n)=>e+n)}function y(t){return Object.keys(t)}function v(t,e){return void 0!==e.MouseEvent&&t instanceof e.MouseEvent}function b(){let t=[],e={add:function(n,r,i,o={passive:!0}){let u;return"addEventListener"in n?(n.addEventListener(r,i,o),u=()=>n.removeEventListener(r,i,o)):(n.addListener(i),u=()=>n.removeListener(i)),t.push(u),e},clear:function(){t=t.filter(t=>t())}};return e}function x(t=0,e=0){let n=f(t-e);function r(n){return n<t||n>e}return{length:n,max:e,min:t,constrain:function(n){return r(n)?n<t?t:e:n},reachedAny:r,reachedMax:function(t){return t>e},reachedMin:function(e){return e<t},removeOffset:function(t){return n?t-n*Math.ceil((t-e)/n):t}}}function w(t){let e=t;function n(t){return c(t)?t:t.get()}return{get:function(){return e},set:function(t){e=n(t)},add:function(t){e+=n(t)},subtract:function(t){e-=n(t)}}}function S(t,e){let n="x"===t.scroll?function(t){return`translate3d(${t}px,0px,0px)`}:function(t){return`translate3d(0px,${t}px,0px)`},r=e.style,i=!1;return{clear:function(){i||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))},to:function(e){i||(r.transform=n(t.direction(e)))},toggleActive:function(t){i=!t}}}let E={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function O(t,e,n){let r,i,o,u,k;let D=t.ownerDocument,A=D.defaultView,I=function(t){function e(t,e){return function t(e,n){return[e,n].reduce((e,n)=>(y(n).forEach(r=>{let i=e[r],o=n[r],u=s(i)&&s(o);e[r]=u?t(i,o):o}),e),{})}(t,e||{})}return{mergeOptions:e,optionsAtMedia:function(n){let r=n.breakpoints||{},i=y(r).filter(e=>t.matchMedia(e).matches).map(t=>r[t]).reduce((t,n)=>e(t,n),{});return e(n,i)},optionsMediaQueries:function(e){return e.map(t=>y(t.breakpoints||{})).reduce((t,e)=>t.concat(e),[]).map(t.matchMedia)}}}(A),L=(k=[],{init:function(t,e){return(k=e.filter(({options:t})=>!1!==I.optionsAtMedia(t).active)).forEach(e=>e.init(t,I)),e.reduce((t,e)=>Object.assign(t,{[e.name]:e}),{})},destroy:function(){k=k.filter(t=>t.destroy())}}),j=b(),F=function(){let t,e={},n={init:function(e){t=e},emit:function(r){return(e[r]||[]).forEach(e=>e(t,r)),n},off:function(t,r){return e[t]=(e[t]||[]).filter(t=>t!==r),n},on:function(t,r){return e[t]=(e[t]||[]).concat([r]),n},clear:function(){e={}}};return n}(),{mergeOptions:M,optionsAtMedia:N,optionsMediaQueries:P}=I,{on:T,off:V,emit:H}=F,z=!1,C=M(E,O.globalOptions),B=M(C),R=[];function $(e,n){!z&&(B=N(C=M(C,e)),R=n||R,function(){let{container:e,slides:n}=B;o=(l(e)?t.querySelector(e):e)||t.children[0];let r=l(n)?o.querySelectorAll(n):n;u=[].slice.call(r||o.children)}(),r=function e(n){let r=function(t,e,n,r,i,o,u){let s,E;let{align:O,axis:k,direction:D,startIndex:A,loop:I,duration:L,dragFree:j,dragThreshold:F,inViewThreshold:M,slidesToScroll:N,skipSnaps:P,containScroll:T,watchResize:V,watchSlides:H,watchDrag:z,watchFocus:C}=o,B={measure:function(t){let{offsetTop:e,offsetLeft:n,offsetWidth:r,offsetHeight:i}=t;return{top:e,right:n+r,bottom:e+i,left:n,width:r,height:i}}},R=B.measure(e),$=n.map(B.measure),q=function(t,e){let n="rtl"===e,r="y"===t,i=!r&&n?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":n?"right":"left",endEdge:r?"bottom":n?"left":"right",measureSize:function(t){let{height:e,width:n}=t;return r?e:n},direction:function(t){return t*i}}}(k,D),U=q.measureSize(R),_={measure:function(t){return t/100*U}},J=function(t,e){let n={start:function(){return 0},center:function(t){return(e-t)/2},end:function(t){return e-t}};return{measure:function(r,i){return l(t)?n[t](r):t(e,r,i)}}}(O,U),X=!I&&!!T,{slideSizes:Q,slideSizesWithGaps:Y,startGap:Z,endGap:G}=function(t,e,n,r,i,o){let{measureSize:u,startEdge:c,endEdge:l}=t,a=n[0]&&i,s=function(){if(!a)return 0;let t=n[0];return f(e[c]-t[c])}(),d=a?parseFloat(o.getComputedStyle(m(r)).getPropertyValue(`margin-${l}`)):0,p=n.map(u),h=n.map((t,e,n)=>{let r=e===g(n);return e?r?p[e]+d:n[e+1][c]-t[c]:p[e]+s}).map(f);return{slideSizes:p,slideSizesWithGaps:h,startGap:s,endGap:d}}(q,R,$,n,I||!!T,i),K=function(t,e,n,r,i,o,u,l,a){let{startEdge:s,endEdge:d,direction:h}=t,y=c(n);return{groupSlides:function(t){return y?p(t).filter(t=>t%n==0).map(e=>t.slice(e,e+n)):t.length?p(t).reduce((n,c,a)=>{let p=m(n)||0,y=c===g(t),v=i[s]-o[p][s],b=i[s]-o[c][d],x=r||0!==p?0:h(u),w=f(b-(!r&&y?h(l):0)-(v+x));return a&&w>e+2&&n.push(c),y&&n.push(t.length),n},[]).map((e,n,r)=>{let i=Math.max(r[n-1]||0);return t.slice(i,e)}):[]}}}(q,U,N,I,R,$,Z,G,0),{snaps:W,snapsAligned:tt}=function(t,e,n,r,i){let{startEdge:o,endEdge:u}=t,{groupSlides:c}=i,l=c(r).map(t=>m(t)[u]-t[0][o]).map(f).map(e.measure),a=r.map(t=>n[o]-t[o]).map(t=>-f(t)),s=c(a).map(t=>t[0]).map((t,e)=>t+l[e]);return{snaps:a,snapsAligned:s}}(q,J,R,$,K),te=-m(W)+m(Y),{snapsContained:tn,scrollContainLimit:tr}=function(t,e,n,r,i){let o=x(-e+t,0),u=n.map((t,e)=>{let{min:r,max:i}=o,u=o.constrain(t),c=e===g(n);return e?c||1>f(r-u)?r:1>f(i-u)?i:u:i}).map(t=>parseFloat(t.toFixed(3))),c=function(){let t=u[0],e=m(u);return x(u.lastIndexOf(t),u.indexOf(e)+1)}();return{snapsContained:function(){if(e<=t+2)return[o.max];if("keepSnaps"===r)return u;let{min:n,max:i}=c;return u.slice(n,i)}(),scrollContainLimit:c}}(U,te,tt,T,0),ti=X?tn:tt,{limit:to}=function(t,e,n){let r=e[0];return{limit:x(n?r-t:m(e),r)}}(te,ti,I),tu=function t(e,n,r){let{constrain:i}=x(0,e),o=e+1,u=c(n);function c(t){return r?f((o+t)%o):i(t)}function l(){return t(e,u,r)}let a={get:function(){return u},set:function(t){return u=c(t),a},add:function(t){return l().set(u+t)},clone:l};return a}(g(ti),A,I),tc=tu.clone(),tl=p(n),ta=({dragHandler:t,scrollBody:e,scrollBounds:n,options:{loop:r}},i)=>{r||n.constrain(t.pointerDown()),e.seek(i)},ts=({scrollBody:t,translate:e,location:n,offsetLocation:r,scrollLooper:i,slideLooper:o,dragHandler:u,animation:c,eventHandler:l,scrollBounds:a,options:{loop:s}},f)=>{let d=t.settled(),p=!a.shouldConstrain(),m=s?d:d&&p;m&&!u.pointerDown()&&(c.stop(),l.emit("settle")),m||l.emit("scroll");let g=n.get()*f+tm.get()*(1-f);r.set(g),s&&(i.loop(t.direction()),o.loop()),e.to(r.get())},tf=function(t,e,n,r){let i=b(),o=1e3/60,u=null,c=0,l=0;function a(t){if(!l)return;u||(u=t);let i=t-u;for(u=t,c+=i;c>=o;)n(o),c-=o;r(c/o),l&&e.requestAnimationFrame(a)}function s(){e.cancelAnimationFrame(l),u=null,c=0,l=0}return{init:function(){i.add(t,"visibilitychange",()=>{t.hidden&&(u=null,c=0)})},destroy:function(){s(),i.clear()},start:function(){l||(l=e.requestAnimationFrame(a))},stop:s,update:()=>n(o),render:r}}(r,i,t=>ta(tk,t),t=>ts(tk,t)),td=ti[tu.get()],tp=w(td),tm=w(td),tg=w(td),th=w(td),ty=function(t,e,n,r,i,o){let u=0,c=0,l=i,a=.68,s=t.get(),p=0;function m(t){return l=t,h}function g(t){return a=t,h}let h={direction:function(){return c},duration:function(){return l},velocity:function(){return u},seek:function(e){let i=e/1e3,o=l*i,f=r.get()-t.get(),m=0;return l?(n.set(t),u+=f/o,u*=a,s+=u,t.add(u*i),m=s-p):(u=0,n.set(r),t.set(r),m=f),c=d(m),p=s,h},settled:function(){return .001>f(r.get()-e.get())},useBaseFriction:function(){return g(.68)},useBaseDuration:function(){return m(i)},useFriction:g,useDuration:m};return h}(tp,tg,tm,th,L,0),tv=function(t,e,n,r,i){let{reachedAny:o,removeOffset:u,constrain:c}=r;function l(t){return t.concat().sort((t,e)=>f(t)-f(e))[0]}function a(e,r){let i=[e,e+n,e-n];if(!t)return e;if(!r)return l(i);let o=i.filter(t=>d(t)===r);return o.length?l(o):m(i)-n}return{byDistance:function(n,r){let l=i.get()+n,{index:s,distance:d}=function(n){let r=t?u(n):c(n),{index:i}=e.map((t,e)=>({diff:a(t-r,0),index:e})).sort((t,e)=>f(t.diff)-f(e.diff))[0];return{index:i,distance:r}}(l),p=!t&&o(l);if(!r||p)return{index:s,distance:n};let m=n+a(e[s]-d,0);return{index:s,distance:m}},byIndex:function(t,n){let r=a(e[t]-i.get(),n);return{index:t,distance:r}},shortcut:a}}(I,ti,te,to,th),tb=function(t,e,n,r,i,o,u){function c(i){let c=i.distance,l=i.index!==e.get();o.add(c),c&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),l&&(n.set(e.get()),e.set(i.index),u.emit("select"))}return{distance:function(t,e){c(i.byDistance(t,e))},index:function(t,n){let r=e.clone().set(t);c(i.byIndex(r.get(),n))}}}(tf,tu,tc,ty,tv,th,u),tx=function(t){let{max:e,length:n}=t;return{get:function(t){return n?-((t-e)/n):0}}}(to),tw=b(),tS=function(t,e,n,r){let i;let o={},u=null,c=null,l=!1;return{init:function(){i=new IntersectionObserver(t=>{l||(t.forEach(t=>{o[e.indexOf(t.target)]=t}),u=null,c=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(t=>i.observe(t))},destroy:function(){i&&i.disconnect(),l=!0},get:function(t=!0){if(t&&u)return u;if(!t&&c)return c;let e=y(o).reduce((e,n)=>{let r=parseInt(n),{isIntersecting:i}=o[r];return(t&&i||!t&&!i)&&e.push(r),e},[]);return t&&(u=e),t||(c=e),e}}}(e,n,u,M),{slideRegistry:tE}=function(t,e,n,r,i,o){let{groupSlides:u}=i,{min:c,max:l}=r;return{slideRegistry:function(){let r=u(o);return 1===n.length?[o]:t&&"keepSnaps"!==e?r.slice(c,l).map((t,e,n)=>{let r=e===g(n);return e?r?h(g(o)-m(n)[0]+1,m(n)[0]):t:h(m(n[0])+1)}):r}()}}(X,T,ti,tr,K,tl),tO=function(t,e,n,r,i,o,u,l){let s={passive:!0,capture:!0},f=0;function d(t){"Tab"===t.code&&(f=new Date().getTime())}return{init:function(p){l&&(o.add(document,"keydown",d,!1),e.forEach((e,d)=>{o.add(e,"focus",e=>{(a(l)||l(p,e))&&function(e){if(new Date().getTime()-f>10)return;u.emit("slideFocusStart"),t.scrollLeft=0;let o=n.findIndex(t=>t.includes(e));c(o)&&(i.useDuration(0),r.index(o,0),u.emit("slideFocus"))}(d)},s)}))}}}(t,n,tE,tb,ty,tw,u,C),tk={ownerDocument:r,ownerWindow:i,eventHandler:u,containerRect:R,slideRects:$,animation:tf,axis:q,dragHandler:function(t,e,n,r,i,o,u,c,l,s,p,m,g,h,y,w,S,E,O){let{cross:k,direction:D}=t,A=["INPUT","SELECT","TEXTAREA"],I={passive:!1},L=b(),j=b(),F=x(50,225).constrain(h.measure(20)),M={mouse:300,touch:400},N={mouse:500,touch:600},P=y?43:25,T=!1,V=0,H=0,z=!1,C=!1,B=!1,R=!1;function $(t){if(!v(t,r)&&t.touches.length>=2)return q(t);let e=o.readPoint(t),n=o.readPoint(t,k),u=f(e-V),l=f(n-H);if(!C&&!R&&(!t.cancelable||!(C=u>l)))return q(t);let a=o.pointerMove(t);u>w&&(B=!0),s.useFriction(.3).useDuration(.75),c.start(),i.add(D(a)),t.preventDefault()}function q(t){let e=p.byDistance(0,!1).index!==m.get(),n=o.pointerUp(t)*(y?N:M)[R?"mouse":"touch"],r=function(t,e){let n=m.add(-1*d(t)),r=p.byDistance(t,!y).distance;return y||f(t)<F?r:S&&e?.5*r:p.byIndex(n.get(),0).distance}(D(n),e),i=function(t,e){var n,r;if(0===t||0===e||f(t)<=f(e))return 0;let i=(n=f(t),r=f(e),f(n-r));return f(i/t)}(n,r);C=!1,z=!1,j.clear(),s.useDuration(P-10*i).useFriction(.68+i/50),l.distance(r,!y),R=!1,g.emit("pointerUp")}function U(t){B&&(t.stopPropagation(),t.preventDefault(),B=!1)}return{init:function(t){O&&L.add(e,"dragstart",t=>t.preventDefault(),I).add(e,"touchmove",()=>void 0,I).add(e,"touchend",()=>void 0).add(e,"touchstart",c).add(e,"mousedown",c).add(e,"touchcancel",q).add(e,"contextmenu",q).add(e,"click",U,!0);function c(c){(a(O)||O(t,c))&&function(t){let c=v(t,r);R=c,B=y&&c&&!t.buttons&&T,T=f(i.get()-u.get())>=2,c&&0!==t.button||function(t){let e=t.nodeName||"";return A.includes(e)}(t.target)||(z=!0,o.pointerDown(t),s.useFriction(0).useDuration(0),i.set(u),function(){let t=R?n:e;j.add(t,"touchmove",$,I).add(t,"touchend",q).add(t,"mousemove",$,I).add(t,"mouseup",q)}(),V=o.readPoint(t),H=o.readPoint(t,k),g.emit("pointerDown"))}(c)}},destroy:function(){L.clear(),j.clear()},pointerDown:function(){return z}}}(q,t,r,i,th,function(t,e){let n,r;function i(t){return t.timeStamp}function o(n,r){let i=r||t.scroll,o=`client${"x"===i?"X":"Y"}`;return(v(n,e)?n:n.touches[0])[o]}return{pointerDown:function(t){return n=t,r=t,o(t)},pointerMove:function(t){let e=o(t)-o(r),u=i(t)-i(n)>170;return r=t,u&&(n=t),e},pointerUp:function(t){if(!n||!r)return 0;let e=o(r)-o(n),u=i(t)-i(n),c=i(t)-i(r)>170,l=e/u;return u&&!c&&f(l)>.1?l:0},readPoint:o}}(q,i),tp,tf,tb,ty,tv,tu,u,_,j,F,P,0,z),eventStore:tw,percentOfView:_,index:tu,indexPrevious:tc,limit:to,location:tp,offsetLocation:tg,previousLocation:tm,options:o,resizeHandler:function(t,e,n,r,i,o,u){let c,l;let s=[t].concat(r),d=[],p=!1;function m(t){return i.measureSize(u.measure(t))}return{init:function(i){o&&(l=m(t),d=r.map(m),c=new ResizeObserver(n=>{(a(o)||o(i,n))&&function(n){for(let o of n){if(p)return;let n=o.target===t,u=r.indexOf(o.target),c=n?l:d[u];if(f(m(n?t:r[u])-c)>=.5){i.reInit(),e.emit("resize");break}}}(n)}),n.requestAnimationFrame(()=>{s.forEach(t=>c.observe(t))}))},destroy:function(){p=!0,c&&c.disconnect()}}}(e,u,i,n,q,V,B),scrollBody:ty,scrollBounds:function(t,e,n,r,i){let o=i.measure(10),u=i.measure(50),c=x(.1,.99),l=!1;function a(){return!!(!l&&t.reachedAny(n.get())&&t.reachedAny(e.get()))}return{shouldConstrain:a,constrain:function(i){if(!a())return;let l=t.reachedMin(e.get())?"min":"max",s=f(t[l]-e.get()),d=n.get()-e.get(),p=c.constrain(s/u);n.subtract(d*p),!i&&f(d)<o&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(t){l=!t}}}(to,tg,th,ty,_),scrollLooper:function(t,e,n,r){let{reachedMin:i,reachedMax:o}=x(e.min+.1,e.max+.1);return{loop:function(e){if(!(1===e?o(n.get()):-1===e&&i(n.get())))return;let u=-1*e*t;r.forEach(t=>t.add(u))}}}(te,to,tg,[tp,tg,tm,th]),scrollProgress:tx,scrollSnapList:ti.map(tx.get),scrollSnaps:ti,scrollTarget:tv,scrollTo:tb,slideLooper:function(t,e,n,r,i,o,u,c,l){let a=p(i),s=m(d(p(i).reverse(),u[0]),n,!1).concat(m(d(a,e-u[0]-1),-n,!0));function f(t,e){return t.reduce((t,e)=>t-i[e],e)}function d(t,e){return t.reduce((t,n)=>f(t,e)>0?t.concat([n]):t,[])}function m(i,u,a){let s=o.map((t,n)=>({start:t-r[n]+.5+u,end:t+e-.5+u}));return i.map(e=>{let r=a?0:-n,i=a?n:0,o=s[e][a?"end":"start"];return{index:e,loopPoint:o,slideLocation:w(-1),translate:S(t,l[e]),target:()=>c.get()>o?r:i}})}return{canLoop:function(){return s.every(({index:t})=>.1>=f(a.filter(e=>e!==t),e))},clear:function(){s.forEach(t=>t.translate.clear())},loop:function(){s.forEach(t=>{let{target:e,translate:n,slideLocation:r}=t,i=e();i!==r.get()&&(n.to(i),r.set(i))})},loopPoints:s}}(q,U,te,Q,Y,W,ti,tg,n),slideFocus:tO,slidesHandler:(E=!1,{init:function(t){H&&(s=new MutationObserver(e=>{!E&&(a(H)||H(t,e))&&function(e){for(let n of e)if("childList"===n.type){t.reInit(),u.emit("slidesChanged");break}}(e)})).observe(e,{childList:!0})},destroy:function(){s&&s.disconnect(),E=!0}}),slidesInView:tS,slideIndexes:tl,slideRegistry:tE,slidesToScroll:K,target:th,translate:S(q,e)};return tk}(t,o,u,D,A,n,F);return n.loop&&!r.slideLooper.canLoop()?e(Object.assign({},n,{loop:!1})):r}(B),P([C,...R.map(({options:t})=>t)]).forEach(t=>j.add(t,"change",q)),B.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(X),r.eventHandler.init(X),r.resizeHandler.init(X),r.slidesHandler.init(X),r.options.loop&&r.slideLooper.loop(),o.offsetParent&&u.length&&r.dragHandler.init(X),i=L.init(X,R)))}function q(t,e){let n=J();U(),$(M({startIndex:n},t),e),F.emit("reInit")}function U(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),L.destroy(),j.clear()}function _(t,e,n){B.active&&!z&&(r.scrollBody.useBaseFriction().useDuration(!0===e?0:B.duration),r.scrollTo.index(t,n||0))}function J(){return r.index.get()}let X={canScrollNext:function(){return r.index.add(1).get()!==J()},canScrollPrev:function(){return r.index.add(-1).get()!==J()},containerNode:function(){return o},internalEngine:function(){return r},destroy:function(){z||(z=!0,j.clear(),U(),F.emit("destroy"),F.clear())},off:V,on:T,emit:H,plugins:function(){return i},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:q,rootNode:function(){return t},scrollNext:function(t){_(r.index.add(1).get(),t,-1)},scrollPrev:function(t){_(r.index.add(-1).get(),t,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:_,selectedScrollSnap:J,slideNodes:function(){return u},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return $(e,n),setTimeout(()=>F.emit("init"),0),X}function k(t={},e=[]){let n=(0,r.useRef)(t),i=(0,r.useRef)(e),[c,l]=(0,r.useState)(),[a,s]=(0,r.useState)(),f=(0,r.useCallback)(()=>{c&&c.reInit(n.current,i.current)},[c]);return(0,r.useEffect)(()=>{o(n.current,t)||(n.current=t,f())},[t,f]),(0,r.useEffect)(()=>{!function(t,e){if(t.length!==e.length)return!1;let n=u(t),r=u(e);return n.every((t,e)=>o(t,r[e]))}(i.current,e)&&(i.current=e,f())},[e,f]),(0,r.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&a){O.globalOptions=k.globalOptions;let t=O(a,n.current,i.current);return l(t),()=>t.destroy()}l(void 0)},[a,l]),[s,c]}O.globalOptions=void 0,k.globalOptions=void 0}}]);
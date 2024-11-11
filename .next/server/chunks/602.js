"use strict";exports.id=602,exports.ids=[602],exports.modules={6602:(e,t,r)=>{r.d(t,{VY:()=>ed,h4:()=>es,ck:()=>eu,fC:()=>el,xz:()=>ec});var n=r(17577),o=r.t(n,2),i=r(10326);function a(e,t=[]){let r=[],o=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return o.scopeName=e,[function(t,o){let a=n.createContext(o),l=r.length;r=[...r,o];let u=t=>{let{scope:r,children:o,...u}=t,s=r?.[e]?.[l]||a,c=n.useMemo(()=>u,Object.values(u));return(0,i.jsx)(s.Provider,{value:c,children:o})};return u.displayName=t+"Provider",[u,function(r,i){let u=i?.[e]?.[l]||a,s=n.useContext(u);if(s)return s;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(o,...t)]}var l=r(48051),u=r(34214);function s(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}function c(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}function d({prop:e,defaultProp:t,onChange:r=()=>{}}){let[o,i]=function({defaultProp:e,onChange:t}){let r=n.useState(e),[o]=r,i=n.useRef(o),a=c(t);return n.useEffect(()=>{i.current!==o&&(a(o),i.current=o)},[o,i,a]),r}({defaultProp:t,onChange:r}),a=void 0!==e,l=a?e:o,u=c(r);return[l,n.useCallback(t=>{if(a){let r="function"==typeof t?t(e):t;r!==e&&u(r)}else i(t)},[a,e,i,u])]}r(60962);var f=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...o}=e,a=n?u.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(a,{...o,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),p=globalThis?.document?n.useLayoutEffect:()=>{},m=e=>{let{present:t,children:r}=e,o=function(e){var t,r;let[o,i]=n.useState(),a=n.useRef({}),l=n.useRef(e),u=n.useRef("none"),[s,c]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>r[e][t]??e,t));return n.useEffect(()=>{let e=v(a.current);u.current="mounted"===s?e:"none"},[s]),p(()=>{let t=a.current,r=l.current;if(r!==e){let n=u.current,o=v(t);e?c("MOUNT"):"none"===o||t?.display==="none"?c("UNMOUNT"):r&&n!==o?c("ANIMATION_OUT"):c("UNMOUNT"),l.current=e}},[e,c]),p(()=>{if(o){let e;let t=o.ownerDocument.defaultView??window,r=r=>{let n=v(a.current).includes(r.animationName);if(r.target===o&&n&&(c("ANIMATION_END"),!l.current)){let r=o.style.animationFillMode;o.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=r)})}},n=e=>{e.target===o&&(u.current=v(a.current))};return o.addEventListener("animationstart",n),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{t.clearTimeout(e),o.removeEventListener("animationstart",n),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}c("ANIMATION_END")},[o,c]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:n.useCallback(e=>{e&&(a.current=getComputedStyle(e)),i(e)},[])}}(t),i="function"==typeof r?r({present:o.isPresent}):n.Children.only(r),a=(0,l.e)(o.ref,function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(i));return"function"==typeof r||o.isPresent?n.cloneElement(i,{ref:a}):null};function v(e){return e?.animationName||"none"}m.displayName="Presence";var x=o["useId".toString()]||(()=>void 0),N=0;function b(e){let[t,r]=n.useState(x());return p(()=>{e||r(e=>e??String(N++))},[e]),e||(t?`radix-${t}`:"")}var g="Collapsible",[w,h]=a(g),[y,R]=w(g),C=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,open:o,defaultOpen:a,disabled:l,onOpenChange:u,...s}=e,[c=!1,p]=d({prop:o,defaultProp:a,onChange:u});return(0,i.jsx)(y,{scope:r,disabled:l,contentId:b(),open:c,onOpenToggle:n.useCallback(()=>p(e=>!e),[p]),children:(0,i.jsx)(f.div,{"data-state":O(c),"data-disabled":l?"":void 0,...s,ref:t})})});C.displayName=g;var j="CollapsibleTrigger",A=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,...n}=e,o=R(j,r);return(0,i.jsx)(f.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":O(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...n,ref:t,onClick:s(e.onClick,o.onOpenToggle)})});A.displayName=j;var M="CollapsibleContent",_=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,o=R(M,e.__scopeCollapsible);return(0,i.jsx)(m,{present:r||o.open,children:({present:e})=>(0,i.jsx)(I,{...n,ref:t,present:e})})});_.displayName=M;var I=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,present:o,children:a,...u}=e,s=R(M,r),[c,d]=n.useState(o),m=n.useRef(null),v=(0,l.e)(t,m),x=n.useRef(0),N=x.current,b=n.useRef(0),g=b.current,w=s.open||c,h=n.useRef(w),y=n.useRef();return n.useEffect(()=>{let e=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(e)},[]),p(()=>{let e=m.current;if(e){y.current=y.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();x.current=t.height,b.current=t.width,h.current||(e.style.transitionDuration=y.current.transitionDuration,e.style.animationName=y.current.animationName),d(o)}},[s.open,o]),(0,i.jsx)(f.div,{"data-state":O(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!w,...u,ref:v,style:{"--radix-collapsible-content-height":N?`${N}px`:void 0,"--radix-collapsible-content-width":g?`${g}px`:void 0,...e.style},children:w&&a})});function O(e){return e?"open":"closed"}var E=n.createContext(void 0),S="Accordion",T=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[P,k,D]=function(e){let t=e+"CollectionProvider",[r,o]=function(e,t=[]){let r=[],o=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return o.scopeName=e,[function(t,o){let a=n.createContext(o),l=r.length;function u(t){let{scope:r,children:o,...u}=t,s=r?.[e][l]||a,c=n.useMemo(()=>u,Object.values(u));return(0,i.jsx)(s.Provider,{value:c,children:o})}return r=[...r,o],u.displayName=t+"Provider",[u,function(r,i){let u=i?.[e][l]||a,s=n.useContext(u);if(s)return s;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(o,...t)]}(t),[a,s]=r(t,{collectionRef:{current:null},itemMap:new Map}),c=e=>{let{scope:t,children:r}=e,o=n.useRef(null),l=n.useRef(new Map).current;return(0,i.jsx)(a,{scope:t,itemMap:l,collectionRef:o,children:r})};c.displayName=t;let d=e+"CollectionSlot",f=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,o=s(d,r),a=(0,l.e)(t,o.collectionRef);return(0,i.jsx)(u.g7,{ref:a,children:n})});f.displayName=d;let p=e+"CollectionItemSlot",m="data-radix-collection-item",v=n.forwardRef((e,t)=>{let{scope:r,children:o,...a}=e,c=n.useRef(null),d=(0,l.e)(t,c),f=s(p,r);return n.useEffect(()=>(f.itemMap.set(c,{ref:c,...a}),()=>void f.itemMap.delete(c))),(0,i.jsx)(u.g7,{[m]:"",ref:d,children:o})});return v.displayName=p,[{Provider:c,Slot:f,ItemSlot:v},function(t){let r=s(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${m}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},o]}(S),[$,U]=a(S,[D,h]),L=h(),F=n.forwardRef((e,t)=>{let{type:r,...n}=e;return(0,i.jsx)(P.Provider,{scope:e.__scopeAccordion,children:"multiple"===r?(0,i.jsx)(V,{...n,ref:t}):(0,i.jsx)(K,{...n,ref:t})})});F.displayName=S;var[W,z]=$(S),[H,q]=$(S,{collapsible:!1}),K=n.forwardRef((e,t)=>{let{value:r,defaultValue:o,onValueChange:a=()=>{},collapsible:l=!1,...u}=e,[s,c]=d({prop:r,defaultProp:o,onChange:a});return(0,i.jsx)(W,{scope:e.__scopeAccordion,value:s?[s]:[],onItemOpen:c,onItemClose:n.useCallback(()=>l&&c(""),[l,c]),children:(0,i.jsx)(H,{scope:e.__scopeAccordion,collapsible:l,children:(0,i.jsx)(G,{...u,ref:t})})})}),V=n.forwardRef((e,t)=>{let{value:r,defaultValue:o,onValueChange:a=()=>{},...l}=e,[u=[],s]=d({prop:r,defaultProp:o,onChange:a}),c=n.useCallback(e=>s((t=[])=>[...t,e]),[s]),f=n.useCallback(e=>s((t=[])=>t.filter(t=>t!==e)),[s]);return(0,i.jsx)(W,{scope:e.__scopeAccordion,value:u,onItemOpen:c,onItemClose:f,children:(0,i.jsx)(H,{scope:e.__scopeAccordion,collapsible:!0,children:(0,i.jsx)(G,{...l,ref:t})})})}),[B,Y]=$(S),G=n.forwardRef((e,t)=>{let{__scopeAccordion:r,disabled:o,dir:a,orientation:u="vertical",...c}=e,d=n.useRef(null),p=(0,l.e)(d,t),m=k(r),v="ltr"===function(e){let t=n.useContext(E);return e||t||"ltr"}(a),x=s(e.onKeyDown,e=>{if(!T.includes(e.key))return;let t=e.target,r=m().filter(e=>!e.ref.current?.disabled),n=r.findIndex(e=>e.ref.current===t),o=r.length;if(-1===n)return;e.preventDefault();let i=n,a=o-1,l=()=>{(i=n+1)>a&&(i=0)},s=()=>{(i=n-1)<0&&(i=a)};switch(e.key){case"Home":i=0;break;case"End":i=a;break;case"ArrowRight":"horizontal"===u&&(v?l():s());break;case"ArrowDown":"vertical"===u&&l();break;case"ArrowLeft":"horizontal"===u&&(v?s():l());break;case"ArrowUp":"vertical"===u&&s()}let c=i%o;r[c].ref.current?.focus()});return(0,i.jsx)(B,{scope:r,disabled:o,direction:a,orientation:u,children:(0,i.jsx)(P.Slot,{scope:r,children:(0,i.jsx)(f.div,{...c,"data-orientation":u,ref:p,onKeyDown:o?void 0:x})})})}),J="AccordionItem",[Q,X]=$(J),Z=n.forwardRef((e,t)=>{let{__scopeAccordion:r,value:n,...o}=e,a=Y(J,r),l=z(J,r),u=L(r),s=b(),c=n&&l.value.includes(n)||!1,d=a.disabled||e.disabled;return(0,i.jsx)(Q,{scope:r,open:c,disabled:d,triggerId:s,children:(0,i.jsx)(C,{"data-orientation":a.orientation,"data-state":ea(c),...u,...o,ref:t,disabled:d,open:c,onOpenChange:e=>{e?l.onItemOpen(n):l.onItemClose(n)}})})});Z.displayName=J;var ee="AccordionHeader",et=n.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,o=Y(S,r),a=X(ee,r);return(0,i.jsx)(f.h3,{"data-orientation":o.orientation,"data-state":ea(a.open),"data-disabled":a.disabled?"":void 0,...n,ref:t})});et.displayName=ee;var er="AccordionTrigger",en=n.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,o=Y(S,r),a=X(er,r),l=q(er,r),u=L(r);return(0,i.jsx)(P.ItemSlot,{scope:r,children:(0,i.jsx)(A,{"aria-disabled":a.open&&!l.collapsible||void 0,"data-orientation":o.orientation,id:a.triggerId,...u,...n,ref:t})})});en.displayName=er;var eo="AccordionContent",ei=n.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,o=Y(S,r),a=X(eo,r),l=L(r);return(0,i.jsx)(_,{role:"region","aria-labelledby":a.triggerId,"data-orientation":o.orientation,...l,...n,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function ea(e){return e?"open":"closed"}ei.displayName=eo;var el=F,eu=Z,es=et,ec=en,ed=ei}};
exports.id=417,exports.ids=[417],exports.modules={64794:()=>{},35557:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,16886,23)),Promise.resolve().then(r.t.bind(r,93562,23)),Promise.resolve().then(r.t.bind(r,32284,23)),Promise.resolve().then(r.t.bind(r,24512,23)),Promise.resolve().then(r.t.bind(r,38177,23)),Promise.resolve().then(r.t.bind(r,82096,23))},41486:(e,s,r)=>{Promise.resolve().then(r.bind(r,26517))},34974:(e,s,r)=>{"use strict";r.d(s,{Z:()=>u});var t=r(9848),l=r(52558),a=r(38327),o=r(94016),n=r(94665),i=r(67826),d=r(89845),c=r(92847),h=r(84700);let x=()=>{let e=(0,c.useRouter)(),[s,r]=(0,i.useState)(!1),[a,x]=(0,i.useState)(!0),u=(0,c.usePathname)();(0,i.useEffect)(()=>{u.startsWith("/dashboard/screen/")?r(!0):r(!1),console.log(u)},[]);let m=(0,d.I0)(),{currentUser:p}=(0,d.v9)(e=>e.user),[g,v]=(0,i.useState)(!1),[f,w]=(0,i.useState)(!1),b=async()=>{try{await h.Z.get("http://localhost:3000/api/logout"),e.push("/"),m((0,l.ni)())}catch(e){console.log(e.message)}},j=()=>{},[y,N]=(0,i.useState)(!1),[k,S]=(0,i.useState)(!1),[P,C]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=()=>{let e=window.pageYOffset;e>P?S(!0):S(!1),C(e<=0?0:e)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[P]),(0,t.jsxs)(t.Fragment,{children:[t.jsx("div",{className:`${s?"":k?"-translate-y-full":"translate-y-0"} bg-white fixed w-full z-50 shadow-[0px_3px_8px_0px_#00000024]  transition-all duration-100 ease-linear`,children:(0,t.jsxs)("div",{className:`flex ${s?"pl-5 pr-5 lg:pr-7 py-3":"max-w-screen-xl py-4 lg:py-0 px-5 xl:px-0"}  m-auto justify-between items-center   `,children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",onMouseEnter:()=>v(!1),children:[s?t.jsx("button",{onClick:()=>{m((0,l.GB)(a)),x(!a)},type:"button",class:"inline-flex items-center text-sm text-gray-500 rounded-lg hover:border px-1 py-1 hover:border-gray-300  outline-none",children:t.jsx("svg",{class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{"clip-rule":"evenodd","fill-rule":"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})}):t.jsx("button",{type:"button",class:"inline-flex lg:hidden items-center text-sm text-gray-500 rounded-lg hover:border px-1 py-1 hover:border-gray-300  outline-none",children:t.jsx("svg",{class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{"clip-rule":"evenodd","fill-rule":"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})}),(0,t.jsxs)(n.default,{href:"/",children:[t.jsx(o.default,{className:`${s?"h-auto w-auto":"lg:hidden h-auto w-auto"}`,width:100,height:130,src:"/logo1.png",alt:"logo1"}),s?"":t.jsx(o.default,{className:"lg:block hidden h-auto w-auto",width:110,height:100,src:"/logo2.png",alt:"logo2"})]})]}),s?"":(0,t.jsxs)("div",{className:"hidden lg:flex items-center gap-5",children:[(0,t.jsxs)("div",{className:"relative group py-4",children:[(0,t.jsxs)("button",{onMouseEnter:()=>v(!0),className:"bg-white py-2 rounded font-medium text-[#303030] flex items-center gap-2 ",children:["Certification courses"," ",t.jsx("p",{className:"text-[0.67rem] bg-[#FFA333] text-white px-[0.16rem] py-[0.1rem] rounded",children:"70% OFF"}),t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-4 h-4",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})]}),(0,t.jsxs)("div",{className:"absolute hidden group-hover:block bg-white py-2 w-full rounded-sm",children:[t.jsx("div",{className:"w-full h-[0.15rem] bg-[#0090df] mt-[0.37rem]"}),(0,t.jsxs)("div",{children:[t.jsx("h3",{className:"text-lg font-semibold px-4 py-2",children:"Most Popular"}),t.jsx("a",{href:"#",className:"block px-4 py-2 text-gray-800 hover:bg-gray-200",children:"Web Development"}),t.jsx("a",{href:"#",className:"block px-4 py-2 text-gray-800 hover:bg-gray-200",children:"Mobile App Development"}),t.jsx("a",{href:"#",className:"block px-4 py-2 text-gray-800 hover:bg-gray-200",children:"Cyber Security Course"})]})]})]}),t.jsx("div",{className:"py-4 text-[#303030]  font-medium",onMouseEnter:()=>v(!1),children:"Placement Guarantee courses"})]}),t.jsx("div",{className:"flex items-center gap-5 ",children:p?.name?(0,t.jsxs)(t.Fragment,{children:[s?t.jsx("div",{className:"relative",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 sm:block hidden",children:t.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"})})}):t.jsx(n.default,{href:"/dashboard",onClick:j,className:"font-medium text-[#303030]",children:"Dashboard"}),(0,t.jsxs)("div",{className:"relative group",children:[(0,t.jsxs)("div",{onMouseEnter:s?void 0:()=>v(!0),className:"flex items-center gap-2 cursor-pointer",children:[t.jsx("img",{className:"w-7 h-7 rounded-full",height:"100",width:"100",src:p?.photoUrl,alt:"profile"}),t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-3 h-3 hover:text-[#0090DF]",viewBox:"0 0 512 512",id:"down-arrow",fill:"currentColor",children:t.jsx("path",{d:"M98.9 184.7l1.8 2.1 136 156.5c4.6 5.3 11.5 8.6 19.2 8.6 7.7 0 14.6-3.4 19.2-8.6L411 187.1l2.3-2.6c1.7-2.5 2.7-5.5 2.7-8.7 0-8.7-7.4-15.8-16.6-15.8H112.6c-9.2 0-16.6 7.1-16.6 15.8 0 3.3 1.1 6.4 2.9 8.9z"})})]}),t.jsx("div",{className:"absolute hidden group-hover:block right-0",children:(0,t.jsxs)("div",{className:`bg-white shadow-lg ${s?"py-1":"py-3"} flex flex-col text-left max-w-72`,children:[t.jsx("div",{className:"w-full h-[0.15rem] bg-[#0090df] mt-[0.37rem]"}),(0,t.jsxs)("div",{className:"flex flex-col px-2 border-slate-200 border-b py-2",children:[t.jsx("span",{className:"text-md font-semibold",children:p.name}),t.jsx("span",{className:"text-md  overflow-hidden text-ellipsis whitespace-nowrap",children:p.email})]}),t.jsx("button",{className:"text-left py-2 px-2 hover:text-[#4AADE6]",onClick:b,children:"Logout"})]})})]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{onClick:j,className:"flex gap-2 text-black cursor-pointer hover:text-[#35A3E3]",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5 mt-[0.1rem]",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),t.jsx("h3",{className:"font-medium lg:block hidden",children:"Search"})]}),t.jsx(n.default,{href:"/login",className:"border px-4 py-1 lg:py-2 font-medium rounded-sm border-[#0090DF] text-[#35A3E3] hover:bg-[#35A3E3] hover:text-white ease-in-out delay-100 transition-colors duration-200 sm:block hidden",children:"Login"})]})})]})}),t.jsx("div",{onMouseEnter:()=>v(!1),className:`${g?"":"hidden"} bg-[#0b0b0b2f] bg-opacity-60 backdrop-filter backdrop-blur-[4px] -translate-y-10 transition-opacity overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-30  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full mt-[4.5rem]`})]})},u=(0,a.default)(()=>Promise.resolve(x),{ssr:!1})},58020:(e,s,r)=>{"use strict";r.d(s,{Z:()=>a,t:()=>l});let t=(0,r(20881).oM)({name:"courses",initialState:{courses:null},reducers:{loadCourses:(e,s)=>{e.courses=s.payload}}}),{loadCourses:l}=t.actions,a=t.reducer},26517:(e,s,r)=>{"use strict";r.r(s),r.d(s,{ReduxProvider:()=>p});var t=r(9848),l=r(87346),a=r(20881),o=r(52558),n=r(58020),i=r(57945),d=r(84530);let c=(0,l.UY)({user:o.ZP,courses:n.Z}),h={key:"root",version:1,storage:d.Z},x=(0,i.OJ)(h,c),u=(0,a.xC)({reducer:x,middleware:e=>e({serializableCheck:!1})});(0,i.p5)(u);var m=r(89845);function p({children:e}){return t.jsx(m.zt,{store:u,children:e})}},52558:(e,s,r)=>{"use strict";r.d(s,{GB:()=>h,NT:()=>o,Vh:()=>n,ZP:()=>x,_:()=>c,ni:()=>d,q5:()=>i});var t=r(20881);let l={currentUser:null,openSidebar:!1,loading:!1},a=(0,t.oM)({name:"user",initialState:l,reducers:{signInStart:e=>{e.loading=!0},signInSuccess:(e,s)=>{e.currentUser=s.payload,e.loading=!1},signInFailure:e=>{e.loading=!1},logOut:()=>l,loadingState:(e,s)=>{e.loading=s.payload},openScreenSidebar:(e,s)=>{e.openSidebar=s.payload}}}),{signInStart:o,signInSuccess:n,signInFailure:i,logOut:d,loadingState:c,openScreenSidebar:h}=a.actions,x=a.reducer},20488:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>x,metadata:()=>h});var t=r(15132),l=r(3523),a=r.n(l);r(68751);var o=r(79911);let n=(0,o.createProxy)(String.raw`G:\CODSOFT\pathshala\src\redux\provider.js`),{__esModule:i,$$typeof:d}=n;n.default;let c=(0,o.createProxy)(String.raw`G:\CODSOFT\pathshala\src\redux\provider.js#ReduxProvider`),h={description:"Generated by create next app"};function x({children:e}){return(0,t.jsxs)("html",{lang:"en",children:[t.jsx("head",{children:t.jsx("title",{children:"Pathshala | Online Learning Platform"})}),t.jsx("body",{className:a().className,children:t.jsx(c,{children:e})})]})}},55484:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>l});var t=r(8566);let l=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},68751:()=>{}};
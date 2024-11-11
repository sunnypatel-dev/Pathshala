(()=>{var e={};e.id=722,e.ids=[722],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},27790:e=>{"use strict";e.exports=require("assert")},17702:e=>{"use strict";e.exports=require("events")},92048:e=>{"use strict";e.exports=require("fs")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},55315:e=>{"use strict";e.exports=require("path")},76162:e=>{"use strict";e.exports=require("stream")},74175:e=>{"use strict";e.exports=require("tty")},17360:e=>{"use strict";e.exports=require("url")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},69593:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>d,routeModule:()=>h,tree:()=>c}),t(437),t(59900),t(35866);var l=t(23191),a=t(88716),r=t(37922),i=t.n(r),o=t(95231),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);t.d(s,n);let c=["",{children:["categories",{children:["[courseId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,437)),"G:\\NextApp\\pathshala\\Pathshala\\src\\app\\categories\\[courseId]\\page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,59900)),"G:\\NextApp\\pathshala\\Pathshala\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["G:\\NextApp\\pathshala\\Pathshala\\src\\app\\categories\\[courseId]\\page.js"],x="/categories/[courseId]/page",m={require:t,loadChunk:()=>Promise.resolve()},h=new l.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/categories/[courseId]/page",pathname:"/categories/[courseId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},47141:(e,s,t)=>{Promise.resolve().then(t.bind(t,16096))},16096:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>f});var l=t(10326),a=t(17577),r=t(5466),i=t(96884),o=t(44099),n=t(25842),c=t(35047),d=t(33265),x=t(40381),m=t(47552),h=t(65941);t(90434);var p=t(45852);let u=({params:e})=>{let s=(0,c.useRouter)(),t=(0,n.I0)(),{courses:d}=(0,n.v9)(e=>e.courses),{currentUser:u,loading:f}=(0,n.v9)(e=>e.user),[g,j]=(0,a.useState)(null);(0,a.useEffect)(()=>{let[s]=d.filter(s=>s._id===e.courseId);j(s)},[]);let[N,b]=(0,a.useState)({firstName:"",lastName:"",email:"",password:"",phone:"",couponCode:"",chooseObjective:"",chooseBatch:""}),v=e=>{let{name:s,value:t}=e.target;b(e=>({...e,[s]:t}))},w=async l=>{l.preventDefault(),t((0,m._)(!0));try{let t=await o.Z.post("/api/signup",N);if(200===t.data.status){x.ZP.success("Signup Successful!");let l=await o.Z.post("/api/enroll_course",{userId:t.data.savedUser._id,courseId:e.courseId});200===l.status&&(x.ZP.success(`Successfully Enrolled to ${g.name} Course !`),setTimeout(()=>{s.push("/dashboard")},2500))}else 409===t.data.status&&(x.ZP.error("User Already Exist!"),x.ZP.error("Try Login First!"),setTimeout(()=>{s.push("/login")},2500));b({firstName:"",lastName:"",email:"",password:"",phone:"",couponCode:"",chooseObjective:"",chooseBatch:""})}catch(e){x.ZP.error("Internal Error!"),setTimeout(()=>{s.push("/")},2500),console.log(e)}t((0,m._)(!1))},y=async l=>{l.preventDefault(),t((0,m._)(!0));try{let l=await o.Z.post("/api/enroll_course",{userId:u._id,courseId:e.courseId});200===l.status&&(x.ZP.success("Successfully Enrolled!"),t((0,m.Vh)(l.data.user)),setTimeout(()=>{s.push("/dashboard")},2500)),b({phone:"",couponCode:"",chooseObjective:"",chooseBatch:""})}catch(e){409===e.response.status?(x.ZP.success("You have already enrolled in this Course!"),setTimeout(()=>{s.push("/dashboard")},2500)):(x.ZP.error("Internal Error!"),s.push("/")),b({phone:"",couponCode:"",chooseObjective:"",chooseBatch:""})}t((0,m._)(!1))};return(0,l.jsxs)(l.Fragment,{children:[l.jsx(p.Z,{}),(0,l.jsxs)("section",{className:"xl:pt-28 max-w-screen-xl m-auto",children:[(0,l.jsxs)("div",{style:{backgroundImage:`url('${g?.img2}')`},className:" bg-cover bg-no-repeat  xl:rounded-xl px-5 sm:px-6 pt-28 xl:pt-8 pb-8 flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:items-start",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-5 py-1 lg:gap-7 max-w-screen-md lg:w-auto",children:[l.jsx("div",{className:"bg-[#FFD907] text-[#1b6b52e9] w-fit py-1 px-4 rounded-md font-bold text-[0.85rem] sm:text-[0.96rem] lg:text-lg",children:"Government-certified online training"}),(0,l.jsxs)("h1",{className:"text-white text-[2rem] leading-9 sm:text-4xl lg:text-5xl font-extrabold",children:[g?.name," ",l.jsx("br",{})," Course"]}),l.jsx("p",{className:"font-bold text-lg text-white md:w-[75%]",children:g?.description}),(0,l.jsxs)("div",{className:"font-bold text-lg text-white flex items-center gap-2",children:[l.jsx("img",{className:"w-8 md:w-10",src:"/speaker.png",alt:"ele"}),"English, हिन्दी"]}),(0,l.jsxs)("div",{className:"flex flex-wrap gap-3 text-[0.94rem] lg:text-[1.1rem] md:w-[75%]",children:[(0,l.jsxs)("span",{className:"bg-white text-[#4c4c4c] font-semibold  px-4 py-1 rounded-full flex items-center gap-1",children:[l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"})}),"Cetificate of Training"]}),(0,l.jsxs)("span",{className:"bg-white text-[#4c4c4c] font-semibold  px-4 py-1 rounded-full  flex items-center gap-1",children:[l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"})}),"Placement Assistance"]}),(0,l.jsxs)("span",{className:"bg-white text-[#4c4c4c] font-semibold  px-4 py-1 rounded-full flex items-center gap-1",children:[l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"})})," ",g?.duration,", 1 hr/day (flexible schedule)"]})]}),(0,l.jsxs)("div",{className:"hidden lg:flex items-center bg-white text-[#2e2e2e] text-sm w-fit p-3 gap-2 rounded-md ",children:[l.jsx("img",{src:"/offer-1-1.png",alt:"offer",className:"w-10"}),(0,l.jsxs)("p",{className:"pr-4",children:[l.jsx("span",{className:"text-[#000]",children:"1+1 Offer: "}),"Get Internship & Job Preparation training FREE on",l.jsx("br",{})," purchase of ",g?.name," training!"]})]})]}),l.jsx("div",{className:`bg-white max-w-[360px] mt-10 lg:mt-0 h-fit rounded-lg ${u?"p-0":"p-5"}`,children:u?l.jsx("form",{onSubmit:y,className:"p-4",children:(0,l.jsxs)("fieldset",{className:" flex flex-col gap-3",children:[(0,l.jsxs)("div",{className:"flex flex-col ",children:[l.jsx("label",{className:"text-[0.95rem] font-medium text-[#303030]",htmlFor:"phone",children:"Mobile number"}),l.jsx("input",{className:"border  w-[100%] text-[0.92rem] outline-none px-3 py-1 rounded-sm text-gray-500",type:"text",id:"phone",value:N.phone,onChange:v,name:"phone",placeholder:"+91 8737363633",required:!0,pattern:"\\+\\d{1,3}\\d{9,12}",title:"Mobile number must start with a country code followed by 9 to 12 digits."})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row gap-3",children:[(0,l.jsxs)("div",{className:"flex flex-col  ",children:[l.jsx("label",{className:"text-[0.95rem]",htmlFor:"couponCode",children:"Coupon code"}),l.jsx("input",{className:"border w-full text-[0.92rem] font-medium text-[#303030] outline-none px-3 py-1 rounded-sm ",type:"text",id:"couponCode",name:"couponCode",placeholder:"CS5510"})]}),(0,l.jsxs)("div",{className:"flex flex-col  w-full",children:[l.jsx("label",{className:"text-[0.95rem]",htmlFor:"chooseBatch",children:"Choose batch"}),(0,l.jsxs)("select",{id:"chooseBatch",name:"chooseBatch",className:"border w-full text-[0.92rem] bg-white outline-none px-3 py-2 rounded-sm  text-[#303030]",children:[l.jsx("option",{value:"",children:"Choose a date"}),[0,1,2].map(e=>{let s=new Date;s.setDate(s.getDate()+e);let t=`${s.getDate()} ${s.toLocaleString("default",{month:"short"})}, ${s.getFullYear()}`;return l.jsx("option",{value:t,children:t},t)})]})]})]}),l.jsx("p",{className:"text-teal-500 text-[11.8px] font-medium py-1",children:"You saved an additional 150/-"})]}),(0,l.jsxs)("div",{className:"flex flex-col ",children:[(0,l.jsxs)("label",{className:"text-[0.95rem] font-medium text-[#303030]",htmlFor:"phone",children:["I want to learn ",g?.name]}),(0,l.jsxs)("select",{id:"chooseBatch",name:"chooseBatch",className:"border w-full text-[0.92rem] bg-white outline-none px-3 py-2 h-full rounded-sm  text-[#303030]",children:[l.jsx("option",{value:"",children:"Choose your objective"}),l.jsx("option",{value:"gain_skill",children:"Gain a new skill"}),l.jsx("option",{value:"improve_career",children:"Improve career prospects"}),l.jsx("option",{value:"personal_interest",children:"Pursue a personal interest"})]})]}),(0,l.jsxs)("div",{className:"flex  gap-3 items-center",children:[l.jsx("span",{className:"text-[#FF7A00] text-md sm:text-lg font-semibold",children:"₹ 1349"}),l.jsx("p",{className:"line-through font-normal text-xs sm:text-sm text-[#303030]",children:"₹ 4499"}),(0,l.jsxs)("p",{className:"font-normal text-xs sm:text-sm text-[#303030]",children:["Valid till ",new Date().getDate()," ",new Date().toLocaleString("default",{month:"short"})]})]}),f?(0,l.jsxs)("button",{disabled:!0,className:"bg-[#008fcc]  flex items-center gap-2 justify-center py-2 rounded-sm text-white ",children:[" ","Enroll Now",(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",id:"loading",className:"w-6 h-6 animate-spin ",children:[l.jsx("circle",{cx:"17.8",cy:"6.2",r:"2",fill:"#ffffff","fill-opacity":".9"}),l.jsx("circle",{cx:"12",cy:"4",r:"2",fill:"#ffffff","fill-opacity":".8"}),l.jsx("circle",{cx:"6.2",cy:"6.2",r:"2",fill:"#ffffff","fill-opacity":".7"}),l.jsx("circle",{cx:"4",cy:"12",r:"2",fill:"#ffffff","fill-opacity":".6"}),l.jsx("circle",{cx:"6.2",cy:"17.6",r:"2",fill:"#ffffff","fill-opacity":".5"}),l.jsx("circle",{cx:"12",cy:"20",r:"2",fill:"#ffffff","fill-opacity":".4"}),l.jsx("circle",{cx:"17.8",cy:"17.6",r:"2",fill:"#ffffff","fill-opacity":".3"}),l.jsx("circle",{cx:"20",cy:"12",r:"2",fill:"#ffffff","fill-opacity":".2"})]})]}):l.jsx("button",{className:"bg-[#00A5EC] hover:bg-[#008fcc] py-2 transition-colors duration-200 rounded-sm text-white ",type:"submit",children:"Enroll Now"})]})}):(0,l.jsxs)(l.Fragment,{children:[l.jsx(h.Z,{}),l.jsx("form",{onSubmit:w,className:"pt-4",children:(0,l.jsxs)("fieldset",{className:"border-t py-3 flex flex-col gap-3",children:[l.jsx("legend",{className:"text-center  text-[#676767] text-[0.78rem]",children:"OR"}),(0,l.jsxs)("div",{className:"flex flex-col ",children:[l.jsx("label",{className:"text-[0.95rem]",htmlFor:"email",children:"Email Id:"}),l.jsx("input",{className:"border  w-[100%] text-[0.92rem] outline-none px-3 py-1 rounded-sm text-gray-500",type:"email",id:"email",name:"email",value:N.email,onChange:v,placeholder:"john@gmail.com",required:!0,pattern:"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",title:"Please enter a valid email address",minLength:"5",maxLength:"50"})]}),(0,l.jsxs)("div",{className:"flex flex-col ",children:[l.jsx("label",{className:"text-[0.95rem]",htmlFor:"password",children:"Create Password:"}),l.jsx("input",{className:"border  w-[100%] text-[0.92rem] outline-none px-3 py-1 rounded-sm text-gray-500",type:"password",id:"password",name:"password",value:N.password,onChange:v,placeholder:"Must be at least 6 characters",required:!0,minLength:"8",maxLength:"50",pattern:"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",title:"Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character."})]}),(0,l.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,l.jsxs)("div",{className:"flex flex-col",children:[l.jsx("label",{className:"text-[0.95rem]",htmlFor:"firstName",children:"First Name"}),l.jsx("input",{className:"border w-[100%] text-[0.92rem] outline-none px-3 py-1 rounded-sm text-gray-500",type:"text",id:"firstName",name:"firstName",value:N.firstName,onChange:v,placeholder:"John"})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[l.jsx("label",{className:"text-[0.95rem]",htmlFor:"lastName",children:"Last Name"}),l.jsx("input",{className:"border w-[100%]  text-[0.92rem] outline-none px-3 py-1 rounded-sm text-gray-500",type:"text",id:"lastName",value:N.lastName,onChange:v,name:"lastName",placeholder:"Doe"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col ",children:[l.jsx("label",{className:"text-[0.95rem]",htmlFor:"phone",children:"Mobile number"}),l.jsx("input",{className:"border  w-[100%] text-[0.92rem] outline-none px-3 py-1 rounded-sm text-gray-500",type:"text",id:"phone",value:N.phone,onChange:v,name:"phone",placeholder:"+91 8737363633",required:!0,pattern:"\\+\\d{1,3}\\d{9,12}",title:"Mobile number must start with a country code followed by 9 to 12 digits."})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row gap-3",children:[(0,l.jsxs)("div",{className:"flex flex-col  ",children:[l.jsx("label",{className:"text-[0.95rem]",htmlFor:"couponCode",children:"Coupon code"}),l.jsx("input",{className:"border w-full text-[0.92rem] font-medium text-[#303030] outline-none px-3 py-1 rounded-sm ",type:"text",value:N.couponCode,onChange:v,id:"couponCode",name:"couponCode",placeholder:"CS5510"})]}),(0,l.jsxs)("div",{className:"flex flex-col  w-full",children:[l.jsx("label",{className:"text-[0.95rem]",htmlFor:"chooseBatch",children:"Choose batch"}),(0,l.jsxs)("select",{id:"chooseBatch",name:"chooseBatch",value:N.chooseBatch,onChange:v,className:"border w-full text-[0.92rem] bg-white outline-none px-3 py-2 rounded-sm  text-[#303030]",children:[l.jsx("option",{value:"",children:"Choose a date"}),[0,1,2].map(e=>{let s=new Date;s.setDate(s.getDate()+e);let t=`${s.getDate()} ${s.toLocaleString("default",{month:"short"})}, ${s.getFullYear()}`;return l.jsx("option",{value:t,children:t},t)})]})]})]}),l.jsx("p",{className:"text-teal-500 text-[11.8px] font-medium py-1",children:"You saved an additional 150/-"})]}),(0,l.jsxs)("div",{className:"flex flex-col ",children:[(0,l.jsxs)("label",{className:"text-[0.95rem] font-medium text-[#303030]",htmlFor:"phone",children:["I want to learn ",g?.name]}),(0,l.jsxs)("select",{id:"chooseObjective",name:"chooseObjective",value:N.chooseObjective,onChange:v,className:"border w-full text-[0.92rem] bg-white outline-none px-3 py-2 h-full rounded-sm  text-[#303030]",children:[l.jsx("option",{value:"",children:"Choose your objective"}),l.jsx("option",{value:"gain_skill",children:"Gain a new skill"}),l.jsx("option",{value:"improve_career",children:"Improve career prospects"}),l.jsx("option",{value:"personal_interest",children:"Pursue a personal interest"})]})]}),(0,l.jsxs)("div",{className:"flex  gap-3 items-center",children:[l.jsx("span",{className:"text-[#FF7A00] text-md sm:text-lg font-semibold",children:"₹ 1349"}),l.jsx("p",{className:"line-through font-normal text-xs sm:text-sm text-[#303030]",children:"₹ 4499"}),(0,l.jsxs)("p",{className:"font-normal text-xs sm:text-sm text-[#303030]",children:["Valid till ",new Date().getDate()," ",new Date().toLocaleString("default",{month:"short"})]})]}),f?(0,l.jsxs)("button",{disabled:!0,className:"bg-[#008fcc] flex items-center gap-2 justify-center py-2 rounded-sm text-white ",children:[" ","Enroll Now",(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",id:"loading",className:"w-6 h-6 animate-spin ",children:[l.jsx("circle",{cx:"17.8",cy:"6.2",r:"2",fill:"#ffffff","fill-opacity":".9"}),l.jsx("circle",{cx:"12",cy:"4",r:"2",fill:"#ffffff","fill-opacity":".8"}),l.jsx("circle",{cx:"6.2",cy:"6.2",r:"2",fill:"#ffffff","fill-opacity":".7"}),l.jsx("circle",{cx:"4",cy:"12",r:"2",fill:"#ffffff","fill-opacity":".6"}),l.jsx("circle",{cx:"6.2",cy:"17.6",r:"2",fill:"#ffffff","fill-opacity":".5"}),l.jsx("circle",{cx:"12",cy:"20",r:"2",fill:"#ffffff","fill-opacity":".4"}),l.jsx("circle",{cx:"17.8",cy:"17.6",r:"2",fill:"#ffffff","fill-opacity":".3"}),l.jsx("circle",{cx:"20",cy:"12",r:"2",fill:"#ffffff","fill-opacity":".2"})]})]}):l.jsx("button",{className:"bg-[#00A5EC] hover:bg-[#008fcc] py-2 transition-colors duration-200 rounded-sm text-white ",type:"submit",children:"Enroll Now"})]})})]})})]}),(0,l.jsxs)("div",{className:"py-10",children:[l.jsx("h1",{className:"text-3xl font-bold text-center py-12",children:"Course Highlights"}),(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-10 gap-12",children:[(0,l.jsxs)("div",{className:"flex gap-5 items-center",children:[l.jsx("img",{className:"w-14",src:"/video_tutorials.png.webp",alt:"video_tut"}),(0,l.jsxs)("span",{children:[l.jsx("h3",{className:"text-lg text-[#232323] font-semibold ",children:"Learn online"}),l.jsx("p",{className:"text-[#232323]",children:"At your own schedule"})]})]}),(0,l.jsxs)("div",{className:"flex gap-5 items-center",children:[l.jsx("img",{className:"w-14",src:"/video_tutorials.png.webp",alt:"video_tut"}),(0,l.jsxs)("span",{children:[l.jsx("h3",{className:"text-lg text-[#232323] font-semibold ",children:"Mobile friendly"}),l.jsx("p",{className:"text-[#232323]",children:"No laptop? No problem"})]})]}),(0,l.jsxs)("div",{className:"flex gap-5 items-center",children:[l.jsx("img",{className:"w-14",src:"/video_tutorials.png.webp",alt:"video_tut"}),(0,l.jsxs)("span",{children:[l.jsx("h3",{className:"text-lg text-[#232323] font-semibold ",children:"Certificate of training"}),l.jsx("p",{className:"text-[#232323]",children:"from Pathshala Trainings"})]})]}),(0,l.jsxs)("div",{className:"flex gap-5 items-center",children:[l.jsx("img",{className:"w-14",src:"/video_tutorials.png.webp",alt:"video_tut"}),(0,l.jsxs)("span",{children:[l.jsx("h3",{className:"text-lg text-[#232323] font-semibold ",children:"Placement assistance"}),l.jsx("p",{className:"text-[#232323]",children:"To build your career"})]})]}),(0,l.jsxs)("div",{className:"flex gap-5 items-center",children:[l.jsx("img",{className:"w-14",src:"/video_tutorials.png.webp",alt:"video_tut"}),(0,l.jsxs)("span",{children:[l.jsx("h3",{className:"text-lg text-[#232323] font-semibold ",children:"Beginner friendly"}),l.jsx("p",{className:"text-[#232323]",children:"No prior knowledge required"})]})]}),(0,l.jsxs)("div",{className:"flex gap-5 items-center",children:[l.jsx("img",{className:"w-14",src:"/video_tutorials.png.webp",alt:"video_tut"}),(0,l.jsxs)("span",{children:[(0,l.jsxs)("h3",{className:"text-lg text-[#232323] font-semibold ",children:[g?.duration," duration"]}),l.jsx("p",{className:"text-[#232323]",children:"1 hr/day (flexible schedule)"})]})]})]})]}),(0,l.jsxs)("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-14 px-10 pt-7",children:[(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("h1",{className:"text-[1.8rem] font-bold pt-7 pb-5",children:["Why Learn ",g?.name,"?"]}),(0,l.jsxs)("div",{className:"py-2",children:[l.jsx("h3",{className:"text-lg text-[#232323] font-semibold ",children:"Build awesome websites"}),l.jsx("p",{className:"text-[1.1rem] text-[#444444]",children:"Mark Zuckerberg built Facebook. Sachin Bansal built Flipkart. What will you build?"})]}),(0,l.jsxs)("div",{className:"py-2",children:[l.jsx("h3",{className:"text-lg text-[#232323] font-semibold ",children:"Be in demand"}),l.jsx("p",{className:"text-[1.1rem] text-[#444444]",children:"With 1.7 billion websites on the internet, it is one of the hottest career options with an average fresher salary of 6"})]}),(0,l.jsxs)("div",{className:"py-2",children:[l.jsx("h3",{className:"text-lg text-[#232323] font-semibold ",children:"Eat-Sleep-Code-Repeat"}),l.jsx("p",{className:"text-[1.1rem] text-[#444444]",children:"Be it rain or sunshine, coding is always on your mind."})]})]}),(0,l.jsxs)("div",{className:"",children:[l.jsx("h1",{className:"text-[1.8rem] font-bold pt-7 pb-5",children:"Placement assistance you'll receive?"}),(0,l.jsxs)("div",{className:"py-2",children:[l.jsx("h3",{className:"text-lg text-[#232323] font-semibold ",children:"Free Placement Prep Training"}),l.jsx("p",{className:"text-[1.1rem] text-[#444444]",children:"Learn how to build your resume, make great applications, and ace your interviews."})]}),(0,l.jsxs)("div",{className:"py-2",children:[l.jsx("h3",{className:"text-lg text-[#232323] font-semibold ",children:"Curated internships & jobs"}),l.jsx("p",{className:"text-[1.1rem] text-[#444444]",children:"Get internships and fresher jobs as per your preference in your inbox."})]}),(0,l.jsxs)("div",{className:"py-2",children:[l.jsx("h3",{className:"text-lg text-[#232323] font-semibold ",children:"Get highlighted on Internshala"}),l.jsx("p",{className:"text-[1.1rem] text-[#444444]",children:"Top performers will be highlighted in their internship &"})]})]})]}),(0,l.jsxs)("div",{className:"py-10",children:[l.jsx("h1",{className:"text-3xl font-bold text-center py-12",children:"How will your training work?"}),(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-10 gap-12",children:[(0,l.jsxs)("div",{className:"flex gap-5 items-center",children:[l.jsx("img",{className:"w-14",src:"/video_tutorials.png.webp",alt:"video_tut"}),(0,l.jsxs)("span",{children:[l.jsx("h3",{className:"text-lg text-[#232323] font-semibold ",children:"Learn online"}),l.jsx("p",{className:"text-[#232323]",children:"At your own schedule"})]})]}),(0,l.jsxs)("div",{className:"flex gap-5 items-center",children:[l.jsx("img",{className:"w-14",src:"/video_tutorials.png.webp",alt:"video_tut"}),(0,l.jsxs)("span",{children:[l.jsx("h3",{className:"text-lg text-[#232323] font-semibold ",children:"Mobile friendly"}),l.jsx("p",{className:"text-[#232323]",children:"No laptop? No problem"})]})]}),(0,l.jsxs)("div",{className:"flex gap-5 items-center",children:[l.jsx("img",{className:"w-14",src:"/video_tutorials.png.webp",alt:"video_tut"}),(0,l.jsxs)("span",{children:[l.jsx("h3",{className:"text-lg text-[#232323] font-semibold ",children:"Certificate of training"}),l.jsx("p",{className:"text-[#232323]",children:"from Pathshala Trainings"})]})]}),(0,l.jsxs)("div",{className:"flex gap-5 items-center",children:[l.jsx("img",{className:"w-14",src:"/video_tutorials.png.webp",alt:"video_tut"}),(0,l.jsxs)("span",{children:[l.jsx("h3",{className:"text-lg text-[#232323] font-semibold ",children:"Placement assistance"}),l.jsx("p",{className:"text-[#232323]",children:"To build your career"})]})]}),(0,l.jsxs)("div",{className:"flex gap-5 items-center",children:[l.jsx("img",{className:"w-14",src:"/video_tutorials.png.webp",alt:"video_tut"}),(0,l.jsxs)("span",{children:[l.jsx("h3",{className:"text-lg text-[#232323] font-semibold ",children:"Beginner friendly"}),l.jsx("p",{className:"text-[#232323]",children:"No prior knowledge required"})]})]}),(0,l.jsxs)("div",{className:"flex gap-5 items-center",children:[l.jsx("img",{className:"w-14",src:"/video_tutorials.png.webp",alt:"video_tut"}),(0,l.jsxs)("span",{children:[l.jsx("h3",{className:"text-lg text-[#232323] font-semibold ",children:"8 weeks duration"}),l.jsx("p",{className:"text-[#232323]",children:"1 hr/day (flexible schedule)"})]})]})]})]}),(0,l.jsxs)("div",{className:"px-5",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-4 py-10 ",children:[(0,l.jsxs)("h1",{className:"text-2xl sm:text-3xl font-bold text-center",children:[g?.name," Training Syllabus"]}),l.jsx("h2",{className:"text-md sm:text-lg text-[#2f2e2e] font-semibold text-center",children:"After completing the training, you can also download videos for future reference"})]}),l.jsx(r.UQ,{className:"pb-10 max-w-screen-sm m-auto ",type:"single",collapsible:!0,children:g?.syllabus?.map((e,s)=>l.jsxs(r.Qd,{value:`item-${s}`,className:"border border-slate-200 px-3 ",children:[l.jsx(r.o4,{className:"text-lg sm:text-xl text-left",children:e.chapter}),l.jsx(r.vF,{children:l.jsx("ul",{className:"list-disc px-5 text-[0.96rem] sm:text-[1.1rem] flex flex-col gap-3",children:e.topics.map((e,s)=>l.jsx("li",{children:0===s?l.jsx("a",{className:"text-blue-700",href:"#",children:e.topicName}):e.topicName},s))})})]},s))})]})]}),l.jsx(i.Z,{}),l.jsx(x.x7,{position:"bottom-right",reverseOrder:!1,toastOptions:{duration:2400,style:{background:"#404040",color:"#fff"}}})]})},f=(0,d.default)(()=>Promise.resolve(u),{ssr:!1})},96884:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});var l=t(10326),a=t(46226);t(17577);let r=()=>(0,l.jsxs)("div",{className:"bg-[#0565c8] ",children:[(0,l.jsxs)("div",{className:"max-w-screen-xl m-auto lg:px-10 pt-10",children:[(0,l.jsxs)("div",{className:"text-white flex xl:flex-row flex-col gap-6 mb-10 xl:mb-0 xl:gap-0",children:[l.jsx("h1",{className:"text-3xl font-bold flex-1",children:"Kickstart your career with Pathshala"}),l.jsx("p",{className:"text-[0.87rem] lg:text-[1.1rem] flex-1",children:"We’ll help you with your confusion about career choices, teach you practical skills and help you land a placement. Join a network of 600K+ learners and #KaroShuruaatYahinSe."})]}),(0,l.jsxs)("div",{className:"flex flex-wrap gap-5",children:[l.jsx("a",{href:"#categories",className:"bg-[#003984] text-white font-semibold py-2 px-4 lg:py-3 md:px-6 rounded-md",children:"Certification courses"}),l.jsx("a",{href:"#categories",className:"text-[#003984] bg-white font-semibold py-2 px-4 lg:py-3 md:px-6 rounded-md",children:"Placement Guarantee courses"})]}),l.jsx(a.default,{src:"/background-footer.png",className:"h-auto w-full pt-10",height:300,width:1e3,alt:"footer-bg"})]}),l.jsx("div",{className:"bg-[#212121] text-center py-5 text-white",children:"\xa9 Copyright Pathshala 2024"})]})},65941:(e,s,t)=>{"use strict";t.d(s,{Z:()=>h});var l=t(10326);t(17577);var a=t(32797),r=t(42585),i=t(11552);let o=(0,r.ZF)({apiKey:"AIzaSyDdDB0xX-noYKJrV3HZbNocqt8t6IZDAgo",authDomain:"pathshala-486d4.firebaseapp.com",projectId:"pathshala-486d4",storageBucket:"pathshala-486d4.appspot.com",messagingSenderId:"869664099003",appId:"1:869664099003:web:30dca44d35b788115f779e"});(0,i.cF)(o);var n=t(44099),c=t(25842),d=t(35047),x=t(47552),m=t(40381);let h=()=>{let e=(0,d.useRouter)(),s=(0,c.I0)(),t=async()=>{try{let t=(0,a.v0)(o),l=new a.hJ;l.setCustomParameters({prompt:"select_account"});let r=await (0,a.rh)(t,l),{email:i,displayName:c,photoURL:d}=r.user;console.log(r);let h=await n.Z.post("/api/signin_google/",{name:c,email:i,photoUrl:d});"OK"==h.statusText&&(s((0,x.Vh)(h.data.user)),m.ZP.success("Login Successfull!"),setTimeout(()=>{e.push("/dashboard")},2100))}catch(e){m.ZP.error("Internal Error!"),console.error("Could not login with Google",e)}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("button",{onClick:t,type:"submit",className:"flex w-full items-center py-2 hover:bg-[#d5d5d526] font-medium text-[#4c4c4c]  px-1 rounded-sm gap-1 justify-center border text-[0.9rem]",children:[l.jsx("img",{className:"w-4 object-contain",src:"/google-signin.png",alt:"google"}),"Continue with Google"]}),l.jsx(m.x7,{position:"bottom-right",reverseOrder:!1,toastOptions:{duration:2e3,style:{background:"#404040",color:"#fff"}}})]})}},5466:(e,s,t)=>{"use strict";t.d(s,{Qd:()=>c,UQ:()=>n,o4:()=>d,vF:()=>x});var l=t(10326),a=t(17577),r=t(6602),i=t(76812),o=t(91175);let n=r.fC,c=a.forwardRef(({className:e,...s},t)=>l.jsx(r.ck,{ref:t,className:(0,o.cn)("border-b",e),...s}));c.displayName="AccordionItem";let d=a.forwardRef(({className:e,children:s,...t},a)=>l.jsx(r.h4,{className:"flex",children:(0,l.jsxs)(r.xz,{ref:a,className:(0,o.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...t,children:[s,l.jsx(i.v4q,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})}));d.displayName=r.xz.displayName;let x=a.forwardRef(({className:e,children:s,...t},a)=>l.jsx(r.VY,{ref:a,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...t,children:l.jsx("div",{className:(0,o.cn)("pb-4 pt-0",e),children:s})}));x.displayName=r.VY.displayName},91175:(e,s,t)=>{"use strict";t.d(s,{cn:()=>r});var l=t(41135),a=t(31009);function r(...e){return(0,a.m6)((0,l.W)(e))}},437:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});let l=(0,t(68570).createProxy)(String.raw`G:\NextApp\pathshala\Pathshala\src\app\categories\[courseId]\page.js#default`)}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),l=s.X(0,[948,760,838,437,227,226,34,602,830],()=>t(69593));module.exports=l})();
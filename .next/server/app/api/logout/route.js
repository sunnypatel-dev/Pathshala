"use strict";(()=>{var e={};e.id=322,e.ids=[322],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},27252:(e,t,o)=>{o.r(t),o.d(t,{originalPathname:()=>g,patchFetch:()=>h,requestAsyncStorage:()=>l,routeModule:()=>i,serverHooks:()=>d,staticGenerationAsyncStorage:()=>c});var r={};o.r(r),o.d(r,{GET:()=>p});var s=o(49303),a=o(88716),u=o(60670),n=o(87070);async function p(e){try{console.log("logout");let e=n.NextResponse.json({message:"Logout Successful",success:!0});return e.cookies.set("token","",{httpOnly:!0,expires:new Date(0)}),e}catch(e){return n.NextResponse.json({error:e.message},{status:500})}}let i=new s.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/logout/route",pathname:"/api/logout",filename:"route",bundlePath:"app/api/logout/route"},resolvedPagePath:"G:\\NextApp\\pathshala\\Pathshala\\src\\app\\api\\logout\\route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:l,staticGenerationAsyncStorage:c,serverHooks:d}=i,g="/api/logout/route";function h(){return(0,u.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:c})}}};var t=require("../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),r=t.X(0,[948,972],()=>o(27252));module.exports=r})();
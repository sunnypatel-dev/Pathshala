"use strict";(()=>{var e={};e.id=243,e.ids=[243],e.modules={11185:e=>{e.exports=require("mongoose")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},54578:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>f,patchFetch:()=>S,requestAsyncStorage:()=>l,routeModule:()=>g,serverHooks:()=>m,staticGenerationAsyncStorage:()=>y});var i={};r.r(i),r.d(i,{POST:()=>c});var n=r(49303),a=r(88716),o=r(60670),s=r(23248),p=r(593);r(36571);var d=r(90839),u=r(87070);async function c(e){try{let{userId:t}=await e.json();if(!await d.Z.findById(t))return u.NextResponse.json({message:"User not found",status:400});{let e=await p.Z.find({user_id:t});return u.NextResponse.json({message:"Found Certifcate",certificates:e,status:200})}}catch(e){return u.NextResponse.json({message:"Internal Error"})}}(0,s.$)();let g=new n.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/get_certificate/route",pathname:"/api/get_certificate",filename:"route",bundlePath:"app/api/get_certificate/route"},resolvedPagePath:"G:\\NextApp\\pathshala\\Pathshala\\src\\app\\api\\get_certificate\\route.js",nextConfigOutput:"",userland:i}),{requestAsyncStorage:l,staticGenerationAsyncStorage:y,serverHooks:m}=g,f="/api/get_certificate/route";function S(){return(0,o.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:y})}},23248:(e,t,r)=>{r.d(t,{$:()=>a});var i=r(11185),n=r.n(i);async function a(){try{n().connect("mongodb+srv://sunnypatelkoder:sunnypatelkoder@cluster0.9gjeii7.mongodb.net/pathshala");let e=n().connection;e.on("connected",()=>{console.log("MONOG DB connceted successfully")}),e.on("error",e=>{console.log("MONOGO DB connection erorr. please make sure mongodb is runnign",+e)})}catch(e){console.log("Something went wrong"),console.log(e)}}},593:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(11185),n=r.n(i);let a=n().Schema({user_id:{type:String},username:{type:String},course_id:{type:String},course_name:{type:String},course_category:{type:String},certificateId:{type:String},certificateDownloadUrl:{type:String,default:"https://drive.google.com/file/d/1QZcw0o7L7GTbrS0GRA4YJeyp_rEVruTC/view?usp=sharing"},date_of_completion:{type:Date,default:Date.now}}),o=n().models.Certificate||n().model("Certificate",a)},36571:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(11185),n=r.n(i);let a=new(n()).Schema({category:{type:String,required:!0},name:{type:String,required:!0},duration:{type:String,required:!0},img1:{type:String,default:"/android.png.webp"},img2:{type:String,default:"/android.png.webp"},description:{type:String,required:!0},syllabus:[{chapter:{type:String,required:!0},topics:[{topicName:{type:String,required:!0},topicLink:{type:String,required:!0}}]}]}),o=n().models.Course||n().model("Course",a)},90839:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(11185),n=r.n(i);let a=new(n()).Schema({name:{type:String,required:[!0,"Please Provide a username"]},email:{type:String,required:[!0,"Please Provide a email"],unique:!0},password:{type:String,required:[!0,"Please Provide a password"]},phone:{type:String},photoUrl:{type:String,default:"/default-user.png"},isVerified:{type:Boolean,default:!1},isAdmin:{type:Boolean,default:!1},courses:[{category:{type:String,required:!0},name:{type:String,required:!0},duration:{type:String,required:!0},img1:{type:String,default:"/android.png.webp"},img2:{type:String,default:"/android.png.webp"},description:{type:String,required:!0},syllabus:[{chapter:{type:String,required:!0},topics:[{topicName:{type:String,required:!0},topicLink:{type:String,required:!0},topicProgress:{type:Boolean,default:!1}}]}],progress_status:{type:Number,default:0},createdAt:{type:Date,default:Date.now},certificates:[{certificateId:{type:String}}]}]}),o=n().models.User||n().model("User",a)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[948,972],()=>r(54578));module.exports=i})();
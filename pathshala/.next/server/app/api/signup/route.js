"use strict";(()=>{var e={};e.id=409,e.ids=[409],e.modules={11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6113:e=>{e.exports=require("crypto")},18641:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>f,originalPathname:()=>w,patchFetch:()=>q,requestAsyncStorage:()=>y,routeModule:()=>g,serverHooks:()=>h,staticGenerationAsyncStorage:()=>m,staticGenerationBailout:()=>S});var n={};r.r(n),r.d(n,{POST:()=>c});var a=r(51762),o=r(24143),s=r(14876),i=r(53552),u=r(30531),p=r(94922),d=r(64191),l=r.n(d);async function c(e){try{let{firstName:t,lastName:r,email:n,password:a,phone:o}=await e.json();if(await u.Z.findOne({email:n}))return p.NextResponse.json({message:"User Already Exists!",status:409});let s=await l().genSalt(10),i=await l().hash(a,s),d=new u.Z({name:t+" "+r,email:n,password:i,phone:o}),c=await d.save();return p.NextResponse.json({message:"User created successfully",success:!0,savedUser:c,status:200})}catch(e){return console.log("hi"),p.NextResponse.json({message:"Internal Error Bro!"},{status:500})}}(0,i.$)();let g=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/signup/route",pathname:"/api/signup",filename:"route",bundlePath:"app/api/signup/route"},resolvedPagePath:"G:\\CODSOFT\\pathshala\\src\\app\\api\\signup\\route.js",nextConfigOutput:"",userland:n}),{requestAsyncStorage:y,staticGenerationAsyncStorage:m,serverHooks:h,headerHooks:f,staticGenerationBailout:S}=g,w="/api/signup/route";function q(){return(0,s.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:m})}},53552:(e,t,r)=>{r.d(t,{$:()=>o});var n=r(11185),a=r.n(n);async function o(){try{a().connect("mongodb+srv://sunnypatelkoder:sunnypatelkoder@cluster0.9gjeii7.mongodb.net/pathshala");let e=a().connection;e.on("connected",()=>{console.log("MONOG DB connceted successfully")}),e.on("error",e=>{console.log("MONOGO DB connection erorr. please make sure mongodb is runnign",+e)})}catch(e){console.log("Something went wrong"),console.log(e)}}},30531:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(11185),a=r.n(n);let o=new(a()).Schema({name:{type:String,required:[!0,"Please Provide a username"]},email:{type:String,required:[!0,"Please Provide a email"],unique:!0},password:{type:String,required:[!0,"Please Provide a password"]},phone:{type:String},photoUrl:{type:String,default:"/default-user.png"},isVerified:{type:Boolean,default:!1},isAdmin:{type:Boolean,default:!1},courses:[{category:{type:String,required:!0},name:{type:String,required:!0},duration:{type:String,required:!0},img1:{type:String,default:"/android.png.webp"},img2:{type:String,default:"/android.png.webp"},description:{type:String,required:!0},syllabus:[{chapter:{type:String,required:!0},topics:[{topicName:{type:String,required:!0},topicLink:{type:String,required:!0},topicProgress:{type:Boolean,default:!1}}]}],progress_status:{type:Number,default:0},createdAt:{type:Date,default:Date.now},certificates:[{certificateId:{type:String}}]}]}),s=a().models.User||a().model("User",o)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[10,716,191],()=>r(18641));module.exports=n})();
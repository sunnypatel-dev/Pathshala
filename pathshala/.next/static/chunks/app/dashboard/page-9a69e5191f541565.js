(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{1150:function(e,s,l){Promise.resolve().then(l.bind(l,9083))},9083:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return p}});var t=l(8903),r=l(1484),a=l(9738),o=l(617),n=l(8799),c=()=>{let{currentUser:e}=(0,n.v9)(e=>e.user),[s,l]=(0,o.useState)([]);return(0,o.useEffect)(()=>{(async()=>{try{let s=await r.Z.post("http://localhost:3000/api/get_certificate/",{userId:e._id});l(s.data.certificates)}catch(e){console.log(e)}})()},[e._id]),(0,t.jsxs)("div",{className:"pb-6 pt-5 md:pb-6 md:pt-6",children:[(0,t.jsx)("h1",{className:"text-[1.3rem] sm:text-2xl font-bold text-[#494949]",children:"Certificates"}),(0,t.jsx)("div",{class:"relative overflow-x-auto shadow-md  mt-10",children:(0,t.jsxs)("table",{class:"w-full text-sm text-left rtl:text-right text-gray-500 ",children:[(0,t.jsx)("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 ",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"col",class:"px-6 py-3",children:"Enrolled Courses"}),(0,t.jsx)("th",{scope:"col",class:"px-6 py-3",children:"Category"}),(0,t.jsx)("th",{scope:"col",class:"px-6 py-3",children:"Date of Completion"}),(0,t.jsx)("th",{scope:"col",class:"px-6 py-3",children:"Status"}),(0,t.jsx)("th",{scope:"col",class:"px-6 py-3",children:"View Certificate"})]})}),(0,t.jsx)("tbody",{children:null==s?void 0:s.map((e,s)=>(0,t.jsxs)("tr",{class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[(0,t.jsx)("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:e.course_name}),(0,t.jsx)("td",{class:"px-6 py-4",children:e.course_category}),(0,t.jsx)("td",{class:"px-6 py-4",children:e.date_of_completion.substring(0,10)}),(0,t.jsx)("td",{class:"px-6 py-4 text-green-500",children:"Completed"}),(0,t.jsx)("td",{class:"px-6 py-4 text-blue-500",children:(0,t.jsx)(a.default,{href:e.certificateDownloadUrl,children:"Link"})})]}))})]})})]})};l(2331),l(7465);var i=l(1361),d=l(3509),x=l(8564),h=l(3562);let m=e=>{let{params:s}=e,{currentUser:l}=(0,n.v9)(e=>e.user),d=(0,n.I0)(),m=(0,h.useRouter)(),[p,u]=(0,o.useState)(!1);console.log(s.courseId);let f=async()=>{try{await r.Z.get("http://localhost:3000/api/logout"),d((0,i.ni)()),m.push("/login")}catch(e){console.log(e.message)}},[g,j]=(0,o.useState)([]);(0,o.useEffect)(()=>{j(null==l?void 0:l.courses.map(e=>{let s=e.syllabus.reduce((e,s)=>e+s.topics.length,0),l=e.syllabus.reduce((e,s)=>e+s.topics.filter(e=>e.topicProgress).length,0);return{courseId:e._id,percentageCompleted:l/s*100||0,totalTopics:s,totalTopicCompleted:l}}))},[l]);let[w,b]=(0,o.useState)(!1),[v,C]=(0,o.useState)("All"),[N,y]=(0,o.useState)("Dashboard");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("aside",{class:"fixed top-0 left-0 z-40 w-52 sm:w-64  border h-screen transition-transform sm:translate-x-0 ".concat(p?"translate-x-0":"-translate-x-full"),"aria-label":"Sidebar",children:(0,t.jsxs)("div",{class:"h-full px-3 overflow-y-auto  bg-white flex flex-col justify-between",children:[(0,t.jsxs)("ul",{class:"flex flex-col gap-3 pb-3 font-medium",children:[(0,t.jsx)("li",{className:"mx-3  py-3",children:(0,t.jsxs)(a.default,{href:"/",children:[(0,t.jsx)(x.default,{className:"md:hidden h-auto w-auto",width:100,height:130,src:"/logo1.png",alt:"logo1"}),(0,t.jsx)(x.default,{className:"md:block hidden h-auto w-auto",width:110,height:100,src:"/logo2.png",alt:"logo2"})]})}),(0,t.jsxs)("li",{onClick:e=>y("Dashboard"),class:"flex items-center gap-2 p-2 cursor-pointer text-gray-900  rounded-lg bg-[#f4f9fc] hover:bg-[#ecf6fd] group",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",viewBox:"0 0 64 64",id:"dashboard",children:(0,t.jsx)("path",{fill:"#6B7280","fill-rule":"evenodd",stroke:"#6B7280",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17.286 8H20.714C21.9164 7.99999 22.8862 7.99998 23.6756 8.05384 24.4872 8.10922 25.205 8.22597 25.8846 8.50747 27.5181 9.1841 28.8159 10.4819 29.4925 12.1154 29.774 12.795 29.8908 13.5128 29.9462 14.3244 30 15.1138 30 16.0836 30 17.286V20.714C30 21.9164 30 22.8863 29.9462 23.6756 29.8908 24.4872 29.774 25.205 29.4925 25.8846 28.8159 27.5181 27.5181 28.8159 25.8846 29.4925 25.205 29.774 24.4872 29.8908 23.6756 29.9462 22.8862 30 21.9164 30 20.714 30H17.286C16.0836 30 15.1138 30 14.3244 29.9462 13.5128 29.8908 12.795 29.774 12.1154 29.4925 10.4819 28.8159 9.1841 27.5181 8.50747 25.8846 8.22597 25.205 8.10922 24.4872 8.05384 23.6756 7.99998 22.8862 7.99999 21.9164 8 20.714V17.286C7.99999 16.0836 7.99998 15.1138 8.05384 14.3244 8.10922 13.5128 8.22597 12.795 8.50747 12.1154 9.1841 10.4819 10.4819 9.1841 12.1154 8.50747 12.795 8.22597 13.5128 8.10922 14.3244 8.05384 15.1138 7.99998 16.0836 7.99999 17.286 8zM14.5059 10.7143C13.83 10.7604 13.4364 10.8467 13.1359 10.9711 12.1558 11.3771 11.3771 12.1558 10.9711 13.1359 10.8467 13.4364 10.7604 13.83 10.7143 14.5059 10.6674 15.1938 10.6667 16.0726 10.6667 17.3333V20.6667C10.6667 21.9274 10.6674 22.8062 10.7143 23.4941 10.7604 24.17 10.8467 24.5636 10.9711 24.8641 11.3771 25.8442 12.1558 26.6229 13.1359 27.0289 13.4364 27.1533 13.83 27.2396 14.5059 27.2857 15.1938 27.3326 16.0726 27.3333 17.3333 27.3333H20.6667C21.9274 27.3333 22.8062 27.3326 23.4941 27.2857 24.17 27.2396 24.5636 27.1533 24.8641 27.0289 25.8442 26.6229 26.6229 25.8442 27.0289 24.8641 27.1533 24.5636 27.2396 24.17 27.2857 23.4941 27.3326 22.8062 27.3333 21.9274 27.3333 20.6667V17.3333C27.3333 16.0726 27.3326 15.1938 27.2857 14.5059 27.2396 13.83 27.1533 13.4364 27.0289 13.1359 26.6229 12.1558 25.8442 11.3771 24.8641 10.9711 24.5636 10.8467 24.17 10.7604 23.4941 10.7143 22.8062 10.6674 21.9274 10.6667 20.6667 10.6667H17.3333C16.0726 10.6667 15.1938 10.6674 14.5059 10.7143zM17.286 34H20.714C21.9164 34 22.8862 34 23.6756 34.0538 24.4872 34.1092 25.205 34.226 25.8846 34.5075 27.5181 35.1841 28.8159 36.4819 29.4925 38.1154 29.774 38.795 29.8908 39.5128 29.9462 40.3244 30 41.1138 30 42.0836 30 43.286V46.714C30 47.9164 30 48.8863 29.9462 49.6756 29.8908 50.4872 29.774 51.205 29.4925 51.8846 28.8159 53.5181 27.5181 54.8159 25.8846 55.4925 25.205 55.774 24.4872 55.8908 23.6756 55.9462 22.8862 56 21.9164 56 20.714 56H17.286C16.0836 56 15.1138 56 14.3244 55.9462 13.5128 55.8908 12.795 55.774 12.1154 55.4925 10.4819 54.8159 9.1841 53.5181 8.50747 51.8846 8.22597 51.205 8.10922 50.4872 8.05384 49.6756 7.99998 48.8862 7.99999 47.9164 8 46.714V43.286C7.99999 42.0836 7.99998 41.1138 8.05384 40.3244 8.10922 39.5128 8.22597 38.795 8.50747 38.1154 9.1841 36.4819 10.4819 35.1841 12.1154 34.5075 12.795 34.226 13.5128 34.1092 14.3244 34.0538 15.1138 34 16.0836 34 17.286 34zM14.5059 36.7143C13.83 36.7604 13.4364 36.8467 13.1359 36.9711 12.1558 37.3771 11.3771 38.1558 10.9711 39.1359 10.8467 39.4364 10.7604 39.83 10.7143 40.5059 10.6674 41.1938 10.6667 42.0726 10.6667 43.3333V46.6667C10.6667 47.9274 10.6674 48.8062 10.7143 49.4941 10.7604 50.17 10.8467 50.5636 10.9711 50.8641 11.3771 51.8442 12.1558 52.6229 13.1359 53.0289 13.4364 53.1533 13.83 53.2396 14.5059 53.2857 15.1938 53.3326 16.0726 53.3333 17.3333 53.3333H20.6667C21.9274 53.3333 22.8062 53.3326 23.4941 53.2857 24.17 53.2396 24.5636 53.1533 24.8641 53.0289 25.8442 52.6229 26.6229 51.8442 27.0289 50.8641 27.1533 50.5636 27.2396 50.17 27.2857 49.4941 27.3326 48.8062 27.3333 47.9274 27.3333 46.6667V43.3333C27.3333 42.0726 27.3326 41.1938 27.2857 40.5059 27.2396 39.83 27.1533 39.4364 27.0289 39.1359 26.6229 38.1558 25.8442 37.3771 24.8641 36.9711 24.5636 36.8467 24.17 36.7604 23.4941 36.7143 22.8062 36.6674 21.9274 36.6667 20.6667 36.6667H17.3333C16.0726 36.6667 15.1938 36.6674 14.5059 36.7143zM43.286 8H46.714C47.9164 7.99999 48.8862 7.99998 49.6756 8.05384 50.4872 8.10922 51.205 8.22597 51.8846 8.50747 53.5181 9.1841 54.8159 10.4819 55.4925 12.1154 55.774 12.795 55.8908 13.5128 55.9462 14.3244 56 15.1138 56 16.0836 56 17.286V20.714C56 21.9164 56 22.8863 55.9462 23.6756 55.8908 24.4872 55.774 25.205 55.4925 25.8846 54.8159 27.5181 53.5181 28.8159 51.8846 29.4925 51.205 29.774 50.4872 29.8908 49.6756 29.9462 48.8862 30 47.9164 30 46.714 30H43.286C42.0836 30 41.1138 30 40.3244 29.9462 39.5128 29.8908 38.795 29.774 38.1154 29.4925 36.4819 28.8159 35.1841 27.5181 34.5075 25.8846 34.226 25.205 34.1092 24.4872 34.0538 23.6756 34 22.8862 34 21.9164 34 20.714V17.286C34 16.0836 34 15.1138 34.0538 14.3244 34.1092 13.5128 34.226 12.795 34.5075 12.1154 35.1841 10.4819 36.4819 9.1841 38.1154 8.50747 38.795 8.22597 39.5128 8.10922 40.3244 8.05384 41.1138 7.99998 42.0836 7.99999 43.286 8zM40.5059 10.7143C39.83 10.7604 39.4364 10.8467 39.1359 10.9711 38.1558 11.3771 37.3771 12.1558 36.9711 13.1359 36.8467 13.4364 36.7604 13.83 36.7143 14.5059 36.6674 15.1938 36.6667 16.0726 36.6667 17.3333V20.6667C36.6667 21.9274 36.6674 22.8062 36.7143 23.4941 36.7604 24.17 36.8467 24.5636 36.9711 24.8641 37.3771 25.8442 38.1558 26.6229 39.1359 27.0289 39.4364 27.1533 39.83 27.2396 40.5059 27.2857 41.1938 27.3326 42.0726 27.3333 43.3333 27.3333H46.6667C47.9274 27.3333 48.8062 27.3326 49.4941 27.2857 50.17 27.2396 50.5636 27.1533 50.8641 27.0289 51.8442 26.6229 52.6229 25.8442 53.0289 24.8641 53.1533 24.5636 53.2396 24.17 53.2857 23.4941 53.3326 22.8062 53.3333 21.9274 53.3333 20.6667V17.3333C53.3333 16.0726 53.3326 15.1938 53.2857 14.5059 53.2396 13.83 53.1533 13.4364 53.0289 13.1359 52.6229 12.1558 51.8442 11.3771 50.8641 10.9711 50.5636 10.8467 50.17 10.7604 49.4941 10.7143 48.8062 10.6674 47.9274 10.6667 46.6667 10.6667H43.3333C42.0726 10.6667 41.1938 10.6674 40.5059 10.7143zM43.286 34H46.714C47.9164 34 48.8862 34 49.6756 34.0538 50.4872 34.1092 51.205 34.226 51.8846 34.5075 53.5181 35.1841 54.8159 36.4819 55.4925 38.1154 55.774 38.795 55.8908 39.5128 55.9462 40.3244 56 41.1138 56 42.0836 56 43.286V46.714C56 47.9164 56 48.8863 55.9462 49.6756 55.8908 50.4872 55.774 51.205 55.4925 51.8846 54.8159 53.5181 53.5181 54.8159 51.8846 55.4925 51.205 55.774 50.4872 55.8908 49.6756 55.9462 48.8862 56 47.9164 56 46.714 56H43.286C42.0836 56 41.1138 56 40.3244 55.9462 39.5128 55.8908 38.795 55.774 38.1154 55.4925 36.4819 54.8159 35.1841 53.5181 34.5075 51.8846 34.226 51.205 34.1092 50.4872 34.0538 49.6756 34 48.8862 34 47.9164 34 46.714V43.286C34 42.0836 34 41.1138 34.0538 40.3244 34.1092 39.5128 34.226 38.795 34.5075 38.1154 35.1841 36.4819 36.4819 35.1841 38.1154 34.5075 38.795 34.226 39.5128 34.1092 40.3244 34.0538 41.1138 34 42.0836 34 43.286 34zM40.5059 36.7143C39.83 36.7604 39.4364 36.8467 39.1359 36.9711 38.1558 37.3771 37.3771 38.1558 36.9711 39.1359 36.8467 39.4364 36.7604 39.83 36.7143 40.5059 36.6674 41.1938 36.6667 42.0726 36.6667 43.3333V46.6667C36.6667 47.9274 36.6674 48.8062 36.7143 49.4941 36.7604 50.17 36.8467 50.5636 36.9711 50.8641 37.3771 51.8442 38.1558 52.6229 39.1359 53.0289 39.4364 53.1533 39.83 53.2396 40.5059 53.2857 41.1938 53.3326 42.0726 53.3333 43.3333 53.3333H46.6667C47.9274 53.3333 48.8062 53.3326 49.4941 53.2857 50.17 53.2396 50.5636 53.1533 50.8641 53.0289 51.8442 52.6229 52.6229 51.8442 53.0289 50.8641 53.1533 50.5636 53.2396 50.17 53.2857 49.4941 53.3326 48.8062 53.3333 47.9274 53.3333 46.6667V43.3333C53.3333 42.0726 53.3326 41.1938 53.2857 40.5059 53.2396 39.83 53.1533 39.4364 53.0289 39.1359 52.6229 38.1558 51.8442 37.3771 50.8641 36.9711 50.5636 36.8467 50.17 36.7604 49.4941 36.7143 48.8062 36.6674 47.9274 36.6667 46.6667 36.6667H43.3333C42.0726 36.6667 41.1938 36.6674 40.5059 36.7143z","clip-rule":"evenodd"})}),(0,t.jsx)("span",{class:" text-[1rem]",children:"Dashboard"})]}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"#",class:"flex items-center gap-2 p-2  text-gray-400  rounded-lg bg-[#f5fafe] group",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",id:"earning-payouy",className:"w-7 h-7",fill:"currentColor",children:(0,t.jsx)("path",{fill:"currentColor",strokeWidth:"2",d:"M15.511,4.989V8.581a.5.5,0,0,1-1,0V6.2L5.343,15.364a.5.5,0,1,1-.707-.707L13.8,5.489H11.419a.5.5,0,0,1,0-1h3.592a.487.487,0,0,1,.191.039.5.5,0,0,1,.27.27A.487.487,0,0,1,15.511,4.989ZM4.514,6.8A2.284,2.284,0,1,1,6.8,9.081,2.285,2.285,0,0,1,4.514,6.8Zm1,0A1.284,1.284,0,1,0,6.8,5.514,1.285,1.285,0,0,0,5.514,6.8ZM15.486,13.2A2.284,2.284,0,1,1,13.2,10.919,2.285,2.285,0,0,1,15.486,13.2Zm-1,0A1.284,1.284,0,1,0,13.2,14.486,1.285,1.285,0,0,0,14.486,13.2Z"})}),(0,t.jsx)("span",{class:" text-[1rem]",children:"Refer And Earn"})]})}),(0,t.jsx)("li",{onClick:e=>y("Certificates"),children:(0,t.jsxs)("a",{href:"#",class:"flex items-center gap-2 p-2  text-gray-900  rounded-lg bg-[#f0f8fc] group",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",stroke:"#6B7280",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"})}),(0,t.jsx)("span",{class:" text-[1rem]",children:"Certificates"})]})})]}),(0,t.jsxs)("ul",{className:"flex flex-col gap-4",children:[(0,t.jsxs)("li",{className:"bg-[#f4fafc] pb-4 flex flex-col items-center gap-2 justify-center rounded-lg",children:[(0,t.jsx)("img",{className:"w-24 -mt-4",src:"/exclusive.png",alt:"exclusive"}),(0,t.jsxs)("p",{className:"font-medium text-center",children:[(0,t.jsx)("span",{className:"text-[#8a8a8a]",children:"Get The "}),(0,t.jsx)("span",{className:"text-[#336f9a]",children:"All Access Pack"}),(0,t.jsx)("br",{})," ",(0,t.jsx)("span",{className:"text-[#8a8a8a]",children:" Now"})]}),(0,t.jsx)("button",{className:"bg-[#35A3E3] hover:bg-[#3592e3] border-2 border-[#d4efff] transition-all  rounded-full duration-300 delay-100 text-white text-md px-3 py-1",children:"Get Now"})]}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"#",class:"flex items-center gap-3 p-2 bg-[#f4fafc] text-gray-900 rounded-lg   group",children:[(0,t.jsx)("img",{className:"w-10",src:"/user.gif",alt:"user"}),(0,t.jsx)("span",{class:" text-[1rem] text-ellipsis overflow-hidden whitespace-nowrap",children:null==l?void 0:l.name})]})})]}),(0,t.jsx)("ul",{className:"flex flex-col gap-3 py-3 font-medium",children:(0,t.jsxs)("li",{onClick:f,className:"flex items-center gap-3 p-2 hover:cursor-pointer text-gray-900 rounded-lg  hover:bg-[#fde7ee] group",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,t.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:"#525864",d:"M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"})}),(0,t.jsx)("span",{class:" text-[1rem]",children:"Log Out"})]})})]})}),(0,t.jsxs)("div",{class:"p-4 sm:ml-64 ",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("h1",{className:"text-[1.6rem] max-w-[230px] sm:max-w-[200px] text-ellipsis overflow-hidden whitespace-nowrap sm:text-2xl font-medium text-[#303030]",children:["Hi, ",null==l?void 0:l.name]}),(0,t.jsxs)("div",{className:"hidden lg:flex border border-slate-300 px-3 lg:flex-1 lg:mx-10 rounded-sm gap-2 items-center",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#3b3b3b",className:"w-6 h-6 ",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),(0,t.jsx)("input",{className:"border-none w-full outline-none py-2",type:"text",placeholder:"Search For Enrolled Cours..."})]}),(0,t.jsxs)("div",{className:"relative group sm:block hidden",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 cursor-pointer",children:[(0,t.jsx)("img",{className:"w-8 h-8 rounded-full",height:"100",width:"100",src:null==l?void 0:l.photoUrl,alt:"profile"}),(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-3 h-3 hover:text-[#0090DF]",viewBox:"0 0 512 512",id:"down-arrow",fill:"currentColor",children:(0,t.jsx)("path",{d:"M98.9 184.7l1.8 2.1 136 156.5c4.6 5.3 11.5 8.6 19.2 8.6 7.7 0 14.6-3.4 19.2-8.6L411 187.1l2.3-2.6c1.7-2.5 2.7-5.5 2.7-8.7 0-8.7-7.4-15.8-16.6-15.8H112.6c-9.2 0-16.6 7.1-16.6 15.8 0 3.3 1.1 6.4 2.9 8.9z"})})]}),(0,t.jsx)("div",{className:"absolute hidden group-hover:block right-0",children:(0,t.jsxs)("div",{className:"bg-white shadow-lg flex flex-col mt-[0.5rem] text-left max-w-72",children:[(0,t.jsx)("div",{className:"w-full h-[0.15rem] bg-[#0090df] "}),(0,t.jsxs)("div",{className:"flex flex-col px-2 border-slate-200 border-b py-2",children:[(0,t.jsx)("span",{className:"text-md font-semibold",children:null==l?void 0:l.name}),(0,t.jsx)("span",{className:"text-md  overflow-hidden text-ellipsis whitespace-nowrap",children:null==l?void 0:l.email})]}),(0,t.jsx)("div",{className:"text-left font-medium text-[#404040] pb-1 pt-2 px-2 flex items-center",children:"Settings"}),(0,t.jsx)("button",{className:"text-left pb-2 font-medium text-[#404040] pt-1 px-2 hover:text-[#4AADE6] flex items-center",onClick:f,children:"Logout"})]})})]}),(0,t.jsx)("button",{onClick:()=>{u(!p)},type:"button",class:"inline-flex items-center text-sm sm:hidden text-gray-500 rounded-lg  outline-none",children:(0,t.jsx)("svg",{class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{"clip-rule":"evenodd","fill-rule":"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})})]}),(0,t.jsxs)("div",{className:"flex lg:hidden mt-2 border border-slate-300 px-3 lg:flex-1 lg:mx-10 rounded-sm gap-2 items-center",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#3b3b3b",className:"w-6 h-6 ",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),(0,t.jsx)("input",{className:"border-none w-full outline-none py-2",type:"text",placeholder:"Search For Enrolled Cours..."})]}),"Certificates"==N&&(0,t.jsx)(c,{}),"Dashboard"==N&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"pb-6 pt-4 md:pb-6 md:pt-6",children:[(0,t.jsx)("h1",{className:"text-[1.3rem] sm:text-2xl font-bold text-[#494949]",children:"Enrolled Courses"}),(0,t.jsxs)("select",{className:"block xl:hidden bg-[#e2f5ff] text-black rounded w-52 px-3 py-2 outline-none border-none my-10",children:[(0,t.jsx)("option",{value:"All Courses",children:"All"}),(0,t.jsx)("option",{value:"All Courses",children:"In-Progress"}),(0,t.jsx)("option",{value:"All Courses",children:"Completed"})]}),(0,t.jsxs)("ul",{className:"xl:flex hidden  py-5 gap-4",children:[(0,t.jsx)("li",{className:"py-2 px-4 font-medium cursor-pointer text-black border-b-[3px]  ".concat("All"==v?"border-[#1d98e0]":"border-transparent"," "),children:"All"}),(0,t.jsx)("li",{className:"py-2 px-4 font-medium cursor-pointer text-black border-b-[3px]  ".concat("In-Progress"==v?"border-[#1d98e0]":"border-transparent"," "),children:"In-Progress"}),(0,t.jsx)("li",{className:"py-2 px-4 font-medium cursor-pointer text-black border-b-[3px]  ".concat("Completed"==v?"border-[#1d98e0]":"border-transparent"," "),children:"Completed"})]})]}),(0,t.jsx)("div",{className:"flex gap-10 flex-wrap ",children:null==l?void 0:l.courses.map((e,s)=>{var l;return(0,t.jsxs)("div",{className:"bg-white rounded-xl overflow-hidden border",children:[(0,t.jsx)("img",{className:"w-[300px] h-[130px] object-cover",src:e.img1}),(0,t.jsxs)("div",{className:"flex flex-col border px-4",children:[g.map(s=>(0,t.jsx)(t.Fragment,{children:e._id===s.courseId&&(0,t.jsxs)("div",{className:"flex flex-col py-2",children:[(0,t.jsxs)("div",{className:"flex  items-center gap-2",children:[(0,t.jsx)("div",{className:"w-full  h-2 rounded-full border border-zinc-300",children:(0,t.jsx)("div",{className:"bg-teal-500 h-full rounded-full",style:{width:"".concat(Math.floor(s.percentageCompleted),"%")}})}),(0,t.jsxs)("h4",{className:"text-xs font-semibold text-[#2a2a2a]",children:[Math.floor(s.percentageCompleted),"%"]})]}),(0,t.jsxs)("p",{className:"text-xs font-medium text-teal-500",children:[s.totalTopicCompleted+"/"+s.totalTopics," ","Videos Completed"]})]})})),(0,t.jsx)("h2",{className:"text-[1.14rem] font-semibold",children:e.name}),(0,t.jsxs)("div",{className:" text-[0.73rem] flex flex-col gap-2 font-medium text-gray-800 py-2",children:[(0,t.jsxs)("div",{className:"flex gap-1 items-center",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-[0.9rem] h-[0.9rem] -mt-[0.14rem]",children:(0,t.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})}),"Duration: ",e.duration]}),(0,t.jsxs)("div",{className:"flex gap-2 py-1 px-2 w-fit rounded-md text-[0.76rem] border border-dashed border-[#FD7289] text-[#FD7289] font-medium",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4",children:(0,t.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"})}),"Enrolled On ",null===(l=e.createdAt)||void 0===l?void 0:l.substring(0,10)]})]}),(0,t.jsx)("hr",{className:"my-1"}),g.map(s=>(0,t.jsxs)(t.Fragment,{children:[e._id===s.courseId&&100===s.percentageCompleted&&(0,t.jsxs)(a.default,{href:"dashboard/screen/".concat(e.name+"/"+e._id),className:"flex items-center justify-center bg-[#EAFCFF] outline-none rounded-2xl px-4 py-[0.5rem] my-2 text-teal-500 font-semibold text-md",children:[(0,t.jsx)("h3",{className:"",children:"Course Completed\xa0"}),(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",id:"check-circle",className:"w-[1.2rem] h-[1.2rem]",children:(0,t.jsx)("path",{fill:"currentColor",d:"M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M16.2,10.3l-4.8,4.8c-0.4,0.4-1,0.4-1.4,0l0,0l-2.2-2.2c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0c0,0,0,0,0,0l1.5,1.5l4.1-4.1c0.4-0.4,1-0.4,1.4,0C16.6,9.3,16.6,9.9,16.2,10.3z"})})]}),e._id===s.courseId&&s.percentageCompleted<100&&(0,t.jsxs)(a.default,{href:"dashboard/screen/".concat(e.name+"/"+e._id),onClick:()=>b(!0),className:"flex items-center justify-center bg-[#EAFCFF] outline-none rounded-2xl px-4 py-[0.5rem] my-2 text-[#1D98E0] font-semibold text-md",children:[(0,t.jsx)("h3",{className:"",children:"Resume Course\xa0"}),w?(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5 animate-spin",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"})}):"->"]})]}))]})]})})})," "]})]})]})};var p=(0,d.default)(()=>Promise.resolve(m),{ssr:!1})},2331:function(e,s,l){"use strict";var t=l(8903),r=l(8564);l(617),s.Z=()=>(0,t.jsxs)("div",{className:"bg-[#0565c8] px-5 xl:px-0",children:[(0,t.jsxs)("div",{className:"max-w-screen-xl m-auto lg:px-10 pt-10",children:[(0,t.jsxs)("div",{className:"text-white flex xl:flex-row flex-col gap-6 mb-10 xl:mb-0 xl:gap-0",children:[(0,t.jsx)("h1",{className:"text-3xl font-bold flex-1",children:"Kickstart your career with Pathshala"}),(0,t.jsx)("p",{className:"text-[0.87rem] lg:text-[1.1rem] flex-1",children:"We’ll help you with your confusion about career choices, teach you practical skills and help you land a placement. Join a network of 600K+ learners and #KaroShuruaatYahinSe."})]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-5",children:[(0,t.jsx)("a",{href:"#categories",className:"bg-[#003984] text-white font-semibold py-2 px-4 lg:py-3 md:px-6 rounded-md",children:"Certification courses"}),(0,t.jsx)("a",{href:"#categories",className:"text-[#003984] bg-white font-semibold py-2 px-4 lg:py-3 md:px-6 rounded-md",children:"Placement Guarantee courses"})]}),(0,t.jsx)(r.default,{src:"/background-footer.png",className:"h-auto w-full pt-10",height:300,width:1e3,alt:"footer-bg"})]}),(0,t.jsx)("div",{className:"bg-[#212121] text-center py-5 text-white",children:"\xa9 Copyright Pathshala 2024"})]})}},function(e){e.O(0,[602,829,465,306,89,744],function(){return e(e.s=1150)}),_N_E=e.O()}]);
// "use client";
// import { logOut, openScreenSidebar } from "@/redux/user/userSlice";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { usePathname, useRouter } from "next/navigation";
// import axios from "axios";

// const Navbar = () => {
//   const router = useRouter();

//   const [pathScreen, setPathScreen] = useState(false);
//   const [openSidebar, setOpenSidebar] = useState(true);

//   const pathname = usePathname();

//   useEffect(() => {
//     if (pathname.startsWith("/dashboard/screen/")) {
//       setPathScreen(true);
//     } else {
//       setPathScreen(false);
//     }
//   }, []);

//   const dispatch = useDispatch();

//   const { currentUser } = useSelector((state) => state.user);
//   const { courses } = useSelector((state) => state.courses);

//   const [mouseEnter, setMouseEnter] = useState(false);
//   const [searchBtn, setSearchBtn] = useState(false);

//   const API_BASE = process.env.API_BASE_URI;

//   // console.log(API_BASE);

//   const logout = async () => {
//     try {
//       console.log("hello");
//       await axios.get(`${API_BASE}logout`);

//       router.push("/");
//       dispatch(logOut());
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleSearchBtn = () => {};

//   const [profileDropdown, setProfileDropdown] = useState(false);

//   const [isFixed, setIsFixed] = useState(false);
//   const [lastScrollTop, setLastScrollTop] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScroll = window.pageYOffset;
//       if (currentScroll > lastScrollTop) {
//         // Scrolling down
//         setIsFixed(true);
//       } else {
//         // Scrolling up
//         setIsFixed(false);
//       }
//       setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollTop]);

//   return (
//     <>
//       <div
//         className={`${
//           pathScreen ? "" : isFixed ? "-translate-y-full" : "translate-y-0"
//         } bg-white fixed w-full z-50 shadow-[0px_3px_8px_0px_#00000024]  transition-all duration-100 ease-linear`}
//       >
//         <div
//           className={`flex ${
//             pathScreen
//               ? "pl-5 pr-5 lg:pr-7 py-3"
//               : "max-w-screen-xl py-4 lg:py-0 px-5 xl:px-0"
//           }  m-auto justify-between items-center   `}
//         >
//           <div
//             className="flex items-center gap-4"
//             onMouseEnter={() => setMouseEnter(false)}
//           >
//             {pathScreen ? (
//               <button
//                 onClick={() => {
//                   dispatch(openScreenSidebar(openSidebar));
//                   setOpenSidebar(!openSidebar);
//                 }}
//                 type="button"
//                 className="inline-flex lg:hidden items-center text-sm text-gray-500 rounded-lg hover:border px-1 py-1 hover:border-gray-300  outline-none"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   aria-hidden="true"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     clipRule="evenodd"
//                     fillRule="evenodd"
//                     d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
//                   ></path>
//                 </svg>
//               </button>
//             ) : (
//               <button
//                 onClick={() => {
//                   dispatch(openScreenSidebar(openSidebar));
//                   setOpenSidebar(!openSidebar);
//                 }}
//                 type="button"
//                 className="inline-flex lg:hidden items-center text-sm text-gray-500 rounded-lg hover:border px-1 py-1 hover:border-gray-300  outline-none"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   aria-hidden="true"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     clipRule="evenodd"
//                     fillRule="evenodd"
//                     d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
//                   ></path>
//                 </svg>
//               </button>
//             )}
//             <Link href="/">
//               <Image
//                 className={`${
//                   pathScreen ? "h-auto w-auto" : "lg:hidden h-auto w-auto"
//                 }`}
//                 width={100}
//                 height={130}
//                 src="/logo1.png"
//                 alt="logo1"
//               />
//               {pathScreen ? (
//                 ""
//               ) : (
//                 <Image
//                   className="lg:block hidden h-auto w-auto"
//                   width={110}
//                   height={100}
//                   src="/logo2.png"
//                   alt="logo2"
//                 />
//               )}
//             </Link>
//           </div>

//           {pathScreen ? (
//             ""
//           ) : (
//             <div className="hidden lg:flex items-center gap-5">
//               <div className="relative group py-4">
//                 <button
//                   onMouseEnter={() => setMouseEnter(true)}
//                   className="bg-white py-2 rounded font-medium text-[#303030] flex items-center gap-2 "
//                 >
//                   Certification courses{" "}
//                   <p className="text-[0.67rem] bg-[#FFA333] text-white px-[0.16rem] py-[0.1rem] rounded">
//                     70% OFF
//                   </p>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="w-4 h-4"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="m19.5 8.25-7.5 7.5-7.5-7.5"
//                     />
//                   </svg>
//                 </button>
//                 <div className="absolute hidden group-hover:block bg-white py-2 w-full rounded-sm">
//                   <div className="w-full h-[0.15rem] bg-[#0090df] mt-[0.37rem]"></div>
//                   <div>
//                     <h3 className="text-lg font-semibold px-4 py-2">
//                       Most Popular
//                     </h3>

//                     {courses
//                       ?.slice()
//                       .reverse()
//                       .map((item, index) => (
//                         <Link
//                           key={index}
//                           href={`/categories/${item.name}/${item._id}`}
//                           className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                         >
//                           {item.name}
//                         </Link>
//                       ))}
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="py-4 text-[#303030]  font-medium"
//                 onMouseEnter={() => setMouseEnter(false)}
//               >
//                 Placement Guarantee courses
//               </div>
//             </div>
//           )}

//           <div className="flex items-center gap-5 ">
//             {currentUser?.name ? (
//               <>
//                 {pathScreen ? (
//                   <div className="relative">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="w-6 h-6 sm:block hidden"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
//                       />
//                     </svg>
//                   </div>
//                 ) : (
//                   <Link
//                     href="/dashboard"
//                     onClick={handleSearchBtn}
//                     className="font-medium text-[#303030]"
//                   >
//                     Dashboard
//                   </Link>
//                 )}

//                 <div className="relative group">
//                   <div
//                     onMouseEnter={
//                       pathScreen ? undefined : () => setMouseEnter(true)
//                     }
//                     className="flex items-center gap-2 cursor-pointer"
//                   >
//                     <img
//                       className={`w-7 h-7 rounded-full`}
//                       height="100"
//                       width="100"
//                       src={currentUser?.photoUrl}
//                       alt="profile"
//                     />
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-3 h-3 hover:text-[#0090DF]"
//                       viewBox="0 0 512 512"
//                       id="down-arrow"
//                       fill="currentColor"
//                     >
//                       <path d="M98.9 184.7l1.8 2.1 136 156.5c4.6 5.3 11.5 8.6 19.2 8.6 7.7 0 14.6-3.4 19.2-8.6L411 187.1l2.3-2.6c1.7-2.5 2.7-5.5 2.7-8.7 0-8.7-7.4-15.8-16.6-15.8H112.6c-9.2 0-16.6 7.1-16.6 15.8 0 3.3 1.1 6.4 2.9 8.9z"></path>
//                     </svg>
//                   </div>

//                   <div className="absolute hidden group-hover:block right-0">
//                     <div
//                       className={`bg-white shadow-lg ${
//                         pathScreen ? "py-1" : "py-3"
//                       } flex flex-col text-left max-w-72`}
//                     >
//                       <div className="w-full h-[0.15rem] bg-[#0090df] mt-[0.37rem]"></div>
//                       <div className="flex flex-col px-2 border-slate-200 border-b py-2">
//                         <span className="text-md font-semibold">
//                           {currentUser.name}
//                         </span>
//                         <span className="text-md  overflow-hidden text-ellipsis whitespace-nowrap">
//                           {currentUser.email}
//                         </span>
//                       </div>

//                       <button
//                         className="text-left py-2 px-2 hover:text-[#4AADE6]"
//                         onClick={logout}
//                       >
//                         Logout
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div
//                   onClick={handleSearchBtn}
//                   className="flex gap-2 text-black cursor-pointer hover:text-[#35A3E3]"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="w-5 h-5 mt-[0.1rem]"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//                     />
//                   </svg>
//                   <h3 className="font-medium lg:block hidden">Search</h3>
//                 </div>
//                 <Link
//                   href="/login"
//                   className="border px-4 py-1 lg:py-2 font-medium rounded-sm border-[#0090DF] text-[#35A3E3] hover:bg-[#35A3E3] hover:text-white ease-in-out delay-100 transition-colors duration-200 sm:block hidden"
//                 >
//                   Login
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//       <div
//         onMouseEnter={() => setMouseEnter(false)}
//         className={`${
//           mouseEnter ? "" : "hidden"
//         } bg-[#0b0b0b2f] bg-opacity-60 backdrop-filter backdrop-blur-[4px] -translate-y-10 transition-opacity overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-30  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full mt-[4.5rem]`}
//       ></div>
//     </>
//   );
// };

// export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

// // EEFBFF

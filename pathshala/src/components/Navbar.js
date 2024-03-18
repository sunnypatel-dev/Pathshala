"use client";
import { logOut, openScreenSidebar } from "@/redux/user/userSlice";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

const Navbar = () => {
  const router = useRouter();

  const [pathScreen, setPathScreen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/dashboard/screen/")) {
      setPathScreen(true);
    } else {
      setPathScreen(false);
    }

    console.log(pathname);
  }, []);

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  const [mouseEnter, setMouseEnter] = useState(false);
  const [searchBtn, setSearchBtn] = useState(false);

  const logout = async () => {
    try {
      await axios.get("http://localhost:3000/api/logout");

      dispatch(logOut());
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearchBtn = () => {};

  const [profileDropdown, setProfileDropdown] = useState(false);
  return (
    <>
      <div className=" bg-white fixed w-full z-50 shadow-[0px_3px_8px_0px_#00000024] ">
        <div
          className={`flex ${
            pathScreen
              ? "pl-5 pr-5 lg:pr-7 py-3"
              : "max-w-screen-xl py-4 lg:py-0 px-5 xl:px-0"
          }  m-auto justify-between items-center   `}
        >
          <div
            className="flex items-center gap-4"
            onMouseEnter={() => setMouseEnter(false)}
          >
            {pathScreen ? (
              <button
                onClick={() => {
                  setOpenSidebar(!openSidebar);
                  dispatch(openScreenSidebar(openSidebar));
                }}
                type="button"
                class="inline-flex items-center text-sm text-gray-500 rounded-lg hover:border px-1 py-1 hover:border-gray-300  outline-none"
              >
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
            ) : (
              <button
                type="button"
                class="inline-flex lg:hidden items-center text-sm text-gray-500 rounded-lg hover:border px-1 py-1 hover:border-gray-300  outline-none"
              >
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
            )}
            <Link href="/">
              <Image
                className={`${
                  pathScreen ? "h-auto w-auto" : "lg:hidden h-auto w-auto"
                }`}
                width={100}
                height={130}
                src="/logo1.png"
                alt="logo1"
              />
              {pathScreen ? (
                ""
              ) : (
                <Image
                  className="lg:block hidden h-auto w-auto"
                  width={110}
                  height={100}
                  src="/logo2.png"
                  alt="logo2"
                />
              )}
            </Link>
          </div>

          {pathScreen ? (
            ""
          ) : (
            <div className="hidden lg:flex items-center gap-5">
              <div
                onMouseEnter={() => setMouseEnter(true)}
                className="flex py-6 h-full items-center gap-2 cursor-pointer hover:after:w-[14.9rem] hover:after:absolute hover:after:translate-y-7 hover:after:h-[0.16rem] hover:after:bg-[#35A3E3] "
              >
                <h3 className="font-medium text-[#303030] flex items-center gap-2 ">
                  Certification courses{" "}
                  <p className="text-[0.67rem] bg-[#FFA333] text-white px-[0.16rem] py-[0.1rem] rounded">
                    70% OFF
                  </p>
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
                <div
                  className={`${
                    mouseEnter ? " bg-white" : "hidden"
                  } w-[239px] absolute z-50 top-[4.5rem] py-3`}
                >
                  <h3 className="text-xl font-semibold text-[#303030] px-2 pb-3">
                    Most Popular
                  </h3>
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-[#35A3E3] hover:text-white px-2 py-1 ">
                      Web Development
                    </li>
                    <li className="hover:bg-[#35A3E3] hover:text-white px-2 py-1">
                      Android App Development
                    </li>
                    <li className="hover:bg-[#35A3E3] hover:text-white px-2 py-1">
                      Digital Marketing
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold text-[#303030] px-2 py-3">
                    Pathshala Choice
                  </h3>
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-[#35A3E3] hover:text-white px-2 py-1 ">
                      Web Development
                    </li>
                    <li className="hover:bg-[#35A3E3] hover:text-white px-2 py-1">
                      Android App Development
                    </li>
                    <li className="hover:bg-[#35A3E3] hover:text-white px-2 py-1">
                      Digtial Marketing
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="py-5 text-[#303030]  font-medium"
                onMouseEnter={() => setMouseEnter(false)}
              >
                Placement Guarantee courses
              </div>
            </div>
          )}

          <div className="flex items-center gap-5 ">
            {currentUser?.name ? (
              <>
                {pathScreen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 sm:block hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                ) : (
                  <Link
                    href="/dashboard"
                    onClick={handleSearchBtn}
                    className="font-medium text-[#303030]"
                  >
                    Dashboard
                  </Link>
                )}
                <div
                  className="flex items-center gap-1  cursor-pointer "
                  onClick={() => setProfileDropdown(!profileDropdown)}
                >
                  <div className="border rounded-full px-2 py-[0.12rem]font-medium  border-[#0090DF] text-[#35A3E3] hover:bg-[#35A3E3] hover:text-white ease-in-out delay-100 transition-colors duration-200 ">
                    S
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3  hover:text-[#0090DF]"
                    viewBox="0 0 512 512"
                    id="down-arrow"
                    fill="currentColor"
                  >
                    <path d="M98.9 184.7l1.8 2.1 136 156.5c4.6 5.3 11.5 8.6 19.2 8.6 7.7 0 14.6-3.4 19.2-8.6L411 187.1l2.3-2.6c1.7-2.5 2.7-5.5 2.7-8.7 0-8.7-7.4-15.8-16.6-15.8H112.6c-9.2 0-16.6 7.1-16.6 15.8 0 3.3 1.1 6.4 2.9 8.9z"></path>
                  </svg>
                </div>
                {profileDropdown ? (
                  <div className="absolute top-[3.52rem] border-t-2 border-[#4AADE6] right-5 bg-white shadow-lg pt-3 px-2 flex flex-col text-left">
                    <div className="flex flex-col border-slate-200 border-b pb-2  ">
                      <span className="text-md font-semibold">
                        {currentUser.name}
                      </span>
                      <span className="text-md">{currentUser.email}</span>
                    </div>

                    <button
                      className="text-left py-2 hover:text-[#4AADE6]"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </>
            ) : (
              <>
                <div
                  onClick={handleSearchBtn}
                  className="flex gap-2 hover:text-[#35A3E3]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3b3b3b"
                    className="w-5 h-5 mt-[0.1rem]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  <h3 className="font-medium lg:block hidden">Search</h3>
                </div>
                <Link
                  href="/login"
                  className="border px-4 py-1 lg:py-2 font-medium rounded-sm border-[#0090DF] text-[#35A3E3] hover:bg-[#35A3E3] hover:text-white ease-in-out delay-100 transition-colors duration-200 sm:block hidden"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        onMouseEnter={() => setMouseEnter(false)}
        className={`${
          mouseEnter ? "" : "hidden"
        } bg-[#0b0b0b2f] bg-opacity-60 backdrop-filter backdrop-blur-[4px] transition-opacity overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-30  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full mt-[4.5rem]`}
      ></div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

// EEFBFF

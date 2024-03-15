"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <>
      <div className=" bg-white fixed w-full z-50 shadow-[0px_3px_8px_0px_#00000024] ">
        <div className="flex max-w-screen-xl m-auto justify-between items-center py-4 lg:py-0 px-5 xl:px-0 ">
          <div
            className="flex items-center gap-4"
            onMouseEnter={() => setMouseEnter(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 lg:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <Image
              className="lg:hidden h-auto w-auto"
              width={100}
              height={130}
              src="/logo1.png"
              alt="logo1"
            />

            <Image
              className="lg:block hidden h-auto w-auto"
              width={110}
              height={100}
              src="/logo2.png"
              alt="logo2"
            />
          </div>
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
            <div className="py-5" onMouseEnter={() => setMouseEnter(false)}>
              Placement Guarantee courses
            </div>
          </div>

          <div className="flex items-center gap-6 text-[#3b3b3b] ">
            <button className="flex gap-2 hover:text-[#35A3E3]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mt-[0.1rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <h3 className="font-medium lg:block hidden">Search</h3>
            </button>
            <button className="border px-4 py-1 lg:py-2 font-medium rounded-sm border-[#0090DF] text-[#35A3E3] hover:bg-[#35A3E3] hover:text-white ease-in-out delay-100 transition-colors duration-200 sm:block hidden">
              Login
            </button>
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

export default Navbar;

// EEFBFF

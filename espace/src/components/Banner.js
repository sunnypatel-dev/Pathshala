import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="py-8  px-5 xl:px-0 ">
        <div className="max-w-screen-xl m-auto flex flex-col gap-4">
          <h3 className="font-normal flex sm:items-center flex-col gap-3 sm:gap-2 sm:flex-row">
            <span>CERTIFICATION COURSES </span>
            <span className="bg-[#EEFBFF] text-sm border border-[#c1edf9] w-fit text-[rgb(35,70,90)] sm:py-1 px-2">
              4-8 weeks
            </span>
          </h3>
          <h1 className="text-xl text-[#1d1d1d] sm:text-2xl lg:text-3xl font-bold relative before:inline-block before:content-'' before:w-2 before:h-[1rem] sm:before:h-[1.2rem]  lg:before:h-[1.4rem] before:mr-2 before:bg-[#47BCFE]">
            Fastest way to build CV
          </h1>
          <ul className="flex gap-4 lg:flex-row flex-col lg:items-center">
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#00A5EC"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              Learn at your own schedule
            </li>
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#00A5EC"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              Practical learning
            </li>
            <li className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#00A5EC"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              Government-certified online training
            </li>
          </ul>
          <Image
            src="/banner.png"
            className="md:w-full md:h-[180px] h-[90px] sm:h-[100px] mt-4 rounded-xl  object-cover object-left"
            width={1500}
            height={400}
            alt="banner"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;

"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { logOut } from "@/redux/user/userSlice";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const page = ({ params }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [filteredCourse] = currentUser.courses?.filter(
    (item) => item._id === params.courseId
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const { openSidebar } = useSelector((state) => state.user);

  const logout = async () => {
    try {
      await axios.get("http://localhost:3000/api/logout");

      dispatch(logOut());
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar />

      <aside
        class={`fixed  top-0 left-0 z-40 w-52 sm:w-72  border h-screen transition-transform lg:translate-x-0 ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pt-20 overflow-y-auto  bg-white flex flex-col ">
          <a
            href="/dashboard"
            class="flex items-center gap-2   text-[#35A3E3] font-semibold  rounded-lg  group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              id="bar"
              className="w-[0.8rem] h-[0.8rem]"
              fill="currentColor"
            >
              <path
                stroke="currentColor"
                d="M17 1h-2a1 1 0 0 0-1 1v16.992h4V2a1 1 0 0 0-1-1zm-6 6H9a1 1 0 0 0-1 1v10.992h4V8a1 1 0 0 0-1-1zm-6 6H3a1 1 0 0 0-1 1v4.992h4V14a1 1 0 0 0-1-1z"
              ></path>
            </svg>
            <span class=" text-[0.88rem] ">Progress report</span>
          </a>

          <Accordion className="flex flex-col gap-3" type="single" collapsible>
            <h4 className="text-[0.83rem] pt-5 pb-2 font-semibold text-[#828181]">
              Module
            </h4>

            {filteredCourse.syllabus?.map((item, index) => (
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-[0.9rem] border py-2 font-semibold text-[#303030] px-2 text-left">
                  <h4>{item.chapter}</h4>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2">
                  <h4 className="text-[0.83rem] pt-5  font-semibold text-[#828181]">
                    Topics
                  </h4>
                  {item.topics.map((item, index) => (
                    <div className="text-[0.8rem] flex justify-between border py-2  text-[#303030] px-2">
                      <div className="flex  gap-1">
                        {/* <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-[0.75rem] h-[0.75rem] mt-[0.17rem] ml-[0.12rem]"
                              viewBox="0 0 22 22"
                              id="circle"
                            >
                              <g
                                fill="none"
                                fill-rule="evenodd"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <g
                                  stroke="#000"
                                  stroke-width="2"
                                  transform="translate(-919 -1505)"
                                >
                                  <g transform="translate(920 1506)">
                                    <circle cx="10" cy="10" r="10" />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </span> */}
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            className="w-4 h-4 mt-[0.07rem]"
                          >
                            <path
                              stroke="#30aa5f"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </span>
                        <h4>{item.topicName}</h4>
                      </div>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 mt-[0.07rem]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </span>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </aside>

      <div class="px-4 pt-[4.2rem] lg:ml-72  relative">
        <div className="flex items-center w-full gap-1 justify-center pt-2 pb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
            />
          </svg>
          <div className="flex items-center gap-1">
            <h1 className="text-sm font-medium">What Next?</h1>
            <span className="text-lg -mt-[0.6rem]">.</span>
            <span className="text-xs flex text-[#363636]">4m 32s</span>
          </div>
        </div>

        {/* <Video
          type="video/mp4"
          className="max-w-[940px] m-auto"
          src="https://vod-progressive.akamaized.net/exp=1710769053~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2939%2F15%2F389695713%2F1646603860.mp4~hmac=0ed41aa89e31769814b75e99ca9b8d2b195b14b122ab8b4c55c3733105eefbec/vimeo-prod-skyfire-std-us/01/2939/15/389695713/1646603860.mp4?filename=file.mp4"
        /> */}
        <video controls>
          <source
            src="https://vod-progressive.akamaized.net/exp=1710769053~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2939%2F15%2F389695713%2F1646603860.mp4~hmac=0ed41aa89e31769814b75e99ca9b8d2b195b14b122ab8b4c55c3733105eefbec/vimeo-prod-skyfire-std-us/01/2939/15/389695713/1646603860.mp4?filename=file.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-[99.9%] bg-white h-10 border fixed bottom-0">
        <div className="w-full flex justify-end items-center h-full px-7 gap-5">
          <button className="text-xs font-medium flex items-center hover:bg-gray-100 py-1 px-2 rounded-sm">
            <span className="text-[#35A3E3] px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            Prev
          </button>
          <button className="text-xs font-medium flex items-center hover:bg-gray-100 py-1 px-2 rounded-sm">
            Next
            <span className="text-[#35A3E3] px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(page), { ssr: false });

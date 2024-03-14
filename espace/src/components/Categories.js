"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

const Categories = () => {
  const items = [
    {
      id: 1,
      category: "Programming",
      name: "Web Development",
      image: "/web-development.png.webp",
    },
    {
      id: 2,
      category: "Programming",
      name: "Programming with Python",
      image: "/python.png.webp",
    },
    {
      id: 3,
      category: "Business & Management",
      name: "Digital Marketing",
      image: "/digital-marketing.png.webp",
    },
    {
      id: 4,
      category: "Core Engineering",
      name: "AutoCad",
      image: "/autocad.png.webp",
    },
    {
      id: 5,
      category: "Programming",
      name: "Android App Development",
      image: "/android.png.webp",
    },
  ];
  const [selectedFilter, setSelectedFilter] = useState("All Courses");

  const handleFilter = (event) => {
    const selectedValue = event.target.value || event.target.innerText;
    setSelectedFilter(selectedValue);
  };

  const filteredItems = useMemo(() => {
    if (selectedFilter === "All Courses") {
      return items;
    } else {
      return items.filter((item) => item.category === selectedFilter);
    }
  }, [selectedFilter, items]);

  return (
    <section className="pb-20">
      <div className="max-w-screen-xl m-auto px-5 xl:px-0">
        <h1 className="text-xl text-[#1d1d1d] sm:text-2xl lg:text-3xl font-bold ">
          Categories
        </h1>

        <select
          onChange={handleFilter}
          value={selectedFilter}
          className="block xl:hidden bg-[#a07bff] text-white rounded w-52 px-3 py-2 outline-none border-none my-10"
        >
          <option value="All Courses">All Courses</option>
          <option value="Programming">Programming</option>
          <option value="Business & Management">Business & Management</option>
          <option value="Core Engineering">Core Engineering</option>
        </select>

        <ul className="hidden xl:flex gap-4 py-6">
          <li
            onClick={handleFilter}
            className={` rounded-md py-2 px-2 cursor-pointer ${
              selectedFilter === "All Courses"
                ? "bg-[#35a3e3] text-white"
                : "bg-[#F3F8FF] text-black"
            }`}
          >
            All Courses
          </li>
          <li
            onClick={handleFilter}
            className={`rounded-md py-2 px-2 cursor-pointer ${
              selectedFilter === "Programming"
                ? "bg-[#35a3e3] text-white"
                : "bg-[#F3F8FF] text-black"
            }`}
          >
            Programming
          </li>
          <li
            onClick={handleFilter}
            className={` rounded-md py-2 px-2 cursor-pointer ${
              selectedFilter === "Business & Management"
                ? "bg-[#35a3e3] text-white"
                : "bg-[#F3F8FF] text-black"
            }`}
          >
            Business & Management
          </li>
          <li
            onClick={handleFilter}
            className={` rounded-md py-2 px-2 cursor-pointer ${
              selectedFilter === "Core Engineering"
                ? "bg-[#35a3e3] text-white"
                : "bg-[#F3F8FF] text-black"
            }`}
          >
            Core Engineering
          </li>
        </ul>
        <div className="flex gap-10 flex-wrap ">
          {filteredItems.map((item) => (
            <a key={item.id} href={item.link}>
              <div className="bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <img
                  className="w-[300px] h-[130px] object-cover"
                  src={item.image}
                  alt={item.category}
                />
                <div className="px-4 pt-2 pb-6">
                  <div className="flex items-center gap-2 py-1">
                    <h4 className="text-[13px] text-[#4c4c4c] font-medium">
                      8 weeks{" "}
                    </h4>
                    <Image
                      height={10}
                      width={60}
                      className="h-auto w-auto mt-[0.15rem] object-cover"
                      src="/language-card.png"
                      alt="language-taught"
                    />
                  </div>
                  <h2 className="text-[1.2rem] pt-2 pb-3 font-semibold">
                    {item.name}
                  </h2>
                  <div className="flex gap-2">
                    <span className="flex text-[14px] text-[#4c4c4c] font-medium items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.99984 2.66666L9.64784 5.95793L13.3332 6.48895L10.6665 9.04941L11.2958 12.6667L7.99984 10.9579L4.70384 12.6667L5.33317 9.04941L2.6665 6.48895L6.35184 5.95793L7.99984 2.66666Z"
                          fill="#FFAE00"
                          stroke="#FFAE00"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>4.1</span>
                    </span>
                    <span className="text-[14px] border-l border-[#9a9a9a] pl-2 text-[#4c4c4c]  font-medium">
                      109,125 learners
                    </span>
                  </div>
                </div>
                <button className="bg-[#F3F8FF] outline-none w-full text-left px-4 text-[#1D98E0] font-semibold text-sm py-3">
                  Know more {">"}
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0565c8] px-5 xl:px-0">
      <div className="max-w-screen-xl m-auto lg:px-10 pt-10">
        <div className="text-white flex xl:flex-row flex-col gap-6 mb-10 xl:mb-0 xl:gap-0">
          <h1 className="text-3xl font-bold flex-1">
            Kickstart your career with Pathshala
          </h1>
          <p className="text-[0.87rem] lg:text-[1.1rem] flex-1">
            We’ll help you with your confusion about career choices, teach you
            practical skills and help you land a placement. Join a network of
            600K+ learners and #KaroShuruaatYahinSe.
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          <a
            href="#categories"
            className="bg-[#003984] text-white font-semibold py-2 px-4 lg:py-3 md:px-6 rounded-md"
          >
            Certification courses
          </a>
          <a
            href="#categories"
            className="text-[#003984] bg-white font-semibold py-2 px-4 lg:py-3 md:px-6 rounded-md"
          >
            Placement Guarantee courses
          </a>
        </div>
        <Image
          src="/background-footer.png"
          className="h-auto w-full pt-10"
          height={300}
          width={1000}
          alt="footer-bg"
        />
      </div>
      <div className="bg-[#212121] text-center py-5 text-white">
        &copy; Copyright Pathshala 2024
      </div>
    </div>
  );
};

export default Footer;

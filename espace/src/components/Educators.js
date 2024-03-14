import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Educators = () => {
  return (
    <>
      <section className="bg-white px-5 xl:px-0 sm:py-10">
        <div className="max-w-screen-xl m-auto py-10">
          <div className="flex sm:flex-row flex-col gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8372 5.00257C17.8372 4.0413 16.6133 3.63367 16.0369 4.40298L6.19841 17.535C5.70446 18.1943 6.17491 19.1346 6.99872 19.1346H14.6977C15.25 19.1346 15.6977 19.5823 15.6977 20.1346V25.8926C15.6977 26.8642 16.9433 27.2651 17.51 26.4758L26.8633 13.4486C27.3383 12.787 26.8655 11.8654 26.051 11.8654H18.8372C18.2849 11.8654 17.8372 11.4177 17.8372 10.8654V5.00257Z"
                fill="url(#paint0_linear_1515_52324)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1515_52324"
                  x1="16.5"
                  y1="2"
                  x2="16.5"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#01BCF5" />
                  <stop offset="1" stopColor="#038DFE" />
                </linearGradient>
              </defs>
            </svg>
            <h1 className="text-3xl font-bold">
              Meet your super-skilled educators
            </h1>
          </div>
          <p className="text-[#343434d3] font-medium pt-3 pb-6 px-2">
            Our top-notch instructors have years of experience from companies
            such as Google, IBM, and McKinsey, and more.
          </p>

          <Carousel>
            <CarouselContent>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Educators;

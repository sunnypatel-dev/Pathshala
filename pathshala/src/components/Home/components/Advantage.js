import React from "react";

const Advantage = () => {
  return (
    <section className="bg-[#F0F8FF] px-5 xl:px-0 pb-24">
      <div className="max-w-screen-xl m-auto ">
        <div className="flex sm:flex-row flex-col gap-3">
          <img
            className="w-5 object-contain"
            src="pathshala-plane.webp"
            alt="plane"
          />
          <h1 className="text-2xl sm:text-3xl font-bold">
            The Pathshala Trainings advantage
          </h1>
        </div>
        <p className="text-[#343434d3] font-medium pt-4 pb-7 sm:px-2">
          100% online courses led in a dynamic learning environment
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white  p-6 rounded-xl border-2 border-[#E7F6FF] flex flex-col gap-7">
            <img className="w-20" src="/practical.png.webp" alt="practical" />
            <div>
              <h3 className="text-xl font-semibold">Industry grade content</h3>
              <p className="text-[#303030]">With practical learning</p>
            </div>
          </div>
          <div className="bg-white  p-6 rounded-xl border-2 border-[#E7F6FF] flex flex-col gap-7">
            <img className="w-20" src="/placement.png.webp" alt="practical" />
            <div>
              <h3 className="text-xl font-semibold">
                100% Placement Assistance
              </h3>
              <p className="text-[#303030]">To help you launch your career</p>
            </div>
          </div>
          <div className="bg-white  p-6 rounded-xl border-2 border-[#E7F6FF] flex flex-col gap-7">
            <img className="w-20" src="/certificate.png.webp" alt="practical" />
            <div>
              <h3 className="text-xl font-semibold">Excellence Certified</h3>
              <p className="text-[#303030]">
                And recognized by 180K+ companies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;

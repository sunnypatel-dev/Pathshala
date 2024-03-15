import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#EEFBFF] px-5 xl:px-0 pt-28 lg:pb-0 pb-10">
      <section className="flex lg:items-center lg:flex-row flex-col justify-between max-w-screen-xl m-auto ">
        <div className="flex flex-col gap-5 sm:gap-7 ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:leading-[55px] text-[#1d1d1d] font-bold">
            Instant Doubt <br className="lg:block hidden" /> Support,
            Mentorship, <br />
            Internship & For Free
          </h1>
          <p className="text-lg sm:text-xl text-[#303030]">
            Learn, Practice, and get hired!
          </p>
          <button className="bg-[#9168f9] rounded text-lg sm:text-xl w-fit hover:bg-[#6E4DFE] text-white px-4 py-2">
            Explore Now!
          </button>
        </div>
        <Image
          src="/student.png"
          className="lg:block hidden lg:w-[400px]"
          height={100}
          width={500}
          alt="student"
        />
      </section>
      {/* 
      <section className="flex flex-col items-center gap-10">
        <p className="text-[1.7rem] text-[#303030] font-semibold">
          Top companies hiring from us
        </p>
        <div class="slider">
          <div class="slide-track">
            <div className="slide">
              <Image src="/hcl.png.webp" width={170} height={160} alt="" />
            </div>
            <div className="slide">
              <Image src="/zomato.png.webp" width={130} height={160} alt="" />
            </div>
            <div className="slide">
              <Image src="/redbus.png.webp" width={130} height={160} alt="" />
            </div>
            <div className="slide">
              <Image src="/disney.png.webp" width={130} height={160} alt="" />
            </div>
            <div className="slide">
              <Image src="/justdial.png.webp" width={130} height={160} alt="" />
            </div>
            <div className="slide">
              <Image
                src="/make-my-trip.png.webp"
                width={120}
                height={160}
                alt=""
              />
            </div>{" "}
            <div className="slide">
              <Image src="/hcl.png.webp" width={170} height={160} alt="" />
            </div>
            <div className="slide">
              <Image src="/zomato.png.webp" width={130} height={160} alt="" />
            </div>
            <div className="slide">
              <Image src="/redbus.png.webp" width={130} height={160} alt="" />
            </div>
            <div className="slide">
              <Image src="/disney.png.webp" width={130} height={160} alt="" />
            </div>
            <div className="slide">
              <Image src="/justdial.png.webp" width={130} height={160} alt="" />
            </div>
            <div className="slide">
              <Image
                src="/make-my-trip.png.webp"
                width={120}
                height={160}
                alt=""
              />
            </div>{" "}
            <div className="slide">
              <Image src="/hcl.png.webp" width={170} height={160} alt="" />
            </div>
            <div className="slide">
              <Image src="/zomato.png.webp" width={130} height={160} alt="" />
            </div>
            <div className="slide">
              <Image src="/redbus.png.webp" width={130} height={160} alt="" />
            </div>
            <div className="slide">
              <Image src="/disney.png.webp" width={130} height={160} alt="" />
            </div>
            <div className="slide">
              <Image src="/justdial.png.webp" width={130} height={160} alt="" />
            </div>
            <div className="slide">
              <Image
                src="/make-my-trip.png.webp"
                width={120}
                height={160}
                alt=""
              />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Hero;

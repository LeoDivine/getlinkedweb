import Image from "next/image";
import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-[#140D27] h-screen text-white">
      <Image
        className=" absolute right-0 mr-[40px] pt-10"
        src="/heroline.png"
        width="500"
        height="500"
        alt="hero"
      />
      <div className="flex z-10 relative pt-[146px] gap-[10px]">
        <div className="pl-[90px]">
          <h3 className="text-[70px] font-bold">
            getlinked Tech Hackathon 1.0
          </h3>
          <p className="text-[15px] w-[60%]">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <a
            className="bg-gradient-to-r from-[#903AFF] to-[#FE34B9] px-4 py-2 rounded-sm"
            href=""
          >
            <button className="mt-[20px]">Register</button>
          </a>
        </div>
        <div className="">
          <Image
            className="absolute mt-5"
            src="/purpleflare.png"
            width="500"
            height="500"
            alt="lvmfmv"
          />
          <Image className="" src="/hero.png" width="1000" height="1000" alt="hero" />
        </div>
      </div>
    </div>
  );
}

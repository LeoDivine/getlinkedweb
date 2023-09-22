import React from "react";
import Image from "next/image";

export default function Prizes() {
  return (
    <>
      <div className="md:text-center md:w-full text-left mt-[100px] lg:ml-[45rem] w-full lg:w-[30%] relative">
        <h3 className="lg:text-[32px] text-[25px] font-bold md:text-center lg:text-left text-center">
          Prizes and <br />
          <span className="text-[#D434FE]">Rewards</span>
        </h3>
        <p className="lg:text-left text-center">
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[100px] justify-center mt-10 pb-6 relative">
        <Image
          className="lg:w-[40%] w-[90%] mx-auto"
          src="/trophy.png"
          width="400"
          height="400"
          alt="dfmm"
        />
        <Image
          className="lg:w-[40%] w-[90%] mx-auto"
          src="/medal.png"
          width="500"
          height="500"
          alt="dfmm"
        />
      </div>
    </>
  );
}
``;

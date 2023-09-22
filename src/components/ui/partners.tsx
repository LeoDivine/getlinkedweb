import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <div className="text-center mt-[100px] pb-6 relative">
      <h3 className="font-bold lg:text-[32px] text-[25px]">
        Partners and Sponsors
      </h3>
      <p className="w-full lg:w-[40%] mx-auto mt-3">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
      <Image
        className="mx-auto w-[90%] mt-[30px]"
        src="/partners.png"
        width="800"
        height="800"
        alt="fkfbfi"
      />
    </div>
  );
}

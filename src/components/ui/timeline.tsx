import React from "react";

interface TIMELINEI {
  title: string;
  description: string;
  date: string;
  item: string;
  className?: string;
}

export function Timeline({
  title,
  description,
  date,
  item,
  className,
}: TIMELINEI) {
  return (
    <div className="odd:text-right even:text-left relative">
      <div
        className={`md:flex-row lg:ml-0 ml-[70px] lg:pr-0 pr-[30px] justify-center mt-[100px] md:mt-[90px] flex xl:flex-row flex-col lg:gap-[120px] relative ${className}`}
      >
        <div className={`md:flex-col flex-col lg:w-[30%] w-full flex text-right`}>
          <h3 className="text-[18px] lg:text-[24px] md:text-left xl:text-left text-left font-bold text-[#d434fe]">
            {title}
          </h3>
          <p className="text-[12px] text-left xl:text-left">{description}</p>
        </div>
        <h3 className="md:text-right text-[18px] lg:text-[24px] w-full lg:w-[30%] my-auto font-bold  text-[#d434fe] text-left">
          {date}
        </h3>
      </div>
      <div className="absolute sm:left-0  ml-[20px] md:ml-[31rem] xl:ml-[41rem] -mt-[155px]">
        <div className="w-[4px] h-[100px] mx-auto mb-[10px] bg-[#d434fe]"></div>
        <div className="w-[40px] h-[40px] mx-auto rounded-[200px] bg-gradient-to-r from-[#903AFF] text-[25px] text-center font-bold my-auto to-[#D434FE]">
          {item}
        </div>
      </div>
    </div>
  );
} 
export function Timeline2({
  title,
  description,
  date,
  item,
  className,
}: TIMELINEI) {
  return (
    <div className="w-full odd:text-right even:text-left relative">
      <div
        className={`md:flex-row lg:ml-0 ml-[70px] lg:pr-0 pr-[30px] justify-center mt-[50px] lg:mt-[100px] flex flex-col lg:gap-[120px] relative ${className}`}
      >
        <div className={`flex-col w-full lg:w-[30%] flex `}>
          <h3 className="text-[18px] lg:text-[24px] md:text-right xl:text-right text-left font-bold text-[#d434fe]">
            {title}
          </h3>
          <p className="text-[12px] md:text-right text-left xl:text-right">{description}</p>
        </div>
        <h3 className="xl:text-left md:text-left text-[18px] lg:text-[24px] w-full lg:w-[30%] my-auto font-bold mt-9 text-[#d434fe] text-left">
          {date}
        </h3>
      </div>
      <div className="absolute md:ml-[31rem] left-0 ml-[20px] xl:ml-[41rem] -mt-[155px]">
        <div className="w-[4px] h-[100px] mx-auto mb-4 bg-[#d434fe]"></div>
        <div className="w-[40px] h-[40px] mx-auto rounded-[200px] bg-gradient-to-r from-[#903AFF] text-[25px] text-center font-bold my-auto to-[#D434FE]">
          {item}
        </div>
      </div>
    </div>
  );
}

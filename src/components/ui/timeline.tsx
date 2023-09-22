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
        className={`lg:ml-0 ml-[70px] lg:pr-0 pr-[30px] justify-center mt-[100px] flex lg:flex-row flex-col lg:gap-[120px] relative ${className}`}
      >
        <div className={`flex-col lg:w-[30%] w-full flex text-right`}>
          <h3 className="text-[18px] lg:text-[24px] lg:text-right text-left font-bold text-[#d434fe]">
            {title}
          </h3>
          <p className="text-[12px] text-left lg:text-right">{description}</p>
        </div>
        <h3 className="text-[18px] lg:text-[24px] w-full lg:w-[30%] my-auto font-bold  text-[#d434fe] text-left">
          {date}
        </h3>
      </div>
      <div className="absolute sm:left-0 ml-[20px] lg:ml-[40rem] -mt-[155px]">
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
        className={`lg:ml-0 ml-[70px] lg:pr-0 pr-[30px] justify-center mt-[50px] lg:mt-[100px] flex lg:flex-row-reverse flex-col lg:gap-[120px] relative ${className}`}
      >
        <div className={`flex-col w-full lg:w-[30%] flex `}>
          <h3 className="text-[18px] lg:text-[24px] lg:text-left text-left font-bold text-[#d434fe]">
            {title}
          </h3>
          <p className="text-[12px] text-left lg:text-left">{description}</p>
        </div>
        <h3 className="lg:text-right text-[18px] lg:text-[24px] w-full lg:w-[30%] my-auto font-bold mt-9 text-[#d434fe] text-left">
          {date}
        </h3>
      </div>
      <div className="absolute md:left-0 md:ml-0 left-0 ml-[20px] lg:ml-[40rem] -mt-[155px]">
        <div className="w-[4px] h-[100px] mx-auto mb-4 bg-[#d434fe]"></div>
        <div className="w-[40px] h-[40px] mx-auto rounded-[200px] bg-gradient-to-r from-[#903AFF] text-[25px] text-center font-bold my-auto to-[#D434FE]">
          {item}
        </div>
      </div>
    </div>
  );
}

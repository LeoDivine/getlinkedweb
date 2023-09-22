import React, { useState } from "react";

interface FAQI {
  headline: string;
  content?: string;
}

export default function Faq({ headline, content }: FAQI) {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? "display" : "hidden";
  const contentDisplay = `${expandClass} p-4`;
  return (
    <div className="cursor-pointer">
      <div className="flex justify-between" onClick={() => setExpand(!expand)}>
        <p className="my-[15px]">{headline}</p>
        {expand ? (
          <p className="my-auto text-[#d434fe]">-</p>
        ) : (
          <p className="my-auto text-[#d434fe]">+</p>
        )}
      </div>
      <div className={`border-[#d434fe] rounded-[10px] mb-3 border-[1px] ${contentDisplay}`}>
        {content}
      </div>
      <hr className="border-[#d434fe]" />
    </div>
  );
}

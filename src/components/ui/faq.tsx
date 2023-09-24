import { motion } from "framer-motion";
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
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="cursor-pointer"
    >
      <div className="flex justify-between" onClick={() => setExpand(!expand)}>
        <p className="my-[15px]">{headline}</p>
        {expand ? (
          <p className="my-auto text-[#d434fe]">-</p>
        ) : (
          <p className="my-auto text-[#d434fe]">+</p>
        )}
      </div>
      <div
        className={`border-[#d434fe] rounded-[10px] mb-3 border-[1px] ${contentDisplay}`}
      >
        <p>{content}</p>
      </div>
      <hr className="border-[#d434fe]" />
    </motion.div>
  );
}

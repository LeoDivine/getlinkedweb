import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Prizes() {
  return (
    <>
      <div className="md:text-center md:w-full text-left mt-[100px] xl:ml-[45rem] w-full xl:w-[30%] relative">
        <motion.h3
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:text-[32px] text-[25px] font-bold md:text-center xl:text-left text-center"
        >
          Prizes and <br />
          <span className="text-[#D434FE]">Rewards</span>
        </motion.h3>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="xl:text-left text-center"
        >
          Highlight of the prizes or rewards for winners and for participants.
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[100px] justify-center mt-10 pb-6 relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:w-[2000px]"
        >
          <Image
            className="lg:w-[90%] w-[90%] mx-auto"
            src="/trophy.png"
            width="400"
            height="400"
            alt="dfmm"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:w-[2000px]"
        >
          <Image
            className="lg:w-[80%] w-[90%] mx-auto"
            src="/medal.png"
            width="500"
            height="500"
            alt="dfmm"
          />
        </motion.div>
      </div>
    </>
  );
}
``;

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <div className="text-center mt-[100px] pb-6 relative">
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="font-bold lg:text-[32px] text-[25px]"
      >
        Partners and Sponsors
      </motion.h3>
      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full lg:w-[40%] mx-auto mt-3"
      >
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </motion.p>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Image
          className="mx-auto w-[90%] mt-[30px]"
          src="/partners.png"
          width="800"
          height="800"
          alt="fkfbfi"
        />
      </motion.div>
    </div>
  );
}

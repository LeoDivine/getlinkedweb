import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface MODALI {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: MODALI) {
  if (!isOpen) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{opacity: 0}}
      transition={{ duration: 1, delay: 0.2 }}
      className="lg:-mt-[70px] -mt-[830px] lg:py-[30px] py-[120px] md:py-[100px] absolute w-full h-[830px] lg:h-[700px] z-50 bg-[#140d27f0]"
    >
      <div className="lg:mx-[390px] mx-0">
        <Image
          src="/registeroverlay.png"
          alt="overlay"
          width="440"
          height="440"
        />
      </div>
      <div className="text-center">
        <div className="text-[32px] mt-[20px] font-bold">
          <h3>Congratulations</h3>
          <h3>you have successfully Registered</h3>
        </div>
        <p className="mt-[10px]">
          Yes, it was easy and you did it! check your mail box for next step
        </p>
        <button
          className="mt-[10px] px-[100px] lg:px-[200px] py-[10px] bg-gradient-to-r from-[#903AFF] to-[#FE34B9]"
          onClick={onClose}
        >
          Back
        </button>
      </div>
    </motion.div>
  );
}

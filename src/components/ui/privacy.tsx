import { ListIcon } from "@/utils/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Privacy() {
  return (
    <div className="flex flex-col lg:flex-row px-[20px] lg:px-[100px] pb-[30px] mt-[70px]">
      <div className="mt-[40px] flex flex-col">
        <motion.h3
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[32px] font-bold"
        >
          Privacy Policy and <br />
          <span className="text-[#D434FE]">Terms</span>
        </motion.h3>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-[10px]"
        >
          Last updated on September 12, 2023
        </motion.p>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-[20px] w-[80%]"
        >
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </motion.p>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-[30px] mb-[20px] text-center lg:text-left w-full lg:w-[80%] border-[1px] p-[20px] lg:p-[60px] bg-[#53535316] rounded-[7px] border-[#d434fe]"
        >
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <p className="text-[#D434FE] font-bold mt-[30px]">Licensing Policy</p>
          <p>Here are terms of our Standard License:</p>
          <div className="flex flex-row mt-6 gap-[10px]">
            <p>{ListIcon}</p>{" "}
            <p className="text-left">
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </p>
          </div>
          <div className="flex flex-row mt-6 gap-[10px]">
            <p>{ListIcon}</p>{" "}
            <p className="text-left">
              You are licensed to use the item available at any free source
              sites, for your project developement
            </p>
          </div>
          <Link
            className="bg-gradient-to-r from-[#903AFF] to-[#FE34B9] px-[30px] z-10 py-3 rounded-sm"
            href=""
          >
            <button className="mt-[30px]">Read More</button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className=" my-auto lg:w-[2400px]"
      >
        <Image
          className="my-auto md:hidden xl:block"
          src="/privacy.png"
          width="500"
          height="500"
          alt="mdmdisd"
        />
      </motion.div>
    </div>
  );
}

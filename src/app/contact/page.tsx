'use client'
import { FormInput, FormTextField } from "@/components/ui/formInput";
import {
  facebookIcon,
  instagramIcon,
  linkedInIcon,
  twitterIcon,
} from "@/utils/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <div className="bg-[#140D27] w-full flex h-screen text-white">
      <Image
        className="absolute left-0 top-0"
        src="/purpleflare8.png"
        width="500"
        height="500"
        alt="lgifm"
      />
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden lg:flex flex-col gap-4 w-[50%] md:pl-[100px] pl-[200px] mt-[140px] relative"
      >
        <h3 className="text-[32px] font-bold text-[#d434fe]">Get in touch</h3>
        <p className="w-[20%]">Contact Information</p>
        <p className="w-[40%]">27,Alara Street Yaba 100012 Lagos State</p>
        <p>Call Us : 07067981819</p>
        <p className="w-[70%]">
          We are open from Monday-Friday 08:00am - 05:00pm
        </p>
        <p className="text-[#d434fe]">Share on</p>
        <div className="flex gap-5">
          {instagramIcon}
          {twitterIcon}
          {facebookIcon}
          {linkedInIcon}
        </div>
      </motion.div>
      <div className="my-auto lg:w-[47%] w-full relative z-20">
        <div className="bg-[#53535316] px-[10px] py-[20px] lg:px-[100px] xl:py-[50px]">
          <h3 className="text-[#d434fe] font-bold">
            Questions or need assistance?
          </h3>
          <h3 className="text-[#d434fe] font-bold">Let us know about it!</h3>
          <form action="">
            <FormInput
              type="text"
              placeholder="Enter name"
              formTitle="Name"
              className="w-full md:w-full xl:w-[440px]"
            />
            <FormInput
              type="email"
              placeholder="Enter email"
              formTitle="Email"
              className="w-full md:w-full xl:w-[440px]"
            />
            <FormTextField
              type="text"
              placeholder="Message"
              formTitle="Message"
              className="p-3 h-[200px] w-full md:w-full xl:w-[440px]"
            />
            <Link href="">
              <input
                className="xl:mx-[150px] w-full xl:w-[30%] mt-[10px] bg-gradient-to-r from-[#903AFF] to-[#FE34B9] py-[10px] rounded-sm px-[30px]"
                type="submit"
                value="Submit"
              />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

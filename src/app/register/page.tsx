"use client";
import {
  FormInput,
  FormSelect,
  FormTextField,
} from "@/components/ui/formInput";
import { Facebook, Instagram, LinkedIn, Twitter } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <div className="bg-[#140D27] flex lg:h-screen text-white">
      <Image
        className="absolute left-0 top-0"
        src="/purpleflare8.png"
        width="500"
        height="500"
        alt="lgifm"
      />
      <div className="hidden lg:flex flex-col gap-4 w-full  mt-[40px] relative">
        <Image
          className=""
          src="/register.png"
          width="600"
          height="600"
          alt="kgrgri"
        />
      </div>
      <div className="my-auto relative z-20">
        <div className="bg-[#53535316] lg:px-[90px] p-[50px] lg:py-[50px] lg:mr-[50px]">
          <h3 className="text-[32px] text-[#d434fe] font-bold">Register</h3>
          <h3>Be part of this movement!</h3>
          <h3 className="text-[24px] mt-[10px]">CREATE YOUR ACCOUNT</h3>
          <form action="">
            <div className="flex flex-wrap gap-3">
              <FormInput
                type="text"
                placeholder="Teams name"
                formTitle="Enter Team name"
                className="w-[220px]"
              />
              <FormInput
                type="email"
                placeholder="Phone Number"
                formTitle="Enter Phone number"
                className="w-[220px]"
              />
              <FormInput
                type="email"
                placeholder="Enter email address"
                formTitle="Email"
                className="w-[220px]"
              />
              <FormInput
                type="email"
                placeholder="What is the project topic"
                formTitle="Project Topic"
                className="w-[220px]"
              />
              <FormSelect
                type="email"
                placeholder="Select your category"
                formTitle="Category"
                className="w-[220px]"
              />
              <FormSelect
                type="email"
                placeholder="What is the project topic"
                formTitle="Group Size"
                className="w-[220px] "
              />
            </div>
            <Link href="">
              <input
                className="lg:mx-[40px] w-[74%] mt-[15px] bg-gradient-to-r from-[#903AFF] to-[#FE34B9] py-[10px] rounded-sm px-[30px]"
                type="submit"
                value="Submit"
              />
            </Link>
          </form>
        </div>
        <Image
          className="lg:hidden absolute right-0 bottom-0"
          src="/purpleflare9.png"
          width="700"
          height="700"
          alt="lgifm"
        />
      </div>
      <Image
        className="lg:block hidden absolute right-0 bottom-0"
        src="/purpleflare9.png"
        width="700"
        height="700"
        alt="lgifm"
      />
    </div>
  );
}

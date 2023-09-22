import { FormInput, FormTextField } from "@/components/ui/formInput";
import { Facebook, Instagram, LinkedIn, Twitter } from "@/utils/icons";
import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <div className="bg-[#140D27] w-full flex h-screen text-white">
      <div className="flex flex-col gap-4 w-[50%] pl-[200px] mt-[140px]">
        <h3 className="text-[32px] font-bold text-[#d434fe]">Get in touch</h3>
        <p className="w-[20%]">Contact Information</p>
        <p className="w-[40%]">27,Alara Street Yaba 100012 Lagos State</p>
        <p>Call Us : 07067981819</p>
        <p className="w-[70%]">
          We are open from Monday-Friday 08:00am - 05:00pm
        </p>
        <p className="text-[#d434fe]">Share on</p>
        <div className="flex gap-5">
          {Instagram}
          {Twitter}
          {Facebook}
          {LinkedIn}
        </div>
      </div>
      <div className="my-auto">
        <div className="bg-[#53535316] px-[100px] py-[50px]">
          <h3 className="text-[#d434fe] font-bold">
            Questions or need assistance?
          </h3>
          <h3 className="text-[#d434fe] font-bold">Let us know about it!</h3>
          <form action="">
            <FormInput type="text" placeholder="Enter name" formTitle="Name" />
            <FormInput
              type="email"
              placeholder="Enter email"
              formTitle="Email"
            />
            <FormTextField
              type="text"
              placeholder="Message"
              formTitle="Message"
              className="p-3 h-[210px]"
            />
            <Link href="">
              <input
                className="mx-[150px] mt-[10px] bg-gradient-to-r from-[#903AFF] to-[#FE34B9] py-[10px] rounded-sm px-[30px]"
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

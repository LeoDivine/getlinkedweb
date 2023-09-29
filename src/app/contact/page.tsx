"use client";
import { FormInput, FormTextField } from "@/components/ui/formInput";
import {
  facebookIcon,
  instagramIcon,
  linkedInIcon,
  twitterIcon,
} from "@/utils/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import React from "react";

export default function ContactPage() {
  //Contact form API Integration
  const [formData, setFormData] = React.useState({
    first_name: "",
    email: "",
    message: "",
  });
  const router = useRouter();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()){
      console.log("form is not valid")
      return;
    }


    try {
      const response = await fetch(
        "https://backend.getlinked.ai/hackathon/contact-form",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            first_name: formData.first_name,
            message: formData.message,
          }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        console.log("Form submitted successfully", result);
        setFormData({
          first_name: "",
          email: "",
          message: "",
        });
        router.push("/contact");
      } else
        console.log("Error...something went wrong", NextResponse.json(result));
    } catch (error) {
      console.error("An error occurred");
    }
    form.reset();
  };

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
        className="hidden lg:flex flex-col gap-4 w-[50%] md:pl-[100px] pl-[200px] my-auto relative"
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
      <motion.div   initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }} className="my-auto lg:w-[47%] w-full relative z-20">
        <div className="bg-[#53535316] px-[10px] py-[20px] lg:px-[100px] xl:py-[50px]">
          <h3 className="text-[#d434fe] font-bold">
            Questions or need assistance?
          </h3>
          <h3 className="text-[#d434fe] font-bold">Let us know about it!</h3>

          {/* Contact Form application */}
        
          <form onSubmit={handleFormSubmission}>
            <FormInput
              type="text"
              placeholder="Enter name"
              formTitle="Name"
              className="w-full md:w-full xl:w-[440px]"
              name="first_name"
              required
              value={formData.first_name}
              onChange={handleInputChange}
            />
            <FormInput
              type="email"
              placeholder="Enter email"
              formTitle="Email"
              className="w-full md:w-full xl:w-[440px]"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <FormTextField
              type="text"
              placeholder="Message"
              formTitle="Message"
              className="p-3 h-[200px] w-full md:w-full xl:w-[440px]"
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
            />
            <button
              className="lg:mx-[40px] w-[74%] mt-[15px] cursor-pointer bg-gradient-to-r from-[#903AFF] to-[#FE34B9] py-[10px] rounded-sm px-[30px]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

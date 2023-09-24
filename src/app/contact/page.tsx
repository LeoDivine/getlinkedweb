"use client";
import { FormInput, FormTextField } from "@/components/ui/formInput";
import {
  facebookIcon,
  instagramIcon,
  linkedInIcon,
  twitterIcon,
} from "@/utils/icons";
import Image from "next/image";
import React from "react";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formData.fullName === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: formData.email,
      first_name: formData.fullName,
      message: formData.message,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    setSubmitting(true);
    try {
      const response = await fetch(
        "https://backend.getlinked.ai/hackathon/contact-form",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Contact Submission Error");
      }

      const result = await response.json();
      console.log("Form submitted successfully.", result);

      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("An error occurred: ");
    } finally {
      setSubmitting(false);
    }
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
      <div className="hidden lg:flex flex-col gap-4 w-[50%] md:pl-[100px] pl-[200px] mt-[140px] relative">
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
      </div>
      <div className="my-auto lg:w-[47%] w-full relative z-20">
        <div className="bg-[#53535316] px-[10px] py-[20px] lg:px-[100px] xl:py-[50px]">
          <h3 className="text-[#d434fe] font-bold">
            Questions or need assistance?
          </h3>
          <h3 className="text-[#d434fe] font-bold">Let us know about it!</h3>
          <form onSubmit={handleFormSubmission}>
            <FormInput
              type="text"
              placeholder="Enter name"
              formTitle="Name"
              className="w-full md:w-full xl:w-[440px]"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <FormInput
              type="email"
              placeholder="Enter email"
              formTitle="Email"
              className="w-full md:w-full xl:w-[440px]"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <FormTextField
              type="text"
              placeholder="Message"
              formTitle="Message"
              className="p-3 h-[200px] w-full md:w-full xl:w-[440px]"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="xl:mx-[150px] w-full xl:w-[30%] mt-[10px] bg-gradient-to-r from-[#903AFF] to-[#FE34B9] py-[10px] rounded-sm px-[30px]"
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

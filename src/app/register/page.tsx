"use client";
import Button from "@/components/ui/button";
import { FormInput } from "@/components/ui/formInput";
import FormSelect from "@/components/ui/formselect";
import { CATEGORIES, GROUPSIZE } from "@/utils/const";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Register() {
  const [categoryOptions, setCategoryOptions] = React.useState<ICategories[]>(
    []
  );
  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        const response = await fetch(
          "https://backend.getlinked.ai/hackathon/categories-list",
          {
            headers: { "Content-type": "application/json" },
          }
        );
        const result = await response.json();
        setCategoryOptions(result); // Assuming the categories are in the 'categories' field of the API response
        return result;
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategoryList();
  }, []);

  const groupSizeOptions = GROUPSIZE[0].name.map((group) => {
    return Object.values(group)[0];
  });
  
  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: 10,
    project_topic: "",
    category: 1,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

     
    console.log("submitted successfully...");
  };

  console.log(categoryOptions);
  return (
    <div className="bg-[#140D27] lg:flex lg:h-screen text-white">
      <Image
        className="absolute left-0 top-0"
        src="/purpleflare8.png"
        width="500"
        height="500"
        alt="lgifm"
      />
      <div className="hidden lg:flex flex-col gap-4 w-full mt-[40px] relative">
        <Image
          className=""
          src="/register.png"
          width="600"
          height="600"
          alt="kgrgri"
        />
      </div>
      <div className="relative z-20">
        <div className="bg-[#53535316] lg:px-[90px] p-[50px] lg:py-[50px] lg:mr-[50px]">
          <h3 className="text-[32px] text-[#d434fe] font-bold">Register</h3>
          <h3>Be part of this movement!</h3>
          <h3 className="text-[24px] mt-[10px]">CREATE YOUR ACCOUNT</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-3">
              <FormInput
                type="text"
                placeholder="Teams name"
                formTitle="Enter Team name"
                className="md:w-[160px] xl:w-[270px]"
              />
              <FormInput
                type="number"
                placeholder="Phone Number"
                formTitle="Enter Phone number"
                className="md:w-[160px] xl:w-[270px]"
              />
              <FormInput
                type="email"
                placeholder="Enter email address"
                formTitle="Email"
                className="md:w-[160px] xl:w-[270px]"
              />
              <FormInput
                type="text"
                placeholder="What is the project topic"
                formTitle="Project Topic"
                className=" md:w-[160px] xl:w-[270px]"
              />

              <FormSelect
                className="md:w-[160px] xl:w-[270px]"
                options={categoryOptions}
                label="Category"
              />
              <FormSelect
                className="md:w-[160px] xl:w-[270px]"
                options={groupSizeOptions}
                label="Select Group Size"
              />
            </div>

            <button
              className="lg:mx-[40px] w-[74%] mt-[15px] cursor-pointer bg-gradient-to-r from-[#903AFF] to-[#FE34B9] py-[10px] rounded-sm px-[30px]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

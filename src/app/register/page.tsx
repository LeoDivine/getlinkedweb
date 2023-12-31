"use client";
import { FormInput } from "@/components/ui/formInput";
import FormSelect from "@/components/ui/formselect";
import { GROUPSIZE } from "@/utils/const";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { NextResponse } from "next/server";
import Modal from "@/components/ui/modal";

export default function Register() {
  //Categories API consume
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
        setCategoryOptions(result);
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

  //application API consume
  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: 1,
    project_topic: "",
    category: 1,
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      console.log("form is not valid");
      return;
    }

    try {
      const response = await fetch(
        "https://backend.getlinked.ai/hackathon/registration",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            team_name: formData.team_name,
            phone_number: formData.phone_number,
            email: formData.email,
            project_topic: formData.project_topic,
            category: formData.category,
            group_size: formData.group_size,
          }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        console.log("Form submitted successfully.", result);
        setFormData({
          email: "",
          phone_number: "",
          team_name: "",
          group_size: 1,
          project_topic: "",
          category: 1,
        });
      } else console.log("something went wrong..", NextResponse.json(result));
    } catch (error) {
      console.error("An error occurred ");
    }
    
    form.reset();
  };

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#140D27] relative lg:flex lg:h-screen text-white">
      <Image
        className="absolute left-0 top-0"
        src="/purpleflare8.png"
        width="500"
        height="500"
        alt="lgifm"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="md:hidden hidden xl:flex flex-col gap-4 w-full mt-[40px] relative"
      >
        <Image
          className="my-auto"
          src="/register.png"
          width="600"
          height="600"
          alt="kgrgri"
        />
      </motion.div>
      <div className="z-20 lg:my-auto">
        <div className="bg-[#53535316] relative md:mx-[140px] lg:px-[90px] p-[50px] xl:py-[50px] lg:mr-[50px]">
          <h3 className="text-[32px] text-[#d434fe] font-bold">Register</h3>
          <h3>Be part of this movement!</h3>
          <h3 className="text-[24px] mt-[10px]">CREATE YOUR ACCOUNT</h3>

          {/* Form application */}
          <form onSubmit={handleSubmit}>
            <div className="flex md:flex-row flex-col gap-3">
              <FormInput
                name="team_name"
                type="text"
                required
                placeholder="Teams name"
                formTitle="Enter Team name"
                className="md:w-[160px] lg:w-[270px]"
                onChange={handleInputChange}
                value={formData.team_name}
              />
              <FormInput
                name="phone_number"
                type="text"
                required
                placeholder="Phone Number"
                formTitle="Enter Phone number"
                className="md:w-[160px] lg:w-[270px]"
                onChange={handleInputChange}
                value={formData.phone_number}
              />
            </div>
            <div className="flex md:flex-row flex-col gap-3">
              <FormInput
                name="email"
                type="email"
                required
                placeholder="Enter email address"
                formTitle="Email"
                className="md:w-[160px] lg:w-[270px]"
                onChange={handleInputChange}
                value={formData.email}
              />
              <FormInput
                name="project_topic"
                type="text"
                required
                placeholder="What is the project topic"
                formTitle="Project Topic"
                className=" md:w-[160px] lg:w-[270px]"
                onChange={handleInputChange}
                value={formData.project_topic}
              />
            </div>
            <div className="flex md:flex-row flex-col gap-3">
              <FormSelect
                name="category"
                className="md:w-[160px] lg:w-[270px]"
                options={categoryOptions}
                label="Category"
                onChange={handleInputChange}
                value={formData.category}
              />
              <FormSelect
                name="group_size"
                className="md:w-[160px] lg:w-[270px]"
                options={groupSizeOptions}
                label="Select Group Size"
                onChange={handleInputChange}
                value={formData.group_size}
              />
            </div>
            <button
              onClick={openModal}
              className="lg:mx-[70px] w-[74%] mt-[15px] cursor-pointer bg-gradient-to-r from-[#903AFF] to-[#FE34B9] py-[10px] rounded-sm px-[30px]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}

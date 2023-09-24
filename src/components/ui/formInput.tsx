'use client'
import React, { ChangeEvent, useState } from "react";

interface FORMINUTI {
  formTitle: string;
  placeholder?: string;
  type?: string;
  className?: string;
}

export function FormInput({
  formTitle,
  placeholder,
  type,
  className,
}: FORMINUTI) {
  return (
    <div className="mt-[10px] relative">
      <p className="text-[13px]" >{formTitle}</p>
      <input
        type={type}
        className={`focus:outline-none pl-3 bg-[#53535316] mt-0 h-[45px] rounded-[5px] outline-white border-[1px] ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
}
export function FormTextField({
  formTitle,
  placeholder,
  className,
}: FORMINUTI) {
  return (
    <div className="mt-[20px] relative">
      <p className="text-[13px]">{formTitle}</p>
      <textarea
        className={`focus:outline-none bg-[#53535316] resize-none mt-0 rounded-[5px] outline-white border-[1px] ${className}`}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

interface FORMSELECTI{
    className?: string;
    formTitle: string;
  placeholder?: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
}

export function FormSelect({
  formTitle,
  placeholder,
  option1,
  option2,
  option3,
  option4,
  className,

}: FORMSELECTI) {
  return (
    <div className="mt-[10px] relative">
      <p className="text-[13px]">{formTitle}</p>
      <select
        className={`focus:outline-none pl-3 bg-[#53535316] mt-0 h-[45px] w-[200px] rounded-[5px] outline-white border-[1px] ${className}`}
        id=""
        value={placeholder}
      >
        <option className="text-black" value="rgri">{option1}</option>
        <option className="text-black" value="rgri">{option2}</option>
        <option className="text-black" value="rgri">{option3}</option>
        <option className="text-black" value="rgri">{option4}</option>
      </select>
    </div>
  );
}
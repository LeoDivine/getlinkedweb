'use client'
import React, { ChangeEvent, useState } from "react";

interface FORMINUTI {
  formTitle: string;
  placeholder?: string;
  type: string;
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
      <p>{formTitle}</p>
      <input
        type={type}
        className={`focus:outline-none pl-3 bg-[#53535316] mt-0 h-[45px] w-[440px] rounded-[5px] outline-white border-[1px] ${className}`}
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
      <p>{formTitle}</p>
      <textarea
        className={`focus:outline-none bg-[#53535316] resize-none mt-0 h-[45px] w-[440px] rounded-[5px] outline-white border-[1px] ${className}`}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export function FormSelect({
  formTitle,
  placeholder,
  className,
}: FORMINUTI) {
  const [selectedOption, setSelectedOption] = useState<string> ('')
  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="mt-[10px] relative">
      <p>{formTitle}</p>
      <select
        className={`text-white focus:outline-none pl-3 bg-[#53535316] mt-0 h-[45px] w-[440px] rounded-[5px] outline-white border-[1px] ${className}`}
        value={selectedOption} onChange={selectHandler}
        id=""
      >
        <option value="rgri"></option>
        <option value="rgri"></option>
        <option value="rgri"></option>
        <option value="rgri"></option>
      </select>
    </div>
  );
}
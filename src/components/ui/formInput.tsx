'use client'

import { InputHTMLAttributes } from "react";

export function FormInput({
  formTitle,
  type,
  name,
  placeholder,
  className,
  onChange,
}: IFormInput
) {
  return (
    <div className="mt-[10px] relative">
      <p className="text-[13px]" >{formTitle}</p>
      <input
      onChange={onChange}
        type={type}
        name={name}
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


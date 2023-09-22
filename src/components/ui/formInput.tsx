import React from "react";

interface FORMINUTI {
  formTitle: string;
  placeholder: string;
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
    <div className="mt-[20px]">
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
    <div className="mt-[20px]">
      <p>{formTitle}</p>
      <textarea
        className={`focus:outline-none bg-[#53535316] resize-none mt-0 h-[45px] w-[440px] rounded-[5px] outline-white border-[1px] ${className}`}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

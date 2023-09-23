import React from 'react'

export default function FormSelect({ className, options }: FormSelectProps) {
    return (
      <select className={`focus:outline-none pl-3 bg-[#53535316] mt-0 h-[45px] rounded-[5px] outline-white border-[1px]${className}`}>
        {options.map((option, index) => (
          <option  key={index} value={option}>
            {option}
            
          </option>
        ))}
      </select>
    );
  }
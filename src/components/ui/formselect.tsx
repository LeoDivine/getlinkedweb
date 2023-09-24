import { CATEGORIES } from '@/utils/const';
import React from 'react';

export default function FormSelect({ className, options, label }: FormSelectProps) {
  return (
    <div>
      <label className="block mb-2 text-white">{label}</label>
      <select className={`focus:outline-none pl-3 bg-[#53535316] mt-0 h-[45px] rounded-[5px] outline-white border-[1px]${className}`}>
        {options.map((category, index) => (
          <option key={index} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

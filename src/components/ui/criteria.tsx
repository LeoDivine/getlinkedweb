import React from "react";

interface CriteriaI {
  title: string;
  description: string;
}

export default function Criteria({ title, description }: CriteriaI) {
  return (
    <div className="mt-[20px]">
      <p className="text-[14px]">
        <span className="font-bold text-[#ff26b9]">{title}</span>:{" "}
        <span>{description}</span>
      </p>
    </div>
  );
}

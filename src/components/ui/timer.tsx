import React from "react";

interface TIMERI {
  letter: string;
}
export default function Timer({ letter }: TIMERI) {
  return (

      <span className="text-[10px]">{letter}</span>
  );
}

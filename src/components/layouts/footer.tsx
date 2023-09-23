import { FOOTERLINKS, SOCIALLINKS } from "@/utils/const";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-bottom text-white py-6 px-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between sm:justify-around">
        <div className="flex flex-col items-start text-start sm:text-right">
          <span className="font-bold text-2xl p-0">
            get <span className="text-abstract p-0">Linked</span>
          </span>
          
          <p className="text-sm xl:text-left md:text-left xl:items-center sm:items-start py-4 max-w-[500px]">
            {`GetLinked Tech hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology`}
          </p>

          <div className="flex flex-row  items-start  divide-x-4 divide-solid  divide-fuchsia-800 md:pt-28 sm:pt-28 xl:pt-28  sm:mt-0">
            <div className="pr-4">
              <a href="#" className="text-sm">
                Terms of Use
              </a>
            </div>
            <div className="pl-4">
              <a href="#" className="text-sm">
                Policy
              </a>
            </div>
          </div>
        </div>

        {FOOTERLINKS.map((section, i) => (
          <div key={i} className="flex flex-col space-y-6 mt-4 sm:mt-0">
            <span className="font-medium mb-2 text-abstract">
              {section.title}
            </span>
            {section.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.link}
                className="text-sm flex items-center"
              >
                {link.icon && <span className="mr-2 ">{link.icon}</span>}
                {link.text}
                {link.name}
              </a>
            ))}
          </div>
        ))}
      </div>

      {SOCIALLINKS.map((section, i) => {
        if (section.title === "Follow Us") {
          return (
            <div key={i} className="flex flex-row gap-2  xl:justify-center md:justify-center md:pl-64 sm:justify-start items-center mt-4 xl:pl-64   ">
              <span className="font-medium mb-2 text-abstract">
                {section.title}
              </span>
              {section.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.link}
                  className="text-sm"
                >
                  {link.icon && <span className="mr-2 ">{link.icon}</span>}
                </a>
              ))}
            </div>
          );
        }
        return null;
      })}

      <div className="container mx-auto text-center mt-4">
        <span className="text-sm">
          All rights reserved. &copy; 2023 getlinked Ltd.
        </span>
      </div>
    </footer>
  );
}

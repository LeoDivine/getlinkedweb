"use client";
import React, { useState } from 'react';
import Button from '../ui/button';
import Link from 'next/link';
import {  animateScroll as scroll } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (sectionId: string) => {
    const offset = parseInt(sectionId, 10); // Convert string to a base-10 integer
    scroll.scrollTo(offset, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };
  
  return (
    <>
      <div className="w-full relative z-20 flex flex-row items-center p-5 sm:flex-row justify-between text-white bg-[#140D27]">
        <div className="font-bold text-3xl text-center sm:text-left">
          get<span className="text-[#D434FE]">linked</span>
        </div>
        <div className="hidden md:flex">
          <ul className="flex flex-col md:flex-row my-auto gap-5">
            <li>
            <ScrollLink
              to="timeline-section"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              Timeline
            </ScrollLink>
            </li>
            <li>
            <ScrollLink
              to="overview-section"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              Overview
            </ScrollLink>
            </li>
            <li>
            <ScrollLink
              to="faqs-section"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              FAQs
            </ScrollLink>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <Button
            text="Register"
            variant="primary"
            href="/register"
            className="rounded-lg bg-gradient-to-r from-[#903AFF] ml-3 to-[#FE34B9] px-[20px] py-[10px]"
          />
        </div>

        <div className="flex md:hidden lg:hidden justify-end">
          <button onClick={toggleMenu} className="text-white">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen
            ? "flex flex-col sm:flex-row gap-5 opacity-100"
            : "hidden opacity-0"
        } transition-opacity ease-in-out duration-300 sm:items-center sm:flex md:hidden p-5 bg-[#140D27] lg:hidden relative z-20`}
      >
        <ul className="flex flex-col sm:flex-row gap-5 text-white  ">
          <li>
            <Link href="/timeline">Timeline</Link>
          </li>
          <li>
            <Link href="/overview">Overview</Link>
          </li>
          <li>
            <Link href="/faqs">FAQs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <Button
          text="Register"
          variant="primary"
          href="/register"
          className="rounded-lg bg-gradient-to-r from-[#903AFF] to-[#FE34B9] px-[20px] py-[10px]"
        />
      </div>
    </>
  );
}



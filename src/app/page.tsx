"use client";
import {
  InformationComp,
  InformationComp2,
  InformationComp3,
} from "@/components/ui/informationComp";
import Partners from "@/components/ui/partners";
import Privacy from "@/components/ui/privacy";
import Prizes from "@/components/ui/prizes";
import { Timeline, Timeline2 } from "@/components/ui/timeline";
import Timer from "@/components/ui/timer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function LandingPage() {
  const [timerend, setTimerEnd] = useState(false);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMin] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("2023-10-21 07:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      const day = Math.floor(diff / (1000 * 60 * 60 * 24));
      setDays(day);

      const hour = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(hour);

      const minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setMin(minute);

      const second = Math.floor((diff % (1000 * 60)) / 1000);
      setSeconds(second);

      if (day == 0 && hour == 0 && minute == 0 && second == 0) {
        setTimerEnd(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#140D27] overflow-hidden text-white">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: "1", delay: 0.3 }}
      >
        <Image
          className=" absolute right-0 lg:mr-[40px] pt-10"
          src="/heroline.png"
          width="400"
          height="400"
          alt="hero"
        />
      </motion.div>

      <div className="flex flex-col w-full lg:flex-row z-10 relative gap-[10px]">
        <div className="px-[20px] lg:text-left text-center lg:pl-[90px]">
          <Image
            className="absolute right-0 top-0"
            src="/purpleflare1.png"
            width="1000"
            height="1000"
            alt="lvmfmv"
          />
          <motion.hgroup
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <h3 className="xl:text-[70px] md:text-[45px] text-[40px] pt-[106px] font-bold">
              getlinked Tech Hackathon{" "}
              <span className="text-[#d434fe]">1.0</span>
            </h3>
            <p className="text-[15px] xl:w-[60%] md:w-[70%]">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Link
              className="bg-gradient-to-r from-[#903AFF] to-[#FE34B9] px-[30px] z-10 py-2 rounded-sm"
              href="/register"
            >
              <button className="mt-[30px]">Register</button>
            </Link>
            <div className="mt-16 font-unica lg:text-[35px] text-[50px]">
              {timerend ? (
                <p>The Hackathon Has Begun</p>
              ) : (
                <p>
                  {days}
                  <Timer letter="D" /> {hours}
                  <Timer letter="H" /> {minutes}
                  <Timer letter="M" /> {seconds}
                  <Timer letter="S" />
                </p>
              )}
            </div>
          </motion.hgroup>
        </div>
        <div className="pt-[100px]">
          <div>
            <Image
              className="absolute mt-5 right-0"
              src="/purpleflare.png"
              width="500"
              height="500"
              alt="lvmfmv"
            />
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: "1", delay: 0.3 }}
          >
            <Image
              className=""
              src="/hero.png"
              width="700"
              height="700"
              alt="hero"
            />
          </motion.div>
        </div>
      </div>
      <div className="lg:px-[90px] px-[20px]">
        <div id="overview-section">
        <InformationComp
          image="/introduction.png"
          className="lg:flex-row"
          title="Introduction to getlinked "
          emphasis="techHackathon 1.0"
          description={`Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a 
                        design maverick, or a concept wizard, you'll have the chance to transform 
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!`}
        />
        </div>
        
        <div className="absolute">
          <Image src="/purpleflare2.png" width="800" height="800" alt="iduf" />
        </div>
        <InformationComp
          className="lg:flex-row-reverse relative"
          image="/rules.png"
          title="Rules and "
          emphasis="guidelines"
          description={`Our tech hackathon is a melting pot of visionaries, and its purpose is as
                      clear as day: to shape the future. Whether you're a coding genius, a 
                      design maverick, or a concept wizard, you'll have the chance to transform 
                      your ideas into reality. Solving real-world problems, pushing the boundaries
                      of technology, and creating solutions that can change the world,
                      that's what we're all about!`}
        />
        <div className="absolute right-0">
          <Image src="/purpleflare3.png" width="800" height="800" alt="iduf" />
        </div>

        <InformationComp2
          className="relative"
          title="Judging Criteria"
          emphasis="Key attributes"
          image="/criteria.png"
        />
        <div id="faqs-section">
        <InformationComp3
          className="flex-row-reverse"
          title="Frequently Asked"
          emphasis="Questions"
          image="/faq.png"
          description="We got answers to the questions that you might
want to ask about getlinked Hackathon 1.0"
        />
        </div>
        
      </div>
      <div className="pb-[20px]" id="timeline-section">
        <motion.h3 className="md:mt-[50px] text-center lg:text-[32px] text-[25px] mb-[20px] font-bold">
          Timeline
        </motion.h3>
        <motion.p
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center lg:w-[30%] w-full mx-auto"
        >
          {`Here is the breakdown of the time we anticipate using for the upcoming
          event.`}
        </motion.p>
        <div className="absolute left-0">
          <Image src="/purpleflare4.png" width="800" height="800" alt="iduf" />
        </div>
        <div className="w-full">
          <Timeline2
            title="Hackathon Announcement"
            description={`The getlinked tech hackathon 1.0 is formally announced
  to the general public and teams begin to get ready to register`}
            date="November 18, 2023"
            item="1"
          />
          <Timeline
            title="Teams Registration begins"
            description={`Interested teams can now show their interest in the
getlinked tech hackathon 1.0 2023 by proceeding to register`}
            date="November 18, 2023"
            item="2"
            className="xl:flex-row-reverse md:flex-row-reverse"
          />
          <Timeline2
            title="Teams Registration ends"
            description="Interested Participants are no longer Allowed to
register"
            date="November 18, 2023"
            item="3"
          />
          <Timeline
            title="Announcement of the accepted teams
and ideas"
            description="All teams whom idea has been accepted into getlinked tech
hackathon 1.0 2023 are formally announced"
            date="November 18, 2023"
            item="4"
            className="xl:flex-row-reverse md:flex-row-reverse mt-[70px]"
          />
          <Timeline2
            title="Getlinked Hackathon 1.0 Offically Begins"
            description={`Accepted teams can now proceed to build their
ground breaking skill driven solutions`}
            date="November 18, 2023"
            className="mt-[70px]"
            item="5"
          />
          <Timeline
            title="Demo Day"
            description={`Teams get the opportunity to pitch their projects to judges.
The winner of the hackathon will also be announced on
this day`}
            date="November 18, 2023"
            item="6"
            className="xl:flex-row-reverse md:flex-row-reverse"
          />
        </div>
      </div>
      <div className="absolute right-0">
        <Image src="/purpleflare5.png" width="800" height="800" alt="iduf" />
      </div>
      <Prizes />
      <div className="absolute left-0">
        <Image src="/purpleflare6.png" width="800" height="800" alt="iduf" />
      </div>
      <Partners />
      <Privacy />
    </div>
  );
}

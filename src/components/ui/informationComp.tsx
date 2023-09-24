import Image from "next/image";
import React from "react";
import Criteria from "./criteria";
import Faq from "./faq";
import Link from "next/link";
import { motion } from "framer-motion";

interface INFORMATIONCOMPI {
  image: string;
  title: string;
  description?: string;
  emphasis?: string;
  className?: string;
}

export function InformationComp({
  image,
  title,
  emphasis,
  description,
  className,
}: INFORMATIONCOMPI) {
  return (
    <>
      <div className={`flex gap-2 mt-12 flex-col ${className}`}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:w-[2000px]"
        >
          <Image
            className="md:w-[40%] lg:w-full"
            width="600"
            height="600"
            src={image}
            alt="image"
          />{" "}
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="my-auto lg:text-left text-center"
        >
          <h3 className={`lg:text-[32px] text-[25px] font-bold`}>
            {title} <br />
            <span className="text-[#d434fe]">{emphasis}</span>
          </h3>
          <p className="lg:mt-[20px] mt-[10px] leading-[25px]">{description}</p>
        </motion.div>
      </div>
    </>
  );
}

export function InformationComp2({
  image,
  title,
  emphasis,
  description,
  className,
}: INFORMATIONCOMPI) {
  return (
    <>
      <div className={`flex gap-2 mt-12 lg:flex-row flex-col ${className}`}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:w-full"
        >
          <Image
            className="xl:block md:hidden"
            width="600"
            height="600"
            src={image}
            alt="image"
          />
        </motion.div>
        <div className="my-auto lg:text-left text-center">
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`lg:text-[32px] text-[25px] font-bold`}
          >
            {title} <br />
            <span className="text-[#d434fe]">{emphasis}</span>
          </motion.h3>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Criteria
              title="Innovation and Creativity"
              description="Evaluate the uniqueness and creativity of the
solution. Consider whether it addresses a real-world problem in a novel 
way or introduces innovative features."
            />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Criteria
              title="Functionality"
              description="Assess how well the solution works. Does it perform its 
intended functions effectively and without major issues? Judges would
consider the completeness and robustness of the solution."
            />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <Criteria
              title="Impact and Relevance"
              description="Determine the potential impact of the solution 
in the real world. Does it address a significant problem, and is it relevant 
to the target audience? Judges would assess the potential social, 
economic, or environmental benefits."
            />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <Criteria
              title="Technical Complexity"
              description="Evaluate the technical sophistication of the solution. 
Judges would consider the complexity of the code, the use of advanced 
technologies or algorithms, and the scalability of the solution."
            />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Criteria
              title="Adherence to Hackathon Rules"
              description="Judges will Ensure that the team adhered 
to the rules and guidelines of the hackathon, including deadlines, use of 
specific technologies or APIs, and any other competition-specific requirements."
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Link
              className="bg-gradient-to-r from-[#903AFF] to-[#FE34B9] px-[30px] z-10 py-3 rounded-sm"
              href=""
            >
              <button className="mt-[30px]">Read More</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export function InformationComp3({
  image,
  title,
  emphasis,
  description,
  className,
}: INFORMATIONCOMPI) {
  return (
    <>
      <div
        className={`flex gap-2 mt-12 lg:flex-row-reverse flex-col-reverse ${className}`}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            className="md:w-[40%] lg:w-full"
            width="600"
            height="600"
            src={image}
            alt="image"
          />
        </motion.div>

        <div className="my-auto">
          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`lg:text-[32px] text-[25px] lg:text-left text-center font-bold`}
          >
            {title} <br />
            <span className="text-[#d434fe]">{emphasis}</span>
          </motion.h3>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-[20px] lg:text-left text-center"
          >
            {description}
          </motion.p>
          <div className="mt-[40px]">
            <Faq
              headline="Can I work on a project I started before the hackathon?"
              content="This is a content"
            />
            <Faq
              headline="What happens if I need help during the hackathon?"
              content="This is a content"
            />
            <Faq
              headline="What happens if I don't have an idea for a project?"
              content="This is a content"
            />
            <Faq
              headline="What happens after the hackathon ends"
              content="This is a content"
            />
            <Faq
              headline="Can I work on a project I started before the hackathon?"
              content="This is a content"
            />
          </div>
        </div>
      </div>
    </>
  );
}

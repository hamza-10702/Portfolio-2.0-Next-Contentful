"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = ({ skills, data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="pt-12 pb-5 font-titleFont w-full lg:items-center xl:items-center justify-center flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          Development Skill
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
      </div>
      <div className="w-full ">
        <div className="grid grid-cols-1 lgl:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {skills?.items?.map((skill, index) => {
            return (
              <div className="overflow-x-hidden flex flex-col" key={index}>
                <p className="text-sm uppercase font-medium">
                  {skill?.fields?.skillName}
                </p>
                <span className=" p-1 w-full h-4  rounded-md inline-flex mt-2 border-designColor border-[1px] border-designColor">
                  <motion.span
                    initial={{ x: "0%", opacity: 0 }}
                    animate={{
                      x: `-${(
                        100 - Number(skill?.fields?.skillLevel)
                      ).toString()}%`,
                      opacity: 1,
                    }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={` w-[100%] h-full bg-gradient-to-r from-blue-600 bg-designColor bg-designColor rounded-md relative`}
                    // ${skill?.level}%
                  >
                    <span className="absolute -top-7 right-0">{`${skill?.fields?.skillLevel}%`}</span>
                  </motion.span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

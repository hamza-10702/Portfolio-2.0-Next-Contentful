"use client";
import React from "react";
import Title from "../Title/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";

const Resume = ({ education, experience, skills }) => {
  return (
    <section id="resume" className="w-full py-50 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="1 YEARS OF EXPERIENCE" des="My Resume" />
      </div>

      <Education education={education} experience={experience} />
      <Skills skills={skills} />
    </section>
  );
};

export default Resume;

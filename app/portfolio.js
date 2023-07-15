import React from "react";
import {
  Navbar,
  Banner,
  Features,
  Projects,
  Resume,
  Contact,
  Footer,
} from "@/components";

const portfolio = ({ data }) => {
  return (
    <main className="w-full h-auto bg-bodyColor  text-lightText">
      <Navbar />

      <div className="max-w-screen-2xl mx-auto px-8 lg:px-16  lgl:px-16 xl:px-16 ">
        <Banner data={data.banner} />
        <Features data={data.features} />
        <Projects data={data.projects} />
        <Resume
          education={data.education}
          experience={data.experience}
          skills={data.skills}
        />
        <Contact data={data.profiles} />
        <Footer />
      </div>
    </main>
  );
};

export default portfolio;

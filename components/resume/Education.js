import ResumeCard from "./ResumeCard";
import { client } from "@/lib/contentful/client";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const Education = ({ education, experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col  mdl:flex-row lgl:flex-row  lg:flex-row xl:flex-row  gap-10 lg:gap-20 lgl:gap-20 xl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6  lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-designColor border-opacity-30 flex flex-col gap-10">
          {education.items?.length > 0 &&
            education.items?.map((item, index) => {
              return (
                <ResumeCard
                  key={index}
                  title={item?.fields?.degreeName}
                  subTitle={item?.fields?.institute}
                  result={item?.fields?.grade}
                  des={item?.fields?.about}
                />
              );
            })}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-designColor border-opacity-30 flex flex-col gap-10">
          {experience?.items.length > 0 &&
            experience?.items?.map((item, index) => {
              return (
                <ExperienceCard
                  key={index}
                  position={item?.fields?.position}
                  company={item?.fields?.company}
                  experienceTime={item?.fields?.experienceDuration}
                  about={item?.fields?.about}
                  technology={item?.fields?.technologies}
                  project={item?.fields?.workingProjects}
                />
              );
            })}
        </div>
      </div>
    </motion.div>
  );
};
export default Education;

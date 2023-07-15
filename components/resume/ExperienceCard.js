import React from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const ExperienceCard = ({
  position,
  company,
  experienceTime,
  about,
  technology,
  project,
}) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bg-designColor bg-opacity-30 mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full py-8 bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-lg shadow-shadowColor">
        <div className="flex flex-row lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {position}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {company}
            </p>
          </div>
          <div>
            {experienceTime && (
              <p className="  px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
                {experienceTime}
              </p>
            )}
          </div>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
            Projects
          </h3>
          <ul className="px-14 list-decimal text-sm md:text-base font-medium  text-designColor  duration-300">
            {project?.map((project, index) => {
              if (project) {
                return (
                  <li key={index}>
                    <p>{`${project}`}</p>
                  </li>
                );
              }
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
            Responsibility
          </h3>
          {documentToReactComponents(about)}
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
            Technologies
          </h3>
          <ul className="px-14 list-disc text-sm md:text-base font-medium  text-designColor duration-300">
            {technology?.map((project, index) => {
              if (project) {
                return (
                  <li key={index}>
                    <p>{`${project}`}</p>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

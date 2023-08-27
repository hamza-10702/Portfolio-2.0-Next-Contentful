"use client";
import React, { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";

const ProjectsCards = ({ item }) => {
  const [imageUrl, setImageUrl] = useState("/banner_2.png");
  useEffect(() => {
    const protocolRelativeUrl = item.fields?.projectImage?.fields?.file?.url;
    setImageUrl(
      protocolRelativeUrl
        ? `${window.location.protocol}${protocolRelativeUrl}`
        : ""
    );
  }, []);
  return (
    <div
      className="w-full px-12 h-auto py-10 rounded-lg 
        shadow-lg shadow-shadowColor flex flex-col bg-gradient-to-r from-bodyColor
         to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 
         hover:gray-900 transition-colors duration-1000"
    >
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <Image
          className=" z-10 ml-auto m-auto"
          src={imageUrl}
          alt="Image"
          height={250}
          width={250}
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base max-w-[70%] uppercase text-designColor font-normal">
              {item?.fields?.name}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <Link href={`${item?.fields?.githubLink}`} target="_blank">
                  <BsGithub />
                </Link>
              </span>
              {/* <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <Link href={`${item?.fields?.liveLink}`} target="_blank">
                  <FaGlobe />
                </Link>
              </span> */}
            </div>
          </div>
          <div className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {documentToReactComponents(item?.fields?.about)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;

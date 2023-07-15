import React from "react";
import { BsGithub } from "react-icons/bs";
import { client } from "@/lib/contentful/client";
import { FaFacebookF, FaTwitter, FaLinkedin, FaGoogle } from "react-icons/fa";
import Image from "next/image";

const ContactLeft = ({ profile }) => {
  return (
    <div className="w-full lgl:w-[35%] h-full  p-4 lgl:p-8 rounded-lg  flex flex-col gap-8 justify-center">
      <Image
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={`/contactImg.png`}
        alt="contactImg"
        height={300}
        width={300}
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-designColor ">
          {profile?.items[0].fields?.name}
        </h3>
        <p className="text-lg font-normal text-gray-400">
          {profile?.items[0].fields?.workAs}
        </p>
        <p className=" text-base text-gray-400 tracking-wide">
          {profile?.items[0].fields?.about?.content[0]?.content[0]?.value
            ? profile?.items[0].fields?.about?.content[0]?.content[0]?.value
            : null}
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:{" "}
          <span className="text-lightText">
            {profile?.items[0].fields?.mobile}
          </span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">
            {profile?.items[0].fields?.email}
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-base uppercase font-titleFont ">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href={`mailto:${profile.items[0].fields?.contact[0]?.fields?.link}`}
            >
              <FaGoogle />
            </a>
          </span>
          <span className="bannerIcon">
            <a href={`${profile.items[0].fields?.contact[1]?.fields?.link}`}>
              <FaLinkedin />
            </a>
          </span>
          <span className="bannerIcon">
            <a href={`${profile.items[0].fields?.contact[2]?.fields?.link}`}>
              <BsGithub />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;

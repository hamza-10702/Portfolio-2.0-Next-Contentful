"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/lib/contentful/client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedin, FaGoogle } from "react-icons/fa";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const Banner = ({ data }) => {
  const [error, setError] = useState("");
  const [imageUrl, setImageUrl] = useState("/banner_2.png");

  const [text] = useTypewriter({
    words: ["React Js Developer", "Frontend Developer", "Programmer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const downloadResume = (file) => {
    try {
      fetch(file?.url)
        .then((response) => response.arrayBuffer())
        .then((buffer) => {
          const blob = new Blob([buffer], {
            type: "image/png",
          });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", file?.fileName);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error("Error downloading image:", error);
        });
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    const protocolRelativeUrl =
      data.items[0].fields?.bannerImage?.fields?.file?.url;
    setImageUrl(
      protocolRelativeUrl
        ? `${window.location.protocol}${protocolRelativeUrl}`
        : "/banner_2.png"
    );
  }, []);

  // const renderOptions = {
  //   renderNode: {
  //     "embedded-asset-block": (node) => {
  //       const { title, file } = node.data.target.fields;
  //       const imageUrl = file.url;
  //       const imageAlt = title || "";

  //       return <Image src={imageUrl} alt={imageAlt} height={400} width={400} />;
  //     },
  //   },
  // };

  return (
    <section
      id="home"
      className=" w-full h-auto flex  pb-10 flex-col lg:flex-row lgl:flex-row xl:flex-row  border-b-[1px] border-b-gray-600"
    >
      <div className="w-full lgl:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col gap-14 pt-20">
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-normal uppercase">Wellcome</h4>
          <h1 className="text-5xl font-bold text-white ">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">Hafiz Hamza</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyfont leading-6 tracking-wide">
            {data?.items[0].fields?.aboutYourSelf
              ? documentToReactComponents(data?.items[0]?.fields?.aboutYourSelf)
              : `I am a highly motivated and detail-oriented Web Developer with 11 months of experience in developing web applications using the MERN stack. I have a passion for developing high-quality and responsive web applications using React, Node, and other cutting-edge web technologies.`}
          </p>
        </div>

        <div className="flex gap-10 flex-col  lgl:flex-row lg:flex-row mdl:flex-row xl:flex-row xl:gap-0 lgl:gap-0 justify-between ">
          <div>
            <h2 className="uppercase text-sm lgl:text-base xl:text-base font-titleFont mb-4">
              Find me in
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <a
                  href={`mailto:${data.items[0].fields?.contacts[0]?.fields?.link}`}
                >
                  <FaGoogle />
                </a>
              </span>
              <span className="bannerIcon">
                <a href={`${data.items[0].fields?.contacts[1]?.fields?.link}`}>
                  <FaLinkedin />
                </a>
              </span>
              <span className="bannerIcon">
                <a href={`${data.items[0].fields?.contacts[2]?.fields?.link}`}>
                  <BsGithub />
                </a>
              </span>
            </div>
          </div>
          <div>
            <h2 className="uppercase text-sm lgl:text-base xl:text-base font-titleFont mb-4">
              Here is my Resume
            </h2>
            <button
              className="text-base font-titleFont  p-5 downloadButton"
              type="button"
              onClick={() => {
                downloadResume(data?.items[0].fields?.resume?.fields?.file);
              }}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className="hidden xl:block lgl:block  lg:block w-1/2 flex justify-center items-center relative">
        <Image
          className=" w-[600px] h-[600px] z-10 ml-auto"
          src={imageUrl}
          alt="Image"
          height={400}
          width={400}
        />

        {/* {documentToReactComponents(
          data?.items[0].fields?.bannerImage,
          renderOptions
        )} */}
      </div>
      {error && (
        <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
          {error}
        </p>
      )}
    </section>
  );
};

export default Banner;

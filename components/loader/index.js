"use client";
import React, { useState } from "react";
import "./loader.css";

const Loader = () => {
  const [text, setText] = useState("Portfolio Loading...");

  return (
    <div className="main">
      <div className="cssload-preloader">
        {[...text].map((char, index) => {
          return char === " " ? (
            <span key={index}>&nbsp;</span>
          ) : (
            <span key={index}>{char}</span>
          );
        })}
      </div>

      <div class="cssload-thecube">
        <div class="cssload-cube cssload-c1"></div>
        <div class="cssload-cube cssload-c2"></div>
        <div class="cssload-cube cssload-c4"></div>
        <div class="cssload-cube cssload-c3"></div>
      </div>
    </div>
  );
};

export default Loader;

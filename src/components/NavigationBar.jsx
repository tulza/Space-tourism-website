import React, { useState } from "react";
import clsx from "clsx";

export const NavButton = ({ number, label }) => {
  return (
    <>
      <button className="relative flex items-center justify-center">
        <p className="text-white nav-bar">
          <span className="font-bold">{number} </span>
          <span>{label}</span>
        </p>
        {/* underline */}
        <div
          className={clsx(
            "absolute h-[3px] w-[90%] rounded-full bottom-0",
            "bg-white"
          )}
        />
      </button>
    </>
  );
};

const NavigationBar = ({ pageState, setPage }) => {
  const pages = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

  return (
    <div className="top-[20px] grid w-full h-[96px] z-50 grid-cols-[40%_60%] pl-8 mt-8">
      <div className="flex items-center relative">
        <img src="\src\assets\shared\logo.svg"></img>
        <div className="absolute left-40 h-[1px] w-[calc(100%-100px)] z-50 bg-white" />
      </div>
      <div className="backdrop-blur-xl bg-white/10 h-[96px] w-full flex justify-between pl-[20%] pr-[20%] ">
        <NavButton number="00" label="HOME" />
        <NavButton number="01" label="DESTINATION" />
        <NavButton number="02" label="CREW" />
        <NavButton number="03" label="TECHNOLOGY" />
      </div>
    </div>
  );
};

export default NavigationBar;

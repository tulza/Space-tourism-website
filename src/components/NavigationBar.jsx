import React from "react";

export const NavButton = ({ number, label }) => {
  return (
    <div className="flex items-center">
      <div className="text-white">
        <span>{number} </span>
        <span>{label}</span>
      </div>
    </div>
  );
};

const NavigationBar = () => {
  return (
    <div className="absolute top-[20px] grid w-full h-[96px] z-50 grid-cols-[40%_60%] pl-8">
      <div className="flex items-center relative">
        <img src="\src\assets\shared\logo.svg"></img>
        <div className="absolute left-40 h-[1px] w-[calc(100%-100px)] z-50 bg-white" />
      </div>
      <div className="backdrop-blur-xl bg-white/10 h-[96px] w-full flex justify-between pl-[20%] pr-[20%] ">
        <NavButton number="00" label="HOME" />
        <NavButton number="01" label="HOME" />
        <NavButton number="02" label="HOME" />
        <NavButton number="03" label="HOME" />
      </div>
    </div>
  );
};

export default NavigationBar;

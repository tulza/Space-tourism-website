import React from "react";
import NavigationBar from "./NavigationBar";

export const Test = () => {
  return (
    // <div className="w-[1440px] h-[900px] flex items-center justify-center bg-blue-100 m-20 py-20">
    // </div>
    <>
      {/* <NavigationBar /> */}
      <div className="flex flex-col h-[100vh]">
        <img
          src="/src/assets/home/background-home-desktop.jpg"
          id="main-bg w-full"
        />
        <div className="bg-[hsl(230,_35%,_7%)] w-full h-full">
          <div className="text-white">
            <h1>EARTH</h1>
            <h2>VENUS</h2>
            <h3>JUPITER & SATURN</h3>
            <h4>URANUS, NEPTUNE, & PLUTO</h4>
            <h5>SO, YOU WANT TO TRAVEL TO SPACE</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;

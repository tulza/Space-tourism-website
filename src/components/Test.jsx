import React from "react";
import NavigationBar from "./NavigationBar";

export const Test = () => {
  return (
    // <div className="w-[1440px] h-[900px] flex items-center justify-center bg-blue-100 m-20 py-20">
    // </div>
    <>
      <NavigationBar />
      <div className="flex flex-col h-[100vh]">
        <img
          src="/src/assets/home/background-home-desktop.jpg"
          id="main-bg w-full"
        />
        <div className="bg-black w-full h-full" />
      </div>
    </>
  );
};

export default Test;

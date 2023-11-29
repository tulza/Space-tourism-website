import React from "react";
import { Test } from "./Test";
import NavigationBar from "./NavigationBar";

const Homepage = (test) => {
  if (test) {
    return <Test />;
  }
  return (
    <>
      <NavigationBar />
      <img src="/src/assets/home/background-home-desktop.jpg" />
    </>
  );
};

export default Homepage;

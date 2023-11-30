import React, { Fragment, useState } from "react";
import { Test } from "./Test";
import NavigationBar from "./NavigationBar";

const Homepage = () => {
  const [pageState, setPage] = useState(0);
  const state = {
    pages: ["home", "destinations", "crew", "technology"],
    selectedPages: [],
  };

  return (
    <Fragment>
      <div className="flex flex-col relative items-center">
        <img
          src="/src/assets/home/background-home-desktop.jpg"
          className="w-full absolute"
        />
      </div>
      {/* page content */}
      <div className="relative max-w-[1440px] w-[100%]">
        <NavigationBar pageState={pageState} setPage={setPage} />
      </div>
      {/* black box after the image */}
      <div className="bg-[hsl(230,_35%,_7%)] w-full h-full">
        <h1>test</h1>
      </div>
    </Fragment>
  );
};

export default Homepage;

import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import "./style/styles.css";

function App() {
  return (
    <>
      <NavigationBar />
      <img src="/src/assets/home/background-home-desktop.jpg" id="main-bg" />
    </>
  );
}

export default App;

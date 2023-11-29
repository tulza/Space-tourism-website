import { useState } from "react";
import "./style/styles.css";
import "./style/fonts.css";
import Homepage from "./components/Homepage";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <Homepage test={true} />
    </>
  );
}

export default App;

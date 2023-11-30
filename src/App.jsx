import { useState } from "react";
import "./style/styles.css";
import "./style/fonts.css";
import "./style/scrollBarStyle.css";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <Homepage test={false} />
    </>
  );
}

export default App;

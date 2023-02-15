import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";

function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(27 34 66)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [mode, setMode] = useState("light");
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter text to analyze below" mode={mode}></TextForm>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(27 34 66)";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-5">
        <TextForm
          heading="Enter text to analyze below"
          showAlert={showAlert}
          mode={mode}
        ></TextForm>
        {/* <About /> */}

        {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm heading="Enter the text to analyse: " mode={mode} />
              }
            />
          </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Formdata from "./Components/Formdata";
import Darkmode from "./Components/Darkmode";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home"

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "React - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "React - Light Mode";
    }
  };

  return (
    <>
      <Router basename={"/"}>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Carousel/> */}
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/home" element={<Home mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

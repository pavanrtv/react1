import React, { useState } from "react";
import Formdata from "./Components/Formdata";


const Home = ({mode}) => {
    //const [mode, setMode] = useState("light");
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

  
  return (
    <>
      <div>
        <Formdata showAlert={showAlert} heading="enter the text" mode={mode} />
      </div>
    </>
  );
};

export default Home;

import React, { useState } from "react";

function Formdata(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let newloText = text.toLowerCase();
    setText(newloText);
    props.showAlert("converted to lowercase", "success");
  };
  const handleClearClick = () => {
    let newClearText = "";
    setText(newClearText);
    props.showAlert("text cleared", "success");
  };
  const handleExtraSpaces = () => {
    let newExText = text.split(/[ ]+/);
    setText(newExText.join(" "));
    props.showAlert("extra spaces removed", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="mb-3 mt-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="mybox"
          value={text}
          placeholder="enter text here"
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          rows="3"
        ></textarea>
        <button className="btn btn-outline-dark ms-2 my-3" onClick={handleUpClick}>
          {" "}
          convert to upper case
        </button>
        <button className="btn btn-outline-dark ms-2 my-3" onClick={handleLoClick}>
          {" "}
          convert to lower case
        </button>
        <button
          className="btn btn-outline-dark ms-2 my-3"
          onClick={handleClearClick}
        >
          {" "}
          clear text
        </button>
        <button className="btn btn-outline-dark ms-2 my-3" onClick={handleCopy}>
          {" "}
          copy text
        </button>
        <button
          className="btn btn-outline-dark ms-2 my-3"
          onClick={handleExtraSpaces}
        >
          {" "}
          remove extra spaces
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>text summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return  element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}minute read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "enter the text to preview it"}</p>
      </div>
    </>
  );
}

export default Formdata;

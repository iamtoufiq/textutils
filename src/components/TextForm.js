import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log(" You have clicked the botton");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleCapitalizeClick = () => {
    // console.log(" You have clicked the botton");
    let splitingInput = text.split(" ");
    for (let i = 0; i < splitingInput.length; i++) {
      splitingInput[i] =
        splitingInput[i].charAt(0).toUpperCase() + splitingInput[i].slice(1);
    }
    let spslitingInput = splitingInput.join(" ");
    setText(spslitingInput);
  };

  const handleLoClick = () => {
    // console.log(" You have clicked the lower botton");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopyClick = () => {
    var text1 = document.getElementById("myBox");
    text1.select();
    navigator.clipboard.writeText(text1.value);
  };
  const handleClearClick = () => {
    // console.log(" You have clicked the lower botton");
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log(event.target.value);
    setText(event.target.value);
    // console.log(" You have type something in the textbox area");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          {" "}
          Convert to UpperCase{" "}
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          {" "}
          Convert to LowerCase{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          {" "}
          Clear Text{" "}
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleCapitalizeClick}
        >
          {" "}
          Capitalized{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          {" "}
          Copy Text{" "}
        </button>
      </div>

      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <hr />
        <h3>
          {0.008 * text.split(" ").length} minutes will takes to read the words
        </h3>
        <hr />
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

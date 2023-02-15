import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Please enter your text");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          value={text}
          className="form-control"
          id="myBox"
          rows="8"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert To Uppercase
      </button>
    </div>
  );
}

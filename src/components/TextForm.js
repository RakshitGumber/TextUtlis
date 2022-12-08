import React, { useState } from "react";
import PropTypes from "prop-types";

const propTypes = { heading: PropTypes.string };

const defaultProps = { heading: "Enter Heading" };

const TextForm = (props) => {
  const [text, setText] = useState("");
  let onChangeHandler = (event) => {
    setText(event.target.value);
  };
  let convertUpperCase = () => {
    setText(text.toUpperCase());
  };
  let convertLowerCase = () => {
    setText(text.toLowerCase());
  };
  let clear = () => {
    setText("");
  };
  let copy = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <div className="mb-3 my-3 container">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={onChangeHandler}
          placeholder="Enter Your Text Here..."
          rows="8"
        ></textarea>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-outline-info" onClick={copy}>
            <span class="material-symbols-outlined">content_copy</span>
          </button>
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={clear}
          >
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        {/* buttons */}
        <div className="container-fluid my-2 mb-3">
          <button
            className="btn btn-outline-info my-3 mx-2"
            onClick={convertUpperCase}
          >
            UPPERCASE
          </button>
          <button
            className="btn btn-outline-info my-3 mx-2"
            onClick={convertLowerCase}
          >
            lowercase
          </button>
        </div>
      </div>
      <footer className={props.mode}>
        <span>
          {text.split(" ").length} Words {text.length} characters{" "}
          {0.008 * text.split(" ").length} minutes
        </span>
      </footer>
    </>
  );
};

TextForm.propTypes = propTypes;
TextForm.defaultProps = defaultProps;

export default TextForm;

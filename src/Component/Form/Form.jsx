import React, { useState } from "react";
import "./Form.css";

const Form = ({ searchInput }) => {
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setInput(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    searchInput(input);
  };
  return (
    <div className="form__divs">
      <form onSubmit={onSubmit}>
        <input value={input} onChange={handleChange} placeholder="search" />
        <button className="search" type="submit">
          search
        </button>
      </form>
    </div>
  );
};

export default Form;

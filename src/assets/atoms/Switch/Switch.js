import React from "react";
import "./Switch.css";

const Switch = ({ on }) => {
  return (
    <label className="switch">
      <input type="checkbox" readOnly checked={on} />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;

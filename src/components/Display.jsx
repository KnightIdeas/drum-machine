import React from "react";

const Display = ({ name }) => {
  return (
    <div className="display" id="display">
      <h3>{name}</h3>
    </div>
  );
};

export default Display;

import React, { useState } from "react";

const TempToggleBtn = ({ setC, isC, name }) => {
  return (
    <>
      <button
        onClick={setC}
        className={isC ? "TempToggleBtn active" : "TempToggleBtn"}
      >
        {name}
      </button>
    </>
  );
};

export default TempToggleBtn;

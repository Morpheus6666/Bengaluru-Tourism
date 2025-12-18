import React from "react";
import { useState } from "react";

function Btn(){
const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
        <button id="button" onClick={scrollToTop}>↑</button>
  );
}

export default Btn;
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  if (!onBefore || typeof onBefore !== "function") {
    return;
  }
};
const App = () => {
  const begForLife = () => console.log("Please don't leave...");
  // 아무것도 return하지 않으므로 가능
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;

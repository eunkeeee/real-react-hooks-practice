import { isElementType } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
    return { element, triggerFull, exitFull };
  };
};
const App = () => {
  const callback = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(callback);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://d1telmomo28umc.cloudfront.net/media/public/avatars/eunkeeee-1653975875.jpg" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default App;

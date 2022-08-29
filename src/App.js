import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const potato = useRef();
  setTimeout(() => console.log(potato.current.focus()), 5000);
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={potato} placeholder="la" />
    </div>
  );
};

export default App;

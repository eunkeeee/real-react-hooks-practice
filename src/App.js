import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const useConfirm = (message, callBack, rejection) => {
  if (!callBack || typeof callBack !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callBack();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the World</button>
    </div>
  );
};

export default App;

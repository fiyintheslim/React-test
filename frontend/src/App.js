import "./App.css";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    const username = prompt("Enter your username", "");
  }, []);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="chat-container"></div>
    </div>
  );
}

export default App;

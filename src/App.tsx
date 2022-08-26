import React from "react";
import Navbar from "../src/components/Navbar";
import Content from "./components/Content";
import "../src/app.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;

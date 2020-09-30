import React from "react";
import Navbar from "./components/Navbar";
import PublicRoutes from "./components/PublicRoutes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Tutorial</h1>
        <Navbar />
        <PublicRoutes />
      </header>
    </div>
  );
}

export default App;

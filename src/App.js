import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";

import "./App.css";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <div className="App">
      <header>
        <h1>Tutorial</h1>
        <Navbar setSignedIn={setSignedIn} signedIn={signedIn} />
        <AllRoutes signedIn={signedIn} />
      </header>
    </div>
  );
}

export default App;

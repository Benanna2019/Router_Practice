import React from "react";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Invoice from "./pages/Invoice";
import Invoices from "./pages/Invoices";
import InvoicesIndex from "./pages/InvoicesIndex";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Tutorial</h1>
        <Navbar />
        <Router>
          <Home path="/" />
          <Dashboard path="/dashboard" />
          <Invoices path="invoices">
            <InvoicesIndex path="/" />
            <Invoice path=":invoiceId" />
          </Invoices>
          <NotFound default />
        </Router>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import { Link, Router } from "@reach/router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Tutorial</h1>
        <nav>
          <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>{" "}
          <Link to="invoices">Invoices</Link>
        </nav>
        <Router>
          <Home path="/" />
          <Dashboard path="/dashboard" />
          <Invoices path="invoices">
            <Invoice path=":invoiceId" />
          </Invoices>
        </Router>
      </header>
    </div>
  );
}

const Home = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

const Invoice = (props) => (
  <div>
    <h2>Invoice {props.invoiceId}</h2>
  </div>
);

const Invoices = (props) => (
  <div>
    <h2>Invoices</h2>
    <ul>
      <li>
        <Link to="123">Invoice 123</Link>
      </li>
      <li>
        <Link to="abc">Invoice ABC</Link>
      </li>
    </ul>

    {props.children}
  </div>
);

export default App;

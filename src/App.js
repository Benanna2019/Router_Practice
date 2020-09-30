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
            <InvoicesIndex path="/" />
            <Invoice path=":invoiceId" />
          </Invoices>
          <NotFound default />
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

    <form
      onSubmit={(event) => {
        event.preventDefault();
        const id = event.target.elements[0].value;
        event.target.reset();

        // pretend like we saved a record to the DB here
        // and then we navigate imperatively
        props.navigate(id);
      }}
    >
      <p>
        <label>
          New Invoice ID: <input type="text" />
        </label>
        <button type="submit">Create</button>
      </p>
    </form>

    {props.children}
  </div>
);

const InvoicesIndex = () => (
  <div>
    <p>
      This is where, if you were signed into a typical application, you would be
      able to see all of your invoices, then you would be able to click on
      individual invoices or groups of them
    </p>
  </div>
);

const NotFound = () => (
  <p>
    Sorry there is nothing here. Please click on one of the other links to go to
    another page.
  </p>
);

export default App;

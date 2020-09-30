import React from "react";
import { Link } from "@reach/router";

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

export default Invoices;

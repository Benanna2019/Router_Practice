import React from "react";
import { Router } from "@reach/router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Invoice from "../pages/Invoice";
import Invoices from "../pages/Invoices";
import InvoicesIndex from "../pages/InvoicesIndex";

export default function PublicRoutes() {
  return (
    <Router>
      <Home path="/" />
      <Dashboard path="/dashboard" />
      <Invoices path="invoices">
        <InvoicesIndex path="/" />
        <Invoice path=":invoiceId" />
      </Invoices>
      <NotFound default />
    </Router>
  );
}

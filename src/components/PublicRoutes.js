import React from "react";
import { Router } from "@reach/router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";

export default function PublicRoutes() {
  return (
    <Router>
      <Home path="/" />
      <Dashboard path="/dashboard" />
      <NotFound default />
    </Router>
  );
}

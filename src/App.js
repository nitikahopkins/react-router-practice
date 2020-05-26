import React, { useState } from "react";
import { Router } from "@reach/router";
import NotFound from "./components/NotFound";
import Invoices from "./components/Invoices";
import InvoicesIndex from "./components/InvoicesIndex";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Invoice from "./components/Invoice";
import Nav from "./components/Nav";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  return (
    <div>
      <h1>Practice</h1>
      <Nav currentPage={currentPage} />
      <Router>
        <Home path="/" setCurrentPage={setCurrentPage} />
        <Dashboard path="/dashboard" setCurrentPage={setCurrentPage} />
        <Invoices path="invoices" setCurrentPage={setCurrentPage}>
          <InvoicesIndex path="/" />
          <Invoice path=":invoiceId" />
        </Invoices>
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;

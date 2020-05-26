import React from "react";
import { Link, navigate } from "@reach/router";

const Invoices = (props) => {
  props.setCurrentPage("Invoices");
  // console.log(props);
  return (
    <div>
      <h1>Invoices</h1>
      <ul>
        <li>
          <Link to="/invoices/123">Invoice 123</Link>
        </li>
        <li>
          <Link to="/invoices/abc">Invoice ABC</Link>
        </li>
      </ul>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const id = event.target.elements[0].value;
          event.target.reset();
          // pretend like we saved a record to the DB here
          // and then we navigate imperatively
          navigate(`/invoices/${id}`);
          //becomes
          //   props.navigate(id);
        }}
      >
        <label>
          Enter an invoice id: <input />
        </label>
        <button type="submit">Create</button>
      </form>
      {props.children}
    </div>
  );
};

export default Invoices;

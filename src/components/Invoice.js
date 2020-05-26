import React from "react";

const Invoice = (props) => {
  return (
    <div>
      {/* do a database request with invoice id */}
      {/* axios or fetch{SELECT * FROM invoices WHERE id = props.invoiceId} */}
      <h1>Invoice {props.invoiceID}</h1>
    </div>
  );
};
export default Invoice;

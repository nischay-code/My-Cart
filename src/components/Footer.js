import React from "react";

export default function Footer(props) {
  return (
    <div
      className="btn-group fixed-bottom"
      role="group"
      aria-label="Basic example"
    >
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          props.resetQuantity();
        }}
      >
        Reset
      </button>
      <button type="button" className="btn btn-light">
        Grand Total : ₹ {props.totalAmount}
      </button>
      <button type="button" className="btn btn-primary">
        Pay Now
      </button>
    </div>
  );
}

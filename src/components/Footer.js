import React from "react";

export default function Footer(props) {
  return (
    <div class="btn-group fixed-bottom" role="group" aria-label="Basic example">
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => {
          props.resetQuantity();
        }}
      >
        Reset
      </button>
      <button type="button" class="btn btn-light">
        {props.totalAmount}
      </button>
      <button type="button" class="btn btn-primary">
        Pay Now
      </button>
    </div>
  );
}

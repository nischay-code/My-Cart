import React from "react";

export default function Product(props) {
  return (
    <div className="grid">
      <div>
        <h5>
          {props.product.name}{" "}
          <span className="badge bg-dark">₹{props.product.price}</span>
        </h5>
      </div>
      <div>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-light">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="m-3">
        <h5>Sub Total : ₹ {props.product.quantity * props.product.price}</h5>
      </div>
      <button
        className="btn btn-primary mb-3"
        onClick={() => {
          props.removeItem(props.index);
        }}
      >
        Remove
      </button>
      <hr />
    </div>
  );
}

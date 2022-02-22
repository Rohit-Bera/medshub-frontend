import React from "react";
import { useState } from "react";
import StripCheckout from "react-stripe-checkout";
// import axios from "axios";

const Payment = () => {
  const [product, setProduct] = useState({
    name: "React",
    price: 750,
    ProductBy: "manthan",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:5500/paymentStripe`, {
      method: "Post",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("Response", response);
        const { status } = response;
        console.log("Status", status);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <StripCheckout
          stripeKey="pk_test_51K9BzESJxF1xgWl3VLpG7easuHbz7arQhPME9rZtGqeQYeFDNH1Ve7eiyy3AsVypNWubsegfT78trvTOHGK9kocL00S3gYD1gS"
          token={makePayment}
          name="Buy React"
          shippingAddress
          billingAddress
        >
          <button class="btn btn-md bg-warning">
            Buy React ₹{product.price}{" "}
          </button>
        </StripCheckout>
      </header>
    </div>
  );
};

export default Payment;

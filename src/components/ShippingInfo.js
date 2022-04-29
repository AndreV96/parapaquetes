import React from "react";
// Component from React-Bootsrap framework
import { Container } from "react-bootstrap";

function ShippingInfo(props) {
  // Billing and shipping addresses information retrieved from API request
  const billingAddress = props.orderData.billingAddress;
  const shippingAddress = props.orderData.shippingAddress;

  return (
    <Container className="max-width-content">
      <h2 className="text-blue fw-bold"> Order {props.orderData.number} </h2>

    {/* Order shipping information */}
      <div className="d-flex justify-content-around pt-1 border-bottom border-top gap-3 text-start">
        <h4 className="f2-bold">Shipping Address</h4>
        <div className="">
          <p className="my-0"> {shippingAddress.company} </p>
          <p className="my-0">
            {shippingAddress.firstName} {shippingAddress.lastName}
          </p>
          <p className="my-0">
            {shippingAddress.address1}, {shippingAddress.city},
            {shippingAddress.postalCode}, {shippingAddress.country.code}
          </p>
          <p className="my-0"> {shippingAddress.phone} </p>
        </div>
      </div>

    {/* Order billing information */}
      <div className="d-flex justify-content-around pt-1 border-bottom gap-3 text-start">
        <h4 className="f2-bold">Billing Address</h4>
        <div className="">
          <p className="my-0"> {billingAddress.company} </p>
          <p className="my-0">
            {billingAddress.firstName} {billingAddress.lastName}
          </p>
          <p className="my-0">
            {billingAddress.address1}, {billingAddress.city},
            {billingAddress.postalCode}, {billingAddress.country.code}
          </p>
          <p className="my-0"> {billingAddress.phone} </p>
        </div>
      </div>
    </Container>
  );
}

export default ShippingInfo;

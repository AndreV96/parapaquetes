import React from "react";
import {Container} from 'react-bootstrap';

function ShippingInfo(props) {
  const billingAddress = props.orderData.billingAddress
  const shippingAddress = props.orderData.shippingAddress

  return(
    <Container className=" text-start">

      <div className="d-flex justify-content-around pt-1 border-bottom gap-3">
        <h4 className="f2-bold">Shipping Address</h4>
        <div className="">
          <p className="my-0"> {shippingAddress.company} </p>
          <p className="my-0"> {shippingAddress.firstName} {shippingAddress.lastName} </p>
          <p className="my-0">  {shippingAddress.address1}, {shippingAddress.city}, {shippingAddress.postalCode}, {shippingAddress.country.code} </p>
          <p className="my-0"> {shippingAddress.phone} </p>
        </div>  
      </div>

      <div className="d-flex justify-content-around pt-1 border-bottom gap-3">
        <h4 className="f2-bold">Billing Address</h4>
        <div className="">
          <p className="my-0"> {billingAddress.company} </p>
          <p className="my-0"> {billingAddress.firstName} {billingAddress.lastName} </p>
          <p className="my-0">  {billingAddress.address1}, {billingAddress.city}, {billingAddress.postalCode}, {billingAddress.country.code} </p>
          <p className="my-0"> {billingAddress.phone} </p>
        </div>  
      </div>
      
    </Container>
    
  )
}




export default ShippingInfo
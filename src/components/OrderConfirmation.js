import React from "react";
import swal from "sweetalert"
import {Container, Card, Button} from 'react-bootstrap';

function OrderConfirmation(props) {
  const totalCosts = props.orderData.totals

  const showConfirmationAlert = () => {
    swal( {
      title: "Thank you for your payment. Your order is on its way!",
      text: `Total: ${props.total}`,
      icon: "success",
      button: "Ok",
    })
    props.filterOrder(props.orderData.number)
  }
  
  return(
    <Container className="d-flex justify-content-center my-3">
      <Card style={{ width: '18rem' }}>
        <Card.Body>

          <Card.Title className="fw-bold">Order Confirmation</Card.Title>

            <div className="d-flex justify-content-between text-green fw-bold">
              <span>Discount: </span>
              <span>{totalCosts.discount}</span> 
            </div>

            <div className="d-flex justify-content-between">
              <span>Subtotal: </span>
              <span>{totalCosts.subtotal}</span> 
            </div>

            <div className="d-flex justify-content-between">
              <span>Shipping: </span>
              <span>{totalCosts.shipping}</span> 
            </div>

            <div className="d-flex justify-content-between border-bottom ">
              <span>Tax: </span>
              <span>{totalCosts.tax}</span> 
            </div>

            <div className="d-flex justify-content-between fw-bold mb-3 fs-5 text-red">
              <span>Total: </span>
              <span>{props.total}</span> 
            </div>

            <Button onClick={showConfirmationAlert} variant="outline-primary" className="add-confirm-button">Order Now & Pay</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}



export default OrderConfirmation
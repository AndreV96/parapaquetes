import React from "react";
import {ListGroup, Container, ListGroupItem, Card, Button} from 'react-bootstrap';

function OrderConfirmation(props) {
  const totalCosts = props.orderData.totals
  return(
    <Container className="d-flex justify-content-center my-3">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="text-start fw-bold">Order Confirmation</Card.Title>
            <tr className="d-flex justify-content-between text-green fw-bold">
              <td>Discount: </td>
              <td>{totalCosts.discount}</td> 
            </tr>
            <tr className="d-flex justify-content-between">
              <td>Subtotal: </td>
              <td>{totalCosts.subtotal}</td> 
            </tr>
            <tr className="d-flex justify-content-between">
              <td>Shipping: </td>
              <td>{totalCosts.shipping}</td> 
            </tr>
            <tr className="d-flex justify-content-between border-bottom ">
              <td>Tax: </td>
              <td>{totalCosts.tax}</td> 
            </tr>
            <tr className="d-flex justify-content-between fw-bold mb-3 fs-5 text-red">
              <td>Total: </td>
              <td>{totalCosts.total}</td> 
            </tr>

            <Button variant="success">Confirm Order</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}



export default OrderConfirmation
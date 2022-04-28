import React from "react";
import {ListGroup, Container, ListGroupItem, Button} from 'react-bootstrap';

function OrdersList(props) {
  function clickHandler(e) {
    const id = e.target.id
    props.setCurrentOrder(id) 
  }
  
  return(
    <div className="App">
      <Container className="pt-3">

      <h1>Orders</h1>
        <div className="d-flex flex-column gap-3">
          {props.orderData ? props.orderData.orders.map((order) => (
            <Button id={order.number} key={order.number} variant="outline-primary" onClick={clickHandler} className="primary"> {order.number} </Button>
            )) : ""}
        </div>
          
      </Container>
    </div>
  )
}

export default OrdersList
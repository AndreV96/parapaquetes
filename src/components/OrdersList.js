import React from "react";
import {Container, Button} from 'react-bootstrap';

function OrdersList(props) {
  function clickHandler(e) {
    const id = e.target.id
    props.setCurrentOrder(id) 
  }
  
  return(
    <div className="App">
    <header className="header p-2">
        <h2>Select an order</h2>
    </header>
      <Container className="pt-3 ">
        <div className="grid-container max-width-content">
          {props.orderData ? props.orderData.orders.map((order) => (
            <Button id={order.number} key={order.number} variant="outline-primary" onClick={clickHandler} className={props.currentOrder === order.number ? "order-button order-selected" : "order-button"} > {order.number} </Button>
            )) : ""}
        </div>
          
      </Container>
    </div>
  )
}

export default OrdersList
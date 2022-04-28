import React from "react";
import AddProduct from './/AddProduct';
import {useState} from 'react';
import {ListGroup, Container, ListGroupItem, Card, Button} from 'react-bootstrap';
import ShippingInfo from "./ShippingInfo";
import OrderConfirmation from "./OrderConfirmation";

function Checkout(props) {
  const orderItems = props.orderData.items
  const [newProduct, setNewProduct] = useState({})
  return(
    <div className="App">
      <ShippingInfo orderData = {props.orderData} />
      <Container className="p-3">
        <h2> Order {props.orderData.number} </h2>
        {orderItems ? orderItems.map((item) => (
          <Card key={item.sku}>
            <Card.Title> {item.name} </Card.Title>
            <ListGroup>
              <ListGroupItem>{item.sku}</ListGroupItem>
              <ListGroupItem>{item.quantity}</ListGroupItem>
              <ListGroupItem>{item.price}</ListGroupItem>
            </ListGroup>
        </Card>
        )) :""}
      </Container>
      <AddProduct newProduct = {newProduct} setNewProduct = {setNewProduct} orderItems = {props.orderData.items} />
      <OrderConfirmation orderData = {props.orderData}  />
    </div>
  )
}

export default Checkout
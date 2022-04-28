import React from "react";
import $ from 'jquery'
import AddProduct from './/AddProduct';
import {useState} from 'react';
import {ListGroup, Container, ListGroupItem, Card, Button} from 'react-bootstrap';


function Checkout(props) {
  const orderItems = props.orderData.items
  const [newProduct, setNewProduct] = useState({})
  return(
    <div className="App">
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
        <Button variant="primary">Confirm</Button>
      </Container>
      <AddProduct newProduct = {newProduct} setNewProduct = {setNewProduct} orderItems = {props.orderData.items} />
    </div>
  )
}

export default Checkout
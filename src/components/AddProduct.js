import React from "react";
import alertMessage from '../utils/helpers';
import $ from 'jquery'
import {Container, Form, Button} from 'react-bootstrap';

function AddProduct(props) {
  function addNewProduct() {
    const name = document.getElementById("nameForm").value
    const sku = document.getElementById("skuForm").value
    const quantity = document.getElementById("qtyForm").value
    const price = document.getElementById("priceForm").value
    const product = {name, sku, quantity, price}
    if (name && sku && quantity && price) {
      props.setNewProduct(product)
      props.orderItems.push(product)
    } 
    if (!name) document.getElementById("nameAlert").value = "Tienes que agregar un nombre!"

  }
  return(
    <div className="App">
      <Container className="form-container">
        <h2>Something else? Add it to your order!</h2>
        <Form>
          <Form.Group className="mb-3" controlId="nameForm">
            <Form.Label>Name</Form.Label>
            <Form.Control type="" placeholder="Camisa manga larga - M" />
            <Form.Text id="nameAlert" className="text-muted">
              Agrega nombre!
            </Form.Text>
          </Form.Group>

          <Form.Group id="SKUForm" className="mb-3" controlId="skuForm">
            <Form.Label>SKU</Form.Label>
            <Form.Control type="" placeholder="123456789" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="qtyForm">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="" placeholder="0" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="priceForm">
            <Form.Label>Price</Form.Label>
            <Form.Control type="" placeholder="100" />
          </Form.Group>

          <Button onClick={addNewProduct} id="addBtn" variant="primary">
            Add
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default AddProduct
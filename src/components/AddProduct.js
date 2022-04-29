import React, { useState, useEffect } from "react";
import {Container, Card, Form, Button} from 'react-bootstrap';

function AddProduct(props) {
  const totals = props.orderData.totals
  const initialValues = {name: "", sku: "", quantity: "", price: ""}

  const handleChange = (e) => {
    const {id, value} = e.target
    setFormValues({...formValues, [id]: value } )
  }

  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true);
    props.setSubTotal(props.subTotal + formValues.quantity * formValues.price)
  }

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      props.setNewProduct(formValues)
      props.orderData.items.push(formValues)
      setIsSubmit(false);
      props.setTotal(props.subTotal + parseInt(totals.tax) + parseInt(totals.shipping))
    }
  })

  const validate = (values) => {
    const errors = {}
    const numberRegex = /[0-9]/
    const priceRegex = /[0-9].?[0-9]*/
    
    if (!values.name) errors.name = "Please enter a name for the product!"
    if (!values.sku) errors.sku = "Please enter a SKU for the product!"
    if (!values.quantity) {
      errors.quantity = "Please enter a number of products to add to the order!"
    } else if (!numberRegex.test(values.quantity)) {
      errors.quantity = "Quantity must be an integer!"
    }
    if (!values.price) {
      errors.price = "Please enter a price for the product!"
    } else if (!priceRegex.test(values.price)) {
      errors.price = "Must be a valid price!"
    }
    return errors;
  }

  return(
    <div className="App w-100 margin-left-64">
      <Container className="form-container">
        <Card  className="p-2">
          <p className="fs-5 m-1 fw-bold ">Forgot something?</p> 
          <p className="m-1 fw-bold text-blue">Add more products to your order!</p>
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="name" name="name" value={formValues.name} onChange={handleChange} >
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control type="" placeholder="What is the name of the product?" />
              <Form.Text id="nameAlert" className="text-danger fs-6">
                {formErrors.name}
              </Form.Text>
            </Form.Group>

            <Form.Group id="SKUForm" className="mb-3" controlId="sku" name="sku" value={formValues.sku} onChange={handleChange} >
              {/* <Form.Label>SKU</Form.Label> */}
              {/* <span>SKU</span> */}
              <Form.Control type="" placeholder="What is the product SKU?" />
              <Form.Text id="nameAlert" className="text-danger fs-6">
                {formErrors.sku}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="quantity" name="quantity" value={formValues.quantity} onChange={handleChange} >
              {/* <Form.Label>Quantity</Form.Label> */}
              <Form.Control type="" placeholder="How many do you want to add to the order?" />
              <Form.Text id="nameAlert" className="text-danger fs-6">
                {formErrors.quantity}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="price" name="price" value={formValues.price} onChange={handleChange} >
              {/* <Form.Label>Price</Form.Label> */}
              <Form.Control type="" placeholder="What is the product price?" />
              <Form.Text id="nameAlert" className="text-danger fs-6">
                {formErrors.price}
              </Form.Text>
            </Form.Group>

            <Button type="submit" id="addBtn" variant="outline-primary" className="add-confirm-button">
              Add New Product
            </Button>

          </Form>
        </Card>
      </Container>
    </div>
  )
}

export default AddProduct
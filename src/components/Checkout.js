import React from "react";
import AddProduct from './/AddProduct';
import {useState} from 'react';
import {ListGroup, Container, ListGroupItem, Card, Table} from 'react-bootstrap';
import ShippingInfo from "./ShippingInfo";
import OrderConfirmation from "./OrderConfirmation";

function Checkout(props) {
  const orderItems = props.orderData.items
  const totals = props.orderData.totals
  const [newProduct, setNewProduct] = useState({})
  const [subTotal, setSubTotal] = useState(parseInt(totals.subtotal))
  const [total, setTotal] = useState(parseInt(totals.total))
  
  return(
    <div className="App">
      <ShippingInfo orderData = {props.orderData} />
      <Container className="p-3 max-width-content">
        
        <Table className="table" striped bordered hover>
          <thead >
            <tr className="text-blue">
              <th>Name</th>
              <th>SKU</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody className="border-top-secondary">
        {orderItems ? orderItems.map((item) => (
            <tr key={item.sku}>
              <td className="fw-bold">{item.name}</td>
              <td>{item.sku}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
        )) :""}
        
          </tbody>
        </Table>
      </Container>

      <div className="max-width-content center-margin flex-mq">
        <AddProduct newProduct = {newProduct} setNewProduct = {setNewProduct} orderData= {props.orderData} subTotal = {subTotal} setSubTotal = {setSubTotal} total ={total} setTotal = {setTotal} />
        <OrderConfirmation orderData = {props.orderData} subTotal = {subTotal} total ={total} filterOrder = {props.filterOrder}/>
      </div>
    </div>
  )
}

export default Checkout
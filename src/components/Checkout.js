import React from "react";
import AddProduct from ".//AddProduct";
import { useState } from "react";
// Components from React-Bootsrap framework
import { Container, Table } from "react-bootstrap";
import ShippingInfo from "./ShippingInfo";
import OrderConfirmation from "./OrderConfirmation";

function Checkout(props) {
  // All items information retrieved from API request and total costs information respectively
  const orderItems = props.orderData.items;
  const totals = props.orderData.totals;

  // useStates for new product object, current order subtotal and current order total respectively
  const [newProduct, setNewProduct] = useState({});
  const [subTotal, setSubTotal] = useState(parseInt(totals.subtotal));
  const [total, setTotal] = useState(parseInt(totals.total));

  return (
    <div className="App">
      {/* ShippingInfo component */}
      <ShippingInfo orderData={props.orderData} />
      <Container className="p-3 max-width-content">
        {/* Table with all products information */}
        <Table className="table" striped bordered hover>
          <thead>
            <tr className="text-blue">
              <th>Name</th>
              <th>SKU</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody className="border-top-secondary">
            {orderItems
              ? orderItems.map((item) => (
                  <tr key={item.sku}>
                    <td className="fw-bold">{item.name}</td>
                    <td>{item.sku}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                  </tr>
                ))
              : ""}
          </tbody>
        </Table>
      </Container>

  {/* Div for new products and order confirmation components */}
      <div className="max-width-content center-margin flex-mq">
  {/* Add product component */}
        <AddProduct
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          orderData={props.orderData}
          subTotal={subTotal}
          setSubTotal={setSubTotal}
          total={total}
          setTotal={setTotal}
        />
  {/* Order Confirmation component */}
        <OrderConfirmation
          orderData={props.orderData}
          subTotal={subTotal}
          total={total}
          filterOrder={props.filterOrder}
        />
      </div>
    </div>
  );
}

export default Checkout;

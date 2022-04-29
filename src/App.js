import "./App.css";
import API from "./utils/API";
import { useState, useEffect } from "react";
import OrdersList from "./components/OrdersList";
import Checkout from "./components/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // useState for all the order data information requested from API and 
  const [orderData, setOrderData] = useState();
  // useState for the current order selected
  const [currentOrder, setCurrentOrder] = useState();

  // useEffect for the API call
  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await API.getOrders();
      const data = await response.json();
      setOrderData(data);
    };
    fetchOrderData();
  }, []);

  // function to filter orders already sent and paid
  function filterOrder(orderId) {
    const orders = orderData.orders.filter((order) => order.number !== orderId);

    setOrderData({ ...orderData, orders });
    setCurrentOrder();
  }

  // function for rendering order selected and send order information to Checkout component
  function RenderOrder() {
    if (currentOrder) {
      const orderIndex = orderData.orders.findIndex(
        (order) => order.number === currentOrder
      );
      return (
        <div>
          <Checkout
            orderData={orderData.orders[orderIndex]}
            setCurrentOrder={setCurrentOrder}
            filterOrder={filterOrder}
          />
        </div>
      );
    }
  }

  // Starting render of all orders
  return (
    <div className="App footer-margin">
      <OrdersList
        orderData={orderData}
        setOrderData={setOrderData}
        currentOrder={currentOrder}
        setCurrentOrder={setCurrentOrder}
      />
      <RenderOrder />
    </div>
  );
}

export default App;

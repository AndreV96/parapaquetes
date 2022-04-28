
import './App.css';
import API from './utils/API';
import {useState, useEffect} from 'react';
import OrdersList from './components/OrdersList';
import Checkout from './components/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [orderData, setOrderData] = useState()
  const [currentOrder, setCurrentOrder] = useState()

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await API.getOrders()
      const data = await response.json()
      setOrderData(data)
    }
    fetchOrderData()
  }, [])

  function RenderOrder() {
    if (currentOrder) {
    const orderIndex = orderData.orders.findIndex(order => order.number === currentOrder)
      return (
        <div>
          <Checkout orderData = {orderData.orders[orderIndex]} setCurrentOrder = {setCurrentOrder} />
        </div>
      )
    }
  }

  return (
    <div className="App">
      <OrdersList orderData = {orderData} setOrderData = {setOrderData} setCurrentOrder = {setCurrentOrder}/>
      <RenderOrder />
      {/* <header className="App-header">
      </header> */}
    </div>
  );
}

export default App;

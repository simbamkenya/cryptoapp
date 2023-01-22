import './App.css';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  let ws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade')
  const [data, setData]= useState([])
  
  useEffect(()=>{
     ws.onmessage = (e) => {
     const stockObject = JSON.parse(e.data);
    //  console.log(stockObject)
    let stock = []
     setData(stock.push(stockObject))
     console.log(stock)
  }

  }, [ws])
//  console.log(data.p)
  
  return (
    <div className="md:flex antialiased">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;

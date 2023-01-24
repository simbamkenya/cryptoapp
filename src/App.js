import './App.css';
import { useEffect, useState, useContext } from 'react';
import { csv, timeParse, scaleBand, scaleLinear, max} from 'd3';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import BarChart from './components/BarChart';
import  ContextProvider   from './DataContext';
import { OhlcContext } from './DataContext'; 
import Chart from './components/Chart';



function App() {
  
  const dimensions = { width: 800, height: 400 }
  // const [coinData, setCoinData] = useState([])

//   const volumeAccessor = d => d.volume;
//   // console.log('mp',data.map(d => d.date))
  

//    //barScale
//    const barScale = scaleBand()
//     .domain(data.map(d => d.date))
//     .range([0, dimensions.width])
//     .padding(0.2)

   //yscale
  // const yScale = scaleLinear()
  //   .domain([0, max(data, volumeAccessor)])
  //   .range([dimensions.height, 0])

  
   
  return (
    <ContextProvider>
       <div className="md:flex antialiased">
        <Sidebar />
        <Main dimensions={dimensions} />
        {/* <BarChart dimensions={dimensions} /> */}
        {/* <Chart dimensions={dimensions} /> */}
      </div>
    </ContextProvider>
   
  );
}

export default App;

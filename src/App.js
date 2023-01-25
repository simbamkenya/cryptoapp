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
  
  const dms = { width: 800, height: 400, margin : { top: 30, right: 20, bottom: 40, left: 60 }}

  const width = dms.width - dms.margin.left - dms.margin.right;
  const height = dms.height - dms.margin.top - dms.margin.bottom;
  

  const dimensions = {width, height, margin : { top: 30, right: 20, bottom: 40, left: 60 }}

      // width = 960 - margin.left - margin.right,
      // height = 640 - margin.top - margin.bottom;
  
  // var svg = d3.select('body').append('svg')
  //     .attr('width', width + margin.left + margin.right)
  //     .attr('height', height + margin.top + margin.bottom)
  //   .append('g')
  //     .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
  
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

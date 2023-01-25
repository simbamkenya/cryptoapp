import React, { useEffect } from 'react'
import { useRef, useState, useContext } from 'react';
import { select, extent, scaleTime, scaleLinear, area, line, bisector, axisBottom, axisLeft, max, pointer, scaleBand } from 'd3'
import CrossHairs from './CrossHairs';
import BarChart from './BarChart';
import { OhlcContext } from '../DataContext'; 
import { timeFormat, format} from 'd3'


function Chart({ dimensions}) {

  const formatTime = timeFormat("%m/%d/%Y")
  const formatVolume = format(",")
  
  const data = useContext(OhlcContext);
  const svg = useRef(null);

  //accessor 
  const dateAccessor = d => d.date;
  const highAccessor = d => d.high;
  const lowAccessor = d => d.low;
  const volumeAccessor = d => d.volume;
  const closeAccessor = d => d.close;


  //xscale 
  const xScale = scaleTime()
    .domain(extent(data, dateAccessor))
    .range([0, dimensions.width])

  //yscale
  const yScale = scaleLinear()
    .domain([0, max(data, volumeAccessor)])
    .range([dimensions.height, 0])

  //barScale
  const barScale = scaleBand()
    .domain(data.map(d => d.date))
    .range([0, dimensions.width])

  //axis
  const xAxis = select("#xAxis")
    .call(axisBottom(xScale))
    
  const yAxis = select("#yAxis")
    .call(axisLeft(yScale).ticks(6,"s"))
    
  //linegenerator 
  const lineGen = line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.volume))

  const [mouseCords, setMouseCords] = useState({ x: 0, y: 0})
  const handleMouseMove = (e) => {
      const [ clientX, clientY ] = pointer(e);
      setMouseCords({x: clientX, y: clientY})
  }
 
const [date1, setDate] = useState()
 const date = xScale.invert(mouseCords.x);
 const bisect = bisector(dateAccessor);
 const index = bisect.center(data, date);
 const d = data[index];
 const x = xScale(dateAccessor(d))
 const y= yScale(volumeAccessor(d))

 useEffect(() => {
  setDate(date)
 }, [])
 
const tradeDate = formatTime(dateAccessor(d));
const tradeVolume = formatVolume(volumeAccessor(d));

 //area
 const areaGen = area()
        .x(d => xScale(d.date))
        .y0(yScale(0))
        .y1(d => yScale(d.volume))
        
  return (
    <>
    <svg 
    ref={svg} 
    style={{backgroundColor: '#F3F3F3'}} 
    width={dimensions.width + dimensions.margin.left+ dimensions.margin.right} 
    height={dimensions.height + dimensions.margin.top + dimensions.margin.bottom}
    >
        <g 
        onMouseMove={handleMouseMove} 
        transform={`translate(${dimensions.margin.left, dimensions.margin.top})`}
        > 
            <path fill="none" stroke='steelblue' strokeWidth="1.5" d={lineGen(data)}/>
            <path  d={areaGen(data)} fill='#B0DCFE'/>
            <g id="xAxis" fill='none' transform={`translate(0,${dimensions.height})`}></g>
            <g id="yAxis" fill='none'></g>
            
            <CrossHairs 
              x={mouseCords.x} 
              y={mouseCords.y} 
              yScale={yScale} 
              xScale={xScale}
            />
            <circle 
                cx={x}
                cy={y}
                r={5}
                fill={'red'}
            />
            
            <text x={10} y={30}>Date: {tradeDate}</text>
            <text x={200} y={30}>Volume: {tradeVolume}</text>
        </g>
    </svg>
    <BarChart dimensions={dimensions} x={mouseCords.x} date={tradeDate} volume={tradeVolume}/>
    </>
  )
}

export default Chart
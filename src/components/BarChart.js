import React, { useContext } from 'react'
import { OhlcContext } from '../DataContext'
import { max, scaleLinear, scaleBand, select } from 'd3';
import CrossHairs from './CrossHairs';

function BarChart({dimensions, x, date, volume}) {
  const data = useContext(OhlcContext)
  const volumeAccessor = d => d.volume;
//barScale
const barScale = scaleBand()
  .domain(data.map(d => d.date))
  .range([0, dimensions.width])
  .padding(0.2)

//yscale
const yScale = scaleLinear()
  .domain([0, max(data, volumeAccessor)])
  .range([dimensions.height, 0])

const barYscale = scaleLinear()
  .domain([0, max(data, volumeAccessor)])
  .range([dimensions.height/2, 0])

  // select("#svg").remove()

  return (
    <svg id="svg"    
    width={dimensions.width + dimensions.margin.left+ dimensions.margin.right} 
    height={(dimensions.height + dimensions.margin.top + dimensions.margin.bottom)/2}
    style={{backgroundColor: '#F3F3F3'}} className="mt-2">
    <g transform={`translate(${dimensions.margin.left, dimensions.margin.bottom})`}> 
        {data.map((bar, i) => (
            <rect 
                key={i}
                fill={bar.close > bar.open ?  '#FF0000' : '#00FF00'}
                x={barScale(bar.date)}
                y={barYscale(bar.volume)}
                width={barScale.bandwidth()}
                height={dimensions.height/2 -barYscale(bar.volume)}
            />
        ))}
        <CrossHairs x={x}/>
        <text x={10} y={30}>Date: {date}</text>
        <text x={200} y={30}>Volume: {volume}</text>

    </g>
  </svg>
  )
}

export default BarChart
import React, { useContext } from 'react'
import { OhlcContext } from '../DataContext'
import { max, scaleLinear, scaleBand } from 'd3';
import CrossHairs from './CrossHairs';

function BarChart({dimensions, x }) {
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

  return (
    <svg height={dimensions.height} width={dimensions.width} style={{backgroundColor: 'yellow'}} className="mt-2">
    <g transform={'translate(40,40)'}> 
        {data.map((bar, i) => (
            <rect 
                key={i}
                fill={bar.close > bar.open ?  'red' : 'green'}
                x={barScale(bar.date)}
                y={yScale(bar.volume)}
                width={barScale.bandwidth()}
                height={dimensions.height - yScale(bar.volume)}
            />
        ))}
        <CrossHairs x={x}/>
        
    </g>
  </svg>
  )
}

export default BarChart
import React from 'react'
import { useRef } from 'react';
import { select, timeFormat, extent, max, scaleTime, scaleLinear, area, line, bisector, selectAll } from 'd3'


function Chart() {
    const dimensions = {
        width: 600,
        height: 200
    }

    const xAccessor = (d) => d;
    const yAccessor = (d) => d;


  return (
    <svg>
        <g>
            
        </g>
    </svg>
  )
}

export default Chart
import React, { useState } from 'react'

function CrossHairs({ x }) {
   
  return (
   <>
     <line 
        x1={x}
        y1={0}
        x2={x}
        y2={600}
        stroke={'black'}
        strokeWidth={1.5}
        strokeDasharray={1}
    />
        
   </>
  )
}

export default CrossHairs
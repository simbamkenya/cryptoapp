import React, { useContext } from 'react'
import BarChart from './BarChart'
import Chart from './Chart'
import { OhlcContext } from '../DataContext'

function Main({dimensions,  yScale, barScale}) { 
  
  const data = useContext(OhlcContext)

  console.log('g', data)

  return (
    <main className='bg-gray-100 h-screen w-full overflow-y-auto'>
        <section>
            <header className="border-b border-solid border-gray-300 bg-white">
             <h2 className="p-6">Performance</h2>
            </header>
            {/* <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
                <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
                    Buildings Overview
                </header>
            </section> */}
            <section id="chart" className="p-4 mx-4 bg-red-200">
			  <Chart dimensions={dimensions}/>
        <BarChart  dimensions={dimensions}/>
			</section>
        </section>
    </main>
  )
}

export default Main
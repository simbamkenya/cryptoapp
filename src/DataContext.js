import React, {useContext, createContext, useState, useEffect, useReducer } from 'react'
import { csv, timeParse} from 'd3';
import { getAllByAltText } from '@testing-library/react';

export const OhlcContext = createContext([]);

function ContextProvider({ children }) {
    const [data, setData] = useState([{ open: 0, close: 0, volume: 0, high: 0, low: 0}])
    // const [] = useState()
    // const [coin, setCoin] = useState('btc_usd')
    const parseDate =  timeParse("%m/%d/%Y")
  
    useEffect(() => {
        function row(d){
            return {
              date: parseDate(d.date),
              high: +d.high,
              low: +d.low,
              open: +d.open,
              close: +d.close,
              volume: +d.volume
            }
          }
          csv('./btc-usd.csv', row).then(res => setData(res))
          // Promise.all([
          //   csv("./eth-usd.csv", row),
          //   csv("./usdt-usd.csv", row),
          //   csv("./xrp-usd.csv", row),
          //   csv("./btc-usd.csv", row)
          //   ]).then( ([eth_usd, usdt_usd, xrp_usd, btc_usd]) => {
          //       // do stuff
 
          // // const allcoins = [{eth_usd: eth_usd, id: 1}, {usdt_usd: usdt_usd, id: 2}, {xrp_usd: xrp_usd, id: 3}, {btc_usd: btc_usd, id: 4}];
          // // const allcoins = [{eth_usd }, {usdt_usd}, {xrp_usd}, {btc_usd}];
          
          // setData(allcoins)
          
            
        // allcoins.filter(d => d[coin])

            // }).catch(err => console.log('Error loading or parsing data.'));
    }, [data])
    console.log(data)
 
    const reducer = (state, action) => {
      switch (action.type) {
        case "FILTER_COIN":
          return {
            data: [...state.data].filter(d => d.id === action.payload.id)
          };
        
        default:
          return state;
      }
    }
    const initialState = {
      data: [
      {id:1 , btc_usd: [8, 9, 10]},
      {id:2 , xrp_usd: [5, 6, 7]},
      {id:3 , usdt_usd: [2, 3, 4]},
      {id:4, eth_usd: [1, 2, 3]}   
      ]
   };
  
    const [state, dispatch] = useReducer(reducer, initialState);

console.log('s',state)
  return (
    <OhlcContext.Provider value={data}>
        {children}
    </OhlcContext.Provider>
  )
}

export default ContextProvider;
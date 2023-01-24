import React, {useState, useContext} from 'react';
import { OhlcContext } from '../DataContext';

function Sidebar() {
  const coins = ['btc_usd', 'xrp_usd', 'usdt_usd', 'eth_usd'];
  

  const [state, dispatch] = useContext(OhlcContext)
  // const [selectedId, setSelectedId] = useState(1);

  // console.log('id', selectedId)

  const filterCoins = (id) => {
    // console.log(typeof(coin))
    dispatch({
      type: "FILTER_COIN",
      payload: {
        id: id
      }
    });
  }

  // console.log('coin', coin)
  return (
    <aside className="w-full md:h-screen md:w-64 bg-gray-900 md:flex md:flex-col">
        <header className="border-b border-solid border-gray-800 flex-grow">
			<h1 className="py-6 px-4 text-gray-100 text-base font-medium">Trading Charts</h1>
		</header>
        <nav className="overflow-y-auto h-full flex-grow">
            <header >
              <span className="text-xs text-gray-500 block py-6 px-6">COINS</span>
            </header>
            <ul className="font-medium px-4 text-left">
                <li className="text-gray-100">
                    {coins.map((coin, i) =>(
                      <button key={i}  className="rounded text-sm block py-3 px-6 hover:bg-blue-600 w-full text-left" onClick={() => filterCoins(i + 1)}>{coin.toUpperCase()}</button>
                    ))}
				</li>
            </ul>
        </nav>
        <section  className="p-4 border-t border-solid border-gray-800">
			<div className="flex">
				<div className="flex flex-col p-2">
					<span className="text-white pb-1">Phares Njoki</span>
					<span className="text-xs text-gray-500">D3 js Enthusiasts</span>
				</div>
			</div>
		</section>
    </aside>
  )
}

export default Sidebar
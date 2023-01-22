import React from 'react'

function Sidebar() {
  return (
    <aside className="w-full md:h-screen md:w-64 bg-gray-900 md:flex md:flex-col">
        <header class="border-b border-solid border-gray-800 flex-grow">
			<h1 class="py-6 px-4 text-gray-100 text-base font-medium">Trading</h1>
		</header>
        <nav className="overflow-y-auto h-full flex-grow">
            <header >
              <span className="text-xs text-gray-500 block py-6 px-6">MENU</span>
            </header>
            <ul className="font-medium px-4 text-left">
                <li class="text-gray-100">
                    <button href="#performance"  className="rounded text-sm text-left block py-3 px-6 hover:bg-blue-600 w-full">Performance</button>
                    <button href="#performance" className="rounded text-sm block py-3 px-6 hover:bg-blue-600 w-full text-left">New</button>
				</li>
            </ul>
        </nav>
        <section  className="p-4 border-t border-solid border-gray-800">
			<div className="flex">
				<div className="flex flex-col p-2">
					<span className="text-white pb-1">Kara Johnson</span>
					<span className="text-xs text-gray-500">HR Specialist</span>
				</div>
			</div>
		</section>
    </aside>
  )
}

export default Sidebar
import React from 'react'
import Link from 'next/link'

import { useStateContext } from '../context/StateContext'
import Cart from './Cart'

type Props = {}

const Navbar = (props: Props) => {
	const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="w-full flex justify-center items-center h-[8vh] bg-[#eeeeee] z-50">
			<h1 className="font-orbitron text-xl sm:text-3xl tracking-wide">
				<Link href="/">phenomenal</Link>
			</h1>

			{/* Cart Icon */}
			<button onClick={() => setShowCart(true)} className="font-orbitron text-gray-500 fixed right-5 text-right z-50">
				[{totalQuantities}]
			</button>

			{/* Cart modal */}
			{ showCart && <Cart/> }
    </div>
  )
}

export default Navbar
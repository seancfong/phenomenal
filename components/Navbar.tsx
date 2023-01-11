import React, { useEffect } from 'react'
import Link from 'next/link'

import { useStateContext } from '../context/StateContext'
import { CiShoppingCart } from "react-icons/ci";
import Cart from './Cart'
import { motion, useAnimationControls } from 'framer-motion'

type Props = {}

const Navbar = (props: Props) => {
	const { setShowCart, totalQuantities } = useStateContext();

	const cartAnimation = useAnimationControls();
	const cartIconAnimation = useAnimationControls();

	useEffect(() => {
		if (totalQuantities != 0) {
			cartAnimation.start({ scale: [1, 1.5, 1] });
		}
    
		
  }, [totalQuantities]);

  return (
    <div className="w-full flex justify-center items-center h-[8vh] bg-[#eeeeee] z-50">
			<h1 className="font-orbitron text-xl sm:text-3xl tracking-wide">
				<Link href="/">phenomenal</Link>
			</h1>

			{/* Cart Icon */}
			<button onClick={() => {
				cartAnimation.start({ x: [0, 100, 0] });
				setShowCart(true);
			}} 
				className="font-orbitron text-gray-500 fixed right-[5vw] text-right z-50">
				<div className="flex gap-2 py-1 items-center">
					<motion.span animate={cartAnimation}>
						<CiShoppingCart size={25}/> 
					</motion.span>
					
					<span className="text-lg hidden md:block">[ {totalQuantities} ]</span>
				</div>
				
			</button>

			{/* Cart modal */}
			<Cart/>
			
    </div>
  )
}

export default Navbar
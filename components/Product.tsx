import React, { useState, useRef } from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'
import { motion, useInView } from 'framer-motion'

import { renderCollectionColorText } from '../helpers/renderCollectionColors'

const Product = ({ product: { image, name, slug, price, details, collection } }) => {
	const [ revealDetails, setRevealDetails ] = useState(false);
	const productRef = useRef(null);
	const isInView = useInView(productRef, { once: true, amount: 0.5 });

  return (
    <motion.div 
			onHoverStart={() => { setRevealDetails(true) }}
			onHoverEnd={() => { setRevealDetails(false) }}
			ref={productRef} className={"bg-[#eeeeee] bg-blur-sm flex flex-col items-center border-[2px] border-gray-600 rounded-[10px] transition duration-1000 " 
			+ (isInView ? "": "opacity-50")}>
			<Link href={`/product/${slug.current}`}>
				<div className="p-[5%] flex flex-col gap-3">
					<div className={"w-full overflow-hidden rounded-[10px] transition duration-1000 aspect-square " 
						+ (isInView ? "": "translate-y-5")}>
						<motion.img 
							src={urlFor(image && image[0])} width={250} height={250} className="w-full h-full object-cover" 
							whileHover={{ scale: 1.03, transition: { duration: 0.3, ease: "easeOut" } }}
							transition={{ duration: 0.4, ease: "easeInOut" }}
						/>
					</div>
					
					<div className="flex justify-between px-5 items-center">
						<p className={"font-orbitron text-3xl transition duration-300 ease-in-out " + (revealDetails ? renderCollectionColorText(collection) : "opacity-80 " )}>
							{name}
						</p>
						<p className="text-lg">${price}</p>
					</div>

					<p className={"text-center transition duration-300 ease-in-out text-gray-700 " 
						+ (revealDetails ? " " : "opacity-80 " )
					}>
						{details}
					</p>
					
				</div>
			</Link>
    </motion.div>
  )
}

export default Product
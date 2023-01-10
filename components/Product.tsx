import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const Product = ({ product: { image, name, slug, price} }) => {
  return (
    <div className="bg-[#eeeeee] bg-blur-sm flex flex-col items-center border-[2px] border-gray-600 rounded-[10px]">
		<Link href={`/product/${slug.current}`}>
			<div className="p-[5%] flex flex-col gap-3">
				<div className="w-full overflow-hidden rounded-[10px]">
					<img src={urlFor(image && image[0])} width={250} height={250} className="w-full h-full" />
				</div>
				
				<div className="flex justify-between px-5 items-center">
					<p className="font-orbitron text-3xl">{name}</p>
					<p className="text-lg">${price}</p>
				</div>
				
			</div>
		</Link>
    </div>
  )
}

export default Product
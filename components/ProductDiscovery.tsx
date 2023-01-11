import React from 'react'
import Product from './Product'



type Props = {
	products: Array<any>
}

const ProductDiscovery = ({ products }: Props) => {
  return (
		<div id="explore" className="flex flex-col gap-5 items-center">
			<h3 className="font-orbitron text-2xl md:text-3xl text-center py-10">
				Explore our discoveries.
			</h3>
			<div className="flex justify-center">
				<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] min-h-screen gap-5 md:gap-10 px-[5vw] sm:px-[20vw] md:px-[5vw] lg: px-[10vw]max-w-[1600px] overflow-x-hidden">
					{ products?.map((product) => 
						<Product key={product._id} product={product} /> 
					) }
				</div>
			</div>
		</div>

  )
}

export default ProductDiscovery
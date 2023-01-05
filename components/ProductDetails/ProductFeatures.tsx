import React from 'react'

type Props = {

}

const ProductFeatures = (props: Props) => {
  return (
    <div className="font-raleway flex flex-col gap-5 border-[3px] border-gray-600 border-opacity-50 
			rounded-[15px] px-10 py-5 backdrop-blur-[2px] row-span-2 h-[30rem]">
			{/* Title */}
			<div className="flex justify-between items-end">
				<h2 className="font-orbitron text-2xl tracking-wider">features</h2>
			</div>

			{/* Horizontal break */}
			<hr className="w-[calc(100%+2rem)] h-[2px] border-0 bg-gray-600 self-center mt-[-1.25rem]"/>

		</div>
  )
}

export default ProductFeatures
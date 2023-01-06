import React from 'react'

type Props = {
	features: [string]
}

const ProductFeatures = ({ features }: Props) => {
  return (
    <div className="font-raleway flex flex-col gap-5 border-[3px] border-gray-600 border-opacity-50 
			rounded-[15px] px-10 md:px-7 lg:px-10 py-5 backdrop-blur-[2px] row-span-2">
			{/* Title */}
			<div className="flex justify-between items-end">
				<h2 className="font-orbitron text-2xl tracking-wider">features</h2>
			</div>

			{/* Horizontal break */}
			<hr className="w-[calc(100%+2rem)] h-[2px] border-0 bg-gray-600 self-center mt-[-1.25rem]"/>

			{/* Feature list */}
			<ul className="list-disc space-y-2">
				{ features?.map((feature, index) => 
					<li key={index}>
						{feature}
					</li>
				) }
			</ul>
			

		</div>
  )
}

export default ProductFeatures


// Watertight seals to prevent leaks
// Adequate ventilation to keep the water oxygenated
// Customization options such as lighting and filtration
// Removable panels for easy maintenance
// Durable materials to withstand the weight of the water and rough handling
// Built-in filtration system to keep the water clean
// Multiple air holes to ensure proper circulation
// Wide opening for easy access to the inside of the case
// Compatibility with a range of aquatic life such as fish, turtles, and frogs
// Attractive design to enhance the aesthetics of your home or office
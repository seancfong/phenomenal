import React from 'react'
import StarRating from '../../components/StarRating';

const renderCollectionColor = ( collectionString: string) => {
	switch(collectionString) {
		case 'aqua':
			return "text-[#437A90]";
		case 'terra':
			return "text-[#79915c]";
		default:
			return "text-black";
	}
}
const renderCartBackground = ( collectionString: string) => {
	switch(collectionString) {
		case 'aqua':
			return "bg-[url('/waves.jpg')]";
		case 'terra':
			return "bg-[url('/leaves.jpg')]";
		default:
			return "bg-orange-500";
	}
}

type Props = {
	name: string,
	price: number,
	collection: string,
	details: string,
}

const ProductDescription = ({ name, price, collection, details }: Props) => {
	const current = new Date();
	current.setDate(current.getDate() + 2);

  return (
    <div className="font-raleway flex flex-col gap-5 border-[3px] border-gray-600 border-opacity-50 
			rounded-[15px] px-10 py-5 backdrop-blur-[2px]">
			{/* Title */}
			<div className="flex justify-between items-end">
				<h2 className="font-orbitron text-3xl tracking-wider">{name}</h2>
				<p className="text-xl">${price}</p>
			</div>
			
			{/* Horizontal break */}
			<hr className="w-[calc(100%+2rem)] h-[2px] border-0 bg-gray-600 self-center mt-[-1.25rem]"/>

			{/* Review display */}
			<div className="text-lg">
				<StarRating rating={3.4} starWidth={22}/>
				<p>21 reviews</p>
			</div>

			{/* Description text */}
			<div>
				<h3 className={"font-orbitron text-xl tracking-widest " + renderCollectionColor(collection)}>
					{collection ? collection : "generic"} collection
				</h3>
				<p>{details}</p>
			</div>

			{/* Cart text */}
			<div className="flex flex-col gap-2">
				{/* Shipping text */}
				<p>Ships by {current.toDateString()}.</p>
				{/* Add quantity selector*/}
				<div className="border-[2px] bg-[#f5f5f5] border-gray-600 border-opacity-50 rounded-[10px] h-[3rem] items-center flex justify-around">
					<button className="w-8 text-3xl font-light">-</button>
					<span className="font-orbitron text-center text-lg tracking-wider">quantity: 0</span>
					<button className="w-8 text-3xl font-light">+</button>
				</div>
				{/* Add to cart button */}
				<button className={"bg-center w-full h-[3rem] rounded-[10px] " + renderCartBackground(collection)}>
					<div className="flex items-center justify-center w-full h-full 
						bg-gradient-to-r from-[rgba(0,0,0,0.0)] via-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.0)]">
						<span className="font-orbitron text-white text-lg tracking-wider">add to cart</span>
					</div>	
				</button>
			</div>
		</div>
  )
}

export default ProductDescription
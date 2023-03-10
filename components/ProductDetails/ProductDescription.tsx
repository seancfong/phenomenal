import React from 'react'
import StarRating from '../../components/StarRating';
import { renderCollectionColorText } from './ProductSolution';

const renderCartBackground = ( collectionString: string) => {
	switch(collectionString) {
		case 'aqua':
			return "bg-[url('/images/waves.jpg')]";
		case 'terra':
			return "bg-[url('/images/leaves.jpg')]";
		default:
			return "bg-[url('/images/orange.jpg')]";
	}
}

type Props = {
	isInView: boolean,
	name: string,
	price: number,
	collection: string,
	details: string,
	reviewStats: {
		avgReview: number,
		numReviews: number,
	},
	incQty: () => void,
	decQty: () => void,
	qty: number,
	onAdd: () => void,
}

const ProductDescription = ({ isInView, name, price, collection, details, reviewStats, incQty, decQty, qty, onAdd }: Props) => {
	const { avgReview, numReviews } = reviewStats || {};

	const current = new Date();
	current.setDate(current.getDate() + 4);

  return (
		<div className={`font-raleway flex flex-col gap-5 border-[3px] border-gray-600 border-opacity-50 
			rounded-[15px] px-10 md:px-7 lg:px-10 py-5 backdrop-blur-[2px] transition duration-[800ms] delay-[100ms] ease-in-out ` + ( isInView ? "" : "opacity-50 scale-[95%]")}>
			{/* Title */}
			<div className="flex justify-between items-end">
				<h2 className="font-orbitron text-3xl tracking-wider">{name}</h2>
				<p className="text-xl font-medium">${price}</p>
			</div>
			
			{/* Horizontal break */}
			<hr className="w-[calc(100%+2rem)] h-[2px] border-0 bg-gray-600 self-center mt-[-1.25rem]"/>

			{/* Review display */}
				<div className="text-lg">
					<StarRating rating={avgReview} starWidth={22}/>
					{ reviewStats && <p>{numReviews ?? 0} review{numReviews == 1 ? "" : "s"}</p> }
				</div>

			{/* Description text */}
			<div>
				<h3 className={"font-orbitron text-xl tracking-widest " + renderCollectionColorText(collection)}>
					{collection ? collection : "generic"} collection
				</h3>
				<p>{details}</p>
			</div>

			{/* Cart text */}
			<div className="flex flex-col gap-2">
				{/* Shipping text */}
				<p>Ships free by <span className="font-medium">{current.toDateString()}</span>.</p>
				{/* Add quantity selector*/}
				<div className="border-[2px] bg-[#f5f5f5] border-gray-600 border-opacity-50 rounded-[10px] h-[3rem] items-center flex justify-around">
					<button className="w-8 text-3xl font-light" onClick={decQty}>-</button>
					<span className="font-orbitron text-center text-lg tracking-wider">quantity: {qty}</span>
					<button className="w-8 text-3xl font-light" onClick={incQty}>+</button>
				</div>
				{/* Add to cart button */}
				<button className={"bg-center w-full h-[3rem] rounded-[10px] " + renderCartBackground(collection)}
					onClick={onAdd}
				>
					<div className="flex items-center justify-center w-full h-full rounded-[10px]
						bg-gradient-to-r from-[rgba(0,0,0,0.1)] via-[rgba(50,50,50,0.3)] to-[rgba(0,0,0,0.1)]">
						<span className="font-orbitron text-white text-lg tracking-wider">add to cart</span>
					</div>	
				</button>
			</div>
		</div>
    
  )
}

export default ProductDescription
import React from 'react'
import StarRating from '../StarRating'

type Props = {
	reviewData: {
		avgReview: number,
		numReviews: number,
		reviewSlice: Array<any>
	}
}

const ProductReviews = ({ reviewData }: Props) => {
	const { avgReview, numReviews, reviewSlice } = reviewData;


  return (
		<>
			{/* Side Panel */}
			<div className="md:sticky md:top-5 max-h-[80vh] font-raleway flex flex-col gap-5 border-[3px] border-gray-600 border-opacity-50 
				rounded-[15px] px-10 md:px-7 lg:px-10 py-5 backdrop-blur-[2px] z-30">
				{avgReview} stars from {numReviews} reviews
			</div>


			{/* Reviews */}
			<div className="font-raleway flex flex-col row-span-2 gap-5 border-[3px] border-gray-600 border-opacity-50 
				rounded-[15px] px-10 md:px-7 lg:px-10 py-5 backdrop-blur-[2px] h-[90rem]">
				{/* Title */}
				<div>
					<h2 className="font-orbitron text-3xl tracking-wider">hear what they say.</h2>
				</div>
				
				{/* Horizontal break */}
				<hr className="w-[calc(100%+2rem)] h-[2px] border-0 bg-gray-600 self-center mt-[-1.25rem]"/>

				{/* Review display */}
				<div className="text-lg flex flex-col gap-10">
					{reviewSlice?.map(({ name, rating, reviewText, reviewTitle }, index) => (
						<div key={index}>
							<h3>{reviewTitle}</h3>
							<span>by {name}</span>
							<div>
								<StarRating rating={rating} starWidth={20}/>
							</div>
							<p>{reviewText}</p>
						</div>
					))}
				</div>
			</div>
		</>
		
  )
}

export default ProductReviews
import React, { useEffect, useState } from 'react'


// Star rating component
import StarRating from '../StarRating'

// Sanity client for client side data fetching
import { client } from '../../lib/client'

// Chart JS components
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartOptions: Chart.ChartPluginsOptions = {
	aspectRatio: 1, 
	plugins: {
		tooltip: false as const,
		legend: {
			display: false as const
		}
	},
	cutout: "90%"
}

type Props = {
	slug: string,
	reviewStats: {
		avgReview: number,
		numReviews: number,
	},
}

const ProductReviews = ({ slug, reviewStats }: Props) => {
	const [ reviewSlice, setReviewSlice ] = useState([]);
	const [ reviewChartData, setReviewChartData ] = useState([0, 1]);

	const fetchReview = async (numReviewsRequest: number) => {
		if (numReviewsRequest < 1) return;
		const queryReview = `*[_type == "product" && slug.current == '${slug}'][0].reviews[0..${numReviewsRequest - 1}]`;
		await client.fetch(queryReview)
			.then(data => {
				setReviewSlice(data);
			})
	}

	// CSR additional data that may take longer to fetch: product reviews slice
	useEffect(() => {
		// Default fetch up to 10 reviews on load
		fetchReview(10)
			.catch(console.error);

		setTimeout(() => {
			setReviewChartData([avgReview ?? 0, 5 - (avgReview ?? 0)]);
		}, 1000);
		
	}, [reviewStats]);

	const { avgReview, numReviews } = reviewStats ?? {};

  return (
		<>
			{/* Side Panel */}
			<div className="md:sticky md:top-5 max-h-[80vh] font-raleway flex flex-col gap-5 border-[3px] border-gray-600 border-opacity-50 
				rounded-[15px] px-10 md:px-7 lg:px-10 py-5 backdrop-blur-[2px] z-30 overflow-auto">
				<div className="relative aspect-square w-[80%] sm:w-[50%] md:w-full self-center">
					<div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center space-y-1 w-full flex flex-col items-center">
						<h4 className="font-orbitron text-5xl">
							{avgReview ?? "0.0"}
						</h4>
						<StarRating rating={avgReview} starWidth={20}/>
					</div>
					<Doughnut
						width={100}
						height={100}
						datasetIdKey='id'
						options={chartOptions}
						data={{
							labels: ['Jun', 'Jul', 'Aug'],
							datasets: [
								{
									label: 'ratings',
									data: reviewChartData,
									backgroundColor: ["#74C365", "#dddddd"],
									borderColor: ["rgba(75,85,99,0.5)", "#eeeeee"],
									borderWidth: 3,
								},
							],
						}}
					/>
				</div>
				<p className="text-center">
					rating from {numReviews ?? 0} reviews
				</p>
				
			</div>


			{/* Reviews */}
			<div className="font-raleway flex flex-col row-span-2 gap-5 border-[3px] border-gray-600 border-opacity-50 
				rounded-[15px] px-10 md:px-7 lg:px-10 py-5 backdrop-blur-[2px] h-screen">
				{/* Title */}
				<div>
					<h2 className="font-orbitron text-3xl tracking-wider">hear what they say</h2>
				</div>
				
				{/* Horizontal break */}
				<hr className="w-[calc(100%+2rem)] h-[2px] border-0 bg-gray-600 self-center mt-[-1.25rem]"/>

				{/* Review display */}
				<div className="text-lg flex flex-col gap-10">
					{reviewSlice 
						? reviewSlice.map(({ name, rating, reviewText, reviewTitle }, index) => (
								<div key={index} className="flex flex-col space-y-2">
									<div className="flex justify-between">
										<h3 className="text-xl font-medium">{reviewTitle}</h3>
										<span className="font-light text-base">by {name}</span>
									</div>
									
									<div>
										<StarRating rating={rating} starWidth={20}/>
									</div>
									<p>{reviewText}</p>
								</div>
						))
						: <div>
								<p>No reviews here yet.</p>
							</div>
					}
						
				</div>
			</div>
		</>
		
  )
}

export default ProductReviews
import React, { useEffect, useState } from 'react'

import { client, urlFor } from '../../lib/client'
import { ProductDescription, ProductFeatures, ProductSolution } from '../../components/ProductDetails';
import { renderBackgroundPattern } from '../../helpers/renderCollectionColors'
import ProductDesign from '../../components/ProductDetails/ProductDesign';
import ProductReviews from '../../components/ProductDetails/ProductReviews';
import { useStateContext } from '../../context/StateContext'

export interface IReviewStats {
	avgReview: number,
	numReviews: number
}

const ProductDetails = ({ product }) => {
  const { image, name, price, details, collection, features, _id, slug, productSolution } = product;
	const { incQty, decQty, qty, onAdd } = useStateContext();

	const [ reviewStats, setReviewStats ] = useState<IReviewStats>({ avgReview: 0, numReviews: 0});

	const fetchReviewStats = async () => {
		const reviewQuery = `{
			"avgReview": math::avg(*[_type == "product" && slug.current == '${slug}'][0]
				.reviews[].rating
			),
			"numReviews": length(*[_type == "product" && slug.current == '${slug}'][0]
				.reviews[]
			),
		}`;

		await client.fetch(reviewQuery)
			.then(data => {
				setReviewStats(data);
			})
	}

	// Client-side render review stats, as sanity functions take extra computation
	useEffect(() => {
		fetchReviewStats();

	},[]);

	return (
		<div className={"w-full flex flex-col bg-[#eeeeee] items-center justify-center gap-10 " + renderBackgroundPattern(collection)}>
			{/* Top grid */}
			<div className="grid items-start grid-rows-[auto_auto_1fr] grid-cols-[minmax(0,80vw)] md:grid-cols-[3fr_2fr] 
				gap-5 px-5 md:px-10 max-w-7xl">
				{/* Image container */}
				<div className="row-span-1 border-[3px] border-gray-600 border-opacity-50 rounded-[15px] 
					overflow-hidden justify-self-end self-stretch">
					<img src={urlFor(image && image[0])} alt="product image" width={1024} height={1024}
					className="h-full w-full object-cover"/>
				</div>

				<div className="row-span-2 self-stretch">
					<div className="flex flex-col sticky top-10 gap-5">
						{/* Product description container */}
						<ProductDescription 
							name={name} 
							price={price} 
							collection={collection} 
							details={details} 
							reviewStats={reviewStats}
							incQty={incQty}
							decQty={decQty}
							qty={qty}
							onAdd={() => onAdd(product={
								name, price, _id, image
							}, qty)}
						/>
						
						{/* Features description container */}
						<ProductFeatures features={features}/>
					</div>
				</div>
				
				
				
				{/* Solution container */}
				<ProductSolution designSolutionDescription={productSolution} />
			</div>

			{/* Section break */}
			<hr className="w-1/4 h-[2px] border-0 bg-gray-600 bg-opacity-20 md:col-span-2"/>

			{/* Product collection design */}
			<div className="grid items-start grid-cols-[minmax(0,80vw)] md:grid-cols-[2fr_1fr_2fr] 
				gap-5 md:gap-y-20 px-5 md:px-10 max-w-7xl">
				<ProductDesign collection={collection}/>
			</div>

			{/* Section break */}
			<hr className="w-1/4 h-[2px] border-0 bg-gray-600 bg-opacity-20 md:col-span-2"/>

			<div className="grid items-start w-full grid-cols-[minmax(0,80vw)] md:grid-cols-[2fr_3fr] 
				gap-5 px-5 md:px-10 max-w-7xl justify-center">
				<ProductReviews slug={slug} reviewStats={reviewStats} />
			</div>
		</div>
  )
}

export const getStaticPaths = async () => {
	const query = `*[_type == "product"] {
		slug {
			current
		}
	}`

	const products = await client.fetch(query);

	const paths = products.map((product) => ({ 
		params: { 
			slug: product.slug.current
		}
	}))

	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps = async ({ params: { slug }}) => {
	// SSR relevant content: product details, solution header, basic review stats
	const query = `*[_type == "product" && slug.current == '${slug}'][0] {
			image, name, price, details, collection, features, _id, 
			"slug": slug.current,
			"productSolution": *[_type == "productDesign" && collection == ^.collection][0] {
				solutionDescription, solutionHeader, collection
			}
	}`;

	const product = await client.fetch(query);

  return {
    props: { product }
  }
}

export default ProductDetails
import React from 'react'

import { client, urlFor } from '../../lib/client'
import { ProductDescription, ProductFeatures, ProductSolution } from '../../components/ProductDetails';
import { renderBackgroundPattern } from '../../helpers/renderCollectionColors'
import ProductDesign from '../../components/ProductDetails/ProductDesign';
import ProductReviews from '../../components/ProductDetails/ProductReviews';

const ProductDetails = ({ product, products, designDetails, reviewData }) => {
	// console.log(product);
	// console.log(products);
	// console.log(designDetails);
	// console.log(reviewData);

  const { image, name, price, details, collection, features } = product;

	return (
		<div className={"w-full flex flex-col bg-[#eeeeee] items-center justify-center gap-10 " + renderBackgroundPattern(collection)}>
			{/* Top grid */}
			<div className="grid items-start grid-rows-[auto_auto_1fr] grid-cols-[minmax(0,80vw)] md:grid-cols-[3fr_2fr] 
				gap-5 px-5 md:px-10 max-w-7xl">
				{/* Image container */}
				<div className="row-span-2 border-[3px] border-gray-600 border-opacity-50 rounded-[15px] 
					overflow-hidden justify-self-end self-stretch">
					<img src={urlFor(image && image[0])} alt="product image" 
					className="h-full w-full object-cover"/>
				</div>

				{/* Product description container */}
				<ProductDescription name={name} price={price} collection={collection} details={details} reviewData={reviewData}/>
				
				{/* Features description container */}
				<ProductFeatures features={features}/>

				{/* Solution container */}
				<ProductSolution collection={collection} />
			</div>

			{/* Section break */}
			<hr className="w-1/4 h-[2px] border-0 bg-gray-600 bg-opacity-20 md:col-span-2"/>

			{/* Product collection design */}
			<div className="grid items-start grid-cols-[minmax(0,80vw)] md:grid-cols-[2fr_1fr_2fr] 
				gap-5 md:gap-y-20 px-5 md:px-10 max-w-7xl">
				<ProductDesign designDetails={designDetails?.content}/>
			</div>

			{/* Section break */}
			<hr className="w-1/4 h-[2px] border-0 bg-gray-600 bg-opacity-20 md:col-span-2"/>

			<div className="grid w-full items-start grid-cols-[minmax(0,80vw)] md:grid-cols-[2fr_3fr] 
				gap-5 px-5 md:px-10 max-w-7xl justify-center">
				<ProductReviews reviewData={reviewData}/>
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

	const products = await client.fetch(query)

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
	const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

  const queryProducts = `*[_type == "product"] {
		_id, name, image, slug, price
	}[0..4]`;

	const queryCollection = `*[_type == "product" && slug.current == '${slug}'][0] {
		collection
	}`;

	const queryReview = `{
		"avgReview": math::avg(*[_type == "product" && slug.current == '${slug}'][0]
			.reviews[].rating
		),
		"numReviews": length(*[_type == "product" && slug.current == '${slug}'][0]
			.reviews[]
		),
		"reviewSlice": *[_type == "product" && slug.current == '${slug}'][0].reviews[0..9]
	}`;

	const product = await client.fetch(query);
	const products = await client.fetch(queryProducts);
	const designDetails = await client.fetch(queryCollection)
		.then(data => {
			return client.fetch(`*[_type == "productDesign" && collection == "${data.collection}"][0]`)
		});
	const reviewData = await client.fetch(queryReview);

  return {
    props: { product, products, designDetails, reviewData }
  }
}

export default ProductDetails
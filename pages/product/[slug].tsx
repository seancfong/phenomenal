import React from 'react'

import { client, urlFor } from '../../lib/client'
import { ProductDescription, ProductFeatures } from '../../components/ProductDetails';

const renderBackgroundPattern = ( collectionString: string) => {
	switch(collectionString) {
		case 'aqua':
			return "aqua-background-pattern";
		case 'terra':
			return "topography-background-pattern";
		default:
			return "topography-background-pattern";
	}
}

const ProductDetails = ({ product, products}) => {
  const { image, name, price, details, collection } = product;

	return (
		<div className={"w-full flex bg-[#eeeeee] justify-center " + renderBackgroundPattern(collection)}>
			<div className="grid items-start grid-rows-[auto_auto_1fr] grid-cols-[minmax(0,400px)] md:grid-cols-[3fr_2fr] gap-5 px-5 md:px-10 max-w-7xl">
				{/* Image container */}
				<div className="row-span-2 border-[3px] border-gray-600 border-opacity-50 rounded-[15px] 
					overflow-hidden aspect-square justify-self-end">
					<img src={urlFor(image && image[0])} alt="product image" 
					className="max-h-full max-w-full"/>
				</div>

				{/* Product description container */}
				<ProductDescription name={name} price={price} collection={collection} details={details}/>
				
				{/* Features description container */}
				<ProductFeatures />

				{/* Features description container */}
				<ProductFeatures />

				<div className="font-raleway flex flex-col gap-5 border-[3px] border-gray-600 border-opacity-50 
					rounded-[15px] px-10 py-5 backdrop-blur-[2px] md:col-span-2 h-[90rem]">
					
				</div>

				

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
  const productsQuery = '*[_type == "product"]';

	const product = await client.fetch(query);
	const products = await client.fetch(productsQuery);

  return {
    props: { product, products }
  }
}

export default ProductDetails
import React from 'react'
import { client } from '../../lib/client'
import Product from '../Product'
import { renderCollectionColorText } from './ProductSolution'

type Props = {
	relatedProducts: Array<any>,
	collection: string
}

const ProductRelated = ({ relatedProducts, collection }: Props) => {

  return (
    <div className="flex flex-col gap-5 items-center">
		<h3 className={"font-orbitron text-2xl md:text-3xl text-center py-10 " + renderCollectionColorText(collection)}>
			{ collection ? `More from the ${collection} collection` : "More from ungrouped collections"}
		</h3>
		<div className="flex justify-center">
			<div className="grid grid-cols-[50vw] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] gap-10">
				{ relatedProducts?.map((product) => 
					<Product key={product._id} product={product} /> 
				) }
			</div>
		</div>
	</div>
  )
}

export default ProductRelated
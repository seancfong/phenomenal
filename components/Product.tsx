import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const Product = ({ product: { image, name, slug, price} }) => {
  return (
    <div className="bg-slate-300">
			<Link href={`/product/${slug.current}`}>
				<div>
					<img src={urlFor(image && image[0])} width={250} height={250} />
					<p>{name}</p>
					<p>${price}</p>
				</div>
			</Link>
    </div>
  )
}

export default Product
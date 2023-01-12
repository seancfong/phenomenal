import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../../lib/client'
import ProductDesignImage from './ProductDesignImage'

type Props = {
	collection: string
}

const ProductDesign = ({ collection }: Props) => {
	const [designDetails, setDesignDetails] = useState([]);

	// CSR additional data that may take longer to fetch: design content
	useEffect(() => {
		const query = `*[_type == "productDesign" && collection == '${collection}'][0] {
			content
		}`;

		const fetchSolution = async () => {
			await client.fetch(query)
				.then(data => {
					setDesignDetails(data.content);
				})
		}

		fetchSolution()
			.catch(console.error);
	}, []);

	return (
		<>
			{designDetails?.map(({ header, content, imageSrc }, index) =>
				<React.Fragment key={index}>
					{/* Even entries */}
					{ index % 2 == 0 && (
						<>
							<div className="self-stretch">
								<div className="font-raleway text-xl flex flex-col gap-5 border-[3px] border-gray-600 border-opacity-50 
								rounded-[15px] px-10 py-5 backdrop-blur-[2px] md:col-span-1 items-end md:sticky md:top-[45vh]">
									<h4 className="font-orbitron lowercase text-2xl tracking-wider">
										{header}
									</h4>

									{/* Horizontal break */}
									<hr className="w-[calc(100%+2rem)] h-[2px] border-0 bg-gray-600 self-center mt-[-1.25rem]"/>

									<p className="text-right">
										{content}
									</p>
								</div>
							</div>
							
							<ProductDesignImage imgSrc={urlFor(imageSrc && imageSrc[0])}/>
							
						</>
						
					)}
	
					{ index % 2 != 0 && (
						<>
							<ProductDesignImage imgSrc={urlFor(imageSrc && imageSrc[0])}/>

							<div className="self-stretch">
								<div key={index} className="font-raleway text-xl flex flex-col gap-5 border-[3px] border-gray-600 border-opacity-50 
								rounded-[15px] px-10 py-5 backdrop-blur-[2px] md:col-span-1 self-stretch md:sticky md:top-[45vh]">
									<h4 className="font-orbitron lowercase text-2xl tracking-wider">
										{header}
									</h4>

									{/* Horizontal break */}
									<hr className="w-[calc(100%+2rem)] h-[2px] border-0 bg-gray-600 self-center mt-[-1.25rem]"/>

									<p>
										{content}
									</p>
								</div>
							</div>
							
						</>
						
					)}
				</React.Fragment>
				
			)}
		</>
		
    
  )
}

export default ProductDesign
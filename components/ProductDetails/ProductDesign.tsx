import React from 'react'
import { urlFor } from '../../lib/client'

interface productDesignContent {
	header: string,
	content: string,
	imageSrc: Array<any>
}

type Props = {
	designDetails: Array<productDesignContent>
}

const ProductDesign = ({ designDetails }: Props) => {
	return (
		<>
			{designDetails?.map(({ header, content, imageSrc }, index) =>
				<React.Fragment key={index}>
					{/* Even entries */}
					{ index % 2 == 0 && (
						<>
							<div className="self-stretch">
								<div className="font-raleway text-xl flex flex-col gap-5 border-[3px] border-gray-600 border-opacity-50 
								rounded-[15px] px-10 py-5 backdrop-blur-[2px] md:col-span-1 items-end sticky top-[30vh]">
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
							

							<div className="aspect-[4/3] overflow-auto rounded-[15px] md:col-span-2 mb-20 md:mb-0">
								<img src={urlFor(imageSrc && imageSrc[0])} alt="Product Design Image" className="w-full h-full object-cover"/>
							</div>
						</>
						
					)}
	
					{ index % 2 != 0 && (
						<>
							<div className="aspect-[4/3] overflow-auto rounded-[15px] md:col-span-2 ">
								<img src={urlFor(imageSrc && imageSrc[0])} alt="Product Design Image" className="h-full w-full object-cover" />
							</div>

							<div className="self-stretch">
								<div key={index} className="font-raleway text-xl flex flex-col gap-5 border-[3px] border-gray-600 border-opacity-50 
								rounded-[15px] px-10 py-5 backdrop-blur-[2px] md:col-span-1 self-stretch mb-20 md:mb-0 sticky top-[30vh]">
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
import React from 'react'
import {PortableText} from '@portabletext/react'

export const renderCollectionColorText = ( collectionString: string) => {
	switch(collectionString) {
		case 'aqua':
			return "text-aqua";
		case 'terra':
			return "text-terra";
		default:
			return "text-collectiongeneric";
	}
}

type Props = {
	designDetails: {
		collection: string,
		solutionHeader: string,
		solutionDescription: Array<any>
	}
}

const ProductSolution = ({ designDetails }: Props) => {
	console.log(designDetails);

  return (
    <div className="font-raleway flex flex-col gap-5 border-[3px] border-gray-600 border-opacity-50 
			rounded-[15px] px-10 md:px-7 lg:px-10 py-5 backdrop-blur-[2px] text-right self-stretch">
			{/* Title */}
			<div>
				<h2 className="font-orbitron text-2xl tracking-wider">
					{(designDetails?.solutionHeader ?? "discover what's phenomenal.")}
				</h2>
			</div>

			{/* Horizontal break */}
			<hr className="w-[calc(100%+2rem)] h-[2px] border-0 bg-gray-600 self-center mt-[-1.25rem]"/>

			{/* Testimonial text */}
			<h3 className={"text-xl font-orbitron tracking-wider " + renderCollectionColorText(designDetails?.collection)}>
				We're all about creating anything out of the ordinary. 
			</h3>
			{designDetails?.solutionDescription 
				? <PortableText value={designDetails?.solutionDescription}/> 
				: `This is how we create the most innovative and creative products just for you.`
			}
			
		</div>
  )
}

export default ProductSolution

// The aqua collection provides a comfortable and safe home for your aquatic friends, while also offering an attractive design to enhance the aesthetics of your home or office! <br/><br/> We've put a lot of thought into innovation and functionality. That's why we've designed our aquarium cases with the specific features in mind:
import React from 'react'
import { renderCollectionColorText } from '../../helpers/renderCollectionColors'

const renderSolutionTitle = ( collectionString: string) => {
	switch(collectionString) {
		case 'aqua':
			return "bring the sea to your setup.";
		case 'terra':
			return "the most powerful greenhouse.";
		default:
			return "discover what's extraordinary.";
	}
}

type Props = {
	collection: string
}

const ProductSolution = ({ collection }: Props) => {
  return (
    <div className="font-raleway flex flex-col gap-5 border-[3px] border-gray-600 border-opacity-50 
			rounded-[15px] px-10 md:px-7 lg:px-10 py-5 backdrop-blur-[2px] text-right">
			{/* Title */}
			<div>
				<h2 className="font-orbitron text-2xl tracking-wider">
					{renderSolutionTitle(collection)}
				</h2>
			</div>

			{/* Horizontal break */}
			<hr className="w-[calc(100%+2rem)] h-[2px] border-0 bg-gray-600 self-center mt-[-1.25rem]"/>

			{/* Testimonial text */}
			<h3 className={"text-xl font-orbitron tracking-wider " + renderCollectionColorText(collection)}>
				We're all about making PC cases that are out of the ordinary. 
			</h3>
			<p>
				The aqua collection provides a comfortable and safe home for your aquatic friends, 
				while also offering an attractive design to enhance the aesthetics of your home or office! 
			</p>
			<p>
				We've put a lot of thought into innovation and functionality.
				That's why we've designed our aquarium cases with the specific features in mind:
			</p>
		</div>
  )
}

export default ProductSolution
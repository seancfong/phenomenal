import React from 'react'
import Image from 'next/image'

type Props = {
	rating: number,
	starWidth: number
}

const StarRating = ({ rating, starWidth }: Props) => {
	const stars = [];

	for (let curStar = 1; curStar <= 5; curStar++) {
		if ( curStar <= rating ) {
			stars.push(<Image src="/star_full.svg" alt="star full" height={30} width={starWidth} key={curStar}/>);  // full stars
		} else if ( (curStar - rating > 0) && (curStar - rating < 1) ) {
			stars.push(<Image src="/star_half.svg" alt="star half" height={30} width={starWidth} key={curStar}/>);  // half star
		} else {
			stars.push(<Image src="/star_empty.svg" alt="star empty" height={30} width={starWidth} key={curStar}/>);  // empty star
		}
		
	}

  return (
    <div className="flex flex-row text-xl gap-1 items-center">
			{stars.map((star) => star)}
		</div>
  )
}

export default StarRating
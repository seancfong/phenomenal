import React from 'react'

type Props = {
	rating: number,
	starWidth: number
}

const StarRating = ({ rating, starWidth }: Props) => {
	const stars = [];

	for (let curStar = 1; curStar <= 5; curStar++) {
		if ( curStar < rating ) {
			stars.push(<img src="/star_full.svg" width={starWidth} key={curStar}/>);  // full stars
		} else if ( (curStar - rating > 0) && (curStar - rating < 1) ) {
			stars.push(<img src="/star_half.svg" width={starWidth} key={curStar}/>);  // half star
		} else {
			stars.push(<img src="/star_empty.svg" width={starWidth} key={curStar}/>);  // empty star
		}
		
	}

  return (
    <div className="flex flex-row text-xl gap-1 items-center">
			{stars.map((star) => star)}
		</div>
  )
}

export default StarRating
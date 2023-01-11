export const renderBackgroundPattern = ( collectionString: string) => {
	switch(collectionString) {
		case 'aqua':
			return "aqua-background-pattern";
		case 'terra':
			return "topography-background-pattern";
		default:
			return "topography-background-pattern";
	}
}

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
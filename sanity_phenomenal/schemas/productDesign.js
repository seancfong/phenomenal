import { collectionList } from './schemaData.json'

export default {
	name: 'productDesign',
	title: 'Product Design',
	type: 'document',
	fields: [
		{
			name: 'collection',
			title: 'Collection',
			type: 'string',
			options: {
				list: collectionList
			},
		},
		{
			name: 'solutionHeader',
			title: 'Solution Header',
			type: 'string'
		},
		{
			name: 'solutionDescription',
			title: 'Solution Description',
			type: 'array', 
			of: [{type: 'block'}]
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'productDesignContent' }]
		}
	]
}
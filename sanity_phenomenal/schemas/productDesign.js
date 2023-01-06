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
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'productDesignContent' }]
		}
	]
}
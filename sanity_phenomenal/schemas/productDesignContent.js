export default {
	name: 'productDesignContent',
	title: 'Product Design Content',
	type: 'object',
	fields: [
		{
			name: 'imageSrc',
			title: 'Image Source',
			type: 'array',
			of: [{ type: 'image' }],
			options: {
				hotspot: true,
			}
		},
		{
			name: 'header',
			title: 'Header',
			type: 'string'
		},
		{
			name: 'content',
			title: 'Content',
			type: 'text'
		}
	]
}
    

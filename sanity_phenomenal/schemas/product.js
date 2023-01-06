import { collectionList } from './schemaData.json'

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'collection',
        title: 'Collection',
        type: 'string',
        options: {
          list: collectionList
        },
      },
      { 
        name: 'details',
        title: 'Details',
        type: 'string',
      },
      { 
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [{type: 'string'}]
      },
      { 
        name: 'reviews',
        title: 'Reviews',
        type: 'array',
        of: [{type: 'productReview'}]
      }
    ]
  }
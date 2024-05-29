export const post = {
	name: 'post',
	title: 'Post',
	type: 'document',

	// fields for post schema
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule: Rule) => Rule.required().error('A title is required'),
		},
		{
			name: 'slug', // slug is the URL-friendly version of the title
			title: 'Slug',
			type: 'slug', // slug type is a type from Sanity
			options: {
				source: 'title', // slug will be generated from the title field
			},
			validation: (Rule: Rule) => Rule.required().error('A slug is required'),
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
			initialValue: () => new Date().toISOString(),
		},
		// {
		// 	name: 'mainImage',
		// 	title: 'Main image',
		// 	type: 'image',
		// },
		{
			name: 'excerpt',
			title: 'Excerpt',
			type: 'text',
			validation: (Rule: Rule) => Rule.max(200).warning('Max 200 characters'),
		},
		{
			name: 'body',
			title: 'Body',
			type: 'array',
			of: [
				{ type: 'block' },
				{
					type: 'image',
					fields: [
						{
							type: 'text',
							name: 'alt',
							title: 'Alternative text',
							options: { isHighlighted: true },
						},
					],
				},
			],
		},
		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [
				{
					// array of references to tags
					type: 'reference',
					to: [{ type: 'tag' }],
				},
			],
		},
	],
};

import { defineType } from 'sanity';
export const tag = defineType({
	name: 'tag',
	title: 'Tag',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (Rule) => Rule.required().error('A name is required'),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
			},
		},
	],
});

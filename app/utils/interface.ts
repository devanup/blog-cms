export interface Post {
	title: string;
	slug: string;
	publishedAt: string;
	excerpt: string;
	body: any;
	tags: Array<Tag>;
	_id: string;
	headings?: Array<HTMLHeadElement | string>;
	comments?: Array<Comment>;
}

export interface Tag {
	name: string;
	slug: string;
	_id: string;
}

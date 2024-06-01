import Header from '@/app/components/Header';
import { Post } from '@/app/utils/interface';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from 'next-sanity';
import { VT323 } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { notFound } from 'next/navigation';

const dateFont = VT323({ weight: '400', subsets: ['latin'] });

interface Params {
	params: {
		slug: string;
	};
}

async function getPost(slug: string) {
	const query = `
	*[_type=="post" && slug.current == "${slug}"][0]{ // returns an array of objects, but we're making sure we only get one object.
		title,
		slug,
		publishedAt,
		excerpt,
		_id,
		body,
		  tags[]->{
			_id,
			slug,
			name
		  }
	  }
	`;
	const post = await client.fetch(query);
	return post;
}

export const revalidate = 60; // NextJS automatically does the caching for us. This will revalidate the page every 60 seconds to get the latest data.

const page = async ({ params }: Params) => {
	// Every route has its own params object. slug is contained in the params object.
	const post: Post = await getPost(params?.slug);
	// console.log('The post: ', post);
	// console.log('Body: ', post?.body);
	if (!post) {
		return notFound();
	}
	return (
		<div>
			<Header title={post?.title} />
			<div className='text-center'>
				<span className={`${dateFont?.className} text-purple-500`}>
					{new Date(post?.publishedAt).toDateString()}
				</span>
				<div className='mt-5'>
					{post?.tags.map((tag) => (
						<Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
							<span className='mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900'>
								#{tag?.name}
							</span>
						</Link>
					))}
				</div>
				{/*  */}
				<div className={richTestStyles}>
					<PortableText
						value={post?.body}
						components={myPortableTextComponents}
					/>
				</div>
			</div>
		</div>
	);
};

export default page;

const myPortableTextComponents = {
	types: {
		image: ({ value }: any) => (
			<Image
				// src={urlForImage(value).url()}
				src={urlForImage(value)}
				alt='Post Image'
				width={700}
				height={700}
			/>
		),
	},
};

const richTestStyles =
	'mt-14 text-justify max-w-2xl mx-auto prose-headings:my-5 prose-headings:text-2xl prose-p:mb-5 prose-p:leading-7 prose-li:list-disc prose-li:leading-7 prose-li:ml-4';

import { client } from '@/sanity/lib/client';
import Header from '../components/Header';
import { Post } from '../utils/interface';
import PostComponent from '../components/PostComponent';

async function getPosts() {
	// Server-side
	const query = `
	*[_type=="post"]{
		title,
		slug,
		publishedAt,
		excerpt,
		tags[]->{
			_id,
			slug,
			name
		  }
	  }
	`;
	const data = await client.fetch(query);
	return data;
}

export const revalidate = 60; // NextJS automatically does the caching for us. This will revalidate the page every 60 seconds to get the latest data.

export default async function Home() {
	const posts: Post[] = await getPosts();
	console.log(posts);
	return (
		<div>
			<Header title={'Articles'} tags />
			<div>
				{posts?.length > 0 &&
					posts.map((post) => <PostComponent key={post?._id} post={post} />)}
			</div>
		</div>
	);
}

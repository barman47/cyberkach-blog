import { Metadata } from 'next';
import Blog from './Blog';

export const metadata: Metadata = {
    title: 'Blog | CyberKach.com',
    description: 'Learn key cyber security concepts and develop cyber skills by visiting the CyberKach blog.',
}

async function getPosts (page: number, limit: number) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/posts/?page=${page}&limit=${limit}`, { next: {
		revalidate: 60
	} });
   
	if (!res.ok) {
	  // This will activate the closest `error.js` Error Boundary
	//   throw new Error('Failed to fetch data')
		console.error('Error ', res);
	}
	return res.json();
}

const BlogPage: React.FC<{}> = async () => {
    const res = await getPosts(1, 25);
    return (
        <Blog posts={res.data} pagination={res.pagination} />
    );
};

export default BlogPage;
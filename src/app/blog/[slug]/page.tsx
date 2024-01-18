import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Post from './Post';
import { Post as PostData } from '@/interfaces';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/posts/slug/${slug}`);

    if (!res.ok) {
        return notFound();
    }

    const data = await res.json();
    const post: PostData = data.data;

    const  title = post.title;
    const  description = post.body.slice(0, 161);
   
    return {
        title: `${post.title} | CyberKach.com`,
        description: post.title.slice(0, 161),
        openGraph: {
            images: [post.imageUrl],
        },
        twitter: {
            title,
            card: "summary",
            description,
            creator: 'CyberKach',
            images: {
                url: post.imageUrl,
                alt: post.slug,
            }
        }
    }
}

export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/posts/approved`);

    const postData = await res.json();
    const posts: PostData[] = postData.data;

    return posts.map((post: PostData) => ({ _id: post._id }))
}

async function getPostBySlug (slug: string) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/posts/slug/${slug}`, { next: { 
        revalidate: 60
    } });
   
	if (!res.ok) {
	    notFound();
	}
	return res.json();
}

async function getPosts (page: number, limit: number) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/posts/?page=${page}&limit=${limit}`);
   
	if (!res.ok) {
	  // This will activate the closest `error.js` Error Boundary
	//   throw new Error('Failed to fetch data')
		console.error('Error ', res);
	}
	return res.json();
}

interface Props {
    params: {
        slug: string;
    }
}

const SingleBlogPage: React.FC<Props> = async ({ params }) => {
    const  { slug } = params;
    const res = await getPostBySlug(slug);
    const post = res.data;
    const postsResponse = await getPosts(1, 5);
    return (
        <Post post={post} posts={postsResponse.data} />
    );
};
export default SingleBlogPage;
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Post from '@/app/blog/[slug]/Post';
import { Post as PostData } from '@/interfaces';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/posts/slug/${slug[3]}`);

    if (!res.ok) {
        return notFound();
    }

    const data = await res.json();
    const post: PostData = data.data;

    const  title = post.title;
    const  description = post.title.slice(0, 161);
   
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

async function getOldPostBySlug (year: string, month: string, day: string, slug: string) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/posts/old/${year}/${month}/${day}/${slug}`, { next: { 
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
        slug: string[];
    }
}
// This page should catch routes like this
// https://cyberkach.com/2020/02/05/phishing/

const SingleBlogPage: React.FC<Props> = async ({ params }) => {
    const  { slug } = params;
    if (slug.length !== 4) {
        return notFound();
    }
    const [ year, month, day, postSlug ] = slug;

    const res = await getOldPostBySlug(year, month, day, postSlug);
    const post = res.data;
    const postsResponse = await getPosts(1, 5);

    return (
        <Post post={post} posts={postsResponse.data} />
    );
};
export default SingleBlogPage;
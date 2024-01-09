import { Box } from '@mui/material';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Newsletter from './Newsletter';
import Blog from './Blog';

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

const Home: React.FC<{}> = async () => {
    const res = await getPosts(1, 15);

    return (
        <Box component="main">
            <Hero />
            <Blog posts={res.data} />
            <Newsletter />
            <AboutUs />
        </Box>
    );
};

export default Home;
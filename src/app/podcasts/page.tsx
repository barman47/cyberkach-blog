import { Metadata } from 'next';

import Podcasts from './Podcasts';

export const metadata: Metadata = {
    title: 'Podcasts | CyberKach.com',
    description: 'The CyberKach Podcast features fun, entertaining, educative, and mind-blowing discussions with cyber security subject matter expects.',
}

async function getPodcasts () {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/podcasts`, { next: {
		revalidate: 60
	} });
   
	if (!res.ok) {
	  // This will activate the closest `error.js` Error Boundary
	//   throw new Error('Failed to fetch data')
		console.error('Error ', res);
	}
	return res.json();
}

const PodcastsPage: React.FC<{}> = async () => {
    const res = await getPodcasts();

    return (
        <Podcasts podcasts={res.data} />
    );
};

export default PodcastsPage;
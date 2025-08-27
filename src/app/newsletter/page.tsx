import { Metadata } from 'next';
import Newsletter from './Newsletter';

export const metadata: Metadata = {
    title: 'Subscribe to the Cyberkach Cybersecurity Newsletter | Cyberkach.com',
    description: 'Subscribe to the Cyberkach newsletter for the latest insights, trends, and tips in cybersecurity. Stay informed and strengthen your cyber resilience.',
}

const NewsletterPage: React.FC<{}> = () => {
    return (
        <Newsletter />
    );
};

export default NewsletterPage;
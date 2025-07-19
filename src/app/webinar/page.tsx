import { Metadata } from 'next';
import Webinar from './Webinar';

export const metadata: Metadata = {
    title: 'Thank you for Attending the Cyberkach AI Webinar Series - Policy Pack | Cyberkach.com'
}

const WebinarPage: React.FC<{}> = () => {
    return (
        <Webinar />
    );
};

export default WebinarPage;
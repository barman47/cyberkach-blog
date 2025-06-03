import { Metadata } from 'next';
import Webinar from './Webinar';

export const metadata: Metadata = {
    title: 'The Cyberkach AI Security Webinar Series - Register | Cyberkach.com'
}

const WebinarPage: React.FC<{}> = () => {
    return (
        <Webinar />
    );
};

export default WebinarPage;
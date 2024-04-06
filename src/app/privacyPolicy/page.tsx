import { Metadata } from 'next';
import PrivacyPolicy from './PrivacyPolicy';

export const metadata: Metadata = {
    title: 'Privacy Policy | Cyberkach.com'
}

const PrivacyPolicyPage: React.FC<{}> = () => {
    return (
        <PrivacyPolicy />    
    );
}

export default PrivacyPolicyPage;
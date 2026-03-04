import { Metadata } from 'next';
import IdentityThreatReport from './IdentityThreatReport';

export const metadata: Metadata = {
    title: '2026 Identity Threat Report - The Industrialisation of Access-Based Attacks | Cyberkach.com',
    description: 'Explore how stolen credentials, access brokers, and MFA bypass techniques are reshaping cybersecurity in 2026 in Cyberkach’s Identity Threat Report',
}

const IdentityThreatReportPage: React.FC<{}> = () => {
    return (
        <IdentityThreatReport />
    );
};

export default IdentityThreatReportPage;
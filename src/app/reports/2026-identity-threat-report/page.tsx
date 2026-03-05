import { Metadata } from 'next';
import IdentityThreatReport from './IdentityThreatReport';

const title = '2026 Identity Threat Report - The Industrialisation of Access-Based Attacks | Cyberkach.com';
const description = "Explore how stolen credentials, access brokers, and MFA bypass techniques are reshaping cybersecurity in 2026 in Cyberkach's Identity Threat Report";

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        images: ['https://storage.googleapis.com/cyberkach_posts/CYBERKACH_FEBRUARY_REPORT_2026_Identity_Threat_Report.png'],
    },
    twitter: {
        title,
        card: "summary",
        description,
        creator: 'Cyberkach',
        images: {
            url: 'https://storage.googleapis.com/cyberkach_posts/CYBERKACH_FEBRUARY_REPORT_2026_Identity_Threat_Report.png',
            alt: '2026 Identity Threat Report'
        }
    }
}

const IdentityThreatReportPage: React.FC<{}> = () => {
    return (
        <IdentityThreatReport />
    );
};

export default IdentityThreatReportPage;
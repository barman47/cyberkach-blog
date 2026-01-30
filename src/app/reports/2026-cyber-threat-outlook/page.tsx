import { Metadata } from 'next';
import CyberThreatOutlook from './CyberThreatOutlook';

export const metadata: Metadata = {
    title: '2026 Cyber Threat Outlook Report | Cyberkach.com',
    description: 'An evidence-based analysis of major cyber incidents in 2025 and the emerging cyber threats to shape 2026. Includes ransomware, supply chain attacks, AI-enabled threats, and geopolitical risk.',
}

const CyberThreatOutlookPage: React.FC<{}> = () => {
    return (
        <CyberThreatOutlook />
    );
};

export default CyberThreatOutlookPage;
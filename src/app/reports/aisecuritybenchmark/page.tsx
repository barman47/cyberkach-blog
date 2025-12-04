import { Metadata } from 'next';
import AiSecurityBenchmark from './AiSecurityBenchmark';

export const metadata: Metadata = {
    title: 'Low Confidence, High Risk - AI Security Readiness Report | Cyberkach.com',
    description: 'Download Cyberkach\'s "Low Confidence, High Risk" report benchmarking organizational AI security readiness. Discover key risks, blind spots, and practical security actions.',
}

const AiSecurityBenchmarkPage: React.FC<{}> = () => {
    return (
        <AiSecurityBenchmark />
    );
};

export default AiSecurityBenchmarkPage;
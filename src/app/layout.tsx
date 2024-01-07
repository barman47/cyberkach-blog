import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import ThemeRegistry from './ThemeRegistry';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyPopup from './(home)/PrivacyPopup';

const inter = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  	title: 'Cyber Security at your finger tips | CyberKach.com',
  	description: 'CyberKach is a security consulting firm which assists clients achieve effective cyber programs and provides security awareness trainings.',
}

interface Props {
	children: React.ReactElement;
	params: { id: string };
}

export default function RootLayout({
  children
}: Props) {
	return (
		<html lang="en">
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			</head>
			<body className={inter.className}>
				<ThemeRegistry options={{ key: 'mui' }}>
					<Header />
					{children}
					<Footer />
					<PrivacyPopup />
					<Toaster />
				</ThemeRegistry>
			</body>
		</html>
	);
}

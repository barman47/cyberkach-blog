import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Quicksand } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import ThemeRegistry from './ThemeRegistry';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyPopup from './(home)/PrivacyPopup';
import { Providers } from '@/redux/Provider';

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  	title: 'Cyber Security at your finger tips | Cyberkach.com',
  	description: 'Cyberkach is a security consulting firm which assists clients achieve effective cyber programs and provides security awareness trainings.',
}

interface Props {
	children: React.ReactNode;
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
				<meta name="google-adsense-account" content="ca-pub-7972918809582149"></meta>
			</head>
			<body className={quicksand.className}>
				<Providers>
					<ThemeRegistry options={{ key: 'mui' }}>
						<Header />
						{children}
						<Footer />
						<PrivacyPopup />
						<Toaster />
					</ThemeRegistry>
				</Providers>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}

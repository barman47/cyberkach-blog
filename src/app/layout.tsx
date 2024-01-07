import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import ThemeRegistry from './ThemeRegistry';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  	title: 'Create Next App',
  	description: 'Generated by create next app',
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
					{/* <AppLayout> */}
					{children}
					{/* </AppLayout> */}
				</ThemeRegistry>
			</body>
		</html>
	);
}

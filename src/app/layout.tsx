import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({
	subsets: ['latin'],
});

export const metadata = {
	title: 'Landing Test',
	description: 'Responsive landing page built with Next.js',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='h-full'>
			<body
				className={`${inter.className} min-h-full flex flex-col antialiased`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}

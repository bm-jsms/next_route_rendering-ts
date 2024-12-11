import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
	title: 'Next News',
	description: 'Check out the latest news ',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}

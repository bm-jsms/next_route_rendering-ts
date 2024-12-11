import type { Metadata } from 'next';
import '../globals.css';
import { MainHeader } from '@/components';

export const metadata: Metadata = {
	title: 'Next News | News Site For The Next Generation',
	description: 'Check out the latest news around the world',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<div id='page'>
					<MainHeader />
					{children}
				</div>
			</body>
		</html>
	);
}

'use client';

import { NavLink } from '@/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const MainHeader = () => {
	return (
		<header id='main-header'>
			<div id='logo'>
				<Link href='/'>NextNews</Link>
			</div>
			<nav>
				<ul>
					<li>
						<NavLink href='/news'>News</NavLink>
					</li>
					<li>
						<NavLink href='/archive'>Archive</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

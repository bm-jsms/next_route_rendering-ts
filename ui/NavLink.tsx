import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
	href: string;
	children: React.ReactNode;
};

export const NavLink = ({ href, children }: NavLinkProps) => {
	const pathname = usePathname();

	return (
		<Link href={href} className={pathname === href ? 'active' : undefined}>
			{children}
		</Link>
	);
};

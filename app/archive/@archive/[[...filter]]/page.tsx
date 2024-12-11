import { NewsList } from '@/components';
import {
	getAvailableNewsMonths,
	getAvailableNewsYears,
	getNewsForYear,
	getNewsForYearAndMonth,
} from '@/lib';
import Link from 'next/link';

type FilteredNewsPageProps = {
	params: {
		filter: string;
	};
};

const FilteredNewsPage = async ({ params }: FilteredNewsPageProps) => {
	const filter = (await params).filter;

	const selectedYear = filter?.[0];
	const selectedMonth = filter?.[1];

	let news;
	let links = getAvailableNewsYears();

	if (selectedYear && !selectedMonth) {
		news = getNewsForYear(selectedYear);
		links = getAvailableNewsMonths(selectedYear);
	}

	if (selectedYear && selectedMonth) {
		news = getNewsForYearAndMonth(selectedYear, selectedMonth);
		links = [];
	}

	let newsContent = <p>No news found for selected period</p>;

	if (news && news.length > 0) newsContent = <NewsList news={news} />;

	if (
		(selectedYear && !getAvailableNewsYears().includes(Number(selectedYear))) ||
		(selectedMonth &&
			!getAvailableNewsMonths(selectedYear).includes(Number(selectedMonth)))
	) {
		throw new Error(`Invalid filter`);
	}

	return (
		<>
			<header id='archive-header'>
				<nav>
					<ul>
						{links.map((link) => {
							const href = selectedYear
								? `/archive/${selectedYear}/${link}`
								: `/archive/${link}`;
							return (
								<li key={link}>
									<Link href={href}>{link}</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</header>
			{newsContent}
		</>
	);
};

export default FilteredNewsPage;

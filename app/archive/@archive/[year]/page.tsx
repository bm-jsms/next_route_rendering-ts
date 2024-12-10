import { NewsList } from '@/components';
import { getNewsForYear } from '@/lib';

type FilteredNewsPageProps = {
	params: {
		year: string;
	};
};

const FilteredNewsPage = async ({ params }: FilteredNewsPageProps) => {
	const resolveParam = await params;
	const newsYear = resolveParam.year;

	const news = getNewsForYear(newsYear);

	return <NewsList news={news} />;
};

export default FilteredNewsPage;

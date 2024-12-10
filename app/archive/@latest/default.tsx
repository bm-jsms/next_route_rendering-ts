import { NewsList } from '@/components';
import { getLatestNews } from '@/lib';

const LatestNewsPage = () => {
	const latestNews = getLatestNews();

	return (
		<>
			<h1>Latest News Page</h1>
			<NewsList news={latestNews} />
		</>
	);
};

export default LatestNewsPage;

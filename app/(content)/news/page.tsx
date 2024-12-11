import Link from 'next/link';

import { DUMMY_NEWS } from '@/shared';
import { NewsList } from '@/components';

const NewsPage = () => {
	return (
		<>
			<h1>News Page</h1>
			<NewsList news={DUMMY_NEWS} />
		</>
	);
};

export default NewsPage;

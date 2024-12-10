import Link from 'next/link';

import { DUMMY_NEWS } from '@/shared';

const NewsPage = () => {
	return (
		<>
			<h1>News Page</h1>
			<ul className='news-list'>
				{DUMMY_NEWS.map((news) => {
					return (
						<li key={news.id}>
							<Link href={`/news/${news.slug}`}>
								<img src={`/images/news/${news.image}`} alt={news.title} />
								<span>{news.title}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default NewsPage;
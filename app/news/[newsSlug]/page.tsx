import { DUMMY_NEWS } from '@/shared';
import { notFound } from 'next/navigation';

type NewsDetailPageProps = {
	params: {
		newsSlug: string;
	};
};

const NewsDetailPage = async ({ params }: NewsDetailPageProps) => {
	const resolveParam = await params;
	const newsId = resolveParam.newsSlug;

	const newsItem = DUMMY_NEWS.find((news) => news.slug === newsId);

	if (!newsItem) {
		notFound();
	}

	return (
		<article className='news-article'>
			<header>
				<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				<h1>{newsItem.title}</h1>
				<time dateTime={newsItem.date}>{newsItem.date}</time>
			</header>
			<p>{newsItem.content}</p>
		</article>
	);
};

export default NewsDetailPage;

import { DUMMY_NEWS } from '@/shared';
import { notFound } from 'next/navigation';

type ImagePageProps = {
	params: {
		newsSlug: string;
	};
};

const ImagePage = async ({ params }: ImagePageProps) => {
	const newItemSlug = (await params).newsSlug;
	const newsItem = DUMMY_NEWS.find((news) => news.slug === newItemSlug);

	if (!newsItem) {
		notFound();
	}
	return (
		<div className='fullscreen-image'>
			<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
		</div>
	);
};

export default ImagePage;

'use client';

import { DUMMY_NEWS } from '@/shared';
import { notFound, useRouter } from 'next/navigation';
import { use } from 'react';

type ImagePageProps = {
	params: Promise<{ newsSlug: string }>;
};

const InterceptedImagePage = ({ params }: ImagePageProps) => {
	const router = useRouter();

	const { newsSlug: newItemSlug } = use(params);
	const newsItem = DUMMY_NEWS.find((news) => news.slug === newItemSlug);

	if (!newsItem) {
		notFound();
	}
	return (
		<>
			<div className='modal-backdrop' onClick={router.back} />
			<dialog className='modal' open>
				<div className='fullscreen-image'>
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				</div>
			</dialog>
		</>
	);
};

export default InterceptedImagePage;

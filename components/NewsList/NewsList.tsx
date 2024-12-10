import type { DummyNewsType } from '@/types/DummyNews.type';
import Link from 'next/link';

type Props = {
	news: DummyNewsType[];
};

export const NewsList = ({ news }: Props) => {
	return (
		<ul className='news-list'>
			{news.map((newItem: DummyNewsType) => {
				return (
					<li key={newItem.id}>
						<Link href={`/news/${newItem.slug}`}>
							<img src={`/images/news/${newItem.image}`} alt={newItem.title} />
							<span>{newItem.title}</span>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

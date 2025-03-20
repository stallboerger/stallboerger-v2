import { format, parseISO } from 'date-fns'
import type { Metadata } from 'next';
import { compareDesc } from 'date-fns';
import { allThoughts } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Thoughts'
};

const thoughts = allThoughts.sort((a, b) =>
	compareDesc(new Date(a.date), new Date(b.date))
);

export default function ThoughtsPage() {
	return (<>
		<header className='h-full col-span-full md:col-span-12 lg:col-span-8 mb-20 lg:mb-0'>
			<div className='lg:sticky lg:top-8 lg:self-start'>
				<h1>Thoughts</h1>
				<p>{allThoughts.length} articles</p>
			</div>
		</header>
		
		{thoughts.map((post, key) => (
			<Link
				id={post.slug}
				key={key}
				className='col-span-full md:col-span-8 lg:col-span-4 text-sand-12 dark:text-sand-dark-12 mb-6 md:mb-0 md:first-of-type:col-span-8 no-underline group'
				href={`/thoughts/${post.slug}`}
			>
				<Image 
					src={`/images/thoughts/${post.image}`}
					alt={post.title}
					width="593" 
					height="305"
					className='mb-2 w-full shadow-[0_0_0_1px_rgba(0,0,0,0.08)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)] overflow-hidden' />
				<h3 className='font-bold underline underline-offset-2 decoration-[1.5px] decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-950 dark:hover:decoration-neutral-50 focus:ring-2 focus:ring-offset-2 focus:rounded-none outline-hidden ring-blue-500 ring-offset-neutral-50 dark:ring-offset-neutral-950'>{post.title}</h3>
				<time className='block md:opacity-0 md:translate-y-[2px] md:duration-200 md:ease-in-out md:group-hover:translate-y-0 md:group-hover:opacity-100'>{format(parseISO(post.date), 'LLLL d, yyyy')}</time>
			</Link>
		))}
	</>)
}

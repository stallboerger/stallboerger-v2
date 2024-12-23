import type { Metadata } from 'next';
import Image from 'next/image';

import { format, isAfter } from 'date-fns';
import LiteralBooks from '@/components/books';

export const metadata: Metadata = {
  title: 'About',
};

interface Experience {
	company: string;
	role?: string;
	start: Date;
	end?: Date;
	description?: string;
	url?: string;
}

const experiences: Experience[] = [
	{
		company: 'Saman Collective',
		description: 'The combined efforts of Linus Rogge and me, forming intuitive and reflective software and brands.',
		url: 'https://saman.design',
		start: new Date('2023-10-01')
	},
	{
		company: 'Freelance',
		start: new Date('2023-06-15'),
		description: 'Available for projects.',
		url: 'mailto:hi@antonstallboerger.com'
	},
	{
		company: 'Essentry',
		role: 'Internship',
		start: new Date('2023-08-01'),
		end: new Date('2024-01-31'),
		description: 'Streamlining the company’s visual appearance and crafting a versatile and sustainable design system.',
		url: 'https://essentry.com'
	},
	{
		company: 'CREATE Education',
		role: 'Internship',
		start: new Date('2021-02-01'),
		end: new Date('2021-06-30'),
	},
	{
		company: 'UP Design',
		role: 'Internship',
		start: new Date('2018-08-01'),
		end: new Date('2018-08-30'),
	}
]

export default function AboutPage() {
	return (
	<>
		<figure className="sm:mt-[calc(-180px_+_53px+32px)] col-span-4 aspect-[4_/_5] bg-sand-2 dark:bg-sand-dark-2 mt-[calc(-140px_+_53px_+_16px)]">
			<Image 
				src={`/images/about/anton-1.jpeg`}
				alt={`Anton Stallbörger`}
				width="1920" 
				height="305"
				className="w-full h-full object-cover" />
		</figure>
		<figure className="sm:mt-[calc(-180px_+_53px+32px)] col-span-4 aspect-[4_/_5] bg-sand-2 dark:bg-sand-dark-2 mt-[calc(-140px_+_53px_+_16px)]">
			<Image 
				src={`/images/about/anton-hamburg-shoes.jpeg`}
				alt={`Anton Stallbörger`}
				width="1920" 
				height="305"
				className="w-full h-full object-cover" />
		</figure>
		<figure className="sm:mt-[calc(-180px_+_53px+32px)] col-span-4 aspect-[4_/_5] bg-sand-2 dark:bg-sand-dark-2">
			<Image 
				src={`/images/about/anton-close-up-black-and-white.jpg`}
				alt={`Anton Stallbörger`}
				width="1920" 
				height="305"
				className="w-full h-full object-cover" />
		</figure>
		<figure className="sm:mt-[calc(-180px_+_53px+32px)] col-span-4 aspect-[4_/_5] bg-sand-2 dark:bg-sand-dark-2">
			<Image 
				src={`/images/about/anton-flims-gelbes-haus.jpeg`}
				alt={`Anton Stallbörger`}
				width="1920" 
				height="305"
				className="w-full h-full object-cover" />
		</figure>

		<header className="col-span-full md:col-span-12 lg:col-span-8 lg:sticky lg:top-8 lg:self-start mb-20 lg:mb-0">
			<h1>About Anton</h1>
			<p>B. 2002</p>
		</header>

		<section className="col-span-full md:col-span-12 lg:col-span-7 mb-20">
			<p>
				I am a passionate designer and developer who is driven by a love for great, high-quality and thoughtful design. Design is an integral part of my everyday life, and I believe that it has the power to shape and improve the world around us.
			</p>
			<p>
				In addition to my work, I also value meaningful conversations and good music, which help to inspire and motivate me in my creative process.
			</p>
		</section>

		<section className="col-span-4 sm:col-span-8 lg:col-span-4 border-t border-t-sand-6 dark:border-t-sand-dark-6 pt-8 lg:col-start-9">
			<h2>Things I like</h2>
			<ul>
				<li><a href='https://www.cosmos.so/stallboerger/goods' target='_blank' rel="noreferrer">Quality goods</a></li>
				<li>Wearing black</li>
				<li><a href='https://music.apple.com/de/playlist/con-amore/pl.u-r2yBDE4tdN97Zo?l=en-GB' target='_blank' rel="noreferrer">Piano music</a></li>
				<li>Good food</li>
				<li>Mountains</li>
				<li><a href='https://www.cosmos.so/stallboerger/architecture' target='_blank' rel="noreferrer">Architecture</a></li>
				<li><a href='https://www.cosmos.so/stallboerger/interior' target='_blank' rel="noreferrer">Interior Design</a></li>
				<li><a href='https://www.cosmos.so/stallboerger/concrete' target='_blank' rel="noreferrer">Concrete</a></li>
			</ul>
		</section>
		<section className="col-span-4 sm:col-span-8 lg:col-span-4 border-t border-t-sand-6 dark:border-t-sand-dark-6 pt-8">
			<h2>Things I don’t like</h2>
			<ul>
				<li>Smalltalk</li>
				<li>Sparkling water</li>
				<li>Alcohol</li>
				<li>Crowds</li>
				<li>Marble</li>
			</ul>
		</section>

		<section className='col-span-full grid grid-cols-subgrid lg:col-span-8 lg:col-start-9 border-t border-t-sand-6 dark:border-t-sand-dark-6 pt-8 mt-20'>
			<h2 className='col-span-8 md:col-span-8'>Currently reading</h2>

			<LiteralBooks customClass='col-span-8' />
		</section>

		<section className='col-span-full lg:col-span-12 lg:col-start-5 border-t border-t-sand-6 dark:border-t-sand-dark-6 pt-8 mt-20 grid grid-cols-16 lg:grid-cols-12 gap-4 md:gap-8 md:gap-y-8'>
			<h2 className='col-span-8 lg:col-span-4'>Experience</h2>

			{experiences.map((experience, key) => (
				<div className='col-span-full md:col-span-8 md:col-start-9 lg:col-start-5 grid grid-cols-8 gap-4 not-last:border-b not-last:border-sand-6 not-last:dark:border-sand-dark-6 not-last:pb-12 not-last:md:pb-20' key={key}>
					<div className='col-span-full'>
						<h3 className='col-span-4 font-semibold'>
							{
								experience.url
								? <a href={`${experience.url}`} target='_blank'>{experience.role && `${experience.role} at`} {experience.company}</a>
								: <>{experience.role && `${experience.role} at`} {experience.company}</>
							}
							
						</h3>
						<span className='block'>
							{
								(experience.end && isAfter(experience.end, new Date())) || !experience.end
								? `${format(experience.start, 'LLLL, yyyy')} – Ongoing`
								: `${format(experience.start, 'LLLL, yyyy')} – ${format(experience.end, 'LLLL, yyyy')}`
							}
						</span>
					</div>

					{experience.description && <p className='mt-4 col-span-full sm:col-span-6 max-w-none'>{experience.description}</p>}
				</div>
			))}

		</section>
	</>
	);
}
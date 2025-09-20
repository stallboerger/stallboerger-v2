import type { Metadata } from 'next';
import Image from 'next/image';

import { format, isAfter } from 'date-fns';
import { Suspense } from 'react'
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

interface Education {
	school: string;
	degree: string;
	start: Date;
	end?: Date;
	url?: string;
}

const education: Education[] = [
	{
		school: 'Hochschule für Gestaltung Schwäbisch Gmünd',
		degree: 'Bachelor of Arts',
		url: 'https://hfg-gmuend.de',
		start: new Date('2021-10-01'),
		end: new Date('2025-02-15'),
	}
]

const experiences: Experience[] = [
	{
		company: 'Freelance',
		start: new Date('2023-06-15'),
		description: 'Available for projects.',
		url: 'mailto:anton@stallboerger.com'
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

const images: {
	src: string
	alt: string
}[] = [
	{
		src: '/images/about/anton-1.jpeg',
		alt: 'Anton standing in front of a concrete wall'
	},
	{
		src: '/images/about/anton-hamburg-shoes.jpeg',
		alt: 'A persons shoe under a desk'
	},
	{
		src: '/images/about/anton-close-up-black-and-white.jpg',
		alt: 'A black and white close up of Anton'
	},
	{
		src: '/images/about/anton-flims-gelbes-haus.jpeg',
		alt: 'Anton looking at a object in a white room'
	}
]

export default function AboutPage() {
	return (
	<>
		<div className='col-span-full grid grid-cols-subgrid gap-4 lg:gap-8'>
			{images.map((image, key) => (
				<figure className="col-span-4 sm:col-span-8 md:col-span-4 aspect-[4_/_5] bg-neutral-100 dark:bg-neutral-900 h-full w-full overflow-hidden" key={key}>
					<Image 
						src={image.src}
						alt={image.alt}
						width={1920}
						height={305}
						className="w-full h-full object-cover" />
				</figure>
			))}
		</div>

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

		<section className="col-span-4 sm:col-span-8 lg:col-span-4 border-t border-t-neutral-200 dark:border-t-neutral-800 pt-8 lg:col-start-9">
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
		<section className="col-span-4 sm:col-span-8 lg:col-span-4 border-t border-t-neutral-200 dark:border-t-neutral-800 pt-8">
			<h2>Things I don’t like</h2>
			<ul>
				<li>Smalltalk</li>
				<li>Sparkling water</li>
				<li>Alcohol</li>
				<li>Crowds</li>
				<li>Marble</li>
			</ul>
		</section>

		<section className='col-span-full grid grid-cols-subgrid lg:col-span-8 lg:col-start-9 border-t border-t-neutral-200 dark:border-t-neutral-800 pt-8 mt-20'>
      <h2 className='col-span-8 md:col-span-8'>Currently reading</h2>

      <Suspense fallback={<ul className='col-span-8 grid lg:grid-cols-2 gap-3'><li className='col-span-full text-sm text-neutral-500 dark:text-neutral-400'>Loading…</li></ul>}>
        <LiteralBooks customClass='col-span-8' />
      </Suspense>
		</section>

		<section className='col-span-full lg:col-span-12 lg:col-start-5 border-t border-t-neutral-200 dark:border-t-neutral-800 pt-8 mt-20 grid grid-cols-16 lg:grid-cols-12 gap-4 md:gap-8 md:gap-y-8'>
			<h2 className='col-span-8 lg:col-span-4'>Experience</h2>

			{experiences.map((experience, key) => (
				<div className='col-span-full md:col-span-8 md:col-start-9 lg:col-start-5 grid grid-cols-8 gap-4 not-last:border-b not-last:border-neutral-200 dark:not-last:border-neutral-800 not-last:pb-12 md:not-last:pb-20' key={key}>
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

		<section className='col-span-full lg:col-span-12 lg:col-start-5 border-t border-t-neutral-200 dark:border-t-neutral-800 pt-8 mt-20 grid grid-cols-16 lg:grid-cols-12 gap-4 md:gap-8 md:gap-y-8'>
					<h2 className='col-span-8 lg:col-span-4'>Education</h2>
		
					{education.map((education, key) => (
						<div className='col-span-full md:col-span-8 md:col-start-9 lg:col-start-5 grid grid-cols-8 gap-4 not-last:border-b not-last:border-neutral-200 dark:not-last:border-neutral-800 not-last:pb-12 md:not-last:pb-20' key={key}>
							<div className='col-span-full'>
								<h3 className='col-span-4 font-semibold'>
									{
										education.url
										? <a href={`${education.url}`} target='_blank'>{education.degree && `${education.degree} at`} {education.school}</a>
										: <>{education.degree && `${education.degree} at`} {education.school}</>
									}
									
								</h3>
								<span className='block'>
									{
										(education.end && isAfter(education.end, new Date())) || !education.end
										? `${format(education.start, 'LLLL, yyyy')} – Ongoing`
										: `${format(education.start, 'LLLL, yyyy')} – ${format(education.end, 'LLLL, yyyy')}`
									}
								</span>
							</div>
		
							{/* {education.description && <p className='mt-4 col-span-full sm:col-span-6 max-w-none'>{education.description}</p>} */}
						</div>
					))}
		
				</section>
	</>
	);
}

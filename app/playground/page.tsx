import type { Metadata } from 'next';
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/card'

import { allProjects } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';

export const metadata: Metadata = {
	title: 'Playground',
};

const filteredProjects = allProjects.filter((project) => project.playground)
const projects = filteredProjects.sort((a, b) => 
	compareDesc(new Date(a.year), new Date(b.year))
)

export default function Playground() {
  return (
    <>
		<header className='col-span-full md:col-span-12 lg:col-span-5 lg:sticky lg:top-8 lg:self-start mb-20 lg:mb-0'>
			<h1>Playground</h1>
			<p className='inline-block mb-8'>{projects.length} concepts</p>
			<p className='mt-0'>
				Besides my main projects, I explore different areas of interest in my free time. This is the best way to discover useful solutions, train my eyes for details, and develop more specific insights in certain topics.
			</p>
		</header>

		<section className='col-span-full lg:col-start-9 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4'>
			{projects.map((project, idx) => (
				<Card
					title={project.title}
					imageSrc={`/images/projects/${project.slug}/${project.image}`}
					imageAlt={`${project.title} · Anton Stallbörger`}
					description={project.description}
					year={format(parseISO(project.year), 'yyyy')}
					link={`/projects/${project.slug}`}
					key={idx}
				/>
			))}
      </section>
    </>
  )
}

import type { Metadata } from 'next';
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/card'

import styles from '../../styles/views/playground.module.scss'
import { allProjects } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';

export const metadata: Metadata = {
	title: 'Playground',
	description: 'Software Designer',
};

const filteredProjects = allProjects.filter((project) => project.playground)
const projects = filteredProjects.sort((a, b) => 
	compareDesc(new Date(a.year), new Date(b.year))
)

export default function Playground() {
  return (
    <>
		<header className={styles.header}>
			<h1 className={styles.title}>Playground</h1>
			<p className={styles.count}>{projects.length} concepts</p>
		</header>

		<section className={styles.projects}>
			{projects.map((project, idx) => (
				<Card
					title={project.title}
					imageSrc={`/images/projects/${project.slug}/${project.image}`}
					imageAlt={`${project.title} · Anton Stallbörger`}
					description={project.description}
					year={format(parseISO(project.year), 'yyyy')}
					link={`/projects/${project.slug}`}
				/>
			))}
      </section>
    </>
  )
}

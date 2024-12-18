import { allProjects } from 'contentlayer/generated'
import { Mdx } from 'components/mdx'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../../../styles/views/project.module.css';

export const generateStaticParams = async () => allProjects.map((project: any) => ({ slug: project._raw.flattenedPath }))

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = allProjects.find((project: any) => project.slug === slug)
  return { title: project?.title }
}

export default async function ProjectLayout({params}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = allProjects.find((project: any) => project.slug === slug)

  if (project) {
    return (<>
      <header className={styles.header}>
        <h1 className={styles.title}>{project?.title}</h1>
        <time className={styles.year} dateTime={project?.year} >
          {format(parseISO(project.year), 'yyyy')}
        </time>
        <p className={styles.description}>{project?.description}</p>
      </header>

      <aside className={styles.meta}>
        {project.links && 
          <div className={styles.links}>
            <h2 className={styles.title}>Visit live</h2>
            {project.links.map((url, key) => (
              <Link
              href={url.url}
              target='_blank'
              className={styles.url}
              key={key}
              >{url.title}</Link>
            ))}
          </div>
        }

        {project.collaborators && (
          <div className={styles.collaborators}>
            <h2 className={styles.title}>Collaborators</h2>
            {project.collaborators?.map((collaborator, key) => (
              <Link 
                href={collaborator.url}
                target="_blank"
                className={styles.collaborator}
                key={key}
              >
                <Image 
                  src={collaborator.avatar} 
                  alt={collaborator.name}
                  width={240}
                  height={240}
                  className={styles.avatar} 
                />
                {collaborator.name}
              </Link>
            ))}
          </div>
        )}
      </aside>

      <section className={styles.content}>
        <Mdx code={project.body.code} />
      </section>
    </>)
  } else {
    return (
      <h1>Project could not be found</h1>
    )
  }
}
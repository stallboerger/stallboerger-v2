import { allThoughts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { Mdx } from 'components/mdx'

import styles from '../../../styles/views/thought.module.css'

export const generateStaticParams = async () => allThoughts.map((thought) => ({ slug: thought.slug }))

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const thought = allThoughts.find((thought) => thought.slug === slug)
  return { title: thought?.title }
}

const ThoughtLayout = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const thought = allThoughts.find((thought) => thought._raw.flattenedPath === 'thoughts/' + slug)

  if (thought) {
    return (<>
      <header className={styles.header}>
        <div className='flex flex-row gap-2'>
          <h1 className={styles.title}>{thought.title}</h1>
        </div>
        <time className={styles.date} dateTime={thought.date}>
          {format(parseISO(thought.date), 'eee · LLLL d, yyyy')}
        </time>

        {thought.credits && (
          <p className={styles.credits}>Image credits <a href={thought.credits.url || ''} target="_blank">{thought.credits.name}</a></p>
        )}
      </header>

      <article className={styles.content}>
        <Mdx code={thought.body.code} />
      </article>
    </>)
  } else {
    return (
      <h1>Thought could not be found</h1>
    )
  }
}

export default ThoughtLayout

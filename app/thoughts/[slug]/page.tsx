import { allThoughts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { Mdx } from 'components/mdx'

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
      <header className='col-span-full md:col-span-12 lg:col-span-8 mb-24'>
        <div className='flex flex-row gap-2'>
          <h1>{thought.title}</h1>
        </div>
        <time dateTime={thought.date}>
          {format(parseISO(thought.date), 'eee · LLLL d, yyyy')}
        </time>

        {thought.credits && (
          <p className='mt-4'>Image credits <a href={thought.credits.url || ''} target="_blank">{thought.credits.name}</a></p>
        )}
      </header>

      <article className='col-span-full lg:col-start-9 lg:col-span-6 [&_p+p]:indent-16 [&_p+p]:mt-0'>
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

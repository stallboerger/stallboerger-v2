import { allProjects } from 'contentlayer/generated'
import { Mdx } from 'components/mdx'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'

export const generateStaticParams = async () => allProjects.map((project: any) => ({ slug: project.slug }))

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
      <header className='col-span-full md:col-span-12 lg:col-span-4 mb-8'>
        <h1>{project?.title}</h1>
        <time dateTime={project?.year} >
          {format(parseISO(project.year), 'yyyy')}
        </time>
        <p className='mt-4 text-balance'>{project?.description}</p>
      </header>

      <aside className='col-span-full md:col-span-8 lg:col-span-4 mb-20'>
        {project.links &&
          <div className='mb-8'>
            <h2 className='mb-0'>Visit live</h2>
            {project.links.map((url, key) => (
              <Link
              href={url.url}
              target='_blank'
              className='block'
              key={key}
              >{url.title}</Link>
            ))}
          </div>
        }

        {project.collaborators && (
          <div className='flex flex-col gap-2 mt-2'>
            <h2 className='mb-1'>Collaborators</h2>
            {project.collaborators?.map((collaborator, key) => (
              <Link
                href={collaborator.url}
                target="_blank"
                className='flex gap-2'
                key={key}
              >
                <Image
                  src={collaborator.avatar}
                  alt={collaborator.name}
                  width={240}
                  height={240}
                  className='w-6 h-6 rounded-full border border-neutral-black/10'
                />
                {collaborator.name}
              </Link>
            ))}
          </div>
        )}
      </aside>

      <section className='col-span-full md:col-span-12 md:col-start-1 lg:col-start-9 lg:col-span-6 [&_p+*]:mt-8 [&_p+p]:mt-4 [&_p+h2]:mt-16'>
        <Mdx code={project.body.code} />
      </section>
    </>)
  } else {
    return (
      <h1>Project could not be found</h1>
    )
  }
}

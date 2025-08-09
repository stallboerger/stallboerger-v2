import Image from 'next/image';

type Props = {
  customClass?: string
}
export default async function LiteralBooks({ customClass }: Props) {
  type Book = {
    id: string
    slug: string
    title: string
    subtitle?: string
    isbn10?: string
    isbn13?: string
    cover: string
    authors: [Author]
  };
  
  type Author = {
    id: string
    name: string
  }
  const literalApiUrl = process.env.LITERAL_API_URL ?? 'https://literal.club/graphql/'
  let literalProfileId = process.env.LITERAL_PROFILE_ID

  // Fallback: resolve profileId by handle if not provided via env
  if (!literalProfileId) {
    const handle = process.env.LITERAL_PROFILE_HANDLE ?? 'stallboerger'
    try {
      const profileResponse = await fetch(literalApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `
            query getProfileParts($handle: String!) {
              profile(where: { handle: $handle }) {
                id
              }
            }
          `,
          variables: { handle }
        }),
        next: { revalidate: 3600 },
        cache: 'force-cache'
      })
      const profileJson = await profileResponse.json()
      literalProfileId = profileJson?.data?.profile?.id ?? undefined
    } catch {
      // noop; will render empty block below
    }
  }

  if (!literalApiUrl || !literalProfileId) {
    return <ul className={`grid lg:grid-cols-2 gap-3 ${customClass}`}></ul>
  }

  const response = await fetch(literalApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        query booksByReadingStateAndProfile(
          $limit: Int!
          $offset: Int!
          $readingStatus: ReadingStatus!
          $profileId: String!
        ) {
          booksByReadingStateAndProfile(
            limit: $limit
            offset: $offset
            readingStatus: $readingStatus
            profileId: $profileId
          ) {
            ...BookParts
          }
        }
      
        fragment BookParts on Book {
          id
          slug
          title
          subtitle
          isbn10
          isbn13
          cover
          authors {
            id
            name
          }
        }
      `,
      variables: {
        limit: 10,
        offset: 0,
        readingStatus: 'IS_READING',
        profileId: literalProfileId
      }
    }),
    next: { revalidate: 100 },
    cache: 'force-cache'
  })

  const { data }: any = await response.json()
  let books: Book[] = data?.booksByReadingStateAndProfile ?? []

  // Fallback to WANTS_TO_READ if nothing is currently being read
  if (books.length === 0) {
    const fallbackResponse = await fetch(literalApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query booksByReadingStateAndProfile(
            $limit: Int!
            $offset: Int!
            $readingStatus: ReadingStatus!
            $profileId: String!
          ) {
            booksByReadingStateAndProfile(
              limit: $limit
              offset: $offset
              readingStatus: $readingStatus
              profileId: $profileId
            ) {
              ...BookParts
            }
          }

          fragment BookParts on Book {
            id
            slug
            title
            subtitle
            isbn10
            isbn13
            cover
            authors { id name }
          }
        `,
        variables: {
          limit: 10,
          offset: 0,
          readingStatus: 'WANTS_TO_READ',
          profileId: literalProfileId
        }
      }),
      next: { revalidate: 100 },
      cache: 'force-cache'
    })
    const { data: fbData }: any = await fallbackResponse.json()
    books = fbData?.booksByReadingStateAndProfile ?? []
  }

  if (!books.length) {
    return (
      <ul className={`grid lg:grid-cols-2 gap-3 ${customClass}`}>
        <li className='col-span-full text-sm text-neutral-500 dark:text-neutral-400'>
          Nothing here right now.
        </li>
      </ul>
    )
  }

  return (
    <ul className={`grid lg:grid-cols-2 gap-3 ${customClass}`}>
      {books.map((book: Book) => (
        <li className='col-span-1' key={book.slug}>
          <a href={`https://literal.club/stallboerger/book/${book.slug}`} target='_blank' className='flex gap-4 no-underline group'>
            <figure className='w-9 h-12 shrink-0 relative overflow-hidden'>
              <Image 
                src={book.cover} 
                alt={`Cover of ${book.title}`} 
                width={36}
                height={48}
                sizes="36px"
                className='w-full h-full object-cover'
                priority={false}
              />
            </figure>

            <div className='flex flex-col'>
              <span className='text-neutral-950 dark:text-neutral-50 underline underline-offset-2 decoration-[1px] decoration-neutral-500 group-hover:decoration-neutral-950 dark:group-hover:decoration-neutral-50 font-semibold'>{book.title}</span>
              <span className=''>{book.authors.map(author => author.name).join(', ')}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}

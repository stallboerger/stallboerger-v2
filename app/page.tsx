import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <p className='pb-20'>
        Anton Stallbörger
        <br />
        From Stuttgart, Germany. Based in Schwäbisch Gmünd.
      </p>
      <p className='pb-20'>
        I am a passionate designer and developer who is driven by a love for great, high-quality and thoughtful design. Pushing the boundaries and striving to create something truly unique and meaningful. My goal is to continue improving, learning, and exploring all the different areas life has to offer.
      </p>          
      <div>
        <Image 
            alt='Boost Project | Anton Stallbörger'
            className='rounded-lg'
            src='/images/main/curations.jpg'
            width={1440}
            height={1024}
            priority
          />      
        <Link href="boost" className='group'>
        </Link>
      </div>
      
    </section>
  )
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Colophon'
};

export default function ColophonPage() {
  return (
    <>
      <header className="col-span-full lg:col-span-8 md:col-span-12 lg:top-8 sticky lg:self-start mb-24">
        <h1>Colophon</h1>
        <p>Last updated Dec 20, 2024</p>
      </header>

      <section className="col-span-full md:col-span-12 lg:col-span-6">
        <h2>Typography</h2>
        <p>
          <a href='https://klim.co.nz/retail-fonts/soehne/' target="_blank" rel="noreferrer">Söhne</a> is a typeface designed and published by the <a href='https://klim.co.nz/' target="_blank" rel="noreferrer">Klim Type Foundry</a>. It is the memory of Akzidenz-Grotesk framed through the reality of Helvetica. Söhne captures the analogue materiality of “Standard Medium” used in Unimark&rsquo;s legendary wayfinding system for the NYC Subway.
        </p>

        <h2>Tech stack</h2>
        <p>
          Built with <a href='https://nextjs.org/' target="_blank" rel="noreferrer">Next.js</a> and <a href='https://tailwindcss.com/' target="_blank" rel="noreferrer">Tailwind CSS</a>. Hosted on <a href='https://vercel.com/home' target="_blank" rel="noreferrer">Vercel</a>. Privacy friendly analytics with <a href='https://plausible.io/' target="_blank" rel="noreferrer">Plausible</a>.
        </p>    
        <p>
          <a href="https://github.com/antonstallboerger/antonstallboerger-v2" target="_blank" rel="noreferrer">GitHub Repository</a>
        </p>
          
        <h2>Photography</h2>
        <p>
          Images were taken or created by Anton Stallbörger, if not stated otherwise. 
        </p>

        <h2>Mockups</h2>
        <p>
          All mockups are by <a href='https://www.pixelmator.com/pro/' target="_blank" rel="noreferrer">Pixelmator Pro</a> or <a href='https://supply.family/' target="_blank" rel="noreferrer">Supply Family</a>.
        </p>

        <h2>Inspiration</h2>
        <ul>
          <li>
            <a 
              href="https://linusrogge.com/"  
              target="_blank" 
              rel="noreferrer"
            >
              linusrogge.com
            </a>
          </li>
          <li>
            <a 
              href="https://studiolenzing.com/"  
              target="_blank" 
              rel="noreferrer"
            >
              studiolenzing.com
            </a>
          </li>
          <li>
            <a 
              href="https://emilkowal.ski/"  
              target="_blank" 
              rel="noreferrer"
            >
              emilkowal.ski
            </a>
          </li>
          <li>
            <a 
              href="https://benji.org"  
              target="_blank" 
              rel="noreferrer"
            >
              benji.org
            </a>
          </li>
          <li>
            <a 
              href="https://thu-le.com"  
              target="_blank" 
              rel="noreferrer"
            >
              thu-le.com
            </a>
          </li>
        </ul>

        <h2>Great humans</h2>
        <p>
          I am especially grateful for the support and inspiration of the following humans:
        </p>
        <ul>
          <li>
            <a 
              href="https://linusrogge.com/"  
              target="_blank" 
              rel="noreferrer"
            >
              Linus Rogge
            </a>
          </li>
          <li>
            <a 
              href="https://floriankiem.com/" 
              target="_blank" 
              rel="noreferrer"
            >
              Florian Kiem
            </a>
          </li>
          <li>
            <a 
              href="https://nilseller.com/" 
              target="_blank" 
              rel="noreferrer"
            >
              Nils Eller
            </a>
          </li>
          <li>
            <a 
              href="https://leonardgorges.com/" 
              target="_blank" 
              rel="noreferrer"
            >
              Leonard Gorges
            </a>
          </li>
          <li>
            <a 
              href="https://henribredt.de/" 
              target="_blank" 
              rel="noreferrer"
            >
              Henri Bredt
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

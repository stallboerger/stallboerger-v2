'use client';

import clsx from 'clsx';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className='max-w-[593px] mx-auto px-4 sm:px-0 mt-60 mb-20'>
            <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800 mb-6"></div>
            <div className="flex sm:flex-row flex-col gap-6 sm:gap-0 justify-between text-zinc-500">
                <div className="flex gap-20 text-sm">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Connect
                        </p>
                        <a 
                            href="https://twitter.com/AntonStalli" 
                            className="hover:text-blue-600" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Twitter
                        </a>
                        <a 
                            href="https://github.com/antonstallboerger" 
                            className="hover:text-purple-600" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a 
                            href="https://read.cv/antonsta" 
                            className="hover:text-zinc-900 dark:hover:text-zinc-100" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Read.cv
                        </a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Explore
                        </p>
                        <Link 
                            href='/about' 
                            className="hover:text-zinc-900 dark:hover:text-zinc-100"
                        >
                            About
                        </Link>
                        <Link 
                            href='/thoughts' 
                            className="hover:text-zinc-900 dark:hover:text-zinc-100"
                        >
                            Thoughts
                        </Link>
                        <Link 
                            href='/playground' 
                            className="hover:text-zinc-900 dark:hover:text-zinc-100"
                        >
                            Playground
                        </Link>
                    </div>
                    {/* <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Information</p>
                        <Link href='/colophon' className="hover:text-zinc-900 dark:hover:text-zinc-100">Colophon</Link>
                        <Link href='/legalnotice' className="hover:text-zinc-900 dark:hover:text-zinc-100">Legal Notice</Link>
                        <Link href='/privacypolicy' className="hover:text-zinc-900 dark:hover:text-zinc-100">Privacy Policy</Link>
                    </div> */}
                    
                </div>
                <div className='flex flex-col gap-2 text-sm'>   
                        <p className="text-sm text-zinc-900 font-medium dark:text-zinc-100">&copy; 2023 Anton Stallbörger</p>
                        <Link href='/colophon' className="hover:text-zinc-900 dark:hover:text-zinc-100">Colophon</Link>
                        <Link href='/imprint' className="hover:text-zinc-900 dark:hover:text-zinc-100">Imprint</Link>
                </div>
            </div>
        </div>
    );
}
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Swup from 'swup'
import SwupHeadPlugin from '@swup/head-plugin'
import SwupScrollPlugin from '@swup/scroll-plugin'

import clsx from 'clsx'
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [currentRoute, setCurrentRoute] = useState<any | null>(usePathname())

  useEffect(() => {
    const swup = new Swup({
      plugins: [
        new SwupHeadPlugin({ 
          persistAssets: true, 
          awaitAssets: true 
        }),
        new SwupScrollPlugin({
          animateScroll: {
            betweenPages: false,
            samePageWithHash: false,
            samePage: false
          }					 
        })
      ]
    });

    swup.hooks.on('page:view', (visit) => {
      setCurrentRoute(visit.to.url)
    })
  }, [])

  const items = [
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Thoughts',
      href: '/thoughts',
    },
    {
      title: 'Playground',
      href: '/playground',
    }
  ]

  return (
    <nav className='grid-cols-16 grid gap-4 lg:gap-8 justify-between items-center w-full h-[53px] z-50 px-4 lg:px-8 bg-neutral-50 dark:bg-neutral-950 select-none'>
      <Link href='/' className={clsx(
        'col-span-3 justify-self-start',
        'text-neutral-600 dark:text-neutral-400 no-underline',
        currentRoute === '/' && 'text-neutral-950 dark:text-neutral-50',
      )}>
        Home
      </Link>

      <div className='flex gap-3 md:gap-6 md:col-span-5 col-start-16 justify-self-end md:justify-self-start md:col-start-9'>
        {items.map((item) => (
          <Link key={item.title} href={item.href} className={clsx(
            'text-neutral-600 dark:text-neutral-400 no-underline',
            currentRoute === item.href && 'text-neutral-950 dark:text-neutral-50',
          )}>{item.title}</Link>
        ))}
      </div>
    </nav>
  );
} 
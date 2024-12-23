import '/styles/base.css'
import Soehne from 'next/font/local'
import type { Metadata } from 'next'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import PlausibleProvider from 'next-plausible'
import { SpeedInsights } from "@vercel/speed-insights/next"

const soehne = Soehne({
	src: [
		{
			path: '../public/font/soehne-buch.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/font/soehne-buch-kursiv.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../public/font/soehne-halbfett.woff2',
			weight: '600',
			style: 'normal',
		},
	],
})

export const metadata: Metadata = {
	title: {
		default: 'Anton Stallbörger',
		template: '%s · Anton Stallbörger',
	},
	description: 'Software Designer',
	openGraph: {
		title: 'Anton Stallbörger',
			description: 'Software Designer',
			url: `https://stallboerger.com`,
		siteName: 'Anton Stallbörger',
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'Anton Stallbörger',
		card: 'summary_large_image',
		description: 'Software Designer',
		creator: '@stallboerger',
	},
	verification: {
		google: 'stqJtLv8IK8j4XXD3FJI8PnEPdMd2Kb-BLJJusaZuuA',
	},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
	return (
		<html 
			lang="en"
			className={soehne.className}
		>
			<PlausibleProvider domain="antonstallboerger.com">
				<body className="antialiased text-sand-12 dark:text-sand-dark-12 bg-sand-1 dark:bg-sand-dark-1 text-[14px] selection:bg-[#D8ECFC] selection:text-[#008CFF] dark:selection:bg-[#0E1E35] min-h-full flex flex-col">
					<Navbar />
					
					<main id='swup' className="transition-fade pt-[120px] md:pt-[140px] h-auto px-4 mb-auto lg:px-8 grid grid-cols-8 sm:grid-cols-16 gap-4 lg:gap-8">
						{children}
					</main>

					<Footer />
					<SpeedInsights/>
				</body>
			</PlausibleProvider>
		</html>
	)
}

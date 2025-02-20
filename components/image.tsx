import NextImage, { ImageProps } from 'next/image';

export default function Image({
	src,
	width,
	height,
	alt,
	caption,
	...props
} : {
	src: string
	width: number
	height: number
	alt: string
	caption?: string
} & ImageProps) {
	return (
		<figure className='flex flex-col gap-2 mb-16 w-full'>
			<NextImage 
				src={src} 
				width={width}
				height={height} 
				alt={alt}
				className={'w-full ring-1 ring-neutral-200 dark:ring-neutral-800'}
				{...props}
			/>
			{(caption && caption.length > 0) && <figcaption>{caption}</figcaption>}
		</figure>
	)
}

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
				className={'w-full shadow-[0_0_0_1px_rgba(0,0,0,0.08)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]'}
				{...props}
			/>
			{(caption && caption.length > 0) && <figcaption className='text-sand-11 dark:text-sand-11 text-sm'>{caption}</figcaption>}
		</figure>
	)
}

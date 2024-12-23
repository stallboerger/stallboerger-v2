import Image from "next/image"
import Link from "next/link"

interface Props {
	title: string;
	imageSrc: string;
	imageAlt: string;
	description: string;
	year: string;
	link: string;
}

const Card: React.FC<Props> = ({
	title,
	imageSrc,
	imageAlt,
	description,
	year,
	link,
}) => {
  return (
    <div className="mb-12 lg:mb-24 border-b border-sand-6 dark:border-sand-dark-6 last:border-transparent last:mb-0">
      <div className="flex flex-col mb-8">
        <h3>{title}</h3>
        <time>{year}</time>
      </div>
    
      <div className="bg-white dark:bg-black shadow-[0_0_0_1px_rgba(0,0,0,0.08)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)] overflow-hidden mb-8">
        <Link href={link}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="select-none"
            width={1500}
            height={1500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            priority
          />
        </Link>
      </div>
      
      <div className="grid grid-cols-8 gap-8 mb-12 lg:mb-24">
        <p className="col-span-full lg:col-span-6">{description}</p>
        
        <Link 
          href={link}
          className="col-span-full lg:col-span-2 lg:justify-self-end"
          title={`Learn more about ${title}`}
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Card

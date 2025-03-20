import Link from 'next/link';
import Image from 'next/image';

const ArticleCard = ({ title, category, date, params, description, imageSrc, button_data ,slug , blog}) => {
  return (
    <div>
    {blog ? (
      <div className={`overflow-hidden group hover:scale-105 transition-all bg-[#F9F9F9] p-2 rounded-lg shadow-lg ${blog ? 'h-[400px]' : ''}`}>
        <Link href={`/Blog/${category?.slug}/${slug}`}>
      <div className="relative h-40 m-3 md:h-48">
        
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full rounded-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-start gap-3 p-2">
          {button_data.map((item, index) => (
            <div key={index} className='z-10 py-2 font-medium text-xs px-5 dark:text-black bg-[#F9F9F9] rounded-full'>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="px-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span className='text-xs'>{date}</span>
        </div>
        <div className='flex flex-col gap-3 mb-4'>
          <h3 className="mt-2 text-xl  font-semibold dark:text-black">{title}</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-black/70 line-clamp-3" dangerouslySetInnerHTML={{ __html: description || '' }}></p>
        </div>
      </div>
      </Link>
    </div>
    ) : (
      <div className={`overflow-hidden group hover:scale-105 transition-all bg-[#F9F9F9] p-2 rounded-lg shadow-lg ${blog ? 'h-[400px]' : ''}`}>
      <div className="relative h-40 m-3 md:h-48">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full rounded-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-start gap-3 p-2">
          {button_data.map((item, index) => (
            <div key={index} className='z-10 py-2 font-medium text-xs px-5 dark:text-black bg-[#F9F9F9] rounded-full'>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="px-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span className='text-xs'>{date}</span>
        </div>
        <div className='flex flex-col gap-3 mb-4'>
          <h3 className="mt-2 text-xl  font-semibold dark:text-black">{title}</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-black/70 line-clamp-3" dangerouslySetInnerHTML={{ __html: description || '' }}></p>
          
          <Link href={`/Blog/${params}/${slug}`} className="block mt-3 text-xs text-black underline hover:text-primary hover:underline">Read More</Link>
        </div>
      </div>
    </div>
    )}
    </div>
    
  );
};

export default ArticleCard;

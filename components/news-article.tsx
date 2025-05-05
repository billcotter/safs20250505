'use client';

import Image from 'next/image';
import Link from 'next/link';

interface NewsArticleProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
}

export function NewsArticle({
  image,
  category,
  title,
  excerpt,
}: NewsArticleProps) {
  // Convert category string to array of categories
  const categories = category.split(', ');

  // Create slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');

  return (
    <article className='group'>
      <Link href='#' className='block'>
        <div className='aspect-[16/9] relative overflow-hidden mb-4'>
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover transition-transform duration-300 group-hover:scale-105'
          />
        </div>
      </Link>
      <div className='text-xs text-orange-500 mb-2'>{category}</div>
      <h3 className='text-lg font-medium mb-2'>
        <Link href='#' className='hover:text-orange-500 transition-colors'>
          {title}
        </Link>
      </h3>
      <p className='text-sm text-gray-400 line-clamp-3'>{excerpt}</p>
    </article>
  );
}

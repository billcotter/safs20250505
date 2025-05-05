'use client';

import { PageHero } from '@/components/page-hero';
import { NewsSidebar } from '@/components/news-sidebar';
import Image from 'next/image';
import Link from 'next/link';

interface NewsArticleClientProps {
  article: {
    title: string;
    category: string;
    date: string;
    image: string;
    content: string;
  };
}

export function NewsArticleClient({ article }: NewsArticleClientProps) {
  return (
    <main className='min-h-screen bg-black text-white'>
      <PageHero
        subtitle={article.category}
        title={article.title}
        backgroundImage='/placeholder.svg?key=8glzg'
      />

      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='w-full lg:w-2/3'>
            <article>
              <div className='mb-6'>
                <Image
                  src={article.image || '/placeholder.svg'}
                  alt={article.title}
                  width={800}
                  height={400}
                  className='w-full h-auto rounded-md object-cover'
                />
              </div>

              <div className='mb-6'>
                <span className='text-gray-400 text-sm'>{article.date}</span>
              </div>

              <div
                className='prose prose-invert max-w-none'
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <div className='mt-8 pt-8 border-t border-gray-800'>
                <div className='flex flex-wrap gap-2'>
                  <span className='text-gray-400'>Tags:</span>
                  <Link
                    href='/news/tag/action'
                    className='text-orange-500 hover:underline'
                  >
                    Action
                  </Link>
                  <Link
                    href='/news/tag/awards'
                    className='text-orange-500 hover:underline'
                  >
                    Awards
                  </Link>
                  <Link
                    href='/news/tag/film'
                    className='text-orange-500 hover:underline'
                  >
                    Film
                  </Link>
                </div>
              </div>

              <div className='mt-8'>
                <Link
                  href='/news'
                  className='inline-block border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors px-4 py-2 text-xs uppercase rounded-sm'
                >
                  Back to news
                </Link>
              </div>
            </article>
          </div>

          <div className='w-full lg:w-1/3'>
            <NewsSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}

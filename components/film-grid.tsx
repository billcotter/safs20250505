'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { getMultipleRandomImages } from '@/lib/images';
import { AdaptiveImage } from '@/components/adaptive-image';

// Sample film data (would be fetched from TMDb API in production)
const films = [
  {
    id: 1,
    title: 'The end of days',
    category: 'Action',
    rating: 5,
    slug: 'the-end-of-days',
  },
  {
    id: 2,
    title: 'Daylight',
    category: 'Horror',
    rating: 4,
    slug: 'daylight',
  },
  {
    id: 3,
    title: 'Locked in',
    category: 'Thriller',
    rating: 5,
    slug: 'locked-in',
  },
];

export function FilmGrid() {
  const [isMounted, setIsMounted] = useState(false);
  // Get random images for each film
  const filmImages = getMultipleRandomImages(films.length);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
      {films.map((film, index) => (
        // Fixed nested links - using a div as the outer container instead of Link
        <div key={film.id} className='group'>
          <Card className='overflow-hidden bg-transparent border-0'>
            <Link href={`/films/${film.slug}`} className='block'>
              <div className='aspect-[3/4] relative overflow-hidden'>
                <AdaptiveImage
                  image={filmImages[index]}
                  className='h-full transition-transform duration-300 group-hover:scale-105'
                />
              </div>
            </Link>
            <CardContent className='p-3 md:p-4 px-0'>
              <h3 className='text-base md:text-lg font-medium'>
                <Link
                  href={`/films/${film.slug}`}
                  className='hover:text-orange-500 transition-colors'
                >
                  {film.title}
                </Link>
              </h3>
              <div className='flex mt-1'>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-xs ${
                      i < film.rating ? 'text-orange-500' : 'text-gray-600'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

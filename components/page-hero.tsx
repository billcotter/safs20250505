'use client';

import { getRandomImageByCategory } from '@/lib/images';
import Image from 'next/image';
import { useState } from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
}

function HeroImage({ src, alt }: HeroImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      priority
      className='object-cover object-center'
      onError={() => {
        console.error(`Failed to load hero image: ${src}`);
        setImgSrc('/placeholder.svg?key=linu6');
      }}
    />
  );
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
}

export function PageHero({
  title,
  subtitle,
  description,
  backgroundImage,
}: PageHeroProps) {
  // If no backgroundImage is provided or it's not rendering, use a random image from our collection
  const heroImage =
    backgroundImage ||
    getRandomImageByCategory('featured')?.src ||
    '/images/film1.jpg';

  return (
    <div className='relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden'>
      <div className='absolute inset-0'>
        <HeroImage src={heroImage} alt={title} />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent' />
      </div>

      <div className='absolute inset-0 flex items-end'>
        <div className='container mx-auto px-4 pb-8 md:pb-16'>
          {subtitle && (
            <span className='text-xs font-medium uppercase tracking-wider text-orange-500 mb-2'>
              {subtitle}
            </span>
          )}
          <h1 className='mb-3 md:mb-4 text-2xl md:text-4xl font-bold leading-tight'>
            {title}
          </h1>
          {description && (
            <p className='mb-4 md:mb-6 max-w-2xl text-sm md:text-base text-gray-400'>
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import {
  getRandomImageByCategory,
  getMultipleRandomImages,
} from '@/lib/images';
import { AdaptiveImage } from '@/components/adaptive-image';

export function ComingSoon() {
  // Get a main image for the coming soon section
  const mainImage =
    getRandomImageByCategory('classic') || getRandomImageByCategory('drama');

  // Get 4 smaller images for the grid
  const smallImages = getMultipleRandomImages(4);

  return (
    <div>
      <h2 className='text-xl font-medium uppercase mb-8 border-b border-orange-500 pb-2 inline-block'>
        Coming Soon
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
        <div>
          <div className='flex flex-wrap gap-2 mb-2'>
            <span className='text-xs font-medium uppercase tracking-wider text-orange-500'>
              Fantasy
            </span>
            <span className='text-xs font-medium uppercase tracking-wider text-orange-500'>
              Sci-Fi
            </span>
            <span className='text-xs font-medium uppercase tracking-wider text-orange-500'>
              Action
            </span>
          </div>
          <h3 className='text-xl md:text-2xl font-medium mb-2'>
            Colliding planets
          </h3>
          <div className='text-xs text-gray-400 mb-3 md:mb-4'>
            23 October 2023
          </div>

          <p className='text-sm text-gray-400 mb-4 md:mb-6'>
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est notare quam littera gothica, quam
            nunc putamus parum claram, anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima.
          </p>

          <Button className='bg-orange-500 hover:bg-orange-600 rounded-full px-4 md:px-6 text-xs'>
            READ MORE
          </Button>

          <div className='grid grid-cols-4 gap-2 md:gap-4 mt-6 md:mt-8'>
            {smallImages.map((image, index) => (
              <div key={index} className='aspect-square relative'>
                <AdaptiveImage image={image} className='h-full' />
              </div>
            ))}
          </div>
        </div>

        <div className='relative aspect-video md:aspect-auto mt-6 md:mt-0'>
          <AdaptiveImage image={mainImage} className='h-full md:h-[400px]' />
        </div>
      </div>
    </div>
  );
}

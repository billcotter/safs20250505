'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import { getMultipleRandomImages } from '@/lib/images';
import { AdaptiveImage } from '@/components/adaptive-image';

const days = [
  { id: 'mon', label: 'MON' },
  { id: 'tue', label: 'TUE' },
  { id: 'today', label: 'TODAY', isActive: true },
  { id: 'thu', label: 'THU' },
  { id: 'fri', label: 'FRI' },
  { id: 'sat', label: 'SAT' },
  { id: 'sun', label: 'SUN' },
];

// Get random images for schedule items
const scheduleImages = getMultipleRandomImages(4);

const scheduleItems = [
  {
    id: 1,
    title: 'Locked in',
    category: 'THRILLER, HORROR',
    image: scheduleImages[0],
    description:
      'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.',
    time: 'STARTING TIMES',
    slots: ['10:30', '13:45', '16:30'],
    views: 115,
    slug: 'locked-in',
  },
  {
    id: 2,
    title: 'The end of days',
    category: 'ACTION, ADVENTURE',
    image: scheduleImages[1],
    description:
      'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.',
    time: 'STARTING TIMES',
    slots: ['11:00', '14:30', '18:00'],
    views: 132,
    slug: 'the-end-of-days',
  },
  {
    id: 3,
    title: 'Daylight',
    category: 'THRILLER, HORROR',
    image: scheduleImages[2],
    description:
      'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.',
    time: 'STARTING TIMES',
    slots: ['12:15', '15:45', '19:30'],
    views: 156,
    slug: 'daylight',
  },
  {
    id: 4,
    title: 'Behind Enemy Lines',
    category: 'ACTION, ADVENTURE, SCI-FI',
    image: scheduleImages[3],
    description:
      'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.',
    time: 'STARTING TIMES',
    slots: ['10:00', '13:30', '17:00', '20:30'],
    views: 203,
    slug: 'behind-enemy-lines',
  },
];

export function FilmSchedule() {
  const [activeDay, setActiveDay] = useState('today');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <div className='flex overflow-x-auto no-scrollbar border-b border-gray-800 mb-6 md:mb-8'>
        {days.map((day) => (
          <button
            key={day.id}
            className={`px-3 md:px-4 py-2 text-sm font-medium whitespace-nowrap ${
              day.id === activeDay
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-400'
            }`}
            onClick={() => setActiveDay(day.id)}
          >
            {day.label}
          </button>
        ))}
        <div className='ml-auto text-xs text-gray-400 self-center pr-2 whitespace-nowrap'>
          WED, 03 MAY
        </div>
      </div>

      <div className='space-y-8'>
        {scheduleItems.map((item) => (
          <div
            key={item.id}
            className='flex flex-col md:flex-row gap-4 md:gap-6 pb-6 md:pb-8 border-b border-gray-800'
          >
            <div className='w-full md:w-24 shrink-0'>
              {/* Fixed nested links - using a single Link component */}
              <Link href={`/films/${item.slug}`} className='block'>
                <div className='w-full h-32 md:h-32 relative rounded overflow-hidden'>
                  <AdaptiveImage image={item.image} className='h-full' />
                </div>
              </Link>
            </div>
            <div className='flex-1'>
              <div className='text-xs text-orange-500 mb-1'>
                {item.category}
              </div>
              <h3 className='text-lg md:text-xl font-medium mb-2'>
                <Link
                  href={`/films/${item.slug}`}
                  className='hover:text-orange-500 transition-colors'
                >
                  {item.title}
                </Link>
              </h3>
              <p className='text-sm text-gray-400 mb-4 line-clamp-3 md:line-clamp-none'>
                {item.description}
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <div>
                  <div className='text-xs text-orange-500 mb-1'>
                    {item.time}
                  </div>
                  <div className='flex flex-wrap items-center'>
                    <Clock className='h-4 w-4 mr-1 text-orange-500' />
                    {item.slots.map((slot, index) => (
                      <span key={index} className='text-xs mr-4'>
                        {slot}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='flex gap-2 mt-2 sm:mt-0 sm:ml-auto'>
                  {/* Fixed nested links - using Link outside Button */}
                  <Link href={`/films/${item.slug}`}>
                    <Button
                      variant='outline'
                      size='sm'
                      className='text-xs border-gray-700 hover:bg-gray-800'
                    >
                      DETAILS
                    </Button>
                  </Link>
                  <Link href='/tickets'>
                    <Button
                      size='sm'
                      className='text-xs bg-orange-500 hover:bg-orange-600'
                    >
                      TICKETS
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='text-xs text-gray-500 flex items-center gap-1 self-end mt-2 md:mt-0'>
              <span>{item.views}</span>
              <span>VIEWS</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

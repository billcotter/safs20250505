'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Star, Play, Facebook, Twitter } from 'lucide-react';

interface FilmDetailClientProps {
  film: any; // Replace with proper type
}

export function FilmDetailClient({ film }: FilmDetailClientProps) {
  return (
    <main className='min-h-screen bg-black text-white'>
      {/* Hero Section */}
      <div className='relative'>
        <div
          className='relative h-[70vh] min-h-[500px] w-full overflow-hidden'
          style={{
            backgroundImage: `url('${film.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent' />

          <div className='container relative mx-auto flex h-full flex-col items-start justify-end px-4 pb-16'>
            <div className='flex gap-2 mb-2'>
              <span className='text-xs font-medium uppercase tracking-wider text-orange-500'>
                {film.genre}
              </span>
            </div>
            <h1 className='mb-4 text-4xl font-bold leading-tight md:text-5xl'>
              {film.title}
            </h1>
            <p className='mb-6 max-w-2xl text-gray-400'>{film.description}</p>
            <div className='flex flex-wrap items-center gap-4'>
              <Button
                variant='outline'
                className='rounded-full border-white text-white hover:bg-white hover:text-black'
                onClick={() => {
                  const trailerSection = document.getElementById('trailer');
                  if (trailerSection) {
                    trailerSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Play className='mr-2 h-4 w-4' />
                Play Trailer
              </Button>
              <div className='flex'>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < film.rating
                        ? 'text-orange-500 fill-orange-500'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Left Column - Synopsis */}
          <div className='md:col-span-2'>
            <div className='flex flex-col md:flex-row gap-8'>
              <div className='md:w-1/3'>
                <div className='relative aspect-[3/4] w-full'>
                  <Image
                    src={film.image}
                    alt={`${film.title} poster`}
                    fill
                    className='rounded-md object-cover'
                    sizes='(max-width: 768px) 100vw, 33vw'
                    priority
                  />
                </div>
              </div>
              <div className='md:w-2/3'>
                <h3 className='text-xl font-medium mb-4'>The plot</h3>
                <p className='text-gray-400 mb-6'>{film.plot}</p>
                <p className='text-gray-400 mb-6'>
                  Investigationes demonstraverunt lectores legere me lius quod
                  ii legunt saepius. Claritas est etiam processus dynamicus, qui
                  sequitur mutationem consuetudium lectorum. Mirum est notare
                  quam littera gothica, quam nunc putamus parum claram,
                  anteposuerit litterarum formas humanitatis per seacula quarta
                  decima et quinta decima. Eodem modo typi, qui nunc nobis
                  videntur parum clari, fiant sollemnia in futurum.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm'>
                  <div>
                    <p className='text-gray-500 uppercase mb-1'>Director</p>
                    <p>{film.director}</p>
                  </div>
                  <div>
                    <p className='text-gray-500 uppercase mb-1'>Starring</p>
                    <p>{film.starring}</p>
                  </div>
                  <div>
                    <p className='text-gray-500 uppercase mb-1'>Released</p>
                    <p>{film.released}</p>
                  </div>
                  <div>
                    <p className='text-gray-500 uppercase mb-1'>Running Time</p>
                    <p>{film.runningTime}</p>
                  </div>
                </div>

                <div className='flex gap-2 mt-6'>
                  <Button
                    variant='outline'
                    size='icon'
                    className='rounded-full w-8 h-8 border-gray-600'
                  >
                    <Facebook className='h-4 w-4' />
                  </Button>
                  <Button
                    variant='outline'
                    size='icon'
                    className='rounded-full w-8 h-8 border-gray-600'
                  >
                    <Twitter className='h-4 w-4' />
                  </Button>
                  <Button
                    variant='outline'
                    size='icon'
                    className='rounded-full w-8 h-8 border-gray-600'
                  >
                    <span className='text-sm'>G+</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Viewing Times */}
          <div>
            <div className='bg-gray-900 rounded-md p-4'>
              <h3 className='uppercase text-sm font-medium mb-4'>Monday</h3>
              <div className='flex flex-wrap gap-2 mb-4'>
                {film.viewingTimes.monday.map((time: string, index: number) => (
                  <Button
                    key={index}
                    variant={index === 0 ? 'default' : 'outline'}
                    size='sm'
                    className={
                      index === 0
                        ? 'bg-orange-500 hover:bg-orange-600'
                        : 'border-gray-700 text-gray-300'
                    }
                  >
                    {time}
                  </Button>
                ))}
              </div>

              <h3 className='uppercase text-sm font-medium mb-4'>Tuesday</h3>
              <div className='flex flex-wrap gap-2 mb-4'>
                {film.viewingTimes.tuesday.map(
                  (time: string, index: number) => (
                    <Button
                      key={index}
                      variant='outline'
                      size='sm'
                      className='border-gray-700 text-gray-300'
                    >
                      {time}
                    </Button>
                  )
                )}
              </div>

              <h3 className='uppercase text-sm font-medium mb-4'>Wednesday</h3>
              <div className='flex flex-wrap gap-2 mb-4'>
                {film.viewingTimes.wednesday.map(
                  (time: string, index: number) => (
                    <Button
                      key={index}
                      variant='outline'
                      size='sm'
                      className='border-gray-700 text-gray-300'
                    >
                      {time}
                    </Button>
                  )
                )}
              </div>

              <h3 className='uppercase text-sm font-medium mb-4'>Thursday</h3>
              <div className='flex flex-wrap gap-2 mb-4'>
                {film.viewingTimes.thursday.map(
                  (time: string, index: number) => (
                    <Button
                      key={index}
                      variant='outline'
                      size='sm'
                      className='border-gray-700 text-gray-300'
                    >
                      {time}
                    </Button>
                  )
                )}
              </div>

              <h3 className='uppercase text-sm font-medium mb-4'>Friday</h3>
              <div className='flex flex-wrap gap-2 mb-4'>
                {film.viewingTimes.friday.map((time: string, index: number) => (
                  <Button
                    key={index}
                    variant='outline'
                    size='sm'
                    className='border-gray-700 text-gray-300'
                  >
                    {time}
                  </Button>
                ))}
              </div>

              <h3 className='uppercase text-sm font-medium mb-4'>Today</h3>
              <div className='mb-4'>
                <div className='text-orange-500'>{film.viewingTimes.today}</div>
              </div>

              <h3 className='uppercase text-sm font-medium mb-4'>Sunday</h3>
              <div className='flex flex-wrap gap-2'>
                {film.viewingTimes.sunday.map((time: string, index: number) => (
                  <Button
                    key={index}
                    variant='outline'
                    size='sm'
                    className='border-gray-700 text-gray-300'
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trailer Section */}
      <div className='bg-gray-900 py-12'>
        <div className='container mx-auto px-4'>
          <div className='relative aspect-video'>
            <Image
              src={film.trailerImage}
              alt={`${film.title} trailer`}
              fill
              className='object-cover'
              sizes='100vw'
              priority
            />
            <div className='absolute inset-0 flex items-center justify-center'>
              <Button className='rounded-full bg-orange-500 hover:bg-orange-600 h-16 w-16 flex items-center justify-center'>
                <Play className='h-8 w-8' />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
          {film.galleryImages.map((image: string, index: number) => (
            <div key={index} className='aspect-square relative'>
              <Image
                src={image}
                alt={`${film.title} scene ${index + 1}`}
                fill
                className='object-cover'
                sizes='(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw'
              />
            </div>
          ))}
        </div>
      </div>

      {/* Comments Section */}
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-orange-500 uppercase text-sm font-medium mb-8 border-b border-orange-500 pb-2 inline-block'>
              Comments
            </h2>

            <div className='space-y-8'>
              <div className='flex gap-4'>
                <div className='shrink-0'>
                  <div className='w-12 h-12 rounded-full bg-gray-700'></div>
                </div>
                <div>
                  <div className='text-xs text-gray-400 mb-1'>
                    APRIL 17, 2023
                  </div>
                  <h4 className='font-medium mb-1'>FS</h4>
                  <p className='text-sm text-gray-400'>SAJID</p>
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='shrink-0'>
                  <div className='w-12 h-12 rounded-full bg-gray-700'></div>
                </div>
                <div>
                  <div className='text-xs text-gray-400 mb-1'>
                    NOVEMBER 23, 2023
                  </div>
                  <h4 className='font-medium mb-1'>dewdf</h4>
                  <p className='text-sm text-gray-400'>fefwef</p>
                  <button className='text-xs text-orange-500 mt-2'>
                    Reply
                  </button>
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='shrink-0'>
                  <div className='w-12 h-12 rounded-full bg-gray-700'></div>
                </div>
                <div>
                  <div className='text-xs text-gray-400 mb-1'>
                    DECEMBER 01, 2023
                  </div>
                  <h4 className='font-medium mb-1'>efwef</h4>
                  <p className='text-sm text-gray-400'>fef</p>
                  <button className='text-xs text-orange-500 mt-2'>
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className='text-orange-500 uppercase text-sm font-medium mb-8 border-b border-orange-500 pb-2 inline-block'>
              Leave a comment
            </h2>

            <form className='space-y-4'>
              <p className='text-sm text-gray-400 mb-4'>
                Your email address will not be published. Required fields are
                marked *
              </p>

              <div>
                <label
                  htmlFor='name'
                  className='block text-sm mb-2 text-gray-400'
                >
                  NAME <span className='text-orange-500'>*</span>
                </label>
                <Input
                  id='name'
                  required
                  className='bg-transparent border-gray-700 focus:border-orange-500'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm mb-2 text-gray-400'
                >
                  EMAIL <span className='text-orange-500'>*</span>
                </label>
                <Input
                  id='email'
                  type='email'
                  required
                  className='bg-transparent border-gray-700 focus:border-orange-500'
                />
              </div>

              <div className='flex items-start space-x-2'>
                <Checkbox id='save-info' />
                <label
                  htmlFor='save-info'
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-400'
                >
                  SAVE MY NAME, EMAIL, AND WEBSITE IN THIS BROWSER FOR THE NEXT
                  TIME I COMMENT.
                </label>
              </div>

              <div>
                <label
                  htmlFor='comment'
                  className='block text-sm mb-2 text-gray-400'
                >
                  COMMENT <span className='text-orange-500'>*</span>
                </label>
                <Textarea
                  id='comment'
                  required
                  rows={6}
                  className='bg-transparent border-gray-700 focus:border-orange-500'
                />
              </div>

              <Button
                type='submit'
                className='bg-transparent hover:bg-orange-500 text-orange-500 hover:text-white border border-orange-500 rounded-full px-8 py-2 text-sm uppercase transition-colors'
              >
                Post Comment
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

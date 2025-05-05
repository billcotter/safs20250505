import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Star, Play, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';
import { FilmNavigation } from '@/components/film-navigation';
import { FilmDetailClient } from '@/components/film-detail-client';

// This would normally come from a database or API
const getFilmData = (slug: string) => {
  // Sample film data - expanded to include all possible slugs from hero slider
  const films = {
    'the-end-of-days': {
      id: 1,
      title: 'The end of days',
      genre: 'THRILLER',
      description:
        'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.',
      image: '/images/film1.jpg',
      rating: 5,
      plot: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.',
      director: 'John Doe',
      starring: 'James Parker, Jane Richards',
      released: '15 Nov, 2017',
      runningTime: '96 mins',
      trailerImage: '/images/film2.jpg',
      galleryImages: [
        '/images/film1.jpg',
        '/images/film2.jpg',
        '/images/film3.jpg',
        '/images/film4.jpg',
        '/images/film5.jpg',
        '/images/film1.jpg',
      ],
      viewingTimes: {
        monday: ['11:45 am', '2:30 pm'],
        tuesday: ['10:30 am', '1:30 pm'],
        wednesday: ['11:00 am', '2:30 pm', '5:30 pm'],
        thursday: ['11:30 am', '3:00 pm'],
        friday: ['10:30 am', '1:15 pm', '10:00 pm'],
        today: 'FRIDAY',
        sunday: ['4:15 pm'],
      },
    },
    'locked-in': {
      id: 2,
      title: 'Locked in',
      genre: 'THRILLER',
      description:
        'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
      image: '/images/film2.jpg',
      rating: 4,
      plot: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.',
      director: 'Sarah Johnson',
      starring: 'Michael Brown, Emma Wilson',
      released: '3 Oct, 2017',
      runningTime: '105 mins',
      trailerImage: '/images/film3.jpg',
      galleryImages: [
        '/images/film2.jpg',
        '/images/film3.jpg',
        '/images/film4.jpg',
        '/images/film5.jpg',
        '/images/film1.jpg',
        '/images/film2.jpg',
      ],
      viewingTimes: {
        monday: ['10:45 am', '3:30 pm'],
        tuesday: ['11:30 am', '2:30 pm'],
        wednesday: ['10:00 am', '1:30 pm', '6:30 pm'],
        thursday: ['12:30 pm', '4:00 pm'],
        friday: ['11:30 am', '2:15 pm', '9:00 pm'],
        today: 'FRIDAY',
        sunday: ['3:15 pm'],
      },
    },
    daylight: {
      id: 3,
      title: 'Daylight',
      genre: 'HORROR',
      description:
        'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica.',
      image: '/images/film3.jpg',
      rating: 4,
      plot: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.',
      director: 'Robert Williams',
      starring: 'David Miller, Lisa Thompson',
      released: '22 Sep, 2017',
      runningTime: '112 mins',
      trailerImage: '/images/film4.jpg',
      galleryImages: [
        '/images/film3.jpg',
        '/images/film4.jpg',
        '/images/film5.jpg',
        '/images/film1.jpg',
        '/images/film2.jpg',
        '/images/film3.jpg',
      ],
      viewingTimes: {
        monday: ['12:45 pm', '4:30 pm'],
        tuesday: ['10:00 am', '1:00 pm'],
        wednesday: ['11:30 am', '3:30 pm', '7:30 pm'],
        thursday: ['10:30 am', '2:00 pm'],
        friday: ['12:30 pm', '3:15 pm', '8:00 pm'],
        today: 'FRIDAY',
        sunday: ['5:15 pm'],
      },
    },
    'behind-enemy-lines': {
      id: 4,
      title: 'Behind Enemy Lines',
      genre: 'ACTION',
      description:
        'A thrilling adventure that follows a soldier stranded in hostile territory, fighting against all odds to return home.',
      image: '/images/film4.jpg',
      rating: 5,
      plot: 'When a soldier is shot down behind enemy lines, he must use his training and wit to survive in hostile territory while his commanding officer works against orders to organize a rescue mission. As time runs out, both men face impossible odds in a race against time.',
      director: 'Michael Anderson',
      starring: 'Thomas Wright, Rebecca Johnson',
      released: '10 May, 2023',
      runningTime: '118 mins',
      trailerImage: '/images/film5.jpg',
      galleryImages: [
        '/images/film4.jpg',
        '/images/film5.jpg',
        '/images/film1.jpg',
        '/images/film2.jpg',
        '/images/film3.jpg',
        '/images/film4.jpg',
      ],
      viewingTimes: {
        monday: ['10:15 am', '1:30 pm', '4:45 pm'],
        tuesday: ['11:00 am', '2:30 pm', '6:00 pm'],
        wednesday: ['10:30 am', '1:45 pm', '5:00 pm', '8:15 pm'],
        thursday: ['12:00 pm', '3:15 pm', '6:30 pm'],
        friday: ['11:15 am', '2:30 pm', '5:45 pm', '9:00 pm'],
        today: 'FRIDAY',
        sunday: ['1:00 pm', '4:15 pm', '7:30 pm'],
      },
    },
    'chance-encounter': {
      id: 5,
      title: 'Chance Encounter',
      genre: 'ROMANCE',
      description:
        'A classic romance that explores how a chance meeting can change the course of two lives forever.',
      image: '/images/film5.jpg',
      rating: 4,
      plot: 'Two strangers meet by chance in a quaint café during a rainstorm. What begins as a simple conversation evolves into a deep connection that challenges their perspectives on life, love, and destiny. As they navigate their separate lives, they find themselves drawn back to each other in unexpected ways.',
      director: 'Elizabeth Morgan',
      starring: 'Claire Davis, James Wilson',
      released: '14 Feb, 2023',
      runningTime: '105 mins',
      trailerImage: '/images/film1.jpg',
      galleryImages: [
        '/images/film5.jpg',
        '/images/film1.jpg',
        '/images/film2.jpg',
        '/images/film3.jpg',
        '/images/film4.jpg',
        '/images/film5.jpg',
      ],
      viewingTimes: {
        monday: ['11:30 am', '2:45 pm'],
        tuesday: ['10:15 am', '1:30 pm', '4:45 pm'],
        wednesday: ['12:00 pm', '3:15 pm', '6:30 pm'],
        thursday: ['11:00 am', '2:15 pm', '5:30 pm'],
        friday: ['10:45 am', '2:00 pm', '5:15 pm', '8:30 pm'],
        today: 'FRIDAY',
        sunday: ['2:30 pm', '5:45 pm'],
      },
    },
    'the-directors-cut': {
      id: 6,
      title: "The Director's Cut",
      genre: 'DOCUMENTARY',
      description:
        'A fascinating behind-the-scenes look at the art of filmmaking through the eyes of legendary directors.',
      image: '/images/film1.jpg',
      rating: 5,
      plot: 'This documentary takes viewers on an intimate journey through the creative process of filmmaking. Through exclusive interviews and never-before-seen footage, we explore how visionary directors transform scripts into cinematic masterpieces, overcoming challenges and pushing the boundaries of storytelling.',
      director: 'Robert Chen',
      starring: 'Various Film Directors',
      released: '5 Mar, 2023',
      runningTime: '120 mins',
      trailerImage: '/images/film2.jpg',
      galleryImages: [
        '/images/film1.jpg',
        '/images/film2.jpg',
        '/images/film3.jpg',
        '/images/film4.jpg',
        '/images/film5.jpg',
        '/images/film1.jpg',
      ],
      viewingTimes: {
        monday: ['10:00 am', '1:15 pm', '4:30 pm'],
        tuesday: ['11:45 am', '3:00 pm', '6:15 pm'],
        wednesday: ['10:30 am', '1:45 pm', '5:00 pm', '8:15 pm'],
        thursday: ['12:15 pm', '3:30 pm', '6:45 pm'],
        friday: ['11:00 am', '2:15 pm', '5:30 pm', '8:45 pm'],
        today: 'FRIDAY',
        sunday: ['1:30 pm', '4:45 pm', '8:00 pm'],
      },
    },
  };

  // If the film doesn't exist, return a default template
  if (!films[slug as keyof typeof films]) {
    // Return a default film template with the slug as the title
    return {
      id: 999,
      title: slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      genre: 'FILM',
      description:
        'Film details coming soon. Check back for updates on this exciting title.',
      image: '/images/film1.jpg',
      rating: 4,
      plot: 'Full plot details will be available soon. This film is currently in our catalog and more information will be added as it becomes available.',
      director: 'TBA',
      starring: 'Cast information coming soon',
      released: 'Coming Soon',
      runningTime: 'TBA',
      trailerImage: '/images/film2.jpg',
      galleryImages: [
        '/images/film1.jpg',
        '/images/film2.jpg',
        '/images/film3.jpg',
        '/images/film4.jpg',
        '/images/film5.jpg',
        '/images/film1.jpg',
      ],
      viewingTimes: {
        monday: ['11:00 am', '2:00 pm'],
        tuesday: ['10:30 am', '1:30 pm'],
        wednesday: ['12:00 pm', '3:00 pm', '6:00 pm'],
        thursday: ['11:30 am', '2:30 pm'],
        friday: ['10:00 am', '1:00 pm', '7:00 pm'],
        today: 'FRIDAY',
        sunday: ['3:00 pm'],
      },
    };
  }

  return films[slug as keyof typeof films];
};

interface PageProps {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Generate static paths for all film slugs
export async function generateStaticParams() {
  const slugs = [
    'the-end-of-days',
    'locked-in',
    'daylight',
    'behind-enemy-lines',
    'chance-encounter',
    'the-directors-cut',
  ];

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function FilmDetailPage({ params }: PageProps) {
  const film = getFilmData(params.slug);
  return <FilmDetailClient film={film} />;
}

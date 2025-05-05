import { NewsTagClient } from '@/components/news-tag-client';

// This would normally come from a database or API
const getTagData = (slug: string) => {
  // Sample tag data
  const tags = {
    'events': {
      title: 'Events',
      description: 'Latest news and updates about cinema events, festivals, and special screenings.',
      articles: [
        {
          title: 'New Cinema Opening in Downtown',
          category: 'EVENTS',
          date: 'March 15, 2024',
          image: '/images/classic-film-san-francisco.jpg',
          excerpt: 'We are thrilled to announce the opening of our new cinema location in downtown...',
          slug: 'new-cinema-opening'
        },
        {
          title: 'Annual Classic Film Festival Announced',
          category: 'EVENTS',
          date: 'March 10, 2024',
          image: '/images/classic-film-couple.jpg',
          excerpt: 'Mark your calendars for our annual Classic Film Festival...',
          slug: 'classic-film-festival'
        },
        {
          title: 'Special Screening of Classic Noir Films',
          category: 'EVENTS',
          date: 'February 20, 2024',
          image: '/images/classic-film-smoking.jpg',
          excerpt: 'Join us for a special screening series of classic film noir masterpieces...',
          slug: 'special-screening'
        }
      ]
    },
    'classic-films': {
      title: 'Classic Films',
      description: 'News and articles about classic films, restoration projects, and film history.',
      articles: [
        {
          title: 'Major Film Restoration Project Completed',
          category: 'NEWS',
          date: 'March 5, 2024',
          image: '/images/classic-film-investigation.jpg',
          excerpt: 'Our team has completed the restoration of several classic films from the 1950s...',
          slug: 'film-restoration'
        },
        {
          title: 'Annual Classic Film Festival Announced',
          category: 'EVENTS',
          date: 'March 10, 2024',
          image: '/images/classic-film-couple.jpg',
          excerpt: 'Mark your calendars for our annual Classic Film Festival...',
          slug: 'classic-film-festival'
        },
        {
          title: 'Special Screening of Classic Noir Films',
          category: 'EVENTS',
          date: 'February 20, 2024',
          image: '/images/classic-film-smoking.jpg',
          excerpt: 'Join us for a special screening series of classic film noir masterpieces...',
          slug: 'special-screening'
        }
      ]
    },
    'community': {
      title: 'Community',
      description: 'Updates about our community programs, educational initiatives, and local partnerships.',
      articles: [
        {
          title: 'Cinema Launches Community Outreach Program',
          category: 'NEWS',
          date: 'February 28, 2024',
          image: '/images/classic-film-bartender.jpg',
          excerpt: 'We're excited to announce our new community outreach program...',
          slug: 'community-outreach'
        }
      ]
    },
    'technology': {
      title: 'Technology',
      description: 'Latest developments in film technology, restoration techniques, and cinema equipment.',
      articles: [
        {
          title: 'Major Film Restoration Project Completed',
          category: 'NEWS',
          date: 'March 5, 2024',
          image: '/images/classic-film-investigation.jpg',
          excerpt: 'Our team has completed the restoration of several classic films from the 1950s...',
          slug: 'film-restoration'
        }
      ]
    }
  };

  // If the tag doesn't exist, return a default template
  if (!tags[slug as keyof typeof tags]) {
    return {
      title: slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      description: 'Articles tagged with ' + slug,
      articles: []
    };
  }

  return tags[slug as keyof typeof tags];
};

interface PageProps {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Generate static paths for all news tag slugs
export async function generateStaticParams() {
  const slugs = [
    'events',
    'classic-films',
    'community',
    'technology'
  ];

  return slugs.map((slug) => ({
    slug
  }));
}

export default async function NewsTagPage({ params }: PageProps) {
  const tag = getTagData(params.slug);
  return <NewsTagClient tag={tag} />;
}

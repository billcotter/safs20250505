import { NewsArticleClient } from '@/components/news-article-client';

// This would normally come from a database or API
const getArticleData = (slug: string) => {
  // Sample article data
  const articles = {
    'new-cinema-opening': {
      title: 'New Cinema Opening in Downtown',
      category: 'EVENTS',
      date: 'March 15, 2024',
      image: '/images/classic-film-san-francisco.jpg',
      content: `
        <p>We are thrilled to announce the opening of our new cinema location in downtown. This state-of-the-art facility features the latest in projection technology while maintaining the classic charm of traditional movie theaters.</p>
        <p>The new location will host special screenings, film festivals, and community events. Stay tuned for our grand opening celebration!</p>
      `,
      tags: ['Events', 'Cinema', 'Opening'],
    },
    'classic-film-festival': {
      title: 'Annual Classic Film Festival Announced',
      category: 'EVENTS',
      date: 'March 10, 2024',
      image: '/images/classic-film-couple.jpg',
      content: `
        <p>Mark your calendars for our annual Classic Film Festival, featuring restored versions of cinema's greatest masterpieces. This year's festival will showcase films from the Golden Age of Hollywood.</p>
        <p>Special guest speakers and film historians will be present for Q&A sessions after select screenings.</p>
      `,
      tags: ['Festival', 'Classic Films', 'Events'],
    },
    'film-restoration': {
      title: 'Major Film Restoration Project Completed',
      category: 'NEWS',
      date: 'March 5, 2024',
      image: '/images/classic-film-investigation.jpg',
      content: `
        <p>Our team has completed the restoration of several classic films from the 1950s. Using cutting-edge technology, we've brought these cinematic treasures back to their original glory.</p>
        <p>The restored films will be available for screening starting next month.</p>
      `,
      tags: ['Restoration', 'Classic Films', 'Technology'],
    },
    'community-outreach': {
      title: 'Cinema Launches Community Outreach Program',
      category: 'NEWS',
      date: 'February 28, 2024',
      image: '/images/classic-film-bartender.jpg',
      content: `
        <p>We're excited to announce our new community outreach program, bringing the magic of cinema to local schools and community centers.</p>
        <p>The program includes educational screenings, film workshops, and special events for young film enthusiasts.</p>
      `,
      tags: ['Community', 'Education', 'Outreach'],
    },
    'special-screening': {
      title: 'Special Screening of Classic Noir Films',
      category: 'EVENTS',
      date: 'February 20, 2024',
      image: '/images/classic-film-smoking.jpg',
      content: `
        <p>Join us for a special screening series of classic film noir masterpieces. The series will feature restored versions of iconic films from the 1940s and 1950s.</p>
        <p>Each screening will be followed by a discussion with film historians and critics.</p>
      `,
      tags: ['Film Noir', 'Classic Films', 'Screenings'],
    },
  };

  // If the article doesn't exist, return a default template
  if (!articles[slug as keyof typeof articles]) {
    return {
      title: slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      category: 'NEWS',
      date: 'Coming Soon',
      image: '/images/classic-film-table-scene.jpg',
      content: `
        <p>This article is coming soon. Check back for updates!</p>
      `,
      tags: ['Coming Soon'],
    };
  }

  return articles[slug as keyof typeof articles];
};

interface PageProps {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Generate static paths for all news article slugs
export async function generateStaticParams() {
  const slugs = [
    'new-cinema-opening',
    'classic-film-festival',
    'film-restoration',
    'community-outreach',
    'special-screening',
  ];

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function NewsArticlePage({ params }: PageProps) {
  const article = getArticleData(params.slug);
  return <NewsArticleClient article={article} />;
}

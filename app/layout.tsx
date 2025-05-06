import type { Metadata } from 'next';
import '@/app/globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { ScrollToSection } from '@/components/scroll-to-section';
import { HydrationDebug } from '@/components/hydration-debug';
import { ErrorBoundary } from '@/components/error-boundary';

export const metadata: Metadata = {
  title: 'St. Augustine Film Society',
  description: 'Celebrating the art of cinema in St. Augustine',
  generator: 'v0.dev',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-black text-white antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <Header />
            <ScrollToSection />
            <main>{children}</main>
            <Footer />
            {process.env.NODE_ENV === 'development' && <HydrationDebug />}
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}

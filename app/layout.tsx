import type React from 'react';
import '@/app/globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { ScrollToSection } from '@/components/scroll-to-section';
import { HydrationDebug } from '@/components/hydration-debug';
import { ErrorBoundary } from '@/components/error-boundary';

export const metadata = {
  title: 'St. Augustine Film Society',
  description: 'Celebrating the art of cinema in St. Augustine',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='min-h-screen bg-black text-white antialiased'>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <ScrollToSection />
          <ErrorBoundary>{children}</ErrorBoundary>
          <Footer />
          {process.env.NODE_ENV === 'development' && <HydrationDebug />}
        </ThemeProvider>
      </body>
    </html>
  );
}

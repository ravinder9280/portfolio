import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ResponsiveBG } from '@/components/particles';
import { ThemeProvider } from '../components/theme-switcher/theme-provider';
import GradientOverlay from '@/components/gradient';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ravinder - portfolio',
  description:
    'Welcome to the portfolio of Ravinder, specializing in frontend development and backend development with React and NextJS. Explore my projects, skills, work experience, and more.',
  keywords: [
    'Ravinder',
    'ravinder9280',
    'Software Engineer',
    'React Developer',
    'NextJS',
    'AWS',
    'Next.js',
    'React',
    'JavaScript',
    'NodeJS',
    'Typescript',
    'MERN Stack',
    'Portfolio',
    'Projects',
    'Web Development',
    'Frontend Developer',
    'Haryana',
  ],
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Ravinder', url: 'https://github.com/ravinder9280' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ResponsiveBG />
          <GradientOverlay />
        </ThemeProvider>
      </body>
    </html>
  );
}

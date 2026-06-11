import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Mekanova — AI Transformation in Practice',
  description:
    'I help businesses cut through the AI hype and put it to real work — improving processes, driving efficiency, and delivering outcomes that actually matter.',
  openGraph: {
    title: 'Mekanova — AI Transformation in Practice',
    description:
      'Follow the build-in-public journey of a Digital Transformation practitioner learning to build with AI tools, one project at a time.',
    url: 'https://mekanova.dev',
    siteName: 'Mekanova',
    type: 'website',
    images: [
      {
        url: 'https://mekanova.dev/api/og',
        width: 1200,
        height: 630,
        alt: 'Mekanova — AI Build Project Journey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mekanova — AI Transformation in Practice',
    description:
      'Follow the build-in-public journey of a Digital Transformation practitioner learning to build with AI tools, one project at a time.',
    images: ['https://mekanova.dev/api/og'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import localFont from 'next/font/local';
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
    url: 'https://mekanova.vercel.app',
    siteName: 'Mekanova',
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
      </body>
    </html>
  );
}

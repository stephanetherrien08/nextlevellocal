import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import LexAIWidget from './components/LexAIWidget';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Level Local',
  description: 'Local visibility with AI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
<Footer />
        {/* LexAI widget */}
        <LexAIWidget />
      </body>
    </html>
  );
}



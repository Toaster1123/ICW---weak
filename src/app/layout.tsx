import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '../components/header';
import './globals.scss';

const inter = Inter({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'ICW',
  description: 'Main page Item Catch Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-200`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

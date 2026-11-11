import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Royal Battle Arena',
  description: 'Discover the reality competition game, read updates, and access visitor resources.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

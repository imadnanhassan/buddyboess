import './globals.css';
import type { Metadata } from 'next';
import AppProviders from './providers';

export const metadata: Metadata = {
  title: 'Online Communities',
  description: 'Community platform UI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
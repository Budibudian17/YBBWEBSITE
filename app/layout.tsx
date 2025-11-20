import { Plus_Jakarta_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { defaultMetadata } from './metadata';
import ClientNavbarGate from '@/components/layout/ClientNavbarGate';
import ClientFooterGate from '@/components/layout/ClientFooterGate';
import { PromoCTAProvider } from '@/components/sections/PromoCTAContext';
import ClientCTAGate from '@/components/layout/ClientCTAGate';
import BackToTop from '@/components/ui/BackToTop';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={plusJakarta.className}>
        <PromoCTAProvider>
          <ClientNavbarGate />
          {children}
          <ClientCTAGate />
          <BackToTop />
          <ClientFooterGate />
        </PromoCTAProvider>
      </body>
    </html>
  );
}

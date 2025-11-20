"use client";

import { usePathname } from 'next/navigation';
import { PromoCTASlot } from '@/components/sections/PromoCTAContext';

export default function ClientCTAGate() {
  const pathname = usePathname();
  if (pathname?.startsWith('/login') || pathname?.startsWith('/dashboard')) return null;
  return <PromoCTASlot />;
}

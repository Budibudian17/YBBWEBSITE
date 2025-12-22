'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransitionOverlay() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  // Trigger a short overlay animation whenever pathname changes
  useEffect(() => {
    if (!pathname) return;
    setIsActive(true);
    const id = setTimeout(() => setIsActive(false), 400); // 0.4s fade
    return () => clearTimeout(id);
  }, [pathname]);

  if (!isActive) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-pink-600/80 backdrop-blur-sm transition-opacity">
      <div className="flex flex-col items-center gap-3 text-center text-white">
        <div className="h-9 w-9 animate-spin rounded-full border-2 border-white/40 border-t-white" />
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/90">Loading page</p>
      </div>
    </div>
  );
}

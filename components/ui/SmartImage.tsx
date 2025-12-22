'use client';

import { useState } from 'react';

type SmartImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** Optional className for the outer wrapper (useful for layout sizing) */
  wrapperClassName?: string;
};

export default function SmartImage({
  wrapperClassName,
  className,
  onLoad,
  ...imgProps
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = event => {
    setLoaded(true);
    if (onLoad) onLoad(event);
  };

  return (
    <div className={wrapperClassName ?? 'relative h-full w-full overflow-hidden'}>
      {!loaded ? <div className="absolute inset-0 animate-pulse bg-slate-100" /> : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...imgProps}
        onLoad={handleLoad}
        className={className ?? 'h-full w-full object-cover'}
      />
    </div>
  );
}

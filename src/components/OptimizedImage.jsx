import React, { useState } from "react";

const OptimizedImage = ({
  src,
  alt = "",
  width = 1200,
  quality = 60,
  className = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const cleanSrc = src.split("?")[0];
  const transformations = `tr=w-${width},q-${quality},fo-auto`;
  const lowQualitySrc = `${cleanSrc}?tr=w-20,q-20,blur=100`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blur Placeholder */}
      <img
        src={lowQualitySrc}
        aria-hidden
        className={`absolute inset-0 w-full h-full object-cover filter blur-lg scale-110 transition duration-700 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Optimized Main Image */}
      <img
        src={`${cleanSrc}?${transformations}`}
        srcSet={`
          ${cleanSrc}?tr=w-400,q-${quality},fo-auto 400w,
          ${cleanSrc}?tr=w-800,q-${quality},fo-auto 800w,
          ${cleanSrc}?tr=w-${width},q-${quality},fo-auto ${width}w
        `}
        sizes="(max-width: 640px) 95vw, (max-width: 1024px) 80vw, 60vw"
        alt={alt}
        className={`w-full h-full object-contain transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default OptimizedImage;

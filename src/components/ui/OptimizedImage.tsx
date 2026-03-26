"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  imageclassName?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  imageclassName = "",
  fill = false,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        quality={85}
        onLoad={() => setIsLoading(false)}
        className={`duration-700 ${imageclassName}  ease-in-out ${
          isLoading ? "blur-2xl grayscale" : "blur-0 grayscale-0"
        } ${fill ? "object-cover" : ""}`}
      />
    </div>
  );
}

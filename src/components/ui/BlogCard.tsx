import React from "react";
import OptimizedImage from "./OptimizedImage";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { getMediaUrl } from "@/utils/helper";

interface BlogCardProps {
  image?: string | StaticImageData | null; // made optional
  date: string;
  title: string;
  description: string;
  bgColor?: string;
  dateColor?: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  date,
  title,
  description,
  bgColor = "bg-white",
  dateColor = "text-gray-500",
  slug,
}) => {
  const hasValidImage = () => {
    if (!image) return false;
    if (typeof image === "string") return image.trim() !== "";
    return true;
  };

  const isValid = hasValidImage();

  const processedImage =
    isValid && typeof image === "string" ? getMediaUrl(image) : image;

  return (
    <Link href={`/blog/${slug}`} className="block h-full group">
      <div
        className={`${bgColor} rounded-2xl flex flex-col h-full transition-all duration-300 hover:scale-[1.02] shadow-sm overflow-hidden`}
      >
        <div className="relative w-full h-48 md:h-64 overflow-hidden bg-gray-200">
          {isValid ? (
            typeof processedImage === "string" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={processedImage}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <OptimizedImage
                src={processedImage || ""}
                alt={title}
                fill
                className="w-full h-full"
                imageclassName="object-cover"
              />
            )
          ) : (
            // --- Placeholder (theme‑friendly) ---
            <div className="w-full h-full bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>

        <div className="flex flex-col grow p-6 md:p-8">
          <p
            className={`text-sm md:text-base font-bold mb-3 md:mb-4 ${dateColor}`}
          >
            {date}
          </p>
          <h2 className="text-xl md:text-2xl leading-tight font-bold text-black/75 mb-3 md:mb-4 line-clamp-2 min-h-14 md:min-h-16">
            {title}
          </h2>
          <p className="text-secondary/80 text-base md:text-lg leading-relaxed mb-6 md:mb-8 line-clamp-3 min-h-18 md:min-h-21">
            {description}
          </p>
          <div className="mt-auto">
            <div className="flex items-center gap-2 bg-secondary text-white py-1.5 px-3 md:py-2 md:px-4 rounded-lg hover:bg-secondary/90 transition-all text-base md:text-lg font-bold leading-5 md:leading-6 not-italic w-fit">
              Read more
              <Image
                src="/button-right-arrow.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="w-4 h-4 md:w-5 md:h-5"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

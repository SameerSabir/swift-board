import React from "react";
import OptimizedImage from "./OptimizedImage";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  image: string | StaticImageData;
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
  return (
    <Link href={`/blog/${slug}`} className="block h-full group">
      <div
        className={`${bgColor} rounded-2xl flex flex-col h-full transition-all duration-300 hover:scale-[1.02] shadow-sm overflow-hidden`}
      >
        <div className="relative w-full h-48 md:h-64 overflow-hidden">
          <OptimizedImage
            src={image}
            alt={title}
            fill
            className="w-full h-full"
            imageclassName="object-cover"
          />
        </div>
        <div className="flex flex-col grow p-6 md:p-8">
          <p
            className={`text-sm md:text-base font-bold mb-3 md:mb-4 ${dateColor}`}
          >
            {date}
          </p>
          <h2 className="text-xl md:text-2xl leading-tight font-bold text-black/75 mb-3 md:mb-4">
            {title}
          </h2>
          <p className="text-secondary/80 text-base md:text-lg leading-relaxed mb-6 md:mb-8 line-clamp-3">
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

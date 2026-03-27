import React from "react";
import BlogCard from "../ui/BlogCard";
import { BLOG_DATA, BLOG_THEMES } from "@/constants/blog.constant";

const Blogs = () => {
  return (
    <div className="relative min-h-screen mx-auto max-w-7xl px-4 md:px-10 flex py-40 md:py-44 flex-col justify-center overflow-hidden ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-center mb-12 lg:mb-18">
        Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {BLOG_DATA.map((blog, index) => {
          const theme = BLOG_THEMES[index % BLOG_THEMES.length];
          return (
            <BlogCard
              key={index}
              image={blog.image}
              date={blog.date}
              title={blog.title}
              description={blog.description}
              bgColor={theme.bgColor}
              dateColor={theme.dateColor}
              slug={blog.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;

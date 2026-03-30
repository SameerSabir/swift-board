"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import BlogCard from "../ui/BlogCard";
import { Blog } from "@/types/blog";
import Api from "@/lib/api";
import { BLOG_THEMES } from "@/constants/blog.constant";
import BlogCardSkeleton from "../ui/BlogCardSkeleton";

const ITEMS_PER_PAGE = 9;
const BLOG_TYPE = "2";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const observerTarget = useRef<HTMLDivElement>(null);

  const fetchBlogs = useCallback(async (pageNumber: number) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await Api.getAllBlogs(
        pageNumber,
        ITEMS_PER_PAGE,
        BLOG_TYPE
      );

      if (response.data && response.data.length > 0) {
        setBlogs((prevBlogs) => {
          const map = new Map(prevBlogs.map((b) => [b.id, b]));
          response.data.forEach((b) => map.set(b.id, b));
          return Array.from(map.values());
        });

        if (pageNumber >= response.totalPage) {
          setHasMoreData(false);
        }
      } else {
        setHasMoreData(false);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch blogs";
      setError(errorMessage);
      console.error("Error fetching blogs:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs(1);
  }, [fetchBlogs]);

  // Intersection Observer with rootMargin for smooth preload
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (
          entry.isIntersecting &&
          !isLoading &&
          hasMoreData &&
          blogs.length > 0
        ) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [isLoading, hasMoreData, blogs.length]);

  useEffect(() => {
    if (page > 1) {
      fetchBlogs(page);
    }
  }, [page, fetchBlogs]);

  return (
    <div className="relative min-h-screen mx-auto max-w-7xl px-4 md:px-10 flex pt-40 md:pt-44 pb-20 flex-col justify-center overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-center mb-12 lg:mb-18"
      >
        Blog
      </motion.h1>

      <AnimatePresence>
        {error && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
          >
            <p className="font-medium">Error loading blogs</p>
            <p className="text-sm">{error}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {blogs.map((blog, index) => {
          const theme = BLOG_THEMES[index % BLOG_THEMES.length];
          return (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              layout
              transition={{ layout: { duration: 0.3 } }}
            >
              <BlogCard
                image={blog.imagePath || ""}
                date={
                  blog.publishedAt
                    ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : new Date(blog.createdAt || "").toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )
                }
                title={blog.title}
                description={
                  blog.metaDescription || blog.content.substring(0, 120)
                }
                bgColor={theme.bgColor}
                dateColor={theme.dateColor}
                slug={blog.slug}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Loading skeletons with animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
              <motion.div key={i} variants={cardVariants}>
                <BlogCardSkeleton />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && blogs.length === 0 && !error && (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="anim-center [animation-delay:0.55s] flex justify-center"
        >
          <div className="flex flex-col items-center text-center max-w-2xl">
            <div className="text-6xl md:text-8xl mb-6 opacity-20">📝</div>
            <p className="text-secondary/70 text-xl md:text-2xl font-semibold mb-3">
              No blogs found
            </p>
            <p className="text-secondary/60 font-medium text-lg">
              Check back soon for amazing content!
            </p>
          </div>
        </motion.div>
      )}

      {!hasMoreData && blogs.length > 0 && !isLoading && page > 1 && (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="anim-center [animation-delay:0.55s] flex justify-center mt-6"
        >
          <div className="flex flex-col items-center text-center max-w-2xl">
            <div className="text-5xl md:text-6xl mb-4">🎉</div>
            <p className="text-secondary/70 text-xl font-semibold mb-2">
              You&apos;ve reached the end!
            </p>
            <p className="text-secondary/60 font-medium">
              You&apos;ve seen all our amazing stories. Thanks for reading!
            </p>
          </div>
        </motion.div>
      )}

      {/* Intersection Observer Target with animated loading indicator */}
      <div
        ref={observerTarget}
        className="h-4 w-full"
        aria-label="Load more trigger"
      >
        {isLoading && hasMoreData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex justify-center py-4"
          >
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blogs;

import React from "react";

const BlogCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl flex flex-col h-full shadow-sm overflow-hidden animate-pulse">
      <div className="w-full h-48 md:h-64 bg-gray-200" />

      <div className="flex flex-col grow p-6 md:p-8">
        <div className="h-4 w-32 bg-gray-200 rounded mb-4" />

        <div className="space-y-2 mb-4">
          <div className="h-6 bg-gray-200 rounded w-full" />
          <div className="h-6 bg-gray-200 rounded w-3/4" />
        </div>

        <div className="space-y-2 mb-8">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>

        <div className="mt-auto">
          <div className="h-10 w-32 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;

export default function BlogSkeleton() {
  return (
    <div className="relative min-h-screen mx-auto max-w-5xl px-4 md:px-10 flex pt-40 md:pt-44 flex-col justify-center overflow-hidden">
      <div className="animate-pulse">
        <div className="h-12 bg-gray-200 rounded w-3/4 mb-12"></div>
        <div className="aspect-21/9 bg-gray-200 rounded-2xl mb-16"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        </div>
      </div>
    </div>
  );
}

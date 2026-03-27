import OptimizedImage from "@/components/ui/OptimizedImage";
import { BLOG_DATA } from "@/constants/blog.constant";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = BLOG_DATA.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | SwiftBoard",
    };
  }

  return {
    title: `${blog.title} | SwiftBoard Blog`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [
        {
          url: blog.image.src,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "article",
      publishedTime: blog.date,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image.src],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = BLOG_DATA.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="relative min-h-screen mx-auto max-w-5xl px-4 md:px-10 flex py-20 md:py-44 flex-col justify-center overflow-hidden ">
      <div>
        <header className="mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary inline-block mb-8">
            {blog.title}
          </h1>
          <div className="relative w-full aspect-21/9 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 mb-16">
            <OptimizedImage
              src={blog.image}
              alt={blog.title}
              fill
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </header>

        <article
          className="space-y-6 text-secondary text-lg md:text-xl leading-relaxed
          [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:lg:text-5xl [&_h1]:font-bold [&_h1]:my-8 [&_h1]:font-plus-jakarta [&_h1]:text-secondary
          [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:lg:text-4xl [&_h2]:font-bold [&_h2]:my-6 [&_h2]:font-plus-jakarta [&_h2]:text-secondary
          [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-bold [&_h3]:my-5 [&_h3]:font-plus-jakarta [&_h3]:text-secondary
          [&_h4]:text-lg [&_h4]:md:text-xl [&_h4]:font-bold [&_h4]:my-4 [&_h4]:font-plus-jakarta [&_h4]:text-secondary
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4
          [&_li]:mb-3
          [&_p]:my-4
          [&_a]:text-primary [&_a]:underline [&_a:hover]:text-primary/80 [&_a]:transition-colors
          [&_blockquote]:border-l-4 [&_blockquote]:border-primary/30 [&_blockquote]:bg-gray-50 [&_blockquote]:p-6 [&_blockquote]:my-8 [&_blockquote]:italic
          [&_hr]:border-t [&_hr]:border-gray-200 [&_hr]:my-10
          [&_pre]:font-mono [&_pre]:bg-gray-900 [&_pre]:text-white [&_pre]:p-4 [&_pre]:rounded-xl [&_pre]:my-6 [&_pre]:overflow-x-auto
          [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-2xl [&_img]:my-10
          [&_table]:w-full [&_table]:border-collapse [&_table]:my-8 [&_table]:text-base
          [&_th]:bg-gray-50 [&_th]:font-semibold [&_th]:text-left [&_th]:border [&_th]:border-gray-200 [&_th]:px-4 [&_th]:py-3
          [&_td]:border [&_td]:border-gray-200 [&_td]:px-4 [&_td]:py-3"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return BLOG_DATA.map((blog) => ({
    slug: blog.slug,
  }));
}

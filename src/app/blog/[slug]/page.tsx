import { Suspense } from "react";
import { Metadata } from "next";
import GetStarted from "@/components/sections/Home/GetStarted";
import { getMediaUrl } from "@/lib/helper";
import { generateFAQSchema } from "@/schema/faq-schema";
import BlogSkeleton from "@/components/ui/BlogSkeleton";
import BlogContent from "@/components/pages/BlogContent";
import { getBlog } from "@/lib/getBlog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const blog = await getBlog(slug);
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
    const blogUrl = `${baseUrl}/blog/${slug}`;
    const ogImage = blog.imagePath ? getMediaUrl(blog.imagePath) : "";

    return {
      title: `${blog.metaTitle || blog.title} | SwiftBoard Blog`,
      description: blog.metaDescription,
      openGraph: {
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription,
        type: "article",
        url: blogUrl,
        images: ogImage
          ? [
              {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: blog.imageAlt || blog.title,
              },
            ]
          : [],
        publishedTime: blog.publishedAt || blog.createdAt,
      },
      twitter: {
        card: "summary_large_image",
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription,
        images: ogImage ? [ogImage] : [],
      },
      alternates: {
        canonical: blogUrl,
      },
    };
  } catch {
    return {
      title: "Blog Not Found",
    };
  }
}

export async function generateStaticParams() {
  const slugs: string[] = [];
  let page = 1;
  const pageSize = 100;
  let hasMore = true;

  try {
    while (hasMore) {
      const response = await (
        await import("@/lib/api")
      ).default.getAllBlogs(page, pageSize, "2");

      if (response.data && response.data.length > 0) {
        slugs.push(...response.data.map((blog) => blog.slug));
        hasMore = page < response.totalPage;
        page++;
      } else {
        hasMore = false;
      }
    }
  } catch {}

  return slugs.map((slug) => ({ slug }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;

  let faqSchema = null;

  try {
    const blog = await getBlog(slug);
    if (blog.faQs && blog.faQs.length > 0) {
      faqSchema = generateFAQSchema(blog.faQs);
    }
  } catch {}

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Suspense fallback={<BlogSkeleton />}>
        <BlogContent slug={slug} />
      </Suspense>
      <GetStarted />
    </>
  );
}

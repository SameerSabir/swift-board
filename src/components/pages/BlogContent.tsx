import { notFound } from "next/navigation";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { getMediaUrl, parseFaqs } from "@/lib/helper";
import { Blog } from "@/types/blog";
import FAQs from "@/components/Faqs";
import { getBlog } from "@/lib/getBlog";

interface BlogContentProps {
  slug: string;
}

export default async function BlogContent({ slug }: BlogContentProps) {
  let blog: Blog;
  try {
    blog = await getBlog(slug);
  } catch {
    notFound();
  }

  const imageUrl = blog.imagePath ? getMediaUrl(blog.imagePath) : "";
  const faqs = parseFaqs(blog.faQs);

  return (
    <>
      <div className="relative min-h-screen mx-auto max-w-5xl px-4 md:px-10 flex pt-40 md:pt-44 flex-col justify-center overflow-hidden">
        <div>
          <header className="mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary inline-block mb-12">
              {blog.title}
            </h1>
            <div className="relative w-full aspect-21/9 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 mb-16">
              {imageUrl ? (
                <OptimizedImage
                  src={imageUrl}
                  alt={blog.imageAlt || blog.title}
                  fill
                  priority
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">No image</span>
                </div>
              )}
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
      {faqs.length > 0 && (
        <FAQs
          title="Frequently Asked Questions"
          description="Got questions? We've got answers."
          faqs={faqs}
        />
      )}
    </>
  );
}

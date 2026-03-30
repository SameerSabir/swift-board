import { cache } from "react";
import Api from "@/lib/api";
import { Blog } from "@/types/blog";
import { notFound } from "next/navigation";

export const getBlog = cache(async (slug: string): Promise<Blog> => {
  const blog = await Api.getBlog(slug, "2");
  if (!blog || !blog.title || !blog.content) {
    notFound();
  }

  return blog;
});

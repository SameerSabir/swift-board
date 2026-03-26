import Blogs from "@/components/pages/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | SwiftBoard",
  description: "Stay up to date with the latest news, updates, and tips from SwiftBoard.",
};

export default function BlogListPage() {
  return (
    <main>
      <Blogs />
    </main>
  );
}

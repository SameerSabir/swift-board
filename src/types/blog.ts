export interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  slug: string;
  imagePath?: string;
  imageAlt?: string;
  publishedAt?: string | null;
  createdAt?: string;
  metaTitle?: string;
  metaDescription?: string;
  faQs?: string | { question: string; answer: string }[];
  blogKeyword?: string | string[];
  type?: number;
}

export interface PaginatedBlogs {
  data: Blog[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPage: number;
}

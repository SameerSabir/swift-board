import axios, { AxiosInstance } from "axios";
import { Blog, PaginatedBlogs } from "@/types/blog";

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 60000,
});

// Add request interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    throw error;
  }
);

const Api = {
  /**
   * Get all blogs with pagination and optional filtering by type
   * @param page - Page number (default: 1)
   * @param pageSize - Number of items per page (default: 10)
   * @param type - Optional blog type filter
   */
  async getAllBlogs(page = 1, pageSize = 10, type?: string) {
    try {
      const params: Record<string, string | number | undefined> = {
        page,
        pageSize,
      };

      if (type) {
        params.Type = type;
      }

      const response = await api.get<PaginatedBlogs>("/Blogs", { params });
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw {
          status: error.response?.status || 0,
          message: error.response?.data?.message || error.message,
        };
      }
      throw {
        status: 0,
        message: (error as Error).message || "Unknown error",
      };
    }
  },

  /**
   * Get a single blog by slug
   * @param slug - Blog slug/identifier
   * @param typeId - Optional type filter for the blog
   */
  async getBlog(slug: string, typeId?: string): Promise<Blog> {
    try {
      const params: Record<string, string | undefined> = {};

      if (typeId) {
        params.Type = typeId;
      }

      const response = await api.get<Blog>(`/Blogs/${slug}`, { params });
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw {
          status: error.response?.status || 0,
          message: error.response?.data?.message || error.message,
        };
      }
      throw {
        status: 0,
        message: (error as Error).message || "Unknown error",
      };
    }
  },
};

export default Api;
export { api };

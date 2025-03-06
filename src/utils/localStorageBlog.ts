import type { BlogPost } from "@/types/blog";
import { sampleBlogPosts } from "@/utils/sampleBlogs";

const STORAGE_KEY = "blogs";

const getFromStorage = (): BlogPost[] => {
  const blogsString = localStorage.getItem(STORAGE_KEY);
  return blogsString ? JSON.parse(blogsString) : [];
};

const updateToStorage = (blogs: BlogPost[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
};

export default {
  generate: () => {
    updateToStorage(sampleBlogPosts);
    return sampleBlogPosts;
  },
  get: (id: string) => {
    return getFromStorage().find((blog) => blog.id === id);
  },
  getAll: () => {
    const blogs = getFromStorage();
    return blogs.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  },
  add: (blog: BlogPost) => {
    const blogs = getFromStorage();
    blogs.push(blog);
    updateToStorage(blogs);
  },
  update: (updatedBlog: BlogPost) => {
    const blogs = getFromStorage();
    const index = blogs.findIndex((blog) => blog.id === updatedBlog.id);
    if (index !== -1) {
      blogs[index] = { ...blogs[index], ...updatedBlog };
      updateToStorage(blogs);
    }
  },
  delete: (id: string) => {
    const blogs = getFromStorage().filter((blog) => blog.id !== id);
    updateToStorage(blogs);
  },
};

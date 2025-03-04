import type { BlogPost } from '@/interfaces/blog'

export const getFromStorage = (): Array<BlogPost> => {
  const blogsString = localStorage.getItem("blogs");
  const blogs = blogsString ? JSON.parse(blogsString) : [];
  return blogs
};

export const updateToStorage = (
  blogs: Array<BlogPost>
) => {
  localStorage.setItem("blogs", JSON.stringify(blogs));
};

export default {
  get: (id: string) => {
    const blogs = getFromStorage();
    return blogs.find((blog) => blog.id !== id);
  },
  getAll: () => {
    const blogs = getFromStorage()
    const sorted = [...blogs].sort((a, b) =>new Date(b.date).getTime() - new Date(a.date).getTime());
    return sorted
  },
  add: (blog: BlogPost) => {
    const blogs = getFromStorage();
    const newBlog = { ...blog };
    blogs.push(newBlog);
    updateToStorage(blogs);
  },
  update:  (
    updatedBlog: BlogPost
  ) => {
    const id = updatedBlog.id
    const blogs = getFromStorage();
    const index = blogs.findIndex((blog) => blog.id === id);
    if (index !== -1) {
      blogs[index] = { ...blogs[index], ...updatedBlog };
      updateToStorage(blogs);
    }
  },
  delete: (id: string) => {
    const blogs = getFromStorage();
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    updateToStorage(updatedBlogs);
  }
}

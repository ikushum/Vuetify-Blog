import { generateUUID } from '@/utils/index'

const blogsList = [
  {
    id: generateUUID(),
    title: "Vuetify Best Practices for UI Design",
    date: "2025-02-25",
    text: "Learn how to create stunning, responsive UI layouts using Vuetify’s powerful components. Learn how to create stunning, responsive UI layouts using Vuetify’s powerful components.",
    author: "John Leider",
    image: "https://picsum.photos/400/200/?random=1",
  },
  {
    id: generateUUID(),
    title: "Mastering Vue 3: A Beginner's Guide",
    date: "2025-03-01",
    text: "An in-depth introduction to Vue 3, covering reactivity, components, and the composition API.",
    author: "Ishan Subedi",
    image: "https://picsum.photos/400/200/?random=2"
  },
  {
    id: generateUUID(),
    title: "Understanding Pinia: Vue’s New State Management",
    date: "2025-02-20",
    text: "A complete guide to Pinia, the lightweight and intuitive state management solution for Vue.",
    author: "John Smith",
    image: "https://picsum.photos/400/200/?random=3"
  },
  {
    id: generateUUID(),
    title: "Deploying a Vue App with Firebase Hosting",
    date: "2025-02-15",
    text: "Step-by-step tutorial on deploying Vue applications to Firebase Hosting for fast and secure hosting.",
    author: "Alice Johnson",
    image: "https://picsum.photos/400/200/?random=4"
  },
  {
    id: generateUUID(),
    title: "Optimizing Performance in Vue Applications",
    date: "2025-02-10",
    text: "Techniques to boost performance in Vue apps, including lazy loading, code splitting, and more.",
    author: "Michael Brown",
    image: "https://picsum.photos/400/200/?random=5"
  },
  {
    id: generateUUID(),
    title: "Deploying Vue Applications on Netify",
    date: "2025-02-10",
    text: "Techniques to boost performance in Vue apps, including lazy loading, code splitting, and more.",
    author: "Jane Doe",
    image: "https://picsum.photos/400/200/?random=6"
  },
  {
    id: generateUUID(),
    title: "Deploying Vue Applications on Amplify",
    date: "2025-02-10",
    text: "Techniques to boost performance in Vue apps, including lazy loading, code splitting, and more.",
    author: "Jane Doe",
    image: "https://picsum.photos/400/200/?random=7"
  }
];

export const loadBlogs = (): Array<{
  title: string;
  date: string;
  text: string;
  author: string;
  id: number;
}> => {
  const blogs = localStorage.getItem("blogs");
  return blogs ? JSON.parse(blogs) : blogsList;
};

export const saveBlogs = (
  blogs: Array<{
    id: number;
    title: string;
    date: string;
    text: string;
    author: string;
  }>
) => {
  localStorage.setItem("blogs", JSON.stringify(blogs));
};

export const addBlog = (blog: {
  title: string;
  date: string;
  text: string;
  author: string;
}) => {
  const blogs = loadBlogs();
  const newBlog = { ...blog, id: Date.now() }; // Using timestamp as unique ID
  blogs.push(newBlog);
  saveBlogs(blogs);
};

export const updateBlog = (
  id: number,
  updatedBlog: {
    title: string;
    date: string;
    text: string;
    author: string;
  }
) => {
  const blogs = loadBlogs();
  const index = blogs.findIndex((blog) => blog.id === id);
  if (index !== -1) {
    blogs[index] = { ...blogs[index], ...updatedBlog };
    saveBlogs(blogs);
  }
};

export const deleteBlog = (id: number) => {
  const blogs = loadBlogs();
  const updatedBlogs = blogs.filter((blog) => blog.id !== id);
  saveBlogs(updatedBlogs);
};

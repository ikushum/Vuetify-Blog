import type { BlogPost } from '@/types/blog'
import { generateUUID } from "@/utils/index";

export const sampleBlogPosts: BlogPost[] = [
  {
    id: generateUUID(),
    title: "Getting Started with Vue 3 Composition API",
    date: "2025-03-01",
    text: `Vue 3 introduces the Composition API, a powerful way to organize logic in components.\n\nIt allows for better code reuse and improved readability.\n\nIn this guide, we will explore how to use the Composition API to build maintainable Vue applications.`,
    author: "Evan You"
  },
  {
    id: generateUUID(),
    title: "Building a Responsive UI with Vuetify 3",
    date: "2025-02-25",
    text: `Vuetify 3 provides a powerful Material Design UI framework for Vue applications.\n\nTo make your app responsive, leverage Vuetify’s Grid System, breakpoints, and utility classes.\n\nThis guide covers best practices for creating a responsive UI.`,
    author: "John Doe"
  },
  {
    id: generateUUID(),
    title: "State Management in Vue with Pinia",
    date: "2025-02-20",
    text: `Vuex has long been the go-to for state management in Vue applications.\n\nHowever, Pinia offers a simpler and more efficient alternative with TypeScript support.\n\nLet's explore how Pinia makes state management easier and more scalable.`,
    author: "Jane Smith"
  },
  {
    id: generateUUID(),
    title: "JavaScript ES2025: What's New?",
    date: "2025-02-15",
    text: `JavaScript continues to evolve with new features.\n\nES2025 introduces exciting additions like pattern matching, pipeline operators, and new array methods.\n\nIn this article, we'll explore these features and how they can improve your workflow.`,
    author: "Kyle Simpson"
  },
  {
    id: generateUUID(),
    title: "Optimizing Performance in Large Vue Apps",
    date: "2025-02-10",
    text: `As Vue applications grow, performance optimization becomes crucial.\n\nStrategies like lazy loading, virtual scrolling, and debouncing can significantly improve app speed.\n\nThis guide will walk you through techniques to enhance your Vue app's performance.`,
    author: "Sarah Connor"
  },
  {
    id: generateUUID(),
    title: "The Future of Frontend: Trends in 2025",
    date: "2025-02-05",
    text: `Frontend development is evolving rapidly, with new frameworks and tools emerging every year.\n\n2025 will see increased adoption of Web Components, server-driven UI, and AI-powered development tools.\n\nLet’s take a look at what’s coming next in frontend development.`,
    author: "Chris Ferdinandi"
  },
  {
    id: generateUUID(),
    title: "Unit Testing in Vue with Vitest",
    date: "2025-02-01",
    text: `Vitest is a modern, fast testing framework designed for Vue applications.\n\nIt provides a Jest-compatible API while being optimized for Vue 3.\n\nThis tutorial will guide you through setting up Vitest and writing unit tests for Vue components.`,
    author: "Jessica Davis"
  }
];

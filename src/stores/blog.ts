import { defineStore } from 'pinia'
import localStorageBlog from '@/utils/localStorageBlog'
import type { BlogPost, BlogStoreState } from '@/types/blog'

export const useBlogStore = defineStore('blog', {
  state: (): BlogStoreState => ({
    blogs: localStorageBlog.getAll()
  }),
  getters: {
    getById: (state) => (id: string) => state.blogs.find((blog) => blog.id === id),
  },
  actions: {
    generate () {
      this.blogs = localStorageBlog.generate()
    },
    add (blog: BlogPost) {
      this.blogs.unshift(blog)
      localStorageBlog.add(blog)
    },
    update (blog: BlogPost) {
      localStorageBlog.update(blog)
      this.blogs = localStorageBlog.getAll()
    },
    delete (id: string) {
      localStorageBlog.delete(id)
      this.blogs = localStorageBlog.getAll()
    }
  }
})

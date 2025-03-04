import { defineStore } from 'pinia'
import blogDB from '@/utils/blogDatabase'
import type { BlogPost, BlogStoreState } from '@/interfaces/blog'

export const useBlogStore = defineStore('blog', {
  state: (): BlogStoreState => ({
    blogs: blogDB.getAll()
  }),
  getters: {
    getById: (state) => (id: string) => state.blogs.find((blog) => blog.id === id),
  },
  actions: {
    generate () {
      this.blogs = blogDB.generate()
    },
    add (blog: BlogPost) {
      this.blogs.unshift(blog)
      blogDB.add(blog)
    },
    update (blog: BlogPost) {
      blogDB.update(blog)
      this.blogs = blogDB.getAll()
    },
    delete (id: string) {
      blogDB.delete(id)
      this.blogs = blogDB.getAll()
    }
  }
})

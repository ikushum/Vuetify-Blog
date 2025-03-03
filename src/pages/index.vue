<template>
  <v-container>
    <h3 class="text-h5 font-weight-bold my-5">
      Latest Blog
    </h3>

    <div class="mb-10">
      <LargeBlogCard
        :blog="latestBlog"
      />
    </div>

    <h3 class="text-h6 font-weight-bold my-5">
      More Blogs
    </h3>

    <v-row class="mb-10">
      <v-col
        v-for="(blog) in popularBlogs"
        :key="blog.id"
        xs="12"
        sm="6"
        md="4"
      >
        <SmallBlogCard
          :blog="blog"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { loadBlogs } from '@/utils/blog'

const blogs = loadBlogs()

const latestBlog = computed(() => blogs[0])
const popularBlogs = computed(() => [...blogs].slice(1))
</script>

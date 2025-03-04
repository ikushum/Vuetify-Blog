<template>
  <template v-if="!blogs.length">
    <NoBlogPlaceholder />
  </template>

  <template v-else-if="blogs.length">
    <v-container>
      <h3 class="text-h5 font-weight-bold my-5">
        Latest Blog
      </h3>

      <div class="mb-10">
        <LargeBlogCard :blog="latestBlog" />
      </div>

      <template v-if="blogs.length > 1">
        <h3 class="text-h6 font-weight-bold my-5">
          More Blogs
        </h3>

        <v-row class="mb-10">
          <v-col
            v-for="blog in popularBlogs"
            :key="blog.id"
            cols="12"
            md="4"
          >
            <SmallBlogCard :blog="blog" />
          </v-col>
        </v-row>
      </template>
    </v-container>
  </template>
</template>

<script setup lang="ts">
import { useBlogStore } from '@/stores/blog'

const blogStore = useBlogStore()

const blogs = computed(() => blogStore.blogs)
const latestBlog = computed(() => blogs.value[0]);
const popularBlogs = computed(() => [...blogs.value].slice(1));
</script>

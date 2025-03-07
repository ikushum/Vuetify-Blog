<template>
  <v-container
    v-if="blogs.length"
    class="mb-5"
  >
    <h3 class="text-h5 font-weight-bold my-5">
      Latest Blog
    </h3>

    <div class="mb-10">
      <BlogCardLarge :blog="latestBlog" />
    </div>

    <template v-if="blogs.length > 1">
      <h3 class="text-h6 font-weight-bold my-5">
        More Blogs
      </h3>

      <v-row>
        <v-col
          v-for="blog in popularBlogs"
          :key="blog.id"
          cols="12"
          md="4"
        >
          <BlogCardSmall :blog="blog" />
        </v-col>
      </v-row>
    </template>
  </v-container>

  <BlogEmptyPlaceholder v-else />
</template>

<script setup lang="ts">
import { useBlogStore } from '@/stores/blog';

const blogStore = useBlogStore();

const blogs = computed(() => blogStore.blogs);
const latestBlog = computed(() => blogs.value[0]);
const popularBlogs = computed(() => blogs.value.slice(1));
</script>

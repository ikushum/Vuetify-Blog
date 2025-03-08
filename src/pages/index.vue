<template>
  <v-container v-if="blogs.length">
    <BlogList :blogs="blogs" />
  </v-container>

  <v-container v-else>
    <BlogEmptyPlaceholder />
  </v-container>
</template>

<script setup lang="ts">
import { useBlogStore } from '@/stores/blog';

const blogStore = useBlogStore();

const blogs = computed(() => blogStore.blogs);
</script>

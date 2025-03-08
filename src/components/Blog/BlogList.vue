<template>
  <div>
    <h3 class="text-h5 font-weight-bold my-5">
      Latest Blog
    </h3>

    <BlogCardSmall
      v-if="isSmallScreen"
      :blog="latestBlog"
      class="mb-5"
    />

    <BlogCardLarge
      v-else
      :blog="latestBlog"
      class="mb-10"
    />

    <template v-if="blogs.length > 1">
      <h3 class="text-h6 font-weight-bold my-5">
        More Blogs
      </h3>

      <v-row class="mb-5">
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
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import { type BlogListProps } from "@/types/blog";

const props = defineProps<BlogListProps>();

const display = useDisplay();

const latestBlog = computed(() => props.blogs[0]);
const popularBlogs = computed(() => props.blogs.slice(1));
const isSmallScreen = computed(() => display.smAndDown.value);
</script>


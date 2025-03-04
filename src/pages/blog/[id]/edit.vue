<template>
  <v-container v-if="blog">
    <v-row justify="center">
      <v-col
        cols="12"
        sm="6"
      >
        <div class="my-5 text-center">
          <h3 class="text-h4 mb-2 font-weight-bold">
            Update Blog
          </h3>

          <p class="text-grey">
            Please fill the form below to update yout blog.
          </p>
        </div>

        <BlogForm :default-values="blog" />
      </v-col>
    </v-row>
  </v-container>

  <NotFoundPage v-else />
</template>

<script lang="ts" setup>
import { useBlogStore } from '@/stores/blog'

const route = useRoute<'/blog/[id]/edit'>()
const blogStore = useBlogStore()

const blog = computed(() => blogStore.getById(route.params.id));
</script>

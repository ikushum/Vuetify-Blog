<template>
  <v-container v-if="blog">
    <v-row justify="center">
      <v-col
        cols="12"
        sm="6"
      >
        <div class="my-5 text-center position-relative">
          <v-btn
            :icon="mdiArrowLeft"
            variant="flat"
            class="position-absolute left-0"
            @click="router.back()"
          />

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
import { mdiArrowLeft } from "@mdi/js";
import { useBlogStore } from '@/stores/blog'

const router = useRouter()
const blogStore = useBlogStore()
const route = useRoute<'/blog/[id]/edit'>()

const blog = computed(() => blogStore.getById(route.params.id));
</script>

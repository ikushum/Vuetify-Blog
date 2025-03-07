<template>
  <v-container v-if="blog">
    <v-row justify="center">
      <v-col
        cols="12"
        sm="7"
      >
        <v-btn
          variant="flat"
          to="/"
          class="my-5"
          aria-label="Home"
        >
          <v-icon class="mr-2">
            {{ mdiArrowLeft }}
          </v-icon>

          All Blogs
        </v-btn>

        <BlogImage
          :src="imageUrl || ''"
          height="350px"
        />

        <h3 class="text-h3 my-7 font-weight-medium">
          {{ blog.title }}
        </h3>

        <v-list class="my-7 py-0 bg-transparent">
          <v-list-item
            :prepend-avatar="avatarUrl"
            :subtitle="formattedDate"
            :title="blog.author"
            class="pl-0"
          >
            <template #append>
              <v-btn
                :icon="mdiPencilOutline"
                size="small"
                variant="text"
                color="grey-darken-1"
                aria-label="Edit Blog"
                :to="`/blog/${blog.id}/edit`"
              />

              <v-btn
                :icon="mdiTrashCanOutline"
                size="small"
                variant="text"
                color="grey-darken-1"
                aria-label="Delete Blog"
                @click="isDeleteDialogOpen = true"
              />
            </template>
          </v-list-item>
        </v-list>

        <p class="formatted-text my-7 text-body-1">
          {{ blog.text }}
        </p>
      </v-col>
    </v-row>

    <BlogDeleteDialog
      v-model="isDeleteDialogOpen"
      :blog="blog"
      @success="router.push('/')"
    />
  </v-container>

  <NotFound v-else />
</template>

<script setup lang="ts">
import {
  mdiArrowLeft,
  mdiPencilOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import { formatDate, getRandomImageUrl } from "@/utils";
import { useBlogStore } from "@/stores/blog";
import { useRoute } from "vue-router";

const router = useRouter();
const blogStore = useBlogStore();
const route = useRoute<'/blog/[id]/'>()

const isDeleteDialogOpen = ref(false);

const blog = computed(() => blogStore.getById(route.params.id));
const formattedDate = computed(() => blog.value && formatDate(blog.value.date));
const avatarUrl = computed(() => blog.value && getRandomImageUrl({ id: blog.value.id, dimension: [20, 20] }));
const imageUrl = computed(() => blog.value && getRandomImageUrl({ id: blog.value.id, dimension: [400, 200] }));
</script>

<style scoped>
/* NOTE: Custom CSS was required here because the blog content have line break */
.formatted-text {
  white-space: pre-line;
  word-wrap: break-word;
}
</style>

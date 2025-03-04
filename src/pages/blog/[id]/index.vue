<template>
  <v-container v-if="blog">
    <v-row justify="center">
      <v-col
        cols="12"
        sm="7"
      >
        <div>
          <v-btn
            variant="flat"
            to="/"
            class="my-5"
          >
            <v-icon class="mr-2">
              {{ mdiArrowLeft }}
            </v-icon>

            All Blogs
          </v-btn>

          <v-img
            :src="`https://picsum.photos/400/200/?random=${blog.id}`"
            cover
            height="350px"
            class="rounded-lg"
            gradient="to left top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)"
          />

          <h3 class="text-h3 my-7 font-weight-bold">
            {{ blog.title }}
          </h3>

          <v-list class="my-7 py-0 bg-transparent">
            <v-list-item
              :prepend-avatar="`https://picsum.photos/400/200/?random=${
                blog.id + blog.title
              }`"
              :subtitle="date"
              :title="blog.author"
              class="pl-0"
            >
              <template #append>
                <v-btn
                  :icon="mdiPencilOutline"
                  size="small"
                  variant="text"
                  color="grey-darken-1"
                  :to="`/blog/${blog.id}/edit`"
                />

                <v-btn
                  :icon="mdiTrashCanOutline"
                  size="small"
                  variant="text"
                  color="grey-darken-1"
                  @click="isDeleteDialogOpen = true"
                />
              </template>
            </v-list-item>
          </v-list>

          <p
            class="formatted-text my-7 text-body-1"
          >
            {{ blog.text }}
          </p>
        </div>
      </v-col>
    </v-row>

    <DeleteBlogDialog
      v-model="isDeleteDialogOpen"
      :blog="blog"
      @success="router.push('/')"
    />
  </v-container>

  <NotFoundPage v-else />
</template>

<script lang="ts" setup>
import {
  mdiArrowLeft,
  mdiPencilOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import { formatDate } from "@/utils/index";
import { useBlogStore } from '@/stores/blog'

const router = useRouter()
const route = useRoute<'/blog/[id]/edit'>()
const blogStore = useBlogStore()

const isDeleteDialogOpen = ref(false)

const blog = computed(() => blogStore.getById(route.params.id));

const date = computed(() => {
  if (!blog.value) {
    return
  }

  return formatDate(blog.value.date)
});
</script>

<style scoped>
.formatted-text {
  white-space: pre-line; /* Preserves line breaks */
  word-wrap: break-word; /* Wraps long words */
}
</style>

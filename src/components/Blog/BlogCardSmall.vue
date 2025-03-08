<template>
  <v-card
    flat
    height="100%"
    color="transparent"
    class="d-flex flex-column"
  >
    <div class="mb-3">
      <router-link
        :to="`/blog/${props.blog.id}`"
        class=""
      >
        <BlogImage
          height="250px"
          :src="imageUrl"
          :lazy-src="imageLazyUrl"
          has-hover-effect
        />
      </router-link>
    </div>

    <div class="d-flex align-center">
      <v-avatar
        size="20px"
        class="mr-2"
      >
        <v-img
          :src="avatarUrl"
          :gradient="imageGradient"
          alt="Author Image"
        />
      </v-avatar>

      <span class="text-caption font-weight-light">{{ props.blog.author }}</span>
    </div>

    <v-card-title class="px-0 pt-1">
      <router-link
        :to="`/blog/${props.blog.id}`"
        class="text-decoration-none"
        :class="isDarkMode ? 'text-white' : 'text-black'"
      >
        {{ props.blog.title }}
      </router-link>
    </v-card-title>

    <v-card-text class="pa-0">
      {{ truncatedText }}
    </v-card-text>

    <v-spacer />

    <v-card-actions class="pt-0 px-0 mt-auto">
      <div class="d-flex align-center text-caption font-weight-light">
        <v-icon
          class="mr-2"
          size="x-small"
        >
          {{ mdiClockOutline }}
        </v-icon>

        {{ formattedDate }}
      </div>

      <v-spacer />

      <v-btn
        size="small"
        color="primary"
        :to="`/blog/${props.blog.id}`"
        aria-label="Full Blog"
      >
        Full Blog
      </v-btn>

      <v-menu>
        <template #activator="{ props: menuProps }">
          <v-btn
            :icon="mdiDotsVertical"
            size="small"
            variant="text"
            v-bind="menuProps"
            aria-label="Menu"
          />
        </template>

        <v-list>
          <v-list-item
            class="pl-1"
            @click="isDeleteDialogOpen = true"
          >
            <template #prepend>
              <v-btn
                :icon="mdiTrashCanOutline"
                size="small"
                variant="text"
                color="grey-darken-1"
                aria-label="Delete"
              />
            </template>

            <v-list-item-title> Delete </v-list-item-title>
          </v-list-item>

          <v-list-item
            class="pl-1"
            :to="`/blog/${props.blog.id}/edit`"
          >
            <template #prepend>
              <v-btn
                :icon="mdiPencilOutline"
                size="small"
                variant="text"
                color="grey-darken-1"
                aria-label="Edit"
              />
            </template>

            <v-list-item-title> Edit </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-actions>

    <BlogDeleteDialog
      v-model="isDeleteDialogOpen"
      :blog="props.blog"
    />
  </v-card>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify";
import {
  mdiTrashCanOutline,
  mdiPencilOutline,
  mdiDotsVertical,
  mdiClockOutline,
} from "@mdi/js";
import { type BlogSmallCardProps } from "@/types/blog";
import { formatDate, truncateString, getRandomImageUrl, imageGradient } from "@/utils";

const props = defineProps<BlogSmallCardProps>();

const theme = useTheme();
const isDeleteDialogOpen = ref(false);

const isDarkMode = computed(() => theme.global.name.value === "dark");

const formattedDate = computed(() => formatDate(props.blog.date));
const truncatedText = computed(() => truncateString(props.blog.text, 100));

const avatarUrl = computed(() => getRandomImageUrl({ id: props.blog.id, dimension: [20, 20] }));
const imageUrl = computed(() => getRandomImageUrl({ id: props.blog.id, dimension: [400, 200] }));
const imageLazyUrl = computed(() => getRandomImageUrl({ id: props.blog.id, dimension: [4, 2] }));
</script>

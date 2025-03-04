<template>
  <div>
    <v-img
      :src="`https://picsum.photos/400/200/?random=${props.blog.id}`"
      cover
      height="250px"
      class="rounded-lg mb-3"
      gradient="to left top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)"
    />

    <v-card
      flat
      height="100%"
      class="d-flex flex-column"
      :class="{ 'px-5 pt-5': isDarkMode }"
    >
      <div class="d-flex align-center">
        <v-avatar
          size="20px"
          class="mr-2"
        >
          <v-img
            :src="`https://picsum.photos/400/200/?random=${
              props.blog.id + props.blog.title
            }`"
            gradient="to left top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)"
          />
        </v-avatar>

        <span class="text-caption text-grey">
          {{ props.blog.author }}
        </span>
      </div>

      <v-card-title class="px-0 pt-1">
        {{ props.blog.title }}
      </v-card-title>

      <v-card-text class="pa-0">
        {{ text }}
      </v-card-text>

      <v-spacer />

      <v-card-actions class="pt-0 px-0">
        <div class="d-flex align-center text-caption text-grey">
          <v-icon
            class="mr-2"
            size="x-small"
          >
            {{ mdiClockOutline }}
          </v-icon>

          {{ date }}
        </div>

        <v-spacer />

        <v-btn
          size="small"
          color="primary"
          :to="'/blog'"
        >
          Read More
        </v-btn>

        <v-menu>
          <template #activator="{ props: menuProps }">
            <v-btn
              :icon="mdiDotsVertical"
              size="small"
              variant="text"
              v-bind="menuProps"
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
                  color="error"
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
                  color="primary"
                />
              </template>

              <v-list-item-title> Edit </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card-actions>
    </v-card>

    <DeleteBlogDialog
      v-model="isDeleteDialogOpen"
      :blog="props.blog"
    />
  </div>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify";
import {
  mdiTrashCanOutline,
  mdiPencilOutline,
  mdiDotsVertical,
  mdiClockOutline,
} from "@mdi/js";
import { formatDate, truncateString } from "@/utils/index";
import { type SmallBlogCardProps } from "@/interfaces/blog";

const props = defineProps<SmallBlogCardProps>();

const theme = useTheme();

const isDeleteDialogOpen = ref(false)

const date = computed(() => formatDate(props.blog.date));
const isDarkMode = computed(() => theme.global.name.value === "dark");
const text = computed(() => truncateString(props.blog.text, 100));
</script>

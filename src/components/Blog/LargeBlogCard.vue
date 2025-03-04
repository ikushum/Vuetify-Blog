<template>
  <v-row
    class="mb-10"
    align="center"
  >
    <v-col
      cols="12"
      md="7"
    >
      <v-img
        :height="isSmallScreen ? '250px' : '350px'"
        :src="`https://picsum.photos/400/200/?random=${props.blog.id}`"
        cover
        class="rounded-lg"
        gradient="to left top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)"
      />
    </v-col>

    <v-col
      md="5"
      cols="12"
    >
      <v-card
        flat
        height="100%"
      >
        <v-card-text
          class="pb-0"
          :class="{ 'pt-0': isSmallScreen && !isDarkMode }"
        >
          <div class="d-flex align-center">
            <v-avatar
              size="20px"
              class="mr-2"
            >
              <v-img
                gradient="to left top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)"
                :src="`https://picsum.photos/400/200/?random=${
                  props.blog.id + props.blog.title
                }`"
              />
            </v-avatar>

            <span class="text-grey">
              {{ props.blog.author }}
            </span>
          </div>
        </v-card-text>

        <v-card-title class="text-h4">
          {{ props.blog.title }}
        </v-card-title>

        <v-card-text class="text-body-1 py-2">
          {{ text }}
        </v-card-text>

        <v-card-actions class="px-4">
          <div class="d-flex align-center text-grey">
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
    </v-col>

    <DeleteBlogDialog
      v-model="isDeleteDialogOpen"
      :blog="props.blog"
    />
  </v-row>
</template>

<script lang="ts" setup>
import { useTheme, useDisplay } from "vuetify";
import {
  mdiTrashCanOutline,
  mdiPencilOutline,
  mdiDotsVertical,
  mdiClockOutline,
} from "@mdi/js";
import { type LargeBlogCardProps } from "@/interfaces/blog";
import { formatDate, truncateString } from "@/utils/index";

const props = defineProps<LargeBlogCardProps>();

const theme = useTheme();
const display = useDisplay();

const isDeleteDialogOpen = ref(false)

const date = computed(() => formatDate(props.blog.date));
const isSmallScreen = computed(() => display.mobile.value);
const isDarkMode = computed(() => theme.global.name.value === "dark");
const text = computed(() => truncateString(props.blog.text, 150));
</script>

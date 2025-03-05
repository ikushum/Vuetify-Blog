<template>
  <v-row
    class="mb-10"
    align="center"
  >
    <v-col
      cols="12"
      md="7"
    >
      <router-link :to="`/blog/${props.blog.id}`">
        <v-img
          :height="isSmallScreen ? '250px' : '350px'"
          :src="imageUrl"
          cover
          class="rounded-lg"
          :gradient="imageGradient"
        />
      </router-link>
    </v-col>

    <v-col
      md="5"
      cols="12"
    >
      <v-card
        flat
        height="100%"
        color="transparent"
      >
        <v-card-text
          :class="{ 'pt-0': isSmallScreen }"
          class="pb-0"
        >
          <div class="d-flex align-center">
            <v-avatar
              size="20px"
              class="mr-2"
            >
              <v-img
                :src="avatarUrl"
                :gradient="imageGradient"
              />
            </v-avatar>
            <span class="text-grey">{{ props.blog.author }}</span>
          </div>
        </v-card-text>

        <v-card-title class="text-h4">
          <router-link
            :to="`/blog/${props.blog.id}`"
            class="text-decoration-none"
            :class="isDarkMode ? 'text-white' : 'text-black'"
          >
            {{ props.blog.title }}
          </router-link>
        </v-card-title>

        <v-card-text class="text-body-1 py-2">
          {{ truncatedText }}
        </v-card-text>

        <v-card-actions class="px-4">
          <div class="d-flex align-center text-grey">
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
            color="primary"
            :to="`/blog/${props.blog.id}`"
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
                    color="grey-darken-1"
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
import { formatDate, truncateString, getRandomImageUrl, imageGradient } from "@/utils/index";

const props = defineProps<LargeBlogCardProps>();

const theme = useTheme();
const display = useDisplay();

const isDeleteDialogOpen = ref(false);

const isSmallScreen = computed(() => display.mobile.value);
const isDarkMode = computed(() => theme.global.name.value === "dark");

const formattedDate = computed(() => formatDate(props.blog.date));
const truncatedText = computed(() => truncateString(props.blog.text, 150));

const avatarUrl = computed(() => getRandomImageUrl({id: props.blog.id, dimension: [20, 20]}));
const imageUrl = computed(() => getRandomImageUrl({id: props.blog.id, dimension: [400, 200]}));
</script>

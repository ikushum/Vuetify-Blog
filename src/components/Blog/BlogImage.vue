<template>
  <v-img
    :src="props.src"
    :height="props.height"
    :gradient="imageGradient"
    cover
    class="rounded-lg"
  >
    <template #placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular
          color="grey-lighten-4"
          indeterminate
        />
      </div>
    </template>
  </v-img>
</template>

<script lang="ts" setup>
import { type BlogImageProps } from "@/types/blog";
import { imageGradient } from "@/utils/index";

const props = defineProps<BlogImageProps>();
</script>

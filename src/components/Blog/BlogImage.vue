<template>
  <v-hover :disabled="!props.hasHoverEffect">
    <template #default="{ isHovering, props: hoverProps }">
      <v-img
        :src="props.src"
        :height="props.height"
        :gradient="isHovering ? imageGradientHover : imageGradient"
        cover
        v-bind="hoverProps"

        alt="Blog Image"
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
  </v-hover>
</template>

<script lang="ts" setup>
import { type BlogImageProps } from "@/types/blog";
import { imageGradient, imageGradientHover } from "@/utils/index";

const props = defineProps<BlogImageProps>();
</script>

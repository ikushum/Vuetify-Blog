<template>
  <div>
    <v-img
      :src="blog.image"
      cover
      height="250px"
      class="rounded-lg"
      gradient="to left top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)"
    />

    <v-card
      flat
      tile
      class="d-flex flex-column"
      :class="{'px-5': isDarkMode}"
    >
      <v-card-title
        class="title-text px-0"
      >
        {{ props.blog.title }}
      </v-card-title>

      <v-card-text class="pa-0">
        {{ text }}
      </v-card-text>

      <v-spacer />

      <v-card-actions class="pt-0 px-0">
        <div class="text-caption text-grey">
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
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify'
import {type SmallBlogCardProps} from '@/interfaces/blog'
import { formatDate, truncateString } from '@/utils/index'

const theme = useTheme()

const props = defineProps<SmallBlogCardProps>()

const date = computed(() => formatDate(props.blog.date))
const isDarkMode = computed(() => theme.global.name.value === 'dark')
const text = computed(() => truncateString(props.blog.text, 100) )
</script>


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
        :src="props.blog.image"
        cover
        height="350px"
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
        tile
        height="100%"
      >
        <v-card-text
          class="text-grey pb-0"
          :class="{'pt-0': isSmallScreen && !isDarkMode}"
        >
          {{ date }}
        </v-card-text>

        <v-card-title class="text-h4">
          {{ props.blog.title }}
        </v-card-title>

        <v-card-text class="text-body-1">
          {{ text }}
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="primary"
            :to="'/blog'"
          >
            Read More
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { useTheme, useDisplay } from 'vuetify'
import {type LargeBlogCardProps} from '@/interfaces/blog'
import { formatDate, truncateString } from '@/utils/index'

const theme = useTheme()
const display = useDisplay()

const props = defineProps<LargeBlogCardProps>()

const date = computed(() => formatDate(props.blog.date))
const isSmallScreen = computed(() => display.mobile.value)
const isDarkMode = computed(() => theme.global.name.value === 'dark')
const text = computed(() => truncateString(props.blog.text, 150) )
</script>

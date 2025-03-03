<template>
  <v-app-bar
    app
    dark
    hide-on-scroll
    color="grey-darken-4"
  >
    <v-app-bar-title>
      <AppLogo />
    </v-app-bar-title>

    <template #append>
      <v-tooltip location="top">
        <template #activator="{ props }">
          <v-btn
            :icon="themeIcon"
            v-bind="props"
            class="mr-3"
            density="compact"
            @click="toggleTheme"
          />
        </template>

        <span>
          Switch to {{ isDarkMode ? "Light Mode" : "Dark Mode" }}
        </span>
      </v-tooltip>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify'
import {  mdiMoonWaningCrescent, mdiWhiteBalanceSunny } from '@mdi/js';

const theme = useTheme()

const isDarkMode = computed(() => theme.global.name.value === 'dark')

const themeIcon = computed(() => isDarkMode.value ? mdiWhiteBalanceSunny : mdiMoonWaningCrescent )

function toggleTheme () {
  theme.global.name.value = isDarkMode.value ? 'light' : 'dark'
}
</script>

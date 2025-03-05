<template>
  <v-app-bar
    app
    dark
    color="grey-darken-4"
  >
    <v-app-bar-title>
      <v-btn
        to="/"
        :active="false"
      >
        <v-icon
          class="mr-1"
          :icon="mdiHomeOutline"
        />
        <span>Home</span>
      </v-btn>
    </v-app-bar-title>

    <template #append>
      <v-btn
        class="mx-5"
        color="white"
        to="/create"
      >
        <v-icon>{{ mdiPlus }}</v-icon>
        <span>Create</span>
      </v-btn>

      <v-tooltip location="top">
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            :icon="themeIcon"
            class="mr-7"
            density="compact"
            @click="toggleTheme"
          />
        </template>
        <span>Switch to {{ switchThemeTooltipText }}</span>
      </v-tooltip>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify";
import {
  mdiMoonWaningCrescent,
  mdiWhiteBalanceSunny,
  mdiPlus,
  mdiHomeOutline,
} from "@mdi/js";

const theme = useTheme();

const isDarkMode = computed(() => theme.global.current.value.dark);
const themeIcon = computed(() =>
  isDarkMode.value ? mdiWhiteBalanceSunny : mdiMoonWaningCrescent
);
const switchThemeTooltipText = computed(() =>
  isDarkMode.value ? "Light Mode" : "Dark Mode"
);

const toggleTheme = () => {
  theme.global.name.value = isDarkMode.value ? "light" : "dark";
};
</script>

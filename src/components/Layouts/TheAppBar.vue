<template>
  <v-app-bar
    app
    dark
    color="grey-darken-4"
  >
    <v-app-bar-title>
      <router-link
        to="/"
        class="text-decoration-none"
      >
        <AppLogo />
      </router-link>
    </v-app-bar-title>

    <template #append>
      <v-btn
        class="mx-5"
        color="white"
        to="/create"
      >
        <v-icon>{{ mdiPlus }}</v-icon>
        New
      </v-btn>

      <v-tooltip location="top">
        <template #activator="{ props }">
          <v-btn
            :icon="themeIcon"
            v-bind="props"
            class="mr-10"
            density="compact"
            @click="toggleTheme"
          />
        </template>

        <span> Switch to {{ isDarkMode ? "Light Mode" : "Dark Mode" }} </span>
      </v-tooltip>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify";
import { mdiMoonWaningCrescent, mdiWhiteBalanceSunny, mdiPlus } from "@mdi/js";

const theme = useTheme();

const isDarkMode = computed(() => theme.global.name.value === "dark");
const themeIcon = computed(() =>
  isDarkMode.value ? mdiWhiteBalanceSunny : mdiMoonWaningCrescent
);

function toggleTheme() {
  theme.global.name.value = isDarkMode.value ? "light" : "dark";
}
</script>

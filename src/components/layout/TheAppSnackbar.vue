<template>
  <v-snackbar
    v-model="snackbarStore.snackbar.isOpen"
    :color="snackbarStore.snackbar.color"
  >
    <span>
      {{ snackbarStore.snackbar.message }}
    </span>

    <template #actions>
      <v-btn
        icon
        size="small"
        @click="snackbarStore.hide()"
      >
        <v-icon small>
          {{ mdiClose }}
        </v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { mdiClose } from "@mdi/js";
import { useSnackbarStore } from "@/stores/snackbar";

const snackbarStore = useSnackbarStore();
</script>

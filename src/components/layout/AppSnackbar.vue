<template>
  <v-snackbar
    :model-value="snackbarStore.isOpen"
    :color="snackbarStore.color"
    @update:model-value="handleSnackbarValueChange"
  >
    <span>
      {{ snackbarStore.message }}
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

function handleSnackbarValueChange (isOpen: boolean) {
  if (!isOpen) {
    snackbarStore.hide()
  }
}
</script>

<template>
  <v-dialog
    :model-value="props.modelValue"
    max-width="400"
    persistent
  >
    <v-card
      rounded="lg"
      title="Confirm Delete"
      text="Are you sure you want to delete this blog?"
    >
      <template #actions>
        <v-spacer />

        <v-btn
          aria-label="Cancel"
          @click="emit('update:model-value', false)"
        >
          Cancel
        </v-btn>

        <v-btn
          color="error"
          aria-label="Delete"
          @click="deleteBlog"
        >
          Delete
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { useBlogStore } from "@/stores/blog";
import { useSnackbarStore } from "@/stores/snackbar";
import type { BlogDeleteDialogProps } from "@/types/blog";

const props = defineProps<BlogDeleteDialogProps>();
const emit = defineEmits(["update:model-value", "success"]);

const blogStore = useBlogStore();
const snackbarStore = useSnackbarStore();

function deleteBlog() {
  blogStore.delete(props.blog.id)

  snackbarStore.show({
    color: '',
    isOpen: true,
    message: 'The blog post was deleted.'
  })

  emit('update:model-value', false)
  emit('success')
}
</script>

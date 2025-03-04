<template>
  <v-dialog
    :model-value="props.modelValue"
    max-width="400"
    persistent
  >
    <v-card
      title="Confirm Delete"
      text="Are you sure you want to delete this blog?"
    >
      <template #actions>
        <v-spacer />

        <v-btn @click="emit('update:modelValue', false)">
          Cancel
        </v-btn>

        <v-btn
          color="error"
          @click="deleteBlog"
        >
          Delete
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { useBlogStore } from '@/stores/blog'
import { useSnackbarStore } from '@/stores/snackbar'
import { type DeleteBlogDialogProps } from "@/interfaces/blog";

const props = defineProps<DeleteBlogDialogProps>();
const emit = defineEmits(["update:modelValue"]);

const blogStore = useBlogStore()
const snackbarStore = useSnackbarStore()

function deleteBlog () {
  blogStore.delete(props.blog.id)

  snackbarStore.show({
    color: '',
    isOpen: true,
    message: 'The blog post was deleted.'
  })

  emit('update:modelValue', false)
}
</script>

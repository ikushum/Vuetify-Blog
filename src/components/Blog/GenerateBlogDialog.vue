<template>
  <v-dialog
    :model-value="props.modelValue"
    max-width="400"
    persistent
  >
    <v-card
      rounded="lg"
      title="Please Confirm"
      text="This will help you get started by generating sample blogs. Are you sure you want to generate?"
    >
      <template #actions>
        <v-spacer />

        <v-btn @click="emit('update:model-value', false)">
          Cancel
        </v-btn>

        <v-btn
          color="primary"
          @click="generateBlogs"
        >
          Generate
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { useBlogStore } from '@/stores/blog'
import { useSnackbarStore } from '@/stores/snackbar'

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits(["update:model-value"]);

const blogStore = useBlogStore()
const snackbarStore = useSnackbarStore()

function generateBlogs () {
  blogStore.generate()

  snackbarStore.show({
    color: '',
    isOpen: true,
    message: 'Sample blogs have been generated'
  })

  emit('update:model-value', false)
}
</script>

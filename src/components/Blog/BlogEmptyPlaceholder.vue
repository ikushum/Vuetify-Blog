<template>
  <div class="fill-height d-flex flex-column align-center justify-center py-10">
    <div class="text-h2 bg-grey-lighten-3 pa-10 mb-10 rounded-circle">
      <v-icon color="grey">
        {{ mdiFolderOutline }}
      </v-icon>
    </div>

    <div class="mb-5 text-center">
      <h3 class="text-h4 mb-2 font-weight-bold">
        You haven't posted any blogs yet
      </h3>
      <p class="font-weight-light">
        Start creating blogs by clicking on "Create New"
      </p>
    </div>

    <v-btn
      flat
      color="primary"
      class="px-10 mb-1"
      aria-label="Create New"
      @click="router.push('/create')"
    >
      Create New
    </v-btn>

    <div class="my-2">
      or
    </div>

    <v-btn
      variant="text"
      color="primary"
      class="px-10"
      aria-label="Generate Sample Blogs"
      @click="isGenerateBlogDialogOpen = true"
    >
      Generate Sample Blogs
    </v-btn>

    <BlogGenerateDialog v-model="isGenerateBlogDialogOpen" />
  </div>
</template>

<script lang="ts" setup>
import { mdiFolderOutline } from "@mdi/js";

const router = useRouter();
const isGenerateBlogDialogOpen = ref(false);
</script>

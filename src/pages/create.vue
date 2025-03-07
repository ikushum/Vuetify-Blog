<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="6"
      >
        <div class="my-5 text-center position-relative">
          <v-btn
            :icon="mdiArrowLeft"
            variant="flat"
            aria-label="Back"
            class="position-absolute left-0"
            @click="router.back()"
          />

          <h3 class="text-h4 mb-2 font-weight-bold">
            Post a Blog
          </h3>

          <p class="font-weight-light">
            Please fill the form below to create a new blog post.
          </p>
        </div>

        <BlogForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { mdiArrowLeft } from "@mdi/js";

const router = useRouter();
</script>

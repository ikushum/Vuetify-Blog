<template>
  <v-container
    class="py-16 fill-height d-flex flex-column align-center justify-center"
  >
    <div class="text-h2 bg-grey-lighten-3 pa-10 mb-10 rounded-circle">
      <v-icon color="grey">
        {{ mdiFolderOutline }}
      </v-icon>
    </div>

    <div class="mb-5 text-center">
      <h3 class="text-h4 mb-2 font-weight-bold">
        You haven't posted any blogs yet
      </h3>

      <p class="text-grey">
        Start creating blogs by clicking on "Create Blog"
      </p>
    </div>

    <v-btn
      flat
      color="primary"
      class="px-10 mb-10"
      @click="router.push({ path: '/create' })"
    >
      Create New
    </v-btn>
  </v-container>
</template>

<script lang="ts" setup>
import { mdiFolderOutline } from "@mdi/js";

const router = useRouter();</script>

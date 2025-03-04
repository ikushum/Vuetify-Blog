<template>
  <v-container class="fill-height d-flex flex-column align-center justify-center">
    <h1 class="text-h2 font-weight-bold">
      404
    </h1>

    <p class="text-subtitle-1 my-5">
      Oops! The page you're looking for doesn't exist.
    </p>

    <v-btn
      flat
      color="primary"
      @click="router.push({path: '/'})"
    >
      Go Home
    </v-btn>
  </v-container>
</template>

<script lang="ts" setup>
const router = useRouter()
</script>


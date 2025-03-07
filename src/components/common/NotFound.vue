<template>
  <v-container class="fill-height">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="auto"
        class="text-center"
      >
        <h1 class="text-h2 font-weight-bold">
          404
        </h1>

        <p class="text-subtitle-1 my-5">
          Oops! The page you're looking for doesn't exist.
        </p>

        <v-btn
          flat
          color="primary"
          class="px-10"
          aria-label="Go Home"
          @click="router.push('/')"
        >
          Go Home
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const router = useRouter();
</script>


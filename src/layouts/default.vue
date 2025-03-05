<template>
  <v-app>
    <TheAppBar />

    <v-main>
      <router-view />
    </v-main>

    <TheAppFooter />

    <TheAppSnackbar />
  </v-app>
</template>

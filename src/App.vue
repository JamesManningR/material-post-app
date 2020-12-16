<template>
  <v-app>
    <app-header />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/app/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader
  },
  data: () => ({
    //
  })
};
</script>

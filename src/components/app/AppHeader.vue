<template>
  <header>
    <v-app-bar app dark primary dense class="mb-5">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="title"
          >Your <span class="font-weight-light">ideas</span></span
        >
      </v-toolbar-title>

      <v-spacer />

      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
          <v-list-item href="https://github.com/JamesManningR/demo-dev-env">
            <v-list-item-title>Github repo</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" class="d-block">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-view-grid</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Your Posts</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-car</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cars</v-list-item-title>
          </v-list-item>

          <v-list-item class="mt-5">
            <v-list-item-avatar>
              <img src="http://lorempixel.com/200/200/animals" />
            </v-list-item-avatar>
            <v-list-item-title>Cars</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  })
};
</script>

<style></style>

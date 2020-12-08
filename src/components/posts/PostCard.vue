<template>
  <v-card>
    <v-card-text>
      <h2 class="text--primary display-1">
        {{ post.title }}
      </h2>
      <p>
        {{ post.body }}
      </p>
      <time>
        {{ new Date(post.dateUpdated).toLocaleDateString() }}
      </time>
    </v-card-text>
    <v-card-actions> </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    postId: String,
    post: {
      title: String,
      body: String
    }
  }
};
</script>

<style lang="sass" scoped></style>

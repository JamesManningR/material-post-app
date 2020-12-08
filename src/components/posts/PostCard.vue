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
    <v-card-actions>
      <v-spacer />
      <v-btn icon @click="deletePost()">
        <v-icon> mdi-trash-can-outline </v-icon>
      </v-btn>
    </v-card-actions>
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
  },
  methods: {
    deletePost() {
      this.$store
        .dispatch("post/deletePost", this.postId)
        .catch(err => {
          console.error(err);
          return;
        })
        .then(() => {
          this.$emit("postUpdated", true);
        });
    }
  }
};
</script>

<style lang="sass" scoped></style>

<template>
  <v-container>
    <form @submit.prevent="isNew ? createPost() : updatePost()">
      <v-text-field
        label="Title"
        type="text"
        name="title"
        v-model="newPost.title"
      >
      </v-text-field>
      <v-textarea name="body" label="Body" v-model="newPost.body" />
      <slot name="submit"></slot>
    </form>
  </v-container>
</template>

<script>
export default {
  props: {
    isNew: {
      type: Boolean,
      default: false
    },
    post: {
      type: Object
    },
    postId: String
  },
  data() {
    return {
      newPost: this.post
        ? this.post
        : {
            title: "",
            body: ""
          }
    };
  },
  methods: {
    createPost() {
      this.$store
        .dispatch("post/createPost", this.newPost)
        .catch(err => {
          console.error(err);
          return;
        })
        .then(() => {
          this.$emit("postCreated", this.newPost);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>

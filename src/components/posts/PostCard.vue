<template>
  <v-card>
    <v-card-text v-if="!editMode">
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
    <post-edit-form
      v-else
      @postUpdated="editMode = false"
      :post="post"
      :post-id="postId"
    >
      <v-btn color="primary" slot="submit" type="submit"> Update </v-btn>
    </post-edit-form>
    <v-card-actions>
      <v-spacer />
      <v-btn icon @click="editMode = !editMode">
        <v-icon v-if="!editMode">mdi-pencil</v-icon>
        <v-icon v-else>mdi-close</v-icon>
      </v-btn>
      <v-btn icon @click="deletePost()">
        <v-icon> mdi-trash-can-outline </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import PostEditForm from "@/components/posts/PostEditForm";

export default {
  components: {
    PostEditForm
  },
  props: {
    postId: String,
    post: {
      title: String,
      body: String
    }
  },
  data() {
    return {
      editMode: false
    };
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

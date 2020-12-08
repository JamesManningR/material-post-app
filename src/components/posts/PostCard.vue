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
      <v-btn icon @click="editMode = true">
        <v-icon left>mdi-pencil</v-icon>
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
  }
};
</script>

<style lang="sass" scoped></style>

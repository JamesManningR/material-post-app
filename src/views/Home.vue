<template>
  <main>
    <v-container>
      <h1 class="display-3 mb-2 font-weight-bold">Posts</h1>
      <section>
        <v-expansion-panels class="mb-4">
          <v-expansion-panel>
            <v-expansion-panel-header>Create a post</v-expansion-panel-header>
            <v-expansion-panel-content>
              <post-edit-form isNew>
                <v-btn
                  class="align-right"
                  color="primary"
                  slot="submit"
                  type="submit"
                >
                  Create
                </v-btn>
              </post-edit-form>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </section>
      <section>
        <h2>Here is a list of posts</h2>
        <ul class="row">
          <article
            v-for="(post, key) in orderedPosts"
            :key="key"
            class="col-12 col-md-6 col-lg-4 col-xl-3"
          >
            <post-card :postId="post.id" :post="post"></post-card>
          </article>
        </ul>
      </section>
    </v-container>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

import PostEditForm from "@/components/posts/PostEditForm";
import PostCard from "@/components/posts/PostCard";

export default {
  name: "Home",
  components: {
    PostEditForm,
    PostCard
  },
  computed: {
    ...mapGetters("post", ["orderedPosts"])
  },
  beforeCreate() {
    this.$store.dispatch("post/fetchPosts");
  }
};
</script>

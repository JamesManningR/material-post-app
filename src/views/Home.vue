<template>
  <main>
    <v-container>
      <h1 class="display-3 mb-2 font-weight-bold">Posts</h1>
      <section>
        <h2>Create a post</h2>
        <post-edit-form isNew v-model="post">
          <v-btn color="primary" slot="submit" type="submit"> Create </v-btn>
        </post-edit-form>
      </section>
      <section>
        <h2>Here is a list of posts</h2>
        <ul>
          <article>
            <h3>Post title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              saepe laudantium distinctio. Quo fugit dolores, animi asperiores
              modi tenetur consequatur doloremque dolor doloribus, quis eaque,
              officia ad esse quia inventore?
            </p>
          </article>
        </ul>
      </section>
    </v-container>
  </main>
</template>

<script>
import PostEditForm from "@/components/posts/PostEditForm";

export default {
  name: "Home",
  components: {
    PostEditForm
  },
  data() {
    return {
      post: {
        title: "",
        body: ""
      }
    };
  }
};
</script>

import ApiService from "../../services/api.service";

const api = new ApiService(process.env.VUE_APP_API_URL);

export const namespaced = true;

export const state = {
  posts: [],
  post: {}
};

export const mutations = {
  ADD_POST(state, post) {
    state.posts.push(post);
  },
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  RESET_POSTS(state) {
    state.posts = {};
  },
  SET_POST(state, post) {
    state.post = post;
  },
  RESET_POST(state) {
    state.post = {};
  },
  UPDATE_POST(state, { post, id }) {
    state.posts[id] = post;
  },
  REMOVE_POST(state, id) {
    const deletedPostIndex = state.posts.findIndex(post => post.id == id);
    state.posts.splice(deletedPostIndex, 1);
  }
};

export const actions = {
  async createPost({ commit }, post) {
    const createdPost = await api
      .postPost(post)
      .catch(err => {
        throw err;
      })
      .then(post => {
        commit("ADD_POST", post);
        commit("SET_POST", {});
        return post;
      });
    return createdPost;
  },
  async fetchPosts({ commit }) {
    const foundPosts = await api
      .getPosts()
      .catch(err => {
        throw err;
      })
      .then(posts => {
        commit("SET_POSTS", posts);
        return posts;
      });
    return foundPosts;
  },
  async fetchPost({ commit }, id) {
    const foundPost = await api
      .getPost(id)
      .catch(err => {
        throw err;
      })
      .then(post => {
        commit("SET_POST", post);
        return post;
      });
    return foundPost;
  },
  resetPost({ commit }) {
    commit("RESET_POST");
  },
  async updatePost({ commit }, postInfo) {
    const { post, id } = postInfo;
    const updatedPost = await api
      .updatePost(post, id)
      .catch(err => {
        throw err.data.message;
      })
      .then(() => {
        commit("UPDATE_POST", { post, id });
        return post;
      });
    return updatedPost;
  },
  async deletePost({ commit }, postId) {
    const deletedPost = await api
      .deletePost(postId)
      .catch(err => {
        throw err;
      })
      .then(() => {
        commit("REMOVE_POST", postId);
        return postId;
      });
    return deletedPost;
  }
};

export const getters = {
  orderedPosts(state) {
    let sortedPosts = state.posts.sort((a, b) => {
      return a.dateUpdated < b.dateUpdated;
    });
    return sortedPosts;
  }
};

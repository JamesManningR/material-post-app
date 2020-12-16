import ApiService from "../../services/api.service";

const api = new ApiService(process.env.VUE_APP_API_URL);

export const namespaced = true;

export const state = {
  posts: [],
  post: {}
};

export const mutations = {
  // init
  RESET_POST(state) {
    state.post = {};
  },
  RESET_POSTS(state) {
    state.posts = {};
  },
  // create
  ADD_POST(state, post) {
    state.posts.push(post);
  },
  // set
  SET_POST(state, post) {
    state.post = post;
  },
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  // update
  UPDATE_POST(state, updatedPost) {
    const index = state.posts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      state.posts.splice(index, 1, updatedPost);
    }
  },
  // delete
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
  async updatePost({ commit }, post) {
    const { title, body, id } = post;
    const postData = { title, body };
    const updatedPost = await api
      .updatePost(postData, id)
      .catch(err => {
        throw err.data.message;
      })
      .then(updatedPost => {
        commit("UPDATE_POST", updatedPost);
        return updatedPost;
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
